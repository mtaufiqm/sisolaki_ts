"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toUserResponse = toUserResponse;
function toUserResponse(user, roles) {
    return {
        username: user.username,
        roles: roles.map((el) => el.description)
    };
}
//# sourceMappingURL=user_model.js.map