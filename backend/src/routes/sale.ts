import express from 'express'
import {
    createSale,
    getSales,
    deleteSales

} from '../controllars/sale'
const router = express.Router()

router.post('/create', createSale)
router.get('/get-sales', getSales)

router.delete('/delete-sales' ,deleteSales)


// router.route('/:id')
//     .get(getOneSaleMidll, retrieveOneSale)
//     .delete(getOneSaleMidll, deleteOneSale)
//     .patch(getOneSaleMidll, patchOneSale)



export default router