import sequelize from '../config/database';
import Role from '../models/role';
import User from '../models/user';
import Product from '../models/product';
import Sale from '../models/sale';

export const start = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync({ force: true });
    console.log('Database synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

