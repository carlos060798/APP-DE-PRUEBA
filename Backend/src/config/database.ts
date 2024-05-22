// config/database.ts
import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'APP-DE-PRUEBA/.database.sqlite'
});

export default sequelize ;
