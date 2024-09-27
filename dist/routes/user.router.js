"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = require("express");
const user_controller_1 = require("../controller/user.controller");
const routerUser = (0, express_1.Router)();
// Definimos la ruta para crear un usuario usando directamente el método del controlador
routerUser.post('/create', user_controller_1.newUser);
exports.default = routerUser;
