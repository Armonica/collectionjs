import { extend } from 'utilities';
import { Promise } from 'utilities';
import { Model } from './model';
import { RestMethod, sync } from './persistence';
export function normalize_path(url, id) {
    let i, p = "";
    if ((i = url.indexOf('?')) >= 0) {
        p = url.substr(i);
        url = url.substr(0, i);
    }
    if (url[url.length - 1] !== '/')
        url += '/';
    return url + id + p;
}
export class RestModel extends Model {
    constructor(attr, options = {}) {
        super(attr, options);
        this.idAttribute = 'id';
        if (options.url) {
            this.rootURL = options.url;
        }
    }
    getURL(id) {
        let url = this.rootURL;
        if (this.collection && this.collection.getURL()) {
            url = this.collection.getURL();
        }
        if (id && url) {
            url = normalize_path(url, this.id);
        }
        return url;
    }
    fetch(options) {
        options = options ? extend({}, options) : {};
        let url = this.getURL();
        if (url == null)
            return Promise.reject(new Error('Url or rootURL no specified'));
        options.url = url;
        this.trigger('before:fetch', this, options);
        return this.sync(RestMethod.Read, this, options)
            .then((result) => {
            if (result)
                this.set(this.parse(result.content, options), options);
            this.trigger('fetch', this, result, options);
            return this;
        }).catch((e) => {
            this.trigger('error', this, e);
            if (e) {
                throw e;
            }
            return this;
        });
    }
    save(options) {
        options = options ? extend({}, options) : {};
        this.trigger('before:save', this, options);
        let method = RestMethod[this.isNew ? 'Create' : options.changed ? 'Patch' : "Update"];
        let url = this.getURL(this.id);
        if (url == null)
            return Promise.reject(new Error('Url or rootURL no specified'));
        options.url = url;
        return this.sync(method, this, options)
            .then((result) => {
            this.set(result.content, options);
            this.trigger('save', this, result, options);
            return this;
        }).catch((e) => {
            this.trigger('error', this, e);
            throw e;
        });
    }
    remove(options) {
        options = options ? extend({}, options) : {};
        if (this.isNew) {
            super.remove(options);
            return Promise.resolve(this);
        }
        let url = this.getURL(this.id);
        if (url == null)
            return Promise.reject(new Error('Url or rootURL no specified'));
        this.trigger('before:remove', this, options);
        if (!options.wait)
            super.remove(options);
        options.url = url;
        return this.sync(RestMethod.Delete, this, options)
            .then((result) => {
            super.remove(options);
            return this;
        }).catch((e) => {
            this.trigger('error', this, e);
            throw e;
        });
    }
    sync(method, model, options) {
        return sync(method, model, options);
    }
}
