import { Auth } from "../interfaces/auth.interface"
import UserModel from "../models/user.model"
import { handelCompare } from "../utils/bcrypt.handle"

const loginAuthService = async (password: string, passwordHash: string) => {
    const authVilide = await handelCompare(password, passwordHash)
    return (authVilide)
}

export { loginAuthService }