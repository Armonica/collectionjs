import { BaseObject } from './object';
import { uniqueId, equal } from 'utilities';
import { has, extend } from 'utilities';
export class Model extends BaseObject {
    constructor(attributes = {}, options) {
        options = options || {};
        this._attributes = {};
        this.set(attributes, null, { silent: true });
        this.uid = uniqueId('uid');
        this._changed = {};
        this.collection = options.collection;
        super();
    }
    get id() {
        if (this.idAttribute in this._attributes)
            return this._attributes[this.idAttribute];
    }
    set(key, val, options = {}) {
        var attr, attrs = {}, unset, changes, silent, changing, prev, current;
        if (key == null)
            return this;
        if (typeof key === 'object') {
            attrs = key;
            options = val;
        }
        else {
            attrs[key] = val;
        }
        options || (options = {});
        unset = options.unset;
        silent = options.silent;
        changes = [];
        changing = this._changing;
        this._changing = true;
        if (!changing) {
            this._previousAttributes = extend(Object.create(null), this._attributes);
            this._changed = {};
        }
        current = this._attributes, prev = this._previousAttributes;
        for (attr in attrs) {
            val = attrs[attr];
            if (!equal(current[attr], val))
                changes.push(attr);
            if (!equal(prev[attr], val)) {
                this._changed[attr] = val;
            }
            else {
                delete this._changed[attr];
            }
            unset ? delete current[attr] : current[attr] = val;
        }
        if (!silent) {
            if (changes.length)
                this._pending = !!options;
            for (var i = 0, l = changes.length; i < l; i++) {
                this.trigger('change:' + changes[i], this, current[changes[i]], options);
            }
        }
        if (changing)
            return this;
        if (!silent) {
            while (this._pending) {
                options = this._pending;
                this._pending = false;
                this.trigger('change', this, options);
            }
        }
        this._pending = false;
        this._changing = false;
        return this;
    }
    get(key) {
        return this._attributes[key];
    }
    unset(key, options) {
        this.set(key, void 0, extend({}, options, { unset: true }));
    }
    has(attr) {
        return this.get(attr) != null;
    }
    hasChanged(attr) {
        if (attr == null)
            return !!Object.keys(this.changed).length;
        return has(this.changed, attr);
    }
    clear(options) {
        let attrs = {};
        for (let key in this._attributes)
            attrs[key] = void 0;
        return this.set(attrs, extend({}, options, { unset: true }));
    }
    get changed() {
        return extend({}, this._changed);
    }
    changedAttributes(diff) {
        if (!diff)
            return this.hasChanged() ? extend(Object.create(null), this.changed) : false;
        var val, changed = {};
        var old = this._changing ? this._previousAttributes : this._attributes;
        for (var attr in diff) {
            if (equal(old[attr], (val = diff[attr])))
                continue;
            (changed || (changed = {}))[attr] = val;
        }
        return changed;
    }
    previous(attr) {
        if (attr == null || !this._previousAttributes)
            return null;
        return this._previousAttributes[attr];
    }
    previousAttributes() {
        return extend(Object.create(null), this._previousAttributes);
    }
    toJSON() {
        return JSON.parse(JSON.stringify(this._attributes));
    }
    clone() {
        return new (this.constructor)(this._attributes);
    }
}
