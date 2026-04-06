"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOMPenilaianService = void 0;
const uuid_1 = require("uuid");
const response_error_1 = require("../error/response_error");
const datetime_helper_1 = require("../helper/datetime_helper");
const eompenilaian_model_1 = require("../model/eompenilaian_model");
const database_1 = require("../web/database");
class EOMPenilaianService {
    static async getByUuid(uuid) {
        let result = await database_1.client.eOMPenilaian.findUnique({
            where: {
                uuid: uuid
            }
        });
        if (!result) {
            throw new response_error_1.ResponseError(404, "Not Found");
        }
        return (0, eompenilaian_model_1.toEOMPenilaianResponse)(result);
    }
    static async readAll(args) {
        let result = await database_1.client.eOMPenilaian.findMany(args ?
            { ...(args.limit ? { take: args.limit } : {}), ...(args.status ? { where: { status: args.status } } : {}), orderBy: { periode: "desc" } }
            : { orderBy: { periode: "desc" } });
        return result.map((el) => {
            return (0, eompenilaian_model_1.toEOMPenilaianResponse)(el);
        });
    }
    static async updateByUuid(uuid, data) {
        data.last_updated = datetime_helper_1.DateTimeHelper.getCurrentLocalTime();
        if (!uuid) {
            throw new response_error_1.ResponseError(400, "Empty Field");
        }
        let result = await database_1.client.eOMPenilaian.update({
            where: {
                uuid: uuid
            },
            data: data
        });
        return (0, eompenilaian_model_1.toEOMPenilaianResponse)(result);
    }
    static async create(data) {
        data.uuid = (0, uuid_1.v1)();
        data.last_updated = datetime_helper_1.DateTimeHelper.getCurrentLocalTime();
        data.created_at = datetime_helper_1.DateTimeHelper.getCurrentLocalTime();
        //first status automatically 0
        data.status = 0;
        let result = await database_1.client.eOMPenilaian.create({
            data: data
        });
        return (0, eompenilaian_model_1.toEOMPenilaianResponse)(result);
    }
    static async deleteByUuid(uuid) {
        if (!uuid) {
            throw new response_error_1.ResponseError(404, "Empty Field");
        }
        let result = await database_1.client.eOMPenilaian.delete({
            where: {
                uuid: uuid
            }
        });
        return (0, eompenilaian_model_1.toEOMPenilaianResponse)(result);
    }
}
exports.EOMPenilaianService = EOMPenilaianService;
//# sourceMappingURL=eompenilaian_service.js.map