// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
import { Sequelize, DataTypes } from 'sequelize';
import { Application } from '../declarations';

export default function (app: Application) {
  const sequelizeClient: Sequelize = app.get('sequelizeClient');
  const products = sequelizeClient.define('products', {
    /**
     * used for product name
     */
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    /**
     * used for product description
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
     * used for product base price
     */
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    /**
     * used to check if item is available
     * when product is ordered we update the value
     * -1 represent unlimited amount of products
     * =0 means that it is not available
     * >0 means that product is in stock
     */
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: -1
    },
    /**
     * used to override the availability of
     * the product, if value is false
     * the product cannot be ordered
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
  (products as any).associate = function (models: any) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return products;
}
