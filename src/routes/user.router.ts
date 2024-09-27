// src/routes/userRoutes.ts
import { Router } from 'express';
import { newUser } from '../controller/user.controller';



const routerUser = Router();

// Definimos la ruta para crear un usuario usando directamente el método del controlador
routerUser.post('/create', newUser);

export default routerUser;
