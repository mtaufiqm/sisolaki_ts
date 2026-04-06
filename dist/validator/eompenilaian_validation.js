"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EOMPenilaianValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class EOMPenilaianValidation {
    static CREATE = zod_1.default.object({
        desc: zod_1.default.string(),
        periode: zod_1.default.string(),
        start_date: zod_1.default.string(),
        end_date: zod_1.default.string(),
        status: zod_1.default.number(),
        created_at: zod_1.default.string().optional(),
        last_updated: zod_1.default.string().optional()
    });
    static UPDATE = zod_1.default.object({
        desc: zod_1.default.string().optional(),
        start_date: zod_1.default.string().optional(),
        end_date: zod_1.default.string().optional(),
        status: zod_1.default.number().optional()
    });
}
exports.EOMPenilaianValidation = EOMPenilaianValidation;
//# sourceMappingURL=eompenilaian_validation.js.map