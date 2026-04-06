import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
export declare class PenilaianCcAnswerController {
    static readAllQuestionerByPenilaian(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
    static updateAllAnswers(req: UserRequest, resp: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=penilaianccanswers_controller.d.ts.map