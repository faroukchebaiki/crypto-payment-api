import dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT || 5000,
    mongoURI: process.env.MONGO_URI,
    encryptionKey: process.env.ENCRYPTION_KEY,
    ivKey: process.env.IV_KEY
};
