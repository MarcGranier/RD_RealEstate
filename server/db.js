import { DATABASE } from './config.js';
import mongoose from 'mongoose';

const dbConnect = async () => {
	try {
		const conn = await mongoose.connect(DATABASE);
		console.log(`MongoDB connected: ${conn.connection.host}`.magenta.bold);
	} catch (error) {
		console.log(`Error: ${error.message}`);
		process.exit(1);
	}
};

export default dbConnect;
