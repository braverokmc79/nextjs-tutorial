(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9361:function(a,b){"use strict";b.Z=function(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}},5557:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return c(3881)}])},8045:function(a,b,c){"use strict";Object.defineProperty(b,"__esModule",{value:!0});var d=c(9361).Z,e=c(4941).Z,f=c(3929).Z;Object.defineProperty(b,"__esModule",{value:!0}),b.default=function(a){var b,c,h=a.src,i=a.sizes,p=a.unoptimized,q=void 0!==p&&p,v=a.priority,B=void 0!==v&&v,D=a.loading,E=a.lazyRoot,F=void 0===E?null:E,G=a.lazyBoundary,H=a.className,I=a.quality,J=a.width,K=a.height,L=a.style,M=a.objectFit,N=a.objectPosition,O=a.onLoadingComplete,P=a.placeholder,Q=void 0===P?"empty":P,R=a.blurDataURL,S=j(a,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),T=k.useContext(o.ImageConfigContext),U=k.useMemo(function(){var a=s||T||m.imageConfigDefault,b=f(a.deviceSizes).concat(f(a.imageSizes)).sort(function(a,b){return a-b}),c=a.deviceSizes.sort(function(a,b){return a-b});return g({},a,{allSizes:b,deviceSizes:c})},[T]),V=S,W=i?"responsive":"intrinsic";"layout"in V&&(V.layout&&(W=V.layout),delete V.layout);var X=A;if("loader"in V){if(V.loader){var Y,Z=V.loader;X=function(a){a.config;var b=j(a,["config"]);return Z(b)}}delete V.loader}var $="";if(x(h)){var _=w(h)?h.default:h;if(!_.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(_)));if(R=R||_.blurDataURL,$=_.src,(!W||"fill"!==W)&&(K=K||_.height,J=J||_.width,!_.height||!_.width))throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(_)))}h="string"==typeof h?h:$;var aa=!B&&("lazy"===D|| void 0===D);(h.startsWith("data:")||h.startsWith("blob:"))&&(q=!0,aa=!1),t.has(h)&&(aa=!1),r&&(q=!0);var ab=e(k.useState(!1),2),ac=ab[0],ad=ab[1],ae=e(n.useIntersection({rootRef:F,rootMargin:G||"200px",disabled:!aa}),3),af=ae[0],ag=ae[1],ah=ae[2],ai=!aa||ag,aj={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ak={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},al=!1,am=z(J),an=z(K),ao=z(I),ap=Object.assign({},L,{position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:M,objectPosition:N}),aq="blur"!==Q||ac?{}:{backgroundSize:M||"cover",backgroundPosition:N||"0% 0%",filter:"blur(20px)",backgroundImage:'url("'.concat(R,'")')};if("fill"===W)aj.display="block",aj.position="absolute",aj.top=0,aj.left=0,aj.bottom=0,aj.right=0;else if(void 0!==am&& void 0!==an){var ar=an/am,as=isNaN(ar)?"100%":"".concat(100*ar,"%");"responsive"===W?(aj.display="block",aj.position="relative",al=!0,ak.paddingTop=as):"intrinsic"===W?(aj.display="inline-block",aj.position="relative",aj.maxWidth="100%",al=!0,ak.maxWidth="100%",b="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(am,"%27%20height=%27").concat(an,"%27/%3e")):"fixed"===W&&(aj.display="inline-block",aj.position="relative",aj.width=am,aj.height=an)}var at={src:u,srcSet:void 0,sizes:void 0};ai&&(at=y({config:U,src:h,unoptimized:q,layout:W,width:am,quality:ao,sizes:i,loader:X}));var au=h,av="imagesrcset",aw="imagesizes";aw="imageSizes";var ax=(d(c={},"imageSrcSet",at.srcSet),d(c,aw,at.sizes),c),ay=k.default.useLayoutEffect,az=k.useRef(O),aA=k.useRef(h);k.useEffect(function(){az.current=O},[O]),ay(function(){aA.current!==h&&(ah(),aA.current=h)},[ah,h]);var aB=g({isLazy:aa,imgAttributes:at,heightInt:an,widthInt:am,qualityInt:ao,layout:W,className:H,imgStyle:ap,blurStyle:aq,loading:D,config:U,unoptimized:q,placeholder:Q,loader:X,srcString:au,onLoadingCompleteRef:az,setBlurComplete:ad,setIntersection:af,isVisible:ai,noscriptSizes:i},V);return k.default.createElement(k.default.Fragment,null,k.default.createElement("span",{style:aj},al?k.default.createElement("span",{style:ak},b?k.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:b}):null):null,k.default.createElement(C,Object.assign({},aB))),B?k.default.createElement(l.default,null,k.default.createElement("link",Object.assign({key:"__nimg-"+at.src+at.srcSet+at.sizes,rel:"preload",as:"image",href:at.srcSet?void 0:at.src},ax))):null)};var g=c(6495).Z,h=c(2648).Z,i=c(1598).Z,j=c(7273).Z,k=i(c(7294)),l=h(c(5443)),m=c(9309),n=c(7190),o=c(9977);c(3794);var p=c(2392),q={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},r=(q.experimentalRemotePatterns,q.experimentalUnoptimized),s={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1},t=new Set,u="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",v=new Map([["default",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality;return c.endsWith(".svg")&&!b.dangerouslyAllowSVG?c:"".concat(p.normalizePathTrailingSlash(b.path),"?url=").concat(encodeURIComponent(c),"&w=").concat(d,"&q=").concat(e||75)}],["imgix",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=new URL("".concat(b.path).concat(D(c))),g=f.searchParams;return g.set("auto",g.getAll("auto").join(",")||"format"),g.set("fit",g.get("fit")||"max"),g.set("w",g.get("w")||d.toString()),e&&g.set("q",e.toString()),f.href}],["cloudinary",function(a){var b=a.config,c=a.src,d=a.width,e=a.quality,f=["f_auto","c_limit","w_"+d,"q_"+(e||"auto")].join(",")+"/";return"".concat(b.path).concat(f).concat(D(c))}],["akamai",function(a){var b=a.config,c=a.src,d=a.width;return"".concat(b.path).concat(D(c),"?imwidth=").concat(d)}],["custom",function(a){var b=a.src;throw Error('Image with src "'.concat(b,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}],]);function w(a){return void 0!==a.default}function x(a){var b;return"object"==typeof a&&(w(a)|| void 0!==(b=a).src)}function y(a){var b=a.config,c=a.src,d=a.unoptimized,e=a.layout,g=a.width,h=a.quality,i=a.sizes,j=a.loader;if(d)return{src:c,srcSet:void 0,sizes:void 0};var k=function(a,b,c,d){var e=a.deviceSizes,g=a.allSizes;if(d&&("fill"===c||"responsive"===c)){for(var h=/(^|\s)(1?\d?\d)vw/g,i=[];j=h.exec(d);j)i.push(parseInt(j[2]));if(i.length){var j,k,l=.01*(k=Math).min.apply(k,f(i));return{widths:g.filter(function(a){return a>=e[0]*l}),kind:"w"}}return{widths:g,kind:"w"}}return"number"!=typeof b||"fill"===c||"responsive"===c?{widths:e,kind:"w"}:{widths:f(new Set([b,2*b].map(function(a){return g.find(function(b){return b>=a})||g[g.length-1]}))),kind:"x"}}(b,g,e,i),l=k.widths,m=k.kind,n=l.length-1;return{sizes:i||"w"!==m?i:"100vw",srcSet:l.map(function(a,d){return"".concat(j({config:b,src:c,quality:h,width:a})," ").concat("w"===m?a:d+1).concat(m)}).join(", "),src:j({config:b,src:c,quality:h,width:l[n]})}}function z(a){return"number"==typeof a?a:"string"==typeof a?parseInt(a,10):void 0}function A(a){var b,c=(null==(b=a.config)?void 0:b.loader)||"default",d=v.get(c);if(d)return d(a);throw Error('Unknown "loader" found in "next.config.js". Expected: '.concat(m.VALID_LOADERS.join(", "),". Received: ").concat(c))}function B(a,b,c,d,e,f){a&&a.src!==u&&a["data-loaded-src"]!==b&&(a["data-loaded-src"]=b,("decode"in a?a.decode():Promise.resolve()).catch(function(){}).then(function(){if(a.parentNode&&(t.add(b),"blur"===d&&f(!0),null==e?void 0:e.current)){var c=a.naturalWidth,g=a.naturalHeight;e.current({naturalWidth:c,naturalHeight:g})}}))}var C=function(a){var b=a.imgAttributes,c=(a.heightInt,a.widthInt),d=a.qualityInt,e=a.layout,f=a.className,h=a.imgStyle,i=a.blurStyle,l=a.isLazy,m=a.placeholder,n=a.loading,o=a.srcString,p=a.config,q=a.unoptimized,r=a.loader,s=a.onLoadingCompleteRef,t=a.setBlurComplete,u=a.setIntersection,v=a.onLoad,w=a.onError,x=(a.isVisible,a.noscriptSizes),z=j(a,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible","noscriptSizes"]);return n=l?"lazy":n,k.default.createElement(k.default.Fragment,null,k.default.createElement("img",Object.assign({},z,b,{decoding:"async","data-nimg":e,className:f,style:g({},h,i),ref:k.useCallback(function(a){u(a),(null==a?void 0:a.complete)&&B(a,o,e,m,s,t)},[u,o,e,m,s,t,]),onLoad:function(a){B(a.currentTarget,o,e,m,s,t),v&&v(a)},onError:function(a){"blur"===m&&t(!0),w&&w(a)}})),(l||"blur"===m)&&k.default.createElement("noscript",null,k.default.createElement("img",Object.assign({},z,y({config:p,src:o,unoptimized:q,layout:e,width:c,quality:d,sizes:x,loader:r}),{decoding:"async","data-nimg":e,style:h,className:f,loading:n}))))};function D(a){return"/"===a[0]?a.slice(1):a}("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&& void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)},3881:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSP":function(){return p},default:function(){return q}});var d=c(5893),e=c(9008),f=c.n(e);c(5675),c(7294);var g=c(8005),h=c(837),i=c.n(h),j=c(1664),k=c.n(j),l=function(a){var b=a.list,c=function(a){if(void 0===a)return null;var b=a.temperament.split(",");return"".concat(b[0],", ").concat(b[1],", ").concat(b[2])};return(0,d.jsx)("div",{children:(0,d.jsx)(g.Z,{columns:3,children:(0,d.jsx)(g.Z.Row,{children:b.map(function(a){return(0,d.jsx)(g.Z.Column,{alt:a.name,children:(0,d.jsx)(k(),{href:"/view/[id]",as:"/view/".concat(a.name),children:(0,d.jsx)("a",{children:(0,d.jsxs)("div",{className:i().wrap,children:[(0,d.jsx)("img",{src:a.image.url,alt:a.name,className:i().img_item}),(0,d.jsx)("strong",{className:i().tit_item,children:a.name}),(0,d.jsxs)("span",{className:i().txt_info,children:[(0,d.jsx)("span",{className:i().bold,children:"품종"})," : ",a.bred_for]}),(0,d.jsxs)("span",{className:i().txt_info,children:["몸무게 : ",a.weight.metric,"kg, 수명 : ",a.life_span]}),(0,d.jsxs)("strong",{className:i().txt_info,children:["기질: ",c(a)]})]})})})},a.id)})})})})},m=l,n=c(3623),o=c(345),p=!0;function q(a){var b=a.list;return(0,d.jsxs)("div",{children:[(0,d.jsxs)(f(),{children:[(0,d.jsx)("title",{children:"Home | 강아지 분양소 | 도그파크"}),(0,d.jsx)("meta",{name:"description",content:"도그 파크 홈입니다."})]}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.Z,{as:"h3",style:{paddingTop:40,marginBottom:40},children:"VIP 분양"}),(0,d.jsx)(o.Z,{}),(0,d.jsx)(m,{list:b.slice(0,12)}),(0,d.jsx)(n.Z,{as:"h3",style:{paddingTop:80,marginBottom:40},children:"베스트 분양"}),(0,d.jsx)(o.Z,{}),(0,d.jsx)(m,{list:b.slice(12,24)}),(0,d.jsx)(n.Z,{as:"h3",style:{paddingTop:80,marginBottom:40},children:"실시간 분양"}),(0,d.jsx)(o.Z,{}),(0,d.jsx)(m,{list:b.slice(24,60)})]})]})}},837:function(a){a.exports={wrap:"ItemList_wrap__N6maq",img_item:"ItemList_img_item__Bw9Bt",tit_item:"ItemList_tit_item__jzBCb",txt_info:"ItemList_txt_info__dx4Qs",num_price:"ItemList_num_price__O6rNE",bold:"ItemList_bold__L8Fzi"}},9008:function(a,b,c){a.exports=c(5443)},5675:function(a,b,c){c(8045)},8005:function(a,b,c){"use strict";c.d(b,{Z:function(){return n}});var d=c(7462),e=c(6010),f=c(7294),g=c(8459),h=c(8935),i=c(2519),j=c(727);function k(a){var b=a.children,c=a.className,j=a.computer,l=a.color,m=a.floated,n=a.largeScreen,o=a.mobile,p=a.only,q=a.stretched,r=a.tablet,s=a.textAlign,t=a.verticalAlign,u=a.widescreen,v=a.width,w=(0,e.Z)(l,(0,g.lG)(q,"stretched"),(0,g.MR)(p,"only"),(0,g.X4)(s),(0,g.cD)(m,"floated"),(0,g.Ok)(t),(0,g.H0)(j,"wide computer"),(0,g.H0)(n,"wide large screen"),(0,g.H0)(o,"wide mobile"),(0,g.H0)(r,"wide tablet"),(0,g.H0)(u,"wide widescreen"),(0,g.H0)(v,"wide"),"column",c),x=(0,h.Z)(k,a),y=(0,i.Z)(k,a);return f.createElement(y,(0,d.Z)({},x,{className:w}),b)}function l(a){var b=a.centered,c=a.children,j=a.className,k=a.color,m=a.columns,n=a.divided,o=a.only,p=a.reversed,q=a.stretched,r=a.textAlign,s=a.verticalAlign,t=(0,e.Z)(k,(0,g.lG)(b,"centered"),(0,g.lG)(n,"divided"),(0,g.lG)(q,"stretched"),(0,g.MR)(o,"only"),(0,g.MR)(p,"reversed"),(0,g.X4)(r),(0,g.Ok)(s),(0,g.H0)(m,"column",!0),"row",j),u=(0,h.Z)(l,a),v=(0,i.Z)(l,a);return f.createElement(v,(0,d.Z)({},u,{className:t}),c)}function m(a){var b=a.celled,c=a.centered,j=a.children,k=a.className,l=a.columns,n=a.container,o=a.divided,p=a.doubling,q=a.inverted,r=a.padded,s=a.relaxed,t=a.reversed,u=a.stackable,v=a.stretched,w=a.textAlign,x=a.verticalAlign,y=(0,e.Z)("ui",(0,g.lG)(c,"centered"),(0,g.lG)(n,"container"),(0,g.lG)(p,"doubling"),(0,g.lG)(q,"inverted"),(0,g.lG)(u,"stackable"),(0,g.lG)(v,"stretched"),(0,g.sU)(b,"celled"),(0,g.sU)(o,"divided"),(0,g.sU)(r,"padded"),(0,g.sU)(s,"relaxed"),(0,g.MR)(t,"reversed"),(0,g.X4)(w),(0,g.Ok)(x),(0,g.H0)(l,"column",!0),"grid",k),z=(0,h.Z)(m,a),A=(0,i.Z)(m,a);return f.createElement(A,(0,d.Z)({},z,{className:y}),j)}k.handledProps=["as","children","className","color","computer","floated","largeScreen","mobile","only","stretched","tablet","textAlign","verticalAlign","widescreen","width"],k.propTypes={},k.create=(0,j.u5)(k,function(a){return{children:a}}),l.handledProps=["as","centered","children","className","color","columns","divided","only","reversed","stretched","textAlign","verticalAlign"],l.propTypes={},m.handledProps=["as","celled","centered","children","className","columns","container","divided","doubling","inverted","padded","relaxed","reversed","stackable","stretched","textAlign","verticalAlign"],m.Column=k,m.Row=l,m.propTypes={};var n=m},345:function(a,b,c){"use strict";var d=c(7462),e=c(6010),f=c(7294),g=c(8459),h=c(8935),i=c(2519),j=c(2248);function k(a){var b=a.children,c=a.className,l=a.clearing,m=a.content,n=a.fitted,o=a.hidden,p=a.horizontal,q=a.inverted,r=a.section,s=a.vertical,t=(0,e.Z)("ui",(0,g.lG)(l,"clearing"),(0,g.lG)(n,"fitted"),(0,g.lG)(o,"hidden"),(0,g.lG)(p,"horizontal"),(0,g.lG)(q,"inverted"),(0,g.lG)(r,"section"),(0,g.lG)(s,"vertical"),"divider",c),u=(0,h.Z)(k,a),v=(0,i.Z)(k,a);return f.createElement(v,(0,d.Z)({},u,{className:t}),j.kK(b)?m:b)}k.handledProps=["as","children","className","clearing","content","fitted","hidden","horizontal","inverted","section","vertical"],k.propTypes={},b.Z=k}},function(a){a.O(0,[774,888,179],function(){var b;return a(a.s=5557)}),_N_E=a.O()}])