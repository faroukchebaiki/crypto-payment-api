import cron from 'node-cron';
import { checkPendingTransactions } from '../services/walletService.js';

// Runs every 5 minutes
cron.schedule('*/5 * * * *', async () => {
    console.log('Checking pending transactions...');
    await checkPendingTransactions();
});
