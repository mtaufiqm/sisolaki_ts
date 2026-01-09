import { Roles } from "../generated/prisma/client";
export type RolesResponse = {
    description: string;
};
export type CreateRoles = {
    description: string;
};
export declare function toRolesResponse(data: Roles): RolesResponse;
export declare class RolesSet {
    /**  SUPERADMIN  */
    static SUPERADMIN: string;
    /**  ADMIN  */
    static ADMIN: string;
    /**  PEGAWAI  */
    static PEGAWAI: string;
    /**  MITRA  */
    static MITRA: string;
    /**  [SUPERADMIN, ADMIN]  */
    static $1: string[];
    /**  [SUPERADMIN, ADMIN, PEGAWAI]  */
    static $2: string[];
    /**  [SUPERADMIN, ADMIN, PEGAWAI, MITRA]  */
    static $3: string[];
}
//# sourceMappingURL=roles_model.d.ts.map