// Initializes the `extras-groups` service on path `/extras-groups`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ExtrasGroups } from './extras-groups.class';
import createModel from '../../models/extras-groups.model';
import hooks from './extras-groups.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'extras-groups': ExtrasGroups & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extras-groups', new ExtrasGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extras-groups');

  service.hooks(hooks);
}
