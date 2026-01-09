import { NextFunction, Request, Response } from "express";
import { UserLoginRequest } from "../model/user_model";
import { UserValidation } from "../validator/user_validation";
import { Validation } from "../validator/validation";
import { UserService } from "../service/user_service";
import { JWTHelper } from "../helper/jwt_helper";


export class AuthController {
    //post
    static async login(req: Request, resp: Response, next: NextFunction): Promise<void> {
        try {
            let jsonBody = req.body as UserLoginRequest;
            let data = Validation.validate(UserValidation.LOGIN,jsonBody);
            console.info("EXECUTED 0");
            let result = await UserService.login(data);
            console.info("EXECUTED 1");
            let jwtToken = await JWTHelper.create(result);
            console.info("EXECUTED 2");
            resp.status(200).json({
                token: jwtToken
            });
            return;
        } catch(err){
            next(err);
        }
    }
}