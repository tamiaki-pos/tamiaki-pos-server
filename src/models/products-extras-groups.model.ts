// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  /**
   * products-extras-groups model is used to bridge products and extras-groups models
   */
  const productsExtrasGroups = sequelizeClient.define('products_extras_groups', {
    /**
     * used to relate model with products model
     */
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    /**
     * used to relate model with extras-groups model
     */
    extrasGroupId: {
      type: DataTypes.INTEGER,
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
