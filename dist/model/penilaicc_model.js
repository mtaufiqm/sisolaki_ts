"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPenilaiCcResponse = toPenilaiCcResponse;
const pegawai_model_1 = require("./pegawai_model");
function toPenilaiCcResponse(data, pegawai) {
    return {
        ...data,
        pegawaiObj: (0, pegawai_model_1.toPegawaiResponse)(pegawai)
    };
}
//# sourceMappingURL=penilaicc_model.js.map