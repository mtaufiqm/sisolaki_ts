"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOMPenilaianController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const eompenilaian_service_1 = require("../service/eompenilaian_service");
const zod_1 = __importDefault(require("zod"));
const validation_1 = require("../validator/validation");
const eompenilaian_validation_1 = require("../validator/eompenilaian_validation");
const moment_1 = __importDefault(require("moment"));
const response_error_1 = require("../error/response_error");
class EOMPenilaianController {
    static async readAll(req, resp, next) {
        try {
            let result = await eompenilaian_service_1.EOMPenilaianService.readAll();
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async getByUuid(req, resp, next) {
        try {
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await eompenilaian_service_1.EOMPenilaianService.getByUuid(uuid);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async updateByUuid(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(eompenilaian_validation_1.EOMPenilaianValidation.UPDATE, jsonBody);
            if (validatedData.start_date) {
                let startDateMoment = (0, moment_1.default)(validatedData.start_date);
                if (startDateMoment.isValid()) {
                    validatedData.start_date = (0, moment_1.default)(validatedData.start_date).format("YYYY-MM-DD");
                }
                else {
                    throw new response_error_1.ResponseError(400, "Invalid Date");
                }
            }
            if (validatedData.end_date) {
                let endDateMoment = (0, moment_1.default)(validatedData.end_date);
                if (endDateMoment.isValid()) {
                    validatedData.end_date = (0, moment_1.default)(validatedData.end_date).format("YYYY-MM-DD");
                }
                else {
                    throw new response_error_1.ResponseError(400, "Invalid Date");
                }
            }
            let result = await eompenilaian_service_1.EOMPenilaianService.updateByUuid(uuid, validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
    static async create(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalAdminThrow(req);
            let jsonBody = req.body;
            let validatedData = validation_1.Validation.validate(eompenilaian_validation_1.EOMPenilaianValidation.CREATE, jsonBody);
            let startDateFormatted = (0, moment_1.default)(validatedData.start_date).format("YYYY-MM-DD");
            let endDateFormatted = (0, moment_1.default)(validatedData.end_date).format("YYYY-MM-DD");
            validatedData.start_date = startDateFormatted;
            validatedData.end_date = endDateFormatted;
            let result = await eompenilaian_service_1.EOMPenilaianService.create(validatedData);
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
        }
    }
}
exports.EOMPenilaianController = EOMPenilaianController;
//# sourceMappingURL=eompenilaian_controller.js.map