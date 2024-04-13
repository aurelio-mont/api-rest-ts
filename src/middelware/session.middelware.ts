import { NextFunction, Request, Response } from "express";
import { handleVeifyToken } from "../utils/jwt.handle";

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization?.split(' ').pop()
        if (!jwtByUser) {
            res.status(400)
            res.send({ error: "NOT_STRING_JWT" })
        } else {
            const userSined = handleVeifyToken(jwtByUser)
            next()
        }
    } catch (e) {
        res.status(400)
        res.send({ error: "INVALID SESSION" })
    }
}

export { validateToken }