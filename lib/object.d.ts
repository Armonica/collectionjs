/// <reference path="../node_modules/utilities/utilities.d.ts" />
/// <reference path="../node_modules/eventsjs/events.d.ts" />
import { EventEmitter } from 'eventsjs/lib/events';
export declare class BaseObject extends EventEmitter {
    static extend: <T>(proto: any, stat?: any) => T;
}
