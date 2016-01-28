import { equal } from 'utilities';
import { has, extend, isEmpty, isObject } from 'utilities';
import { Model } from './model';
function objToPaths(obj, separator = ".") {
    var ret = {};
    for (var key in obj) {
        var val = obj[key];
        if (val && (val.constructor === Object || val.constructor === Array) && !isEmpty(val)) {
            var obj2 = objToPaths(val);
            for (var key2 in obj2) {
                var val2 = obj2[key2];
                ret[key + separator + key2] = val2;
            }
        }
        else {
            ret[key] = val;
        }
    }
    return ret;
}
function isOnNestedModel(obj, path, separator = ".") {
    var fields = path ? path.split(separator) : [];
    var result = obj;
    for (let i = 0, n = fields.length; i < n; i++) {
        if (result instanceof Model)
            return true;
        if (!result)
            return false;
        result = result[fields[i]];
    }
    return false;
}
function getNested(obj, path, return_exists, separator = ".") {
    var fields = path ? path.split(separator) : [];
    var result = obj;
    return_exists || (return_exists === false);
    for (var i = 0, n = fields.length; i < n; i++) {
        if (return_exists && !has(result, fields[i])) {
            return false;
        }
        result = result instanceof Model ? result.get(fields[i]) : result[fields[i]];
        if (result == null && i < n - 1) {
            result = {};
        }
        if (typeof result === 'undefined') {
            if (return_exists) {
                return true;
            }
            return result;
        }
    }
    if (return_exists) {
        return true;
    }
    return result;
}
function setNested(obj, path, val, options) {
    options = options || {};
    var separator = options.separator || ".";
    var fields = path ? path.split(separator) : [];
    var result = obj;
    for (var i = 0, n = fields.length; i < n && result !== undefined; i++) {
        var field = fields[i];
        if (i === n - 1) {
            options.unset ? delete result[field] : result[field] = val;
        }
        else {
            if (typeof result[field] === 'undefined' || !isObject(result[field])) {
                if (options.unset) {
                    delete result[field];
                    return;
                }
                var nextField = fields[i + 1];
                result[field] = /^\d+$/.test(nextField) ? [] : {};
            }
            result = result[field];
            if (result instanceof Model) {
                let rest = fields.slice(i + 1);
                return result.set(rest.join('.'), val, options);
            }
        }
    }
}
function deleteNested(obj, path) {
    setNested(obj, path, null, {
        unset: true
    });
}
export class NestedModel extends Model {
    get(attr) {
        return getNested(this._attributes, attr);
    }
    set(key, val, options) {
        var attr, attrs, unset, changes, silent, changing, prev, current;
        if (key == null)
            return this;
        if (typeof key === 'object') {
            attrs = key;
            options = val || {};
        }
        else {
            (attrs = {})[key] = val;
        }
        options || (options = {});
        unset = options.unset;
        silent = options.silent;
        changes = [];
        changing = this._changing;
        this._changing = true;
        if (!changing) {
            this._previousAttributes = extend({}, this._attributes);
            this._changed = {};
        }
        current = this._attributes, prev = this._previousAttributes;
        if (this.idAttribute in attrs)
            this.id = attrs[this.idAttribute];
        attrs = objToPaths(attrs);
        var alreadyTriggered = {};
        var separator = NestedModel.keyPathSeparator;
        if (!this._nestedListener)
            this._nestedListener = {};
        for (attr in attrs) {
            val = attrs[attr];
            if (!equal(getNested(current, attr), val)) {
                changes.push(attr);
                this._changed[attr] = val;
            }
            if (!equal(getNested(prev, attr), val)) {
                setNested(this.changed, attr, val);
            }
            else {
                deleteNested(this.changed, attr);
            }
            if (unset) {
                let nestedValue = getNested(current, attr);
                if (nestedValue instanceof Model) {
                    let fn = this._nestedListener[attr];
                    if (fn) {
                        nestedValue.off('change', fn);
                        delete this._nestedListener[attr];
                    }
                }
                deleteNested(current, attr);
            }
            else {
                if (!isOnNestedModel(current, attr, separator)) {
                    if (val instanceof Model) {
                        let fn = (model) => {
                            for (let key in model.changed) {
                                this._changed[attr + separator + key] = model.changed[key];
                                this.trigger('change:' + attr + separator + key, model.changed[key]);
                            }
                            this.trigger('change', this, options);
                        };
                        this._nestedListener[attr] = fn;
                        val.on('change', fn);
                    }
                }
                else {
                    alreadyTriggered[attr] = true;
                }
                setNested(current, attr, val);
            }
        }
        if (!silent) {
            if (changes.length)
                this._pending = true;
            for (var i = 0, l = changes.length; i < l; i++) {
                let key = changes[i];
                if (!alreadyTriggered.hasOwnProperty(key) || !alreadyTriggered[key]) {
                    alreadyTriggered[key] = true;
                    this.trigger('change:' + key, this, getNested(current, key), options);
                }
                var fields = key.split(separator);
                for (var n = fields.length - 1; n > 0; n--) {
                    var parentKey = fields.slice(0, n).join(separator), wildcardKey = parentKey + separator + '*';
                    if (!alreadyTriggered.hasOwnProperty(wildcardKey) || !alreadyTriggered[wildcardKey]) {
                        alreadyTriggered[wildcardKey] = true;
                        this.trigger('change:' + wildcardKey, this, getNested(current, parentKey), options);
                    }
                    if (!alreadyTriggered.hasOwnProperty(parentKey) || !alreadyTriggered[parentKey]) {
                        alreadyTriggered[parentKey] = true;
                        this.trigger('change:' + parentKey, this, getNested(current, parentKey), options);
                    }
                }
            }
        }
        if (changing)
            return this;
        if (!silent) {
            while (this._pending) {
                this._pending = false;
                this.trigger('change', this, options);
            }
        }
        this._pending = false;
        this._changing = false;
        return this;
    }
    clear(options) {
        var attrs = {};
        var shallowAttributes = objToPaths(this._attributes);
        for (var key in shallowAttributes)
            attrs[key] = void 0;
        return this.set(attrs, extend({}, options, {
            unset: true
        }));
    }
    hasChanged(attr) {
        if (attr == null) {
            return !Object.keys(this.changed).length;
        }
        return getNested(this.changed, attr) !== undefined;
    }
    changedAttributes(diff) {
        if (!diff)
            return this.hasChanged() ? objToPaths(this.changed) : false;
        var old = this._changing ? this._previousAttributes : this._attributes;
        diff = objToPaths(diff);
        old = objToPaths(old);
        var val, changed = false;
        for (var attr in diff) {
            if (equal(old[attr], (val = diff[attr])))
                continue;
            (changed || (changed = {}))[attr] = val;
        }
        return changed;
    }
    previous(attr) {
        if (attr == null || !this._previousAttributes) {
            return null;
        }
        return getNested(this._previousAttributes, attr);
    }
    previousAttributes() {
        return extend({}, this._previousAttributes);
    }
    destroy() {
        for (let key in this._nestedListener) {
            let fn = this._nestedListener[key];
            if (fn) {
                let m = this.get(key);
                if (m)
                    m.off(key, fn);
            }
        }
        super.destroy();
    }
}
NestedModel.keyPathSeparator = '.';
