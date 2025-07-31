import { createStorage } from '@storage/createStorage';
import { Settings } from '@tps/api';

export const settingsStorage = createStorage<Settings>('settings');
