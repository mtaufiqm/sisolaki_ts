import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { AuthHelper } from "../helper/auth_helper";
import { client } from "../web/database";
import z from "zod";
import { ResponseError } from "../error/response_error";
import { KuesionerCcResponse } from "../model/penilaianccanswers_model";

export class PenilaianCcAnswerController {
    //penilai is unique 
    static async readAllQuestionerByPenilaian(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let penilaian_uuid: string = z.string().parse(req.params.uuid);
            let penilaiObj = await client.penilaiCC.findFirst({
                where: {
                    penilaiancc: penilaian_uuid,
                    pegawai: req.user!.username
                }
            });
            if(!penilaiObj){
                throw new ResponseError(404, "Not Found");
            }
            let result = await client.penilaianCcAnswer.findMany({
                where: {
                    penilaicc: penilaiObj.uuid
                },
                orderBy: [{candidatecc: "asc"}, {questionObj: {
                        order: "asc"
                    }}],
                include: {
                    questionObj: true,
                    candidateObj: {
                        include: {
                            pegawaiObj: true
                        }
                    }
                }
            });
            let returnValue: Map<string, KuesionerCcResponse> = new Map<string, KuesionerCcResponse>();
            result.forEach((el) => {
                let {candidateObj, ...extractedData} = el;
                if(!returnValue.has(el.candidatecc)){
                    returnValue.set(el.candidatecc, {
                        candidate: candidateObj,
                        answers: [extractedData]
                    });
                    return;
                }
                returnValue.get(el.candidatecc)!.answers.push(extractedData);
            });            
            if(!result) {
                throw new ResponseError(404, "Not Found");
            }
            let listReturnValue: KuesionerCcResponse[] = [];
            for(let [key,value] of returnValue.entries()){
                console.info(`candidateID ${key}`);
                listReturnValue.push(value);
            }
            resp.status(200).json(listReturnValue);
            return;
        } catch(err){
            next(err);
            return;
        }
    }

    static async updateAllAnswers(req: UserRequest, resp: Response, next: NextFunction){
        try {
            let validatedData = z.array(z.object({
                answer_uuid: z.string(),
                value: z.number().int().min(0).max(100)
            })).parse(req.body);
            let result = await client.$transaction(async (tx): Promise<boolean> => {
                for(let item of validatedData){
                    let resultItem = await tx.penilaianCcAnswer.update({
                        where: {
                            uuid: item.answer_uuid
                        },
                        data: {
                            value: item.value
                        }
                    });
                }
                return true;
            });
            if(!result){
                throw new ResponseError(400, "Error Occurred");
            }
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    }
}