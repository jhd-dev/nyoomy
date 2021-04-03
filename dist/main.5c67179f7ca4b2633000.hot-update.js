self["webpackHotUpdatenyoomyapp"]("main",{

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
    type: "password",
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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e2c67a9d8d3d8a965f67")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIlJlZ2lzdHJhdGlvblBhZ2UiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9VU0VSIiwiY3JlYXRlVXNlciIsImVycm9yIiwiY29uc29sZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQStCLEdBQUcsU0FBbENBLGdCQUFrQyxHQUFNO0FBQUEsa0JBRXpCQywrQ0FBUSxDQUFDLEVBQUQsQ0FGaUI7QUFBQTtBQUFBLE1BRTFDQyxJQUYwQztBQUFBLE1BRXBDQyxPQUZvQzs7QUFBQSxtQkFHakJGLCtDQUFRLENBQUMsRUFBRCxDQUhTO0FBQUE7QUFBQSxNQUcxQ0csUUFIMEM7QUFBQSxNQUdoQ0MsV0FIZ0M7O0FBQUEsbUJBSWpCSiwrQ0FBUSxDQUFDLEVBQUQsQ0FKUztBQUFBO0FBQUEsTUFJMUNLLFFBSjBDO0FBQUEsTUFJaENDLFdBSmdDOztBQUFBLHFCQU1qQkMsMkRBQVcsQ0FBQ0MsMkRBQUQsQ0FOTTtBQUFBO0FBQUEsTUFNMUNDLFVBTjBDO0FBQUEsTUFNNUJDLEtBTjRCLG9CQU01QkEsS0FONEI7O0FBT2pELE1BQUlBLEtBQUosRUFBV0MsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFFWCxzQkFDSTtBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNJO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxlQUFXLEVBQUMsTUFGaEI7QUFHSSxZQUFRLEVBQUUsa0JBQUFFLENBQUM7QUFBQSxhQUFJVixPQUFPLENBQUNVLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFBQTtBQUhmLElBREosZUFNSTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksZUFBVyxFQUFDLFVBRmhCO0FBR0ksWUFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEsYUFBSVIsV0FBVyxDQUFDUSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFIZixJQU5KLGVBV0k7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUVJLGVBQVcsRUFBQyxVQUZoQjtBQUdJLFlBQVEsRUFBRSxrQkFBQUYsQ0FBQztBQUFBLGFBQUlOLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBO0FBSGYsSUFYSixlQWdCSTtBQUNJLFdBQU8sRUFBRTtBQUFBLGFBQU1MLFVBQVUsQ0FBQztBQUN0Qk0saUJBQVMsRUFBRTtBQUNQZCxjQUFJLEVBQUpBLElBRE87QUFFUEUsa0JBQVEsRUFBUkEsUUFGTztBQUdQRSxrQkFBUSxFQUFSQTtBQUhPO0FBRFcsT0FBRCxDQUFoQjtBQUFBO0FBRGIsbUJBaEJKLENBREo7QUE0QkgsQ0FyQ00sQzs7Ozs7Ozs7OztXQ0pQLHNEIiwiZmlsZSI6Im1haW4uNWM2NzE3OWY3Y2E0YjI2MzMwMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCB7IENSRUFURV9VU0VSIH0gZnJvbSAnLi4vLi4vZ3JhcGhxbC9NdXRhdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IFJlZ2lzdHJhdGlvblBhZ2U6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbY3JlYXRlVXNlciwgeyBlcnJvciB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9VU0VSKTtcclxuICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVVzZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjcmVhdGVVc2VyKHtcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgPkNyZWF0ZSB1c2VyPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJlMmM2N2E5ZDhkM2Q4YTk2NWY2N1wiKSJdLCJzb3VyY2VSb290IjoiIn0=