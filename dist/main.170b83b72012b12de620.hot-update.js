self["webpackHotUpdatenyoomyapp"]("main",{

/***/ "./src/client/view/components/CreateUser.tsx":
/*!***************************************************!*\
  !*** ./src/client/view/components/CreateUser.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _graphql_Mutations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/Mutations */ "./src/client/graphql/Mutations.ts");





var CreateUser = function CreateUser() {
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateUser);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("12a5dd845fc876b8a8a6")
/******/ 	})();
/******/ 	
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueW9vbXlhcHAvLi9zcmMvY2xpZW50L3ZpZXcvY29tcG9uZW50cy9DcmVhdGVVc2VyLnRzeCIsIndlYnBhY2s6Ly9ueW9vbXlhcHAvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sIm5hbWVzIjpbIkNyZWF0ZVVzZXIiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwidXNlcm5hbWUiLCJzZXRVc2VybmFtZSIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VNdXRhdGlvbiIsIkNSRUFURV9VU0VSIiwiY3JlYXRlVXNlciIsImVycm9yIiwiY29uc29sZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInZhcmlhYmxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQXlCLEdBQUcsU0FBNUJBLFVBQTRCLEdBQU07QUFBQSxrQkFFWkMsK0NBQVEsQ0FBQyxFQUFELENBRkk7QUFBQTtBQUFBLE1BRTdCQyxJQUY2QjtBQUFBLE1BRXZCQyxPQUZ1Qjs7QUFBQSxtQkFHSkYsK0NBQVEsQ0FBQyxFQUFELENBSEo7QUFBQTtBQUFBLE1BRzdCRyxRQUg2QjtBQUFBLE1BR25CQyxXQUhtQjs7QUFBQSxtQkFJSkosK0NBQVEsQ0FBQyxFQUFELENBSko7QUFBQTtBQUFBLE1BSTdCSyxRQUo2QjtBQUFBLE1BSW5CQyxXQUptQjs7QUFBQSxxQkFNSkMsMkRBQVcsQ0FBQ0MsMkRBQUQsQ0FOUDtBQUFBO0FBQUEsTUFNN0JDLFVBTjZCO0FBQUEsTUFNZkMsS0FOZSxvQkFNZkEsS0FOZTs7QUFPcEMsTUFBSUEsS0FBSixFQUFXQyxPQUFPLENBQUNELEtBQVIsQ0FBY0EsS0FBZDtBQUVYLHNCQUNJO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0k7QUFDSSxRQUFJLEVBQUMsTUFEVDtBQUVJLGVBQVcsRUFBQyxNQUZoQjtBQUdJLFlBQVEsRUFBRSxrQkFBQUUsQ0FBQztBQUFBLGFBQUlWLE9BQU8sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUFBO0FBSGYsSUFESixlQU1JO0FBQ0ksUUFBSSxFQUFDLE1BRFQ7QUFFSSxlQUFXLEVBQUMsVUFGaEI7QUFHSSxZQUFRLEVBQUUsa0JBQUFGLENBQUM7QUFBQSxhQUFJUixXQUFXLENBQUNRLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQWY7QUFBQTtBQUhmLElBTkosZUFXSTtBQUNJLFFBQUksRUFBQyxNQURUO0FBRUksZUFBVyxFQUFDLFVBRmhCO0FBR0ksWUFBUSxFQUFFLGtCQUFBRixDQUFDO0FBQUEsYUFBSU4sV0FBVyxDQUFDTSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUE7QUFIZixJQVhKLGVBZ0JJO0FBQ0ksV0FBTyxFQUFFO0FBQUEsYUFBTUwsVUFBVSxDQUFDO0FBQ3RCTSxpQkFBUyxFQUFFO0FBQ1BkLGNBQUksRUFBSkEsSUFETztBQUVQRSxrQkFBUSxFQUFSQSxRQUZPO0FBR1BFLGtCQUFRLEVBQVJBO0FBSE87QUFEVyxPQUFELENBQWhCO0FBQUE7QUFEYixtQkFoQkosQ0FESjtBQTRCSCxDQXJDRDs7QUF1Q0EsaUVBQWVOLFVBQWYsRTs7Ozs7Ozs7OztXQzNDQSxzRCIsImZpbGUiOiJtYWluLjE3MGI4M2I3MjAxMmIxMmRlNjIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5pbXBvcnQgeyBDUkVBVEVfVVNFUiB9IGZyb20gJy4uLy4uL2dyYXBocWwvTXV0YXRpb25zJztcclxuXHJcbmNvbnN0IENyZWF0ZVVzZXI6IFJlYWN0LkZDPGFueT4gPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgICBjb25zdCBbY3JlYXRlVXNlciwgeyBlcnJvciB9XSA9IHVzZU11dGF0aW9uKENSRUFURV9VU0VSKTtcclxuICAgIGlmIChlcnJvcikgY29uc29sZS5lcnJvcihlcnJvcik7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZVVzZXJcIj5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRVc2VybmFtZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNyZWF0ZVVzZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VybmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA+Q3JlYXRlIHVzZXI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVVc2VyOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjEyYTVkZDg0NWZjODc2YjhhOGE2XCIpIl0sInNvdXJjZVJvb3QiOiIifQ==