import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database'

interface RoleAttributes {
  id: string;
  name: string;
}

interface RoleCreationAttributes extends Optional<RoleAttributes, 'id'> {}

class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
  public id!: string;
  public name!: string;
}

Role.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'roles',
  }
);

export default Role;