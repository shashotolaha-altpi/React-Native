import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class transaction extends Sequelize.Model {}

transaction.init(
  {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount_paid: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    amount_pending: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    amount_advanced: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    transaction_date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.DATE.NOW(),
    },
  },

  {
    sequelize: connection, // Ensure the connection is correctly passed
    freezeTableName: true,
    timestamps: true,
    // modelName: 'User',
  },
);

export default transaction;
