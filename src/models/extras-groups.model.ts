// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');

  /**
   * used to group extras
   */
  const extrasGroups = sequelizeClient.define('extras_groups', {
    /**
     * used for name
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * used for description
     */
    description: {
      type: DataTypes.STRING
    },
    /**
     * used to indicate if you can choose
     * a single extra or multiple
     */
    type: {
      type: DataTypes.ENUM('SINGLE', 'MULTIPLE'),
      allowNull: false
    },
    /**
     * used to indicate if you have too choose
     * an extra of this group
     */
    required: {
      type: DataTypes.BOOLEAN,
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
  (extrasGroups as any).associate = function (models: any) {
    models.extras_groups.belongsToMany(models.extras, { through: 'extras_groups_extras' })
    models.extras_groups.belongsToMany(models.products, { through: 'products_extras_groups' })
  };

  return extrasGroups;
}
