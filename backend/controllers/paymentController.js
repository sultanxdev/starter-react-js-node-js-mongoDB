import Razorpay from 'razorpay';
import crypto from 'crypto';
import User from '../models/User.js';

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || '',
    key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

// @desc    Create a Razorpay order
// @route   POST /api/payments/order
// @access  Private
const createOrder = async (req, res) => {
    const { amount, currency = 'INR' } = req.body;

    const options = {
        amount: amount * 100, // amount in the smallest currency unit (paise for INR)
        currency,
        receipt: `receipt_${Date.now()}`,
    };

    try {
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error('Razorpay Error:', error);
        res.status(500);
        throw new Error('Failed to create Razorpay order');
    }
};

// @desc    Verify Razorpay payment signature
// @route   POST /api/payments/verify
// @access  Private
const verifyPayment = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + '|' + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
        .update(body.toString())
        .digest('hex');

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Update user subscription status
        const user = await User.findById(req.user._id);
        if (user) {
            user.subscriptionStatus = 'active';
            await user.save();
        }

        res.json({ message: 'Payment verified successfully', success: true });
    } else {
        res.status(400);
        throw new Error('Invalid signature, payment verification failed');
    }
};

// @desc    Handle Razorpay Webhooks
// @route   POST /api/payments/webhook
// @access  Public
const handleWebhook = async (req, res) => {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET || '';

    const signature = req.headers['x-razorpay-signature'];

    const expectedSignature = crypto
        .createHmac('sha256', secret)
        .update(JSON.stringify(req.body))
        .digest('hex');

    if (expectedSignature === signature) {
        const event = req.body.event;

        if (event === 'payment.captured') {
            // Logic for capturing payment via webhook if needed
            console.log('Payment Captured Webhook:', req.body.payload.payment.entity);
        }

        res.json({ status: 'ok' });
    } else {
        res.status(400).send('Invalid webhook signature');
    }
};

export { createOrder, verifyPayment, handleWebhook };
