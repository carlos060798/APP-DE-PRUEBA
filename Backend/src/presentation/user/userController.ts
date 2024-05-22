import  User from '../../models/user';
import { Request, Response } from 'express';
import sequelize from '../../config/database';

export class UserController {
    static async createUser(req: Request, res: Response) {
        try {
          console.log("Conectando a la base de datos...");
          await sequelize.authenticate();
          console.log("Conexión establecida correctamente.");
    
          console.log("Creando nuevo usuario...");
          const user = await User.create(req.body);
          console.log("Usuario creado:", user);
    
          console.log("Guardando usuario en la base de datos...");
          await user.save();
    
          console.log("Usuario guardado correctamente en la base de datos.");
          res.status(201).send(user);
        } catch (error) {
          console.error("Error al crear el usuario:", error);
          res.status(400).send(error);
        }
      }
    
   
 
    static async getAllUsers(req: Request, res: Response) {
        try {
            // Utiliza el método findAll de Sequelize para obtener todos los usuarios
            const users = await User.findAll();
            
            // Retorna los usuarios en la respuesta
            res.status(200).json(users);
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir
            console.error('Error al obtener usuarios:', error);
            res.status(500).json({ error: 'Hubo un problema al obtener los usuarios' });
        }
    }

    static async getUserById(req: Request, res: Response) {
        try {
  
  const{userid}=req.params;
            // Utiliza el método findByPk de Sequelize para obtener el usuario por su ID
            const user = await User.findByPk(userid);
            if (!user) {
                // Si no se encuentra el usuario, retorna un 404
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            // Retorna el usuario en la respuesta
            res.status(200).json(user);
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir
            console.error('Error al obtener usuario:', error);
            res.status(500).json({ error: 'Hubo un problema al obtener el usuario' });
        }
    }
         
    static async updateUser(req: Request, res: Response) {
        try {
            // Utiliza el método findByPk de Sequelize para obtener el usuario por su ID
            const{userid}=req.params;

            const user = await User.findByPk(userid);
            if (!user) {
                // Si no se encuentra el usuario, retorna un 404
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            // Actualiza el usuario con los datos enviados en el cuerpo de la petición
            await user.update(req.body);
            // Retorna el usuario actualizado en la respuesta
            res.status(200).json(user);
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir
            console.error('Error al actualizar usuario:', error);
            res.status(500).json({ error: 'Hubo un problema al actualizar el usuario' });
        }
    }

    static async deleteUser(req: Request, res: Response) {
        try {
        
            const{userid}=req.params;
            const user = await User.findByPk(userid);
            if (!user) {
                // Si no se encuentra el usuario, retorna un 404
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            // Elimina el usuario de la base de datos
            await user.destroy();
            // Retorna un mensaje de éxito en la respuesta
            res.status(200).json({ message: 'Usuario eliminado correctamente' });
        } catch (error) {
            // Maneja cualquier error que pueda ocurrir
            console.error('Error al eliminar usuario:', error);
            res.status(500).json({ error: 'Hubo un problema al eliminar el usuario' });
        }
    } 
    
    static changeRole = async (req: Request, res: Response) => {
        try {
            const{userid}=req.params;
            const { role } = req.body;
            const user = await User.findByPk(userid);
            if (!user) {
                return res.status(404).json({ error: 'Usuario no encontrado' });
            }
            await user.update(req.body );
            res.json({ message: 'Rol actualizado', user });
        } catch (error) {
            console.error('Error al actualizar el rol del usuario:', error);
            res.status(500).json({ error: 'Hubo un problema al actualizar el rol del usuario' });
        }
    }

  }