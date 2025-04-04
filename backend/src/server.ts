// environment variables
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { connectToDb, connection } from './lib/connectToDb'
import cors from 'cors'
import { corsOptions } from './lib/corsOptions'
import cookieParser from 'cookie-parser'
const app = express()
const port = process.env.PORT || 3001

// middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())


import userRouter from './routes/user'
import clientRouter from './routes/client'
import authRouter from './routes/auth'
import itemRouter from './routes/item'
import saleRouter from './routes/sale'

// routes
app.use('/api/user', userRouter)
app.use('/api/client', clientRouter)
app.use('/api/auth', authRouter)
app.use('/api/item', itemRouter)
app.use('/api/sale', saleRouter)


connectToDb()
connection.once('open', () => {
    console.log(`connected to Database`)
    app.listen(port, () => console.log(`web is alive at http://localhost:${port}`))
})