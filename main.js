/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/@googlemaps/js-api-loader/dist/index.esm.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ID: () => (/* binding */ DEFAULT_ID),
/* harmony export */   Loader: () => (/* binding */ Loader),
/* harmony export */   LoaderStatus: () => (/* binding */ LoaderStatus)
/* harmony export */ });
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

// do not edit .js files directly - edit src/index.jst

var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;
  if (a && b && _typeof(a) == 'object' && _typeof(b) == 'object') {
    if (a.constructor !== b.constructor) return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false;
      return true;
    }
    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;
    for (i = length; i-- !== 0;) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    for (i = length; i-- !== 0;) {
      var key = keys[i];
      if (!equal(a[key], b[key])) return false;
    }
    return true;
  }

  // true if both NaN, false otherwise
  return a !== a && b !== b;
};

/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at.
 *
 *      Http://www.apache.org/licenses/LICENSE-2.0.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var DEFAULT_ID = "__googleMapsScriptId";
/**
 * The status of the [[Loader]].
 */
var LoaderStatus;
(function (LoaderStatus) {
  LoaderStatus[LoaderStatus["INITIALIZED"] = 0] = "INITIALIZED";
  LoaderStatus[LoaderStatus["LOADING"] = 1] = "LOADING";
  LoaderStatus[LoaderStatus["SUCCESS"] = 2] = "SUCCESS";
  LoaderStatus[LoaderStatus["FAILURE"] = 3] = "FAILURE";
})(LoaderStatus || (LoaderStatus = {}));
/**
 * [[Loader]] makes it easier to add Google Maps JavaScript API to your application
 * dynamically using
 * [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 * It works by dynamically creating and appending a script node to the the
 * document head and wrapping the callback function so as to return a promise.
 *
 * ```
 * const loader = new Loader({
 *   apiKey: "",
 *   version: "weekly",
 *   libraries: ["places"]
 * });
 *
 * loader.load().then((google) => {
 *   const map = new google.maps.Map(...)
 * })
 * ```
 */
var Loader = /*#__PURE__*/function () {
  /**
   * Creates an instance of Loader using [[LoaderOptions]]. No defaults are set
   * using this library, instead the defaults are set by the Google Maps
   * JavaScript API server.
   *
   * ```
   * const loader = Loader({apiKey, version: 'weekly', libraries: ['places']});
   * ```
   */
  function Loader(_ref) {
    var apiKey = _ref.apiKey,
      authReferrerPolicy = _ref.authReferrerPolicy,
      channel = _ref.channel,
      client = _ref.client,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? DEFAULT_ID : _ref$id,
      language = _ref.language,
      _ref$libraries = _ref.libraries,
      libraries = _ref$libraries === void 0 ? [] : _ref$libraries,
      mapIds = _ref.mapIds,
      nonce = _ref.nonce,
      region = _ref.region,
      _ref$retries = _ref.retries,
      retries = _ref$retries === void 0 ? 3 : _ref$retries,
      _ref$url = _ref.url,
      url = _ref$url === void 0 ? "https://maps.googleapis.com/maps/api/js" : _ref$url,
      version = _ref.version;
    _classCallCheck(this, Loader);
    this.callbacks = [];
    this.done = false;
    this.loading = false;
    this.errors = [];
    this.apiKey = apiKey;
    this.authReferrerPolicy = authReferrerPolicy;
    this.channel = channel;
    this.client = client;
    this.id = id || DEFAULT_ID; // Do not allow empty string
    this.language = language;
    this.libraries = libraries;
    this.mapIds = mapIds;
    this.nonce = nonce;
    this.region = region;
    this.retries = retries;
    this.url = url;
    this.version = version;
    if (Loader.instance) {
      if (!fastDeepEqual(this.options, Loader.instance.options)) {
        throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options), " !== ").concat(JSON.stringify(Loader.instance.options)));
      }
      return Loader.instance;
    }
    Loader.instance = this;
  }
  _createClass(Loader, [{
    key: "options",
    get: function get() {
      return {
        version: this.version,
        apiKey: this.apiKey,
        channel: this.channel,
        client: this.client,
        id: this.id,
        libraries: this.libraries,
        language: this.language,
        region: this.region,
        mapIds: this.mapIds,
        nonce: this.nonce,
        url: this.url,
        authReferrerPolicy: this.authReferrerPolicy
      };
    }
  }, {
    key: "status",
    get: function get() {
      if (this.errors.length) {
        return LoaderStatus.FAILURE;
      }
      if (this.done) {
        return LoaderStatus.SUCCESS;
      }
      if (this.loading) {
        return LoaderStatus.LOADING;
      }
      return LoaderStatus.INITIALIZED;
    }
  }, {
    key: "failed",
    get: function get() {
      return this.done && !this.loading && this.errors.length >= this.retries + 1;
    }
    /**
     * CreateUrl returns the Google Maps JavaScript API script url given the [[LoaderOptions]].
     *
     * @ignore
     * @deprecated
     */
  }, {
    key: "createUrl",
    value: function createUrl() {
      var url = this.url;
      url += "?callback=__googleMapsCallback";
      if (this.apiKey) {
        url += "&key=".concat(this.apiKey);
      }
      if (this.channel) {
        url += "&channel=".concat(this.channel);
      }
      if (this.client) {
        url += "&client=".concat(this.client);
      }
      if (this.libraries.length > 0) {
        url += "&libraries=".concat(this.libraries.join(","));
      }
      if (this.language) {
        url += "&language=".concat(this.language);
      }
      if (this.region) {
        url += "&region=".concat(this.region);
      }
      if (this.version) {
        url += "&v=".concat(this.version);
      }
      if (this.mapIds) {
        url += "&map_ids=".concat(this.mapIds.join(","));
      }
      if (this.authReferrerPolicy) {
        url += "&auth_referrer_policy=".concat(this.authReferrerPolicy);
      }
      return url;
    }
  }, {
    key: "deleteScript",
    value: function deleteScript() {
      var script = document.getElementById(this.id);
      if (script) {
        script.remove();
      }
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     * @deprecated, use importLibrary() instead.
     */
  }, {
    key: "load",
    value: function load() {
      return this.loadPromise();
    }
    /**
     * Load the Google Maps JavaScript API script and return a Promise.
     *
     * @ignore
     * @deprecated, use importLibrary() instead.
     */
  }, {
    key: "loadPromise",
    value: function loadPromise() {
      var _this = this;
      return new Promise(function (resolve, reject) {
        _this.loadCallback(function (err) {
          if (!err) {
            resolve(window.google);
          } else {
            reject(err.error);
          }
        });
      });
    }
  }, {
    key: "importLibrary",
    value: function importLibrary(name) {
      this.execute();
      return google.maps.importLibrary(name);
    }
    /**
     * Load the Google Maps JavaScript API script with a callback.
     * @deprecated, use importLibrary() instead.
     */
  }, {
    key: "loadCallback",
    value: function loadCallback(fn) {
      this.callbacks.push(fn);
      this.execute();
    }
    /**
     * Set the script on document.
     */
  }, {
    key: "setScript",
    value: function setScript() {
      var _this2 = this;
      var _a, _b;
      if (document.getElementById(this.id)) {
        // TODO wrap onerror callback for cases where the script was loaded elsewhere
        this.callback();
        return;
      }
      var params = {
        key: this.apiKey,
        channel: this.channel,
        client: this.client,
        libraries: this.libraries.length && this.libraries,
        v: this.version,
        mapIds: this.mapIds,
        language: this.language,
        region: this.region,
        authReferrerPolicy: this.authReferrerPolicy
      };
      // keep the URL minimal:
      Object.keys(params).forEach(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      function (key) {
        return !params[key] && delete params[key];
      });
      if (!((_b = (_a = window === null || window === void 0 ? void 0 : window.google) === null || _a === void 0 ? void 0 : _a.maps) === null || _b === void 0 ? void 0 : _b.importLibrary)) {
        // tweaked copy of https://developers.google.com/maps/documentation/javascript/load-maps-js-api#dynamic-library-import
        // which also sets the base url, the id, and the nonce
        /* eslint-disable */
        (function (g) {
          // @ts-ignore
          var h,
            a,
            k,
            p = "The Google Maps JavaScript API",
            c = "google",
            l = "importLibrary",
            q = "__ib__",
            m = document,
            b = window;
          // @ts-ignore
          b = b[c] || (b[c] = {});
          // @ts-ignore
          var d = b.maps || (b.maps = {}),
            r = new Set(),
            e = new URLSearchParams(),
            u = function u() {
              return (
                // @ts-ignore
                h || (h = new Promise(function (f, n) {
                  return __awaiter(_this2, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                    var _a;
                    return _regeneratorRuntime().wrap(function _callee$(_context) {
                      while (1) switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return a = m.createElement("script");
                        case 2:
                          a.id = this.id;
                          e.set("libraries", _toConsumableArray(r) + "");
                          // @ts-ignore
                          for (k in g) e.set(k.replace(/[A-Z]/g, function (t) {
                            return "_" + t[0].toLowerCase();
                          }), g[k]);
                          e.set("callback", c + ".maps." + q);
                          a.src = this.url + "?" + e;
                          d[q] = f;
                          a.onerror = function () {
                            return h = n(Error(p + " could not load."));
                          };
                          // @ts-ignore
                          a.nonce = this.nonce || ((_a = m.querySelector("script[nonce]")) === null || _a === void 0 ? void 0 : _a.nonce) || "";
                          m.head.append(a);
                        case 11:
                        case "end":
                          return _context.stop();
                      }
                    }, _callee, this);
                  }));
                }))
              );
            };
          // @ts-ignore
          d[l] ? console.warn(p + " only loads once. Ignoring:", g) : d[l] = function (f) {
            for (var _len = arguments.length, n = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              n[_key - 1] = arguments[_key];
            }
            return r.add(f) && u().then(function () {
              return d[l].apply(d, [f].concat(n));
            });
          };
        })(params);
        /* eslint-enable */
      }
      // While most libraries populate the global namespace when loaded via bootstrap params,
      // this is not the case for "marker" when used with the inline bootstrap loader
      // (and maybe others in the future). So ensure there is an importLibrary for each:
      var libraryPromises = this.libraries.map(function (library) {
        return _this2.importLibrary(library);
      });
      // ensure at least one library, to kick off loading...
      if (!libraryPromises.length) {
        libraryPromises.push(this.importLibrary("core"));
      }
      Promise.all(libraryPromises).then(function () {
        return _this2.callback();
      }, function (error) {
        var event = new ErrorEvent("error", {
          error: error
        }); // for backwards compat
        _this2.loadErrorCallback(event);
      });
    }
    /**
     * Reset the loader state.
     */
  }, {
    key: "reset",
    value: function reset() {
      this.deleteScript();
      this.done = false;
      this.loading = false;
      this.errors = [];
      this.onerrorEvent = null;
    }
  }, {
    key: "resetIfRetryingFailed",
    value: function resetIfRetryingFailed() {
      if (this.failed) {
        this.reset();
      }
    }
  }, {
    key: "loadErrorCallback",
    value: function loadErrorCallback(e) {
      var _this3 = this;
      this.errors.push(e);
      if (this.errors.length <= this.retries) {
        var delay = this.errors.length * Math.pow(2, this.errors.length);
        console.error("Failed to load Google Maps script, retrying in ".concat(delay, " ms."));
        setTimeout(function () {
          _this3.deleteScript();
          _this3.setScript();
        }, delay);
      } else {
        this.onerrorEvent = e;
        this.callback();
      }
    }
  }, {
    key: "callback",
    value: function callback() {
      var _this4 = this;
      this.done = true;
      this.loading = false;
      this.callbacks.forEach(function (cb) {
        cb(_this4.onerrorEvent);
      });
      this.callbacks = [];
    }
  }, {
    key: "execute",
    value: function execute() {
      this.resetIfRetryingFailed();
      if (this.done) {
        this.callback();
      } else {
        // short circuit and warn if google.maps is already loaded
        if (window.google && window.google.maps && window.google.maps.version) {
          console.warn("Google Maps already loaded outside @googlemaps/js-api-loader." + "This may result in undesirable behavior as options and script parameters may not match.");
          this.callback();
          return;
        }
        if (this.loading) ;else {
          this.loading = true;
          this.setScript();
        }
      }
    }
  }]);
  return Loader;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/Modules/DOMCreator.js":
/*!***********************************!*\
  !*** ./src/Modules/DOMCreator.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createContactUsPage: () => (/* binding */ createContactUsPage),
/* harmony export */   createFooter: () => (/* binding */ createFooter),
/* harmony export */   createHeaderNavBar: () => (/* binding */ createHeaderNavBar),
/* harmony export */   createHomePage: () => (/* binding */ createHomePage),
/* harmony export */   createMenuPageDishes: () => (/* binding */ createMenuPageDishes),
/* harmony export */   createNearestHospitalPage: () => (/* binding */ createNearestHospitalPage)
/* harmony export */ });
/* harmony import */ var _images_burger_eat_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/burger_eat.jpg */ "./src/images/burger_eat.jpg");
/* harmony import */ var _images_burger_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/burger.jpg */ "./src/images/burger.jpg");
/* harmony import */ var _images_burger1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/burger1.png */ "./src/images/burger1.png");
/* harmony import */ var _images_burger2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/burger2.png */ "./src/images/burger2.png");
/* harmony import */ var _images_burger3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/burger3.png */ "./src/images/burger3.png");
/* harmony import */ var _images_burger4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/burger4.png */ "./src/images/burger4.png");
/* harmony import */ var _images_burger5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/burger5.png */ "./src/images/burger5.png");
/* harmony import */ var _images_burger7_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/burger7.png */ "./src/images/burger7.png");
/* harmony import */ var _images_burger8_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/burger8.png */ "./src/images/burger8.png");
/* harmony import */ var _images_hotdog_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/hotdog.jpg */ "./src/images/hotdog.jpg");
/* harmony import */ var _images_shake_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/shake.jpg */ "./src/images/shake.jpg");
/* harmony import */ var _images_frenchFries_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../images/frenchFries.jpg */ "./src/images/frenchFries.jpg");
/* harmony import */ var _images_chesseCake_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../images/chesseCake.jpg */ "./src/images/chesseCake.jpg");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }













var menuItems = [{
  name: "Single Bypass Burger",
  price: 9.7,
  discount: false,
  extraIngredients: "5 bacon slices",
  extraIngredientsPrice: 0.92,
  image: _images_burger_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "Double Bypass Burger",
  price: 11.55,
  discount: false,
  extraIngredients: "10 bacon slices",
  extraIngredientsPrice: 1.85,
  image: _images_burger1_png__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "Triple Bypass Burger",
  price: 13.63,
  discount: false,
  extraIngredients: "15 bacon slices",
  extraIngredientsPrice: 2.75,
  image: _images_burger2_png__WEBPACK_IMPORTED_MODULE_3__["default"]
}, {
  name: "Quadruple Bypass Burger",
  price: 15.01,
  discount: false,
  extraIngredients: "20 bacon slices",
  extraIngredientsPrice: 3.7,
  image: _images_burger3_png__WEBPACK_IMPORTED_MODULE_4__["default"]
}, {
  name: "Quintuple Bypass Burger",
  price: 18.01,
  discount: false,
  extraIngredients: "25 bacon slices",
  extraIngredientsPrice: 4.62,
  image: _images_burger4_png__WEBPACK_IMPORTED_MODULE_5__["default"]
}, {
  name: "Sextuple Bypass Burger",
  price: 20.09,
  discount: false,
  extraIngredients: "30 bacon slices",
  extraIngredientsPrice: 5.64,
  image: _images_burger5_png__WEBPACK_IMPORTED_MODULE_6__["default"]
}, {
  name: "Septuple Bypass Burger",
  price: 21.02,
  discount: false,
  extraIngredients: "35 bacon slices",
  extraIngredientsPrice: 6.47,
  image: _images_burger7_png__WEBPACK_IMPORTED_MODULE_7__["default"]
}, {
  name: "Octuple Bypass Burger",
  price: 24.02,
  discount: false,
  extraIngredients: "40 bacon slices",
  extraIngredientsPrice: 7.39,
  image: _images_burger8_png__WEBPACK_IMPORTED_MODULE_8__["default"]
}, {
  name: "1/2 Pound Coromary Dog",
  price: 9.47,
  discount: false,
  extraIngredients: "10 bacon slices",
  extraIngredientsPrice: 1.85,
  image: _images_hotdog_jpg__WEBPACK_IMPORTED_MODULE_9__["default"]
}, {
  name: "Curvyliner Fries",
  price: 9.65,
  discount: false,
  extraIngredients: "Extra Butter Souce",
  extraIngredientsPrice: 2.98,
  image: _images_frenchFries_jpg__WEBPACK_IMPORTED_MODULE_11__["default"]
}, {
  name: "ButterFat Shake",
  price: 4.62,
  discount: false,
  extraIngredients: "Extra butter fat",
  extraIngredientsPrice: 4.2,
  image: _images_shake_jpg__WEBPACK_IMPORTED_MODULE_10__["default"]
}, {
  name: "1/2 Fatty Chessecake with white chocolateand organic butter",
  price: 16.25,
  discount: false,
  extraIngredients: "Healthy berries buried with chocolate",
  extraIngredientsPrice: 5.7,
  image: _images_chesseCake_jpg__WEBPACK_IMPORTED_MODULE_12__["default"]
}];
//11
function createHeaderNavBar() {
  var header = document.createElement("header");
  var generalNav = document.createElement("nav");
  var leftNav = document.createElement("nav");
  var leftNavUl = document.createElement("ul");
  for (var list = 1; list <= 3; list++) {
    var li = document.createElement("li");
    var a = document.createElement("a");
    a.setAttribute("href", "#");
    a.setAttribute("class", "navLink");
    if (list === 1) {
      a.classList.add("selected");
      a.append("Home");
    } else if (list === 2) {
      a.append("Menu");
    } else {
      a.append("Contact Us");
    }
    li.appendChild(a);
    leftNavUl.append(li);
  }
  leftNav.appendChild(leftNavUl);
  generalNav.appendChild(leftNav);
  var navbarLogo = document.createElement("h1");
  navbarLogo.setAttribute("id", "logo");
  navbarLogo.append("Heart Attack Grill");
  generalNav.appendChild(navbarLogo);
  var rightNavbar = document.createElement("nav");
  rightNavbar.innerHTML = '<ul><li><a href="#" class="navLink">Nearest Hospital</a></li></ul>';
  generalNav.appendChild(rightNavbar);
  header.appendChild(generalNav);
  return header;
}
function createFooter() {
  var footer = document.createElement("footer");
  footer.innerHTML = "<p>Tempting fate, one burger at a time.</p>";
  return footer;
}
function createHomePage() {
  //Main Banner
  var mainBanner = document.createElement("section");
  mainBanner.setAttribute("id", "mainBanner");
  var img = document.createElement("img");
  img.src = _images_burger_eat_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
  mainBanner.append(img);
  var bannerBlockquote = document.createElement("blockquote");
  bannerBlockquote.append("Fighting anorexia since 2005");
  mainBanner.appendChild(bannerBlockquote);

  //Disclaimer Section
  var disclaimerSection = document.createElement("section");
  disclaimerSection.setAttribute("id", "disclaimer");
  var disclaimerTitle = document.createElement("h1");
  disclaimerTitle.append("Disclaimer");
  disclaimerSection.append(disclaimerTitle);
  var disclaimerBlockquote = document.createElement("blockquote");
  disclaimerBlockquote.append("Our dishes defy the laws of portion control, cholesterol sanity, and common sense.");
  disclaimerSection.append(disclaimerBlockquote);

  //Disclaimer Form
  var disclaimerForm = document.createElement("form");
  disclaimerForm.setAttribute("action", "#");
  disclaimerForm.setAttribute("method", "get");
  var formSection = document.createElement("section");
  var inputCheckbox = document.createElement("input");
  inputCheckbox.setAttribute("type", "checkbox");
  inputCheckbox.setAttribute("name", "disclaimer");
  inputCheckbox.setAttribute("value", "checked");
  inputCheckbox.setAttribute("id", "disclaimer");
  formSection.appendChild(inputCheckbox);
  var labelForCheckbox = document.createElement("label");
  labelForCheckbox.setAttribute("for", "disclaimer");
  labelForCheckbox.innerHTML = 'I have read the <a href="#">disclaimer</a> and agreed to the <a href="#">terms of service</a>';
  formSection.appendChild(labelForCheckbox);
  disclaimerForm.appendChild(formSection);
  var inputSubmit = document.createElement("input");
  inputSubmit.setAttribute("type", "submit");
  inputSubmit.setAttribute("value", "I Accept");
  disclaimerForm.appendChild(inputSubmit);
  disclaimerSection.appendChild(disclaimerForm);
  return [mainBanner, disclaimerSection];
}
function createMenuPageDishes() {
  var dishes = [];
  var _iterator = _createForOfIteratorHelper(menuItems),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;
      var name = item.name,
        price = item.price,
        discount = item.discount,
        extraIngredients = item.extraIngredients,
        extraIngredientsPrice = item.extraIngredientsPrice,
        image = item.image;
      var dishDiv = document.createElement("div");
      dishDiv.setAttribute("class", "dish");
      var dishImageDiv = document.createElement("div");
      var img = document.createElement("img");
      img.src = image;
      dishImageDiv.append(img);
      dishImageDiv.setAttribute("class", "dish-image");
      dishDiv.append(dishImageDiv);
      var dishDetailsDiv = document.createElement("div");
      dishDetailsDiv.setAttribute("class", "dish-details");
      var h2 = document.createElement("h2");
      h2.textContent = name;
      dishDetailsDiv.append(h2);
      for (var i = 1; i <= 3; i++) {
        var p = document.createElement("p");
        if (i === 1) p.textContent = "Price : $".concat(price);
        if (i === 2) p.textContent = "Extra Ingredients : ".concat(extraIngredients);
        if (i === 3) p.textContent = "Extra Ingredients Price : $".concat(extraIngredientsPrice);
        dishDetailsDiv.append(p);
      }
      dishDetailsDiv.classList.add("hovered");
      dishDiv.append(dishDetailsDiv);
      dishes.push(dishDiv);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return dishes;
}
function createNearestHospitalPage() {
  var mapDiv = document.createElement("div");
  mapDiv.setAttribute("id", "map");
  return mapDiv;
}
function createContactUsPage() {
  var details = {
    street: "450 FREMONT STREET in DOWNTOWN LAS VEGAS",
    phone: "702-901-1835"
  };
  var address = document.createElement("address");
  for (var _i = 0, _Object$values = Object.values(details); _i < _Object$values.length; _i++) {
    var value = _Object$values[_i];
    var p = document.createElement("p");
    p.textContent = value;
    address.append(p);
  }
  address.append(document.createElement("span"));
  return address;
}


/***/ }),

/***/ "./src/Modules/DOMEvents.js":
/*!**********************************!*\
  !*** ./src/Modules/DOMEvents.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dishesHoveredClassToggler: () => (/* binding */ dishesHoveredClassToggler),
/* harmony export */   registerNavLinkClicked: () => (/* binding */ registerNavLinkClicked)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/Modules/selectors.js");
/* harmony import */ var _DOMRenderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMRenderer */ "./src/Modules/DOMRenderer.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Register events and call renderFunctions (call DOMelement creators and append it to main)


var callRenderFunctions = {
  home: _DOMRenderer__WEBPACK_IMPORTED_MODULE_1__.renderHomePage,
  menu: _DOMRenderer__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage,
  "contact us": _DOMRenderer__WEBPACK_IMPORTED_MODULE_1__.renderContactUsPage,
  "nearest hospital": _DOMRenderer__WEBPACK_IMPORTED_MODULE_1__.renderNearestHospitalPage
};
function registerNavLinkClicked() {
  var navLinks = _toConsumableArray((0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("#content a.navLink"));
  //remove the selected classlists from the one that have them and add to the one that is being clicked
  navLinks.filter(function (link) {
    return link.classList.contains("selected");
  }).forEach(function (link) {
    return link.classList.remove("selected");
  });
  var clikedLink = this;
  clikedLink.classList.add("selected");
  callRenderFunctions[clikedLink.textContent.toLowerCase()]();
}
function dishesHoveredClassToggler(e) {
  var element = e.target;
  if (element.classList.contains("hovered")) {
    element.classList.remove("hovered");
    if (element.classList.contains("dish-image")) {
      var nextElementSibling = element.nextElementSibling;
      nextElementSibling.classList.add("hovered");
    }
    if (element.classList.contains("dish-details")) {
      var previousElementSibling = element.previousElementSibling;
      previousElementSibling.classList.add("hovered");
    }
  }
}


/***/ }),

/***/ "./src/Modules/DOMRenderer.js":
/*!************************************!*\
  !*** ./src/Modules/DOMRenderer.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appendHeaderNavBar: () => (/* binding */ appendHeaderNavBar),
/* harmony export */   appendMainTag: () => (/* binding */ appendMainTag),
/* harmony export */   renderContactUsPage: () => (/* binding */ renderContactUsPage),
/* harmony export */   renderHomePage: () => (/* binding */ renderHomePage),
/* harmony export */   renderMenuPage: () => (/* binding */ renderMenuPage),
/* harmony export */   renderNearestHospitalPage: () => (/* binding */ renderNearestHospitalPage)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/Modules/selectors.js");
/* harmony import */ var _DOMEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMEvents */ "./src/Modules/DOMEvents.js");
/* harmony import */ var _addHeaderBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addHeaderBackground */ "./src/Modules/addHeaderBackground.js");
/* harmony import */ var _DOMCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DOMCreator */ "./src/Modules/DOMCreator.js");
/* harmony import */ var _GoogleMaps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GoogleMaps */ "./src/Modules/GoogleMaps.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






var contentDiv = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$)("#content");
function emptyMainContainer() {
  var mainTag = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$)("#content main");
  mainTag.replaceChildren();
}
function appendHeaderNavBar() {
  contentDiv.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createHeaderNavBar)());
  var navLinks = _toConsumableArray((0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("header a"));
  navLinks.forEach(function (link) {
    link.addEventListener("click", _DOMEvents__WEBPACK_IMPORTED_MODULE_1__.registerNavLinkClicked);
  });
  window.addEventListener("scroll", _addHeaderBackground__WEBPACK_IMPORTED_MODULE_2__.scrolledClassHeader);
}
function appendMainTag() {
  contentDiv.appendChild(document.createElement("main"));
}
function renderHomePage() {
  var _mainTag;
  emptyMainContainer();

  //render the home page (default) in main

  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  (_mainTag = mainTag).append.apply(_mainTag, _toConsumableArray((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createHomePage)()));

  //add footer in main
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
  contentDiv.append(mainTag);
}
function renderMenuPage() {
  var _mainTag2;
  emptyMainContainer();
  mainTag.setAttribute("class", "menu");
  (_mainTag2 = mainTag).append.apply(_mainTag2, _toConsumableArray((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createMenuPageDishes)()));
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createFooter)());

  //listen to events
  _toConsumableArray((0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$$)("div.dish div")).forEach(function (dish) {
    dish.addEventListener("mouseover", function (e) {
      (0,_DOMEvents__WEBPACK_IMPORTED_MODULE_1__.dishesHoveredClassToggler)(e);
    });
  });
}
function renderNearestHospitalPage() {
  emptyMainContainer();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  if (mainTag.classList.contains("contactUs")) {
    mainTag.classList.remove("menu");
  }
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createNearestHospitalPage)());
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
  //render map
  (0,_GoogleMaps__WEBPACK_IMPORTED_MODULE_4__.renderMap)();
}
function renderContactUsPage() {
  emptyMainContainer();
  if (mainTag.classList.contains("menu")) {
    mainTag.classList.remove("menu");
  }
  mainTag.classList.add("contactUs");
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createContactUsPage)());
  mainTag.append((0,_DOMCreator__WEBPACK_IMPORTED_MODULE_3__.createFooter)());
}


/***/ }),

/***/ "./src/Modules/GoogleMaps.js":
/*!***********************************!*\
  !*** ./src/Modules/GoogleMaps.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderMap: () => (/* binding */ renderMap)
/* harmony export */ });
/* harmony import */ var _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @googlemaps/js-api-loader */ "./node_modules/@googlemaps/js-api-loader/dist/index.esm.js");

var loader = new _googlemaps_js_api_loader__WEBPACK_IMPORTED_MODULE_0__.Loader({
  apiKey: "AIzaSyBF4W-L7n1LdKmWnIkaonfFMQdUZ1BOBjk",
  // Replace with your Google Maps API key
  version: "weekly" // Replace with the desired version of the Google Maps API
});

function initMap() {
  var location = {
    lat: 36.2859308,
    lng: -115.092762
  };
  var mapOptions = {
    center: location,
    zoom: 15,
    mapTypeId: "satellite"
  };
  var map = new google.maps.Map(document.getElementById("map"), mapOptions);
  var markerOptions = {
    position: location,
    map: map,
    title: "North Las Vegas VA Medical Center"
  };
  var marker = new google.maps.Marker(markerOptions);
}
function renderMap() {
  loader.load().then(function () {
    initMap();
  });
}

/***/ }),

/***/ "./src/Modules/addHeaderBackground.js":
/*!********************************************!*\
  !*** ./src/Modules/addHeaderBackground.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   scrolledClassHeader: () => (/* binding */ scrolledClassHeader)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/Modules/selectors.js");

function scrolledClassHeader() {
  var header = (0,_selectors__WEBPACK_IMPORTED_MODULE_0__.$)("div#content header");
  var headerHeight = header.offsetHeight;
  //when the distance from scroll of the y axis is bigger than the header navbar height change its color
  if (window.scrollY > headerHeight) header.classList.add("scrolled");else header.classList.remove("scrolled");
}

/***/ }),

/***/ "./src/Modules/selectors.js":
/*!**********************************!*\
  !*** ./src/Modules/selectors.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ $),
/* harmony export */   $$: () => (/* binding */ $$)
/* harmony export */ });
var $ = function $(selector) {
  return document.querySelector(selector);
};
var $$ = function $$(allSelector) {
  return document.querySelectorAll(allSelector);
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  --quoteFont: "Kaushan Script", cursive;
  --backgroundColor: #fafafa;
  --imgBorderColor: #e5e7e8;
  --backgroundDisclaimer: black;
}

body {
  padding: 0.5em 2em;
  padding-top: 0em;
  min-height: 100vh;
  margin: 0;
  background-color: var(--backgroundColor);
  display: grid;
}

#content {
  min-height: 100%;
  display: grid;
  grid-template-columns: 1;
  grid-auto-flow: row;
}

#content header {
  height: fit-content;
  padding: 0.25em 0.5em;
  position: sticky;
  top: 0px;
  z-index: 1;
  transition: background-color ease 100ms;
}

#content header > nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

#content ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 0;
}

#content a {
  text-decoration: none;
}

#content a.navLink.selected {
  font-weight: 700;
  pointer-events: none;
}

#content ul a {
  color: black;
}

#content header.scrolled {
  background-color: rgba(42, 43, 43, 0.75);
}

#content header.scrolled * {
  color: var(--backgroundColor);
}

#content header > nav nav:first-of-type {
  width: 30%;
}

#content header > nav nav:last-of-type {
  width: 30%;
}

#content header h1#logo {
  font-size: 1.5rem;
}

/*Home Page*/
main section#mainBanner {
  width: 100%;
  height: 30em;
  position: relative;
  border: 1px solid var(--imgBorderColor);
}

main section#mainBanner img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

main section#mainBanner blockquote {
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  bottom: 0.5em;
  font-size: 1.25rem;
  font-style: italic;
  font-family: var(--quoteFont);
  color: var(--backgroundColor);
  letter-spacing: 0.1em;
}

main section#disclaimer {
  margin-top: 2em;
  background-color: var(--backgroundDisclaimer);
  text-align: center;
  color: var(--backgroundColor);
  padding: 2em 0.2em;
}

main section#disclaimer a {
  color: red;
}

main section#disclaimer h1 {
  font-size: 2rem;
  letter-spacing: 0.1em;
}

main section#disclaimer form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1.5em;
}

main section#disclaimer form input[type="submit"] {
  background-color: var(--backgroundColor);
  border: none;
  padding: 0.5em 2em;
}

main section#disclaimer form input[type="submit"]:hover {
  cursor: pointer;
}
/*End of Home Page*/

/*Menu Page*/
main.menu {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-flow: row;
  row-gap: 2em;
}

main.menu .dish {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  row-gap: 0.5em;
  width: 60%;
  margin: auto;
}

.dish-image {
  width: 300px; /* Adjust the size as needed */
  height: 250px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
}
.dish-image img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.dish-details h2 {
  font-size: 1rem;
}

.dish-details p {
  margin: 5px 0;
  font-size: 0.8rem;
}

.dish-image,
.dish-details {
  transition: opacity ease 20ms, filter ease 20ms, scale ease 20ms;
}

.dish-image.hovered,
.dish-details.hovered {
  opacity: 0.7;
  filter: blur(0.2em);
  transform: scale(0.9);
}

/*Nearest Hospital Main Page (google maps api)*/
#map {
  height: 500px;
}

/*End of Nearest Hospital Main Page*/

/*Contact Us Page*/
main.contactUs {
  display: grid;
  grid-template-rows: 80% 20%;
  grid-template-columns: 1fr;
  position: relative;
}

main.contactUs span {
  content: "";
  position: absolute;
  height: 0.5em;
  width: 20%;
  top: -1em;
  left: 50%;
  transform: translate(-50%);
  background-color: var(--imgBorderColor);
  border-radius: 1px;
}

main.contactUs address {
  text-align: center;
}

main.contactUs address p {
  font-size: 2rem;
  font-weight: 900;
}

/*End of Contact Us Page*/

/*End of Menu Page*/
#content footer {
  text-align: center;
  letter-spacing: 0.1em;
  padding: 0.75em 0.5em;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB;wEACsE;EACtE,eAAe;EACf,sCAAsC;EACtC,0BAA0B;EAC1B,yBAAyB;EACzB,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,SAAS;EACT,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,QAAQ;EACR,UAAU;EACV,uCAAuC;AACzC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,oBAAoB;AACtB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,iBAAiB;AACnB;;AAEA,YAAY;AACZ;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,UAAU;EACV,0BAA0B;EAC1B,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,6BAA6B;EAC7B,6BAA6B;EAC7B,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,6CAA6C;EAC7C,kBAAkB;EAClB,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,wCAAwC;EACxC,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;AACA,mBAAmB;;AAEnB,YAAY;AACZ;EACE,aAAa;EACb,qCAAqC;EACrC,mBAAmB;EACnB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,uBAAuB;EACvB,cAAc;EACd,UAAU;EACV,YAAY;AACd;;AAEA;EACE,YAAY,EAAE,8BAA8B;EAC5C,aAAa;EACb,uCAAuC;AACzC;AACA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,oBAAoB;AACtB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,iBAAiB;AACnB;;AAEA;;EAEE,gEAAgE;AAClE;;AAEA;;EAEE,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA,+CAA+C;AAC/C;EACE,aAAa;AACf;;AAEA,oCAAoC;;AAEpC,kBAAkB;AAClB;EACE,aAAa;EACb,2BAA2B;EAC3B,0BAA0B;EAC1B,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,UAAU;EACV,SAAS;EACT,SAAS;EACT,0BAA0B;EAC1B,uCAAuC;EACvC,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA,yBAAyB;;AAEzB,mBAAmB;AACnB;EACE,kBAAkB;EAClB,qBAAqB;EACrB,qBAAqB;AACvB","sourcesContent":["* {\r\n  box-sizing: border-box;\r\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto,\r\n    Oxygen, Ubuntu, Cantarell, \"Open Sans\", \"Helvetica Neue\", sans-serif;\r\n  font-size: 16px;\r\n  --quoteFont: \"Kaushan Script\", cursive;\r\n  --backgroundColor: #fafafa;\r\n  --imgBorderColor: #e5e7e8;\r\n  --backgroundDisclaimer: black;\r\n}\r\n\r\nbody {\r\n  padding: 0.5em 2em;\r\n  padding-top: 0em;\r\n  min-height: 100vh;\r\n  margin: 0;\r\n  background-color: var(--backgroundColor);\r\n  display: grid;\r\n}\r\n\r\n#content {\r\n  min-height: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1;\r\n  grid-auto-flow: row;\r\n}\r\n\r\n#content header {\r\n  height: fit-content;\r\n  padding: 0.25em 0.5em;\r\n  position: sticky;\r\n  top: 0px;\r\n  z-index: 1;\r\n  transition: background-color ease 100ms;\r\n}\r\n\r\n#content header > nav {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  z-index: 1;\r\n}\r\n\r\n#content ul {\r\n  list-style: none;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  padding: 0;\r\n}\r\n\r\n#content a {\r\n  text-decoration: none;\r\n}\r\n\r\n#content a.navLink.selected {\r\n  font-weight: 700;\r\n  pointer-events: none;\r\n}\r\n\r\n#content ul a {\r\n  color: black;\r\n}\r\n\r\n#content header.scrolled {\r\n  background-color: rgba(42, 43, 43, 0.75);\r\n}\r\n\r\n#content header.scrolled * {\r\n  color: var(--backgroundColor);\r\n}\r\n\r\n#content header > nav nav:first-of-type {\r\n  width: 30%;\r\n}\r\n\r\n#content header > nav nav:last-of-type {\r\n  width: 30%;\r\n}\r\n\r\n#content header h1#logo {\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*Home Page*/\r\nmain section#mainBanner {\r\n  width: 100%;\r\n  height: 30em;\r\n  position: relative;\r\n  border: 1px solid var(--imgBorderColor);\r\n}\r\n\r\nmain section#mainBanner img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\nmain section#mainBanner blockquote {\r\n  position: absolute;\r\n  right: 50%;\r\n  transform: translateX(50%);\r\n  bottom: 0.5em;\r\n  font-size: 1.25rem;\r\n  font-style: italic;\r\n  font-family: var(--quoteFont);\r\n  color: var(--backgroundColor);\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\nmain section#disclaimer {\r\n  margin-top: 2em;\r\n  background-color: var(--backgroundDisclaimer);\r\n  text-align: center;\r\n  color: var(--backgroundColor);\r\n  padding: 2em 0.2em;\r\n}\r\n\r\nmain section#disclaimer a {\r\n  color: red;\r\n}\r\n\r\nmain section#disclaimer h1 {\r\n  font-size: 2rem;\r\n  letter-spacing: 0.1em;\r\n}\r\n\r\nmain section#disclaimer form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  row-gap: 1.5em;\r\n}\r\n\r\nmain section#disclaimer form input[type=\"submit\"] {\r\n  background-color: var(--backgroundColor);\r\n  border: none;\r\n  padding: 0.5em 2em;\r\n}\r\n\r\nmain section#disclaimer form input[type=\"submit\"]:hover {\r\n  cursor: pointer;\r\n}\r\n/*End of Home Page*/\r\n\r\n/*Menu Page*/\r\nmain.menu {\r\n  display: grid;\r\n  grid-template-columns: repeat(1, 1fr);\r\n  grid-auto-flow: row;\r\n  row-gap: 2em;\r\n}\r\n\r\nmain.menu .dish {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: 1fr;\r\n  row-gap: 0.5em;\r\n  width: 60%;\r\n  margin: auto;\r\n}\r\n\r\n.dish-image {\r\n  width: 300px; /* Adjust the size as needed */\r\n  height: 250px;\r\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\r\n}\r\n.dish-image img {\r\n  object-fit: cover;\r\n  width: 100%;\r\n  height: 100%;\r\n  pointer-events: none;\r\n}\r\n\r\n.dish-details h2 {\r\n  font-size: 1rem;\r\n}\r\n\r\n.dish-details p {\r\n  margin: 5px 0;\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.dish-image,\r\n.dish-details {\r\n  transition: opacity ease 20ms, filter ease 20ms, scale ease 20ms;\r\n}\r\n\r\n.dish-image.hovered,\r\n.dish-details.hovered {\r\n  opacity: 0.7;\r\n  filter: blur(0.2em);\r\n  transform: scale(0.9);\r\n}\r\n\r\n/*Nearest Hospital Main Page (google maps api)*/\r\n#map {\r\n  height: 500px;\r\n}\r\n\r\n/*End of Nearest Hospital Main Page*/\r\n\r\n/*Contact Us Page*/\r\nmain.contactUs {\r\n  display: grid;\r\n  grid-template-rows: 80% 20%;\r\n  grid-template-columns: 1fr;\r\n  position: relative;\r\n}\r\n\r\nmain.contactUs span {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 0.5em;\r\n  width: 20%;\r\n  top: -1em;\r\n  left: 50%;\r\n  transform: translate(-50%);\r\n  background-color: var(--imgBorderColor);\r\n  border-radius: 1px;\r\n}\r\n\r\nmain.contactUs address {\r\n  text-align: center;\r\n}\r\n\r\nmain.contactUs address p {\r\n  font-size: 2rem;\r\n  font-weight: 900;\r\n}\r\n\r\n/*End of Contact Us Page*/\r\n\r\n/*End of Menu Page*/\r\n#content footer {\r\n  text-align: center;\r\n  letter-spacing: 0.1em;\r\n  padding: 0.75em 0.5em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/images/burger.jpg":
/*!*******************************!*\
  !*** ./src/images/burger.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "865efa9a3a4e0e577fc71c66dfb4d44b.jpg");

/***/ }),

/***/ "./src/images/burger1.png":
/*!********************************!*\
  !*** ./src/images/burger1.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "92c1bb721468a8d0e509d4fb1973c7b6.png");

/***/ }),

/***/ "./src/images/burger2.png":
/*!********************************!*\
  !*** ./src/images/burger2.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "cf25ee55f763b990b8bf1b22944e71fa.png");

/***/ }),

/***/ "./src/images/burger3.png":
/*!********************************!*\
  !*** ./src/images/burger3.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "f3108bb4063d73caf923db9f32a75b3f.png");

/***/ }),

/***/ "./src/images/burger4.png":
/*!********************************!*\
  !*** ./src/images/burger4.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "98a2b0e4c464357f8559794e17a839ce.png");

/***/ }),

/***/ "./src/images/burger5.png":
/*!********************************!*\
  !*** ./src/images/burger5.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "9745d5fbbc05f579fdb2803c4b890f0b.png");

/***/ }),

/***/ "./src/images/burger7.png":
/*!********************************!*\
  !*** ./src/images/burger7.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "e2ed4215d4bee12765ecf2cb221e8f54.png");

/***/ }),

/***/ "./src/images/burger8.png":
/*!********************************!*\
  !*** ./src/images/burger8.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b75c1e1a5bb44ee62843e0fc658c8329.png");

/***/ }),

/***/ "./src/images/burger_eat.jpg":
/*!***********************************!*\
  !*** ./src/images/burger_eat.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "412889c399831bc2c44beeb94370c53b.jpg");

/***/ }),

/***/ "./src/images/chesseCake.jpg":
/*!***********************************!*\
  !*** ./src/images/chesseCake.jpg ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b213582648a300495b8d49afd751c46d.jpg");

/***/ }),

/***/ "./src/images/frenchFries.jpg":
/*!************************************!*\
  !*** ./src/images/frenchFries.jpg ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "c6101b6b5fa4591340c7bc6f3a14dfbe.jpg");

/***/ }),

/***/ "./src/images/hotdog.jpg":
/*!*******************************!*\
  !*** ./src/images/hotdog.jpg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ca3817bd1cdbfaadb46cc1e0ba615a58.jpg");

/***/ }),

/***/ "./src/images/shake.jpg":
/*!******************************!*\
  !*** ./src/images/shake.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d0b5bcef1eae12e4b7e20eb01a81d132.jpg");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _Modules_DOMEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modules/DOMEvents */ "./src/Modules/DOMEvents.js");
/* harmony import */ var _Modules_DOMRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Modules/DOMRenderer */ "./src/Modules/DOMRenderer.js");



window.addEventListener("DOMContentLoaded", function () {
  (0,_Modules_DOMRenderer__WEBPACK_IMPORTED_MODULE_2__.appendHeaderNavBar)();
  (0,_Modules_DOMRenderer__WEBPACK_IMPORTED_MODULE_2__.appendMainTag)();
  //render the home page; the default one
  (0,_Modules_DOMRenderer__WEBPACK_IMPORTED_MODULE_2__.renderHomePage)();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpRkFBaUYsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBc0I7QUFDK0I7QUFLdEI7QUFFL0JyTSxNQUFNLENBQUM2SyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxZQUFZO0VBQ3RERCx3RUFBa0IsQ0FBQyxDQUFDO0VBQ3BCRSxtRUFBYSxDQUFDLENBQUM7RUFDZjtFQUNBekIsb0VBQWMsQ0FBQyxDQUFDO0FBQ2xCLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uLi9ub2RlX21vZHVsZXMvZmFzdC1kZWVwLWVxdWFsL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9Nb2R1bGVzL0RPTUNyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvTW9kdWxlcy9ET01FdmVudHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvTW9kdWxlcy9ET01SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9Nb2R1bGVzL0dvb2dsZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvTW9kdWxlcy9hZGRIZWFkZXJCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL01vZHVsZXMvc2VsZWN0b3JzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW1hZ2VzL2J1cmdlci5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW1hZ2VzL2J1cmdlcjEucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2ltYWdlcy9idXJnZXIyLnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWFnZXMvYnVyZ2VyMy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW1hZ2VzL2J1cmdlcjQucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2ltYWdlcy9idXJnZXI1LnBuZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWFnZXMvYnVyZ2VyNy5wbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW1hZ2VzL2J1cmdlcjgucG5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2ltYWdlcy9idXJnZXJfZWF0LmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWFnZXMvY2hlc3NlQ2FrZS5qcGciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW1hZ2VzL2ZyZW5jaEZyaWVzLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWFnZXMvaG90ZG9nLmpwZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbWFnZXMvc2hha2UuanBnIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLlxyXG5cclxuUGVybWlzc2lvbiB0byB1c2UsIGNvcHksIG1vZGlmeSwgYW5kL29yIGRpc3RyaWJ1dGUgdGhpcyBzb2Z0d2FyZSBmb3IgYW55XHJcbnB1cnBvc2Ugd2l0aCBvciB3aXRob3V0IGZlZSBpcyBoZXJlYnkgZ3JhbnRlZC5cclxuXHJcblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIgQU5EIFRIRSBBVVRIT1IgRElTQ0xBSU1TIEFMTCBXQVJSQU5USUVTIFdJVEhcclxuUkVHQVJEIFRPIFRISVMgU09GVFdBUkUgSU5DTFVESU5HIEFMTCBJTVBMSUVEIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZXHJcbkFORCBGSVRORVNTLiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SIEJFIExJQUJMRSBGT1IgQU5ZIFNQRUNJQUwsIERJUkVDVCxcclxuSU5ESVJFQ1QsIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyBPUiBBTlkgREFNQUdFUyBXSEFUU09FVkVSIFJFU1VMVElORyBGUk9NXHJcbkxPU1MgT0YgVVNFLCBEQVRBIE9SIFBST0ZJVFMsIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBORUdMSUdFTkNFIE9SXHJcbk9USEVSIFRPUlRJT1VTIEFDVElPTiwgQVJJU0lORyBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBVU0UgT1JcclxuUEVSRk9STUFOQ0UgT0YgVEhJUyBTT0ZUV0FSRS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY3JlYXRlQmluZGluZyhvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgcHJpdmF0ZU1hcCkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIGdldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBwcml2YXRlTWFwLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwLCB2YWx1ZSkge1xyXG4gICAgaWYgKCFwcml2YXRlTWFwLmhhcyhyZWNlaXZlcikpIHtcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiYXR0ZW1wdGVkIHRvIHNldCBwcml2YXRlIGZpZWxkIG9uIG5vbi1pbnN0YW5jZVwiKTtcclxuICAgIH1cclxuICAgIHByaXZhdGVNYXAuc2V0KHJlY2VpdmVyLCB2YWx1ZSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBkbyBub3QgZWRpdCAuanMgZmlsZXMgZGlyZWN0bHkgLSBlZGl0IHNyYy9pbmRleC5qc3RcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXF1YWwoYSwgYikge1xuICBpZiAoYSA9PT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgJiYgYiAmJiB0eXBlb2YgYSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgYiA9PSAnb2JqZWN0Jykge1xuICAgIGlmIChhLmNvbnN0cnVjdG9yICE9PSBiLmNvbnN0cnVjdG9yKSByZXR1cm4gZmFsc2U7XG5cbiAgICB2YXIgbGVuZ3RoLCBpLCBrZXlzO1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICBsZW5ndGggPSBhLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggIT0gYi5sZW5ndGgpIHJldHVybiBmYWxzZTtcbiAgICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgICAgaWYgKCFlcXVhbChhW2ldLCBiW2ldKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG5cblxuICAgIGlmIChhLmNvbnN0cnVjdG9yID09PSBSZWdFeHApIHJldHVybiBhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiYgYS5mbGFncyA9PT0gYi5mbGFncztcbiAgICBpZiAoYS52YWx1ZU9mICE9PSBPYmplY3QucHJvdG90eXBlLnZhbHVlT2YpIHJldHVybiBhLnZhbHVlT2YoKSA9PT0gYi52YWx1ZU9mKCk7XG4gICAgaWYgKGEudG9TdHJpbmcgIT09IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcpIHJldHVybiBhLnRvU3RyaW5nKCkgPT09IGIudG9TdHJpbmcoKTtcblxuICAgIGtleXMgPSBPYmplY3Qua2V5cyhhKTtcbiAgICBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoICE9PSBPYmplY3Qua2V5cyhiKS5sZW5ndGgpIHJldHVybiBmYWxzZTtcblxuICAgIGZvciAoaSA9IGxlbmd0aDsgaS0tICE9PSAwOylcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIGtleXNbaV0pKSByZXR1cm4gZmFsc2U7XG5cbiAgICBmb3IgKGkgPSBsZW5ndGg7IGktLSAhPT0gMDspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIWVxdWFsKGFba2V5XSwgYltrZXldKSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gdHJ1ZSBpZiBib3RoIE5hTiwgZmFsc2Ugb3RoZXJ3aXNlXG4gIHJldHVybiBhIT09YSAmJiBiIT09Yjtcbn07XG4iLG51bGwsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJpbXBvcnQgQnVyZ2VyRWF0IGZyb20gXCIuLi9pbWFnZXMvYnVyZ2VyX2VhdC5qcGdcIjtcclxuaW1wb3J0IEJ1cmdlciBmcm9tIFwiLi4vaW1hZ2VzL2J1cmdlci5qcGdcIjtcclxuaW1wb3J0IEJ1cmdlcjEgZnJvbSBcIi4uL2ltYWdlcy9idXJnZXIxLnBuZ1wiO1xyXG5pbXBvcnQgQnVyZ2VyMiBmcm9tIFwiLi4vaW1hZ2VzL2J1cmdlcjIucG5nXCI7XHJcbmltcG9ydCBCdXJnZXIzIGZyb20gXCIuLi9pbWFnZXMvYnVyZ2VyMy5wbmdcIjtcclxuaW1wb3J0IEJ1cmdlcjQgZnJvbSBcIi4uL2ltYWdlcy9idXJnZXI0LnBuZ1wiO1xyXG5pbXBvcnQgQnVyZ2VyNSBmcm9tIFwiLi4vaW1hZ2VzL2J1cmdlcjUucG5nXCI7XHJcbmltcG9ydCBCdXJnZXI3IGZyb20gXCIuLi9pbWFnZXMvYnVyZ2VyNy5wbmdcIjtcclxuaW1wb3J0IEJ1cmdlcjggZnJvbSBcIi4uL2ltYWdlcy9idXJnZXI4LnBuZ1wiO1xyXG5pbXBvcnQgSG90ZG9nIGZyb20gXCIuLi9pbWFnZXMvaG90ZG9nLmpwZ1wiO1xyXG5pbXBvcnQgU2hha2UgZnJvbSBcIi4uL2ltYWdlcy9zaGFrZS5qcGdcIjtcclxuaW1wb3J0IEZyaWVzIGZyb20gXCIuLi9pbWFnZXMvZnJlbmNoRnJpZXMuanBnXCI7XHJcbmltcG9ydCBDaGVzc2VjYWtlIGZyb20gXCIuLi9pbWFnZXMvY2hlc3NlQ2FrZS5qcGdcIjtcclxuXHJcbmNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIlNpbmdsZSBCeXBhc3MgQnVyZ2VyXCIsXHJcbiAgICBwcmljZTogOS43LFxyXG4gICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50czogXCI1IGJhY29uIHNsaWNlc1wiLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50c1ByaWNlOiAwLjkyLFxyXG4gICAgaW1hZ2U6IEJ1cmdlcixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiRG91YmxlIEJ5cGFzcyBCdXJnZXJcIixcclxuICAgIHByaWNlOiAxMS41NSxcclxuICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgIGV4dHJhSW5ncmVkaWVudHM6IFwiMTAgYmFjb24gc2xpY2VzXCIsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzUHJpY2U6IDEuODUsXHJcbiAgICBpbWFnZTogQnVyZ2VyMSxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiVHJpcGxlIEJ5cGFzcyBCdXJnZXJcIixcclxuICAgIHByaWNlOiAxMy42MyxcclxuICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgIGV4dHJhSW5ncmVkaWVudHM6IFwiMTUgYmFjb24gc2xpY2VzXCIsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzUHJpY2U6IDIuNzUsXHJcbiAgICBpbWFnZTogQnVyZ2VyMixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiUXVhZHJ1cGxlIEJ5cGFzcyBCdXJnZXJcIixcclxuICAgIHByaWNlOiAxNS4wMSxcclxuICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgIGV4dHJhSW5ncmVkaWVudHM6IFwiMjAgYmFjb24gc2xpY2VzXCIsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzUHJpY2U6IDMuNyxcclxuICAgIGltYWdlOiBCdXJnZXIzLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJRdWludHVwbGUgQnlwYXNzIEJ1cmdlclwiLFxyXG4gICAgcHJpY2U6IDE4LjAxLFxyXG4gICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50czogXCIyNSBiYWNvbiBzbGljZXNcIixcclxuICAgIGV4dHJhSW5ncmVkaWVudHNQcmljZTogNC42MixcclxuICAgIGltYWdlOiBCdXJnZXI0LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJTZXh0dXBsZSBCeXBhc3MgQnVyZ2VyXCIsXHJcbiAgICBwcmljZTogMjAuMDksXHJcbiAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzOiBcIjMwIGJhY29uIHNsaWNlc1wiLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50c1ByaWNlOiA1LjY0LFxyXG4gICAgaW1hZ2U6IEJ1cmdlcjUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIlNlcHR1cGxlIEJ5cGFzcyBCdXJnZXJcIixcclxuICAgIHByaWNlOiAyMS4wMixcclxuICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgIGV4dHJhSW5ncmVkaWVudHM6IFwiMzUgYmFjb24gc2xpY2VzXCIsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzUHJpY2U6IDYuNDcsXHJcbiAgICBpbWFnZTogQnVyZ2VyNyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiT2N0dXBsZSBCeXBhc3MgQnVyZ2VyXCIsXHJcbiAgICBwcmljZTogMjQuMDIsXHJcbiAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzOiBcIjQwIGJhY29uIHNsaWNlc1wiLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50c1ByaWNlOiA3LjM5LFxyXG4gICAgaW1hZ2U6IEJ1cmdlcjgsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIjEvMiBQb3VuZCBDb3JvbWFyeSBEb2dcIixcclxuICAgIHByaWNlOiA5LjQ3LFxyXG4gICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50czogXCIxMCBiYWNvbiBzbGljZXNcIixcclxuICAgIGV4dHJhSW5ncmVkaWVudHNQcmljZTogMS44NSxcclxuICAgIGltYWdlOiBIb3Rkb2csXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkN1cnZ5bGluZXIgRnJpZXNcIixcclxuICAgIHByaWNlOiA5LjY1LFxyXG4gICAgZGlzY291bnQ6IGZhbHNlLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50czogXCJFeHRyYSBCdXR0ZXIgU291Y2VcIixcclxuICAgIGV4dHJhSW5ncmVkaWVudHNQcmljZTogMi45OCxcclxuICAgIGltYWdlOiBGcmllcyxcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQnV0dGVyRmF0IFNoYWtlXCIsXHJcbiAgICBwcmljZTogNC42MixcclxuICAgIGRpc2NvdW50OiBmYWxzZSxcclxuICAgIGV4dHJhSW5ncmVkaWVudHM6IFwiRXh0cmEgYnV0dGVyIGZhdFwiLFxyXG4gICAgZXh0cmFJbmdyZWRpZW50c1ByaWNlOiA0LjIsXHJcbiAgICBpbWFnZTogU2hha2UsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIjEvMiBGYXR0eSBDaGVzc2VjYWtlIHdpdGggd2hpdGUgY2hvY29sYXRlYW5kIG9yZ2FuaWMgYnV0dGVyXCIsXHJcbiAgICBwcmljZTogMTYuMjUsXHJcbiAgICBkaXNjb3VudDogZmFsc2UsXHJcbiAgICBleHRyYUluZ3JlZGllbnRzOiBcIkhlYWx0aHkgYmVycmllcyBidXJpZWQgd2l0aCBjaG9jb2xhdGVcIixcclxuICAgIGV4dHJhSW5ncmVkaWVudHNQcmljZTogNS43LFxyXG4gICAgaW1hZ2U6IENoZXNzZWNha2UsXHJcbiAgfSxcclxuXTtcclxuLy8xMVxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXJOYXZCYXIoKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICBjb25zdCBnZW5lcmFsTmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCBsZWZ0TmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm5hdlwiKTtcclxuICBjb25zdCBsZWZ0TmF2VWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XHJcblxyXG4gIGZvciAobGV0IGxpc3QgPSAxOyBsaXN0IDw9IDM7IGxpc3QrKykge1xyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hdkxpbmtcIik7XHJcbiAgICBpZiAobGlzdCA9PT0gMSkge1xyXG4gICAgICBhLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgYS5hcHBlbmQoXCJIb21lXCIpO1xyXG4gICAgfSBlbHNlIGlmIChsaXN0ID09PSAyKSB7XHJcbiAgICAgIGEuYXBwZW5kKFwiTWVudVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGEuYXBwZW5kKFwiQ29udGFjdCBVc1wiKTtcclxuICAgIH1cclxuXHJcbiAgICBsaS5hcHBlbmRDaGlsZChhKTtcclxuICAgIGxlZnROYXZVbC5hcHBlbmQobGkpO1xyXG4gIH1cclxuICBsZWZ0TmF2LmFwcGVuZENoaWxkKGxlZnROYXZVbCk7XHJcbiAgZ2VuZXJhbE5hdi5hcHBlbmRDaGlsZChsZWZ0TmF2KTtcclxuXHJcbiAgY29uc3QgbmF2YmFyTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICBuYXZiYXJMb2dvLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibG9nb1wiKTtcclxuICBuYXZiYXJMb2dvLmFwcGVuZChcIkhlYXJ0IEF0dGFjayBHcmlsbFwiKTtcclxuICBnZW5lcmFsTmF2LmFwcGVuZENoaWxkKG5hdmJhckxvZ28pO1xyXG5cclxuICBjb25zdCByaWdodE5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJuYXZcIik7XHJcbiAgcmlnaHROYXZiYXIuaW5uZXJIVE1MID1cclxuICAgICc8dWw+PGxpPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJuYXZMaW5rXCI+TmVhcmVzdCBIb3NwaXRhbDwvYT48L2xpPjwvdWw+JztcclxuICBnZW5lcmFsTmF2LmFwcGVuZENoaWxkKHJpZ2h0TmF2YmFyKTtcclxuXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGdlbmVyYWxOYXYpO1xyXG5cclxuICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIoKSB7XHJcbiAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcclxuICBmb290ZXIuaW5uZXJIVE1MID0gXCI8cD5UZW1wdGluZyBmYXRlLCBvbmUgYnVyZ2VyIGF0IGEgdGltZS48L3A+XCI7XHJcbiAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG9tZVBhZ2UoKSB7XHJcbiAgLy9NYWluIEJhbm5lclxyXG4gIGNvbnN0IG1haW5CYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBtYWluQmFubmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkJhbm5lclwiKTtcclxuICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIGltZy5zcmMgPSBCdXJnZXJFYXQ7XHJcbiAgbWFpbkJhbm5lci5hcHBlbmQoaW1nKTtcclxuICBjb25zdCBiYW5uZXJCbG9ja3F1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJsb2NrcXVvdGVcIik7XHJcbiAgYmFubmVyQmxvY2txdW90ZS5hcHBlbmQoXCJGaWdodGluZyBhbm9yZXhpYSBzaW5jZSAyMDA1XCIpO1xyXG4gIG1haW5CYW5uZXIuYXBwZW5kQ2hpbGQoYmFubmVyQmxvY2txdW90ZSk7XHJcblxyXG4gIC8vRGlzY2xhaW1lciBTZWN0aW9uXHJcbiAgY29uc3QgZGlzY2xhaW1lclNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxuICBkaXNjbGFpbWVyU2VjdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpc2NsYWltZXJcIik7XHJcbiAgY29uc3QgZGlzY2xhaW1lclRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xyXG4gIGRpc2NsYWltZXJUaXRsZS5hcHBlbmQoXCJEaXNjbGFpbWVyXCIpO1xyXG4gIGRpc2NsYWltZXJTZWN0aW9uLmFwcGVuZChkaXNjbGFpbWVyVGl0bGUpO1xyXG5cclxuICBjb25zdCBkaXNjbGFpbWVyQmxvY2txdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJibG9ja3F1b3RlXCIpO1xyXG4gIGRpc2NsYWltZXJCbG9ja3F1b3RlLmFwcGVuZChcclxuICAgIFwiT3VyIGRpc2hlcyBkZWZ5IHRoZSBsYXdzIG9mIHBvcnRpb24gY29udHJvbCwgY2hvbGVzdGVyb2wgc2FuaXR5LCBhbmQgY29tbW9uIHNlbnNlLlwiXHJcbiAgKTtcclxuICBkaXNjbGFpbWVyU2VjdGlvbi5hcHBlbmQoZGlzY2xhaW1lckJsb2NrcXVvdGUpO1xyXG5cclxuICAvL0Rpc2NsYWltZXIgRm9ybVxyXG4gIGNvbnN0IGRpc2NsYWltZXJGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XHJcbiAgZGlzY2xhaW1lckZvcm0uc2V0QXR0cmlidXRlKFwiYWN0aW9uXCIsIFwiI1wiKTtcclxuICBkaXNjbGFpbWVyRm9ybS5zZXRBdHRyaWJ1dGUoXCJtZXRob2RcIiwgXCJnZXRcIik7XHJcblxyXG4gIGNvbnN0IGZvcm1TZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XHJcblxyXG4gIGNvbnN0IGlucHV0Q2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcbiAgaW5wdXRDaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGlzY2xhaW1lclwiKTtcclxuICBpbnB1dENoZWNrYm94LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiY2hlY2tlZFwiKTtcclxuICBpbnB1dENoZWNrYm94LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGlzY2xhaW1lclwiKTtcclxuICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChpbnB1dENoZWNrYm94KTtcclxuXHJcbiAgY29uc3QgbGFiZWxGb3JDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICBsYWJlbEZvckNoZWNrYm94LnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRpc2NsYWltZXJcIik7XHJcbiAgbGFiZWxGb3JDaGVja2JveC5pbm5lckhUTUwgPVxyXG4gICAgJ0kgaGF2ZSByZWFkIHRoZSA8YSBocmVmPVwiI1wiPmRpc2NsYWltZXI8L2E+IGFuZCBhZ3JlZWQgdG8gdGhlIDxhIGhyZWY9XCIjXCI+dGVybXMgb2Ygc2VydmljZTwvYT4nO1xyXG5cclxuICBmb3JtU2VjdGlvbi5hcHBlbmRDaGlsZChsYWJlbEZvckNoZWNrYm94KTtcclxuICBkaXNjbGFpbWVyRm9ybS5hcHBlbmRDaGlsZChmb3JtU2VjdGlvbik7XHJcblxyXG4gIGNvbnN0IGlucHV0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGlucHV0U3VibWl0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XHJcbiAgaW5wdXRTdWJtaXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJJIEFjY2VwdFwiKTtcclxuICBkaXNjbGFpbWVyRm9ybS5hcHBlbmRDaGlsZChpbnB1dFN1Ym1pdCk7XHJcblxyXG4gIGRpc2NsYWltZXJTZWN0aW9uLmFwcGVuZENoaWxkKGRpc2NsYWltZXJGb3JtKTtcclxuXHJcbiAgcmV0dXJuIFttYWluQmFubmVyLCBkaXNjbGFpbWVyU2VjdGlvbl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVQYWdlRGlzaGVzKCkge1xyXG4gIGNvbnN0IGRpc2hlcyA9IFtdO1xyXG4gIGZvciAoY29uc3QgaXRlbSBvZiBtZW51SXRlbXMpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIGRpc2NvdW50LFxyXG4gICAgICBleHRyYUluZ3JlZGllbnRzLFxyXG4gICAgICBleHRyYUluZ3JlZGllbnRzUHJpY2UsXHJcbiAgICAgIGltYWdlLFxyXG4gICAgfSA9IGl0ZW07XHJcblxyXG4gICAgY29uc3QgZGlzaERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBkaXNoRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlzaFwiKTtcclxuXHJcbiAgICBjb25zdCBkaXNoSW1hZ2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIGltZy5zcmMgPSBpbWFnZTtcclxuICAgIGRpc2hJbWFnZURpdi5hcHBlbmQoaW1nKTtcclxuICAgIGRpc2hJbWFnZURpdi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImRpc2gtaW1hZ2VcIik7XHJcbiAgICBkaXNoRGl2LmFwcGVuZChkaXNoSW1hZ2VEaXYpO1xyXG5cclxuICAgIGNvbnN0IGRpc2hEZXRhaWxzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRpc2hEZXRhaWxzRGl2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGlzaC1kZXRhaWxzXCIpO1xyXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBoMi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICBkaXNoRGV0YWlsc0Rpdi5hcHBlbmQoaDIpO1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgICAgaWYgKGkgPT09IDEpIHAudGV4dENvbnRlbnQgPSBgUHJpY2UgOiAkJHtwcmljZX1gO1xyXG4gICAgICBpZiAoaSA9PT0gMikgcC50ZXh0Q29udGVudCA9IGBFeHRyYSBJbmdyZWRpZW50cyA6ICR7ZXh0cmFJbmdyZWRpZW50c31gO1xyXG4gICAgICBpZiAoaSA9PT0gMylcclxuICAgICAgICBwLnRleHRDb250ZW50ID0gYEV4dHJhIEluZ3JlZGllbnRzIFByaWNlIDogJCR7ZXh0cmFJbmdyZWRpZW50c1ByaWNlfWA7XHJcbiAgICAgIGRpc2hEZXRhaWxzRGl2LmFwcGVuZChwKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNoRGV0YWlsc0Rpdi5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZFwiKTtcclxuICAgIGRpc2hEaXYuYXBwZW5kKGRpc2hEZXRhaWxzRGl2KTtcclxuICAgIGRpc2hlcy5wdXNoKGRpc2hEaXYpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRpc2hlcztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmVhcmVzdEhvc3BpdGFsUGFnZSgpIHtcclxuICBjb25zdCBtYXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG1hcERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcFwiKTtcclxuICByZXR1cm4gbWFwRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0VXNQYWdlKCkge1xyXG4gIGNvbnN0IGRldGFpbHMgPSB7XHJcbiAgICBzdHJlZXQ6IFwiNDUwIEZSRU1PTlQgU1RSRUVUIGluIERPV05UT1dOIExBUyBWRUdBU1wiLFxyXG4gICAgcGhvbmU6IFwiNzAyLTkwMS0xODM1XCIsXHJcbiAgfTtcclxuICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFkZHJlc3NcIik7XHJcblxyXG4gIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LnZhbHVlcyhkZXRhaWxzKSkge1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcC50ZXh0Q29udGVudCA9IHZhbHVlO1xyXG4gICAgYWRkcmVzcy5hcHBlbmQocCk7XHJcbiAgfVxyXG5cclxuICBhZGRyZXNzLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKSk7XHJcblxyXG4gIHJldHVybiBhZGRyZXNzO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIGNyZWF0ZUhvbWVQYWdlLFxyXG4gIGNyZWF0ZUhlYWRlck5hdkJhcixcclxuICBjcmVhdGVGb290ZXIsXHJcbiAgY3JlYXRlTWVudVBhZ2VEaXNoZXMsXHJcbiAgY3JlYXRlTmVhcmVzdEhvc3BpdGFsUGFnZSxcclxuICBjcmVhdGVDb250YWN0VXNQYWdlLFxyXG59O1xyXG4iLCIvL1JlZ2lzdGVyIGV2ZW50cyBhbmQgY2FsbCByZW5kZXJGdW5jdGlvbnMgKGNhbGwgRE9NZWxlbWVudCBjcmVhdG9ycyBhbmQgYXBwZW5kIGl0IHRvIG1haW4pXHJcbmltcG9ydCB7ICQkIH0gZnJvbSBcIi4vc2VsZWN0b3JzXCI7XHJcblxyXG5pbXBvcnQge1xyXG4gIHJlbmRlckNvbnRhY3RVc1BhZ2UsXHJcbiAgcmVuZGVySG9tZVBhZ2UsXHJcbiAgcmVuZGVyTWVudVBhZ2UsXHJcbiAgcmVuZGVyTmVhcmVzdEhvc3BpdGFsUGFnZSxcclxufSBmcm9tIFwiLi9ET01SZW5kZXJlclwiO1xyXG5cclxuY29uc3QgY2FsbFJlbmRlckZ1bmN0aW9ucyA9IHtcclxuICBob21lOiByZW5kZXJIb21lUGFnZSxcclxuICBtZW51OiByZW5kZXJNZW51UGFnZSxcclxuICBcImNvbnRhY3QgdXNcIjogcmVuZGVyQ29udGFjdFVzUGFnZSxcclxuICBcIm5lYXJlc3QgaG9zcGl0YWxcIjogcmVuZGVyTmVhcmVzdEhvc3BpdGFsUGFnZSxcclxufTtcclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyTmF2TGlua0NsaWNrZWQoKSB7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBbLi4uJCQoXCIjY29udGVudCBhLm5hdkxpbmtcIildO1xyXG4gIC8vcmVtb3ZlIHRoZSBzZWxlY3RlZCBjbGFzc2xpc3RzIGZyb20gdGhlIG9uZSB0aGF0IGhhdmUgdGhlbSBhbmQgYWRkIHRvIHRoZSBvbmUgdGhhdCBpcyBiZWluZyBjbGlja2VkXHJcbiAgbmF2TGlua3NcclxuICAgIC5maWx0ZXIoKGxpbmspID0+IGxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2VsZWN0ZWRcIikpXHJcbiAgICAuZm9yRWFjaCgobGluaykgPT4gbGluay5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRcIikpO1xyXG5cclxuICBjb25zdCBjbGlrZWRMaW5rID0gdGhpcztcclxuXHJcbiAgY2xpa2VkTGluay5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcblxyXG4gIGNhbGxSZW5kZXJGdW5jdGlvbnNbY2xpa2VkTGluay50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpXSgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNoZXNIb3ZlcmVkQ2xhc3NUb2dnbGVyKGUpIHtcclxuICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XHJcblxyXG4gIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImhvdmVyZWRcIikpIHtcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhvdmVyZWRcIik7XHJcblxyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzaC1pbWFnZVwiKSkge1xyXG4gICAgICBjb25zdCBuZXh0RWxlbWVudFNpYmxpbmcgPSBlbGVtZW50Lm5leHRFbGVtZW50U2libGluZztcclxuICAgICAgbmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2gtZGV0YWlsc1wiKSkge1xyXG4gICAgICBjb25zdCBwcmV2aW91c0VsZW1lbnRTaWJsaW5nID0gZWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xyXG4gICAgICBwcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgcmVnaXN0ZXJOYXZMaW5rQ2xpY2tlZCwgZGlzaGVzSG92ZXJlZENsYXNzVG9nZ2xlciB9O1xyXG4iLCJpbXBvcnQgeyAkLCAkJCB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xyXG5pbXBvcnQgeyByZWdpc3Rlck5hdkxpbmtDbGlja2VkIH0gZnJvbSBcIi4vRE9NRXZlbnRzXCI7XHJcbmltcG9ydCB7IHNjcm9sbGVkQ2xhc3NIZWFkZXIgfSBmcm9tIFwiLi9hZGRIZWFkZXJCYWNrZ3JvdW5kXCI7XHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlSGVhZGVyTmF2QmFyLFxyXG4gIGNyZWF0ZUZvb3RlcixcclxuICBjcmVhdGVIb21lUGFnZSxcclxuICBjcmVhdGVNZW51UGFnZURpc2hlcyxcclxuICBjcmVhdGVOZWFyZXN0SG9zcGl0YWxQYWdlLFxyXG4gIGNyZWF0ZUNvbnRhY3RVc1BhZ2UsXHJcbn0gZnJvbSBcIi4vRE9NQ3JlYXRvclwiO1xyXG5pbXBvcnQgeyBkaXNoZXNIb3ZlcmVkQ2xhc3NUb2dnbGVyIH0gZnJvbSBcIi4vRE9NRXZlbnRzXCI7XHJcbmltcG9ydCB7IHJlbmRlck1hcCB9IGZyb20gXCIuL0dvb2dsZU1hcHNcIjtcclxuXHJcbmNvbnN0IGNvbnRlbnREaXYgPSAkKFwiI2NvbnRlbnRcIik7XHJcblxyXG5mdW5jdGlvbiBlbXB0eU1haW5Db250YWluZXIoKSB7XHJcbiAgY29uc3QgbWFpblRhZyA9ICQoXCIjY29udGVudCBtYWluXCIpO1xyXG4gIG1haW5UYWcucmVwbGFjZUNoaWxkcmVuKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZEhlYWRlck5hdkJhcigpIHtcclxuICBjb250ZW50RGl2LmFwcGVuZChjcmVhdGVIZWFkZXJOYXZCYXIoKSk7XHJcbiAgY29uc3QgbmF2TGlua3MgPSBbLi4uJCQoXCJoZWFkZXIgYVwiKV07XHJcbiAgbmF2TGlua3MuZm9yRWFjaCgobGluaykgPT4ge1xyXG4gICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVnaXN0ZXJOYXZMaW5rQ2xpY2tlZCk7XHJcbiAgfSk7XHJcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsZWRDbGFzc0hlYWRlcik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZE1haW5UYWcoKSB7XHJcbiAgY29udGVudERpdi5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xyXG4gIGVtcHR5TWFpbkNvbnRhaW5lcigpO1xyXG5cclxuICAvL3JlbmRlciB0aGUgaG9tZSBwYWdlIChkZWZhdWx0KSBpbiBtYWluXHJcblxyXG4gIGlmIChtYWluVGFnLmNsYXNzTGlzdC5jb250YWlucyhcIm1lbnVcIikpIHtcclxuICAgIG1haW5UYWcuY2xhc3NMaXN0LnJlbW92ZShcIm1lbnVcIik7XHJcbiAgfVxyXG4gIG1haW5UYWcuYXBwZW5kKC4uLmNyZWF0ZUhvbWVQYWdlKCkpO1xyXG5cclxuICAvL2FkZCBmb290ZXIgaW4gbWFpblxyXG4gIG1haW5UYWcuYXBwZW5kKGNyZWF0ZUZvb3RlcigpKTtcclxuICBjb250ZW50RGl2LmFwcGVuZChtYWluVGFnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyTWVudVBhZ2UoKSB7XHJcbiAgZW1wdHlNYWluQ29udGFpbmVyKCk7XHJcbiAgbWFpblRhZy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVcIik7XHJcbiAgbWFpblRhZy5hcHBlbmQoLi4uY3JlYXRlTWVudVBhZ2VEaXNoZXMoKSk7XHJcbiAgbWFpblRhZy5hcHBlbmQoY3JlYXRlRm9vdGVyKCkpO1xyXG5cclxuICAvL2xpc3RlbiB0byBldmVudHNcclxuICBbLi4uJCQoXCJkaXYuZGlzaCBkaXZcIildLmZvckVhY2goKGRpc2gpID0+IHtcclxuICAgIGRpc2guYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoZSkgPT4ge1xyXG4gICAgICBkaXNoZXNIb3ZlcmVkQ2xhc3NUb2dnbGVyKGUpO1xyXG4gICAgfSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlck5lYXJlc3RIb3NwaXRhbFBhZ2UoKSB7XHJcbiAgZW1wdHlNYWluQ29udGFpbmVyKCk7XHJcbiAgaWYgKG1haW5UYWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVudVwiKSkge1xyXG4gICAgbWFpblRhZy5jbGFzc0xpc3QucmVtb3ZlKFwibWVudVwiKTtcclxuICB9XHJcbiAgaWYgKG1haW5UYWcuY2xhc3NMaXN0LmNvbnRhaW5zKFwiY29udGFjdFVzXCIpKSB7XHJcbiAgICBtYWluVGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xyXG4gIH1cclxuICBtYWluVGFnLmFwcGVuZChjcmVhdGVOZWFyZXN0SG9zcGl0YWxQYWdlKCkpO1xyXG4gIG1haW5UYWcuYXBwZW5kKGNyZWF0ZUZvb3RlcigpKTtcclxuICAvL3JlbmRlciBtYXBcclxuICByZW5kZXJNYXAoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyQ29udGFjdFVzUGFnZSgpIHtcclxuICBlbXB0eU1haW5Db250YWluZXIoKTtcclxuICBpZiAobWFpblRhZy5jbGFzc0xpc3QuY29udGFpbnMoXCJtZW51XCIpKSB7XHJcbiAgICBtYWluVGFnLmNsYXNzTGlzdC5yZW1vdmUoXCJtZW51XCIpO1xyXG4gIH1cclxuICBtYWluVGFnLmNsYXNzTGlzdC5hZGQoXCJjb250YWN0VXNcIik7XHJcbiAgbWFpblRhZy5hcHBlbmQoY3JlYXRlQ29udGFjdFVzUGFnZSgpKTtcclxuICBtYWluVGFnLmFwcGVuZChjcmVhdGVGb290ZXIoKSk7XHJcbn1cclxuZXhwb3J0IHtcclxuICBhcHBlbmRIZWFkZXJOYXZCYXIsXHJcbiAgYXBwZW5kTWFpblRhZyxcclxuICByZW5kZXJIb21lUGFnZSxcclxuICByZW5kZXJNZW51UGFnZSxcclxuICByZW5kZXJOZWFyZXN0SG9zcGl0YWxQYWdlLFxyXG4gIHJlbmRlckNvbnRhY3RVc1BhZ2UsXHJcbn07XHJcbiIsImltcG9ydCB7IExvYWRlciB9IGZyb20gXCJAZ29vZ2xlbWFwcy9qcy1hcGktbG9hZGVyXCI7XHJcblxyXG5jb25zdCBsb2FkZXIgPSBuZXcgTG9hZGVyKHtcclxuICBhcGlLZXk6IFwiQUl6YVN5QkY0Vy1MN24xTGRLbVduSWthb25mRk1RZFVaMUJPQmprXCIsIC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEdvb2dsZSBNYXBzIEFQSSBrZXlcclxuICB2ZXJzaW9uOiBcIndlZWtseVwiLCAvLyBSZXBsYWNlIHdpdGggdGhlIGRlc2lyZWQgdmVyc2lvbiBvZiB0aGUgR29vZ2xlIE1hcHMgQVBJXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICBjb25zdCBsb2NhdGlvbiA9IHsgbGF0OiAzNi4yODU5MzA4LCBsbmc6IC0xMTUuMDkyNzYyIH07XHJcbiAgY29uc3QgbWFwT3B0aW9ucyA9IHtcclxuICAgIGNlbnRlcjogbG9jYXRpb24sXHJcbiAgICB6b29tOiAxNSxcclxuICAgIG1hcFR5cGVJZDogXCJzYXRlbGxpdGVcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFwXCIpLCBtYXBPcHRpb25zKTtcclxuXHJcbiAgY29uc3QgbWFya2VyT3B0aW9ucyA9IHtcclxuICAgIHBvc2l0aW9uOiBsb2NhdGlvbixcclxuICAgIG1hcDogbWFwLFxyXG4gICAgdGl0bGU6IFwiTm9ydGggTGFzIFZlZ2FzIFZBIE1lZGljYWwgQ2VudGVyXCIsXHJcbiAgfTtcclxuICBjb25zdCBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKG1hcmtlck9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTWFwKCkge1xyXG4gIGxvYWRlci5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICBpbml0TWFwKCk7XHJcbiAgfSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgJCB9IGZyb20gXCIuL3NlbGVjdG9yc1wiO1xyXG5leHBvcnQgZnVuY3Rpb24gc2Nyb2xsZWRDbGFzc0hlYWRlcigpIHtcclxuICBjb25zdCBoZWFkZXIgPSAkKFwiZGl2I2NvbnRlbnQgaGVhZGVyXCIpO1xyXG4gIGNvbnN0IGhlYWRlckhlaWdodCA9IGhlYWRlci5vZmZzZXRIZWlnaHQ7XHJcbiAgLy93aGVuIHRoZSBkaXN0YW5jZSBmcm9tIHNjcm9sbCBvZiB0aGUgeSBheGlzIGlzIGJpZ2dlciB0aGFuIHRoZSBoZWFkZXIgbmF2YmFyIGhlaWdodCBjaGFuZ2UgaXRzIGNvbG9yXHJcbiAgaWYgKHdpbmRvdy5zY3JvbGxZID4gaGVhZGVySGVpZ2h0KSBoZWFkZXIuY2xhc3NMaXN0LmFkZChcInNjcm9sbGVkXCIpO1xyXG4gIGVsc2UgaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzY3JvbGxlZFwiKTtcclxufVxyXG4iLCJleHBvcnQgY29uc3QgJCA9IChzZWxlY3RvcikgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbmV4cG9ydCBjb25zdCAkJCA9IChhbGxTZWxlY3RvcikgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbGxTZWxlY3Rvcik7XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtZmFtaWx5OiBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sXHJcbiAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBcIk9wZW4gU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIC0tcXVvdGVGb250OiBcIkthdXNoYW4gU2NyaXB0XCIsIGN1cnNpdmU7XHJcbiAgLS1iYWNrZ3JvdW5kQ29sb3I6ICNmYWZhZmE7XHJcbiAgLS1pbWdCb3JkZXJDb2xvcjogI2U1ZTdlODtcclxuICAtLWJhY2tncm91bmREaXNjbGFpbWVyOiBibGFjaztcclxufVxyXG5cclxuYm9keSB7XHJcbiAgcGFkZGluZzogMC41ZW0gMmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwZW07XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE7XHJcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxufVxyXG5cclxuI2NvbnRlbnQgaGVhZGVyIHtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMHB4O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBlYXNlIDEwMG1zO1xyXG59XHJcblxyXG4jY29udGVudCBoZWFkZXIgPiBuYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4jY29udGVudCB1bCB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4jY29udGVudCBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiNjb250ZW50IGEubmF2TGluay5zZWxlY3RlZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuI2NvbnRlbnQgdWwgYSB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4jY29udGVudCBoZWFkZXIuc2Nyb2xsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0MywgMC43NSk7XHJcbn1cclxuXHJcbiNjb250ZW50IGhlYWRlci5zY3JvbGxlZCAqIHtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxufVxyXG5cclxuI2NvbnRlbnQgaGVhZGVyID4gbmF2IG5hdjpmaXJzdC1vZi10eXBlIHtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4jY29udGVudCBoZWFkZXIgPiBuYXYgbmF2Omxhc3Qtb2YtdHlwZSB7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG5cclxuI2NvbnRlbnQgaGVhZGVyIGgxI2xvZ28ge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4vKkhvbWUgUGFnZSovXHJcbm1haW4gc2VjdGlvbiNtYWluQmFubmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMwZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWltZ0JvcmRlckNvbG9yKTtcclxufVxyXG5cclxubWFpbiBzZWN0aW9uI21haW5CYW5uZXIgaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbm1haW4gc2VjdGlvbiNtYWluQmFubmVyIGJsb2NrcXVvdGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xyXG4gIGJvdHRvbTogMC41ZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LWZhbWlseTogdmFyKC0tcXVvdGVGb250KTtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbn1cclxuXHJcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIHtcclxuICBtYXJnaW4tdG9wOiAyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZERpc2NsYWltZXIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZENvbG9yKTtcclxuICBwYWRkaW5nOiAyZW0gMC4yZW07XHJcbn1cclxuXHJcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIGEge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIGgxIHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG59XHJcblxyXG5tYWluIHNlY3Rpb24jZGlzY2xhaW1lciBmb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICByb3ctZ2FwOiAxLjVlbTtcclxufVxyXG5cclxubWFpbiBzZWN0aW9uI2Rpc2NsYWltZXIgZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBwYWRkaW5nOiAwLjVlbSAyZW07XHJcbn1cclxuXHJcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIGZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi8qRW5kIG9mIEhvbWUgUGFnZSovXHJcblxyXG4vKk1lbnUgUGFnZSovXHJcbm1haW4ubWVudSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XHJcbiAgcm93LWdhcDogMmVtO1xyXG59XHJcblxyXG5tYWluLm1lbnUgLmRpc2gge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICByb3ctZ2FwOiAwLjVlbTtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLmRpc2gtaW1hZ2Uge1xyXG4gIHdpZHRoOiAzMDBweDsgLyogQWRqdXN0IHRoZSBzaXplIGFzIG5lZWRlZCAqL1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG59XHJcbi5kaXNoLWltYWdlIGltZyB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uZGlzaC1kZXRhaWxzIGgyIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5kaXNoLWRldGFpbHMgcCB7XHJcbiAgbWFyZ2luOiA1cHggMDtcclxuICBmb250LXNpemU6IDAuOHJlbTtcclxufVxyXG5cclxuLmRpc2gtaW1hZ2UsXHJcbi5kaXNoLWRldGFpbHMge1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgZWFzZSAyMG1zLCBmaWx0ZXIgZWFzZSAyMG1zLCBzY2FsZSBlYXNlIDIwbXM7XHJcbn1cclxuXHJcbi5kaXNoLWltYWdlLmhvdmVyZWQsXHJcbi5kaXNoLWRldGFpbHMuaG92ZXJlZCB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZpbHRlcjogYmx1cigwLjJlbSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG59XHJcblxyXG4vKk5lYXJlc3QgSG9zcGl0YWwgTWFpbiBQYWdlIChnb29nbGUgbWFwcyBhcGkpKi9cclxuI21hcCB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxufVxyXG5cclxuLypFbmQgb2YgTmVhcmVzdCBIb3NwaXRhbCBNYWluIFBhZ2UqL1xyXG5cclxuLypDb250YWN0IFVzIFBhZ2UqL1xyXG5tYWluLmNvbnRhY3RVcyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDgwJSAyMCU7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG5tYWluLmNvbnRhY3RVcyBzcGFuIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDAuNWVtO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgdG9wOiAtMWVtO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pbWdCb3JkZXJDb2xvcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG59XHJcblxyXG5tYWluLmNvbnRhY3RVcyBhZGRyZXNzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1haW4uY29udGFjdFVzIGFkZHJlc3MgcCB7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi8qRW5kIG9mIENvbnRhY3QgVXMgUGFnZSovXHJcblxyXG4vKkVuZCBvZiBNZW51IFBhZ2UqL1xyXG4jY29udGVudCBmb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XHJcbiAgcGFkZGluZzogMC43NWVtIDAuNWVtO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEI7d0VBQ3NFO0VBQ3RFLGVBQWU7RUFDZixzQ0FBc0M7RUFDdEMsMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6Qiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1Qsd0NBQXdDO0VBQ3hDLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0JBQXdCO0VBQ3hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixVQUFVO0VBQ1YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtBQUNaOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQSxZQUFZO0FBQ1o7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3Qiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLDZDQUE2QztFQUM3QyxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBLG1CQUFtQjs7QUFFbkIsWUFBWTtBQUNaO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxtQkFBbUI7RUFDbkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFDQUFxQztFQUNyQyx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLFVBQVU7RUFDVixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZLEVBQUUsOEJBQThCO0VBQzVDLGFBQWE7RUFDYix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLGdFQUFnRTtBQUNsRTs7QUFFQTs7RUFFRSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHFCQUFxQjtBQUN2Qjs7QUFFQSwrQ0FBK0M7QUFDL0M7RUFDRSxhQUFhO0FBQ2Y7O0FBRUEsb0NBQW9DOztBQUVwQyxrQkFBa0I7QUFDbEI7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixVQUFVO0VBQ1YsU0FBUztFQUNULFNBQVM7RUFDVCwwQkFBMEI7RUFDMUIsdUNBQXVDO0VBQ3ZDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUEseUJBQXlCOztBQUV6QixtQkFBbUI7QUFDbkI7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHFCQUFxQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBmb250LWZhbWlseTogc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90byxcXHJcXG4gICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgXFxcIk9wZW4gU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAtLXF1b3RlRm9udDogXFxcIkthdXNoYW4gU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXHJcXG4gIC0tYmFja2dyb3VuZENvbG9yOiAjZmFmYWZhO1xcclxcbiAgLS1pbWdCb3JkZXJDb2xvcjogI2U1ZTdlODtcXHJcXG4gIC0tYmFja2dyb3VuZERpc2NsYWltZXI6IGJsYWNrO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIHBhZGRpbmc6IDAuNWVtIDJlbTtcXHJcXG4gIHBhZGRpbmctdG9wOiAwZW07XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTtcXHJcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlciB7XFxyXFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcclxcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xcclxcbiAgcG9zaXRpb246IHN0aWNreTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgZWFzZSAxMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyID4gbmF2IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IHVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCBhLm5hdkxpbmsuc2VsZWN0ZWQge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB1bCBhIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyLnNjcm9sbGVkIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDIsIDQzLCA0MywgMC43NSk7XFxyXFxufVxcclxcblxcclxcbiNjb250ZW50IGhlYWRlci5zY3JvbGxlZCAqIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCBoZWFkZXIgPiBuYXYgbmF2OmZpcnN0LW9mLXR5cGUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyID4gbmF2IG5hdjpsYXN0LW9mLXR5cGUge1xcclxcbiAgd2lkdGg6IDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuI2NvbnRlbnQgaGVhZGVyIGgxI2xvZ28ge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi8qSG9tZSBQYWdlKi9cXHJcXG5tYWluIHNlY3Rpb24jbWFpbkJhbm5lciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMzBlbTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWltZ0JvcmRlckNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uI21haW5CYW5uZXIgaW1nIHtcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbiNtYWluQmFubmVyIGJsb2NrcXVvdGUge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgcmlnaHQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xcclxcbiAgYm90dG9tOiAwLjVlbTtcXHJcXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gIGZvbnQtZmFtaWx5OiB2YXIoLS1xdW90ZUZvbnQpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmREaXNjbGFpbWVyKTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kQ29sb3IpO1xcclxcbiAgcGFkZGluZzogMmVtIDAuMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24jZGlzY2xhaW1lciBhIHtcXHJcXG4gIGNvbG9yOiByZWQ7XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIGgxIHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiBzZWN0aW9uI2Rpc2NsYWltZXIgZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHJvdy1nYXA6IDEuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHNlY3Rpb24jZGlzY2xhaW1lciBmb3JtIGlucHV0W3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmRDb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAyZW07XFxyXFxufVxcclxcblxcclxcbm1haW4gc2VjdGlvbiNkaXNjbGFpbWVyIGZvcm0gaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4vKkVuZCBvZiBIb21lIFBhZ2UqL1xcclxcblxcclxcbi8qTWVudSBQYWdlKi9cXHJcXG5tYWluLm1lbnUge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XFxyXFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcclxcbiAgcm93LWdhcDogMmVtO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLm1lbnUgLmRpc2gge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXHJcXG4gIHJvdy1nYXA6IDAuNWVtO1xcclxcbiAgd2lkdGg6IDYwJTtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtaW1hZ2Uge1xcclxcbiAgd2lkdGg6IDMwMHB4OyAvKiBBZGp1c3QgdGhlIHNpemUgYXMgbmVlZGVkICovXFxyXFxuICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcclxcbn1cXHJcXG4uZGlzaC1pbWFnZSBpbWcge1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1kZXRhaWxzIGgyIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtZGV0YWlscyBwIHtcXHJcXG4gIG1hcmdpbjogNXB4IDA7XFxyXFxuICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmRpc2gtaW1hZ2UsXFxyXFxuLmRpc2gtZGV0YWlscyB7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IGVhc2UgMjBtcywgZmlsdGVyIGVhc2UgMjBtcywgc2NhbGUgZWFzZSAyMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uZGlzaC1pbWFnZS5ob3ZlcmVkLFxcclxcbi5kaXNoLWRldGFpbHMuaG92ZXJlZCB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxuICBmaWx0ZXI6IGJsdXIoMC4yZW0pO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKk5lYXJlc3QgSG9zcGl0YWwgTWFpbiBQYWdlIChnb29nbGUgbWFwcyBhcGkpKi9cXHJcXG4jbWFwIHtcXHJcXG4gIGhlaWdodDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi8qRW5kIG9mIE5lYXJlc3QgSG9zcGl0YWwgTWFpbiBQYWdlKi9cXHJcXG5cXHJcXG4vKkNvbnRhY3QgVXMgUGFnZSovXFxyXFxubWFpbi5jb250YWN0VXMge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogODAlIDIwJTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLmNvbnRhY3RVcyBzcGFuIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgaGVpZ2h0OiAwLjVlbTtcXHJcXG4gIHdpZHRoOiAyMCU7XFxyXFxuICB0b3A6IC0xZW07XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWltZ0JvcmRlckNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbi5jb250YWN0VXMgYWRkcmVzcyB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbm1haW4uY29udGFjdFVzIGFkZHJlc3MgcCB7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKkVuZCBvZiBDb250YWN0IFVzIFBhZ2UqL1xcclxcblxcclxcbi8qRW5kIG9mIE1lbnUgUGFnZSovXFxyXFxuI2NvbnRlbnQgZm9vdGVyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFlbTtcXHJcXG4gIHBhZGRpbmc6IDAuNzVlbSAwLjVlbTtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI4NjVlZmE5YTNhNGUwZTU3N2ZjNzFjNjZkZmI0ZDQ0Yi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOTJjMWJiNzIxNDY4YThkMGU1MDlkNGZiMTk3M2M3YjYucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNmMjVlZTU1Zjc2M2I5OTBiOGJmMWIyMjk0NGU3MWZhLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJmMzEwOGJiNDA2M2Q3M2NhZjkyM2RiOWYzMmE3NWIzZi5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiOThhMmIwZTRjNDY0MzU3Zjg1NTk3OTRlMTdhODM5Y2UucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjk3NDVkNWZiYmMwNWY1NzlmZGIyODAzYzRiODkwZjBiLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJlMmVkNDIxNWQ0YmVlMTI3NjVlY2YyY2IyMjFlOGY1NC5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYjc1YzFlMWE1YmI0NGVlNjI4NDNlMGZjNjU4YzgzMjkucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjQxMjg4OWMzOTk4MzFiYzJjNDRiZWViOTQzNzBjNTNiLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJiMjEzNTgyNjQ4YTMwMDQ5NWI4ZDQ5YWZkNzUxYzQ2ZC5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYzYxMDFiNmI1ZmE0NTkxMzQwYzdiYzZmM2ExNGRmYmUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImNhMzgxN2JkMWNkYmZhYWRiNDZjYzFlMGJhNjE1YTU4LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkMGI1YmNlZjFlYWUxMmU0YjdlMjBlYjAxYTgxZDEzMi5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcclxuaW1wb3J0IHsgcmVnaXN0ZXJFdmVudHMgfSBmcm9tIFwiLi9Nb2R1bGVzL0RPTUV2ZW50c1wiO1xyXG5pbXBvcnQge1xyXG4gIGFwcGVuZEhlYWRlck5hdkJhcixcclxuICBhcHBlbmRNYWluVGFnLFxyXG4gIHJlbmRlckhvbWVQYWdlLFxyXG59IGZyb20gXCIuL01vZHVsZXMvRE9NUmVuZGVyZXJcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgYXBwZW5kSGVhZGVyTmF2QmFyKCk7XHJcbiAgYXBwZW5kTWFpblRhZygpO1xyXG4gIC8vcmVuZGVyIHRoZSBob21lIHBhZ2U7IHRoZSBkZWZhdWx0IG9uZVxyXG4gIHJlbmRlckhvbWVQYWdlKCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiX3JlZ2VuZXJhdG9yUnVudGltZSIsImV4cG9ydHMiLCJPcCIsIk9iamVjdCIsInByb3RvdHlwZSIsImhhc093biIsImhhc093blByb3BlcnR5IiwiZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJkZXNjIiwidmFsdWUiLCIkU3ltYm9sIiwiU3ltYm9sIiwiaXRlcmF0b3JTeW1ib2wiLCJpdGVyYXRvciIsImFzeW5jSXRlcmF0b3JTeW1ib2wiLCJhc3luY0l0ZXJhdG9yIiwidG9TdHJpbmdUYWdTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsImRlZmluZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImVyciIsIndyYXAiLCJpbm5lckZuIiwib3V0ZXJGbiIsInNlbGYiLCJ0cnlMb2NzTGlzdCIsInByb3RvR2VuZXJhdG9yIiwiR2VuZXJhdG9yIiwiZ2VuZXJhdG9yIiwiY3JlYXRlIiwiY29udGV4dCIsIkNvbnRleHQiLCJtYWtlSW52b2tlTWV0aG9kIiwidHJ5Q2F0Y2giLCJmbiIsImFyZyIsInR5cGUiLCJjYWxsIiwiQ29udGludWVTZW50aW5lbCIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJJdGVyYXRvclByb3RvdHlwZSIsImdldFByb3RvIiwiZ2V0UHJvdG90eXBlT2YiLCJOYXRpdmVJdGVyYXRvclByb3RvdHlwZSIsInZhbHVlcyIsIkdwIiwiZGVmaW5lSXRlcmF0b3JNZXRob2RzIiwiZm9yRWFjaCIsIm1ldGhvZCIsIl9pbnZva2UiLCJBc3luY0l0ZXJhdG9yIiwiUHJvbWlzZUltcGwiLCJpbnZva2UiLCJyZXNvbHZlIiwicmVqZWN0IiwicmVjb3JkIiwicmVzdWx0IiwiX3R5cGVvZiIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsIl9jYXRjaCIsInRocm93biIsImRlbGVnYXRlWWllbGQiLCJfdG9Db25zdW1hYmxlQXJyYXkiLCJhcnIiLCJfYXJyYXlXaXRob3V0SG9sZXMiLCJfaXRlcmFibGVUb0FycmF5IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwibyIsIm1pbkxlbiIsIl9hcnJheUxpa2VUb0FycmF5IiwibiIsInRvU3RyaW5nIiwiQXJyYXkiLCJmcm9tIiwidGVzdCIsImlzQXJyYXkiLCJsZW4iLCJhcnIyIiwiX2NsYXNzQ2FsbENoZWNrIiwiaW5zdGFuY2UiLCJDb25zdHJ1Y3RvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwidGFyZ2V0IiwicHJvcHMiLCJkZXNjcmlwdG9yIiwiX3RvUHJvcGVydHlLZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b1Byb3BzIiwic3RhdGljUHJvcHMiLCJfdG9QcmltaXRpdmUiLCJTdHJpbmciLCJpbnB1dCIsImhpbnQiLCJwcmltIiwidG9QcmltaXRpdmUiLCJyZXMiLCJOdW1iZXIiLCJfX2F3YWl0ZXIiLCJ0aGlzQXJnIiwiX2FyZ3VtZW50cyIsIlAiLCJhZG9wdCIsImZ1bGZpbGxlZCIsInN0ZXAiLCJlIiwicmVqZWN0ZWQiLCJhcHBseSIsImZhc3REZWVwRXF1YWwiLCJlcXVhbCIsImEiLCJiIiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJ2YWx1ZU9mIiwiREVGQVVMVF9JRCIsIkxvYWRlclN0YXR1cyIsIkxvYWRlciIsIl9yZWYiLCJhcGlLZXkiLCJhdXRoUmVmZXJyZXJQb2xpY3kiLCJjaGFubmVsIiwiY2xpZW50IiwiX3JlZiRpZCIsImlkIiwibGFuZ3VhZ2UiLCJfcmVmJGxpYnJhcmllcyIsImxpYnJhcmllcyIsIm1hcElkcyIsIm5vbmNlIiwicmVnaW9uIiwiX3JlZiRyZXRyaWVzIiwicmV0cmllcyIsIl9yZWYkdXJsIiwidXJsIiwidmVyc2lvbiIsImNhbGxiYWNrcyIsImxvYWRpbmciLCJlcnJvcnMiLCJvcHRpb25zIiwiY29uY2F0IiwiSlNPTiIsInN0cmluZ2lmeSIsImdldCIsIkZBSUxVUkUiLCJTVUNDRVNTIiwiTE9BRElORyIsIklOSVRJQUxJWkVEIiwiY3JlYXRlVXJsIiwiam9pbiIsImRlbGV0ZVNjcmlwdCIsInNjcmlwdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW1vdmUiLCJsb2FkIiwibG9hZFByb21pc2UiLCJfdGhpcyIsImxvYWRDYWxsYmFjayIsIndpbmRvdyIsImdvb2dsZSIsImltcG9ydExpYnJhcnkiLCJleGVjdXRlIiwibWFwcyIsInNldFNjcmlwdCIsIl90aGlzMiIsImNhbGxiYWNrIiwicGFyYW1zIiwidiIsIl9iIiwiX2EiLCJnIiwiaCIsImsiLCJwIiwiYyIsImwiLCJxIiwibSIsImQiLCJyIiwiU2V0IiwiVVJMU2VhcmNoUGFyYW1zIiwidSIsImYiLCJfY2FsbGVlIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsImNyZWF0ZUVsZW1lbnQiLCJzZXQiLCJyZXBsYWNlIiwidCIsInRvTG93ZXJDYXNlIiwic3JjIiwib25lcnJvciIsInF1ZXJ5U2VsZWN0b3IiLCJoZWFkIiwiYXBwZW5kIiwiY29uc29sZSIsIndhcm4iLCJfbGVuIiwiYXJndW1lbnRzIiwiX2tleSIsImFkZCIsImxpYnJhcnlQcm9taXNlcyIsIm1hcCIsImxpYnJhcnkiLCJhbGwiLCJldmVudCIsIkVycm9yRXZlbnQiLCJsb2FkRXJyb3JDYWxsYmFjayIsIm9uZXJyb3JFdmVudCIsInJlc2V0SWZSZXRyeWluZ0ZhaWxlZCIsImZhaWxlZCIsIl90aGlzMyIsImRlbGF5IiwiTWF0aCIsInBvdyIsInNldFRpbWVvdXQiLCJfdGhpczQiLCJjYiIsIm1vZHVsZSIsImNzc1dpdGhNYXBwaW5nVG9TdHJpbmciLCJsaXN0IiwiaXRlbSIsImNvbnRlbnQiLCJuZWVkTGF5ZXIiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsIl9rIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImRhdGEiLCJzb3VyY2VNYXBwaW5nIiwiQnVyZ2VyRWF0IiwiQnVyZ2VyIiwiQnVyZ2VyMSIsIkJ1cmdlcjIiLCJCdXJnZXIzIiwiQnVyZ2VyNCIsIkJ1cmdlcjUiLCJCdXJnZXI3IiwiQnVyZ2VyOCIsIkhvdGRvZyIsIlNoYWtlIiwiRnJpZXMiLCJDaGVzc2VjYWtlIiwibWVudUl0ZW1zIiwicHJpY2UiLCJkaXNjb3VudCIsImV4dHJhSW5ncmVkaWVudHMiLCJleHRyYUluZ3JlZGllbnRzUHJpY2UiLCJpbWFnZSIsImNyZWF0ZUhlYWRlck5hdkJhciIsImhlYWRlciIsImdlbmVyYWxOYXYiLCJsZWZ0TmF2IiwibGVmdE5hdlVsIiwibGkiLCJzZXRBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhcHBlbmRDaGlsZCIsIm5hdmJhckxvZ28iLCJyaWdodE5hdmJhciIsImlubmVySFRNTCIsImNyZWF0ZUZvb3RlciIsImZvb3RlciIsImNyZWF0ZUhvbWVQYWdlIiwibWFpbkJhbm5lciIsImltZyIsImJhbm5lckJsb2NrcXVvdGUiLCJkaXNjbGFpbWVyU2VjdGlvbiIsImRpc2NsYWltZXJUaXRsZSIsImRpc2NsYWltZXJCbG9ja3F1b3RlIiwiZGlzY2xhaW1lckZvcm0iLCJmb3JtU2VjdGlvbiIsImlucHV0Q2hlY2tib3giLCJsYWJlbEZvckNoZWNrYm94IiwiaW5wdXRTdWJtaXQiLCJjcmVhdGVNZW51UGFnZURpc2hlcyIsImRpc2hlcyIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiX3N0ZXAiLCJzIiwiZGlzaERpdiIsImRpc2hJbWFnZURpdiIsImRpc2hEZXRhaWxzRGl2IiwiaDIiLCJ0ZXh0Q29udGVudCIsImNyZWF0ZU5lYXJlc3RIb3NwaXRhbFBhZ2UiLCJtYXBEaXYiLCJjcmVhdGVDb250YWN0VXNQYWdlIiwiZGV0YWlscyIsInN0cmVldCIsInBob25lIiwiYWRkcmVzcyIsIl9pIiwiX09iamVjdCR2YWx1ZXMiLCIkJCIsInJlbmRlckNvbnRhY3RVc1BhZ2UiLCJyZW5kZXJIb21lUGFnZSIsInJlbmRlck1lbnVQYWdlIiwicmVuZGVyTmVhcmVzdEhvc3BpdGFsUGFnZSIsImNhbGxSZW5kZXJGdW5jdGlvbnMiLCJob21lIiwibWVudSIsInJlZ2lzdGVyTmF2TGlua0NsaWNrZWQiLCJuYXZMaW5rcyIsImZpbHRlciIsImxpbmsiLCJjb250YWlucyIsImNsaWtlZExpbmsiLCJkaXNoZXNIb3ZlcmVkQ2xhc3NUb2dnbGVyIiwiZWxlbWVudCIsIm5leHRFbGVtZW50U2libGluZyIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCIkIiwic2Nyb2xsZWRDbGFzc0hlYWRlciIsInJlbmRlck1hcCIsImNvbnRlbnREaXYiLCJlbXB0eU1haW5Db250YWluZXIiLCJtYWluVGFnIiwicmVwbGFjZUNoaWxkcmVuIiwiYXBwZW5kSGVhZGVyTmF2QmFyIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZE1haW5UYWciLCJfbWFpblRhZyIsIl9tYWluVGFnMiIsImRpc2giLCJsb2FkZXIiLCJpbml0TWFwIiwibG9jYXRpb24iLCJsYXQiLCJsbmciLCJtYXBPcHRpb25zIiwiY2VudGVyIiwiem9vbSIsIm1hcFR5cGVJZCIsIk1hcCIsIm1hcmtlck9wdGlvbnMiLCJwb3NpdGlvbiIsInRpdGxlIiwibWFya2VyIiwiTWFya2VyIiwiaGVhZGVySGVpZ2h0Iiwib2Zmc2V0SGVpZ2h0Iiwic2Nyb2xsWSIsInNlbGVjdG9yIiwiYWxsU2VsZWN0b3IiLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVnaXN0ZXJFdmVudHMiXSwic291cmNlUm9vdCI6IiJ9