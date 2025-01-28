const btcService = require('./btcService');
const ethService = require('./ethService');
const solService = require('./solService');
const bnbService = require('./bnbService');
const xrpService = require('./xrpService');

const createTemporaryWallet = async (cryptoType) => {
  switch (cryptoType.toUpperCase()) {
    case 'BTC':
      return await btcService.createWallet();
    case 'ETH':
      return await ethService.createWallet();
    case 'SOL':
      return await solService.createWallet();
    case 'BNB':
      return await bnbService.createWallet();
    case 'XRP':
      return await xrpService.createWallet();
    default:
      throw new Error('Unsupported cryptocurrency');
  }
};

const getBalance = async (cryptoType, walletAddress) => {
  switch (cryptoType.toUpperCase()) {
    case 'BTC':
      return await btcService.getBalance(walletAddress);
    case 'ETH':
      return await ethService.getBalance(walletAddress);
    case 'SOL':
      return await solService.getBalance(walletAddress);
    case 'BNB':
      return await bnbService.getBalance(walletAddress);
    case 'XRP':
      return await xrpService.getBalance(walletAddress);
    default:
      throw new Error('Unsupported cryptocurrency');
  }
};

module.exports = { createTemporaryWallet, getBalance };
