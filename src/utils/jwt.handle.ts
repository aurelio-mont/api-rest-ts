import { sign, verify } from "jsonwebtoken"
import { User } from "../interfaces/user.interface"

const JWT_SECRET = process.env.JWT_SECRET || "error"

const handleSignToken = (strToEncypt: User) => {
    if (JWT_SECRET) {
        const strToken = sign({ strToEncypt }, JWT_SECRET, { expiresIn: "2h" })
        return strToken
    }
    return null
}

const handleVeifyToken = (strPlain: string) => {
    const objetDecrypt = verify(strPlain, JWT_SECRET)
    return objetDecrypt
}

export { handleSignToken, handleVeifyToken }