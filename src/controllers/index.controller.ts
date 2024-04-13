import { Request, Response } from "express"

const getIndexController = (req: Request, res: Response) => {
    res.send("<h1>HOLA</h1>")
}

export { getIndexController }