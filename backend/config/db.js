import mongoose from "mongoose";
import { seedDatabase } from "./seed.js";
export const connectDB=async()=>{
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/FoodDeliveryApp').then(()=>console.log('connected to database'));
    await seedDatabase();
}