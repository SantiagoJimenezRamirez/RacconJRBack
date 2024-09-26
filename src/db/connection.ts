import { Sequelize } from 'sequelize';
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } from '../configLoader';

// Crear una instancia de Sequelize
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: DB_DIALECT,
});

// Probar la conexión con la base de datos
async function connectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
}

// Exportar la instancia de Sequelize y la función de conexión
export { sequelize, connectToDatabase };
