import { Request,Response,NextFunction } from "express";
import { LoginUserRequest,CreateUserRequest } from "../model/user_model";
import { UserService } from "../service/user_service";

export class UserController{
    static async register(req: Request, res : Response, next: NextFunction){
        try{
            const request : CreateUserRequest = req.body as CreateUserRequest;
            const response = await UserService.register(request);

            res.status(200).json({
                data : response
            })
        }catch(err){
            next(err)
        }
    }

    static async login(req: Request, res : Response, next: NextFunction){
        try{
            const request : LoginUserRequest = req.body as LoginUserRequest;
            const response = await UserService.login(request);

            res.status(200).json({
                data : response
            })
        }catch(err){
            next(err)
        }
    }
}