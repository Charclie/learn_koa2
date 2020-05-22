import Sequelize from 'sequelize';
import db from '../db/db';

const user = db.define(
  'user',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    name: Sequelize.STRING(255),
    age: Sequelize.INTEGER,
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default user;
