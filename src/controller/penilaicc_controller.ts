import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { AuthHelper } from "../helper/auth_helper";
import { client } from "../web/database";
import z from "zod";

export class PenilaiCcController {
    static async readAllByPenilaianYear(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let tahun: number  = z.coerce.number().int().nonnegative().max(9999).default(new Date().getFullYear()).parse(req.query.year);
            let result = await client.penilaiCC.findMany({
                where: {
                    penilaianObj: {
                        tahun: tahun
                    }
                },
                include: {
                    pegawaiObj: true
                },
                orderBy: {
                    pegawaiObj: {
                        fullname: "asc"
                    }
                }
            });
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
            return;
        }
    } 

    static async readAllByPenilaianUuid(req: UserRequest, resp: Response, next: NextFunction){
        try {
            AuthHelper.isMinimalPegawaiThrow(req);
            let uuid: string  = z.string().parse(req.params.uuid);
            let result = await client.penilaiCC.findMany({
                where: {
                    penilaiancc: uuid
                },
                include: {
                    pegawaiObj: true
                },
                orderBy: {
                    pegawaiObj: {
                        fullname: "asc"
                    }
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