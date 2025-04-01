import express from 'express'
const router = express.Router()
import {
    createOneItem,
    getItems,
    deleteAllItems,
    getOneItemMidll,
    retrieveOneItem,
    deleteOneItem,
    patchOneItem,
    updateItems
} from '../controllars/item';
import { verifyJwt } from '../middlware/verifyJwt';

router.get('/get-items', getItems)

// router.use(verifyJwt)
router.post('/create', createOneItem)
router.put('/update-items',updateItems)
router.delete('/delete-all-items', deleteAllItems)

router.route('/:id')
    .get(getOneItemMidll, retrieveOneItem)
    .delete(getOneItemMidll, deleteOneItem)
    .patch(getOneItemMidll, patchOneItem)



export default router