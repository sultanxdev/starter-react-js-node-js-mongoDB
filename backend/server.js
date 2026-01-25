import 'dotenv/config'; // Must be first to load env vars before other imports
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import connectDB from './config/db.js';
import { errorHandler, notFound } from './middleware/errorMiddleware.js';
import { apiLimiter } from './middleware/rateLimitMiddleware.js';
import validateEnv from './utils/validateEnv.js';
import authRoutes from './routes/authRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

// Validate Environment
validateEnv();

// Connect to Database
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*', // For development, specific domain in production
    credentials: true
}));
app.use(helmet());
app.use(morgan('dev'));
app.use('/api', apiLimiter);

// Routes
app.get('/', (req, res) => {
    res.json({ message: 'SaaS Starter API is running...' });
});

// Auth Routes
app.use('/api/auth', authRoutes);

// AI Routes
app.use('/api/ai', aiRoutes);

// Payment Routes
app.use('/api/payments', paymentRoutes);

// Error Handling
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});