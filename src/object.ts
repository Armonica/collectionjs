/// <reference path="../node_modules/utilities/utilities.d.ts" />
/// <reference path="../node_modules/eventsjs/events.d.ts" />

import {EventEmitter} from 'eventsjs/lib/events';
import {inherits} from 'utilities';

export class BaseObject extends EventEmitter {
  static extend = function <T>(proto: any, stat?: any): T {
    return inherits(this, proto, stat);
  }
}
