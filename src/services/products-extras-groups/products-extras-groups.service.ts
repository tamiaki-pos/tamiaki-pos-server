// Initializes the `products-extras-groups` service on path `/products-extras-groups`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ProductsExtrasGroups } from './products-extras-groups.class';
import createModel from '../../models/products-extras-groups.model';
import hooks from './products-extras-groups.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'products-extras-groups': ProductsExtrasGroups & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/products-extras-groups', new ProductsExtrasGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('products-extras-groups');

  service.hooks(hooks);
}
