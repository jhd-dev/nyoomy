self["webpackHotUpdatenyoomyapp"]("main",{

/***/ "./src/client/view/App.tsx":
/*!*********************************!*\
  !*** ./src/client/view/App.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8b2261a44337cad83021")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvQXBwLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkFwcCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImxpbmsiLCJIdHRwTGluayIsInVyaSIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRU8sSUFBTUEsR0FBa0IsR0FBRyxTQUFyQkEsR0FBcUIsR0FBTTtBQUVwQyxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsd0RBQUosQ0FBaUI7QUFDNUJDLFFBQUksRUFBRSxJQUFJQyxvREFBSixDQUFhO0FBQ2ZDLFNBQUcsRUFBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixHQUF5QixVQURmO0FBRWZDLGlCQUFXLEVBQUUsYUFGRTtBQUdmQyxXQUFLLEVBQUxBLG9EQUFLQTtBQUhVLEtBQWIsQ0FEc0I7QUFNNUJDLFNBQUssRUFBRSxJQUFJQyx5REFBSjtBQU5xQixHQUFqQixDQUFmO0FBU0Esc0JBQ0ksaURBQUMsMERBQUQ7QUFBZ0IsVUFBTSxFQUFFWDtBQUF4QixrQkFDSTtBQUFLLG1CQUFZLEtBQWpCO0FBQXVCLGFBQVMsRUFBQztBQUFqQyxrQkFDSSxpREFBQyxzREFBRCxPQURKLENBREosQ0FESjtBQU9ILENBbEJNLEM7Ozs7Ozs7Ozs7V0NQUCxzRCIsImZpbGUiOiJtYWluLjI1NjE2NWM1MjY0N2M1YTQyZWM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUsIEFwb2xsb1Byb3ZpZGVyLCBIdHRwTGluayB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcclxuaW1wb3J0ICcuL0FwcC5zY3NzJztcclxuaW1wb3J0IFJlZ2lzdHJhdGlvblBhZ2UgZnJvbSAnLi9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuL2NvbXBvbmVudHMvUm91dGVzJztcclxuXHJcbmV4cG9ydCBjb25zdCBBcHA6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XHJcbiAgICAgICAgbGluazogbmV3IEh0dHBMaW5rKHtcclxuICAgICAgICAgICAgdXJpOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luICsgXCIvZ3JhcGhxbFwiLFxyXG4gICAgICAgICAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxyXG4gICAgICAgICAgICBmZXRjaCxcclxuICAgICAgICB9KSxcclxuICAgICAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwb2xsb1Byb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cclxuICAgICAgICAgICAgPGRpdiBkYXRhLXRlc3RpZD1cIkFwcFwiIGNsYXNzTmFtZT1cIkFwcFwiPlxyXG4gICAgICAgICAgICAgICAgPFJvdXRlcyAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxyXG4gICAgKTtcclxufTtcclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGIyMjYxYTQ0MzM3Y2FkODMwMjFcIikiXSwic291cmNlUm9vdCI6IiJ9