const validateEnv = () => {
    const requiredEnv = [
        'MONGO_URI',
        'JWT_SECRET',
        'PORT',
        'NODE_ENV'
    ];

    const missingEnv = requiredEnv.filter(env => !process.env[env]);

    if (missingEnv.length > 0) {
        console.error('❌ Missing required environment variables:', missingEnv.join(', '));
        process.exit(1);
    }
};

export default validateEnv;
