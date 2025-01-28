const rippleLib = require('ripple-lib');

const createWallet = async () => {
  const api = new rippleLib.RippleAPI({ server: process.env.XRP_RPC_URL });
  await api.connect();

  const { address, secret } = api.generateAddress();
  await api.disconnect();

  return { address, privateKey: secret };
};

const getBalance = async (walletAddress) => {
  try {
    const api = new rippleLib.RippleAPI({ server: process.env.XRP_RPC_URL });
    await api.connect();
    const accountInfo = await api.getAccountInfo(walletAddress);
    await api.disconnect();
    return accountInfo.xrpBalance;
  } catch (error) {
    console.error('Error fetching XRP balance:', error);
    return 0;
  }
};

module.exports = { createWallet, getBalance };
