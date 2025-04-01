import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'
export const verifyJwt = async (req: Request, res: Response, next: NextFunction) => {
    const accessToken = req.headers?.authorization?.split(' ')[1]

    if (!accessToken) {
        res.status(401).json({ message: "please provide you access token " })
        return
    }

    jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET || '', (error, decoded) => {
        if (error) {
            res.status(401).json({ message: "please refresh your access token" })
            return
        }

        console.log(decoded)
        next()
    })

}