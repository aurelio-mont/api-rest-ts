import { NextFunction, Request, Response } from "express"

const logMiddelware = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers
    const userAgent = headers["user-agent"]
    console.log(userAgent)
    next();
}

export { logMiddelware }