import mongoose from 'mongoose';

const MerchantSchema = new mongoose.Schema({
    merchantId: { type: String, required: true, unique: true },
    apiKey: { type: String, required: true, unique: true },
    wallets: { 
        btc: [{ type: String }], // Bitcoin addresses
        eth: [{ type: String }], // Ethereum addresses
        sol: [{ type: String }], // Solana addresses
        bnb: [{ type: String }], // Binance Coin addresses
        xrp: [{ type: String }]  // Ripple addresses
    },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Merchant', MerchantSchema);
