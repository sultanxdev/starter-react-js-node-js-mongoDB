import { GoogleGenerativeAI } from '@google/generative-ai';

// Use environment variable for API Key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

// @desc    Generate response from Gemini AI
// @route   POST /api/ai/generate
// @access  Private
const generateAiResponse = async (req, res) => {
    const { prompt } = req.body;

    if (!prompt) {
        res.status(400);
        throw new Error('Prompt is required');
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        res.json({ result: text });
    } catch (error) {
        console.error('AI Error:', error);
        res.status(500);
        throw new Error('Failed to generate AI response');
    }
};

export { generateAiResponse };
