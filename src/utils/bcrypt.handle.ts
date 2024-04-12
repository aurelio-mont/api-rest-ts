import { hash, compare } from "bcryptjs"

const handleHash = async (strToHash: string) => {
    const strHash = await hash(strToHash, 8)
    return strHash
}

const handelCompare = async (strPlain: string, strHash: string) => {
    const objetDecrypt = await compare(strPlain, strHash)
    return objetDecrypt
}

export { handleHash, handelCompare }