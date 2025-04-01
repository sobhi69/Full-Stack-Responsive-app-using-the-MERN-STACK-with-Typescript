"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sale_1 = require("../controllars/sale");
const router = express_1.default.Router();
router.post('/create', sale_1.createSale);
router.get('/get-sales', sale_1.getSales);
router.delete('/delete-sales', sale_1.deleteSales);
// router.route('/:id')
//     .get(getOneSaleMidll, retrieveOneSale)
//     .delete(getOneSaleMidll, deleteOneSale)
//     .patch(getOneSaleMidll, patchOneSale)
exports.default = router;
