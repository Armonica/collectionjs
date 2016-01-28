import { EventEmitter } from 'eventsjs/lib/events';
import { inherits } from 'utilities';
export class BaseObject extends EventEmitter {
}
BaseObject.extend = function (proto, stat) {
    return inherits(this, proto, stat);
};
