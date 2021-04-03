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
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/core/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cross_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.scss */ "./src/client/view/App.scss");
/* harmony import */ var _components_CreateUser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CreateUser */ "./src/client/view/components/CreateUser.tsx");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes */ "./src/client/view/Routes.tsx");







var App = function App() {
  var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.ApolloClient({
    link: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__.HttpLink({
      uri: window.location.origin + "/graphql",
      credentials: "same-origin",
      fetch: (cross_fetch__WEBPACK_IMPORTED_MODULE_1___default())
    }),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_5__.InMemoryCache()
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__.ApolloProvider, {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    "data-testid": "App",
    className: "App"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_4__.Routes, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CreateUser__WEBPACK_IMPORTED_MODULE_3__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/client/view/Routes.tsx":
/*!************************************!*\
  !*** ./src/client/view/Routes.tsx ***!
  \************************************/
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
/******/ 		__webpack_require__.h = () => ("aa5253d09ace20b8fa23")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvUm91dGVzLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsIlJvdXRlcyIsIk1haW5QYWdlIiwiUmVnaXN0cmF0aW9uUGFnZSIsIkxvZ2luUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEdBQWtCLEdBQUcsU0FBckJBLEdBQXFCLEdBQU07QUFFN0IsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzVCQyxRQUFJLEVBQUUsSUFBSUMsb0RBQUosQ0FBYTtBQUNmQyxTQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsVUFEZjtBQUVmQyxpQkFBVyxFQUFFLGFBRkU7QUFHZkMsV0FBSyxFQUFMQSxvREFBS0E7QUFIVSxLQUFiLENBRHNCO0FBTTVCQyxTQUFLLEVBQUUsSUFBSUMseURBQUo7QUFOcUIsR0FBakIsQ0FBZjtBQVNBLHNCQUNJLGlEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRVg7QUFBeEIsa0JBQ0k7QUFBSyxtQkFBWSxLQUFqQjtBQUF1QixhQUFTLEVBQUM7QUFBakMsa0JBQ0ksaURBQUMsMkNBQUQsT0FESixlQUVJLGlEQUFDLDJEQUFELE9BRkosQ0FESixDQURKO0FBUUgsQ0FuQkQ7O0FBcUJBLGlFQUFlRCxHQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQ0E7QUFFTyxJQUFNYSxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQ2xDLHNCQUNJLGlEQUFDLCtJQUFELHFCQUNJLDJFQUNJLDhFQUNJLGlEQUFDLCtJQUFEO0FBQU0sTUFBRSxFQUFDO0FBQVQsZ0JBREosZUFFSSxpREFBQywrSUFBRDtBQUFNLE1BQUUsRUFBQztBQUFULGFBRkosQ0FESixlQUtJLGlEQUFDLCtJQUFELHFCQUNJLGlEQUFDLCtJQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLEdBQWxCO0FBQXNCLGFBQVMsRUFBRUM7QUFBakMsSUFESixlQUVJLGlEQUFDLCtJQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLFdBQWxCO0FBQThCLGFBQVMsRUFBRUM7QUFBekMsSUFGSixlQUdJLGlEQUFDLCtJQUFEO0FBQU8sU0FBSyxNQUFaO0FBQWEsUUFBSSxFQUFDLFFBQWxCO0FBQTJCLGFBQVMsRUFBRUM7QUFBdEMsSUFISixDQUxKLENBREosQ0FESjtBQWVILENBaEJNLEM7Ozs7Ozs7Ozs7V0NIUCxzRCIsImZpbGUiOiJtYWluLmVhNjBlMzViMjdhZmNhMGFjZDI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2Zyc7XHJcbmltcG9ydCAnLi9BcHAuc2Nzcyc7XHJcbmltcG9ydCBDcmVhdGVVc2VyIGZyb20gJy4vY29tcG9uZW50cy9DcmVhdGVVc2VyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi9Sb3V0ZXMnO1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgICAgICAgIHVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL2dyYXBocWxcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgZmV0Y2gsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJBcHBcIiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXMgLz5cclxuICAgICAgICAgICAgICAgIDxDcmVhdGVVc2VyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcclxuXHJcbmV4cG9ydCBjb25zdCBSb3V0ZXM6IFJlYWN0LkZDID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QnJvd3NlclJvdXRlcj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgdG89XCIvcmVnaXN0ZXJcIj5SZWdpc3RlcjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayB0bz1cIi9sb2dpblwiPkxvZ2luPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8U3dpdGNoPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSb3V0ZSBleGFjdCBwYXRoPVwiL1wiIGNvbXBvbmVudD17TWFpblBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvcmVnaXN0ZXJcIiBjb21wb25lbnQ9e1JlZ2lzdHJhdGlvblBhZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJvdXRlIGV4YWN0IHBhdGg9XCIvbG9naW5cIiBjb21wb25lbnQ9e0xvZ2luUGFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Jyb3dzZXJSb3V0ZXI+XHJcbiAgICApXHJcbn07XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImFhNTI1M2QwOWFjZTIwYjhmYTIzXCIpIl0sInNvdXJjZVJvb3QiOiIifQ==