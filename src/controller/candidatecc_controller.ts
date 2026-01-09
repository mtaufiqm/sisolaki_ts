import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { AuthHelper } from "../helper/auth_helper";
import { CreatePenilaianCcRequest, UpdatePenilaianCcRequest } from "../model/penilaiancc_model";
import { Validation } from "../validator/validation";
import { PenilaianCcValidation } from "../validator/penilaiancc_validation";
import { client } from "../web/database";
import z from "zod";
import { PenilaianCC } from "../generated/prisma/client";
import { ResponseError } from "../error/response_error";
import { CreateCandidateCcRequest, UpdateCandidateCcRequest } from "../model/candidatecc_model";
import { CandidateCcValidation } from "../validator/candidatecc_validation";

export class CandidateCcController {

    static async createCandidateCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let penilaian_uuid: string = z.string().parse(req.params.uuid);
            let penilaianCcObj = await client.penilaianCC.findUnique({where: {uuid: penilaian_uuid}});
            if(!penilaianCcObj){
                throw new ResponseError(404, "Penilaian Not Found");
            }
            if(penilaianCcObj.status >= 1){
                throw new ResponseError(403, "Forbidden");
            }
            let jsonBody = req.body as CreateCandidateCcRequest;
            jsonBody.penilaiancc = penilaian_uuid;
            let validatedData = Validation.validate(CandidateCcValidation.CREATE,jsonBody);
            let result = await client.candidateCC.create({
                data: validatedData
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async updateCandidateCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let candidateObj = await client.candidateCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if(!candidateObj){
                throw new ResponseError(404, "Not Found");
            }
            let jsonBody = req.body as UpdateCandidateCcRequest;
            let validatedData = Validation.validate(CandidateCcValidation.UPDATE,jsonBody);
            if(!uuid){
                throw new ResponseError(400, `Empty Field`);
            }
            let result = await client.candidateCC.update({
                where: {
                    uuid: uuid
                },
                data: validatedData
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async deleteCandidateCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let candidateObj = await client.candidateCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if(!candidateObj){
                throw new ResponseError(404, "Not Found");
            }
            let result = await client.candidateCC.delete({
                where: {
                    uuid: uuid
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