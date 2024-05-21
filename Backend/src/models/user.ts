// models/user.ts
import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Role from './role';

interface UserAttributes {
  id: string;
  document: string;
  last_name: string;
  name: string;
  roles_id: string | null;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: string;
  public document!: string;
  public last_name!: string;
  public name!: string;
  public roles_id!: string | null;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    document: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    roles_id: {
      type: DataTypes.UUID,
      references: {
        model: Role,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

User.belongsTo(Role, { foreignKey: 'roles_id' });

export default User;