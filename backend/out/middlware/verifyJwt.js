"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyJwt = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const accessToken = (_b = (_a = req.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    if (!accessToken) {
        res.status(401).json({ message: "please provide you access token " });
        return;
    }
    jsonwebtoken_1.default.verify(accessToken, process.env.ACCESS_TOKEN_SECRET || '', (error, decoded) => {
        if (error) {
            res.status(401).json({ message: "please refresh your access token" });
            return;
        }
        console.log(decoded);
        next();
    });
});
exports.verifyJwt = verifyJwt;
