import { Roles } from "../generated/prisma/client"


export type RolesResponse = {
    description: string
}

export type CreateRoles = {
    description: string;
}


export function toRolesResponse(data: Roles): RolesResponse {
    return data as RolesResponse;
}

export class RolesSet {
    
    /**  SUPERADMIN  */
    static SUPERADMIN: string = "SUPERADMIN";    
    /**  ADMIN  */
    static ADMIN: string = "ADMIN";    
    /**  PEGAWAI  */
    static PEGAWAI: string = "PEGAWAI";    
    /**  MITRA  */
    static MITRA: string = "MITRA";
    
    /**  [SUPERADMIN, ADMIN]  */
    static $1: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.SUPERADMIN];

    /**  [SUPERADMIN, ADMIN, PEGAWAI]  */
    static $2: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.PEGAWAI];

    /**  [SUPERADMIN, ADMIN, PEGAWAI, MITRA]  */
    static $3: string[] = [RolesSet.SUPERADMIN,RolesSet.ADMIN,RolesSet.PEGAWAI, RolesSet.MITRA];
}