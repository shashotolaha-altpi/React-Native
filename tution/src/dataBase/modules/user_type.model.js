import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class user_type extends Sequelize.Model {}

user_type.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    user_type: {
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

export default user_type;
