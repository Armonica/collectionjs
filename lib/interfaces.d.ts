import { IEventEmitter } from 'eventsjs/lib/events';
export interface IModelOptions {
    collection?: ICollection;
}
export interface IModel extends IEventEmitter {
    collection?: ICollection;
    idAttribute?: string;
    uid: string;
    id?: string;
    get(key: string): any;
    set(key: string | Object, value?: any): any;
    toJSON?: () => any;
    hasChanged(attr?: any): boolean;
    changed: {
        [key: string]: any;
    };
}
export interface IModelConstructor {
    new (attr?: any, options?: IModelOptions): IModel;
}
export interface ICollection extends IEventEmitter {
    length: number;
    indexOf: (item: IModel) => number;
    forEach(fn: (item: IModel, index?: number) => any): any;
    push(item: IModel): any;
}
export interface ICollectionConstructor {
    new <T>(models?: any[], options?: any): ICollection;
}
export interface Silenceable {
    silent?: boolean;
}