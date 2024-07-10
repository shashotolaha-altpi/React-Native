// /* eslint-disable prettier/prettier */
import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class fees_type extends Sequelize.Model {}

fees_type.init(
  {
    fee_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
    },
    fee_amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: connection, // Ensure the connection is correctly passed
    freezeTableName: true,
    timestamps: true,
    // modelName: 'User',
  },
);

export default fees_type;
