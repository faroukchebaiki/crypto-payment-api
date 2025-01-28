const Merchant = require('../models/Merchant');
const crypto = require('crypto');

const onboardMerchant = async (req, res) => {
  try {
    const { name, email, wallets } = req.body;

    if (!wallets || wallets.length === 0) {
      return res.status(400).json({ error: 'At least one wallet address is required' });
    }

    // Generate API key
    const apiKey = crypto.randomBytes(32).toString('hex');

    // Create a new merchant
    const newMerchant = new Merchant({
      name,
      email,
      apiKey,
      wallets,
    });

    await newMerchant.save();

    return res.status(201).json({
      message: 'Merchant onboarded successfully',
      merchantId: newMerchant._id,
      apiKey: newMerchant.apiKey,
    });
  } catch (error) {
    console.error('Error onboarding merchant:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const validateApiKey = async (req, res, next) => {
  try {
    const apiKey = req.headers['x-api-key'];

    if (!apiKey) {
      return res.status(401).json({ error: 'API key is required' });
    }

    const merchant = await Merchant.findOne({ apiKey });
    if (!merchant) {
      return res.status(401).json({ error: 'Invalid API key' });
    }

    req.merchant = merchant;
    next();
  } catch (error) {
    console.error('Error validating API key:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  onboardMerchant,
  validateApiKey,
};
