const Web3 = require('web3');
const web3 = new Web3(process.env.ETH_RPC_URL);

const createWallet = async () => {
  const account = web3.eth.accounts.create();
  return {
    address: account.address,
    privateKey: account.privateKey,
  };
};

const getBalance = async (walletAddress) => {
  try {
    const balance = await web3.eth.getBalance(walletAddress);
    return web3.utils.fromWei(balance, 'ether');
  } catch (error) {
    console.error('Error fetching ETH balance:', error);
    return 0;
  }
};

module.exports = { createWallet, getBalance };
