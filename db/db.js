import Sequeslize from 'sequelize';
import config from './config';

const sequelize = new Sequeslize(
  config.database,
  config.usename,
  config.password,
  {
    host: config.host,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 3000,
    },
  },
);

export default sequelize;
