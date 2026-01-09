import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { AuthHelper } from "../helper/auth_helper";
import { client } from "../web/database";
import z from "zod";

export class PenilaianCcQuestionsController {
    static async readAll(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await client.penilaianCcQuestions.findMany({
                where: {
                    is_active: true
                },
                orderBy: {
                    order: "asc"
                }
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}