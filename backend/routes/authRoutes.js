import express from 'express';
import { loginValidator, registerValidator } from '../middleware/validatorMiddleware.js';
import {
    registerUser,
    authUser,
    googleAuth,
    getUserProfile,
    updateUserProfile,
} from '../controllers/authController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', registerValidator, registerUser);
router.post('/login', loginValidator, authUser);
router.post('/google', googleAuth);
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);

export default router;
