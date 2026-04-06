import { Pegawai, PenilaiCC } from "../generated/prisma/client";
import { PegawaiResponse, toPegawaiResponse } from "./pegawai_model";


export type CreatePenilaiCcRequest = {
    pegawai: string;
    penilaiancc: string;
}

export type UpdatePenilaiCcRequest = {
    pegawai?: string;
    penilaiancc?: string;
}

export type PenilaiCcResponse = PenilaiCC & {pegawaiObj: PegawaiResponse}

export function toPenilaiCcResponse(data: PenilaiCC, pegawai: Pegawai): PenilaiCcResponse{
    return {
        ...data,
        pegawaiObj: toPegawaiResponse(pegawai)
    };
}
