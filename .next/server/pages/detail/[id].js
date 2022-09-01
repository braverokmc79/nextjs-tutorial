(() => {
var exports = {};
exports.id = 903;
exports.ids = [903];
exports.modules = {

/***/ 79:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "CosmeticsItem_wrap__ipnIQ",
	"img_item": "CosmeticsItem_img_item__dVSAT",
	"info_item": "CosmeticsItem_info_item___k7NA",
	"tit_item": "CosmeticsItem_tit_item__X_jJH",
	"num_price": "CosmeticsItem_num_price__XYd7_",
	"txt_info": "CosmeticsItem_txt_info__8cYN2"
};


/***/ }),

/***/ 3864:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/component/CosmeticsItem.module.css
var CosmeticsItem_module = __webpack_require__(79);
var CosmeticsItem_module_default = /*#__PURE__*/__webpack_require__.n(CosmeticsItem_module);
;// CONCATENATED MODULE: ./src/component/CosmeticsItem.js
/* eslint-disable @next/next/no-img-element */ 


function CosmeticsItem({ item  }) {
    const { name , image_link , price , description , updated_at , category , product_type , product_link ,  } = item;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (CosmeticsItem_module_default()).wrap,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (CosmeticsItem_module_default()).img_item,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: image_link,
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (CosmeticsItem_module_default()).info_item,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: (CosmeticsItem_module_default()).tit_item,
                                children: name
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("strong", {
                                className: (CosmeticsItem_module_default()).num_price,
                                children: [
                                    "$",
                                    price
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                className: (CosmeticsItem_module_default()).txt_info,
                                children: [
                                    category ? `${category}/` : "",
                                    product_type
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                color: "orange",
                                children: "구매하기"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Header, {
                as: "h3",
                children: "Description"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    paddingBottom: 20,
                    fontSize: 18
                },
                children: description
            })
        ]
    });
}; /**
 * 
 * 
 * api_featured_image: "//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/000/452/original/open-uri20171223-4-1pmofky?1514062277"
brand: "maybelline"
category: "powder"
created_at: "2016-10-01T18:35:07.476Z"
currency: null
description: "Maybelline Face Studio Master Hi-Light Light Boosting blush formula has an expert ↵balance of shade + shimmer illuminator for natural glow. Skin goes ↵soft-lit with zero glitz.↵↵		For Best Results: Brush over all shades in palette and gently sweep over ↵cheekbones, brow bones, and temples, or anywhere light naturally touches↵ the face.↵↵		↵	↵↵                    "
id: 452
image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png"
name: "Maybelline Face Studio Master Hi-Light Light Booster Blush "
price: "14.99"
price_sign: null
product_api_url: "http://makeup-api.herokuapp.com/api/v1/products/452.json"
product_colors: []
product_link: "https://well.ca/products/maybelline-face-studio-master_88836.html"
product_type: "blush"
rating: 5
tag_list: []
updated_at: "2017-12-23T20:51:17.460Z"
website_link: "https://well.ca"
 * 
 * 
 */ 

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./pages/detail/[id].js






const Post = ({ item , name  })=>{
    const router = (0,router_.useRouter)();
    //console.log("isFallback : ", router.isFallback)
    //로딩시 fallback 은 처음 true 였다가  false  변경 처리된다.
    //isFallback :  true
    //isFallback: false
    if (router.isFallback) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            style: {
                padding: "100px 0"
            },
            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Loader, {
                active: true,
                inline: "centered",
                children: "Loading"
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: item && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: item.name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: item.description
                        })
                    ]
                }),
                name,
                " 환경 입니다.",
                /*#__PURE__*/ jsx_runtime_.jsx(CosmeticsItem, {
                    item: item
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (Post);
async function getStaticPaths() {
    //740, 730, 729 3개의 아이디만 정적인 html 파일로 컴파일 되어 보여 줌
    //fallback false 740, 730, 729 아닌 아이디는 404 페이지를 보여 줌
    const apiUrl = process.env.apiUrl;
    const res = await external_axios_default().get(apiUrl);
    const data = res.data;
    return {
        //  paths: [
        //     { params: { id: "740" } },
        //     { params: { id: "730" } },
        //     { params: { id: "729" } },
        // ],
        paths: data.slice(0, 9).map((item)=>({
                params: {
                    id: item.id.toString()
                }
            })),
        fallback: true
    };
}
async function getStaticProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await external_axios_default().get(apiUrl);
    const data = res.data;
    return {
        props: {
            item: data,
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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3864));
module.exports = __webpack_exports__;

})();