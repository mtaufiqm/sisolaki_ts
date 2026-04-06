import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class EOMPenilaianController {
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static getByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static create(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=eompenilaian_controller.d.ts.map