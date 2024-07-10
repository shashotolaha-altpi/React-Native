import Sequelize, {DataTypes} from 'rn-sequelize';
import {connection} from '../db';

class attendance_master extends Sequelize.Model {}

attendance_master.init(
  {
    attendance_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    present_user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    absent_user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    holiday_user_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    attendance_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.DATE.Now(),
    },
  },

  {
    sequelize: connection, // Ensure the connection is correctly passed
    freezeTableName: true,
    timestamps: true,
    // modelName: 'User',
  },
);

export default attendance_master;
