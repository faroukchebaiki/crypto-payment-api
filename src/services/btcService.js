const bitcoin = require('bitcoinjs-lib');
const axios = require('axios');

const createWallet = async () => {
  const keyPair = bitcoin.ECPair.makeRandom();
  const { address } = bitcoin.payments.p2wpkh({ pubkey: keyPair.publicKey });

  return {
    address,
    privateKey: keyPair.toWIF(),
  };
};

const getBalance = async (walletAddress) => {
  try {
    const response = await axios.get(`https://blockchain.info/q/addressbalance/${walletAddress}`);
    return response.data / 100000000; // Convert Satoshis to BTC
  } catch (error) {
    console.error('Error fetching BTC balance:', error);
    return 0;
  }
};

module.exports = { createWallet, getBalance };
