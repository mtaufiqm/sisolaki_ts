import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class PegawaiController {
    static readAllActive(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static UpdatePenilaianCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static deletePenilaianCC(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=pegawai_controller.d.ts.map