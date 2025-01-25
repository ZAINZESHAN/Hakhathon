import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './Models/db.js';
import cors from 'cors';
import AuthRouter from './Routes/AuthRouter.js';
import ProductRouter from './Routes/ProductRouter.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.get('/ping', (req, res) => {
    res.send('PONG');
});
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

// Catch-all route for undefined endpoints
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
