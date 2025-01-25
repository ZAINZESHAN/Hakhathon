import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectDB from './Models/db.js';
import cors from 'cors';
import AuthRouter from './Routes/AuthRouter.js'

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

app.get('/ping', (req, res) => {
    res.send('PONG');
});

//i am ready to parsing JSON request bodies 
app.use(express.json());
//i am ready to take a request from any where 
app.use(cors())
app.use('/auth', AuthRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
