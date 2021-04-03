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
/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.svg */ "./src/client/view/logo.svg");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.scss */ "./src/client/view/App.scss");
/* harmony import */ var _components_CreateUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/CreateUser */ "./src/client/view/components/CreateUser.tsx");







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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: _logo_svg__WEBPACK_IMPORTED_MODULE_2__,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Edit ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("code", null, "src/App.js"), " and save to reload."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_CreateUser__WEBPACK_IMPORTED_MODULE_4__.default, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0bdf8b668d64a94ec7fd")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxHQUFrQixHQUFHLFNBQXJCQSxHQUFxQixHQUFNO0FBRTdCLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyx3REFBSixDQUFpQjtBQUM1QkMsUUFBSSxFQUFFLElBQUlDLG9EQUFKLENBQWE7QUFDZkMsU0FBRyxFQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQWhCLEdBQXlCLFVBRGY7QUFFZkMsaUJBQVcsRUFBRSxhQUZFO0FBR2ZDLFdBQUssRUFBTEEsb0RBQUtBO0FBSFUsS0FBYixDQURzQjtBQU01QkMsU0FBSyxFQUFFLElBQUlDLHlEQUFKO0FBTnFCLEdBQWpCLENBQWY7QUFTQSxzQkFDSSxpREFBQywwREFBRDtBQUFnQixVQUFNLEVBQUVYO0FBQXhCLGtCQUNJO0FBQUssbUJBQVksS0FBakI7QUFBdUIsYUFBUyxFQUFDO0FBQWpDLGtCQUNJO0FBQVEsYUFBUyxFQUFDO0FBQWxCLGtCQUNJO0FBQUssT0FBRyxFQUFFWSxzQ0FBVjtBQUFnQixhQUFTLEVBQUMsVUFBMUI7QUFBcUMsT0FBRyxFQUFDO0FBQXpDLElBREosZUFFSSxrRkFDUyw0RUFEVCx5QkFGSixlQUtJO0FBQ0ksYUFBUyxFQUFDLFVBRGQ7QUFFSSxRQUFJLEVBQUMscUJBRlQ7QUFHSSxVQUFNLEVBQUMsUUFIWDtBQUlJLE9BQUcsRUFBQztBQUpSLG1CQUxKLENBREosZUFlSSxpREFBQywyREFBRCxPQWZKLENBREosQ0FESjtBQXFCSCxDQWhDRDs7QUFrQ0EsaUVBQWViLEdBQWYsRTs7Ozs7Ozs7OztXQ3pDQSxzRCIsImZpbGUiOiJtYWluLjJhNjQ0NWQwNjBmMThiMzYyNThlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2Zyc7XHJcbmltcG9ydCAnLi9BcHAuc2Nzcyc7XHJcbmltcG9ydCBDcmVhdGVVc2VyIGZyb20gJy4vY29tcG9uZW50cy9DcmVhdGVVc2VyJztcclxuXHJcbmNvbnN0IEFwcDogUmVhY3QuRkM8YW55PiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgICAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICAgICAgICB1cmk6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9ncmFwaHFsXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIGZldGNoLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiQXBwXCIgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIkFwcC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17bG9nb30gY2xhc3NOYW1lPVwiQXBwLWxvZ29cIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgRWRpdCA8Y29kZT5zcmMvQXBwLmpzPC9jb2RlPiBhbmQgc2F2ZSB0byByZWxvYWQuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIkFwcC1saW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vcmVhY3Rqcy5vcmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIExlYXJuIFJlYWN0XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8Q3JlYXRlVXNlciAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYmRmOGI2NjhkNjRhOTRlYzdmZFwiKSJdLCJzb3VyY2VSb290IjoiIn0=