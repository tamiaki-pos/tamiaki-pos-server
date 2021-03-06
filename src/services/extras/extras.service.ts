// Initializes the `extras` service on path `/extras`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Extras } from './extras.class';
import createModel from '../../models/extras.model';
import hooks from './extras.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'extras': Extras & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extras', new Extras(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extras');

  service.hooks(hooks);
}
