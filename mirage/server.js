import { createServer } from 'miragejs';
import { models } from './models';
import { seeds } from './seeds';
import userRoutes from './routes/users';

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    models,
    seeds,
    routes() {
      userRoutes.call(this);
    },
  });
}
