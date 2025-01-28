import ErrorHandler from "../utils/ErrorHandler";
import expressAsyncHandler from "express-async-handler";
import productModel from "../model/product.mode";
import { NextFunction, Request, Response } from "express";




export const addProduct = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const { productName, quantity, pricePerUnit } = req.body;

    if (!productName || !quantity || !pricePerUnit) {
        return next(new ErrorHandler(400, "All fields are required!"));
    }

    const newProd = new productModel({
        productName,
        quantity,
        pricePerUnit
    });
    newProd.save();

    return res.status(200).json({
        message: "product has been added ",
        newProd
    })
});

export const getAllProducts = expressAsyncHandler(async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    const getAllProducts = await productModel.find({});

    if (!getAllProducts) {
        return next(new ErrorHandler(404, "Product not found!"))
    };

    // perform calculation on products :


    //total price of each product : 
    const product1TotalPrice = getAllProducts[0].quantity * getAllProducts[0].pricePerUnit;
    const product2TotalPrice = getAllProducts[1].quantity * getAllProducts[1].pricePerUnit
    const product3TotalPrice = getAllProducts[2].quantity * getAllProducts[2].pricePerUnit


    const product1Quantity = getAllProducts[0].quantity;
    const product2Quantity = getAllProducts[1].quantity;
    const product3Quantity = getAllProducts[2].quantity;

    // Calculate the total quantity : 
    const totalQuantity = product1Quantity + product2Quantity + product3Quantity;

    // Overall total price : 
    const overAllTotalPrice = product1TotalPrice + product2TotalPrice + product3TotalPrice;


    let overAllPriceAfterDiscount

    if (totalQuantity > 5000) {
        // 5% discount applied on total price : 
        let discountPrice = 0.05 * overAllTotalPrice;
        overAllPriceAfterDiscount = overAllTotalPrice - discountPrice;
    };

    // 5% tax is added to post discount : 
    const gstDiscount = 0.05 * overAllPriceAfterDiscount!;

    const priceAfterGst = overAllPriceAfterDiscount! + gstDiscount;


    return res.status(200).json({
        product1TotalPrice,
        product2TotalPrice,
        product3TotalPrice,
        totalQuantity,
        overAllTotalPrice,
        overAllPriceAfterDiscount,
        priceAfterGst
    })
})

