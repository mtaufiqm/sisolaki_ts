"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateCcController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const validation_1 = require("../validator/validation");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
const response_error_1 = require("../error/response_error");
const candidatecc_validation_1 = require("../validator/candidatecc_validation");
class CandidateCcController {
    static async createCandidateCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let penilaian_uuid = zod_1.default.string().parse(req.params.uuid);
            let penilaianCcObj = await database_1.client.penilaianCC.findUnique({ where: { uuid: penilaian_uuid } });
            if (!penilaianCcObj) {
                throw new response_error_1.ResponseError(404, "Penilaian Not Found");
            }
            if (penilaianCcObj.status >= 1) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            let jsonBody = req.body;
            jsonBody.penilaiancc = penilaian_uuid;
            let validatedData = validation_1.Validation.validate(candidatecc_validation_1.CandidateCcValidation.CREATE, jsonBody);
            let result = await database_1.client.candidateCC.create({
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
    static async updateCandidateCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let candidateObj = await database_1.client.candidateCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if (!candidateObj) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(candidatecc_validation_1.CandidateCcValidation.UPDATE, jsonBody);
            if (!uuid) {
                throw new response_error_1.ResponseError(400, `Empty Field`);
            }
            let result = await database_1.client.candidateCC.update({
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
    static async deleteCandidateCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let candidateObj = await database_1.client.candidateCC.findUnique({
                where: {
                    uuid: uuid
                }
            });
            if (!candidateObj) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let result = await database_1.client.candidateCC.delete({
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
exports.CandidateCcController = CandidateCcController;
//# sourceMappingURL=candidatecc_controller.js.map