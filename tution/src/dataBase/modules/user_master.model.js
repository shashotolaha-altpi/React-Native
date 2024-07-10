import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class user_master extends Sequelize.Model {}

user_master.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    standard_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    division_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fee_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    sequelize: connection, // Ensure the connection is correctly passed
    freezeTableName: true,
    timestamps: true,
  },
);

export default user_master;
