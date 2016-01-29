(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["collection"] = factory();
	else
		root["collection"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { throw err; };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["utils"] = factory();
		else
			root["utils"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// on error function for async loading
	/******/ 	__webpack_require__.oe = function(err) { throw err; };

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(__webpack_require__.s = 8);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.nextTick = undefined;
		exports.ajax = ajax;
		exports.uniqueId = uniqueId;
		exports.proxy = proxy;
		exports.bind = bind;
		exports.callFunc = callFunc;
		exports.equal = equal;
		exports.triggerMethodOn = triggerMethodOn;
		exports.getOption = getOption;
		exports.inherits = inherits;

		var _objects = __webpack_require__(2);

		var _arrays = __webpack_require__(1);

		var _strings = __webpack_require__(4);

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		var idCounter = 0;
		var nativeBind = Function.prototype.bind;
		function ajax() {
		    var e;
		    if (window.hasOwnProperty('XMLHttpRequest')) {
		        return new XMLHttpRequest();
		    }
		    try {
		        return new ActiveXObject('msxml2.xmlhttp.6.0');
		    } catch (_error) {
		        e = _error;
		    }
		    try {
		        return new ActiveXObject('msxml2.xmlhttp.3.0');
		    } catch (_error) {
		        e = _error;
		    }
		    try {
		        return new ActiveXObject('msxml2.xmlhttp');
		    } catch (_error) {
		        e = _error;
		    }
		    return e;
		}
		function uniqueId() {
		    var prefix = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

		    return prefix + ++idCounter;
		}
		function proxy(from, to, fns) {
		    if (!Array.isArray(fns)) fns = [fns];
		    fns.forEach(function (fn) {
		        if (typeof to[fn] === 'function') {
		            from[fn] = bind(to[fn], to);
		        }
		    });
		}
		function bind(method, context) {
		    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		        args[_key - 2] = arguments[_key];
		    }

		    if (typeof method !== 'function') throw new Error('method not at function');
		    if (nativeBind != null) return nativeBind.call.apply(nativeBind, [method, context].concat(_toConsumableArray(args)));
		    args = args || [];
		    var fnoop = function fnoop() {};
		    var fBound = function fBound() {
		        var ctx = this instanceof fnoop ? this : context;
		        return callFunc(method, ctx, args.concat((0, _arrays.slice)(arguments)));
		    };
		    fnoop.prototype = this.prototype;
		    fBound.prototype = new fnoop();
		    return fBound;
		}
		function callFunc(fn, ctx) {
		    var args = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

		    switch (args.length) {
		        case 0:
		            return fn.call(ctx);
		        case 1:
		            return fn.call(ctx, args[0]);
		        case 2:
		            return fn.call(ctx, args[0], args[1]);
		        case 3:
		            return fn.call(ctx, args[0], args[1], args[2]);
		        case 4:
		            return fn.call(ctx, args[0], args[1], args[2], args[3]);
		        case 5:
		            return fn.call(ctx, args[0], args[1], args[2], args[3], args[4]);
		        default:
		            return fn.apply(ctx, args);
		    }
		}
		function equal(a, b) {
		    return eq(a, b, [], []);
		}
		function triggerMethodOn(obj, eventName, args) {
		    var ev = (0, _strings.camelcase)("on-" + eventName.replace(':', '-'));
		    if (obj[ev] && typeof obj[ev] === 'function') {
		        callFunc(obj[ev], obj, args);
		    }
		    if (typeof obj.trigger === 'function') {
		        args = [eventName].concat(args);
		        callFunc(obj.trigger, obj, args);
		    }
		}
		function getOption(option, objs) {
		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;

		    try {
		        for (var _iterator = objs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		            var o = _step.value;

		            if ((0, _objects.isObject)(o) && o[option]) return o[option];
		        }
		    } catch (err) {
		        _didIteratorError = true;
		        _iteratorError = err;
		    } finally {
		        try {
		            if (!_iteratorNormalCompletion && _iterator.return) {
		                _iterator.return();
		            }
		        } finally {
		            if (_didIteratorError) {
		                throw _iteratorError;
		            }
		        }
		    }

		    return null;
		}
		function inherits(parent, protoProps, staticProps) {
		    var child;
		    if (protoProps && (0, _objects.has)(protoProps, 'constructor')) {
		        child = protoProps.constructor;
		    } else {
		        child = function child() {
		            return parent.apply(this, arguments);
		        };
		    }
		    (0, _objects.extend)(child, parent, staticProps);
		    var Surrogate = function Surrogate() {
		        this.constructor = child;
		    };
		    Surrogate.prototype = parent.prototype;
		    child.prototype = new Surrogate();
		    if (protoProps) (0, _objects.extend)(child.prototype, protoProps);
		    child.__super__ = parent.prototype;
		    return child;
		}
		var nextTick = exports.nextTick = function () {
		    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
		    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;
		    if (canSetImmediate) {
		        return function (f) {
		            return window.setImmediate(f);
		        };
		    }
		    if (canPost) {
		        var queue = [];
		        window.addEventListener('message', function (ev) {
		            var source = ev.source;
		            if ((source === window || source === null) && ev.data === 'process-tick') {
		                ev.stopPropagation();
		                if (queue.length > 0) {
		                    var fn = queue.shift();
		                    fn();
		                }
		            }
		        }, true);
		        return function nextTick(fn) {
		            queue.push(fn);
		            window.postMessage('process-tick', '*');
		        };
		    }
		    return function nextTick(fn) {
		        setTimeout(fn, 0);
		    };
		}();
		function eq(a, b, aStack, bStack) {
		    if (a === b) return a !== 0 || 1 / a == 1 / b;
		    if (a == null || b == null) return a === b;
		    var className = toString.call(a);
		    if (className != toString.call(b)) return false;
		    switch (className) {
		        case '[object String]':
		            return a == String(b);
		        case '[object Number]':
		            return a !== +a ? b !== +b : a === 0 ? 1 / a === 1 / b : a === +b;
		        case '[object Date]':
		        case '[object Boolean]':
		            return +a == +b;
		        case '[object RegExp]':
		            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
		    }
		    if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
		    var length = aStack.length;
		    while (length--) {
		        if (aStack[length] == a) return bStack[length] == b;
		    }
		    var aCtor = a.constructor,
		        bCtor = b.constructor;
		    if (aCtor !== bCtor && !(typeof aCtor === 'function' && aCtor instanceof aCtor && typeof bCtor === 'function' && bCtor instanceof bCtor)) {
		        return false;
		    }
		    aStack.push(a);
		    bStack.push(b);
		    var size = 0,
		        result = true;
		    if (className === '[object Array]') {
		        size = a.length;
		        result = size === b.length;
		        if (result) {
		            while (size--) {
		                if (!(result = eq(a[size], b[size], aStack, bStack))) break;
		            }
		        }
		    } else {
		        for (var key in a) {
		            if ((0, _objects.has)(a, key)) {
		                size++;
		                if (!(result = (0, _objects.has)(b, key) && eq(a[key], b[key], aStack, bStack))) break;
		            }
		        }
		        if (result) {
		            for (key in b) {
		                if ((0, _objects.has)(b, key) && ! size--) break;
		            }
		            result = !size;
		        }
		    }
		    aStack.pop();
		    bStack.pop();
		    return result;
		}

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.unique = unique;
		exports.any = any;
		exports.indexOf = indexOf;
		exports.find = find;
		exports.slice = slice;
		exports.flatten = flatten;
		exports.sortBy = sortBy;

		var _utils = __webpack_require__(0);

		function unique(array) {
		    return Array.isArray(array) && array.filter(function (e, i) {
		        for (i += 1; i < array.length; i += 1) {
		            if ((0, _utils.equal)(e, array[i])) {
		                return false;
		            }
		        }
		        return true;
		    }) || [];
		}
		function any(array, predicate) {
		    for (var i = 0, ii = array.length; i < ii; i++) {
		        if (predicate(array[i])) return true;
		    }
		    return false;
		}
		function indexOf(array, item) {
		    for (var i = 0, len = array.length; i < len; i++) {
		        if (array[i] === item) return i;
		    }return -1;
		}
		function find(array, callback, ctx) {
		    var v = undefined;
		    for (var i = 0, ii = array.length; i < ii; i++) {
		        if (callback.call(ctx, array[i])) return array[i];
		    }
		    return null;
		}
		function slice(array, begin, end) {
		    return Array.prototype.slice.call(array, begin, end);
		}
		function flatten(arr) {
		    return arr.reduce(function (flat, toFlatten) {
		        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
		    }, []);
		}
		function sortBy(obj, value, context) {
		    var iterator = typeof value === 'function' ? value : function (obj) {
		        return obj[value];
		    };
		    return obj.map(function (value, index, list) {
		        return {
		            value: value,
		            index: index,
		            criteria: iterator.call(context, value, index, list)
		        };
		    }).sort(function (left, right) {
		        var a = left.criteria,
		            b = right.criteria;
		        if (a !== b) {
		            if (a > b || a === void 0) return 1;
		            if (a < b || b === void 0) return -1;
		        }
		        return left.index - right.index;
		    }).map(function (item) {
		        return item.value;
		    });
		}

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.isObject = isObject;
		exports.isEmpty = isEmpty;
		exports.extend = extend;
		exports.assign = assign;
		exports.has = has;
		exports.pick = pick;
		exports.result = result;
		exports.values = values;
		exports.intersection = intersection;

		var _utils = __webpack_require__(0);

		var _arrays = __webpack_require__(1);

		function isObject(obj) {
		    return obj === Object(obj);
		}
		function isEmpty(obj) {
		    return Object.keys(obj).length === 0;
		}
		function extend(obj) {
		    if (!isObject(obj)) return obj;
		    var o = undefined,
		        k = undefined;

		    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		    }

		    var _iteratorNormalCompletion = true;
		    var _didIteratorError = false;
		    var _iteratorError = undefined;

		    try {
		        for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		            o = _step.value;

		            if (!isObject(o)) continue;
		            for (k in o) {
		                if (has(o, k)) obj[k] = o[k];
		            }
		        }
		    } catch (err) {
		        _didIteratorError = true;
		        _iteratorError = err;
		    } finally {
		        try {
		            if (!_iteratorNormalCompletion && _iterator.return) {
		                _iterator.return();
		            }
		        } finally {
		            if (_didIteratorError) {
		                throw _iteratorError;
		            }
		        }
		    }

		    return obj;
		}
		function assign(target) {
		    if (target === undefined || target === null) {
		        throw new TypeError('Cannot convert first argument to object');
		    }
		    var to = Object(target);

		    for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		    }

		    for (var i = 0, ii = args.length; i < ii; i++) {
		        var nextSource = args[i];
		        if (nextSource === undefined || nextSource === null) {
		            continue;
		        }
		        nextSource = Object(nextSource);
		        var keysArray = Object.keys(Object(nextSource));
		        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
		            var nextKey = keysArray[nextIndex];
		            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
		            if (desc !== undefined && desc.enumerable) {
		                to[nextKey] = nextSource[nextKey];
		            }
		        }
		    }
		    return to;
		}
		function has(obj, prop) {
		    return Object.prototype.hasOwnProperty.call(obj, prop);
		}
		function pick(obj, props) {
		    var out = {},
		        prop = undefined;
		    var _iteratorNormalCompletion2 = true;
		    var _didIteratorError2 = false;
		    var _iteratorError2 = undefined;

		    try {
		        for (var _iterator2 = props[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
		            prop = _step2.value;

		            if (has(obj, prop)) out[prop] = obj[prop];
		        }
		    } catch (err) {
		        _didIteratorError2 = true;
		        _iteratorError2 = err;
		    } finally {
		        try {
		            if (!_iteratorNormalCompletion2 && _iterator2.return) {
		                _iterator2.return();
		            }
		        } finally {
		            if (_didIteratorError2) {
		                throw _iteratorError2;
		            }
		        }
		    }

		    return out;
		}
		function result(obj, prop, ctx, args) {
		    var ret = obj[prop];
		    return typeof ret === 'function' ? (0, _utils.callFunc)(ret, ctx, args || []) : ret;
		}
		function values(obj) {
		    var output = [];
		    for (var k in obj) {
		        if (has(obj, k)) {
		            output.push(obj[k]);
		        }
		    }return output;
		}
		function intersectionObjects(a, b, predicate) {
		    var results = [],
		        aElement,
		        existsInB;
		    for (var i = 0, ii = a.length; i < ii; i++) {
		        aElement = a[i];
		        existsInB = (0, _arrays.any)(b, function (bElement) {
		            return predicate(bElement, aElement);
		        });
		        if (existsInB) {
		            results.push(aElement);
		        }
		    }
		    return results;
		}
		function intersection(results) {
		    for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
		        args[_key3 - 1] = arguments[_key3];
		    }

		    var lastArgument = args[args.length - 1];
		    var arrayCount = args.length;
		    var areEqualFunction = _utils.equal;
		    if (typeof lastArgument === "function") {
		        areEqualFunction = lastArgument;
		        arrayCount--;
		    }
		    for (var i = 0; i < arrayCount; i++) {
		        var array = args[i];
		        results = intersectionObjects(results, array, areEqualFunction);
		        if (results.length === 0) break;
		    }
		    return results;
		}

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.Promise = undefined;
		exports.isPromise = isPromise;
		exports.toPromise = toPromise;
		exports.thunkToPromise = thunkToPromise;
		exports.arrayToPromise = arrayToPromise;
		exports.objectToPromise = objectToPromise;
		exports.deferred = deferred;
		exports.callback = callback;
		exports.delay = delay;
		exports.eachAsync = eachAsync;
		exports.mapAsync = mapAsync;

		var _objects = __webpack_require__(2);

		var _arrays = __webpack_require__(1);

		var _utils = __webpack_require__(0);

		var Promise = exports.Promise = typeof window === 'undefined' ? global.Promise : window.Promise;
		function isPromise(obj) {
		    return obj && typeof obj.then === 'function';
		}
		function toPromise(obj) {
		    if (!obj) {
		        return obj;
		    }
		    if (isPromise(obj)) {
		        return obj;
		    }
		    if ("function" == typeof obj) {
		        return thunkToPromise.call(this, obj);
		    }
		    if (Array.isArray(obj)) {
		        return arrayToPromise.call(this, obj);
		    }
		    if ((0, _objects.isObject)(obj)) {
		        return objectToPromise.call(this, obj);
		    }
		    return Promise.resolve(obj);
		}
		function thunkToPromise(fn) {
		    var ctx = this;
		    return new Promise(function (resolve, reject) {
		        fn.call(ctx, function (err, res) {
		            if (err) return reject(err);
		            if (arguments.length > 2) res = (0, _arrays.slice)(arguments, 1);
		            resolve(res);
		        });
		    });
		}
		function arrayToPromise(obj) {
		    return Promise.all(obj.map(toPromise, this));
		}
		function objectToPromise(obj) {
		    var results = new obj.constructor();
		    var keys = Object.keys(obj);
		    var promises = [];
		    for (var i = 0; i < keys.length; i++) {
		        var key = keys[i];
		        var promise = toPromise.call(this, obj[key]);
		        if (promise && isPromise(promise)) defer(promise, key);else results[key] = obj[key];
		    }
		    return Promise.all(promises).then(function () {
		        return results;
		    });
		    function defer(promise, key) {
		        results[key] = undefined;
		        promises.push(promise.then(function (res) {
		            results[key] = res;
		        }));
		    }
		}
		function deferred(fn, ctx) {
		    var ret = {};
		    ret.promise = new Promise(function (resolve, reject) {
		        ret.resolve = resolve;
		        ret.reject = reject;
		        ret.done = function (err, result) {
		            if (err) return reject(err);else resolve(result);
		        };
		    });
		    if (typeof fn === 'function') {
		        for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		            args[_key - 2] = arguments[_key];
		        }

		        (0, _utils.callFunc)(fn, ctx, args.concat([ret.done]));
		        return ret.promise;
		    }
		    return ret;
		}
		;
		function callback(promise, callback, ctx) {
		    promise.then(function (result) {
		        callback.call(ctx, null, result);
		    }).catch(function (err) {
		        callback.call(ctx, err);
		    });
		}
		function delay(timeout) {
		    var defer = deferred();
		    timeout == null ? (0, _utils.nextTick)(defer.resolve) : setTimeout(defer.resolve, timeout);
		    return defer.promise;
		}
		;
		function eachAsync(array, iterator, context) {
		    var accumulate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

		    return mapAsync(array, iterator, context, accumulate).then(function () {
		        return void 0;
		    });
		}
		function mapAsync(array, iterator, context) {
		    var accumulate = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

		    return new Promise(function (resolve, reject) {
		        var i = 0,
		            len = array.length,
		            errors = [],
		            results = [];
		        function next(err, result) {
		            if (err && !accumulate) return reject(err);
		            if (err) errors.push(err);
		            if (i === len) return errors.length ? reject((0, _arrays.flatten)(errors)) : resolve(results);
		            var ret = iterator.call(context, array[i++]);
		            if (isPromise(ret)) {
		                ret.then(function (r) {
		                    results.push(r);next(null, r);
		                }, next);
		            } else if (ret instanceof Error) {
		                next(ret);
		            } else {
		                next(null);
		            }
		        }
		        next(null);
		    });
		}
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.camelcase = camelcase;
		exports.truncate = truncate;
		exports.humanFileSize = humanFileSize;
		function camelcase(input) {
		    return input.toLowerCase().replace(/-(.)/g, function (match, group1) {
		        return group1.toUpperCase();
		    });
		}
		function truncate(str, length) {
		    var n = str.substring(0, Math.min(length, str.length));
		    return n + (n.length == str.length ? '' : '...');
		}
		function humanFileSize(bytes) {
		    var si = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

		    var thresh = si ? 1000 : 1024;
		    if (Math.abs(bytes) < thresh) {
		        return bytes + ' B';
		    }
		    var units = si ? ['kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'] : ['KiB', 'MiB', 'GiB', 'TiB', 'PiB', 'EiB', 'ZiB', 'YiB'];
		    var u = -1;
		    do {
		        bytes /= thresh;
		        ++u;
		    } while (Math.abs(bytes) >= thresh && u < units.length - 1);
		    return bytes.toFixed(1) + ' ' + units[u];
		}

	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.Debug = undefined;
		exports.debug = debug;

		var _utils = __webpack_require__(0);

		function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Debug = exports.Debug = function () {
		    function Debug(namespace) {
		        _classCallCheck(this, Debug);

		        this.enabled = false;
		        this.namespace = namespace;
		    }

		    _createClass(Debug, [{
		        key: 'debug',
		        value: function debug() {
		            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		                args[_key] = arguments[_key];
		            }

		            if (!this.enabled) return;
		            args[0] = this._coerce(args[0]);
		            if ('string' !== typeof args[0]) {
		                args = ['%o'].concat(args);
		            }
		            var index = 0;
		            args[0] = args[0].replace(/%([a-z%])/g, function (match, format) {
		                if (match === '%%') return match;
		                index++;
		                var formatter = Debug.formatters[format];
		                if ('function' === typeof formatter) {
		                    var val = args[index];
		                    match = formatter.call(self, val);
		                    args.splice(index, 1);
		                    index--;
		                }
		                return match;
		            });
		            args = this._formatArgs(args);
		            this._log.apply(this, _toConsumableArray(args));
		        }
		    }, {
		        key: '_log',
		        value: function _log() {
		            for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
		                args[_key2] = arguments[_key2];
		            }

		            return 'object' === (typeof console === 'undefined' ? 'undefined' : _typeof(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
		        }
		    }, {
		        key: '_coerce',
		        value: function _coerce(val) {
		            if (val instanceof Error) return val.stack || val.message;
		            return val;
		        }
		    }, {
		        key: '_formatArgs',
		        value: function _formatArgs(args) {
		            var p = this.prefix ? this.prefix + ":" : '';
		            args[0] = '[' + p + ':' + this.namespace + '] ' + args[0];
		            return args;
		        }
		    }], [{
		        key: 'enable',
		        value: function enable(enabled, namespace) {
		            for (var k in this.loggers) {
		                if (namespace && k === namespace) {
		                    this.loggers[k].enabled = enabled;
		                } else if (!namespace) {
		                    this.loggers[k].enabled = enabled;
		                }
		            }
		        }
		    }, {
		        key: 'create',
		        value: function create(namespace) {
		            var logger = undefined;
		            if (this.loggers[namespace]) {
		                logger = this.loggers[namespace].debug;
		            } else {
		                logger = new Debug(namespace);
		                this.loggers[namespace] = logger;
		            }
		            return (0, _utils.bind)(logger.debug, logger);
		        }
		    }]);

		    return Debug;
		}();

		Debug.loggers = {};
		Debug.formatters = {
		    j: function j(args) {
		        return JSON.stringify(args);
		    }
		};
		function debug(namespace) {
		    return Debug.create(namespace);
		}

	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.domReady = undefined;
		exports.matches = matches;
		exports.addEventListener = addEventListener;
		exports.removeEventListener = removeEventListener;
		exports.delegate = delegate;
		exports.undelegate = undelegate;
		exports.addClass = addClass;
		exports.removeClass = removeClass;
		exports.hasClass = hasClass;
		exports.selectionStart = selectionStart;
		exports.transitionEnd = transitionEnd;
		exports.animationEnd = animationEnd;

		var _arrays = __webpack_require__(1);

		var ElementProto = typeof Element !== 'undefined' && Element.prototype || {};
		var matchesSelector = ElementProto.matches || ElementProto.webkitMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.msMatchesSelector || ElementProto.oMatchesSelector || function (selector) {
		    var nodeList = (this.parentNode || document).querySelectorAll(selector) || [];
		    return !! ~(0, _arrays.indexOf)(nodeList, this);
		};
		var elementAddEventListener = ElementProto.addEventListener || function (eventName, listener) {
		    return this.attachEvent('on' + eventName, listener);
		};
		var elementRemoveEventListener = ElementProto.removeEventListener || function (eventName, listener) {
		    return this.detachEvent('on' + eventName, listener);
		};
		var transitionEndEvent = function transitionEnd() {
		    var el = document.createElement('bootstrap');
		    var transEndEventNames = {
		        'WebkitTransition': 'webkitTransitionEnd',
		        'MozTransition': 'transitionend',
		        'OTransition': 'oTransitionEnd otransitionend',
		        'transition': 'transitionend'
		    };
		    for (var name in transEndEventNames) {
		        if (el.style[name] !== undefined) {
		            return transEndEventNames[name];
		        }
		    }
		    return null;
		};
		var animationEndEvent = function animationEnd() {
		    var el = document.createElement('bootstrap');
		    var transEndEventNames = {
		        'WebkitAnimation': 'webkitAnimationEnd',
		        'MozAnimation': 'animationend',
		        'OAnimation': 'oAnimationEnd oanimationend',
		        'animation': 'animationend'
		    };
		    for (var name in transEndEventNames) {
		        if (el.style[name] !== undefined) {
		            return transEndEventNames[name];
		        }
		    }
		    return null;
		};
		function matches(elm, selector) {
		    return matchesSelector.call(elm, selector);
		}
		function addEventListener(elm, eventName, listener) {
		    var useCap = arguments.length <= 3 || arguments[3] === undefined ? false : arguments[3];

		    elementAddEventListener.call(elm, eventName, listener, useCap);
		}
		function removeEventListener(elm, eventName, listener) {
		    elementRemoveEventListener.call(elm, eventName, listener);
		}
		var unbubblebles = 'focus blur change'.split(' ');
		var domEvents = [];
		function delegate(elm, selector, eventName, callback, ctx) {
		    var root = elm;
		    var handler = function handler(e) {
		        var node = e.target || e.srcElement;
		        if (e.delegateTarget) return;
		        for (; node && node != root; node = node.parentNode) {
		            if (matches(node, selector)) {
		                e.delegateTarget = node;
		                callback(e);
		            }
		        }
		    };
		    var useCap = !! ~unbubblebles.indexOf(eventName);
		    addEventListener(elm, eventName, handler, useCap);
		    domEvents.push({ eventName: eventName, handler: handler, listener: callback, selector: selector });
		    return handler;
		}
		function undelegate(elm, selector, eventName, callback) {
		    var handlers = domEvents.slice();
		    for (var i = 0, len = handlers.length; i < len; i++) {
		        var item = handlers[i];
		        var match = item.eventName === eventName && (callback ? item.listener === callback : true) && (selector ? item.selector === selector : true);
		        if (!match) continue;
		        removeEventListener(elm, item.eventName, item.handler);
		        domEvents.splice((0, _arrays.indexOf)(handlers, item), 1);
		    }
		}
		function addClass(elm, className) {
		    if (elm.classList) {
		        var split = className.split(' ');
		        for (var i = 0, ii = split.length; i < ii; i++) {
		            if (elm.classList.contains(split[i].trim())) continue;
		            elm.classList.add(split[i].trim());
		        }
		    } else {
		        elm.className = (0, _arrays.unique)(elm.className.split(' ').concat(className.split(' '))).join(' ');
		    }
		}
		function removeClass(elm, className) {
		    if (elm.classList) {
		        var split = className.split(' ');
		        for (var i = 0, ii = split.length; i < ii; i++) {
		            elm.classList.remove(split[i].trim());
		        }
		    } else {
		        var split = elm.className.split(' '),
		            classNames = className.split(' '),
		            tmp = split,
		            index = undefined;
		        for (var i = 0, ii = classNames.length; i < ii; i++) {
		            index = split.indexOf(classNames[i]);
		            if (!! ~index) split = split.splice(index, 1);
		        }
		    }
		}
		function hasClass(elm, className) {
		    if (elm.classList) {
		        return elm.classList.contains(className);
		    }
		    var reg = new RegExp('\b' + className);
		    return reg.test(elm.className);
		}
		function selectionStart(elm) {
		    if ('selectionStart' in elm) {
		        return elm.selectionStart;
		    } else if (document.selection) {
		        elm.focus();
		        var sel = document.selection.createRange();
		        var selLen = document.selection.createRange().text.length;
		        sel.moveStart('character', -elm.value.length);
		        return sel.text.length - selLen;
		    }
		}
		var _events = {
		    animationEnd: null,
		    transitionEnd: null
		};
		function transitionEnd(elm, fn, ctx, duration) {
		    var event = _events.transitionEnd || (_events.transitionEnd = transitionEndEvent());
		    var callback = function callback(e) {
		        removeEventListener(elm, event, callback);
		        fn.call(ctx, e);
		    };
		    addEventListener(elm, event, callback);
		}
		function animationEnd(elm, fn, ctx, duration) {
		    var event = _events.animationEnd || (_events.animationEnd = animationEndEvent());
		    var callback = function callback(e) {
		        removeEventListener(elm, event, callback);
		        fn.call(ctx, e);
		    };
		    addEventListener(elm, event, callback);
		}
		var domReady = exports.domReady = function domReady() {
		    var fns = [],
		        _listener,
		        doc = document,
		        hack = doc.documentElement.doScroll,
		        domContentLoaded = 'DOMContentLoaded',
		        loaded = (hack ? /^loaded|^c/ : /^loaded|^i|^c/).test(doc.readyState);
		    if (!loaded) {
		        doc.addEventListener(domContentLoaded, _listener = function listener() {
		            doc.removeEventListener(domContentLoaded, _listener);
		            loaded = true;
		            while (_listener = fns.shift()) {
		                _listener();
		            }
		        });
		    }
		    return function (fn) {
		        loaded ? setTimeout(fn, 0) : fns.push(fn);
		    };
		};

	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		exports.request = exports.Request = undefined;
		exports.queryParam = queryParam;

		var _utils = __webpack_require__(0);

		var _promises = __webpack_require__(3);

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var xmlRe = /^(?:application|text)\/xml/,
		    jsonRe = /^application\/json/,
		    fileProto = /^file:/;
		function queryParam(obj) {
		    return '?' + Object.keys(obj).reduce(function (a, k) {
		        a.push(k + '=' + encodeURIComponent(obj[k]));return a;
		    }, []).join('&');
		}
		var isValid = function isValid(xhr, url) {
		    return xhr.status >= 200 && xhr.status < 300 || xhr.status === 304 || xhr.status === 0 && fileProto.test(url) || xhr.status === 0 && window.location.protocol === 'file:';
		};

		var Request = exports.Request = function () {
		    function Request(_method, _url) {
		        _classCallCheck(this, Request);

		        this._method = _method;
		        this._url = _url;
		        this._xhr = (0, _utils.ajax)();
		    }

		    _createClass(Request, [{
		        key: 'send',
		        value: function send(data) {
		            this._data = data;
		            return this;
		        }
		    }, {
		        key: 'withCredentials',
		        value: function withCredentials(ret) {
		            this._xhr.withCredentials = ret;
		            return this;
		        }
		    }, {
		        key: 'end',
		        value: function end(data) {
		            var _this = this;

		            this._data = data || this._data;
		            var defer = (0, _promises.deferred)();
		            this._xhr.addEventListener('readystatechange', function () {
		                if (_this._xhr.readyState !== XMLHttpRequest.DONE) return;
		                if (!isValid(_this._xhr, _this._url)) {
		                    return defer.reject(new Error('server responded with: ' + _this._xhr.status));
		                }
		                defer.resolve(_this._xhr.responseText);
		            });
		            data = this._data;
		            var url = this._url;
		            if (data && data === Object(data)) {
		                var d = queryParam(data);
		                url += d;
		            }
		            this._xhr.open(this._method, url, true);
		            this._xhr.send(data);
		            return defer.promise;
		        }
		    }, {
		        key: 'json',
		        value: function json(data) {
		            var _this2 = this;

		            return this.end(data).then(function (str) {
		                var accepts = _this2._xhr.getResponseHeader('content-type');
		                if (jsonRe.test(accepts) && str !== '') {
		                    var json = JSON.parse(str);
		                    return json;
		                } else {
		                    throw new Error('json');
		                }
		            });
		        }
		    }, {
		        key: 'progress',
		        value: function progress(fn) {
		            this._xhr.addEventListener('progress', fn);
		            return this;
		        }
		    }, {
		        key: 'header',
		        value: function header(field, value) {
		            this._xhr.setRequestHeader(field, value);
		            return this;
		        }
		    }]);

		    return Request;
		}();

		var request = exports.request = {};
		['get', 'post', 'put', 'delete', 'patch', 'head'].forEach(function (m) {
		    request[m === 'delete' ? 'del' : m] = function (url) {
		        return new Request(m.toUpperCase(), url);
		    };
		});

	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		Object.defineProperty(exports, "__esModule", {
		  value: true
		});

		var _arrays = __webpack_require__(1);

		var _loop = function _loop(_key9) {
		  if (_key9 === "default") return 'continue';
		  Object.defineProperty(exports, _key9, {
		    enumerable: true,
		    get: function get() {
		      return _arrays[_key9];
		    }
		  });
		};

		for (var _key9 in _arrays) {
		  var _ret = _loop(_key9);

		  if (_ret === 'continue') continue;
		}

		var _objects = __webpack_require__(2);

		var _loop2 = function _loop2(_key10) {
		  if (_key10 === "default") return 'continue';
		  Object.defineProperty(exports, _key10, {
		    enumerable: true,
		    get: function get() {
		      return _objects[_key10];
		    }
		  });
		};

		for (var _key10 in _objects) {
		  var _ret2 = _loop2(_key10);

		  if (_ret2 === 'continue') continue;
		}

		var _promises = __webpack_require__(3);

		var _loop3 = function _loop3(_key11) {
		  if (_key11 === "default") return 'continue';
		  Object.defineProperty(exports, _key11, {
		    enumerable: true,
		    get: function get() {
		      return _promises[_key11];
		    }
		  });
		};

		for (var _key11 in _promises) {
		  var _ret3 = _loop3(_key11);

		  if (_ret3 === 'continue') continue;
		}

		var _utils = __webpack_require__(0);

		var _loop4 = function _loop4(_key12) {
		  if (_key12 === "default") return 'continue';
		  Object.defineProperty(exports, _key12, {
		    enumerable: true,
		    get: function get() {
		      return _utils[_key12];
		    }
		  });
		};

		for (var _key12 in _utils) {
		  var _ret4 = _loop4(_key12);

		  if (_ret4 === 'continue') continue;
		}

		var _strings = __webpack_require__(4);

		var _loop5 = function _loop5(_key13) {
		  if (_key13 === "default") return 'continue';
		  Object.defineProperty(exports, _key13, {
		    enumerable: true,
		    get: function get() {
		      return _strings[_key13];
		    }
		  });
		};

		for (var _key13 in _strings) {
		  var _ret5 = _loop5(_key13);

		  if (_ret5 === 'continue') continue;
		}

		var _html = __webpack_require__(6);

		var _loop6 = function _loop6(_key14) {
		  if (_key14 === "default") return 'continue';
		  Object.defineProperty(exports, _key14, {
		    enumerable: true,
		    get: function get() {
		      return _html[_key14];
		    }
		  });
		};

		for (var _key14 in _html) {
		  var _ret6 = _loop6(_key14);

		  if (_ret6 === 'continue') continue;
		}

		var _request = __webpack_require__(7);

		var _loop7 = function _loop7(_key15) {
		  if (_key15 === "default") return 'continue';
		  Object.defineProperty(exports, _key15, {
		    enumerable: true,
		    get: function get() {
		      return _request[_key15];
		    }
		  });
		};

		for (var _key15 in _request) {
		  var _ret7 = _loop7(_key15);

		  if (_ret7 === 'continue') continue;
		}

		var _debug = __webpack_require__(5);

		var _loop8 = function _loop8(_key16) {
		  if (_key16 === "default") return 'continue';
		  Object.defineProperty(exports, _key16, {
		    enumerable: true,
		    get: function get() {
		      return _debug[_key16];
		    }
		  });
		};

		for (var _key16 in _debug) {
		  var _ret8 = _loop8(_key16);

		  if (_ret8 === 'continue') continue;
		}

	/***/ }
	/******/ ])
	});
	;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utilities___default = __WEBPACK_IMPORTED_MODULE_1_utilities__ && __WEBPACK_IMPORTED_MODULE_1_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_utilities___default });



	class Model extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__object__["BaseObject"] {
	    constructor(attributes = {}, options = {}) {
	        options = options || {};
	        this._attributes = {};
	        this.options = options;
	        if (options.parse)
	            attributes = this.parse(attributes);
	        this.set(attributes, null, { silent: true });
	        this.uid = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["uniqueId"]('uid');
	        this._changed = {};
	        this.collection = options.collection;
	        super();
	    }
	    get id() {
	        if (this.idAttribute in this._attributes)
	            return this._attributes[this.idAttribute];
	    }
	    get isNew() {
	        return this.id == null;
	    }
	    get isDirty() {
	        return this.hasChanged();
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
	            this._previousAttributes = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"](Object.create(null), this._attributes);
	            this._changed = {};
	        }
	        current = this._attributes, prev = this._previousAttributes;
	        for (attr in attrs) {
	            val = attrs[attr];
	            if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["equal"](current[attr], val))
	                changes.push(attr);
	            if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["equal"](prev[attr], val)) {
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
	        this.set(key, void 0, /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"]({}, options, { unset: true }));
	    }
	    has(attr) {
	        return this.get(attr) != null;
	    }
	    hasChanged(attr) {
	        if (attr == null)
	            return !!Object.keys(this.changed).length;
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["has"](this.changed, attr);
	    }
	    clear(options) {
	        let attrs = {};
	        for (let key in this._attributes)
	            attrs[key] = void 0;
	        return this.set(attrs, /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"]({}, options, { unset: true }));
	    }
	    get changed() {
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"]({}, this._changed);
	    }
	    changedAttributes(diff) {
	        if (!diff)
	            return this.hasChanged() ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"](Object.create(null), this.changed) : false;
	        var val, changed = {};
	        var old = this._changing ? this._previousAttributes : this._attributes;
	        for (var attr in diff) {
	            if (/* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["equal"](old[attr], (val = diff[attr])))
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
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["extend"](Object.create(null), this._previousAttributes);
	    }
	    toJSON() {
	        return JSON.parse(JSON.stringify(this._attributes));
	    }
	    clone() {
	        return new (this.constructor)(this._attributes, this.options);
	    }
	    parse(attr, options) {
	        return attr;
	    }
	    remove(options) {
	        this.trigger('remove', this, this.collection, options);
	    }
	}


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__object__ = __webpack_require__(6);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utilities___default = __WEBPACK_IMPORTED_MODULE_2_utilities__ && __WEBPACK_IMPORTED_MODULE_2_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_utilities___default });





	var setOptions = { add: true, remove: true, merge: true };
	var addOptions = { add: true, remove: false };
	class Collection extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__object__["BaseObject"] {
	    constructor(models, options = {}) {
	        this.options = options;
	        if (this.options.model) {
	            this.Model = this.options.model;
	        }
	        if (models) {
	            this.add(models);
	        }
	        super();
	    }
	    get length() {
	        return this.models.length;
	    }
	    get Model() {
	        if (!this._model) {
	            this._model = /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"];
	        }
	        return this._model;
	    }
	    set Model(con) {
	        this._model = con;
	    }
	    get models() {
	        return this._models || (this._models = []);
	    }
	    add(models, options = {}) {
	        if (!Array.isArray(models)) {
	            if (!(models instanceof this.Model)) {
	                models = this.create(models, { add: false });
	            }
	        }
	        else {
	            models = models.map((item) => {
	                return (item instanceof this.Model) ? item : this.create(item, { add: false });
	            });
	        }
	        this.set(models, /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({ merge: false }, options, addOptions));
	    }
	    set(items, options = {}) {
	        options = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, setOptions, options);
	        if (options.parse)
	            items = this.parse(items, options);
	        var singular = !Array.isArray(items);
	        let models = (singular ? (items ? [items] : []) : items.slice());
	        var i, l, id, model, attrs, existing, sort;
	        var at = options.at;
	        var sortable = this.comparator && (at == null) && options.sort !== false;
	        var sortAttr = typeof this.comparator === 'string' ? this.comparator : null;
	        var toAdd = [], toRemove = [], modelMap = {};
	        var add = options.add, merge = options.merge, remove = options.remove;
	        var order = !sortable && add && remove ? [] : null;
	        for (i = 0, l = models.length; i < l; i++) {
	            model = models[i];
	            id = model.get(model.idAttribute) || model.uid;
	            if (existing = this.get(id)) {
	                if (remove)
	                    modelMap[existing.uid] = true;
	                if (merge) {
	                    attrs = model.toJSON();
	                    existing.set(attrs, options);
	                    if (sortable && !sort && existing.hasChanged(sortAttr))
	                        sort = true;
	                }
	                models[i] = existing;
	            }
	            else if (add) {
	                models[i] = model;
	                if (!model)
	                    continue;
	                toAdd.push(model);
	                this._addReference(model, options);
	            }
	            model = existing || model;
	            if (order && !modelMap[model.id])
	                order.push(model);
	            modelMap[model.uid] = true;
	        }
	        if (remove) {
	            for (i = 0, l = this.length; i < l; ++i) {
	                if (!modelMap[(model = this.models[i]).uid])
	                    toRemove.push(model);
	            }
	            if (toRemove.length)
	                this.remove(toRemove, options);
	        }
	        if (toAdd.length || (order && order.length)) {
	            if (sortable)
	                sort = true;
	            if (at != null) {
	                for (i = 0, l = toAdd.length; i < l; i++) {
	                    this.models.splice(at + i, 0, toAdd[i]);
	                }
	            }
	            else {
	                if (order)
	                    this.models.length = 0;
	                var orderedModels = order || toAdd;
	                for (i = 0, l = orderedModels.length; i < l; i++) {
	                    this.models.push(orderedModels[i]);
	                }
	            }
	        }
	        if (sort)
	            this.sort({ silent: true });
	        if (!options.silent) {
	            for (i = 0, l = toAdd.length; i < l; i++) {
	                (model = toAdd[i]).trigger('add', model, this, options);
	            }
	            if (sort || (order && order.length))
	                this.trigger('sort', this, options);
	            if (toAdd.length || toRemove.length)
	                this.trigger('update', this, options);
	        }
	        return singular ? models[0] : models;
	    }
	    remove(models, options = {}) {
	        var singular = !Array.isArray(models);
	        models = (singular ? [models] : models.slice());
	        var i, l, index, model;
	        for (i = 0, l = models.length; i < l; i++) {
	            model = models[i] = this.get(models[i]);
	            if (!model)
	                continue;
	            index = this.indexOf(model);
	            this.models.splice(index, 1);
	            if (!options.silent) {
	                options.index = index;
	                model.trigger('remove', model, this, options);
	            }
	            this._removeReference(model, options);
	        }
	        return singular ? models[0] : models;
	    }
	    get(id) {
	        return this.find(id);
	    }
	    at(index) {
	        return this.models[index];
	    }
	    clone(options) {
	        options = options || this.options;
	        return new this.constructor(this.models, options);
	    }
	    sort(options = {}) {
	        if (!this.comparator)
	            throw new Error('Cannot sort a set without a comparator');
	        if (typeof this.comparator === 'string' || this.comparator.length === 1) {
	            this._models = this.sortBy(this.comparator, this);
	        }
	        else {
	            this.models.sort(this.comparator.bind(this));
	        }
	        if (!options.silent)
	            this.trigger('sort', this, options);
	        return this;
	    }
	    sortBy(key, context) {
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["sortBy"](this._models, key, context);
	    }
	    push(model, options = {}) {
	        return this.add(model, /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({ at: this.length }, options));
	    }
	    reset(models, options = {}) {
	        this.forEach((model) => {
	            this._removeReference(model, options);
	        });
	        options.previousModels = this.models;
	        this._reset();
	        models = this.add(models, options);
	        if (!options.silent)
	            this.trigger('reset', this, options);
	        return models;
	    }
	    create(values, options = { add: true }) {
	        let model = new this.Model(values, options);
	        if (options.add)
	            this.add(model);
	        return model;
	    }
	    parse(models, options = {}) {
	        return models;
	    }
	    find(nidOrFn) {
	        let model;
	        if (typeof nidOrFn === 'function') {
	            model = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["find"](this.models, nidOrFn);
	        }
	        else {
	            model = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["find"](this.models, function (model) {
	                return model.id == nidOrFn || model.uid == nidOrFn || nidOrFn === model;
	            });
	        }
	        return model;
	    }
	    forEach(iterator, ctx) {
	        for (let i = 0, l = this.models.length; i < l; i++) {
	            iterator.call(ctx || this, this.models[i], i);
	        }
	        return this;
	    }
	    indexOf(model) {
	        return this.models.indexOf(model);
	    }
	    toJSON() {
	        return this.models.map(function (m) { return m.toJSON(); });
	    }
	    _removeReference(model, options) {
	        if (this === model.collection)
	            delete model.collection;
	        this.stopListening(model);
	    }
	    _addReference(model, options) {
	        if (!model.collection)
	            model.collection = this;
	        this.listenTo(model, 'all', this._onModelEvent);
	    }
	    _reset() {
	        this._models = [];
	    }
	    _onModelEvent(event, model, collection, options) {
	        if ((event === 'add' || event === 'remove') && collection !== this)
	            return;
	        if (event === 'destroy')
	            this.remove(model, options);
	        /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["callFunc"](this.trigger, this, /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["slice"](arguments));
	    }
	    destroy() {
	        this.models.forEach(m => {
	            if (typeof m.destroy === 'function' &&
	                m.collection == this)
	                m.destroy();
	        });
	        super.destroy();
	    }
	}


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities___default = __WEBPACK_IMPORTED_MODULE_0_utilities__ && __WEBPACK_IMPORTED_MODULE_0_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_utilities___default });
	/* harmony export */ exports["sync"] = sync;


	var RestMethod;/* harmony export */ Object.defineProperty(exports, "RestMethod", {configurable: false, enumerable: true, get: function() { return RestMethod; }});
	(function (RestMethod) {
	    RestMethod[RestMethod["Create"] = 0] = "Create";
	    RestMethod[RestMethod["Update"] = 1] = "Update";
	    RestMethod[RestMethod["Read"] = 2] = "Read";
	    RestMethod[RestMethod["Patch"] = 3] = "Patch";
	    RestMethod[RestMethod["Delete"] = 4] = "Delete";
	})(RestMethod || (RestMethod = {}));
	;
	const xmlRe = /^(?:application|text)\/xml/;
	const jsonRe = /^application\/json/;
	var getData = function (accepts, xhr) {
	    if (accepts == null)
	        accepts = xhr.getResponseHeader('content-type');
	    if (xmlRe.test(accepts)) {
	        return xhr.responseXML;
	    }
	    else if (jsonRe.test(accepts) && xhr.responseText !== '') {
	        return JSON.parse(xhr.responseText);
	    }
	    else {
	        return xhr.responseText;
	    }
	};
	var isValid = function (xhr) {
	    return (xhr.status >= 200 && xhr.status < 300) ||
	        (xhr.status === 304) ||
	        (xhr.status === 0 && window.location.protocol === 'file:');
	};
	function sync(method, model, options) {
	    let http;
	    switch (method) {
	        case RestMethod.Create:
	            http = 'POST';
	            break;
	        case RestMethod.Update:
	            http = "PUT";
	            break;
	        case RestMethod.Patch:
	            http = "PATCH";
	            break;
	        case RestMethod.Delete:
	            http = "DELETE";
	            break;
	        case RestMethod.Read:
	            http = "GET";
	            break;
	        default:
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].reject(new Error(`Sync: does not recognise method: ${method}`));
	    }
	    let xhr = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["ajax"]();
	    let query, url = options.url;
	    if (options.params)
	        query = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["queryParam"](options.params);
	    if (query) {
	        var sep = (options.url.indexOf('?') === -1) ? '?' : '&';
	        url += sep + query.substring(1);
	    }
	    return new /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"]((resolve, reject) => {
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState !== 4)
	                return;
	            let response = {
	                method: method,
	                status: xhr.status,
	                content: getData(options.headers['Accept'], xhr)
	            };
	            /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["proxy"](response, xhr, ['getAllResponseHeaders', 'getResponseHeader']);
	            if (isValid(xhr)) {
	                return resolve(response);
	            }
	            else {
	                var error = new Error('Server responded with status of ' + xhr.statusText);
	                return reject(error);
	            }
	        };
	        xhr.open(http, url, true);
	        if (!(options.headers && options.headers['Accept'])) {
	            options.headers = {
	                Accept: "*/*"
	            };
	        }
	        if (options.headers)
	            for (var key in options.headers) {
	                xhr.setRequestHeader(key, options.headers[key]);
	            }
	        if (options.beforeSend)
	            options.beforeSend(xhr);
	        xhr.send(model.toJSON());
	    });
	}


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities___default = __WEBPACK_IMPORTED_MODULE_0_utilities__ && __WEBPACK_IMPORTED_MODULE_0_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_utilities___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collection__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rest_model__ = __webpack_require__(5);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__persistence__ = __webpack_require__(3);





	class RestCollection extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__collection__["Collection"] {
	    constructor(models, options = {}) {
	        super(models, options);
	        if (options.url)
	            this.url = options.url;
	    }
	    getURL() {
	        return typeof this.url === 'function' ? this.url() : this.url;
	    }
	    fetch(options) {
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options) : {};
	        let url = this.getURL();
	        if (url == null)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        this.trigger('before:sync');
	        return this.sync(/* harmony import */ __WEBPACK_IMPORTED_MODULE_3__persistence__["RestMethod"].Read, this, options)
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
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options) : {};
	        let model;
	        let url = this.getURL();
	        if (url == null)
	            throw new Error('Url or rootURL no specified');
	        options.url = url;
	        if (value instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__rest_model__["RestModel"]) {
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
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_3__persistence__["sync"](method, model, options);
	    }
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities___default = __WEBPACK_IMPORTED_MODULE_0_utilities__ && __WEBPACK_IMPORTED_MODULE_0_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_utilities___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistence__ = __webpack_require__(3);
	/* harmony export */ exports["normalize_path"] = normalize_path;



	function normalize_path(url, id) {
	    let i, p = "";
	    if ((i = url.indexOf('?')) >= 0) {
	        p = url.substr(i);
	        url = url.substr(0, i);
	    }
	    if (url[url.length - 1] !== '/')
	        url += '/';
	    return url + id + p;
	}
	class RestModel extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"] {
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
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options) : {};
	        let url = this.getURL();
	        if (url == null)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].reject(new Error('Url or rootURL no specified'));
	        options.url = url;
	        this.trigger('before:fetch', this, options);
	        return this.sync(/* harmony import */ __WEBPACK_IMPORTED_MODULE_2__persistence__["RestMethod"].Read, this, options)
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
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options) : {};
	        this.trigger('before:save', this, options);
	        let method = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__persistence__["RestMethod"][this.isNew ? 'Create' : options.changed ? 'Patch' : "Update"];
	        let url = this.getURL(this.id);
	        if (url == null)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].reject(new Error('Url or rootURL no specified'));
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
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options) : {};
	        if (this.isNew) {
	            super.remove(options);
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].resolve(this);
	        }
	        let url = this.getURL(this.id);
	        if (url == null)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["Promise"].reject(new Error('Url or rootURL no specified'));
	        this.trigger('before:remove', this, options);
	        if (!options.wait)
	            super.remove(options);
	        options.url = url;
	        return this.sync(/* harmony import */ __WEBPACK_IMPORTED_MODULE_2__persistence__["RestMethod"].Delete, this, options)
	            .then((result) => {
	            super.remove(options);
	            return this;
	        }).catch((e) => {
	            this.trigger('error', this, e);
	            throw e;
	        });
	    }
	    sync(method, model, options) {
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_2__persistence__["sync"](method, model, options);
	    }
	}


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_eventsjs_lib_events__ = __webpack_require__(11);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utilities___default = __WEBPACK_IMPORTED_MODULE_1_utilities__ && __WEBPACK_IMPORTED_MODULE_1_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_1_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_1_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_1_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_1_utilities___default });


	class BaseObject extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_eventsjs_lib_events__["EventEmitter"] {
	}
	BaseObject.extend = function (proto, stat) {
	    return /* harmony import */ __WEBPACK_IMPORTED_MODULE_1_utilities__["inherits"](this, proto, stat);
	};


/***/ },
/* 7 */
/***/ function(module, exports) {

	


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utilities___default = __WEBPACK_IMPORTED_MODULE_0_utilities__ && __WEBPACK_IMPORTED_MODULE_0_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_0_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_0_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_0_utilities___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);



	function objToPaths(obj, separator = ".") {
	    var ret = {};
	    for (var key in obj) {
	        var val = obj[key];
	        if (val && (val.constructor === Object || val.constructor === Array) && !/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["isEmpty"](val)) {
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
	        if (result instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"])
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
	        if (return_exists && !/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["has"](result, fields[i])) {
	            return false;
	        }
	        result = result instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"] ? result.get(fields[i]) : result[fields[i]];
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
	            if (typeof result[field] === 'undefined' || !/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["isObject"](result[field])) {
	                if (options.unset) {
	                    delete result[field];
	                    return;
	                }
	                var nextField = fields[i + 1];
	                result[field] = /^\d+$/.test(nextField) ? [] : {};
	            }
	            result = result[field];
	            if (result instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"]) {
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
	class NestedModel extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"] {
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
	            this._previousAttributes = /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, this._attributes);
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
	            if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["equal"](getNested(current, attr), val)) {
	                changes.push(attr);
	                this._changed[attr] = val;
	            }
	            if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["equal"](getNested(prev, attr), val)) {
	                setNested(this.changed, attr, val);
	            }
	            else {
	                deleteNested(this.changed, attr);
	            }
	            if (unset) {
	                let nestedValue = getNested(current, attr);
	                if (nestedValue instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"]) {
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
	                    if (val instanceof /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__model__["Model"]) {
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
	        return this.set(attrs, /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, options, {
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
	            if (/* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["equal"](old[attr], (val = diff[attr])))
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
	        return /* harmony import */ __WEBPACK_IMPORTED_MODULE_0_utilities__["extend"]({}, this._previousAttributes);
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


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(2);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rest_collection__ = __webpack_require__(4);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utilities__ = __webpack_require__(0);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_utilities___default = __WEBPACK_IMPORTED_MODULE_2_utilities__ && __WEBPACK_IMPORTED_MODULE_2_utilities__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_2_utilities__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_2_utilities__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_2_utilities___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_2_utilities___default });
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__persistence__ = __webpack_require__(3);






	const PARAM_TRIM_RE = /[\s'"]/g;
	const URL_TRIM_RE = /[<>\s'"]/g;
	function queryStringToParams(qs) {
	    var kvp, k, v, ls, params = {}, decode = decodeURIComponent;
	    var kvps = qs.split('&');
	    for (var i = 0, l = kvps.length; i < l; i++) {
	        var param = kvps[i];
	        kvp = param.split('='), k = kvp[0], v = kvp[1];
	        if (v == null)
	            v = true;
	        k = decode(k), v = decode(v), ls = params[k];
	        if (Array.isArray(ls))
	            ls.push(v);
	        else if (ls)
	            params[k] = [ls, v];
	        else
	            params[k] = v;
	    }
	    return params;
	}
	class PaginatedCollection extends /* harmony import */ __WEBPACK_IMPORTED_MODULE_1__rest_collection__["RestCollection"] {
	    constructor(models, options = {}) {
	        super(models, options);
	        this._state = { first: 1, last: -1, current: 1, size: 10 };
	        this._link = {};
	        this.queryParams = {
	            page: 'page',
	            size: 'pageSize'
	        };
	        if (options.queryParams) {
	            /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"](this.queryParams, options.queryParams);
	        }
	        if (options.firstPage)
	            this._state.first = options.firstPage;
	        if (options.pageSize)
	            this._state.size = options.pageSize;
	        this._state.current = this._state.first;
	        this._page = new /* harmony import */ __WEBPACK_IMPORTED_MODULE_0__collection__["Collection"]();
	        this._page.Model = this.Model;
	    }
	    get page() {
	        return this._page;
	    }
	    getPreviousPage(options) {
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, options) : {};
	        options.page = this._state.current - 1;
	        return this.getPage(options);
	    }
	    getNextPage(options) {
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, options) : {};
	        options.page = this._state.current + 1;
	        return this.getPage(options);
	    }
	    getPage(options) {
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, options) : {};
	        if (options.page === void 0)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["Promise"].reject(new Error("No page"));
	        if (this._state.last < options.page && this._state.last != -1) {
	            options.page = this._state.last;
	        }
	        else if (options.page < this._state.first) {
	            options.page = this._state.first;
	        }
	        return this.fetch(options);
	    }
	    fetch(options = {}) {
	        options = options ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, options) : {};
	        let url;
	        if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["has"](options, 'page')) {
	            options.page = this._state.current;
	        }
	        let params = options.params ? /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"]({}, options.params) : {};
	        if (/* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["has"](params, this.queryParams.page))
	            delete params[this.queryParams.page];
	        url = this._link[options.page];
	        if (!url) {
	            url = this.getURL();
	        }
	        if (!url)
	            return /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["Promise"].reject(new Error("no url specified"));
	        let idx = url.indexOf('?');
	        if (idx > -1) {
	            params = /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["extend"](params, queryStringToParams(url.substr(0, idx + 1)));
	            url = url.substr(0, idx);
	        }
	        if (!/* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["has"](params, this.queryParams.page)) {
	            params[this.queryParams.page] = options.page;
	        }
	        options.params = params;
	        options.url = url;
	        this.trigger('before:fetch', this, options);
	        params[this.queryParams.size] = this._state.size;
	        if (!this._link[options.page + '']) {
	            this._link[options.page] = url + /* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["queryParam"]({ page: options.page });
	        }
	        return this.sync(/* harmony import */ __WEBPACK_IMPORTED_MODULE_3__persistence__["RestMethod"].Read, this, options)
	            .then((resp) => {
	            this._processResponse(resp, options);
	            this.trigger('sync', this, resp, options);
	            return this;
	        }).catch((e) => {
	            this.trigger('error', e);
	            throw e;
	        });
	    }
	    _processResponse(resp, options) {
	        let currentPage = options.page;
	        let links = this._parseLinkHeaders(resp);
	        if (links.first)
	            this._link[this._state.first] = links.first;
	        if (links.prev)
	            this._link[currentPage - 1] = links.prev;
	        if (links.next)
	            this._link[currentPage + 1] = links.next;
	        if (links.last) {
	            let last = links.last;
	            let idx = last.indexOf('?');
	            if (idx > -1) {
	                let params = queryStringToParams(last.substr(idx + 1));
	                if (/* harmony import */ __WEBPACK_IMPORTED_MODULE_2_utilities__["has"](params, this.queryParams.page)) {
	                    this._link[params[this.queryParams.page]] = last;
	                    this._state.last = parseInt(params[this.queryParams.page]);
	                }
	            }
	        }
	        this._state.current = currentPage;
	        let data = resp.content;
	        if (data && !Array.isArray(data))
	            data = [data];
	        if (!data)
	            return this;
	        data = this.parse(data);
	        for (let i = 0, ii = data.length; i < ii; i++) {
	            data[i] = new this.Model(data[i], { parse: true });
	        }
	        this[options.reset ? 'reset' : 'set'](data, options);
	        this.page.reset(data);
	        return this;
	    }
	    _parseLinkHeaders(resp) {
	        var link = {};
	        if (typeof resp['getResponseHeader'] !== 'function') {
	            return link;
	        }
	        let linkHeader = resp['getResponseHeader']('Link');
	        if (!linkHeader)
	            return link;
	        linkHeader = linkHeader.split(',');
	        let relations = ['first', 'prev', 'next', 'last'];
	        for (let i = 0, ii = linkHeader.length; i < ii; i++) {
	            let linkParts = linkHeader[i].split(';'), url = linkParts[0].replace(URL_TRIM_RE, ''), params = linkParts.slice(1);
	            for (let x = 0, xx = params.length; x < xx; x++) {
	                let paramParts = params[x].split('='), key = paramParts[0].replace(PARAM_TRIM_RE, ''), value = paramParts[1].replace(PARAM_TRIM_RE, '');
	                if (key == 'rel' && !!~relations.indexOf(value))
	                    link[value] = url;
	            }
	        }
	        return link;
	    }
	}


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__collection__ = __webpack_require__(2);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__collection__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_0__collection__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model__ = __webpack_require__(1);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_1__model__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_1__model__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nested_model__ = __webpack_require__(8);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_2__nested_model__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_2__nested_model__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces__ = __webpack_require__(7);
	/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interfaces___default = __WEBPACK_IMPORTED_MODULE_3__interfaces__ && __WEBPACK_IMPORTED_MODULE_3__interfaces__.__esModule ? function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces__['default'] } : function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces__; }
	/* harmony import */ Object.defineProperty(__WEBPACK_IMPORTED_MODULE_3__interfaces___default, 'a', { get: __WEBPACK_IMPORTED_MODULE_3__interfaces___default });
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_3__interfaces__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_3__interfaces__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rest_collection__ = __webpack_require__(4);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_4__rest_collection__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_4__rest_collection__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rest_model__ = __webpack_require__(5);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_5__rest_model__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_5__rest_model__[key]; }}) }(__WEBPACK_IMPORT_KEY__));/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__paginated_collection__ = __webpack_require__(9);
	/* harmony namespace reexport */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_6__paginated_collection__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { Object.defineProperty(exports, key, {configurable: false, enumerable: true, get: function() { return __WEBPACK_IMPORTED_MODULE_6__paginated_collection__[key]; }}) }(__WEBPACK_IMPORT_KEY__));








/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/* unused harmony export callFunc */var idCounter = 0;
	function getID() {
	    return "" + (++idCounter);
	}
	function callFunc(fn, args = []) {
	    let l = fn.length, i = -1, a1 = args[0], a2 = args[1], a3 = args[2], a4 = args[3];
	    switch (args.length) {
	        case 0:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx);
	            return;
	        case 1:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1);
	            return;
	        case 2:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2);
	            return;
	        case 3:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3);
	            return;
	        case 4:
	            while (++i < l)
	                fn[i].handler.call(fn[i].ctx, a1, a2, a3, a4);
	            return;
	        default:
	            while (++i < l)
	                fn[i].handler.apply(fn[i].ctx, args);
	            return;
	    }
	}
	class EventEmitter {
	    get listeners() {
	        return this._listeners;
	    }
	    on(event, fn, ctx, once = false) {
	        let events = (this._listeners || (this._listeners = {}))[event] || (this._listeners[event] = []);
	        events.push({
	            name: event,
	            once: once,
	            handler: fn,
	            ctx: ctx || this
	        });
	        return this;
	    }
	    once(event, fn, ctx) {
	        return this.on(event, fn, ctx, true);
	    }
	    off(eventName, fn) {
	        this._listeners = this._listeners || {};
	        if (eventName == null) {
	            this._listeners = {};
	        }
	        else if (this._listeners[eventName]) {
	            let events = this._listeners[eventName];
	            if (fn == null) {
	                this._listeners[eventName] = [];
	            }
	            else {
	                for (let i = 0; i < events.length; i++) {
	                    let event = events[i];
	                    if (events[i].handler == fn) {
	                        this._listeners[eventName].splice(i, 1);
	                    }
	                }
	            }
	        }
	    }
	    trigger(eventName, ...args) {
	        let events = (this._listeners || (this._listeners = {}))[eventName] || (this._listeners[eventName] = [])
	            .concat(this._listeners['all'] || []);
	        if (EventEmitter.debugCallback)
	            EventEmitter.debugCallback(this.constructor.name, this.name, eventName, args);
	        let event, a, len = events.length, index, i;
	        let calls = [];
	        for (i = 0; i < events.length; i++) {
	            event = events[i];
	            a = args;
	            if (event.name == 'all') {
	                a = [eventName].concat(args);
	                callFunc([event], a);
	            }
	            else {
	                calls.push(event);
	            }
	            if (event.once === true) {
	                index = this._listeners[event.name].indexOf(event);
	                this._listeners[event.name].splice(index, 1);
	            }
	        }
	        if (calls.length)
	            this._executeListener(calls, args);
	        return this;
	    }
	    _executeListener(func, args) {
	        let executor = callFunc;
	        if (this.constructor.executeListenerFunction) {
	            executor = this.constructor.executeListenerFunction;
	        }
	        executor(func, args);
	    }
	    listenTo(obj, event, fn, ctx, once = false) {
	        let listeningTo, id, meth;
	        listeningTo = this._listeningTo || (this._listeningTo = {});
	        id = obj.listenId || (obj.listenId = getID());
	        listeningTo[id] = obj;
	        meth = once ? 'once' : 'on';
	        obj[meth](event, fn, this);
	        return this;
	    }
	    listenToOnce(obj, event, fn, ctx) {
	        return this.listenTo(obj, event, fn, ctx, true);
	    }
	    stopListening(obj, event, callback) {
	        let listeningTo = this._listeningTo;
	        if (!listeningTo)
	            return this;
	        var remove = !event && !callback;
	        if (!callback && typeof event === 'object')
	            callback = this;
	        if (obj)
	            (listeningTo = {})[obj.listenId] = obj;
	        for (var id in listeningTo) {
	            obj = listeningTo[id];
	            obj.off(event, callback, this);
	            if (remove || !Object.keys(obj.listeners).length)
	                delete this._listeningTo[id];
	        }
	        return this;
	    }
	    destroy() {
	        this.stopListening();
	        this.off();
	    }
	}


/***/ }
/******/ ])
});
;