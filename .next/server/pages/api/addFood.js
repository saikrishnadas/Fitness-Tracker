"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addFood";
exports.ids = ["pages/api/addFood"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./src/pages/api/addFood.ts":
/*!**********************************!*\
  !*** ./src/pages/api/addFood.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addFood)\n/* harmony export */ });\n/* harmony import */ var _utils_mongo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/mongo */ \"(api)/./utils/mongo.js\");\n\nasync function addFood(req, res) {\n    const { method  } = req;\n    await (0,_utils_mongo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    res.status(200).json({\n        message: \"The api test call works\"\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2FkZEZvb2QudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJNkM7QUFFOUIsZUFBZUMsT0FBTyxDQUFDQyxHQUFrQixFQUFDQyxHQUF3QixFQUFFO0lBQy9FLE1BQU0sRUFBQ0MsTUFBTSxHQUFDLEdBQUdGLEdBQUc7SUFDcEIsTUFBTUYsd0RBQVMsRUFBRSxDQUFDO0lBQ2xCRyxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1FBQUVDLE9BQU8sRUFBQyx5QkFBeUI7S0FBRSxDQUFDO0NBQzlEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtbmV4dGpzLXRhaWx3aW5kLXN0YXJ0ZXIvLi9zcmMvcGFnZXMvYXBpL2FkZEZvb2QudHM/Nzc5YSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzIEFQSSByb3V0ZSBzdXBwb3J0OiBodHRwczovL25leHRqcy5vcmcvZG9jcy9hcGktcm91dGVzL2ludHJvZHVjdGlvblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IEZvb2QgZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Gb29kXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9tb25nb1wiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBhZGRGb29kKHJlcTpOZXh0QXBpUmVxdWVzdCxyZXM6TmV4dEFwaVJlc3BvbnNlPGFueT4pIHtcbiAgICBjb25zdCB7bWV0aG9kfSA9IHJlcTtcbiAgICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6XCJUaGUgYXBpIHRlc3QgY2FsbCB3b3Jrc1wiIH0pXG59Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsImFkZEZvb2QiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/addFood.ts\n");

/***/ }),

/***/ "(api)/./utils/mongo.js":
/*!************************!*\
  !*** ./utils/mongo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose1)=>{\n            return mongoose1;\n        });\n    }\n    cached.conn = await cached.promise;\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9tb25nby5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsV0FBVyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsV0FBVztBQUUzQyxJQUFJLENBQUNBLFdBQVcsRUFBRTtJQUNoQixNQUFNLElBQUlHLEtBQUssQ0FDYixzRUFBc0UsQ0FDdkUsQ0FBQztDQUNIO0FBRUQ7Ozs7R0FJRyxDQUNILElBQUlDLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssTUFBTSxFQUFFO0lBQ1hBLE1BQU0sR0FBR0MsTUFBTSxDQUFDTixRQUFRLEdBQUc7UUFBRU8sSUFBSSxFQUFFLElBQUk7UUFBRUMsT0FBTyxFQUFFLElBQUk7S0FBRSxDQUFDO0NBQzFEO0FBRUQsZUFBZUMsU0FBUyxHQUFHO0lBQ3pCLElBQUlKLE1BQU0sQ0FBQ0UsSUFBSSxFQUFFO1FBQ2YsT0FBT0YsTUFBTSxDQUFDRSxJQUFJLENBQUM7S0FDcEI7SUFFRCxJQUFJLENBQUNGLE1BQU0sQ0FBQ0csT0FBTyxFQUFFO1FBQ25CLE1BQU1FLElBQUksR0FBRztZQUNYQyxjQUFjLEVBQUUsS0FBSztTQUN0QjtRQUVETixNQUFNLENBQUNHLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLFdBQVcsRUFBRVMsSUFBSSxDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDYixTQUFRLEdBQUs7WUFDdEUsT0FBT0EsU0FBUSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztLQUNKO0lBQ0RLLE1BQU0sQ0FBQ0UsSUFBSSxHQUFHLE1BQU1GLE1BQU0sQ0FBQ0csT0FBTyxDQUFDO0lBQ25DLE9BQU9ILE1BQU0sQ0FBQ0UsSUFBSSxDQUFDO0NBQ3BCO0FBRUQsaUVBQWVFLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RzLW5leHRqcy10YWlsd2luZC1zdGFydGVyLy4vdXRpbHMvbW9uZ28uanM/N2Q2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkk7XG5cbmlmICghTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFxuICAgIFwiUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWxcIlxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBpcyB1c2VkIGhlcmUgdG8gbWFpbnRhaW4gYSBjYWNoZWQgY29ubmVjdGlvbiBhY3Jvc3MgaG90IHJlbG9hZHNcbiAqIGluIGRldmVsb3BtZW50LiBUaGlzIHByZXZlbnRzIGNvbm5lY3Rpb25zIGdyb3dpbmcgZXhwb25lbnRpYWxseVxuICogZHVyaW5nIEFQSSBSb3V0ZSB1c2FnZS5cbiAqL1xubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYgKCFjYWNoZWQpIHtcbiAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0geyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCgpIHtcbiAgaWYgKGNhY2hlZC5jb25uKSB7XG4gICAgcmV0dXJuIGNhY2hlZC5jb25uO1xuICB9XG5cbiAgaWYgKCFjYWNoZWQucHJvbWlzZSkge1xuICAgIGNvbnN0IG9wdHMgPSB7XG4gICAgICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gICAgfTtcblxuICAgIGNhY2hlZC5wcm9taXNlID0gbW9uZ29vc2UuY29ubmVjdChNT05HT0RCX1VSSSwgb3B0cykudGhlbigobW9uZ29vc2UpID0+IHtcbiAgICAgIHJldHVybiBtb25nb29zZTtcbiAgICB9KTtcbiAgfVxuICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiZGJDb25uZWN0Iiwib3B0cyIsImJ1ZmZlckNvbW1hbmRzIiwiY29ubmVjdCIsInRoZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/mongo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/addFood.ts"));
module.exports = __webpack_exports__;

})();