"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("../controllars/client");
const verifyJwt_1 = require("../middlware/verifyJwt");
const router = express_1.default.Router();
router.post('/create', verifyJwt_1.verifyJwt, client_1.createOneClient);
router.get('/get-clients', client_1.getAllClients);
exports.default = router;
