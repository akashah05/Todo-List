/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: \"Inter\", sans-serif;\r\n}\r\n\r\nmain {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 2rem;\r\n}\r\n\r\n/* Header Section */\r\nheader {\r\n  margin: auto;\r\n  width: 70%;\r\n  display: flex;\r\n  padding: 0.2rem 0;\r\n  justify-content: space-between;\r\n}\r\n\r\n.header-btns {\r\n  font-size: 1.2rem;\r\n  color: rgba(0, 0, 0, 0.604);\r\n  padding: 0.5rem 0;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.header-btns:hover {\r\n  color: black;\r\n  transform: scale(1.1);\r\n  cursor: pointer;\r\n}\r\n\r\n.headerbtn-line {\r\n  color: black;\r\n  font-weight: 700;\r\n  border-bottom: 0.2rem solid black;\r\n}\r\n\r\n/* Top Preview Section */\r\n.toppreview-container {\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-block: 1rem;\r\n\r\n  p {\r\n    font-size: 0.9rem;\r\n    color: rgba(0, 0, 0, 0.501);\r\n    letter-spacing: 2px;\r\n  }\r\n}\r\n\r\n.newtask-btn {\r\n  display: flex;\r\n  align-items: center;\r\n  column-gap: 0.5rem;\r\n  background: none;\r\n  border: none;\r\n  color: blue;\r\n  transition: all 0.2s ease;\r\n}\r\n\r\n.newtask-btn:hover {\r\n  cursor: pointer;\r\n  transform: scale(1.1);\r\n}\r\n\r\n/* todos section */\r\n.todos-container {\r\n  width: 70%;\r\n  margin: auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 1rem;\r\n}\r\n\r\n.options-container {\r\n  display: flex;\r\n  justify-content: space-between;\r\n\r\n  button {\r\n    font-size: 1.1rem;\r\n    background: none;\r\n    border: none;\r\n    transition: all 0.2s ease;\r\n    color: rgba(0, 0, 0, 0.61);\r\n  }\r\n\r\n  button:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n    color: black;\r\n  }\r\n\r\n  .active-btn {\r\n    color: blue;\r\n    font-weight: 600;\r\n  }\r\n}\r\n\r\n/* form container */\r\n.form-container {\r\n  display: none;\r\n  margin: auto;\r\n  width: 70%;\r\n  box-shadow: 0rem 0.3rem 0.8rem 0.1rem rgba(0, 0, 0, 0.5);\r\n}\r\n\r\nform {\r\n  display: flex;\r\n  flex-direction: column;\r\n  row-gap: 0.5rem;\r\n}\r\n.forminputs-container {\r\n  display: flex;\r\n  column-gap: 0.5rem;\r\n\r\n  #title,\r\n  #description {\r\n    padding: 0.4rem;\r\n    font-size: 1rem;\r\n    border: none;\r\n    border-bottom: 0.1rem solid black;\r\n    border-top: 0.1rem solid black;\r\n    outline: none;\r\n    flex: 1;\r\n  }\r\n}\r\n\r\n/* prioritybtns-container */\r\n.prioritybtns-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  column-gap: 4rem;\r\n  border-top: 0.1rem solid black;\r\n  border-bottom: 0.1rem solid black;\r\n  padding-block: 0.5rem;\r\n\r\n  button {\r\n    padding: 0.2rem 1rem;\r\n    background: none;\r\n    border: none;\r\n    border-radius: 0.2rem;\r\n    color: wheat;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .low-priority {\r\n    background-color: #4caf50;\r\n  }\r\n\r\n  .medium-priority {\r\n    background-color: #ffa500;\r\n  }\r\n\r\n  .high-priority {\r\n    background-color: #ff7f7f;\r\n  }\r\n\r\n  .current-priority {\r\n    outline: 1px solid black;\r\n  }\r\n}\r\n\r\n.duedate {\r\n  display: flex;\r\n  justify-content: center;\r\n  column-gap: 3rem;\r\n  border-bottom: 0.1rem solid black;\r\n  border-top: 0.1rem solid black;\r\n  padding-block: 0.5rem;\r\n}\r\n\r\n.formmainbtns-container {\r\n  display: flex;\r\n  justify-content: center;\r\n  column-gap: 3rem;\r\n  border-bottom: 0.1rem solid black;\r\n  border-top: 0.1rem solid black;\r\n  padding-block: 0.5rem;\r\n\r\n  button {\r\n    padding: 0.2rem 1rem;\r\n    background: none;\r\n    border: none;\r\n    border-radius: 0.2rem;\r\n    color: white;\r\n    font-weight: 500;\r\n  }\r\n\r\n  .reset-btn {\r\n    background-color: #ffa500;\r\n  }\r\n\r\n  .cancel-btn {\r\n    background-color: #ff7f7f;\r\n  }\r\n\r\n  .add-btn {\r\n    background-color: #4caf50;\r\n  }\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* media queries for responsiveness */\r\n@media only screen and (max-width: 500px) {\r\n\r\n  header,.toppreview-container {\r\n    width: 80%;\r\n  }\r\n\r\n  .header-btns {\r\n    font-size: 1rem;\r\n  }\r\n\r\n  .toppreview-container p {\r\n    font-size: 0.8rem;\r\n    letter-spacing: 1px;\r\n  }\r\n\r\n  .newtask-btn {\r\n    height: fit-content;\r\n    align-self: center;\r\n    column-gap: 0.1rem;\r\n  }\r\n\r\n  .options-container {\r\n    button {\r\n        font-size: 1rem;\r\n    }\r\n  }\r\n\r\n  .forminputs-container {\r\n    flex-direction: column;\r\n  }\r\n\r\n  .form-container {\r\n    width: 100%  ;\r\n  }\r\n\r\n  .forminputs-container {\r\n    column-gap: 0.3rem;\r\n  }\r\n\r\n  .prioritybtns-container {\r\n    column-gap: 2rem;\r\n  }\r\n\r\n}\r\n\r\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/taskbox.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/taskbox.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.task-box {\r\n    margin-bottom: 10px;\r\n    padding: 0 16px;\r\n    border-radius: 15px;\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.task-box .task-text {\r\n    padding: 15px;\r\n    padding-right: 0;\r\n    flex-grow: 1;\r\n    color: white;\r\n    transition: 200ms ease;\r\n}\r\n\r\n.task-text:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.taskbox-category {\r\n    font-size: 0.8rem;\r\n    color: black;\r\n    margin-bottom: 0.2rem;\r\n}\r\n\r\n.taskbox-title {\r\n    font-size: 1rem;\r\n    font-weight: 800;\r\n    margin-bottom: 0.2rem;\r\n    color: black;\r\n}\r\n\r\n.taskbox-description {\r\n    font-size: 0.8rem;\r\n    color: black;\r\n}\r\n\r\n.delete-btn {\r\n    padding: 3px;\r\n    background: none;\r\n    border: none;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.delete-btn svg {\r\n    transition: 200ms ease;\r\n}\r\n\r\n.delete-btn svg:hover  {\r\n    transform: scale(1.1);\r\n}\r\n\r\n.custom-checkbox {\r\n    border: 1px solid red;\r\n    border-radius: 50%;\r\n    min-height: 20px;\r\n    min-width: 20px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-shrink: 0;\r\n    transition: 200ms ease;\r\n    cursor: pointer;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked ~ .custom-checkbox {\r\n    background-color: red;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked ~ .custom-checkbox svg {\r\n    fill: white;\r\n}\r\n\r\ninput[type=\"checkbox\"]:checked ~ .task-text p {\r\n    text-decoration: line-through;\r\n    color: rgba(119, 119, 119)\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    display: none;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/taskbox.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n    constructor(title, description, duedate, priority, category, isComplete = false) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.duedate = duedate;\r\n        this.priority = priority;\r\n        this.category = category;\r\n        this.isComplete = isComplete;\r\n    };\r\n};\n\n//# sourceURL=webpack:///./src/Task.js?");

/***/ }),

/***/ "./src/TaskManager.js":
/*!****************************!*\
  !*** ./src/TaskManager.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   TaskManager: () => (/* binding */ TaskManager)\n/* harmony export */ });\nclass TaskManager {\r\n    constructor() {\r\n        this.tasks = JSON.parse(localStorage.getItem(\"tasks\")) || [];\r\n    };\r\n\r\n    addTask(task) {\r\n        this.tasks.push(task);\r\n        this.saveTasks();\r\n    };\r\n\r\n    deleteTask(index) {\r\n        this.tasks.splice(index, 1);\r\n        this.saveTasks();\r\n    };\r\n\r\n    toggleTaskCompletion(index) {\r\n        this.tasks[index].isComplete = !this.tasks[index].isComplete;\r\n        this.saveTasks();\r\n    };\r\n\r\n    saveTasks() {\r\n        localStorage.setItem(\"tasks\", JSON.stringify(this.tasks));\r\n    };\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    };\r\n\r\n    getPendingTasks() {\r\n        return this.tasks.filter(task => !task.isComplete);\r\n    };\r\n\r\n    getTasksByCategory(category) {\r\n        return this.tasks.filter(task => task.category === category);\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/TaskManager.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UI: () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _TaskManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaskManager.js */ \"./src/TaskManager.js\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\r\n\r\n\r\nclass UI {\r\n    constructor() {\r\n        this.taskManager = new _TaskManager_js__WEBPACK_IMPORTED_MODULE_0__.TaskManager();\r\n        this.isPendingView = false;\r\n        this.init();\r\n    };\r\n\r\n    init() {\r\n        this.bindEvents();\r\n        this.renderTasks(this.taskManager.getTasks());\r\n    };\r\n\r\n    bindEvents() {\r\n        document.querySelector(\".newtask-btn\").addEventListener(\"click\", () => this.showForm());\r\n        document.querySelector(\".form-container\").addEventListener(\"submit\", (e) => this.handleFormSubmit(e));\r\n        document.querySelector(\".cancel-btn\").addEventListener(\"click\", () => this.closeForm());\r\n        document.querySelectorAll(\".priority-btn\").forEach(btn => btn.addEventListener(\"click\", () => this.setPriority(btn)));\r\n        document.querySelectorAll(\".options-btns\").forEach(btn => btn.addEventListener(\"click\", () => this.filterTasksByCategory(btn)));\r\n        document.querySelector(\".pending-task\").addEventListener(\"click\", () => this.showPendingTasks());\r\n        document.querySelector(\".today-task\").addEventListener(\"click\", () => this.showAllTasks());\r\n        document.querySelector(\".custom-btn\").addEventListener(\"click\", () => this.showCustomMessage());\r\n        document.querySelectorAll(\".header-btns\").forEach(btn => btn.addEventListener(\"click\", () => this.setActiveHeaderButton(btn)));\r\n    };\r\n\r\n    showForm() {\r\n        document.querySelector(\".form-container\").style.display = \"block\";\r\n        document.querySelector(\".newtask-btn\").style.display = \"none\";\r\n        this.emptyForm();\r\n    };\r\n\r\n    closeForm() {\r\n        document.querySelector(\".form-container\").style.display = \"none\";\r\n        document.querySelector(\".newtask-btn\").style.display = \"flex\";\r\n    };\r\n\r\n    emptyForm() {\r\n        document.querySelector(\"#title\").value = \"\";\r\n        document.querySelector(\"#description\").value = \"\";\r\n        const today = new Date();\r\n        const year = today.getFullYear();\r\n        const month = String(today.getMonth() + 1).padStart(2, '0');\r\n        const day = String(today.getDate()).padStart(2, '0');\r\n        document.querySelector(\"#duedate\").value = `${year}-${month}-${day}`;\r\n    };\r\n\r\n    handleFormSubmit(e) {\r\n        e.preventDefault();\r\n        const title = document.querySelector(\"#title\").value.trim();\r\n        if (title.length > 0) {\r\n            const task = new _Task_js__WEBPACK_IMPORTED_MODULE_1__.Task(\r\n                document.querySelector(\"#title\").value,\r\n                document.querySelector(\"#description\").value,\r\n                document.querySelector(\"#duedate\").value,\r\n                document.querySelector(\".current-priority\").textContent,\r\n                document.querySelector(\"#category\").value\r\n            );\r\n            this.taskManager.addTask(task);\r\n            this.renderTasks(this.taskManager.getTasks());\r\n            this.updateCategory();\r\n            this.closeForm();\r\n        };\r\n    };\r\n\r\n    setPriority(btn) {\r\n        document.querySelectorAll(\".priority-btn\").forEach(otherBtn => otherBtn.classList.remove(\"current-priority\"));\r\n        btn.classList.add(\"current-priority\");\r\n    };\r\n\r\n    filterTasksByCategory(btn) {\r\n        document.querySelectorAll(\".options-btns\").forEach(otherBtn => otherBtn.classList.remove(\"active-btn\"));\r\n        btn.classList.add(\"active-btn\");\r\n        const category = btn.value;\r\n\r\n        let tasks;\r\n        if (this.isPendingView) {\r\n            tasks = category === \"all\"\r\n                ? this.taskManager.getPendingTasks()\r\n                : this.taskManager.getTasksByCategory(category).filter(task => !task.isComplete);\r\n        } else {\r\n            tasks = category === \"all\"\r\n                ? this.taskManager.getTasks()\r\n                : this.taskManager.getTasksByCategory(category);\r\n        };\r\n\r\n        this.renderTasks(tasks);\r\n    };\r\n\r\n    updateCategory() {\r\n        const category = document.querySelector(\"#category\").value;\r\n        document.querySelectorAll(\".options-btns\").forEach(btn => {\r\n            btn.classList.remove(\"active-btn\");\r\n            if (btn.value === category) {\r\n                btn.classList.add(\"active-btn\");\r\n            };\r\n        });\r\n    };\r\n\r\n    renderTasks(tasks) {\r\n        const ul = document.querySelector(\"ul\");\r\n        ul.innerHTML = \"\";\r\n        tasks.forEach((task, index) => {\r\n            const li = document.createElement(\"li\");\r\n            li.className = \"task-box\";\r\n            li.style.backgroundColor = this.getPriorityColor(task.priority);\r\n            li.innerHTML = `\r\n                <input type=\"checkbox\" id=\"todo-${index}\" ${task.isComplete ? 'checked' : ''} />\r\n                <label class=\"custom-checkbox\" for=\"todo-${index}\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"transparent\">\r\n                        <path d=\"M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z\" />\r\n                    </svg>\r\n                </label>\r\n                <label for=\"todo-${index}\" class=\"task-text\">\r\n                    <p class=\"taskbox-category\">${task.category}</p>\r\n                    <p class=\"taskbox-title todo-title\">${task.title}</p>\r\n                    <p class=\"taskbox-description todo-description\">${task.description}</p>\r\n                </label>\r\n                <button class=\"delete-btn\">\r\n                    <svg xmlns=\"http://www.w3.org/2000/svg\" height=\"24px\" viewBox=\"0 -960 960 960\" width=\"24px\" fill=\"red\">\r\n                        <path d=\"M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z\" />\r\n                    </svg>\r\n                </button>\r\n            `;\r\n            ul.appendChild(li);\r\n\r\n            const deleteBtn = li.querySelector(\".delete-btn\");\r\n            deleteBtn.addEventListener(\"click\", () => {\r\n                this.taskManager.deleteTask(index);\r\n                this.renderTasks(this.taskManager.getTasks());\r\n            });\r\n\r\n            const checkBox = li.querySelector(\"input\");\r\n            checkBox.addEventListener(\"change\", () => {\r\n                this.taskManager.toggleTaskCompletion(index);\r\n                this.renderTasks(this.taskManager.getTasks());\r\n            });\r\n        });\r\n    };\r\n\r\n    getPriorityColor(priority) {\r\n        switch (priority) {\r\n            case \"Low\":\r\n                return \"#B2DFB2\"; \r\n            case \"Medium\":\r\n                return \"#FFD699\"; \r\n            case \"High\":\r\n                return \"#FFCACA\";\r\n            default:\r\n                return \"#FFFFFF\"; \r\n        };\r\n    };\r\n\r\n    showPendingTasks() {\r\n        this.isPendingView = true; \r\n        const previewContainer = document.querySelector(\".toppreview-container\");\r\n        previewContainer.style.display = \"none\"; \r\n        const mainElement = document.querySelector(\"main\");\r\n        mainElement.style.paddingTop = \"2rem\";\r\n        const pendingTasks = this.taskManager.getPendingTasks();\r\n        this.renderTasks(pendingTasks);\r\n    };\r\n\r\n    showAllTasks() {\r\n        this.isPendingView = false; \r\n        const previewContainer = document.querySelector(\".toppreview-container\");\r\n        previewContainer.style.display = \"flex\"; \r\n        const mainElement = document.querySelector(\"main\");\r\n        mainElement.style.paddingTop = \"0rem\"; \r\n        this.renderTasks(this.taskManager.getTasks());\r\n    };\r\n\r\n    showCustomMessage() {\r\n        setTimeout(() => {\r\n            alert(\"Sorry, the feature is under construction and the Developer is very lazy.\");\r\n        }, 200);\r\n    };\r\n\r\n    setActiveHeaderButton(btn) {\r\n        document.querySelectorAll(\".header-btns\").forEach(otherBtn => otherBtn.classList.remove(\"headerbtn-line\"));\r\n        btn.classList.add(\"headerbtn-line\");\r\n    };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _taskbox_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskbox.css */ \"./src/taskbox.css\");\n\r\n\r\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    const ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__.UI();\r\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/taskbox.css":
/*!*************************!*\
  !*** ./src/taskbox.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_taskbox_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./taskbox.css */ \"./node_modules/css-loader/dist/cjs.js!./src/taskbox.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_taskbox_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_taskbox_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_taskbox_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_taskbox_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/taskbox.css?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;