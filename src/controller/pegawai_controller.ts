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

export class PegawaiController {
    static async readAllActive(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let result = await client.pegawai.findMany({
                where: {
                    status_pegawai: 0
                },
                orderBy: {
                    fullname: "asc"
                }
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async UpdatePenilaianCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let penilaianObj = await client.penilaianCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if(!penilaianObj){
                throw new ResponseError(404, "Not Found");
            }
            let jsonBody = req.body as UpdatePenilaianCcRequest;
            let validatedData = Validation.validate(PenilaianCcValidation.UPDATE,jsonBody);
            if(!uuid){
                throw new ResponseError(400, `Empty Field`);
            }
            let result = await client.penilaianCC.update({
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

    static async deletePenilaianCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let penilaianObj = await client.penilaianCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if(!penilaianObj){
                throw new ResponseError(404, "Not Found");
            }
            let result = await client.penilaianCC.delete({
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