import { NextFunction, Request, Response } from "express";
import { json } from "stream/consumers";



const errorMiddleware = (error: Error & { statusCode: number }, req: Request, res: Response, next: NextFunction) => {
    error.message = error.message || "Internal server Eroror";
    error.statusCode = error.statusCode || 500;

    res.status(error.statusCode).json({
        success: false,
        mesaage: error.message
    })
};
export default errorMiddleware;