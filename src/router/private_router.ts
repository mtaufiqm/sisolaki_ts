import express from "express"
import { authMiddleware } from "../middleware/auth_middleware";


export const privateRouter = express.Router();
//auth_middleware
privateRouter.use("/api",authMiddleware);