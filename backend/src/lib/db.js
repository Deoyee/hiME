import mongoose from "mongoose";

export const connectDB = async () => {
    try{
        const { MONGO_URL } = process.env;
        if(!MONGO_URL){
            throw new Error("MONGO_URL is not defined in environment variables");
        }

        const conn = await mongoose.connect(MONGO_URL);
        console.log("Database connected successfully", conn.connection.host);
    } catch(error){
        console.error("Database connection failed", error);
        process.exit(1); // 1 stands for failure, 0 stands for success
    }
}