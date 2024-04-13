import { User } from "../interfaces/user.interface"
import UserModel from "../models/user.model"
import { handleHash } from "../utils/bcrypt.handle"

const getUsersService = async () => {
    const resData = await UserModel.find({})
    return resData
}
const addUserService = async ({ email, password, name, description }: User) => {
    const checkIs = await UserModel.findOne({ email })
    if (checkIs) return "ALLREDY_USER"

    const passwordHash = await handleHash(password)
    const registerUser = await UserModel.create({ email, password: passwordHash, name, description })
    return registerUser
}

const getUserService = async (email: string) => {
    const user = await UserModel.findOne({ email })
    return (user)
}


export { getUsersService, addUserService, getUserService }