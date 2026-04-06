import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class PenilaiCcController {
    static readAllByPenilaianYear(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static readAllByPenilaianUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=penilaicc_controller.d.ts.map