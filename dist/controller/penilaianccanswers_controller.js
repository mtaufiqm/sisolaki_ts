"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcAnswerController = void 0;
const auth_helper_1 = require("../helper/auth_helper");
const database_1 = require("../web/database");
const zod_1 = __importDefault(require("zod"));
const response_error_1 = require("../error/response_error");
class PenilaianCcAnswerController {
    //penilai is unique 
    static async readAllQuestionerByPenilaian(req, resp, next) {
        try {
            auth_helper_1.AuthHelper.isMinimalPegawaiThrow(req);
            let penilaian_uuid = zod_1.default.string().parse(req.params.uuid);
            let penilaiObj = await database_1.client.penilaiCC.findFirst({
                where: {
                    penilaiancc: penilaian_uuid,
                    pegawai: req.user.username
                }
            });
            if (!penilaiObj) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let result = await database_1.client.penilaianCcAnswer.findMany({
                where: {
                    penilaicc: penilaiObj.uuid
                },
                orderBy: [{ candidatecc: "asc" }, { questionObj: {
                            order: "asc"
                        } }],
                include: {
                    questionObj: true,
                    candidateObj: {
                        include: {
                            pegawaiObj: true
                        }
                    }
                }
            });
            let returnValue = new Map();
            result.forEach((el) => {
                let { candidateObj, ...extractedData } = el;
                if (!returnValue.has(el.candidatecc)) {
                    returnValue.set(el.candidatecc, {
                        candidate: candidateObj,
                        answers: [extractedData]
                    });
                    return;
                }
                returnValue.get(el.candidatecc).answers.push(extractedData);
            });
            if (!result) {
                throw new response_error_1.ResponseError(404, "Not Found");
            }
            let listReturnValue = [];
            for (let [key, value] of returnValue.entries()) {
                listReturnValue.push(value);
            }
            resp.status(200).json(listReturnValue);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
    static async updateAllAnswers(req, resp, next) {
        try {
            let validatedData = zod_1.default.array(zod_1.default.object({
                answer_uuid: zod_1.default.string(),
                value: zod_1.default.number().int().min(0).max(100)
            })).parse(req.body);
            let result = await database_1.client.$transaction(async (tx) => {
                for (let item of validatedData) {
                    let resultItem = await tx.penilaianCcAnswer.update({
                        where: {
                            uuid: item.answer_uuid
                        },
                        data: {
                            value: item.value
                        }
                    });
                }
                return true;
            });
            if (!result) {
                throw new response_error_1.ResponseError(400, "Error Occurred");
            }
            resp.status(200).json(result);
            return;
        }
        catch (err) {
            next(err);
            return;
        }
    }
}
exports.PenilaianCcAnswerController = PenilaianCcAnswerController;
//# sourceMappingURL=penilaianccanswers_controller.js.map