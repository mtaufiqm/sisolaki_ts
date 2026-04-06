import { v1 } from "uuid";
import { ResponseError } from "../error/response_error";
import { DateTimeHelper } from "../helper/datetime_helper";
import { CreateEOMPenilaianRequest, EOMPenilaianResponse, toEOMPenilaianResponse, UpdateEOMPenilaianRequest } from "../model/eompenilaian_model";
import { client } from "../web/database";

export class EOMPenilaianService {
    static async getByUuid(uuid: string): Promise<EOMPenilaianResponse> {
        let result = await client.eOMPenilaian.findUnique({
            where: {
                uuid: uuid
            }
        });
        if(!result){
            throw new ResponseError(404, "Not Found");
        }
        return toEOMPenilaianResponse(result);
    }

    static async readAll(args?: {limit?: number; status?: number;}): Promise<EOMPenilaianResponse[]> {
        let result: EOMPenilaianResponse[] = await client.eOMPenilaian.findMany(args?
            {...(args.limit?{take:args.limit}:{}),...(args.status?{where: {status: args.status}}:{}), orderBy: {periode: "desc"}}
            :{orderBy: {periode: "desc"}});
        return result.map((el) => {
            return toEOMPenilaianResponse(el);
        });
    }

    static async updateByUuid(uuid: string, data: UpdateEOMPenilaianRequest): Promise<EOMPenilaianResponse> {
        data.last_updated = DateTimeHelper.getCurrentLocalTime();
        if(!uuid){
            throw new ResponseError(400, "Empty Field");
        }
        let result = await client.eOMPenilaian.update({
            where: {
                uuid: uuid
            },
            data: data
        });
        return toEOMPenilaianResponse(result);
    }

    static async create(data: CreateEOMPenilaianRequest): Promise<EOMPenilaianResponse> {
        data.uuid = v1();
        data.last_updated = DateTimeHelper.getCurrentLocalTime();
        data.created_at = DateTimeHelper.getCurrentLocalTime();
        //first status automatically 0
        data.status = 0;
        let result = await client.eOMPenilaian.create({
            data: data
        });
        return toEOMPenilaianResponse(result);
    }

    
    static async deleteByUuid(uuid: string): Promise<EOMPenilaianResponse> {
        if(!uuid){
            throw new ResponseError(404, "Empty Field");
        }
        let result = await client.eOMPenilaian.delete({
            where: {
                uuid: uuid
            }
        });
        return toEOMPenilaianResponse(result);
    }
}