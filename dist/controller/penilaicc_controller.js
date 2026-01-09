"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaiCcController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
class PenilaiCcController {
    static async readAllByYear(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let tahun = zod_1.default.coerce.number().int().nonnegative().max(9999).default(new Date().getFullYear()).parse(req.query.year);
            let result = await database_1.client.penilaiCC.findMany({
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
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.PenilaiCcController = PenilaiCcController;
//# sourceMappingURL=penilaicc_controller.js.map