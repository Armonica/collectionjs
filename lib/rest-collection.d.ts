import { Collection, CollectionOptions, CollectionCreateOptions, CollectionSetOptions } from './collection';
import { IPersistableModel, IPersistableCollection, ISerializable } from './interfaces';
import { IPromise } from 'utilities';
import { RestMethod, SyncOptions, SyncResponse } from './persistence';
export interface RestCollectionOptions<T extends IPersistableModel> extends CollectionOptions<T> {
    url?: string;
    sync?: (method: RestMethod) => IPromise<any>;
}
export interface CollectionFetchOptions extends CollectionSetOptions, SyncOptions {
    parse?: boolean;
    reset?: boolean;
}
export interface RestCollectionCreateOptions extends CollectionCreateOptions, SyncOptions {
    wait?: boolean;
    complete?: (error: Error, model: IPersistableModel) => void;
}
export declare class RestCollection<T extends IPersistableModel> extends Collection<T> implements IPersistableCollection {
    url: string | (() => string);
    getURL(): string;
    constructor(models: any, options?: RestCollectionOptions<T>);
    fetch(options?: CollectionFetchOptions): IPromise<any>;
    create(value: any, options?: RestCollectionCreateOptions): IPersistableModel;
    sync(method: RestMethod, model: ISerializable, options: SyncOptions): IPromise<SyncResponse>;
}
