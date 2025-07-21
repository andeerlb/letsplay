export default function userRoutes() {
  this.namespace = 'api';
  this.timing = 0;

  this.get('/user', (schema) => {
    return schema.users.find(1);
  });
}