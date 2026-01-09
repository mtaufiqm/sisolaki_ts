import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class PenilaianCcController {
    static createPenilaianCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updatePenilaianCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deletePenilaianCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAllCandidateByPenilaian(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=penilaiancc_controller.d.ts.map