export default function userRoutes() {
  this.namespace = 'api';

  this.get('/users', (schema) => {
    return schema.users.all();
  });

  this.get('/users/:id', (schema, request) => {
    return schema.users.find(request.params.id);
  });
}