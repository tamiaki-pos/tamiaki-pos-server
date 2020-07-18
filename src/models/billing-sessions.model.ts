// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const billingSessions = sequelizeClient.define('billing_sessions', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    tableId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    },
    paidAmount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: 0
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (billingSessions as any).associate = function (models: any) {
    models.billing_sessions.belongsTo(models.users)
    models.billing_sessions.hasMany(models.orders)
  };

  return billingSessions;
}
