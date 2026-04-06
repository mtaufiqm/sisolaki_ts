import { Pegawai, PenilaiCC } from "../generated/prisma/client";
import { PegawaiResponse } from "./pegawai_model";
export type CreatePenilaiCcRequest = {
    pegawai: string;
    penilaiancc: string;
};
export type UpdatePenilaiCcRequest = {
    pegawai?: string;
    penilaiancc?: string;
};
export type PenilaiCcResponse = PenilaiCC & {
    pegawaiObj: PegawaiResponse;
};
export declare function toPenilaiCcResponse(data: PenilaiCC, pegawai: Pegawai): PenilaiCcResponse;
//# sourceMappingURL=penilaicc_model.d.ts.map