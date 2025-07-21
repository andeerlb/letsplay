import { createServer, Model, Response } from 'miragejs';

export function makeServer() {
  return createServer({
    models: {
      user: Model,
    },

    routes() {
      this.namespace = 'api';

      this.get('/users', (schema) => {
        return schema.all('user');
      });

      this.post('/login', (_, request) => {
        const attrs = JSON.parse(request.requestBody);
        if (attrs.username === 'admin' && attrs.password === '123') {
          return { token: 'fake-jwt-token' };
        }
        return new Response(401, {}, { error: 'Invalid credentials' });
      });
    },

    seeds(server) {
      server.create('user', { name: 'Anderson' });
    },
  });
}
