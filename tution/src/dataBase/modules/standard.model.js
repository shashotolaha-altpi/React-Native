import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class standard extends Sequelize.Model {}

standard.init(
  {
    standard_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    standard_name: {
      type: DataTypes.STRING,
      unique: true,
    },
  },

  {
    sequelize: connection,
    freezeTableName: true,
    timestamps: true,
    // modelName: 'User',
  },
);

export default standard;
