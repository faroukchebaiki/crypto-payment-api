import express from 'express';
import { createTransaction, getTransactionStatus } from '../controllers/transactionController.js';

const router = express.Router();

router.post('/create', createTransaction);
router.get('/:transactionId', getTransactionStatus);

export default router;
