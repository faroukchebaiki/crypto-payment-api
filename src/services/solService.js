const { Keypair, Connection, clusterApiUrl, LAMPORTS_PER_SOL } = require('@solana/web3.js');

const createWallet = async () => {
  const keypair = Keypair.generate();
  return {
    address: keypair.publicKey.toBase58(),
    privateKey: keypair.secretKey.toString(),
  };
};

const getBalance = async (walletAddress) => {
  try {
    const connection = new Connection(clusterApiUrl('mainnet-beta'));
    const balance = await connection.getBalance(walletAddress);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error('Error fetching SOL balance:', error);
    return 0;
  }
};

module.exports = { createWallet, getBalance };
