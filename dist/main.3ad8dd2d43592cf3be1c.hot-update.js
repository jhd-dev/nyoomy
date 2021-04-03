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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("256165c52647c5a42ec5")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEdBQWtCLEdBQUcsU0FBckJBLEdBQXFCLEdBQU07QUFFN0IsTUFBTUMsTUFBTSxHQUFHLElBQUlDLHdEQUFKLENBQWlCO0FBQzVCQyxRQUFJLEVBQUUsSUFBSUMsb0RBQUosQ0FBYTtBQUNmQyxTQUFHLEVBQUVDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsR0FBeUIsVUFEZjtBQUVmQyxpQkFBVyxFQUFFLGFBRkU7QUFHZkMsV0FBSyxFQUFMQSxvREFBS0E7QUFIVSxLQUFiLENBRHNCO0FBTTVCQyxTQUFLLEVBQUUsSUFBSUMseURBQUo7QUFOcUIsR0FBakIsQ0FBZjtBQVNBLHNCQUNJLGlEQUFDLDBEQUFEO0FBQWdCLFVBQU0sRUFBRVg7QUFBeEIsa0JBQ0k7QUFBSyxtQkFBWSxLQUFqQjtBQUF1QixhQUFTLEVBQUM7QUFBakMsa0JBQ0ksaURBQUMsc0RBQUQsT0FESixDQURKLENBREo7QUFPSCxDQWxCRDs7QUFvQkEsaUVBQWVELEdBQWYsRTs7Ozs7Ozs7OztXQzNCQSxzRCIsImZpbGUiOiJtYWluLjNhZDhkZDJkNDM1OTJjZjNiZTFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcclxuaW1wb3J0ICcuL0FwcC5zY3NzJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvUm91dGVzJztcclxuXHJcbmNvbnN0IEFwcDogUmVhY3QuRkM8YW55PiA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgICAgICBsaW5rOiBuZXcgSHR0cExpbmsoe1xyXG4gICAgICAgICAgICB1cmk6IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4gKyBcIi9ncmFwaHFsXCIsXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXHJcbiAgICAgICAgICAgIGZldGNoLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXBvbGxvUHJvdmlkZXIgY2xpZW50PXtjbGllbnR9PlxyXG4gICAgICAgICAgICA8ZGl2IGRhdGEtdGVzdGlkPVwiQXBwXCIgY2xhc3NOYW1lPVwiQXBwXCI+XHJcbiAgICAgICAgICAgICAgICA8Um91dGVzIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQXBvbGxvUHJvdmlkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjI1NjE2NWM1MjY0N2M1YTQyZWM1XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==