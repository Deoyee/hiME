import mongoose from 'mongoose';

export const connectDB = async () => {
    try{ 
       const conn = await mongoose.connect(process.env.MONGO_URL)
       console.log("Mongo db connected successfully", conn.connection.host) 
    } 
    catch(error){
        console.error("Error connecting to Mongo", error);
        process.exit(1); // Exit process with failure 1 = fail, 0 = success
    }
};

