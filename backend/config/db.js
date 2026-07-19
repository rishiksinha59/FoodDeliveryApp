import mongoose from "mongoose";
import { seedDatabase } from "./seed.js";
export const connectDB=async()=>{
    const rawURI = process.env.MONGODB_URI;
    const maskedURI = rawURI ? rawURI.replace(/:([^@]+)@/, ":******@") : 'mongodb://localhost:27017/FoodDeliveryApp';
    console.log('Connecting to database using:', maskedURI);

    try {
        await mongoose.connect(rawURI || 'mongodb://localhost:27017/FoodDeliveryApp');
        console.log('Connected to database successfully');
        await seedDatabase();
    } catch (err) {
        console.error('Database connection failed:', err.message);
        throw err;
    }
}