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

/***/ "./src/components/Accordion.js":
/*!*************************************!*\
  !*** ./src/components/Accordion.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar _s = $RefreshSig$();\nvar accordionData = [\n    {\n        title: \"Work Strategy\",\n        details: \"My work strategy involves a thorough understanding of client requirements, followed by a detailed plan that encompasses both design and functionality. I prioritize responsive design and user experience, ensuring that each project is not only aesthetically pleasing but also functional and user-friendly.\"\n    },\n    {\n        title: \"The Process of Our Work\",\n        details: \"The development process starts with a prototype, followed by iterative development phases. Each phase includes testing and feedback integration, ensuring that the final product aligns with user expectations and delivers a seamless experience across different platforms.\"\n    },\n    {\n        title: \"Core Value of Development\",\n        details: \"At the core of my development process is a commitment to clean, maintainable code. I focus on creating scalable applications that can grow with the client's needs, while also ensuring security and performance are never compromised.\"\n    },\n    {\n        title: \"Desire to Work Hard\",\n        details: \"My passion for web development drives a strong work ethic. I am continually learning and staying up-to-date with the latest industry trends and technologies, allowing me to bring innovative solutions to the table and overcome complex challenges in development projects.\"\n    }, \n];\nvar Accordion = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), active = ref[0], setActive = ref[1];\n    var contentEl = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setActive(0);\n    }, [\n        contentEl.current\n    ]);\n    var onClick = function(value) {\n        return value === active ? setActive(null) : setActive(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"devman_tm_accordion\",\n            \"data-active\": 1,\n            \"data-type\": \"accordion\",\n            children: accordionData.map(function(accordion, i) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"accordion_in \".concat(active == i ? \"acc_active\" : \"\"),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"acc_head\",\n                            onClick: function() {\n                                return onClick(i);\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"plus\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: accordion.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"acc_content d-block\",\n                            ref: contentEl,\n                            style: active === i ? {\n                                height: contentEl.current && contentEl.current.scrollHeight\n                            } : {\n                                height: \"0px\"\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"acc_content_in\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: accordion.details\n                                }, void 0, false, {\n                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 17\n                                }, _this1)\n                            }, void 0, false, {\n                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                                lineNumber: 64,\n                                columnNumber: 15\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, _this1)\n                    ]\n                }, i, true, {\n                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n                    lineNumber: 44,\n                    columnNumber: 11\n                }, _this1);\n            })\n        }, void 0, false, {\n            fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Accordion.js\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, _this);\n};\n_s(Accordion, \"SH9jgCa472e7/R65499RvWZ+zBE=\");\n_c = Accordion;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Accordion);\nvar _c;\n$RefreshReg$(_c, \"Accordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BY2NvcmRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBOEQ7O0FBRTlELElBQU1JLGFBQWEsR0FBRztJQUNwQjtRQUNFQyxLQUFLLEVBQUUsZUFBZTtRQUN0QkMsT0FBTyxFQUNMLGlUQUFpVDtLQUNwVDtJQUNEO1FBQ0VELEtBQUssRUFBRSx5QkFBeUI7UUFDaENDLE9BQU8sRUFDTCwrUUFBK1E7S0FDbFI7SUFDRDtRQUNFRCxLQUFLLEVBQUUsMkJBQTJCO1FBQ2xDQyxPQUFPLEVBQ0wseU9BQXlPO0tBQzVPO0lBQ0Q7UUFDRUQsS0FBSyxFQUFFLHFCQUFxQjtRQUM1QkMsT0FBTyxFQUNMLCtRQUErUTtLQUNsUjtDQUNGO0FBRUQsSUFBTUMsU0FBUyxHQUFHLFdBQU07OztJQUN0QixJQUE0QkosR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUFuQ0ssTUFBTSxHQUFlTCxHQUFjLEdBQTdCLEVBQUVNLFNBQVMsR0FBSU4sR0FBYyxHQUFsQjtJQUN4QixJQUFNTyxTQUFTLEdBQUdSLDZDQUFNLEVBQUU7SUFDMUJELGdEQUFTLENBQUMsV0FBTTtRQUNkUSxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDZCxFQUFFO1FBQUNDLFNBQVMsQ0FBQ0MsT0FBTztLQUFDLENBQUMsQ0FBQztJQUV4QixJQUFNQyxPQUFPLEdBQUcsU0FBQ0MsS0FBSztlQUNwQkEsS0FBSyxLQUFLTCxNQUFNLEdBQUdDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBR0EsU0FBUyxDQUFDSSxLQUFLLENBQUM7S0FBQTtJQUV2RCxxQkFDRSw4REFBQ2IsMkNBQVE7a0JBQ1AsNEVBQUNjLEtBQUc7WUFDRkMsU0FBUyxFQUFDLHFCQUFxQjtZQUMvQkMsYUFBVyxFQUFFLENBQUM7WUFDZEMsV0FBUyxFQUFDLFdBQVc7c0JBRXBCYixhQUFhLENBQUNjLEdBQUcsQ0FBQyxTQUFDQyxTQUFTLEVBQUVDLENBQUM7cUNBQzlCLDhEQUFDTixLQUFHO29CQUNGQyxTQUFTLEVBQUUsZUFBYyxDQUFrQyxPQUFoQ1AsTUFBTSxJQUFJWSxDQUFDLEdBQUcsWUFBWSxHQUFHLEVBQUUsQ0FBRTs7c0NBRzVELDhEQUFDTixLQUFHOzRCQUFDQyxTQUFTLEVBQUMsVUFBVTs0QkFBQ0gsT0FBTyxFQUFFO3VDQUFNQSxPQUFPLENBQUNRLENBQUMsQ0FBQzs2QkFBQTs7OENBQ2pELDhEQUFDQyxNQUFJO29DQUFDTixTQUFTLEVBQUMsTUFBTTs7Ozs7MENBQUc7OENBQ3pCLDhEQUFDTyxHQUFDOzhDQUFFSCxTQUFTLENBQUNkLEtBQUs7Ozs7OzBDQUFLOzs7Ozs7a0NBQ3BCO3NDQUNOLDhEQUFDUyxLQUFHOzRCQUNGQyxTQUFTLEVBQUcscUJBQW1COzRCQUMvQlEsR0FBRyxFQUFFYixTQUFTOzRCQUNkYyxLQUFLLEVBQ0hoQixNQUFNLEtBQUtZLENBQUMsR0FDUjtnQ0FDRUssTUFBTSxFQUNKZixTQUFTLENBQUNDLE9BQU8sSUFBSUQsU0FBUyxDQUFDQyxPQUFPLENBQUNlLFlBQVk7NkJBQ3RELEdBQ0Q7Z0NBQUVELE1BQU0sRUFBRSxLQUFLOzZCQUFFO3NDQUd2Qiw0RUFBQ1gsS0FBRztnQ0FBQ0MsU0FBUyxFQUFDLGdCQUFnQjswQ0FDN0IsNEVBQUNPLEdBQUM7OENBQUVILFNBQVMsQ0FBQ2IsT0FBTzs7Ozs7MENBQUs7Ozs7O3NDQUN0Qjs7Ozs7a0NBQ0Y7O21CQXJCRGMsQ0FBQzs7OzswQkFzQkY7YUFDUCxDQUFDOzs7OztpQkFDRTs7Ozs7YUFDRyxDQUNYO0NBQ0g7R0EvQ0tiLFNBQVM7QUFBVEEsS0FBQUEsU0FBUztBQWdEZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FjY29yZGlvbi5qcz80ZDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IGFjY29yZGlvbkRhdGEgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiV29yayBTdHJhdGVneVwiLFxyXG4gICAgZGV0YWlsczpcclxuICAgICAgXCJNeSB3b3JrIHN0cmF0ZWd5IGludm9sdmVzIGEgdGhvcm91Z2ggdW5kZXJzdGFuZGluZyBvZiBjbGllbnQgcmVxdWlyZW1lbnRzLCBmb2xsb3dlZCBieSBhIGRldGFpbGVkIHBsYW4gdGhhdCBlbmNvbXBhc3NlcyBib3RoIGRlc2lnbiBhbmQgZnVuY3Rpb25hbGl0eS4gSSBwcmlvcml0aXplIHJlc3BvbnNpdmUgZGVzaWduIGFuZCB1c2VyIGV4cGVyaWVuY2UsIGVuc3VyaW5nIHRoYXQgZWFjaCBwcm9qZWN0IGlzIG5vdCBvbmx5IGFlc3RoZXRpY2FsbHkgcGxlYXNpbmcgYnV0IGFsc28gZnVuY3Rpb25hbCBhbmQgdXNlci1mcmllbmRseS5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIlRoZSBQcm9jZXNzIG9mIE91ciBXb3JrXCIsXHJcbiAgICBkZXRhaWxzOlxyXG4gICAgICBcIlRoZSBkZXZlbG9wbWVudCBwcm9jZXNzIHN0YXJ0cyB3aXRoIGEgcHJvdG90eXBlLCBmb2xsb3dlZCBieSBpdGVyYXRpdmUgZGV2ZWxvcG1lbnQgcGhhc2VzLiBFYWNoIHBoYXNlIGluY2x1ZGVzIHRlc3RpbmcgYW5kIGZlZWRiYWNrIGludGVncmF0aW9uLCBlbnN1cmluZyB0aGF0IHRoZSBmaW5hbCBwcm9kdWN0IGFsaWducyB3aXRoIHVzZXIgZXhwZWN0YXRpb25zIGFuZCBkZWxpdmVycyBhIHNlYW1sZXNzIGV4cGVyaWVuY2UgYWNyb3NzIGRpZmZlcmVudCBwbGF0Zm9ybXMuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJDb3JlIFZhbHVlIG9mIERldmVsb3BtZW50XCIsXHJcbiAgICBkZXRhaWxzOlxyXG4gICAgICBcIkF0IHRoZSBjb3JlIG9mIG15IGRldmVsb3BtZW50IHByb2Nlc3MgaXMgYSBjb21taXRtZW50IHRvIGNsZWFuLCBtYWludGFpbmFibGUgY29kZS4gSSBmb2N1cyBvbiBjcmVhdGluZyBzY2FsYWJsZSBhcHBsaWNhdGlvbnMgdGhhdCBjYW4gZ3JvdyB3aXRoIHRoZSBjbGllbnQncyBuZWVkcywgd2hpbGUgYWxzbyBlbnN1cmluZyBzZWN1cml0eSBhbmQgcGVyZm9ybWFuY2UgYXJlIG5ldmVyIGNvbXByb21pc2VkLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IFwiRGVzaXJlIHRvIFdvcmsgSGFyZFwiLFxyXG4gICAgZGV0YWlsczpcclxuICAgICAgXCJNeSBwYXNzaW9uIGZvciB3ZWIgZGV2ZWxvcG1lbnQgZHJpdmVzIGEgc3Ryb25nIHdvcmsgZXRoaWMuIEkgYW0gY29udGludWFsbHkgbGVhcm5pbmcgYW5kIHN0YXlpbmcgdXAtdG8tZGF0ZSB3aXRoIHRoZSBsYXRlc3QgaW5kdXN0cnkgdHJlbmRzIGFuZCB0ZWNobm9sb2dpZXMsIGFsbG93aW5nIG1lIHRvIGJyaW5nIGlubm92YXRpdmUgc29sdXRpb25zIHRvIHRoZSB0YWJsZSBhbmQgb3ZlcmNvbWUgY29tcGxleCBjaGFsbGVuZ2VzIGluIGRldmVsb3BtZW50IHByb2plY3RzLlwiLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBBY2NvcmRpb24gPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZSwgc2V0QWN0aXZlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IGNvbnRlbnRFbCA9IHVzZVJlZigpO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUoMCk7XHJcbiAgfSwgW2NvbnRlbnRFbC5jdXJyZW50XSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2sgPSAodmFsdWUpID0+XHJcbiAgICB2YWx1ZSA9PT0gYWN0aXZlID8gc2V0QWN0aXZlKG51bGwpIDogc2V0QWN0aXZlKHZhbHVlKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImRldm1hbl90bV9hY2NvcmRpb25cIlxyXG4gICAgICAgIGRhdGEtYWN0aXZlPXsxfVxyXG4gICAgICAgIGRhdGEtdHlwZT1cImFjY29yZGlvblwiXHJcbiAgICAgID5cclxuICAgICAgICB7YWNjb3JkaW9uRGF0YS5tYXAoKGFjY29yZGlvbiwgaSkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BhY2NvcmRpb25faW4gJHthY3RpdmUgPT0gaSA/IFwiYWNjX2FjdGl2ZVwiIDogXCJcIn1gfVxyXG4gICAgICAgICAgICBrZXk9e2l9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjX2hlYWRcIiBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrKGkpfT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbHVzXCIgLz5cclxuICAgICAgICAgICAgICA8cD57YWNjb3JkaW9uLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhY2NfY29udGVudCBkLWJsb2NrYH1cclxuICAgICAgICAgICAgICByZWY9e2NvbnRlbnRFbH1cclxuICAgICAgICAgICAgICBzdHlsZT17XHJcbiAgICAgICAgICAgICAgICBhY3RpdmUgPT09IGlcclxuICAgICAgICAgICAgICAgICAgPyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnRFbC5jdXJyZW50ICYmIGNvbnRlbnRFbC5jdXJyZW50LnNjcm9sbEhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIDogeyBoZWlnaHQ6IFwiMHB4XCIgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWNjX2NvbnRlbnRfaW5cIj5cclxuICAgICAgICAgICAgICAgIDxwPnthY2NvcmRpb24uZGV0YWlsc308L3A+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBBY2NvcmRpb247XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYWNjb3JkaW9uRGF0YSIsInRpdGxlIiwiZGV0YWlscyIsIkFjY29yZGlvbiIsImFjdGl2ZSIsInNldEFjdGl2ZSIsImNvbnRlbnRFbCIsImN1cnJlbnQiLCJvbkNsaWNrIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhLWFjdGl2ZSIsImRhdGEtdHlwZSIsIm1hcCIsImFjY29yZGlvbiIsImkiLCJzcGFuIiwicCIsInJlZiIsInN0eWxlIiwiaGVpZ2h0Iiwic2Nyb2xsSGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Accordion.js\n"));

/***/ })

});