"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Metrics/MetricBox.tsx":
/*!**********************************************!*\
  !*** ./src/components/Metrics/MetricBox.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction MetricBox(param) {\n    var text = param.text, description = param.description, count = param.count, isWeight = param.isWeight, color = param.color, data = param.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex h-[6rem] w-[18rem] items-center justify-evenly rounded-lg border lg:h-[4rem] lg:w-[14rem] border-[\".concat(color, \"]\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex cursor-pointer flex-col justify-center text-2xl font-bold lg:text-base\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"capitalize\",\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"capitalize\",\n                        children: description\n                    }, void 0, false, {\n                        fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            isWeight ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl font-bold lg:text-base\",\n                children: [\n                    count,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"ml-1\",\n                        children: \"Kg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                lineNumber: 27,\n                columnNumber: 9\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-4xl font-bold lg:text-base\",\n                children: count\n            }, void 0, false, {\n                fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n                lineNumber: 32,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sai/Documents/sai_files/sai/Fitness-Tracker/src/components/Metrics/MetricBox.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_c = MetricBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MetricBox);\nvar _c;\n$RefreshReg$(_c, \"MetricBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZXRyaWNzL01ldHJpY0JveC50c3guanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFTQSxTQUFTQSxTQUFTLENBQUMsS0FPRixFQUFFO1FBTmpCQyxJQUFJLEdBRGEsS0FPRixDQU5mQSxJQUFJLEVBQ0pDLFdBQVcsR0FGTSxLQU9GLENBTGZBLFdBQVcsRUFDWEMsS0FBSyxHQUhZLEtBT0YsQ0FKZkEsS0FBSyxFQUNMQyxRQUFRLEdBSlMsS0FPRixDQUhmQSxRQUFRLEVBQ1JDLEtBQUssR0FMWSxLQU9GLENBRmZBLEtBQUssRUFDTEMsSUFBSSxHQU5hLEtBT0YsQ0FEZkEsSUFBSTtJQUVKLHFCQUNFLDhEQUFDQyxLQUFHO1FBQ0ZDLFNBQVMsRUFBRSx5R0FBd0csQ0FBUSxNQUFDLENBQVBILEtBQUssRUFBQyxHQUFDLENBQUM7OzBCQUU3SCw4REFBQ0UsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLDZFQUE2RTs7a0NBQzFGLDhEQUFDQyxHQUFDO3dCQUFDRCxTQUFTLEVBQUMsWUFBWTtrQ0FBRVAsSUFBSTs7Ozs7NEJBQUs7a0NBQ3BDLDhEQUFDUSxHQUFDO3dCQUFDRCxTQUFTLEVBQUMsWUFBWTtrQ0FBRU4sV0FBVzs7Ozs7NEJBQUs7Ozs7OztvQkFDdkM7WUFDTEUsUUFBUSxpQkFDUCw4REFBQ0ssR0FBQztnQkFBQ0QsU0FBUyxFQUFDLGlDQUFpQzs7b0JBQzNDTCxLQUFLO2tDQUNOLDhEQUFDTyxNQUFJO3dCQUFDRixTQUFTLEVBQUMsTUFBTTtrQ0FBQyxJQUFFOzs7Ozs0QkFBTzs7Ozs7O29CQUM5QixpQkFFSiw4REFBQ0MsR0FBQztnQkFBQ0QsU0FBUyxFQUFDLGlDQUFpQzswQkFBRUwsS0FBSzs7Ozs7b0JBQUs7Ozs7OztZQUV4RCxDQUNOO0NBQ0g7QUExQlFILEtBQUFBLFNBQVM7QUE0QmxCLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTWV0cmljcy9NZXRyaWNCb3gudHN4P2VmM2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW50ZXJmYWNlIE1ldHJpY0JveFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICBjb3VudDogbnVtYmVyO1xuICBpc1dlaWdodDogYm9vbGVhbjtcbiAgY29sb3I6IHN0cmluZztcbiAgZGF0YT86YW55O1xufVxuXG5mdW5jdGlvbiBNZXRyaWNCb3goe1xuICB0ZXh0LFxuICBkZXNjcmlwdGlvbixcbiAgY291bnQsXG4gIGlzV2VpZ2h0LFxuICBjb2xvcixcbiAgZGF0YVxufTogTWV0cmljQm94UHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2BmbGV4IGgtWzZyZW1dIHctWzE4cmVtXSBpdGVtcy1jZW50ZXIganVzdGlmeS1ldmVubHkgcm91bmRlZC1sZyBib3JkZXIgbGc6aC1bNHJlbV0gbGc6dy1bMTRyZW1dIGJvcmRlci1bJHtjb2xvcn1dYH1cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBjdXJzb3ItcG9pbnRlciBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciB0ZXh0LTJ4bCBmb250LWJvbGQgbGc6dGV4dC1iYXNlJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSdjYXBpdGFsaXplJz57dGV4dH08L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0nY2FwaXRhbGl6ZSc+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge2lzV2VpZ2h0ID8gKFxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCBsZzp0ZXh0LWJhc2UnPlxuICAgICAgICAgIHtjb3VudH1cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J21sLTEnPktnPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtNHhsIGZvbnQtYm9sZCBsZzp0ZXh0LWJhc2UnPntjb3VudH08L3A+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZXRyaWNCb3g7XG4iXSwibmFtZXMiOlsiTWV0cmljQm94IiwidGV4dCIsImRlc2NyaXB0aW9uIiwiY291bnQiLCJpc1dlaWdodCIsImNvbG9yIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Metrics/MetricBox.tsx\n");

/***/ })

});