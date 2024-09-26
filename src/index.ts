import express from 'express';
import User from './model/users';

const app = express();
const PORT = process.env.PORT || 1208;

// Middleware para JSON
app.use(express.json());

// Sincronizar modelos con la base de datos
const syncDatabase = async () => {
  try {
    await User.sync({ force: true });  // Usa `force: true` para eliminar tablas existentes y recrearlas
    console.log("Tablas sincronizadas exitosamente");
  } catch (error) {
    console.error("Error al sincronizar las tablas:", error);
  }
};

syncDatabase();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
