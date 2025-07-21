export default function settingRoutes() {
  this.namespace = 'api';
  this.timing = 0;

  this.get('/settings', (schema) => {
    return schema.settings.find(1).attrs;
  });
}