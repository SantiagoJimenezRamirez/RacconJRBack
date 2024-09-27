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
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const user_router_1 = __importDefault(require("../routes/user.router"));
const users_1 = __importDefault(require("../model/users"));
const configLoader_1 = require("../configLoader");
class Server {
    constructor() {
        this.syncDatabase = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield users_1.default.sync({ force: true }); // Usa `force: true` para eliminar tablas existentes y recrearlas
                console.log("Tablas sincronizadas exitosamente");
            }
            catch (error) {
                console.error("Error al sincronizar las tablas:", error);
            }
        });
        this.app = (0, express_1.default)();
        this.port = configLoader_1.PORT;
        this.listen();
        this.middlewares();
        this.routes();
        this.syncDatabase();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto: ' + this.port);
        });
    }
    routes() {
        this.app.use('/user', user_router_1.default);
    }
    middlewares() {
        this.app.use(express_1.default.json());
        const corsOptions = {
            origin: 'http://localhost:4200',
            optionsSuccessStatus: 200
        };
        this.app.use(helmet_1.default.hidePoweredBy());
        this.app.use(helmet_1.default.frameguard({
            action: "deny"
        }));
        this.app.use((0, cors_1.default)(corsOptions));
    }
}
exports.Server = Server;
