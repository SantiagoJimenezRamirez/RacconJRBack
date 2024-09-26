import fs from 'fs';
import path from 'path';

// Ruta del archivo de configuración
const configFilePath = path.join(__dirname, '../config.txt');

// Función para leer el archivo de configuración y devolver las variables
export function readConfigFile(filePath: string) {
  const config: { [key: string]: string } = {};
  
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  for (const line of lines) {
    if (line.trim() && !line.startsWith('#')) {
      const [key, value] = line.split('=');
      if (key && value) {
        config[key.trim()] = value.trim();
      }
    }
  }

  return config;
}

// Leer las variables del archivo de configuración
const config = readConfigFile(configFilePath);

// Definir constantes en mayúsculas
export const DB_NAME = config.DB_NAME;
export const DB_USER = config.DB_USER;
export const DB_PASSWORD = config.DB_PASSWORD;
export const DB_HOST = config.DB_HOST;
export const DB_PORT = parseInt(config.DB_PORT);
export const DB_DIALECT = config.DB_DIALECT as 'mariadb';  // Cambia esto si usas otro dialecto
export const PORT = parseInt(config.PORT);
export const HOST = config.HOST;
export const KEY = config.KEY;
