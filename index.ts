import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT || 8000;
import connectDB from './db/connectDB';
connectDB()
import errorMiddleware from './middleware/errorMIddleware';
import productRoute from './routes/product.route';



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", productRoute);
app.use(errorMiddleware);



app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`);
})