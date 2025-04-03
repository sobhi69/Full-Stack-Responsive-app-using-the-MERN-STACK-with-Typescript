import express from 'express'
import {
    createOneClient,
    getAllClients
} from '../controllars/client'
import { verifyJwt } from '../middlware/verifyJwt'
const router = express.Router()

router.post('/create',verifyJwt, createOneClient)
router.get('/get-clients', getAllClients)



export default router