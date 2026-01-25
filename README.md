# SaaS Starter Kit

A high-performance, modular SaaS starter kit built with React, Node.js, and MongoDB.

## Features
- **Modern UI**: Clean, premium design using Tailwind CSS (Emerald & Slate theme).
- **Authentication**: JWT-based email/password auth and Google Login integration.
- **AI Integration**: Out-of-the-box Google Gemini AI assistant.
- **Payments**: Razorpay integration for INR payments (UPI, Cards, NetBanking).
- **Security**: Rate limiting, Helmet, and secured routes.
- **Database**: MongoDB with Mongoose for minimal persistence.

## Tech Stack
- **Frontend**: Vite, React, Tailwind CSS, Framer Motion, Axios.
- **Backend**: Node.js, Express, Mongoose, Razorpay SDK, Gemini AI SDK.

## Setup Instructions

### Backend
1. `cd backend`
2. `npm install`
3. Create a `.env` file based on `.env.example` and fill in your credentials:
   - `MONGO_URI`
   - `JWT_SECRET`
   - `GEMINI_API_KEY`
   - `RAZORPAY_KEY_ID`
   - `RAZORPAY_KEY_SECRET`
4. `npm start` or `node server.js`

### Frontend
1. `cd frontend`
2. `npm install`
3. Create a `.env` file:
   - `VITE_API_URL=http://localhost:5000/api`
4. `npm run dev`

## Folder Structure
The project follows a modular design for scalability:
- **`backend/`**: Routes, controllers, models, and config are separated.
- **`frontend/`**: Components, pages, context, and api layers are separated.

## License
MIT
