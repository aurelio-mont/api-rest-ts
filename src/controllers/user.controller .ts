import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { addUserService, getUsersService } from "../services/user.service"


const getUsersController = async ({ body }: Request, res: Response) => {
    try {
        const allUers = await getUsersService()
        res.send(allUers)
    } catch (e) {
        handleHttp(res, 'ERROR_GET_USERS', e)
    }
}

const addUserController = async ({ body }: Request, res: Response) => {
    try {
        const newUser = await addUserService(body)
        res.send(newUser)
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

export { addUserController, getUsersController }