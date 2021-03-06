import { Application } from '../declarations';
import users from './users/users.service';
import products from './products/products.service';
import extras from './extras/extras.service';
import extrasGroups from './extras-groups/extras-groups.service';
import extrasGroupsExtras from './extras-groups-extras/extras-groups-extras.service';
import productsExtrasGroups from './products-extras-groups/products-extras-groups.service';
import billingSessions from './billing-sessions/billing-sessions.service';
import orders from './orders/orders.service';
import orderProducts from './order-products/order-products.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(products);
  app.configure(extras);
  app.configure(extrasGroups);
  app.configure(extrasGroupsExtras);
  app.configure(productsExtrasGroups);
  app.configure(billingSessions);
  app.configure(orders);
  app.configure(orderProducts);
}
