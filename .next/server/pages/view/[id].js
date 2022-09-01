(() => {
var exports = {};
exports.id = 226;
exports.ids = [226];
exports.modules = {

/***/ 9652:
/***/ ((module) => {

// Exports
module.exports = {
	"wrap": "Item_wrap__g9KWc",
	"wrap2": "Item_wrap2__YEQIT",
	"img_item": "Item_img_item__3vkPS",
	"info_item": "Item_info_item__0EHbA",
	"tit_item": "Item_tit_item__mfoBK",
	"num_price": "Item_num_price__MTSpm",
	"txt_info": "Item_txt_info__QTN5i"
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

/***/ 5237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./ApiKey.js
var ApiKey = __webpack_require__(7780);
// EXTERNAL MODULE: external "semantic-ui-react"
var external_semantic_ui_react_ = __webpack_require__(1831);
// EXTERNAL MODULE: ./src/component/Item.module.css
var Item_module = __webpack_require__(9652);
var Item_module_default = /*#__PURE__*/__webpack_require__.n(Item_module);
;// CONCATENATED MODULE: ./src/component/Item.js
/* eslint-disable @next/next/no-img-element */ 


/*

bred_for: "Small rodent hunting, lapdog"
breed_group: "Toy"
height: {imperial: '9 - 11.5', metric: '23 - 29'}
id: 1
life_span: "10 - 12 years"
name: "Affenpinscher"
origin: "Germany, France"
reference_image_id: "BJa4kxc4X"
temperament: "Stubborn, Curious, Playful, Adventurous, Active, Fun-loving"
weight: {imperial: '6 - 13', metric: '3 - 6'}

*/ const Item = ({ item  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: item !== undefined && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Item_module_default()).wrap,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Item_module_default()).img_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: `https://cdn2.thedogapi.com/images/${item.reference_image_id}.jpg`,
                                alt: item.name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Item_module_default()).info_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                className: (Item_module_default()).tit_item,
                                children: item.name
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Item_module_default()).info_item,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_semantic_ui_react_.Button, {
                                color: "orange",
                                children: "분양 받기"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Item_module_default()).wrap2,
                    children: [
                        item.bred_for && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "품종:"
                                }),
                                item.bred_for
                            ]
                        }),
                        item.breed_group && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "품종 그룹:"
                                }),
                                item.breed_group
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "몸무게:"
                                }),
                                " ",
                                item.weight.metric,
                                "kg"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "신장:"
                                }),
                                " ",
                                item.height.metric,
                                "cm"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "수명 :"
                                }),
                                " ",
                                item.life_span
                            ]
                        }),
                        item.origin && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "혈통 :"
                                }),
                                " ",
                                item.origin
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Item_module_default()).txt_info,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "기질: "
                                }),
                                item.temperament
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const component_Item = (Item);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./pages/view/[id].js








const Post = ({ item , name  })=>{
    // const router = useRouter()
    // const { id } = router.query;
    // const [item, setItem] = useState({});
    // const [isLoading, setIsLoading] = useState(true);
    // // const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    // //thedogapi.com api 사용
    // //https://docs.thedogapi.com/api-reference/breeds/breeds-list
    // const API_URL = `https://api.thedogapi.com/v1/breeds/search`;
    // function getData() {
    //     //console.log("id : ", id);
    //     Axios.get(API_URL, {
    //         headers: {
    //             'x-api-key': API_KEY,
    //             Authorization: `token ${API_KEY}`
    //         },
    //         params: {
    //             name: id
    //         }
    //     }).then(res => {
    //         setItem(res.data);
    //         setIsLoading(false);
    //     });
    // }
    // useEffect(() => {
    //     if (id && id !== undefined) {
    //         getData();
    //     }
    // }, [id]);
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: item && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: item[0].name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: item[0].bred_for
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(component_Item, {
                    item: item[0]
                })
            ]
        })
    });
};
/* harmony default export */ const _id_ = (Post);
//nodejs 환경
async function getServerSideProps(context) {
    const id = context.params.id;
    const API_URL = `https://api.thedogapi.com/v1/breeds/search?name=${id}`;
    const res = await external_axios_default().get(API_URL, {
        headers: {
            "x-api-key": ApiKey/* default */.Z,
            Authorization: `token ${ApiKey/* default */.Z}`
        }
    });
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5237));
module.exports = __webpack_exports__;

})();