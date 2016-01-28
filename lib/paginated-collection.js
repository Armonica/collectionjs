import { EventEmitter } from 'eventsjs/lib/events';
export class PaginatedCollection extends EventEmitter {
    constructor(models, options) {
        super();
    }
    get length() {
        return 0;
    }
    indexOf(item) {
        return 0;
    }
    forEach(fn) {
    }
    push(item) {
    }
}
