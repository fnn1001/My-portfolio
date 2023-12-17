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

/***/ "./src/components/Blog.js":
/*!********************************!*\
  !*** ./src/components/Blog.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _popup_BlogPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup/BlogPopup */ \"./src/components/popup/BlogPopup.js\");\nvar _this = undefined;\n\n\n\nvar _s = $RefreshSig$();\nvar blogData = [\n    {\n        title: \"The Intersection of Web Development and Healthcare\",\n        category: \"Web Development\",\n        date: \"15 November, 2023\",\n        author: \"Feras Abdullah\",\n        img: \"img/blog/healthcare-webdev.jpg\",\n        description: [\n            \"Exploring how web development can play a crucial role in the healthcare industry, enhancing patient care and medical research.\",\n            \"Discussing recent projects where web technologies have been used to create innovative healthcare solutions.\",\n            \"Insights into the challenges and rewards of merging technical development with medical knowledge.\"\n        ]\n    },\n    {\n        title: \"Modern Front-End Technologies in 2023\",\n        category: \"Front-End Development\",\n        date: \"02 October, 2023\",\n        author: \"Feras Abdullah\",\n        img: \"img/blog/modern-frontend.jpg\",\n        description: [\n            \"An overview of the latest trends and technologies in front-end web development, including React, Vue.js, and Angular.\",\n            \"Personal experiences and preferences regarding these technologies, and how they can shape the future of web interfaces.\",\n            \"Case studies of projects utilizing these modern front-end tools to create engaging user experiences.\"\n        ]\n    },\n    {\n        title: \"Building Scalable Web Applications\",\n        category: \"Web Development\",\n        date: \"20 August, 2023\",\n        author: \"Feras Abdullah\",\n        img: \"img/blog/scalable-webapps.jpg\",\n        description: [\n            \"Discussing the importance of scalability in web application development and the best practices to achieve it.\",\n            \"A deep dive into the technologies and architectures that support scalable web applications.\",\n            \"Lessons learned from developing high-traffic web applications and tips for upcoming developers.\"\n        ]\n    }, \n];\nvar Blog = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}), activeData = ref[0], setActiveData = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), open = ref1[0], setOpen = ref1[1];\n    var onClick = function(e, blog) {\n        e.preventDefault();\n        setOpen(true);\n        setActiveData(blog);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_popup_BlogPopup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                open: open,\n                close: function() {\n                    return setOpen(false);\n                },\n                data: activeData\n            }, void 0, false, {\n                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"devman_tm_section\",\n                id: \"blog\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"devman_tm_news\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"devman_tm_main_title\",\n                                \"data-text-align\": \"center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: \"Latest News\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Checkout My Recent Blogs\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Dliquip ex ea commo do conse namber onequa ute irure dolor in reprehen derit in voluptate\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"news_list\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: blogData.map(function(blog, i) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"wow fadeInUp\",\n                                            \"data-wow-duration\": \"1s\",\n                                            \"data-wow-delay\": \"0.\".concat(i * 2, \"s\"),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"list_inner\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"image\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                                src: \"img/thumbs/42-29.jpg\",\n                                                                alt: \"\"\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                lineNumber: 77,\n                                                                columnNumber: 25\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                                className: \"main\",\n                                                                \"data-img-url\": blog.img\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                lineNumber: 78,\n                                                                columnNumber: 25\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                className: \"devman_tm_full_link\",\n                                                                href: \"#\",\n                                                                onClick: function(e) {\n                                                                    return onClick(e, blog);\n                                                                }\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                lineNumber: 79,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                        lineNumber: 76,\n                                                        columnNumber: 23\n                                                    }, _this1),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                        className: \"details\",\n                                                        children: [\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                className: \"category\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                    href: \"#\",\n                                                                    onClick: function(e) {\n                                                                        return onClick(e, blog);\n                                                                    },\n                                                                    children: blog.category\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                    lineNumber: 87,\n                                                                    columnNumber: 27\n                                                                }, _this1)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                lineNumber: 86,\n                                                                columnNumber: 25\n                                                            }, _this1),\n                                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                                className: \"title\",\n                                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                    href: \"#\",\n                                                                    onClick: function(e) {\n                                                                        return onClick(e, blog);\n                                                                    },\n                                                                    children: blog.title\n                                                                }, void 0, false, {\n                                                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                    lineNumber: 92,\n                                                                    columnNumber: 27\n                                                                }, _this1)\n                                                            }, void 0, false, {\n                                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                                lineNumber: 91,\n                                                                columnNumber: 25\n                                                            }, _this1)\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                        lineNumber: 85,\n                                                        columnNumber: 23\n                                                    }, _this1)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 21\n                                            }, _this1)\n                                        }, i, false, {\n                                            fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 19\n                                        }, _this1);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/feras/Desktop/devman portfolio/package/DEVMAN_port/src/components/Blog.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, _this);\n};\n_s(Blog, \"XRka4L4lQYXfWG+MWwYAOTQKgm4=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDOzs7O2tEQTRCSDtxQ0FDTixDQUFDOzs7Ozt5Q0FDQzs7Ozs7cUNBQ0Q7Ozs7Ozs2QkFDRjs7Ozs7eUJBQ0Y7Ozs7O3FCQUNGOzs7Ozs7YUFDRyxDQUNYO0NBQ0g7R0EvREtwQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFnRVYsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9CbG9nLmpzPzA2MWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBCbG9nUG9wdXAgZnJvbSBcIi4vcG9wdXAvQmxvZ1BvcHVwXCI7XHJcblxyXG5jb25zdCBibG9nRGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJUaGUgSW50ZXJzZWN0aW9uIG9mIFdlYiBEZXZlbG9wbWVudCBhbmQgSGVhbHRoY2FyZVwiLFxyXG4gICAgY2F0ZWdvcnk6IFwiV2ViIERldmVsb3BtZW50XCIsXHJcbiAgICBkYXRlOiBcIjE1IE5vdmVtYmVyLCAyMDIzXCIsXHJcbiAgICBhdXRob3I6IFwiRmVyYXMgQWJkdWxsYWhcIixcclxuICAgIGltZzogXCJpbWcvYmxvZy9oZWFsdGhjYXJlLXdlYmRldi5qcGdcIixcclxuICAgIGRlc2NyaXB0aW9uOiBbXHJcbiAgICAgIFwiRXhwbG9yaW5nIGhvdyB3ZWIgZGV2ZWxvcG1lbnQgY2FuIHBsYXkgYSBjcnVjaWFsIHJvbGUgaW4gdGhlIGhlYWx0aGNhcmUgaW5kdXN0cnksIGVuaGFuY2luZyBwYXRpZW50IGNhcmUgYW5kIG1lZGljYWwgcmVzZWFyY2guXCIsXHJcbiAgICAgIFwiRGlzY3Vzc2luZyByZWNlbnQgcHJvamVjdHMgd2hlcmUgd2ViIHRlY2hub2xvZ2llcyBoYXZlIGJlZW4gdXNlZCB0byBjcmVhdGUgaW5ub3ZhdGl2ZSBoZWFsdGhjYXJlIHNvbHV0aW9ucy5cIixcclxuICAgICAgXCJJbnNpZ2h0cyBpbnRvIHRoZSBjaGFsbGVuZ2VzIGFuZCByZXdhcmRzIG9mIG1lcmdpbmcgdGVjaG5pY2FsIGRldmVsb3BtZW50IHdpdGggbWVkaWNhbCBrbm93bGVkZ2UuXCJcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJNb2Rlcm4gRnJvbnQtRW5kIFRlY2hub2xvZ2llcyBpbiAyMDIzXCIsXHJcbiAgICBjYXRlZ29yeTogXCJGcm9udC1FbmQgRGV2ZWxvcG1lbnRcIixcclxuICAgIGRhdGU6IFwiMDIgT2N0b2JlciwgMjAyM1wiLFxyXG4gICAgYXV0aG9yOiBcIkZlcmFzIEFiZHVsbGFoXCIsXHJcbiAgICBpbWc6IFwiaW1nL2Jsb2cvbW9kZXJuLWZyb250ZW5kLmpwZ1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFtcclxuICAgICAgXCJBbiBvdmVydmlldyBvZiB0aGUgbGF0ZXN0IHRyZW5kcyBhbmQgdGVjaG5vbG9naWVzIGluIGZyb250LWVuZCB3ZWIgZGV2ZWxvcG1lbnQsIGluY2x1ZGluZyBSZWFjdCwgVnVlLmpzLCBhbmQgQW5ndWxhci5cIixcclxuICAgICAgXCJQZXJzb25hbCBleHBlcmllbmNlcyBhbmQgcHJlZmVyZW5jZXMgcmVnYXJkaW5nIHRoZXNlIHRlY2hub2xvZ2llcywgYW5kIGhvdyB0aGV5IGNhbiBzaGFwZSB0aGUgZnV0dXJlIG9mIHdlYiBpbnRlcmZhY2VzLlwiLFxyXG4gICAgICBcIkNhc2Ugc3R1ZGllcyBvZiBwcm9qZWN0cyB1dGlsaXppbmcgdGhlc2UgbW9kZXJuIGZyb250LWVuZCB0b29scyB0byBjcmVhdGUgZW5nYWdpbmcgdXNlciBleHBlcmllbmNlcy5cIlxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkJ1aWxkaW5nIFNjYWxhYmxlIFdlYiBBcHBsaWNhdGlvbnNcIixcclxuICAgIGNhdGVnb3J5OiBcIldlYiBEZXZlbG9wbWVudFwiLFxyXG4gICAgZGF0ZTogXCIyMCBBdWd1c3QsIDIwMjNcIixcclxuICAgIGF1dGhvcjogXCJGZXJhcyBBYmR1bGxhaFwiLFxyXG4gICAgaW1nOiBcImltZy9ibG9nL3NjYWxhYmxlLXdlYmFwcHMuanBnXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogW1xyXG4gICAgICBcIkRpc2N1c3NpbmcgdGhlIGltcG9ydGFuY2Ugb2Ygc2NhbGFiaWxpdHkgaW4gd2ViIGFwcGxpY2F0aW9uIGRldmVsb3BtZW50IGFuZCB0aGUgYmVzdCBwcmFjdGljZXMgdG8gYWNoaWV2ZSBpdC5cIixcclxuICAgICAgXCJBIGRlZXAgZGl2ZSBpbnRvIHRoZSB0ZWNobm9sb2dpZXMgYW5kIGFyY2hpdGVjdHVyZXMgdGhhdCBzdXBwb3J0IHNjYWxhYmxlIHdlYiBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICAgIFwiTGVzc29ucyBsZWFybmVkIGZyb20gZGV2ZWxvcGluZyBoaWdoLXRyYWZmaWMgd2ViIGFwcGxpY2F0aW9ucyBhbmQgdGlwcyBmb3IgdXBjb21pbmcgZGV2ZWxvcGVycy5cIlxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZURhdGEsIHNldEFjdGl2ZURhdGFdID0gdXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBvbkNsaWNrID0gKGUsIGJsb2cpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldE9wZW4odHJ1ZSk7XHJcbiAgICBzZXRBY3RpdmVEYXRhKGJsb2cpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEJsb2dQb3B1cCBvcGVuPXtvcGVufSBjbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9IGRhdGE9e2FjdGl2ZURhdGF9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV2bWFuX3RtX3NlY3Rpb25cIiBpZD1cImJsb2dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldm1hbl90bV9uZXdzXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldm1hbl90bV9tYWluX3RpdGxlXCIgZGF0YS10ZXh0LWFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+TGF0ZXN0IE5ld3M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPGgzPkNoZWNrb3V0IE15IFJlY2VudCBCbG9nczwvaDM+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBEbGlxdWlwIGV4IGVhIGNvbW1vIGRvIGNvbnNlIG5hbWJlciBvbmVxdWEgdXRlIGlydXJlIGRvbG9yIGluXHJcbiAgICAgICAgICAgICAgICByZXByZWhlbiBkZXJpdCBpbiB2b2x1cHRhdGVcclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtibG9nRGF0YS5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIndvdyBmYWRlSW5VcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZHVyYXRpb249XCIxc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9e2AwLiR7aSAqIDJ9c2B9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpc3RfaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJpbWcvdGh1bWJzLzQyLTI5LmpwZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiIGRhdGEtaW1nLXVybD17YmxvZy5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGV2bWFuX3RtX2Z1bGxfbGlua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUsIGJsb2cpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUsIGJsb2cpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uQ2xpY2s9eyhlKSA9PiBvbkNsaWNrKGUsIGJsb2cpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwiQmxvZ1BvcHVwIiwiYmxvZ0RhdGEiLCJ0aXRsZSIsImNhdGVnb3J5IiwiZGF0ZSIsImF1dGhvciIsImltZyIsImRlc2NyaXB0aW9uIiwiQmxvZyIsImFjdGl2ZURhdGEiLCJzZXRBY3RpdmVEYXRhIiwib3BlbiIsInNldE9wZW4iLCJvbkNsaWNrIiwiZSIsImJsb2ciLCJwcmV2ZW50RGVmYXVsdCIsImNsb3NlIiwiZGF0YSIsImRpdiIsImNsYXNzTmFtZSIsImlkIiwiZGF0YS10ZXh0LWFsaWduIiwic3BhbiIsImgzIiwicCIsInVsIiwibWFwIiwiaSIsImxpIiwiZGF0YS13b3ctZHVyYXRpb24iLCJkYXRhLXdvdy1kZWxheSIsInNyYyIsImFsdCIsImRhdGEtaW1nLXVybCIsImEiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Blog.js\n"));

/***/ })

});