import { UserRequest } from "../model/user_model";
export declare class AuthHelper {
    static isMinimalAdmin(req: UserRequest): boolean;
    static isMinimalAdminThrow(req: UserRequest): boolean;
    static isMinimalPegawai(req: UserRequest): boolean;
    static isMinimalPegawaiThrow(req: UserRequest): boolean;
    static isMinimalMitra(req: UserRequest): boolean;
    static isMinimalMitraThrow(req: UserRequest): boolean;
    static isOwn(req: UserRequest, username: string): boolean;
    static isOwnThrow(req: UserRequest, username: string): boolean;
}
//# sourceMappingURL=auth_helper.d.ts.map