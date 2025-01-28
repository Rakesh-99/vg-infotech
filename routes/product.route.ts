import express from "express";
import { addProduct, getAllProducts } from "../controller/product.controller";
const productRoute = express.Router();






productRoute.post("/add-product", addProduct)
    .get("/get-products", getAllProducts)
    .get("get-product/:id")



export default productRoute;