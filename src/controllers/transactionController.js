const Transaction = require('../models/Transaction');
const Merchant = require('../models/Merchant');
const walletService = require('../services/walletService');

const createTransaction = async (req, res) => {
  try {
    const { merchantId, amount, cryptoType } = req.body;

    // Validate merchant
    const merchant = await Merchant.findById(merchantId);
    if (!merchant) return res.status(404).json({ error: 'Merchant not found' });

    // Generate a unique transaction wallet
    const transactionWallet = await walletService.createTemporaryWallet(cryptoType);

    // Create transaction
    const newTransaction = new Transaction({
      merchantId,
      amount,
      cryptoType,
      walletAddress: transactionWallet.address,
      status: 'PENDING',
    });

    await newTransaction.save();

    return res.status(201).json({
      message: 'Transaction created successfully',
      transactionId: newTransaction._id,
      walletAddress: transactionWallet.address,
    });
  } catch (error) {
    console.error('Error creating transaction:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const checkTransactionStatus = async (req, res) => {
  try {
    const { transactionId } = req.params;

    const transaction = await Transaction.findById(transactionId);
    if (!transaction) return res.status(404).json({ error: 'Transaction not found' });

    res.json({
      transactionId: transaction._id,
      status: transaction.status,
      amount: transaction.amount,
      cryptoType: transaction.cryptoType,
    });
  } catch (error) {
    console.error('Error checking transaction status:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createTransaction,
  checkTransactionStatus,
};
