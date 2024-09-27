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
exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const users_1 = __importDefault(require("../model/users"));
const configLoader_1 = require("../configLoader");
// Verifica que la clave secreta esté definida
if (!configLoader_1.KEY) {
    throw new Error('KEY environment variable is not defined');
}
const newUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, username, password, } = req.body;
    //Validate if it exists in the database
    const user = yield users_1.default.findOne({ where: { username: username } });
    if (user) {
        return res.status(400).json({
            msg: `User ${username} exist in Database`
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    try {
        yield users_1.default.create({
            username: username,
            password: hashedPassword,
            name: name
        });
        res.json({
            msg: `User ${username} created successfully`
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Oops something went wrong: ",
            error
        });
    }
});
exports.newUser = newUser;
