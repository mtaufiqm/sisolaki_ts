import { CandidateCC } from "../generated/prisma/client";
import { PegawaiResponse } from "./pegawai_model";
export type CreateCandidateCcRequest = {
    pegawai: string;
    penilaiancc: string;
    kjk?: number;
    skp?: number;
};
export type UpdateCandidateCcRequest = {
    kjk?: number;
    skp?: number;
};
export type CandidateCcReponse = CandidateCC & {
    pegawaiObj: PegawaiResponse;
};
//# sourceMappingURL=candidatecc_model.d.ts.map