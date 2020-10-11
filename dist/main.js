/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displaycontroller.js":
/*!**********************************!*\
  !*** ./src/displaycontroller.js ***!
  \**********************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nconst displayController = (() => {\n    //cacheDOM\n    const newProjectBtn = document.querySelector(\"#new-project\");\n    const newToDoBtn = document.querySelector(\"#new-todo\");\n    const navBarLinks = document.querySelector(\"#navbar-links\");\n    \n    function renderNavBar(arrayToRender) {\n        clearDisplayElement(navBarLinks);\n        for (let i = 0; i < arrayToRender.length; i++) {\n            let btn = document.createElement(\"button\");\n            btn.textContent = arrayToRender[i].name;\n            //add a listener\n            navBarLinks.appendChild(btn);\n        }\n    }\n\n    function clearDisplayElement(displayElement) {\n        for (let i = 0; i < displayElement.childNodes.length; i++) {\n            displayElement.childNodes[i].remove();\n        }\n    }\n    \n\n    return {renderNavBar};\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayController);\n\n//# sourceURL=webpack://todo-list/./src/displaycontroller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _displaycontroller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displaycontroller.js */ \"./src/displaycontroller.js\");\n\n\n\n\nlet board = [];\n\nfunction createProject(name) {\n    board.push(new _project_js__WEBPACK_IMPORTED_MODULE_1__.default(name));\n}\n\nfunction createToDo(name, description, dueDate, priority, project) {\n    findProject(project).addToDo(new _todo_js__WEBPACK_IMPORTED_MODULE_2__.default(name, description, dueDate, priority));\n}\n\nfunction findProject(project) {\n    return board.find( (obj) => obj.name === project);\n}\n\nfunction deleteProject(project) {\n    const indexToDelete = board.indexOf(findProject(project));\n    board.splice(indexToDelete, 1);\n}\n\n//for testing\ncreateProject(\"default\");\ncreateToDo(\"Test\", \"This is a test\", \"anymtime\", \"no priority\", \"default\");\n\nconsole.table(findProject(\"default\").toDoList);\n\ncreateToDo(\"Test2\", \"This is a test\", \"anymtime\", \"no priority\", \"default\");\n\nconsole.table(findProject(\"default\").toDoList);\n\nfindProject(\"default\").deleteToDo(\"Test2\");\n\nconsole.table(findProject(\"default\").toDoList);\n\ncreateProject(\"default2\");\n\nconsole.table(board);\n\ndeleteProject(\"default2\");\n\nconsole.table(board);\n\n_displaycontroller_js__WEBPACK_IMPORTED_MODULE_0__.default.renderNavBar(board);\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Project\n/* harmony export */ });\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.toDoList = [];\n    }\n\n    get name() {\n        return this._name;\n    }\n    \n    set name(newName) {\n        this._name = newName;\n    }\n\n    addToDo(item) {\n        this.toDoList.push(item);\n    }\n\n    findToDo(item) {\n        return this.toDoList.find( (obj) => obj.name === item);\n    }\n\n    deleteToDo(item) {\n        const indexToDelete = this.toDoList.indexOf(this.findToDo(item));\n        this.toDoList.splice(indexToDelete, 1);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ ToDo\n/* harmony export */ });\nclass ToDo {\n    constructor(title, description, dueDate, priority) {\n        this.title = title;\n        this.description = description;\n        this.dueDate = dueDate;\n        this.priority = priority;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/todo.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;