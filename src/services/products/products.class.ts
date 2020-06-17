import { Service, SequelizeServiceOptions } from 'feathers-sequelize';
import { Application } from '../../declarations';

export class Products extends Service {
  constructor(options: Partial<SequelizeServiceOptions>, app: Application) {
    super(options);
  }
}
