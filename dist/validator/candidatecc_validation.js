"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateCcValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class CandidateCcValidation {
    static CREATE = zod_1.default.object({
        pegawai: zod_1.default.string(),
        penilaiancc: zod_1.default.string(),
        kjk: zod_1.default.number().nonnegative().max(100.0).optional(),
        skp: zod_1.default.number().nonnegative().max(100.0).optional()
    });
    static UPDATE = zod_1.default.object({
        kjk: zod_1.default.number().nonnegative().max(100.0).optional(),
        skp: zod_1.default.number().nonnegative().max(100.0).optional()
    });
}
exports.CandidateCcValidation = CandidateCcValidation;
//# sourceMappingURL=candidatecc_validation.js.map