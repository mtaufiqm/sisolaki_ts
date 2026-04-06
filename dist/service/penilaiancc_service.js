"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenilaianCcService = void 0;
const response_error_1 = require("../error/response_error");
const database_1 = require("../web/database");
class PenilaianCcService {
    static async getStatsByUuid(uuid) {
        let result = await database_1.client.penilaianCC.findUnique({
            where: {
                uuid: uuid
            },
            include: {
                candidateObj: {
                    include: {
                        pegawaiObj: true,
                        penilaianAnswer: true
                    },
                },
                penilaiObj: {
                    include: {
                        pegawaiObj: true
                    }
                }
            }
        });
        if (!result) {
            throw new response_error_1.ResponseError(404, "Not Found");
        }
        result.candidateObj.forEach((el) => {
            let listValue = [];
            el.penilaianAnswer.forEach((el2) => {
                listValue.push(el2.value);
            });
            let total = 0;
            listValue.forEach((el) => total = total + el);
            let average = (listValue.length !== 0) ? (total / listValue.length) : 0;
            el.score = average;
        });
        let { candidateObj, penilaiObj, ...restData } = result;
        candidateObj.sort((data1, data2) => {
            if (data1.score < data2.score) {
                return 1;
            }
            if (data1.score > data2.score) {
                return -1;
            }
            return 0;
        });
        return {
            ...restData,
            penilaiObj: penilaiObj,
            candidateObj: candidateObj.map((el) => {
                let { penilaianAnswer, ...candidateRestData } = el;
                return candidateRestData;
            })
        };
    }
}
exports.PenilaianCcService = PenilaianCcService;
//# sourceMappingURL=penilaiancc_service.js.map