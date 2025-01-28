import mongoose from "mongoose";



// Product schema : 
const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: [true, "productName is required!"]
    },
    quantity: {
        type: Number,
        required: [true, "product quantity is required!"]
    },
    pricePerUnit: {
        type: Number,
        required: [true, "Price per unit is required!"]
    }
});

// product model : 
const productModel = mongoose.model("Product", productSchema);
export default productModel;