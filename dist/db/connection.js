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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
exports.connectToDatabase = connectToDatabase;
const sequelize_1 = require("sequelize");
const configLoader_1 = require("../configLoader");
// Crear una instancia de Sequelize
const sequelize = new sequelize_1.Sequelize(configLoader_1.DB_NAME, configLoader_1.DB_USER, configLoader_1.DB_PASSWORD, {
    host: configLoader_1.DB_HOST,
    port: configLoader_1.DB_PORT,
    dialect: configLoader_1.DB_DIALECT,
});
exports.sequelize = sequelize;
// Probar la conexión con la base de datos
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('Conexión a la base de datos exitosa');
        }
        catch (error) {
            console.error('Error al conectar a la base de datos:', error);
        }
    });
}
