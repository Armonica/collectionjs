import { extend } from 'utilities';
import { Collection } from './collection';
import { RestModel } from './rest-model';
import { Promise } from 'utilities';
import { RestMethod, sync } from './persistence';
export class RestCollection extends Collection {
    constructor(models, options = {}) {
        super(models, options);
        if (options.url)
            this.url = options.url;
    }
    getURL() {
        return typeof this.url === 'function' ? this.url() : this.url;
    }
    fetch(options) {
        options = options ? extend({}, options) : {};
        let url = this.getURL();
        if (url == null)
            return Promise.reject(new Error('Url or rootURL no specified'));
        options.url = url;
        this.trigger('before:sync');
        return this.sync(RestMethod.Read, this, options)
            .then((results) => {
            this[options.reset ? 'reset' : 'set'](results.content, options);
            this.trigger('sync');
            return this;
        }).catch((e) => {
            this.trigger('error', e);
            throw e;
        });
    }
    create(value, options) {
        options = options ? extend({}, options) : {};
        let model;
        let url = this.getURL();
        if (url == null)
            throw new Error('Url or rootURL no specified');
        options.url = url;
        if (value instanceof RestModel) {
            model = value;
        }
        else {
            model = new this.Model(value, { parse: true });
        }
        if (options.wait === void 0)
            options.wait = true;
        if (!options.wait)
            this.add(model, options);
        this.trigger('before:create', this, model, value, options);
        model.save().then(() => {
            if (!options.wait)
                this.add(model, options);
            this.trigger('create', this, model, value, options);
            if (options.complete)
                options.complete(null, model);
        }).catch((e) => {
            this.trigger('error', e);
            if (options.complete)
                options.complete(e, null);
        });
        return model;
    }
    sync(method, model, options) {
        return sync(method, model, options);
    }
}
