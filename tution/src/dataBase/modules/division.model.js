import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class division extends Sequelize.Model {}

division.init(
  {
    division_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    division_name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },

  {
    sequelize: connection, // Ensure the connection is correctly passed
    freezeTableName: true,
    timestamps: true,
    // modelName: 'User',
  },
);

export default division;
