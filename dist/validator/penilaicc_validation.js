"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaiCcValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class PenilaiCcValidation {
    static CREATE = zod_1.default.object({
        pegawai: zod_1.default.string(),
        penilaiancc: zod_1.default.string(),
    });
    static UPDATE = zod_1.default.object({
        pegawai: zod_1.default.string().optional,
        penilaiancc: zod_1.default.string().optional,
    });
}
exports.PenilaiCcValidation = PenilaiCcValidation;
//# sourceMappingURL=penilaicc_validation.js.map