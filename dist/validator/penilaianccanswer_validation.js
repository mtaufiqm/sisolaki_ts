"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcAnswerValidation = void 0;
const zod_1 = __importDefault(require("zod"));
class PenilaianCcAnswerValidation {
    static UPDATE = zod_1.default.object({
        value: zod_1.default.number().min(0).max(0).optional()
    });
}
exports.PenilaianCcAnswerValidation = PenilaianCcAnswerValidation;
//# sourceMappingURL=penilaianccanswer_validation.js.map