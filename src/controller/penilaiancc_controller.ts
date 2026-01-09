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
import { CreatePenilaianCcAnswer } from "../model/penilaianccanswers_model";

export class PenilaianCcController {

    static async createPenilaianCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let jsonBody = req.body as CreatePenilaianCcRequest;
            let validatedData = Validation.validate(PenilaianCcValidation.CREATE,jsonBody);
            let result = await client.penilaianCC.create({
                data: validatedData
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async updatePenilaianCC(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let penilaianObj = await client.penilaianCC.findUnique({
                where: {
                    uuid: uuid
                },
                include: {
                    penilaiObj: true,
                    candidateObj: true
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
            //if marked dimulai, it cannot be rollback
            if(validatedData.status != null && (validatedData.status <= penilaianObj.status)){
                throw new ResponseError(403, "Forbidden");
            }

            if(validatedData.status != null && validatedData.status === 1){
                //if updated to dimulai, fill all penilaianccanswer for all penilai and candidate 
                let allQuestions = await client.penilaianCcQuestions.findMany({
                    where: {
                        is_active: true
                    }
                });
                let insertData: CreatePenilaianCcAnswer[] = [];
                penilaianObj.candidateObj.forEach((el) => {
                    penilaianObj.penilaiObj.forEach((el2) => {
                        allQuestions.forEach((el3) => {
                            insertData.push({
                                question: el3.uuid,
                                penilaicc: el2.uuid,
                                candidatecc: el.uuid
                            });
                        });
                    });
                });
                let resultFill = await client.penilaianCcAnswer.createManyAndReturn({
                    data: insertData
                });
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

    static async readAll(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            //uuid is penilaiancc_uuid
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await client.penilaianCC.findMany({
                orderBy: {
                    tahun: "desc"
                },
                include: {
                    penilaiObj: true,
                    candidateObj: true
                }
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async readAllByPenilai(req: UserRequest, resp: Response, next: NextFunction){
        try {
            // AuthHelper.isMinimalPegawaiThrow(req);
            //uuid is penilaiancc_uuid
            let result = await client.penilaianCC.findMany({
                orderBy: {
                    tahun: "desc"
                },
                include: {
                    penilaiObj: true,
                    candidateObj: true
                },
                where: {
                    penilaiObj: {
                        some: {
                            pegawai: req.user!.username
                        }
                    },
                    status: 1 //SUDAH DIMULAI  
                }
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            console.info(err);
            next(err);
            return;
        }
    }

    static async readAllCandidateByPenilaian(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            //uuid is penilaiancc_uuid
            let uuid: string = z.string().parse(req.params.uuid);
            let result = await client.candidateCC.findMany({
                where: {
                    penilaiancc: uuid
                },
                orderBy: {
                    pegawaiObj: {
                        fullname: "asc"
                    }
                },
                include: {
                    pegawaiObj: true
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