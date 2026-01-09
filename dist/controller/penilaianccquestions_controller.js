"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcQuestionsController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
class PenilaianCcQuestionsController {
    static async readAll(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let uuid = zod_1.default.string().parse(req.params.uuid);
            let result = await database_1.client.penilaianCcQuestions.findMany({
                where: {
                    is_active: true
                },
                orderBy: {
                    order: "asc"
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
exports.PenilaianCcQuestionsController = PenilaianCcQuestionsController;
//# sourceMappingURL=penilaianccquestions_controller.js.map