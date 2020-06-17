// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  /**
   * extras-groups-extras model used to represent
   * which extra is contains in which extras-group
   * and its default value
   */
  const extrasGroupsExtras = sequelizeClient.define('extras_groups_extras', {
    /**
     * used to relate model with extras model
     */
    extraId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    /**
     * used to relate model with extras-groups model
     */
    extrasGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    /**
     * used to specify if the extra is selected or not
     */
    defaultValue: {
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
  (extrasGroupsExtras as any).associate = function (models: any) {
    models.extras_groups_extras.belongsTo(models.extras_groups)
    models.extras_groups_extras.belongsTo(models.extras)
  };

  return extrasGroupsExtras;
}
