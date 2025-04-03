import jwt from "jsonwebtoken"

export const generateToken = (id:string) => {
    return jwt.sign({userId:id},process.env.TOKEN_SECRET || '',{
        expiresIn:"7d"
    })
}