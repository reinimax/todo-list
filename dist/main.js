/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/reset.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/reset.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* http://meyerweb.com/eric/tools/css/reset/ \\n   v2.0 | 20110126\\n   License: none (public domain)\\n*/\\n\\nhtml, body, div, span, applet, object, iframe,\\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\\na, abbr, acronym, address, big, cite, code,\\ndel, dfn, em, img, ins, kbd, q, s, samp,\\nsmall, strike, strong, sub, sup, tt, var,\\nb, u, i, center,\\ndl, dt, dd, ol, ul, li,\\nfieldset, form, label, legend,\\ntable, caption, tbody, tfoot, thead, tr, th, td,\\narticle, aside, canvas, details, embed, \\nfigure, figcaption, footer, header, hgroup, \\nmenu, nav, output, ruby, section, summary,\\ntime, mark, audio, video {\\n\\tmargin: 0;\\n\\tpadding: 0;\\n\\tborder: 0;\\n\\tfont-size: 100%;\\n\\tfont: inherit;\\n\\tvertical-align: baseline;\\n}\\n/* HTML5 display-role reset for older browsers */\\narticle, aside, details, figcaption, figure, \\nfooter, header, hgroup, menu, nav, section {\\n\\tdisplay: block;\\n}\\nbody {\\n\\tline-height: 1;\\n}\\nol, ul {\\n\\tlist-style: none;\\n}\\nblockquote, q {\\n\\tquotes: none;\\n}\\nblockquote:before, blockquote:after,\\nq:before, q:after {\\n\\tcontent: '';\\n\\tcontent: none;\\n}\\ntable {\\n\\tborder-collapse: collapse;\\n\\tborder-spacing: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/reset.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, module.id, __webpack_require__.d, __webpack_require__.*, module */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* General */\\nbody {\\n  background-image: linear-gradient(\\n    rgba(75, 129, 120, 0.5),\\n    rgba(129, 100, 81, 0.5)\\n  );\\n}\\n\\nbutton {\\n  padding: 10px;\\n  font-size: 14px;\\n}\\n\\nbutton,\\n.inner-navbar .icon-btn {\\n  background-image: linear-gradient(rgb(62, 72, 161), rgb(56, 58, 77));\\n  color: rgb(237, 237, 237);\\n  border: 1px solid rgb(44, 46, 66);\\n}\\n\\n.icon {\\n  height: 15px;\\n}\\n\\n.icon-btn {\\n  background-image: unset;\\n  background-color: transparent;\\n  border: none;\\n}\\n\\n/* Utility */\\n.visible {\\n  display: flex !important;\\n  flex-direction: column;\\n  align-items: flex-start;\\n  justify-content: space-evenly;\\n}\\n\\n.active {\\n  border-color: rgb(243, 223, 230) !important;\\n  background-image: linear-gradient(\\n    rgb(108, 62, 161),\\n    rgb(70, 56, 77)\\n  ) !important;\\n}\\n\\n/* Layout */\\n#flex-container {\\n  display: flex;\\n}\\n\\n/* Navbar */\\n#navbar {\\n  height: 100vh;\\n  padding-top: 50px;\\n}\\n\\n.inner-navbar {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.inner-navbar div {\\n  width: 100%;\\n  display: flex;\\n}\\n\\n.inner-navbar div .icon-btn {\\n  margin: 5px 0 5px;\\n  border-left: none;\\n}\\n\\n.navbar-btn {\\n  margin: 5px 0 5px 10px;\\n  flex-grow: 1;\\n}\\n\\n/* Main */\\n#main {\\n  flex-grow: 1;\\n}\\n\\n#todo-list {\\n  margin: 100px auto 0;\\n}\\n\\n#todo-list th,\\ntd {\\n  padding: 5px 10px;\\n  border: 1px solid black;\\n}\\n\\n/* Popup Forms */\\n.popup-box {\\n  display: none;\\n  position: absolute;\\n  top: 100px;\\n  background-color: aquamarine;\\n}\\n\\n#new-project-form {\\n  left: 50%;\\n  margin-left: -200px;\\n  width: 400px;\\n  height: 200px;\\n  border: 1px solid black;\\n  padding-left: 30px;\\n}\\n\\n#new-todo-form {\\n  left: 50%;\\n  margin-left: -200px;\\n  width: 400px;\\n  height: 400px;\\n  border: 1px solid black;\\n  padding-left: 30px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/edit-round-line.svg":
/*!*********************************!*\
  !*** ./src/edit-round-line.svg ***!
  \*********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"6bbc05e72ac9867f4efb0d7a36f9fd73.svg\");\n\n//# sourceURL=webpack://todo-list/./src/edit-round-line.svg?");

/***/ }),

/***/ "./src/recycle-bin-line.svg":
/*!**********************************!*\
  !*** ./src/recycle-bin-line.svg ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.p, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"18d967047ce8e906d5703944738502b9.svg\");\n\n//# sourceURL=webpack://todo-list/./src/recycle-bin-line.svg?");

/***/ }),

/***/ "./node_modules/pubsub-js/src/pubsub.js":
/*!**********************************************!*\
  !*** ./node_modules/pubsub-js/src/pubsub.js ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module.loaded, module.id, module, __webpack_require__.nmd, __webpack_exports__, top-level-this-exports, __webpack_require__.* */
/***/ (function(module, exports, __webpack_require__) {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n/**\n * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk\n * License: MIT - http://mrgnrdrck.mit-license.org\n *\n * https://github.com/mroderick/PubSubJS\n */\n\n(function (root, factory){\n    'use strict';\n\n    var PubSub = {};\n    root.PubSub = PubSub;\n\n    var define = root.define;\n\n    factory(PubSub);\n\n    // AMD support\n    if (typeof define === 'function' && define.amd){\n        define(function() { return PubSub; });\n\n        // CommonJS and Node.js module support\n    } else if (true){\n        if (module !== undefined && module.exports) {\n            exports = module.exports = PubSub; // Node.js specific `module.exports`\n        }\n        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec\n        module.exports = exports = PubSub; // CommonJS\n    }\n\n}(( typeof window === 'object' && window ) || this, function (PubSub){\n    'use strict';\n\n    var messages = {},\n        lastUid = -1,\n        ALL_SUBSCRIBING_MSG = '*';\n\n    function hasKeys(obj){\n        var key;\n\n        for (key in obj){\n            if ( obj.hasOwnProperty(key) ){\n                return true;\n            }\n        }\n        return false;\n    }\n\n    /**\n     * Returns a function that throws the passed exception, for use as argument for setTimeout\n     * @alias throwException\n     * @function\n     * @param { Object } ex An Error object\n     */\n    function throwException( ex ){\n        return function reThrowException(){\n            throw ex;\n        };\n    }\n\n    function callSubscriberWithDelayedExceptions( subscriber, message, data ){\n        try {\n            subscriber( message, data );\n        } catch( ex ){\n            setTimeout( throwException( ex ), 0);\n        }\n    }\n\n    function callSubscriberWithImmediateExceptions( subscriber, message, data ){\n        subscriber( message, data );\n    }\n\n    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){\n        var subscribers = messages[matchedMessage],\n            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,\n            s;\n\n        if ( !messages.hasOwnProperty( matchedMessage ) ) {\n            return;\n        }\n\n        for (s in subscribers){\n            if ( subscribers.hasOwnProperty(s)){\n                callSubscriber( subscribers[s], originalMessage, data );\n            }\n        }\n    }\n\n    function createDeliveryFunction( message, data, immediateExceptions ){\n        return function deliverNamespaced(){\n            var topic = String( message ),\n                position = topic.lastIndexOf( '.' );\n\n            // deliver the message as it is now\n            deliverMessage(message, message, data, immediateExceptions);\n\n            // trim the hierarchy and deliver message to each level\n            while( position !== -1 ){\n                topic = topic.substr( 0, position );\n                position = topic.lastIndexOf('.');\n                deliverMessage( message, topic, data, immediateExceptions );\n            }\n\n            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);\n        };\n    }\n\n    function hasDirectSubscribersFor( message ) {\n        var topic = String( message ),\n            found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));\n\n        return found;\n    }\n\n    function messageHasSubscribers( message ){\n        var topic = String( message ),\n            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),\n            position = topic.lastIndexOf( '.' );\n\n        while ( !found && position !== -1 ){\n            topic = topic.substr( 0, position );\n            position = topic.lastIndexOf( '.' );\n            found = hasDirectSubscribersFor(topic);\n        }\n\n        return found;\n    }\n\n    function publish( message, data, sync, immediateExceptions ){\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        var deliver = createDeliveryFunction( message, data, immediateExceptions ),\n            hasSubscribers = messageHasSubscribers( message );\n\n        if ( !hasSubscribers ){\n            return false;\n        }\n\n        if ( sync === true ){\n            deliver();\n        } else {\n            setTimeout( deliver, 0 );\n        }\n        return true;\n    }\n\n    /**\n     * Publishes the message, passing the data to it's subscribers\n     * @function\n     * @alias publish\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publish = function( message, data ){\n        return publish( message, data, false, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Publishes the message synchronously, passing the data to it's subscribers\n     * @function\n     * @alias publishSync\n     * @param { String } message The message to publish\n     * @param {} data The data to pass to subscribers\n     * @return { Boolean }\n     */\n    PubSub.publishSync = function( message, data ){\n        return publish( message, data, true, PubSub.immediateExceptions );\n    };\n\n    /**\n     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe\n     * @function\n     * @alias subscribe\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { String }\n     */\n    PubSub.subscribe = function( message, func ){\n        if ( typeof func !== 'function'){\n            return false;\n        }\n\n        message = (typeof message === 'symbol') ? message.toString() : message;\n\n        // message is not registered yet\n        if ( !messages.hasOwnProperty( message ) ){\n            messages[message] = {};\n        }\n\n        // forcing token as String, to allow for future expansions without breaking usage\n        // and allow for easy use as key names for the 'messages' object\n        var token = 'uid_' + String(++lastUid);\n        messages[message][token] = func;\n        \n        // return token for unsubscribing\n        return token;\n    };\n\n    PubSub.subscribeAll = function( func ){\n        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);\n    };\n\n    /**\n     * Subscribes the passed function to the passed message once\n     * @function\n     * @alias subscribeOnce\n     * @param { String } message The message to subscribe to\n     * @param { Function } func The function to call when a new message is published\n     * @return { PubSub }\n     */\n    PubSub.subscribeOnce = function( message, func ){\n        var token = PubSub.subscribe( message, function(){\n            // before func apply, unsubscribe message\n            PubSub.unsubscribe( token );\n            func.apply( this, arguments );\n        });\n        return PubSub;\n    };\n\n    /**\n     * Clears all subscriptions\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     */\n    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){\n        messages = {};\n    };\n\n    /**\n     * Clear subscriptions by the topic\n     * @function\n     * @public\n     * @alias clearAllSubscriptions\n     * @return { int }\n     */\n    PubSub.clearSubscriptions = function clearSubscriptions(topic){\n        var m;\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                delete messages[m];\n            }\n        }\n    };\n\n    /** \n       Count subscriptions by the topic\n     * @function\n     * @public\n     * @alias countSubscriptions\n     * @return { Array }\n    */\n    PubSub.countSubscriptions = function countSubscriptions(topic){\n        var m;\n        var count = 0;\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                count++;\n            }\n        }\n        return count;\n    };\n\n    \n    /** \n       Gets subscriptions by the topic\n     * @function\n     * @public\n     * @alias getSubscriptions\n    */\n    PubSub.getSubscriptions = function getSubscriptions(topic){\n        var m;\n        var list = [];\n        for (m in messages){\n            if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){\n                list.push(m);\n            }\n        }\n        return list;\n    };\n\n    /**\n     * Removes subscriptions\n     *\n     * - When passed a token, removes a specific subscription.\n     *\n\t * - When passed a function, removes all subscriptions for that function\n     *\n\t * - When passed a topic, removes all subscriptions for that topic (hierarchy)\n     * @function\n     * @public\n     * @alias subscribeOnce\n     * @param { String | Function } value A token, function or topic to unsubscribe from\n     * @example // Unsubscribing with a token\n     * var token = PubSub.subscribe('mytopic', myFunc);\n     * PubSub.unsubscribe(token);\n     * @example // Unsubscribing with a function\n     * PubSub.unsubscribe(myFunc);\n     * @example // Unsubscribing from a topic\n     * PubSub.unsubscribe('mytopic');\n     */\n    PubSub.unsubscribe = function(value){\n        var descendantTopicExists = function(topic) {\n                var m;\n                for ( m in messages ){\n                    if ( messages.hasOwnProperty(m) && m.indexOf(topic) === 0 ){\n                        // a descendant of the topic exists:\n                        return true;\n                    }\n                }\n\n                return false;\n            },\n            isTopic    = typeof value === 'string' && ( messages.hasOwnProperty(value) || descendantTopicExists(value) ),\n            isToken    = !isTopic && typeof value === 'string',\n            isFunction = typeof value === 'function',\n            result = false,\n            m, message, t;\n\n        if (isTopic){\n            PubSub.clearSubscriptions(value);\n            return;\n        }\n\n        for ( m in messages ){\n            if ( messages.hasOwnProperty( m ) ){\n                message = messages[m];\n\n                if ( isToken && message[value] ){\n                    delete message[value];\n                    result = value;\n                    // tokens are unique, so we can just stop here\n                    break;\n                }\n\n                if (isFunction) {\n                    for ( t in message ){\n                        if (message.hasOwnProperty(t) && message[t] === value){\n                            delete message[t];\n                            result = true;\n                        }\n                    }\n                }\n            }\n        }\n\n        return result;\n    };\n}));\n\n\n//# sourceURL=webpack://todo-list/./node_modules/pubsub-js/src/pubsub.js?");

/***/ }),

/***/ "./src/reset.css":
/*!***********************!*\
  !*** ./src/reset.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./reset.css */ \"./node_modules/css-loader/dist/cjs.js!./src/reset.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/reset.css?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module, __webpack_require__.nc, __webpack_require__.* */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/boardcontroller.js":
/*!********************************!*\
  !*** ./src/boardcontroller.js ***!
  \********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\n\nconst boardController = (() => {\n  const board = [];\n\n  function getBoard() {\n    return board;\n  }\n\n  function createProject(name) {\n    board.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(name));\n  }\n\n  function findProject(project) {\n    return board.find((obj) => obj.getName() === project);\n  }\n\n  function findIndexOfProject(projectname) {\n    return board.findIndex((obj) => obj.getName() === projectname);\n  }\n\n  function deleteProject(index) {\n    board.splice(index, 1);\n  }\n\n  function createToDo(name, description, dueDate, priority, project) {\n    findProject(project).addToDo(\n      new _todo__WEBPACK_IMPORTED_MODULE_1__.default(name, description, dueDate, priority)\n    );\n  }\n\n  return {\n    getBoard,\n    createProject,\n    findProject,\n    findIndexOfProject,\n    deleteProject,\n    createToDo,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (boardController);\n\n\n//# sourceURL=webpack://todo-list/./src/boardcontroller.js?");

/***/ }),

/***/ "./src/displaycontroller.js":
/*!**********************************!*\
  !*** ./src/displaycontroller.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _recycle_bin_line_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recycle-bin-line.svg */ \"./src/recycle-bin-line.svg\");\n/* harmony import */ var _edit_round_line_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-round-line.svg */ \"./src/edit-round-line.svg\");\n\n\n\n\n\nconst displayController = (() => {\n  // cacheDOM\n  const newProjectBtn = document.querySelector(\"#new-project\");\n  const newToDoBtn = document.querySelector(\"#new-todo\");\n  const saveProjectBtn = document.querySelector(\"#save-project\");\n  const saveToDoBtn = document.querySelector(\"#save-todo\");\n  const navBarLinks = document.querySelector(\"#navbar-links\");\n  const projectForm = document.querySelector(\"#new-project-form\");\n  const toDoForm = document.querySelector(\"#new-todo-form\");\n  const projectDropdown = document.querySelector(\"#project-to-add-to\");\n  const toDoList = document.querySelector(\"#todo-list\");\n  const cancelBtns = document.querySelectorAll(\".cancel\");\n\n  // form fields\n  const projectName = document.querySelector(\"#project-name\");\n  const toDoName = document.querySelector(\"#todo-name\");\n  const toDoDescription = document.querySelector(\"#todo-descr\");\n  const toDoDate = document.querySelector(\"#todo-date\");\n  const toDoPriority = document.querySelector(\"#todo-priority\");\n\n  // utility functions\n  function disable(btn) {\n    btn.setAttribute(\"disabled\", \"true\");\n  }\n\n  function enable(btn) {\n    btn.removeAttribute(\"disabled\");\n  }\n\n  function resetProjectForm() {\n    projectName.value = \"\";\n    projectName.focus();\n  }\n\n  function resettToDoForm() {\n    toDoName.value = \"\";\n    toDoName.focus();\n    toDoDescription.value = \"\";\n    toDoDate.value = \"\";\n    toDoPriority.value = \"3\";\n  }\n\n  function setActive(index) {\n    const btnList = navBarLinks.getElementsByClassName(\"navbar-btn\");\n    const btnArray = [...btnList];\n    const btnToActivate = btnArray[index];\n    btnArray.forEach((btn) => btn.classList.remove(\"active\"));\n    btnToActivate.classList.add(\"active\");\n\n    // activate also the edit- and delete-buttons\n    const iconBtnList = navBarLinks.getElementsByClassName(\"icon-btn\");\n    const iconBtnArray = [...iconBtnList];\n    iconBtnArray.forEach((btn) => btn.classList.remove(\"active\"));\n\n    const iconBtnToActivate = navBarLinks.querySelectorAll(\n      `[data-index=\"${index}\"]`\n    );\n    iconBtnToActivate.forEach((iconBtn) => iconBtn.classList.add(\"active\"));\n  }\n\n  function setVisible(popupBox) {\n    popupBox.classList.add(\"visible\");\n  }\n\n  function setInvisible(popupBox) {\n    popupBox.classList.remove(\"visible\");\n  }\n\n  function clearDisplayElement(displayElement) {\n    while (displayElement.childNodes.length > 0) {\n      displayElement.lastChild.remove();\n    }\n  }\n\n  function clearToDoList() {\n    // firstElementChild === tbody\n    while (toDoList.firstElementChild.childNodes.length > 1) {\n      toDoList.firstElementChild.lastChild.remove();\n    }\n  }\n\n  function createIconBtn(alt, source, dataIndex) {\n    const btn = document.createElement(\"button\");\n    btn.setAttribute(\"data-index\", `${dataIndex}`);\n    btn.setAttribute(\"class\", \"icon-btn\");\n    const btnIcon = document.createElement(\"img\");\n    btnIcon.setAttribute(\"src\", source);\n    btnIcon.setAttribute(\"alt\", alt);\n    btnIcon.setAttribute(\"class\", \"icon\");\n    btn.appendChild(btnIcon);\n    return btn;\n  }\n\n  // add listeners\n  newProjectBtn.addEventListener(\"click\", () => {\n    setVisible(projectForm);\n    resetProjectForm();\n  });\n  newToDoBtn.addEventListener(\"click\", () => {\n    setVisible(toDoForm);\n    resettToDoForm();\n  });\n  saveProjectBtn.addEventListener(\"click\", () => setInvisible(projectForm));\n  saveToDoBtn.addEventListener(\"click\", () => setInvisible(toDoForm));\n  cancelBtns.forEach((btn) =>\n    btn.addEventListener(\"click\", (e) => {\n      setInvisible(e.currentTarget.parentNode.parentNode);\n    })\n  );\n\n  // Subscriptions\n  const BOARD_EMPTY = \"board-empty\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().subscribe(BOARD_EMPTY, () => disable(newToDoBtn));\n\n  // render\n  function renderProjectDropdown(arrayToRender) {\n    clearDisplayElement(projectDropdown);\n    for (let i = 0; i < arrayToRender.length; i += 1) {\n      const option = document.createElement(\"option\");\n      option.textContent = arrayToRender[i].name;\n      option.value = arrayToRender[i].name;\n      projectDropdown.appendChild(option);\n    }\n  }\n\n  function renderToDoList(projectToRender) {\n    clearToDoList();\n    for (let i = 0; i < projectToRender.toDoList.length; i += 1) {\n      const newRow = document.createElement(\"tr\");\n\n      const checkbox = document.createElement(\"input\");\n      checkbox.setAttribute(\"type\", \"checkbox\");\n      const checkboxCell = document.createElement(\"td\");\n      checkboxCell.appendChild(checkbox);\n\n      const name = document.createElement(\"td\");\n      name.textContent = projectToRender.toDoList[i].title;\n\n      const descr = document.createElement(\"td\");\n      descr.textContent = projectToRender.toDoList[i].description;\n\n      const date = document.createElement(\"td\");\n      date.textContent = projectToRender.toDoList[i].dueDate;\n\n      const priority = document.createElement(\"td\");\n      priority.textContent = projectToRender.toDoList[i].priority;\n\n      const editCell = document.createElement(\"td\");\n      const editBtn = createIconBtn(\"edit\", _edit_round_line_svg__WEBPACK_IMPORTED_MODULE_2__.default, i);\n      const EDIT_TODO_CLICKED = \"edit-todo-clicked\";\n      editBtn.addEventListener(\"click\", (e) => {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(\n          EDIT_TODO_CLICKED,\n          e.currentTarget.getAttribute(\"data-index\")\n        );\n        setVisible(toDoForm);\n      });\n      editCell.appendChild(editBtn);\n\n      const deleteCell = document.createElement(\"td\");\n      const deleteBtn = createIconBtn(\"delete\", _recycle_bin_line_svg__WEBPACK_IMPORTED_MODULE_1__.default, i);\n      const DELETE_TODO_CLICKED = \"delete-todo-clicked\";\n      deleteBtn.addEventListener(\"click\", (e) => {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(\n          DELETE_TODO_CLICKED,\n          e.currentTarget.getAttribute(\"data-index\")\n        );\n      });\n      deleteCell.appendChild(deleteBtn);\n\n      newRow.appendChild(checkboxCell);\n      newRow.appendChild(name);\n      newRow.appendChild(descr);\n      newRow.appendChild(date);\n      newRow.appendChild(priority);\n      newRow.appendChild(editCell);\n      newRow.appendChild(deleteCell);\n\n      // firstElementChild === tbody\n      toDoList.firstElementChild.appendChild(newRow);\n    }\n  }\n\n  function renderNavBar(arrayToRender) {\n    clearDisplayElement(navBarLinks);\n    for (let i = 0; i < arrayToRender.length; i += 1) {\n      const CURRENT_PROJECT = arrayToRender[i];\n\n      const container = document.createElement(\"div\");\n\n      const btn = document.createElement(\"button\");\n      btn.textContent = CURRENT_PROJECT.name;\n      btn.setAttribute(\"class\", \"navbar-btn\");\n      btn.addEventListener(\"click\", () => {\n        const PROJECT_CHANGED = \"project-changed\";\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(PROJECT_CHANGED, CURRENT_PROJECT);\n        renderToDoList(CURRENT_PROJECT);\n      });\n\n      const editPRoj = createIconBtn(\"edit\", _edit_round_line_svg__WEBPACK_IMPORTED_MODULE_2__.default, i);\n      const EDIT_PROJECT_CLICKED = \"edit-project-clicked\";\n      editPRoj.addEventListener(\"click\", (e) => {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(\n          EDIT_PROJECT_CLICKED,\n          e.currentTarget.getAttribute(\"data-index\")\n        );\n        setVisible(projectForm);\n      });\n\n      const deletePRoj = createIconBtn(\"delete\", _recycle_bin_line_svg__WEBPACK_IMPORTED_MODULE_1__.default, i);\n      const DELETE_PROJECT_CLICKED = \"delete-project-clicked\";\n      deletePRoj.addEventListener(\"click\", (e) => {\n        pubsub_js__WEBPACK_IMPORTED_MODULE_0___default().publish(\n          DELETE_PROJECT_CLICKED,\n          e.currentTarget.getAttribute(\"data-index\")\n        );\n      });\n\n      container.appendChild(btn);\n      container.appendChild(editPRoj);\n      container.appendChild(deletePRoj);\n\n      navBarLinks.appendChild(container);\n\n      // set the navbar btn for the active project active\n      if (CURRENT_PROJECT.getStatus()) setActive(i);\n    }\n  }\n\n  return {\n    renderNavBar,\n    renderProjectDropdown,\n    renderToDoList,\n    clearToDoList,\n    setActive,\n    enable,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n\n//# sourceURL=webpack://todo-list/./src/displaycontroller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.css */ \"./src/reset.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pubsub-js */ \"./node_modules/pubsub-js/src/pubsub.js\");\n/* harmony import */ var pubsub_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pubsub_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _boardcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boardcontroller */ \"./src/boardcontroller.js\");\n/* harmony import */ var _displaycontroller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displaycontroller */ \"./src/displaycontroller.js\");\n\n\n\n\n\n\n\n\n(function coordinator() {\n  // cacheDom\n  const saveProjectBtn = document.querySelector(\"#save-project\");\n  const saveToDoBtn = document.querySelector(\"#save-todo\");\n  const newProjectBtn = document.querySelector(\"#new-project\");\n  const newToDoBtn = document.querySelector(\"#new-todo\");\n\n  const projectName = document.querySelector(\"#project-name\");\n  const toDoName = document.querySelector(\"#todo-name\");\n  const toDoDescription = document.querySelector(\"#todo-descr\");\n  const toDoDate = document.querySelector(\"#todo-date\");\n  const toDoPriority = document.querySelector(\"#todo-priority\");\n  const projectToAddTo = document.querySelector(\"#project-to-add-to\");\n\n  // variables\n  let currentProject;\n  let isNewOrEdit;\n\n  // functions\n  function changeCurrentProject(project) {\n    if (currentProject !== undefined) currentProject.deactivate();\n    currentProject = project;\n    currentProject.activate();\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.setActive(\n      _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.findIndexOfProject(currentProject.getName())\n    );\n  }\n\n  function createProject(name) {\n    _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.createProject(name);\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.enable(newToDoBtn);\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderNavBar(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n  }\n\n  let projectToEdit;\n  function updateProjectName(index) {\n    const board = _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard();\n    projectToEdit = board[index];\n    projectName.value = projectToEdit.getName();\n  }\n\n  function editProject() {\n    projectToEdit.setName(projectName.value);\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderNavBar(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n  }\n\n  function deleteProject(index) {\n    const board = _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard();\n    const projectToDelete = board[index];\n\n    _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.deleteProject(index);\n\n    if (projectToDelete === currentProject) {\n      // if the current project is deleted, make the first project in the list the current one\n      if (board.length > 0) {\n        changeCurrentProject(board[0]);\n        _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderToDoList(currentProject);\n      } else {\n        _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.clearToDoList();\n        const BOARD_EMPTY = \"board-empty\";\n        pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().publish(BOARD_EMPTY, \"\");\n      }\n    }\n\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderNavBar(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n  }\n\n  function createToDo(name, description, dueDate, priority, project) {\n    _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.createToDo(name, description, dueDate, priority, project);\n    changeCurrentProject(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.findProject(project));\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderToDoList(currentProject);\n  }\n\n  function deleteToDo(target) {\n    currentProject.deleteToDo(target);\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderToDoList(currentProject);\n  }\n\n  let toDoToEdit;\n  function updateToDo(index) {\n    toDoToEdit = currentProject.toDoList[index];\n\n    // THIS SHOULD ACTUALLY GO INTO DISPLAYCONTROLLER\n    toDoName.value = toDoToEdit.title;\n    toDoDescription.value = toDoToEdit.description;\n    toDoDate.value = toDoToEdit.dueDate;\n    toDoPriority.value = toDoToEdit.priority;\n    projectToAddTo.value = currentProject.getName();\n  }\n\n  function editToDo() {\n    toDoToEdit.title = toDoName.value;\n    toDoToEdit.description = toDoDescription.value;\n    toDoToEdit.dueDate = toDoDate.value;\n    toDoToEdit.priority = toDoPriority.value;\n\n    // if the user changed the project\n    if (projectToAddTo.value !== currentProject.getName()) {\n      // delete the todo from the old project\n      deleteToDo(currentProject.findToDoIndex(toDoToEdit));\n      // save the todo in the new project\n      createToDo(\n        toDoToEdit.title,\n        toDoToEdit.description,\n        toDoToEdit.dueDate,\n        toDoToEdit.priority,\n        projectToAddTo.value\n      );\n    }\n  }\n\n  // Subscriptions\n  const DELETE_PROJECT_CLICKED = \"delete-project-clicked\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(DELETE_PROJECT_CLICKED, (_tag, index) => {\n    deleteProject(index);\n  });\n\n  const DELETE_TODO_CLICKED = \"delete-todo-clicked\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(DELETE_TODO_CLICKED, (_tag, target) => {\n    deleteToDo(target);\n  });\n\n  const PROJECT_CHANGED = \"project-changed\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(PROJECT_CHANGED, (_tag, proj) => {\n    changeCurrentProject(proj);\n  });\n\n  const EDIT_PROJECT_CLICKED = \"edit-project-clicked\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(EDIT_PROJECT_CLICKED, (tag, proj) => {\n    updateProjectName(proj);\n    isNewOrEdit = tag;\n  });\n\n  const EDIT_TODO_CLICKED = \"edit-todo-clicked\";\n  pubsub_js__WEBPACK_IMPORTED_MODULE_2___default().subscribe(EDIT_TODO_CLICKED, (tag, proj) => {\n    updateToDo(proj);\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderProjectDropdown(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n    isNewOrEdit = tag;\n  });\n\n  // add listeners\n  saveProjectBtn.addEventListener(\"click\", () => {\n    if (isNewOrEdit === \"new-project-clicked\") {\n      createProject(projectName.value);\n    } else if (isNewOrEdit === \"edit-project-clicked\") {\n      editProject();\n    }\n  });\n  saveToDoBtn.addEventListener(\"click\", () => {\n    if (isNewOrEdit === \"new-todo-clicked\") {\n      createToDo(\n        toDoName.value,\n        toDoDescription.value,\n        toDoDate.value,\n        toDoPriority.value,\n        projectToAddTo.value\n      );\n    } else if (isNewOrEdit === \"edit-todo-clicked\") {\n      editToDo();\n    }\n  });\n  newProjectBtn.addEventListener(\"click\", () => {\n    isNewOrEdit = \"new-project-clicked\";\n  });\n  newToDoBtn.addEventListener(\"click\", () => {\n    _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderProjectDropdown(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n    isNewOrEdit = \"new-todo-clicked\";\n  });\n\n  // init\n  _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.createProject(\"default\");\n  _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderNavBar(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.getBoard());\n  changeCurrentProject(_boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.findProject(\"default\"));\n\n  _boardcontroller__WEBPACK_IMPORTED_MODULE_3__.default.createToDo(\n    \"Test\",\n    \"This is a test\",\n    \"2020-10-31\",\n    \"3\",\n    \"default\"\n  );\n\n  _displaycontroller__WEBPACK_IMPORTED_MODULE_4__.default.renderToDoList(currentProject);\n})();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Project\n/* harmony export */ });\nclass Project {\n  constructor(name) {\n    this.name = name;\n    this.toDoList = [];\n    this.active = false;\n  }\n\n  activate() {\n    this.active = true;\n  }\n\n  deactivate() {\n    this.active = false;\n  }\n\n  getStatus() {\n    return this.active;\n  }\n\n  getName() {\n    return this.name;\n  }\n\n  setName(newName) {\n    this.name = newName;\n  }\n\n  addToDo(item) {\n    this.toDoList.push(item);\n  }\n\n  findToDoIndex(title) {\n    return this.toDoList.findIndex((item) => item.title === title);\n  }\n\n  deleteToDo(index) {\n    this.toDoList.splice(index, 1);\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ToDo\n/* harmony export */ });\nclass ToDo {\n  constructor(title, description, dueDate, priority) {\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 				() => module['default'] :
/******/ 				() => module;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;