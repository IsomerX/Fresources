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
exports.id = "pages/admin";
exports.ids = ["pages/admin"];
exports.modules = {

/***/ "./pages/admin/index.js":
/*!******************************!*\
  !*** ./pages/admin/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Admin)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primereact/resources/themes/lara-light-indigo/theme.css */ \"./node_modules/primereact/resources/themes/lara-light-indigo/theme.css\");\n/* harmony import */ var primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_themes_lara_light_indigo_theme_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primereact/resources/primereact.min.css */ \"./node_modules/primereact/resources/primereact.min.css\");\n/* harmony import */ var primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primereact_resources_primereact_min_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeicons/primeicons.css */ \"./node_modules/primeicons/primeicons.css\");\n/* harmony import */ var primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeicons_primeicons_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var primereact_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primereact/fileupload */ \"primereact/fileupload\");\n/* harmony import */ var primereact_fileupload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primereact_fileupload__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primereact/dropdown */ \"primereact/dropdown\");\n/* harmony import */ var primereact_dropdown__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primereact/inputtext */ \"primereact/inputtext\");\n/* harmony import */ var primereact_inputtext__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction Admin() {\n    const collegeSelectItems = [\n        {\n            label: \"DTU\",\n            value: \"DTU\"\n        },\n        {\n            label: \"NSUT\",\n            value: \"NSUT\"\n        },\n        {\n            label: \"IGDTUW\",\n            value: \"IGDTUW\"\n        }, \n    ];\n    const yearSelectItems = [\n        {\n            label: \"First\",\n            value: \"first\"\n        },\n        {\n            label: \"Second\",\n            value: \"second\"\n        }, \n    ];\n    const subjectSelectItems = [\n        {\n            label: \"Maths\",\n            value: \"maths\"\n        },\n        {\n            label: \"Physics\",\n            value: \"physics\"\n        },\n        {\n            label: \"Chemistry\",\n            value: \"chemistry\"\n        },\n        {\n            label: \"Computer\",\n            value: \"computer\"\n        }, \n    ];\n    const topicSelectItems = [\n        {\n            label: \"Book\",\n            value: \"book\"\n        },\n        {\n            label: \"Assignment\",\n            value: \"assignment\"\n        },\n        {\n            label: \"Paper\",\n            value: \"paper\"\n        },\n        {\n            label: \"Playlist\",\n            value: \"playlist\"\n        },\n        {\n            label: \"Experiment\",\n            value: \"experiment\"\n        },\n        {\n            label: \"Notes\",\n            value: \"notes\"\n        }, \n    ];\n    const { 0: formData , 1: setFormData  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n        college: collegeSelectItems[0],\n        year: yearSelectItems[0],\n        subject: subjectSelectItems[0],\n        topic: topicSelectItems[0],\n        name: \"\"\n    });\n    const uploadHandler = async (file)=>{\n        let data = new FormData();\n        data.append(\"file\", file);\n        const response = await fetch(\"/api/upload\", {\n            method: \"POST\",\n            body: {\n                data,\n                formData\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Movie Titles\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 61,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {\n                value: formData.college,\n                options: collegeSelectItems,\n                onChange: (e)=>setFormData((prev)=>{\n                        return {\n                            ...prev,\n                            college: e.value\n                        };\n                    }),\n                placeholder: \"Select a College\"\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 69,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {\n                value: formData.year,\n                options: yearSelectItems,\n                onChange: (e)=>setFormData((prev)=>{\n                        return {\n                            ...prev,\n                            year: e.value\n                        };\n                    }),\n                placeholder: \"Select a Year\"\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {\n                value: formData.subject,\n                options: subjectSelectItems,\n                onChange: (e)=>setFormData((prev)=>{\n                        return {\n                            ...prev,\n                            subject: e.value\n                        };\n                    }),\n                placeholder: \"Select a Subject\"\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 89,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_dropdown__WEBPACK_IMPORTED_MODULE_7__.Dropdown, {\n                value: formData.topic,\n                options: topicSelectItems,\n                onChange: (e)=>setFormData((prev)=>{\n                        return {\n                            ...prev,\n                            topic: e.value\n                        };\n                    }),\n                placeholder: \"Select a Topic\"\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 99,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_inputtext__WEBPACK_IMPORTED_MODULE_8__.InputText, {\n                value: formData.name,\n                onChange: (e)=>setFormData((prev)=>{\n                        return {\n                            ...prev,\n                            name: e.target.value\n                        };\n                    })\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 109,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(primereact_fileupload__WEBPACK_IMPORTED_MODULE_5__.FileUpload, {\n                name: \"demo\",\n                url: \"/api/upload\"\n            }, void 0, false, {\n                fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n                lineNumber: 118,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/junaid./Documents/GitHub/Fresources/pages/admin/index.js\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQyxDQUFDLEdBQ1J4QixXQUFXLENBQUMsQ0FBQ3lCLElBQUksR0FBSzt3QkFDbEIsT0FBTzs0QkFBRSxHQUFHQSxJQUFJOzRCQUFFckIsS0FBSyxFQUFFb0IsQ0FBQyxDQUFDN0IsS0FBSzt5QkFBRTtxQkFDckMsQ0FBQztnQkFFTitCLFdBQVcsRUFBQyxnQkFBZ0I7Ozs7O29CQUM5QjswQkFDRiw4REFBQ25DLDJEQUFTO2dCQUNOSSxLQUFLLEVBQUVJLFFBQVEsQ0FBQ00sSUFBSTtnQkFDcEJrQixRQUFRLEVBQUUsQ0FBQ0MsQ0FBQyxHQUNSeEIsV0FBVyxDQUFDLENBQUN5QixJQUFJLEdBQUs7d0JBQ2xCLE9BQU87NEJBQUUsR0FBR0EsSUFBSTs0QkFBRXBCLElBQUksRUFBRW1CLENBQUMsQ0FBQ0csTUFBTSxDQUFDaEMsS0FBSzt5QkFBRTtxQkFDM0MsQ0FBQzs7Ozs7b0JBRVI7MEJBRUYsOERBQUNQLDZEQUFVO2dCQUFDaUIsSUFBSSxFQUFDLE1BQU07Z0JBQUN1QixHQUFHLEVBQUMsYUFBYTs7Ozs7b0JBQUc7Ozs7OztZQUMxQyxDQUNUO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcmVzb3VyY2VzLy4vcGFnZXMvYWRtaW4vaW5kZXguanM/OGMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJ3ByaW1lcmVhY3QvcmVzb3VyY2VzL3RoZW1lcy9sYXJhLWxpZ2h0LWluZGlnby90aGVtZS5jc3MnXG5pbXBvcnQgJ3ByaW1lcmVhY3QvcmVzb3VyY2VzL3ByaW1lcmVhY3QubWluLmNzcydcbmltcG9ydCAncHJpbWVpY29ucy9wcmltZWljb25zLmNzcydcbmltcG9ydCB7IEZpbGVVcGxvYWQgfSBmcm9tICdwcmltZXJlYWN0L2ZpbGV1cGxvYWQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICdwcmltZXJlYWN0L2Ryb3Bkb3duJ1xuaW1wb3J0IHsgSW5wdXRUZXh0IH0gZnJvbSAncHJpbWVyZWFjdC9pbnB1dHRleHQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkbWluKCkge1xuICAgIGNvbnN0IGNvbGxlZ2VTZWxlY3RJdGVtcyA9IFtcbiAgICAgICAgeyBsYWJlbDogJ0RUVScsIHZhbHVlOiAnRFRVJyB9LFxuICAgICAgICB7IGxhYmVsOiAnTlNVVCcsIHZhbHVlOiAnTlNVVCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ0lHRFRVVycsIHZhbHVlOiAnSUdEVFVXJyB9LFxuICAgIF1cblxuICAgIGNvbnN0IHllYXJTZWxlY3RJdGVtcyA9IFtcbiAgICAgICAgeyBsYWJlbDogJ0ZpcnN0JywgdmFsdWU6ICdmaXJzdCcgfSxcbiAgICAgICAgeyBsYWJlbDogJ1NlY29uZCcsIHZhbHVlOiAnc2Vjb25kJyB9LFxuICAgIF1cblxuICAgIGNvbnN0IHN1YmplY3RTZWxlY3RJdGVtcyA9IFtcbiAgICAgICAgeyBsYWJlbDogJ01hdGhzJywgdmFsdWU6ICdtYXRocycgfSxcbiAgICAgICAgeyBsYWJlbDogJ1BoeXNpY3MnLCB2YWx1ZTogJ3BoeXNpY3MnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdDaGVtaXN0cnknLCB2YWx1ZTogJ2NoZW1pc3RyeScgfSxcbiAgICAgICAgeyBsYWJlbDogJ0NvbXB1dGVyJywgdmFsdWU6ICdjb21wdXRlcicgfSxcbiAgICBdXG5cbiAgICBjb25zdCB0b3BpY1NlbGVjdEl0ZW1zID0gW1xuICAgICAgICB7IGxhYmVsOiAnQm9vaycsIHZhbHVlOiAnYm9vaycgfSxcbiAgICAgICAgeyBsYWJlbDogJ0Fzc2lnbm1lbnQnLCB2YWx1ZTogJ2Fzc2lnbm1lbnQnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdQYXBlcicsIHZhbHVlOiAncGFwZXInIH0sXG4gICAgICAgIHsgbGFiZWw6ICdQbGF5bGlzdCcsIHZhbHVlOiAncGxheWxpc3QnIH0sXG4gICAgICAgIHsgbGFiZWw6ICdFeHBlcmltZW50JywgdmFsdWU6ICdleHBlcmltZW50JyB9LFxuICAgICAgICB7IGxhYmVsOiAnTm90ZXMnLCB2YWx1ZTogJ25vdGVzJyB9LFxuICAgIF1cblxuICAgIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xuICAgICAgICBjb2xsZWdlOiBjb2xsZWdlU2VsZWN0SXRlbXNbMF0sXG4gICAgICAgIHllYXI6IHllYXJTZWxlY3RJdGVtc1swXSxcbiAgICAgICAgc3ViamVjdDogc3ViamVjdFNlbGVjdEl0ZW1zWzBdLFxuICAgICAgICB0b3BpYzogdG9waWNTZWxlY3RJdGVtc1swXSxcbiAgICAgICAgbmFtZTogJycsXG4gICAgfSlcblxuICAgIGNvbnN0IHVwbG9hZEhhbmRsZXIgPSBhc3luYyAoZmlsZSkgPT4ge1xuICAgICAgICBsZXQgZGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmaWxlJywgZmlsZSlcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VwbG9hZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgYm9keToge1xuICAgICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgICAgZm9ybURhdGEsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+TW92aWUgVGl0bGVzPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YVxuICAgICAgICAgICAgICAgICAgICBuYW1lPSdkZXNjcmlwdGlvbidcbiAgICAgICAgICAgICAgICAgICAgY29udGVudD0nR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcCdcbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD0naWNvbicgaHJlZj0nL2Zhdmljb24uaWNvJyAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmNvbGxlZ2V9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17Y29sbGVnZVNlbGVjdEl0ZW1zfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIGNvbGxlZ2U6IGUudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IGEgQ29sbGVnZSdcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEueWVhcn1cbiAgICAgICAgICAgICAgICBvcHRpb25zPXt5ZWFyU2VsZWN0SXRlbXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgeWVhcjogZS52YWx1ZSB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWxlY3QgYSBZZWFyJ1xuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5zdWJqZWN0fVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3N1YmplY3RTZWxlY3RJdGVtc31cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBzdWJqZWN0OiBlLnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1NlbGVjdCBhIFN1YmplY3QnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnRvcGljfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e3RvcGljU2VsZWN0SXRlbXN9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICBzZXRGb3JtRGF0YSgocHJldikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgdG9waWM6IGUudmFsdWUgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nU2VsZWN0IGEgVG9waWMnXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPElucHV0VGV4dFxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5uYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8RmlsZVVwbG9hZCBuYW1lPSdkZW1vJyB1cmw9Jy9hcGkvdXBsb2FkJyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkZpbGVVcGxvYWQiLCJ1c2VTdGF0ZSIsIkRyb3Bkb3duIiwiSW5wdXRUZXh0IiwiQWRtaW4iLCJjb2xsZWdlU2VsZWN0SXRlbXMiLCJsYWJlbCIsInZhbHVlIiwieWVhclNlbGVjdEl0ZW1zIiwic3ViamVjdFNlbGVjdEl0ZW1zIiwidG9waWNTZWxlY3RJdGVtcyIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJjb2xsZWdlIiwieWVhciIsInN1YmplY3QiLCJ0b3BpYyIsIm5hbWUiLCJ1cGxvYWRIYW5kbGVyIiwiZmlsZSIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiZGl2IiwidGl0bGUiLCJtZXRhIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwib3B0aW9ucyIsIm9uQ2hhbmdlIiwiZSIsInByZXYiLCJwbGFjZWhvbGRlciIsInRhcmdldCIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/admin/index.js\n");

/***/ }),

/***/ "./node_modules/primeicons/primeicons.css":
/*!************************************************!*\
  !*** ./node_modules/primeicons/primeicons.css ***!
  \************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/primereact.min.css":
/*!**************************************************************!*\
  !*** ./node_modules/primereact/resources/primereact.min.css ***!
  \**************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/primereact/resources/themes/lara-light-indigo/theme.css":
/*!******************************************************************************!*\
  !*** ./node_modules/primereact/resources/themes/lara-light-indigo/theme.css ***!
  \******************************************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "primereact/dropdown":
/*!**************************************!*\
  !*** external "primereact/dropdown" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/dropdown");

/***/ }),

/***/ "primereact/fileupload":
/*!****************************************!*\
  !*** external "primereact/fileupload" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/fileupload");

/***/ }),

/***/ "primereact/inputtext":
/*!***************************************!*\
  !*** external "primereact/inputtext" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("primereact/inputtext");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/admin/index.js"));
module.exports = __webpack_exports__;

})();