import { NextFunction, Response } from "express";
import { UserRequest } from "../model/user_model";
import { AuthHelper } from "../helper/auth_helper";
import { EOMPenilaianService } from "../service/eompenilaian_service";
import z from "zod";
import { CreateEOMPenilaianRequest, EOMPenilaianResponse, UpdateEOMPenilaianRequest } from "../model/eompenilaian_model";
import { Validation } from "../validator/validation";
import { EOMPenilaianValidation } from "../validator/eompenilaian_validation";
import moment from "moment";
import { ResponseError } from "../error/response_error";

export class EOMPenilaianController {
    static async readAll(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let result: EOMPenilaianResponse[] = await EOMPenilaianService.readAll();
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async getByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            let uuid: string = z.string().parse(req.params.uuid);
            let result: EOMPenilaianResponse = await EOMPenilaianService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async updateByUuid(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let uuid: string = z.string().parse(req.params.uuid);
            let jsonBody = req.body as UpdateEOMPenilaianRequest;
            let validatedData: UpdateEOMPenilaianRequest = Validation.validate(EOMPenilaianValidation.UPDATE, jsonBody);
            if(validatedData.start_date){
                let startDateMoment = moment(validatedData.start_date);
                if(startDateMoment.isValid()){
                    validatedData.start_date = moment(validatedData.start_date).format("YYYY-MM-DD");
                } else {
                    throw new ResponseError(400, "Invalid Date");
                }
            }
            if(validatedData.end_date){
                let endDateMoment = moment(validatedData.end_date);
                if(endDateMoment.isValid()){
                    validatedData.end_date = moment(validatedData.end_date).format("YYYY-MM-DD");
                } else {
                    throw new ResponseError(400, "Invalid Date");
                }
            }
            let result: EOMPenilaianResponse = await EOMPenilaianService.updateByUuid(uuid, validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }

    static async create(req: UserRequest, resp: Response, next: NextFunction): Promise<void> {
        try {
            AuthHelper.isMinimalAdminThrow(req);
            let jsonBody = req.body as CreateEOMPenilaianRequest;
            let validatedData: CreateEOMPenilaianRequest = Validation.validate(EOMPenilaianValidation.CREATE, jsonBody);
            let startDateFormatted: string = moment(validatedData.start_date).format("YYYY-MM-DD");
            let endDateFormatted: string = moment(validatedData.end_date).format("YYYY-MM-DD");
            validatedData.start_date = startDateFormatted;
            validatedData.end_date = endDateFormatted;
            let result: EOMPenilaianResponse = await EOMPenilaianService.create(validatedData);
            resp.status(200).json(result);
            return;
        } catch(err){
            next(err);
        }
    }
}