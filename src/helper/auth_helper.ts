import { ResponseError } from "../error/response_error";
import { RolesSet } from "../model/roles_model";
import { UserRequest } from "../model/user_model";
import { RoleHelper } from "./role_helper";


export class AuthHelper {
    static isMinimalAdmin(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$1})){
            return false;
        }
        return true;
        //============================ Authorization
    }

    static isMinimalAdminThrow(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$1})){
            throw new ResponseError(403,"Forbidden");
        }
        return true;
        //============================ Authorization
    }

    static isMinimalPegawai(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
            return false;
        }
        return true;
        //============================ Authorization
    } 

    static isMinimalPegawaiThrow(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$2})){
            throw new ResponseError(403,"Forbidden");
        }
        return true;
        //============================ Authorization
    }   

    static isMinimalMitra(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$3})){
            return false;
        }
        return true;
        //============================ Authorization
    } 

    static isMinimalMitraThrow(req: UserRequest): boolean {
        //========================== Authorization
        let user = req.user!;
        if(RoleHelper.isNotContainOne({roles:user.roles, required: RolesSet.$3})){
            throw new ResponseError(403,"Forbidden");
        }
        return true;
        //============================ Authorization
    }  

    static isOwn(req: UserRequest, username: string): boolean {
        if(req.user!.username === username){
            return true;
        }
        return false;
    }

    static isOwnThrow(req: UserRequest, username: string): boolean {
        if(req.user!.username === username){
            return true;
        }
        throw new ResponseError(403,"forbidden");
    }

}