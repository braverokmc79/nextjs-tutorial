(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8734:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "ItemList_wrap__N6maq",
	"img_item": "ItemList_img_item__Bw9Bt",
	"tit_item": "ItemList_tit_item__jzBCb",
	"txt_info": "ItemList_txt_info__dx4Qs",
	"num_price": "ItemList_num_price__O6rNE",
	"bold": "ItemList_bold__L8Fzi"
};


/***/ }),

/***/ 7780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const API_KEY = "live_ qh6vrxWshlxp31q6TK7nOrvt4kkfBa fytFay9Kvjg8xCLdNvwO5zDOD0pMhu R7zE";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_KEY);


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/component/ItemList.module.css
var ItemList_module = __webpack_require__(8734);
var ItemList_module_default = /*#__PURE__*/__webpack_require__.n(ItemList_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/component/ItemList.js
/* eslint-disable @next/next/no-img-element */ /* eslint-disable jsx-a11y/alt-text */ 



const ItemList = ({ list  })=>{
    function temperament(item) {
        if (item !== undefined) {
            let temp = item.temperament.split(",");
            return `${temp[0]}, ${temp[1]}, ${temp[2]}`;
        } else {
            return null;
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid, {
            columns: 3,
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Row, {
                children: list.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Grid.Column, {
                        alt: item.name,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/view/[id]",
                            as: `/view/${item.name}`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: (ItemList_module_default()).wrap,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            src: item.image.url,
                                            alt: item.name,
                                            className: (ItemList_module_default()).img_item
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                            className: (ItemList_module_default()).tit_item,
                                            children: item.name
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (ItemList_module_default()).txt_info,
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: (ItemList_module_default()).bold,
                                                    children: "품종"
                                                }),
                                                " : ",
                                                item.bred_for
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: (ItemList_module_default()).txt_info,
                                            children: [
                                                "몸무게 : ",
                                                item.weight.metric,
                                                "kg, 수명 : ",
                                                item.life_span
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                            className: (ItemList_module_default()).txt_info,
                                            children: [
                                                "기질: ",
                                                temperament(item)
                                            ]
                                        })
                                    ]
                                })
                            })
                        })
                    }, item.id))
            })
        })
    });
};
/* harmony default export */ const component_ItemList = (ItemList);

// EXTERNAL MODULE: ./ApiKey.js
var ApiKey = __webpack_require__(7780);
;// CONCATENATED MODULE: ./pages/index.js
/* eslint-disable react-hooks/exhaustive-deps */ 








function Home({ list  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Home | 강아지 분양소 | 도그파크"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "도그 파크 홈입니다."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h3",
                        style: {
                            paddingTop: 40,
                            marginBottom: 40
                        },
                        children: "VIP 분양"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_ItemList, {
                        list: list.slice(0, 12)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h3",
                        style: {
                            paddingTop: 80,
                            marginBottom: 40
                        },
                        children: "베스트 분양"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_ItemList, {
                        list: list.slice(12, 24)
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                        as: "h3",
                        style: {
                            paddingTop: 80,
                            marginBottom: 40
                        },
                        children: "실시간 분양"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Divider, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(component_ItemList, {
                        list: list.slice(24, 60)
                    })
                ]
            })
        ]
    });
};
//nodejs 환경
async function getServerSideProps(context) {
    const API_URL = "https://api.thedogapi.com/v1/breeds";
    const API_KEY = ApiKey/* default */.Z;
    const res = await external_axios_default().get(API_URL, {
        headers: {
            "x-api-key": API_KEY,
            Authorization: `token ${API_KEY}`
        }
    });
    const data = res.data;
    return {
        props: {
            list: data,
            name: process.env.name
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1831:
/***/ ((module) => {

"use strict";
module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675], () => (__webpack_exec__(3881)));
module.exports = __webpack_exports__;

})();