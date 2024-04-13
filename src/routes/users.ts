import { Router } from "express"
import { getUsersController } from "../controllers/user.controller ";
import { validateToken } from "../middelware/session.middelware";

const router = Router();

router.get("/", validateToken, getUsersController)

export { router }