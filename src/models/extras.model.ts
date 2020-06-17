// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const extras = sequelizeClient.define('extras', {
    /**
     * used for extras name
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * used for extras description
     */
    description: {
      type: DataTypes.STRING
    },
    /**
     * used for private notes
     */
    notes: {
      type: DataTypes.STRING,
    },
    /**
     * used for extras price
     */
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    /**
     * used to check if extra is available
     * when extra is ordered we update the value
     * -1 represent unlimited amount of stock
     * =0 means that it is not available
     * >0 means that extra is in stock
     */
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    /**
     * used to override the availability of
     * the extra, if value is false
     * the extra cannot be ordered
     */
    available: {
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
  (extras as any).associate = function (models: any) {
    models.extras.belongsToMany(models.extras_groups, { through: 'extras_groups_extras' })
  };

  return extras;
}
