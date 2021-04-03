self["webpackHotUpdatenyoomyapp"]("main",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArrayLimit)
/* harmony export */ });
function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _slicedToArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");




function _slicedToArray(arr, i) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr, i) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr, i) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _taggedTemplateLiteral)
/* harmony export */ });
function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./src/client/graphql/Mutations.ts":
/*!*****************************************!*\
  !*** ./src/client/graphql/Mutations.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CREATE_USER": () => (/* binding */ CREATE_USER)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/index.js");


var _templateObject;


var CREATE_USER = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_1__.gql)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__.default)(["\n    mutation createUser($name: String!, $username: String!, $password: String!) {\n        createUser(name: $name, username: $username, password: $password) {\n            id\n            name\n            username\n        }\n    }\n"])));

/***/ }),

/***/ "./src/client/view/components/LoginPage.tsx":
/*!**************************************************!*\
  !*** ./src/client/view/components/LoginPage.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var LoginPage = function LoginPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
};

/***/ }),

/***/ "./src/client/view/components/MainPage.tsx":
/*!*************************************************!*\
  !*** ./src/client/view/components/MainPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var MainPage = function MainPage() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
};

/***/ }),

/***/ "./src/client/view/components/RegistrationPage.tsx":
/*!*********************************************************!*\
  !*** ./src/client/view/components/RegistrationPage.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationPage": () => (/* binding */ RegistrationPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_Mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/Mutations */ "./src/client/graphql/Mutations.ts");




var RegistrationPage = function RegistrationPage() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      username = _useState4[0],
      setUsername = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      password = _useState6[0],
      setPassword = _useState6[1];

  var _useMutation = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useMutation)(_graphql_Mutations__WEBPACK_IMPORTED_MODULE_2__.CREATE_USER),
      _useMutation2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useMutation, 2),
      createUser = _useMutation2[0],
      error = _useMutation2[1].error;

  if (error) console.error(error);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "createUser"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    placeholder: "name",
    onChange: function onChange(e) {
      return setName(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    placeholder: "username",
    onChange: function onChange(e) {
      return setUsername(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("input", {
    type: "text",
    placeholder: "password",
    onChange: function onChange(e) {
      return setPassword(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    onClick: function onClick() {
      return createUser({
        variables: {
          name: name,
          username: username,
          password: password
        }
      });
    }
  }, "Create user"));
};

/***/ }),

/***/ "./src/client/view/components/Routes.tsx":
/*!***********************************************!*\
  !*** ./src/client/view/components/Routes.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Routes": () => (/* binding */ Routes)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _MainPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainPage */ "./src/client/view/components/MainPage.tsx");
/* harmony import */ var _RegistrationPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegistrationPage */ "./src/client/view/components/RegistrationPage.tsx");
/* harmony import */ var _LoginPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LoginPage */ "./src/client/view/components/LoginPage.tsx");





var Routes = function Routes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    to: "/register"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    to: "/login"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/app",
    component: _MainPage__WEBPACK_IMPORTED_MODULE_2__.MainPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/register",
    component: _RegistrationPage__WEBPACK_IMPORTED_MODULE_3__.RegistrationPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/login",
    component: _LoginPage__WEBPACK_IMPORTED_MODULE_4__.LoginPage
  }))));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("5c67179f7ca4b2633000")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vbnlvb215YXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovL255b29teWFwcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9ub25JdGVyYWJsZVJlc3QuanMiLCJ3ZWJwYWNrOi8vbnlvb215YXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbnlvb215YXBwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vbnlvb215YXBwLy4vc3JjL2NsaWVudC9ncmFwaHFsL011dGF0aW9ucy50cyIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9Mb2dpblBhZ2UudHN4Iiwid2VicGFjazovL255b29teWFwcC8uL3NyYy9jbGllbnQvdmlldy9jb21wb25lbnRzL01haW5QYWdlLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9Sb3V0ZXMudHN4Iiwid2VicGFjazovL255b29teWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQ1JFQVRFX1VTRVIiLCJncWwiLCJMb2dpblBhZ2UiLCJNYWluUGFnZSIsIlJlZ2lzdHJhdGlvblBhZ2UiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VNdXRhdGlvbiIsImNyZWF0ZVVzZXIiLCJlcnJvciIsImNvbnNvbGUiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJ2YXJpYWJsZXMiLCJSb3V0ZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmOztBQUVBLHdDQUF3QyxTQUFTO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNSZTtBQUNmO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDLCtCQUErQjtBQUM1RTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGaUQ7QUFDWTtBQUNZO0FBQ3RCO0FBQ3BDO0FBQ2YsU0FBUywyREFBYyxTQUFTLGlFQUFvQixZQUFZLHVFQUEwQixZQUFZLDREQUFlO0FBQ3JILEM7Ozs7Ozs7Ozs7Ozs7OztBQ05lO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDZEQUFnQjtB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YUFBUyxFQUFFRixpREFBU0E7QUFBL0MsSUFISixDQUxKLENBREosQ0FESjtBQWVILENBaEJNLEM7Ozs7Ozs7Ozs7V0NOUCxzRCIsImZpbGUiOiJtYWluLmFkOTIxZjZiOTM5NzlmMTBkMThjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgIShTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpKSByZXR1cm47XG4gIHZhciBfYXJyID0gW107XG4gIHZhciBfbiA9IHRydWU7XG4gIHZhciBfZCA9IGZhbHNlO1xuICB2YXIgX2UgPSB1bmRlZmluZWQ7XG5cbiAgdHJ5IHtcbiAgICBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7XG4gICAgICBfYXJyLnB1c2goX3MudmFsdWUpO1xuXG4gICAgICBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBfZCA9IHRydWU7XG4gICAgX2UgPSBlcnI7XG4gIH0gZmluYWxseSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgaWYgKF9kKSB0aHJvdyBfZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gX2Fycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheUxpbWl0IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gIGlmICghcmF3KSB7XG4gICAgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTtcbiAgfVxuXG4gIHJldHVybiBPYmplY3QuZnJlZXplKE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHN0cmluZ3MsIHtcbiAgICByYXc6IHtcbiAgICAgIHZhbHVlOiBPYmplY3QuZnJlZXplKHJhdylcbiAgICB9XG4gIH0pKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENSRUFURV9VU0VSID0gZ3FsYFxyXG4gICAgbXV0YXRpb24gY3JlYXRlVXNlcigkbmFtZTogU3RyaW5nISwgJHVzZXJuYW1lOiBTdHJpbmchLCAkcGFzc3dvcmQ6IFN0cmluZyEpIHtcclxuICAgICAgICBjcmVhdGVVc2VyKG5hbWU6ICRuYW1lLCB1c2VybmFtZTogJHVzZXJuYW1lLCBwYXNzd29yZDogJHBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIG5hbWVcclxuICAgICAgICAgICAgdXNlcm5hbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgY29uc3QgTG9naW5QYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIHJldHVybiA8PjwvPjtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluUGFnZTogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gPD48Lz47XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IENSRUFURV9VU0VSIH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9NdXRhdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvblBhZ2U6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbY3JlYXRlVXNlciwgeyBlcnJvciB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9VU0VSKTtcclxuICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVVzZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA+Q3JlYXRlIHVzZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuaW1wb3J0IHsgTWFpblBhZ2UgfSBmcm9tICcuL01haW5QYWdlJztcclxuaW1wb3J0IHsgUmVnaXN0cmF0aW9uUGFnZSB9IGZyb20gJy4vUmVnaXN0cmF0aW9uUGFnZSc7XHJcbmltcG9ydCB7IExvZ2luUGFnZSB9IGZyb20gJy4vTG9naW5QYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0ZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL2FwcFwiIGNvbXBvbmVudD17TWFpblBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdHJhdGlvblBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApXHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjVjNjcxNzlmN2NhNGIyNjMzMDAwXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==