export class SilentHandledError extends Error {
    constructor(message = 'This error was already handled') {
        super(message);
        this.name = 'SilentHandledError';
    }
}