import z from "zod";
import { ResponseError } from "../error/response_error";


export class Validation {
    static validate<T>(validator: z.ZodType, data: T): T {
        let result = validator.safeParse(data);
        if(result.error){
            throw new ResponseError(400,`Error Validation ${result.error}`);
        }
        return result.data as T;
    }
}