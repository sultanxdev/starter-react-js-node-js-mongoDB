import express from 'express';
import { generateAiResponse } from '../controllers/aiController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/generate', protect, generateAiResponse);

export default router;
