import User from "../model/users";


class UserService {
  // Método para crear un nuevo usuario
  async createUser(name: string, username: string, password: string) {
    try {
      // Crea el usuario con los datos recibidos
      const newUser = await User.create({ name, username, password });
      return newUser;
    } catch (error) {
      console.error("Error creating user:", error);
      throw new Error('Error creating user');
    }
  }

  // Puedes añadir más métodos aquí para otras operaciones de usuario
}

export default new UserService();
