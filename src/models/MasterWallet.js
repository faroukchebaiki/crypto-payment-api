import mongoose from 'mongoose';

const MasterWalletSchema = new mongoose.Schema({
    cryptoType: { type: String, enum: ['btc', 'eth', 'sol', 'bnb', 'xrp'], required: true, unique: true },
    address: { type: String, required: true },
    privateKeyEncrypted: { type: String, required: true }, // Encrypted private key
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('MasterWallet', MasterWalletSchema);
