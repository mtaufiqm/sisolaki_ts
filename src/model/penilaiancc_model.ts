import { CandidateCC, PenilaianCC, PenilaiCC } from "../generated/prisma/client";
import { CandidateCcReponse } from "./candidatecc_model";
import { PenilaiCcResponse } from "./penilaicc_model";

export type CreatePenilaianCcRequest = {
    desc: string;
    tahun: number;
    status: number;
};

export type UpdatePenilaianCcRequest = {
    desc?: string;
    tahun?: number;
    status?: number;
};

export type PenilaianCcResponse = PenilaianCC;

export type PenilaianCcStatsResponse = {
    uuid: string;
    desc: string;
    tahun: number;
    status: number;
    candidateObj: CandidateCcReponse[]
    penilaiObj: PenilaiCcResponse[]
    created_at: Date;
    last_updated: Date;
};

export function toPenilaianStatsResponse(data: PenilaianCcResponse, candidate: CandidateCcReponse[], penilai: PenilaiCcResponse[]): PenilaianCcStatsResponse {
    return {
        ...data,
        candidateObj: candidate,
        penilaiObj: penilai
    }
}