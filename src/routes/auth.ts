import { Request, Response, Router } from "express";
import { addUserController } from "../controllers/user.controller ";
import { loginAuthController } from "../controllers/auth.controller";


const router = Router();

router.post("/register", addUserController)
router.post("/login", loginAuthController)

export { router };
