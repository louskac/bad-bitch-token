import { useState, useEffect } from 'react';
import { useConnection } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { TOKEN_CA } from '../constants';

export interface TokenData {
    price: number | null;
    mktCap: number | null;
    h1Activity: number | null;
    totalBurned: number | null;
    chainInfo?: {
        transactionCount: number;
        blockHeight: number;
    } | null;
    ready: boolean;
}

const DEXSCREENER_API = `https://api.dexscreener.com/latest/dex/tokens/${TOKEN_CA}`;

export const useTokenData = () => {
    const { connection } = useConnection();
    const [data, setData] = useState<TokenData>({
        price: null,
        mktCap: null,
        h1Activity: null,
        totalBurned: null,
        chainInfo: null,
        ready: false,
    });

    const fetchData = async () => {
        let price = null;
        let mktCap = null;
        let h1Activity = null;
        let totalBurned = null;
        let chainInfo = null;

        console.log('Fetching token data from DexScreener...');

        try {
            const dexRes = await fetch(DEXSCREENER_API);
            if (dexRes.ok) {
                const dexJson = await dexRes.json();
                const pair = dexJson.pairs?.[0];
                if (pair) {
                    price = parseFloat(pair.priceUsd);
                    mktCap = pair.fdv || pair.marketCap;

                    // Sum buys and sells for the last hour
                    if (pair.txns?.h1) {
                        h1Activity = (pair.txns.h1.buys || 0) + (pair.txns.h1.sells || 0);
                    }

                    console.log(`Fetched price ($${price}), mkt cap ($${mktCap}), and 1h activity (${h1Activity}) from DexScreener`);
                }
            }
        } catch (e) {
            console.warn('DexScreener fetch failed:', e);
        }

        // Fetch Chain Info and Total Burned using Connection object (matches Altar logic)
        try {
            const tokenMint = new PublicKey(TOKEN_CA);

            // 1. Get Slot
            try {
                const slot = await connection.getSlot();
                chainInfo = {
                    transactionCount: slot * 1250, // Approximation
                    blockHeight: slot
                };
            } catch (e) {
                console.warn('Slot fetch failed:', e);
            }

            // 2. Get Supply
            try {
                const supplyInfo = await connection.getTokenSupply(tokenMint);
                const decimals = supplyInfo.value.decimals ?? 9;
                const currentSupply = Number(supplyInfo.value.amount) / (10 ** decimals);
                const initialSupply = 1_000_000_000; // 1B initial supply
                totalBurned = Math.max(0, initialSupply - currentSupply);
                console.log(`Fetched total burned from connection: ${totalBurned}`);
            } catch (e) {
                console.warn('Supply fetch failed:', e);
            }

        } catch (e) {
            console.warn('Solana connection fetches failed:', e);
        }

        setData({
            price,
            mktCap,
            h1Activity,
            totalBurned,
            chainInfo,
            ready: true,
        });
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 30000);
        return () => clearInterval(interval);
    }, [connection]);

    return data;
};
