import { CandidateCC, Pegawai } from "../generated/prisma/client";

export type CreateCandidateCcRequest = {
    pegawai: string;
    penilaiancc: string;
    kjk?: number;
    skp?: number;
}

export type UpdateCandidateCcRequest = {
    kjk?: number;
    skp?: number;
}

export type CandidateCcReponse = {
    uuid: string;
    pegawai: string;
    pegawaiObj: Pegawai;
    penilaiancc: string;
    score: number;
    kjk: number;
    skp: number;
    created_at: Date;
    last_updated: Date;
}