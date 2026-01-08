import { Pegawai } from "../generated/prisma/client"


export type CreatePegawai = {
    fullname?: string | null;
    fullname_with_title?: string | null;
    nickname?: string | null;
    nip?: string | null;
    old_nip?: string | null;
    phone_number?: string | null;
    username?: string | null;
    status_pegawai?: number | null;
    jabatan?: number | null;
}

export type UpdatePegawai = {
    fullname?: string | null;
    fullname_with_title?: string | null;
    nickname?: string | null;
    nip?: string | null;
    old_nip?: string | null;
    phone_number?: string | null;
    username?: string | null;
    status_pegawai?: number | null;
    jabatan?: number | null;
}

export type PegawaiResponse = {
    uuid: string;
    fullname: string | null;
    fullname_with_title: string | null;
    nickname: string | null;
    nip: string | null;
    old_nip: string | null;
    phone_number: string | null;
    username: string | null;
    status_pegawai: number | null;
    jabatan: number | null;
}


export function toPegawaiResponse(data: Pegawai): PegawaiResponse {
    return data as PegawaiResponse;
}