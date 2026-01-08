import { Request } from "express";
import { Roles, User } from "../generated/prisma/client";


export interface UserRequest extends Request {
    user?: {
        username: string;
        roles?: string[];
    }
}

export type UserLoginRequest = {
    username: string;
    password: string;
}

export type UserResponse = {
    username: string;
    roles: string[];
}

export type CreateUserRequest = {
    username: string;
    password: string;
    roles?: string[];
}

export type UpdateUserRequest = {
    username?: string;
    password?: string;
    roles?: string[];
}

export function toUserResponse(user: User, roles: Roles[]): UserResponse{
    return {
        username: user.username,
        roles: roles.map((el) => el.description)
    } as UserResponse;
}