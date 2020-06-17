// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const productsExtrasGroups = sequelizeClient.define('products_extras_groups', {
    text: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options: any) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  (productsExtrasGroups as any).associate = function (models: any) {
    models.products_extras_groups.belongsTo(models.extras_groups)
    models.products_extras_groups.belongsTo(models.products)
  };

  return productsExtrasGroups;
}
