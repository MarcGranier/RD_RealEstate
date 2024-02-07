import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import colors from 'colors';
import mongoose from 'mongoose';
import dbConnect from './db.js';
import { PORT } from './config.js';
import authRoutes from './routes/auth.js';

const app = express();

//db
dbConnect();

// middlewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());
//routes middleware
app.use('/api', authRoutes);

app.listen(PORT, () =>
	console.log(`Server running on port ${PORT}`.yellow.bold)
);
