"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PegawaiController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const validation_1 = require("../validator/validation");
const penilaiancc_validation_1 = require("../validator/penilaiancc_validation");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
const response_error_1 = require("../error/response_error");
class PegawaiController {
    static async readAllActive(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let result = await database_1.client.pegawai.findMany({
                where: {
                    status_pegawai: 0
                },
                orderBy: {
                    fullname: "asc"
                }
            });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async UpdatePenilaianCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let penilaianObj = await database_1.client.penilaianCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if (!penilaianObj) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(penilaiancc_validation_1.PenilaianCcValidation.UPDATE, jsonBody);
            if (!uuid) {
                throw new response_error_1.ResponseError(400, `Empty Field`);
            }
            let result = await database_1.client.penilaianCC.update({
                where: {
                    uuid: uuid
                },
                data: validatedData
            });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async deletePenilaianCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let penilaianObj = await database_1.client.penilaianCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if (!penilaianObj) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let result = await database_1.client.penilaianCC.delete({
                where: {
                    uuid: uuid
                }
            });
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.PegawaiController = PegawaiController;
//# sourceMappingURL=pegawai_controller.js.map