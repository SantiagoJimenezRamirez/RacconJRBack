// models/User.ts
import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection';

class User extends Model {
  public id!: number;
  public name!: string;  // Nombre
  public username!: string;  // Nombre de usuario
  public password!: string;  // Contraseña
  public email?: string;  // Correo
  public identification?: string;  // Identificación
  public birthdate?: Date;  // Fecha de nacimiento
  public address?: string;  // Dirección
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,  // Obligatorio
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,  // Obligatorio
    unique: true,  // Debe ser único
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,  // Obligatorio
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,  // Opcional
  },
  identification: {
    type: DataTypes.STRING,
    allowNull: true,  // Opcional
  },
  birthdate: {
    type: DataTypes.DATE,
    allowNull: true,  // Opcional
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true,  // Opcional
  },
}, {
  sequelize: sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
});

export default User;
