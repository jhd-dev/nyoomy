self["webpackHotUpdatenyoomyapp"]("main",{

/***/ "./src/client/view/App.tsx":
/*!*********************************!*\
  !*** ./src/client/view/App.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ "./src/client/view/App.scss");
/* harmony import */ var _components_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Routes */ "./src/client/view/components/Routes.tsx");






var App = function App() {
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.ApolloClient({
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.HttpLink({
      uri: window.location.origin + "/graphql",
      credentials: "same-origin",
      fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_1___default())
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_4__.InMemoryCache()
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloProvider, {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "App",
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_Routes__WEBPACK_IMPORTED_MODULE_3__.Routes, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

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


var Routes = function Routes() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    to: "/register"
  }, "Register"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    to: "/login"
  }, "Login")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/",
    component: MainPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/register",
    component: RegistrationPage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    exact: true,
    path: "/login",
    component: LoginPage
  }))));
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3ad8dd2d43592cf3be1c")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9Sb3V0ZXMudHN4Iiwid2VicGFjazovL255b29teWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwibmFtZXMiOlsiQXBwIiwiY2xpZW50IiwiQXBvbGxvQ2xpZW50IiwibGluayIsIkh0dHBMaW5rIiwidXJpIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJjcmVkZW50aWFscyIsImZldGNoIiwiY2FjaGUiLCJJbk1lbW9yeUNhY2hlIiwiUm91dGVzIiwiTWFpblBhZ2UiLCJSZWdpc3RyYXRpb25QYWdlIiwiTG9naW5QYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsR0FBa0IsR0FBRyxTQUFyQkEsR0FBcUIsR0FBTTtBQUU3QixNQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDNUJDLFFBQUksRUFBRSxJQUFJQyxvREFBSixDQUFhO0FBQ2ZDLFNBQUcsRUFBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QixVQURmO0FBRWZDLGlCQUFXLEVBQUUsYUFGRTtBQUdmQyxXQUFLLEVBQUxBLG9EQUFLQTtBQUhVLEtBQWIsQ0FEc0I7QUFNNUJDLFNBQUssRUFBRSxJQUFJQyx5REFBSjtBQU5xQixHQUFqQixDQUFmO0FBU0Esc0JBQ0ksaURBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFWDtBQUF4QixrQkFDSTtBQUFLLG1CQUFZLEtBQWpCO0FBQXVCLGFBQVMsRUFBQztBQUFqQyxrQkFDSSxpREFBQyxzREFBRCxPQURKLENBREosQ0FESjtBQU9ILENBbEJEOztBQW9CQSxpRUFBZUQsR0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBRU8sSUFBTWEsTUFBZ0IsR0FBRyxTQUFuQkEsTUFBbUIsR0FBTTtBQUNsQyxzQkFDSSxpREFBQywrSUFBRCxxQkFDSSwyRUFDSSw4RUFDSSxpREFBQywrSUFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGdCQURKLGVBRUksaURBQUMsK0lBQUQ7QUFBTSxNQUFFLEVBQUM7QUFBVCxhQUZKLENBREosZUFLSSxpREFBQywrSUFBRCxxQkFDSSxpREFBQywrSUFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxHQUFsQjtBQUFzQixhQUFTLEVBQUVDO0FBQWpDLElBREosZUFFSSxpREFBQywrSUFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxXQUFsQjtBQUE4QixhQUFTLEVBQUVDO0FBQXpDLElBRkosZUFHSSxpREFBQywrSUFBRDtBQUFPLFNBQUssTUFBWjtBQUFhLFFBQUksRUFBQyxRQUFsQjtBQUEyQixhQUFTLEVBQUVDO0FBQXRDLElBSEosQ0FMSixDQURKLENBREo7QUFlSCxDQWhCTSxDOzs7Ozs7Ozs7O1dDSFAsc0QiLCJmaWxlIjoibWFpbi44NzE0ZWNjNmI4ZmNlZTRhOWM4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQXBvbGxvQ2xpZW50LCBJbk1lbW9yeUNhY2hlLCBBcG9sbG9Qcm92aWRlciwgSHR0cExpbmsgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCc7XHJcbmltcG9ydCBsb2dvIGZyb20gJy4vbG9nby5zdmcnO1xyXG5pbXBvcnQgJy4vQXBwLnNjc3MnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uUGFnZSBmcm9tICcuL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uUGFnZSc7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJy4vY29tcG9uZW50cy9Sb3V0ZXMnO1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgICAgICAgIHVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL2dyYXBocWxcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgZmV0Y2gsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJBcHBcIiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQnJvd3NlclJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJvdXRlczogUmVhY3QuRkMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCcm93c2VyUm91dGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9yZWdpc3RlclwiPlJlZ2lzdGVyPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPVwiL2xvZ2luXCI+TG9naW48L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgIDxTd2l0Y2g+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvXCIgY29tcG9uZW50PXtNYWluUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9yZWdpc3RlclwiIGNvbXBvbmVudD17UmVnaXN0cmF0aW9uUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8Um91dGUgZXhhY3QgcGF0aD1cIi9sb2dpblwiIGNvbXBvbmVudD17TG9naW5QYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Td2l0Y2g+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnJvd3NlclJvdXRlcj5cclxuICAgIClcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiM2FkOGRkMmQ0MzU5MmNmM2JlMWNcIikiXSwic291cmNlUm9vdCI6IiJ9