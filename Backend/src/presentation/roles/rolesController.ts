import Role from '../../models/role';
import { Request, Response } from 'express';
import sequelize from '../../config/database';



export default class RoleController {
    
    static Rolecreate = async (req: Request, res: Response) => {
        try {
            console.log("Conectando a la base de datos...");
          await sequelize.authenticate();
          console.log("Conexión establecida correctamente.");
            const role = new Role(req.body);
            console.log("Guardando rol en la base de datos..." , role);
            await role.save();
            console.log("Rol guardado correctamente en la base de datos.");
            res.json({ message: 'Role created' ,role});
        } catch (err) {
            res.status(500).json({ err });
        }
     }  

        static RoleList = async (req: Request, res: Response) => {
            try {
                const roles = await Role.findAll();
                res.json(roles);
            } catch (err) {
                res.status(500).json({ err });
            }
        }

        static RoleListById = async (req: Request, res: Response) => {
            try {
                const { id } = req.params;
                const roles = await Role.findByPk(id);
                res.json(roles);
            } catch (err) {
                res.status(500).json({ err });
            }   
        }
    
     
}