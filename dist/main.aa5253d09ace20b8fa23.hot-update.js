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
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Routes */ "./src/client/view/Routes.tsx");






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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Routes__WEBPACK_IMPORTED_MODULE_3__.Routes, null)));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("31739621bbb05cb9eda1")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLEdBQWtCLEdBQUcsU0FBckJBLEdBQXFCLEdBQU07QUFFN0IsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzVCQyxRQUFJLEVBQUUsSUFBSUMsb0RBQUosQ0FBYTtBQUNmQyxTQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsVUFEZjtBQUVmQyxpQkFBVyxFQUFFLGFBRkU7QUFHZkMsV0FBSyxFQUFMQSxvREFBS0E7QUFIVSxLQUFiLENBRHNCO0FBTTVCQyxTQUFLLEVBQUUsSUFBSUMseURBQUo7QUFOcUIsR0FBakIsQ0FBZjtBQVNBLHNCQUNJLGlEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRVg7QUFBeEIsa0JBQ0k7QUFBSyxtQkFBWSxLQUFqQjtBQUF1QixhQUFTLEVBQUM7QUFBakMsa0JBQ0ksaURBQUMsMkNBQUQsT0FESixDQURKLENBREo7QUFPSCxDQWxCRDs7QUFvQkEsaUVBQWVELEdBQWYsRTs7Ozs7Ozs7OztXQzVCQSxzRCIsImZpbGUiOiJtYWluLmFhNTI1M2QwOWFjZTIwYjhmYTIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnLi9sb2dvLnN2Zyc7XHJcbmltcG9ydCAnLi9BcHAuc2Nzcyc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25QYWdlIGZyb20gJy4vY29tcG9uZW50cy9DcmVhdGVVc2VyJztcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi9Sb3V0ZXMnO1xyXG5cclxuY29uc3QgQXBwOiBSZWFjdC5GQzxhbnk+ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgICAgIGxpbms6IG5ldyBIdHRwTGluayh7XHJcbiAgICAgICAgICAgIHVyaTogd2luZG93LmxvY2F0aW9uLm9yaWdpbiArIFwiL2dyYXBocWxcIixcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcclxuICAgICAgICAgICAgZmV0Y2gsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKCksXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgZGF0YS10ZXN0aWQ9XCJBcHBcIiBjbGFzc05hbWU9XCJBcHBcIj5cclxuICAgICAgICAgICAgICAgIDxSb3V0ZXMgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcG9sbG9Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMzE3Mzk2MjFiYmIwNWNiOWVkYTFcIikiXSwic291cmNlUm9vdCI6IiJ9