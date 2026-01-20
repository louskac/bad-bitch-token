import { useState, useEffect } from 'react';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import {
    getAssociatedTokenAddress,
    getAccount,
    TokenAccountNotFoundError,
    TokenInvalidAccountOwnerError,
    TOKEN_2022_PROGRAM_ID
} from '@solana/spl-token';
import { TOKEN_CA } from '../constants';

export const useUserBalance = () => {
    const { connection } = useConnection();
    const { publicKey, connected } = useWallet();
    const [balance, setBalance] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    const fetchBalance = async () => {
        if (!publicKey || !connected) {
            setBalance(null);
            return;
        }

        setLoading(true);
        try {
            const tokenMint = new PublicKey(TOKEN_CA);

            // Get decimals
            let decimals = 9;
            try {
                const mintInfo = await connection.getParsedAccountInfo(tokenMint);
                // @ts-ignore
                decimals = mintInfo.value?.data?.parsed?.info?.decimals ?? 9;
            } catch (e) {
                console.error('Error fetching mint info for balance:', e);
            }

            const ata = await getAssociatedTokenAddress(tokenMint, publicKey, false, TOKEN_2022_PROGRAM_ID);
            const account = await getAccount(connection, ata, 'processed', TOKEN_2022_PROGRAM_ID);
            setBalance(Number(account.amount) / (10 ** decimals));
        } catch (error) {
            if (error instanceof TokenAccountNotFoundError || error instanceof TokenInvalidAccountOwnerError) {
                setBalance(0);
            } else {
                console.error('Error fetching balance in hook:', error);
                setBalance(null);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBalance();
        const interval = setInterval(fetchBalance, 30000); // 30s refresh
        return () => clearInterval(interval);
    }, [publicKey, connected, connection]);

    return { balance, loading, refresh: fetchBalance };
};
