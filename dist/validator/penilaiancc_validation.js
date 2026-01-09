"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class PenilaianCcValidation {
    static CREATE = zod_1.default.object({
        desc: zod_1.default.string(),
        tahun: zod_1.default.number().int().nonnegative().max(9999),
        status: zod_1.default.number().int().nonnegative().max(5)
    });
    static UPDATE = zod_1.default.object({
        desc: zod_1.default.string().optional(),
        tahun: zod_1.default.number().int().nonnegative().max(9999).optional(),
        status: zod_1.default.number().int().nonnegative().max(5).optional()
    });
}
exports.PenilaianCcValidation = PenilaianCcValidation;
//# sourceMappingURL=penilaiancc_validation.js.map