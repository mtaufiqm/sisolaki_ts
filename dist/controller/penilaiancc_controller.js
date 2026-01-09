"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const validation_1 = require("../validator/validation");
const penilaiancc_validation_1 = require("../validator/penilaiancc_validation");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
const response_error_1 = require("../error/response_error");
class PenilaianCcController {
    static async createPenilaianCC(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(penilaiancc_validation_1.PenilaianCcValidation.CREATE, jsonBody);
            let result = await database_1.client.penilaianCC.create({
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
    static async updatePenilaianCC(req, resp, next) {
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
            //if marked dimulai, it cannot be rollback
            if (validatedData.status != null && (validatedData.status <= penilaianObj.status)) {
                throw new response_error_1.ResponseError(403, "Forbidden");
            }
            if (validatedData.status != null && validatedData.status === 1) {
                //if updated to dimulai, fill all penilaianccanswer for all penilai and candidate 
                // let allCandidate = await client.candidateCC.findMany({
                //     where: {
                //         penilaiancc: uuid
                //     },
                //     select: {
                //         uuid: true,
                //         pegawai: true
                //     }
                // });
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
    static async readAll(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            //uuid is penilaiancc_uuid
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await database_1.client.penilaianCC.findMany({
                orderBy: {
                    tahun: "desc"
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
    static async readAllCandidateByPenilaian(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            //uuid is penilaiancc_uuid
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await database_1.client.candidateCC.findMany({
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
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.PenilaianCcController = PenilaianCcController;
//# sourceMappingURL=penilaiancc_controller.js.map