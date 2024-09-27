import express, { Application } from 'express';
import cors from "cors";
import helmet from 'helmet';
import routerUser from '../routes/user.router';
import User from '../model/users';
import { PORT } from '../configLoader';

export class Server {
  private app: Application;
  private port: any;

  constructor(){
      this.app = express();
      this.port = PORT;
      this.listen();
      this.middlewares();
      this.routes();
      this.syncDatabase();
      
  }

  listen(){
    this.app.listen(this.port, () =>{
        console.log('Aplicacion corriendo en el puerto: ' + this.port)
    })
}

routes(){
  this.app.use('/user', routerUser)
}

middlewares() {
  this.app.use(express.json());
  const corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
  };
  this.app.use(helmet.hidePoweredBy());
  this.app.use(helmet.frameguard({
    action : "deny"
  }));
  this.app.use(cors(corsOptions));
}

syncDatabase = async () => {
  try {
    await User.sync({ force: true });  // Usa `force: true` para eliminar tablas existentes y recrearlas
    console.log("Tablas sincronizadas exitosamente");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
};
}
