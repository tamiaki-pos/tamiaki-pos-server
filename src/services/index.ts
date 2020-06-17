import { Application } from '../declarations';
import users from './users/users.service';
import products from './products/products.service';
import extras from './extras/extras.service';
import extrasGroups from './extras-groups/extras-groups.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application) {
  app.configure(users);
  app.configure(products);
  app.configure(extras);
  app.configure(extrasGroups);
}
