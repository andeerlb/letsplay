import { createServer } from 'miragejs';
import { models } from './models';
import { seeds } from './seeds';
import userRoutes from './routes/users';
import settingRoutes from './routes/settings';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    models,
    seeds,
    routes() {
      userRoutes.call(this);
      settingRoutes.call(this);
    },
  });
}
