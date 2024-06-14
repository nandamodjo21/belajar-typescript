import express from 'express';
import { UserController } from '../controller/user_controller';

export const publicRoute = express.Router();
publicRoute.post("/api/users", UserController.register);
publicRoute.post("/api/users/login", UserController.login);