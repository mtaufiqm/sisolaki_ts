"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesSet = void 0;
exports.toRolesResponse = toRolesResponse;
function toRolesResponse(data) {
    return data;
}
class RolesSet {
    /**  SUPERADMIN  */
    static SUPERADMIN = "SUPERADMIN";
    /**  ADMIN  */
    static ADMIN = "ADMIN";
    /**  PEGAWAI  */
    static PEGAWAI = "PEGAWAI";
    /**  MITRA  */
    static MITRA = "MITRA";
    /**  [SUPERADMIN, ADMIN]  */
    static $1 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.SUPERADMIN];
    /**  [SUPERADMIN, ADMIN, PEGAWAI]  */
    static $2 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.PEGAWAI];
    /**  [SUPERADMIN, ADMIN, PEGAWAI, MITRA]  */
    static $3 = [RolesSet.SUPERADMIN, RolesSet.ADMIN, RolesSet.PEGAWAI, RolesSet.MITRA];
}
exports.RolesSet = RolesSet;
//# sourceMappingURL=roles_model.js.map