import { Pegawai } from "../generated/prisma/client";
export type CreatePegawai = {
    fullname: string;
    fullname_with_title?: string | null;
    nickname?: string | null;
    date_of_birth?: string | null;
    city_of_birth?: string | null;
    nip?: string | null;
    old_nip?: string | null;
    age?: number | null;
    username?: string | null;
    status_pegawai?: string | null;
    phone_number?: string | null;
};
export type UpdatePegawai = {
    fullname?: string;
    fullname_with_title?: string | null;
    nickname?: string | null;
    date_of_birth?: string | null;
    city_of_birth?: string | null;
    nip?: string | null;
    old_nip?: string | null;
    age?: number | null;
    username?: string | null;
    status_pegawai?: string | null;
    phone_number?: string | null;
};
export type PegawaiResponse = {
    uuid: string;
    fullname: string;
    fullname_with_title: string | null;
    nickname: string | null;
    date_of_birth: string | null;
    city_of_birth: string | null;
    nip: string | null;
    old_nip: string | null;
    age: number | null;
    username: string | null;
    status_pegawai: string | null;
    phone_number: string | null;
};
export declare function toPegawaiResponse(data: Pegawai): PegawaiResponse;
//# sourceMappingURL=pegawai_model.d.ts.map