import { PenilaiCC } from "../generated/prisma/client";


export type CreatePenilaiCcRequest = {
    pegawai: string;
    penilaiancc: string;
}

export type UpdatePenilaiCcRequest = {
    pegawai?: string;
    penilaiancc?: string;
}

