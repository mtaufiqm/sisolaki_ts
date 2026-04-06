"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toPenilaianStatsResponse = toPenilaianStatsResponse;
function toPenilaianStatsResponse(data, candidate, penilai) {
    return {
        ...data,
        candidateObj: candidate,
        penilaiObj: penilai
    };
}
//# sourceMappingURL=penilaiancc_model.js.map