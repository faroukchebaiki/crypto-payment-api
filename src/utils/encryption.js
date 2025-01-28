import crypto from 'crypto';
import dotenv from 'dotenv';

dotenv.config();
const ALGORITHM = 'aes-256-cbc';
const SECRET_KEY = process.env.ENCRYPTION_KEY; // 32 bytes key
const IV = process.env.IV_KEY; // 16 bytes IV

export function encryptData(data) {
    const cipher = crypto.createCipheriv(ALGORITHM, Buffer.from(SECRET_KEY), Buffer.from(IV));
    let encrypted = cipher.update(data);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return encrypted.toString('hex');
}

export function decryptData(encryptedData) {
    const decipher = crypto.createDecipheriv(ALGORITHM, Buffer.from(SECRET_KEY), Buffer.from(IV));
    let decrypted = decipher.update(Buffer.from(encryptedData, 'hex'));
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}
