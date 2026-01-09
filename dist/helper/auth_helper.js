"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthHelper = void 0;
const response_error_1 = require("../error/response_error");
const roles_model_1 = require("../model/roles_model");
const role_helper_1 = require("./role_helper");
class AuthHelper {
    static isMinimalAdmin(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$1 })) {
            return false;
        }
        return true;
        //============================ Authorization
    }
    static isMinimalAdminThrow(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$1 })) {
            throw new response_error_1.ResponseError(403, "Forbidden");
        }
        return true;
        //============================ Authorization
    }
    static isMinimalPegawai(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
            return false;
        }
        return true;
        //============================ Authorization
    }
    static isMinimalPegawaiThrow(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$2 })) {
            throw new response_error_1.ResponseError(403, "Forbidden");
        }
        return true;
        //============================ Authorization
    }
    static isMinimalMitra(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$3 })) {
            return false;
        }
        return true;
        //============================ Authorization
    }
    static isMinimalMitraThrow(req) {
        //========================== Authorization
        let user = req.user;
        if (role_helper_1.RoleHelper.isNotContainOne({ roles: user.roles, required: roles_model_1.RolesSet.$3 })) {
            throw new response_error_1.ResponseError(403, "Forbidden");
        }
        return true;
        //============================ Authorization
    }
    static isOwn(req, username) {
        if (req.user.username === username) {
            return true;
        }
        return false;
    }
    static isOwnThrow(req, username) {
        if (req.user.username === username) {
            return true;
        }
        throw new response_error_1.ResponseError(403, "forbidden");
    }
}
exports.AuthHelper = AuthHelper;
//# sourceMappingURL=auth_helper.js.map