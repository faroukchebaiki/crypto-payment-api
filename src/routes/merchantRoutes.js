import express from 'express';
import { registerMerchant, getMerchant } from '../controllers/merchantController.js';

const router = express.Router();

router.post('/register', registerMerchant);
router.get('/:merchantId', getMerchant);

export default router;
