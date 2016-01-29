import { IPromise } from 'utilities';
import { Model, ModelOptions } from './model';
import { IPersistableModel, IPersistableCollection, ISerializable } from './interfaces';
import { RestMethod, SyncFunc, SyncOptions, SyncResponse } from './persistence';
export interface RestModelOptions extends ModelOptions {
    url?: string;
    sync?: SyncFunc;
}
export declare function normalize_path(url: string, id: string): string;
export interface ModelSaveOptions extends SyncOptions {
    changed?: boolean;
}
export interface ModelRemoveOptions extends SyncOptions {
    wait?: boolean;
}
export declare class RestModel extends Model implements IPersistableModel {
    idAttribute: string;
    collection: IPersistableCollection;
    rootURL: string;
    constructor(attr?: any, options?: RestModelOptions);
    getURL(id?: string): string;
    fetch(options?: any): IPromise<this>;
    save(options?: ModelSaveOptions): IPromise<any>;
    remove(options?: ModelRemoveOptions): IPromise<any>;
    sync(method: RestMethod, model: ISerializable, options: SyncOptions): IPromise<SyncResponse>;
}
