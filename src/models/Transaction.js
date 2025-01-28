import mongoose from 'mongoose';

const TransactionSchema = new mongoose.Schema({
    transactionId: { type: String, required: true, unique: true },
    merchantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Merchant', required: true },
    cryptoType: { type: String, enum: ['btc', 'eth', 'sol', 'bnb', 'xrp'], required: true },
    amount: { type: Number, required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' },
    fromAddress: { type: String },
    toAddress: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    expiresAt: { type: Date, index: { expires: '24h' } } // Auto-delete after 24h
});

export default mongoose.model('Transaction', TransactionSchema);
