// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const extrasGroupsExtras = sequelizeClient.define('extras_groups_extras', {
    extraId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    extrasGroupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
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
