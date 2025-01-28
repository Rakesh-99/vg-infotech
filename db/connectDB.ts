import mongoose from "mongoose";


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL!);
        console.log("DD connected");
    } catch (error) {
        console.log("Error -> ", error);
    }
};
export default connectDB;