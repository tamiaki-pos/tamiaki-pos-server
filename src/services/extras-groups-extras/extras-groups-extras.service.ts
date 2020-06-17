// Initializes the `extras-groups-extras` service on path `/extras-groups-extras`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { ExtrasGroupsExtras } from './extras-groups-extras.class';
import createModel from '../../models/extras-groups-extras.model';
import hooks from './extras-groups-extras.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'extras-groups-extras': ExtrasGroupsExtras & ServiceAddons<any>;
  }
}

export default function (app: Application) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/extras-groups-extras', new ExtrasGroupsExtras(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('extras-groups-extras');

  service.hooks(hooks);
}
