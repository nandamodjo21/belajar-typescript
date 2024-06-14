import {v4 as uuid} from "uuid";
import { prismaClient } from "../app/database";
import { CreateUserRequest, LoginUserRequest, UserResponse, toUserResponse } from "../model/user_model";
import { UserValidaton } from "../validation/user_validation";
import { Validation } from "../validation/validation";
import { ResponseError } from "../error/response_error";
import bcrypt from 'bcrypt'

export class UserService{

    static async register(request: CreateUserRequest): Promise<UserResponse> {
        const registerRequest = Validation.validate(UserValidaton.REGISTER, request);

        const totalUserWithSameUsername = await prismaClient.user.count({
            where: {
                username: registerRequest.username
            }
        });

        if (totalUserWithSameUsername != 0) {
            throw new ResponseError(400, "Username already exists");
        }

        registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

        const user = await prismaClient.user.create({
            data: registerRequest
        });

        return toUserResponse(user);
    }

    static async login(request: LoginUserRequest) : Promise<UserResponse>{
        const loginRequest = Validation.validate(UserValidaton.LOGIN, request);

        let alreadyUser = await prismaClient.user.findUnique({
            where : {
                username : loginRequest.username
            }
        });

        if(!alreadyUser){
            throw new ResponseError(401,"username or password wrong");
        }

        const isPasswordValid = await bcrypt.compare(loginRequest.password, alreadyUser.password);

        if(!isPasswordValid){
            throw new ResponseError(401, "username or password wrong");
        }

        alreadyUser = await prismaClient.user.update({
            where : {
                username : loginRequest.username
            },
            data : {
                token : uuid()
            }
        });

        const response = toUserResponse(alreadyUser);
        response.token = alreadyUser.token!;
        return response;

    }

}