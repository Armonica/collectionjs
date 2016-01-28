
import {EventEmitter} from 'eventsjs/lib/events';
import {ICollection, IModel} from './interfaces';
import {CollectionOptions} from './collection';

export interface PaginatedCollectionOptions<U extends IModel> extends CollectionOptions<U> {
	
}

export class PaginatedCollection<U extends IModel> extends EventEmitter implements ICollection {
	
	public get length () {
		return 0
	}
	
	constructor (models: U[], options: PaginatedCollectionOptions<U>) {
		super()
	}
	
	
	
	indexOf (item: IModel): number {
		return 0
	}
	
	forEach(fn: (item: IModel, index?: number) => any) {
		
	}
	push(item: IModel): any {
		
	}
}