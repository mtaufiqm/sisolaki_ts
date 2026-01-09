import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class CandidateCcController {
    static createCandidateCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateCandidateCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deleteCandidateCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=candidatecc_controller.d.ts.map