import { PenilaianCC } from "../generated/prisma/client";

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