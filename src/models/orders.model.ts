// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const orders = sequelizeClient.define('orders', {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    billAmount: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      defaultValue: 0
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (orders as any).associate = function (models: any) {
    models.orders.belongsTo(models.users)
    models.orders.belongsTo(models.billing_sessions)
  };

  return orders;
}
