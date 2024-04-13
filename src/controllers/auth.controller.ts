import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { loginAuthService } from "../services/auth.service"
import { getUserService } from "../services/user.service"
import { handleSignToken } from "../utils/jwt.handle"

const loginAuthController = async ({ body }: Request, res: Response) => {
    try {
        const { email, password } = body
        const user = await getUserService(email)
        if (!user) {
            res.status(403)
            res.send({ data: "USER_NOT FOUND" })
        } else {
            const passwordHash = user.password
            const newLoginAuth = await loginAuthService(password, passwordHash)
            if (!newLoginAuth) {
                res.status(403)
                res.send({ data: "INVALID CREDENIALS" })
            } else {
                const token = handleSignToken(user)
                if (!token) {
                    res.status(403)
                    res.send({ data: "INVALID JWT" })
                } else {
                    res.send({ user, token })
                }
            }
        }
    } catch (e) {
        handleHttp(res, 'ERROR_POST_AUTH', e)
    }
}
export { loginAuthController }