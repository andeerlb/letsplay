import { storage } from '@storage/mmkv';

export function createStorage<T>(key: string) {
    return {
        set(value: T) {
            storage.set(key, JSON.stringify(value));
        },

        get(): T | null {
            const json = storage.getString(key);
            return json ? (JSON.parse(json) as T) : null;
        },

        delete() {
            storage.delete(key);
        },

        exists(): boolean {
            return storage.contains(key);
        },
    };
}
