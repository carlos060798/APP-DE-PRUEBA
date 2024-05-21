import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../config/database';
import Product from './product';
import User from './user';

interface SaleAttributes {
  id: string;
  products_id: string;
  qty: number;
  sale_at: Date;
  users_id: string;
}

interface SaleCreationAttributes extends Optional<SaleAttributes, 'id'> {}

class Sale extends Model<SaleAttributes, SaleCreationAttributes> implements SaleAttributes {
  public id!: string;
  public products_id!: string;
  public qty!: number;
  public sale_at!: Date;
  public users_id!: string;
}

Sale.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    products_id: {
      type: DataTypes.UUID,
      references: {
        model: Product,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sale_at: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    users_id: {
      type: DataTypes.UUID,
      references: {
        model: User,
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    },
  },
  {
    sequelize,
    tableName: 'sales',
  }
);

Sale.belongsTo(Product, { foreignKey: 'products_id' });
Sale.belongsTo(User, { foreignKey: 'users_id' });

export default Sale;