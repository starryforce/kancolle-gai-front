webpackJsonp([1],{"+Im3":function(e,t){},"37z1":function(e,t){},"3m1L":function(e,t){},"4rEb":function(e,t){},"5BGR":function(e,t){},"5Tkl":function(e,t){},IuBe:function(e,t){},JJxL:function(e,t){},JWkI:function(e,t){},KoPS:function(e,t){},NHnr:function(e,t,r){"use strict";function a(e){r("JWkI")}function n(e){r("JJxL")}function s(e){r("oclS"),r("zOAo"),r("4rEb")}function i(e){r("v3Cf")}function o(e){r("KoPS")}function c(e){r("RVFI")}function l(e){r("5Tkl")}function u(e){r("37z1")}function p(e){r("3m1L")}function d(e){r("xAfj")}function m(e){r("Qz/L")}function v(e){r("jvM6"),r("RI3y")}function h(e){r("bMpz")}function f(e){r("5BGR")}function _(e){r("IuBe")}function g(e){r("+Im3")}function y(e){r("QKuC")}Object.defineProperty(t,"__esModule",{value:!0});var b=r("7+uW"),x=r("mtWM"),w=r.n(x),C=r("zL8q"),k=r.n(C),$=(r("tvR6"),r("Xxa5")),T=r.n($),S=r("exGp"),R=r.n(S),L=r("Dd8w"),F=r.n(L),E=r("NYxO"),I={name:"HomeHeader",data:function(){return{keyword:"",activeRouter:"/home"}},computed:F()({},Object(E.b)({isLogin:"isLogin"})),methods:{signOut:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/v1/sign_out");case 2:return r=t.sent,e.$store.dispatch("checkLogin"),t.abrupt("return",r.data.result);case 5:case"end":return t.stop()}},t,e)}))()}}},U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-header",{staticClass:"m-header"},[r("el-row",{staticClass:"content",attrs:{type:"flex",align:"middle"}},[r("el-col",{attrs:{span:3}},[r("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v("\n        舰娘魔改\n      ")])],1),e._v(" "),r("el-col",{attrs:{span:5,offset:1}},[r("el-input",{attrs:{placeholder:"开始翻小姐姐的衣橱",clearable:""},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1),e._v(" "),r("el-col",{attrs:{span:2}},[r("el-button",{staticClass:"search_button",attrs:{type:"primary",icon:"el-icon-search"}},[e._v("成为绅士")])],1),e._v(" "),r("el-col",{attrs:{span:10,offset:2}},[r("el-menu",{staticClass:"nav",attrs:{mode:"horizontal","default-active":e.activeRouter,router:""}},[r("el-menu-item",{attrs:{index:"/home"}},[e._v("主页")]),e._v(" "),r("el-menu-item",{attrs:{index:"/console"}},[e._v("控制台")]),e._v(" "),r("el-menu-item",{staticClass:"m-hoverable",attrs:{index:"/login"}},[e.isLogin?e._e():r("span",[e._v("登录")]),e._v(" "),e.isLogin?r("span",{staticClass:"normal"},[e._v("已登录")]):e._e(),e._v(" "),e.isLogin?r("span",{staticClass:"hover",on:{click:function(t){t.stopPropagation(),e.signOut(t)}}},[e._v("注销")]):e._e()]),e._v(" "),r("el-menu-item",{attrs:{index:"/register"}},[e._v("注册")])],1)],1)],1)],1)},D=[],N={render:U,staticRenderFns:D},z=N,P=r("VU/8"),A=a,B=P(I,z,!1,A,"data-v-11256b61",null),M=B.exports,V={name:"HomeFooter"},q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-footer",{staticClass:"m-footer"},[r("section",{staticClass:"content"},[e._v("\n    Copyright © gakki.tv\n    "),r("span",{staticClass:"creator"},[e._v("By: "),r("a",{attrs:{href:"https://github.com/starryforce",target:"_ablank"}},[e._v("starryforce")])])])])},H=[],j={render:q,staticRenderFns:H},O=j,J=r("VU/8"),G=n,Q=J(V,O,!1,G,"data-v-36da662d",null),Z=Q.exports,K={name:"App",components:{HomeHeader:M,HomeFooter:Z},beforeCreate:function(){var e=this;this.$store.dispatch("checkLogin").then(function(){var t=e.$store.state.isLogin;e.$router.currentRoute.matched.some(function(e){return e.meta.requiresAuth})&&(t||e.$router.push({path:"/login",query:{redirect:e.$router.fullPath}}))})}},W=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app",direction:"vertical"}},[r("HomeHeader"),e._v(" "),r("router-view",{staticClass:"g-main"}),e._v(" "),r("HomeFooter")],1)},X=[],Y={render:W,staticRenderFns:X},ee=Y,te=r("VU/8"),re=s,ae=te(K,ee,!1,re,null,null),ne=ae.exports,se=r("/ocq"),ie={name:"NavMenuSub",props:{menuInfo:{type:Object}}},oe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.menuInfo.type?r("el-submenu",{key:e.menuInfo.type,attrs:{index:e.menuInfo.type}},[r("template",{slot:"title"},[r("i",{staticClass:"el-icon-setting"}),e._v(" "),r("span",[e._v(e._s(e.menuInfo.type))])]),e._v(" "),e._l(e.menuInfo.subs,function(e){return[r("NavMenuSub",{key:e.type,attrs:{"menu-info":e,index:e.type}})]})],2):r("el-menu-item",{key:e.menuInfo.name,attrs:{index:e.menuInfo.name}},[e._v("\n  "+e._s(e.menuInfo.name)+"\n")])},ce=[],le={render:oe,staticRenderFns:ce},ue=le,pe=r("VU/8"),de=i,me=pe(ie,ue,!1,de,"data-v-6c5f4ede",null),ve=me.exports,he={name:"NavMenu",components:{NavMenuSub:ve},data:function(){return{isCollapse:!1,menuInfo:[]}},mounted:function(){this.getMenu()},methods:{getMenu:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_menu");case 2:r=t.sent,e.menuInfo=r.data;case 4:case"end":return t.stop()}},t,e)}))()}}},fe=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-switch",{attrs:{"active-text":"展开","inactive-text":"折叠"},model:{value:e.isCollapse,callback:function(t){e.isCollapse=t},expression:"isCollapse"}}),e._v(" "),r("el-menu",{staticClass:"m-menu",attrs:{"unique-opened":"",collapse:!e.isCollapse}},e._l(e.menuInfo,function(e){return r("NavMenuSub",{key:e.type,attrs:{"menu-info":e}})}))],1)},_e=[],ge={render:fe,staticRenderFns:_e},ye=ge,be=r("VU/8"),xe=o,we=be(he,ye,!1,xe,"data-v-02c7179d",null),Ce=we.exports,ke={name:"CardThumbnail",components:{},props:{id:{type:String},name:{type:String},preview:{type:String},download_times:{type:Number},rate:{type:Number}},data:function(){return{}},computed:{card_url:function(){return"/card_detail/"+this.id}}},$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-card_thumbnail"},[r("router-link",{attrs:{to:e.card_url}},[r("img",{attrs:{src:e.preview,alt:e.name}}),e._v(" "),r("p",[e._v(e._s(e.name))]),e._v(" "),r("p",[r("span",[e._v("下载:"+e._s(e.download_times))]),e._v(" "),r("span",[e._v("评分:"+e._s(e.rate))])])])],1)},Te=[],Se={render:$e,staticRenderFns:Te},Re=Se,Le=r("VU/8"),Fe=c,Ee=Le(ke,Re,!1,Fe,"data-v-0f365804",null),Ie=Ee.exports,Ue={methods:{getShipCards:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.type,a=void 0===r?"detail":r,n=t.values,s=void 0===n?[]:n,i=t.offset,o=void 0===i?0:i,c=t.limit,l=void 0===c?8:c,u=t.sortBy,p=void 0===u?"downloadTimes":u,d=t.order,m=void 0===d?"DESC":d;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_cards",{params:{type:a,values:s,offset:o,limit:l,sortBy:p,order:m}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,e)}))()}}},De={name:"ShowZone",components:{CardThumbnail:Ie},mixins:[Ue],props:{sort:String},data:function(){return{shipCards:[]}},computed:{result_url:function(){return"/explore/"+this.sort}},mounted:function(){var e=this;return R()(T.a.mark(function t(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:e.getShipCards({sortBy:e.sort}).then(function(t){e.shipCards=t});case 1:case"end":return t.stop()}},t,e)}))()},methods:{}},Ne=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-showZone"},[r("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"space-between"}},[r("el-col",{attrs:{span:6}},[r("h1",[e._t("default",[e._v("板块标题")])],2)]),e._v(" "),r("el-col",{attrs:{span:6}},[r("router-link",{attrs:{to:e.result_url}},[e._v("更多")])],1)],1),e._v(" "),r("main",[r("div",{staticClass:"m-cards clearfix"},e._l(e.shipCards,function(t){return r("CardThumbnail",e._b({key:t.id,staticClass:"item"},"CardThumbnail",t,!1))}))])],1)},ze=[],Pe={render:Ne,staticRenderFns:ze},Ae=Pe,Be=r("VU/8"),Me=l,Ve=Be(De,Ae,!1,Me,"data-v-2e90174e",null),qe=Ve.exports,He={name:"HomeMain",components:{NavMenu:Ce,ShowZone:qe},mixins:[Ue],data:function(){return{shipCards:[]}},computed:F()({},Object(E.b)({isLogin:"isLogin"})),mounted:function(){var e=this;this.getShipCards({sortBy:"uploadTime",limit:5}).then(function(t){e.shipCards=t})},methods:{}},je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-aside",{attrs:{width:"auto"}},[r("NavMenu")],1),e._v(" "),r("el-main",{staticClass:"m-home"},[r("div",{staticClass:"top"},[r("el-carousel",{staticClass:"carousel",attrs:{interval:4e3,type:"card",height:"300px"}},e._l(e.shipCards,function(e){return r("el-carousel-item",{key:e.id},[r("router-link",{attrs:{to:"/card_detail/"+e.id}},[r("img",{attrs:{src:e.preview,alt:e.name}})])],1)})),e._v(" "),r("section",{staticClass:"panel"},[e.isLogin?r("div",[r("p",[e._v("头像占位符")]),e._v(" "),r("p",[e._v("描述占位符")]),e._v(" "),r("p",[e._v("个人信息占位符")]),e._v(" "),r("router-link",{attrs:{to:"/console/card"}},[r("button",[e._v("上传魔改")])])],1):r("div",[r("router-link",{attrs:{to:"/login"}},[r("button",[e._v("登录")])])],1)])],1),e._v(" "),r("ShowZone",{staticClass:"clearfix",attrs:{sort:"uploadTime"}},[e._v("最新")]),e._v(" "),r("ShowZone",{staticClass:"clearfix",attrs:{sort:"downloadTimes"}},[e._v("下载最多")])],1)],1)},Oe=[],Je={render:je,staticRenderFns:Oe},Ge=Je,Qe=r("VU/8"),Ze=u,Ke=Qe(He,Ge,!1,Ze,"data-v-5613a922",null),We=Ke.exports,Xe={name:"ConsoleMain"},Ye=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-aside",[r("el-menu",[r("el-menu-item",{attrs:{index:"1"}},[r("i",{staticClass:"el-icon-menu"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[r("router-link",{attrs:{to:"/console/ship_type"}},[e._v("舰船类型管理")])],1)]),e._v(" "),r("el-menu-item",{attrs:{index:"2"}},[r("i",{staticClass:"el-icon-menu"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[r("router-link",{attrs:{to:"/console/ship"}},[e._v("舰船管理")])],1)]),e._v(" "),r("el-menu-item",{attrs:{index:"3"}},[r("i",{staticClass:"el-icon-menu"}),e._v(" "),r("span",{attrs:{slot:"title"},slot:"title"},[r("router-link",{attrs:{to:"/console/card"}},[e._v("魔改管理")])],1)])],1)],1),e._v(" "),r("router-view")],1)},et=[],tt={render:Ye,staticRenderFns:et},rt=tt,at=r("VU/8"),nt=p,st=at(Xe,rt,!1,nt,"data-v-e7fae5ca",null),it=st.exports,ot=r("mvHQ"),ct=r.n(ot),lt={name:"ConsoleShipType",data:function(){return{shipType:{shipType:"",shipSubtype:""},shipTypeRules:{shipType:[{required:!0,message:"请输入舰船类型",trigger:"blur"}],shipSubtype:[{required:!0,message:"请输入舰船子类型",trigger:"blur"}]}}},mounted:function(){},methods:{createShipType:function(e){var t=this;this.$refs[e].validate(function(r){return!!r&&(t.$http.post("/v1/ship_types",t.shipType).then(function(e){t.result=ct()(e.data)}),t.$refs[e].resetFields(),!1)})}}},ut=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[e._v("舰船类型管理")]),e._v(" "),r("el-main",[r("el-form",{ref:"shipType",attrs:{model:e.shipType,rules:e.shipTypeRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"类型",prop:"shipType"}},[r("el-input",{model:{value:e.shipType.shipType,callback:function(t){e.$set(e.shipType,"shipType","string"==typeof t?t.trim():t)},expression:"shipType.shipType"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"子类型",prop:"shipSubtype"}},[r("el-input",{model:{value:e.shipType.shipSubtype,callback:function(t){e.$set(e.shipType,"shipSubtype","string"==typeof t?t.trim():t)},expression:"shipType.shipSubtype"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.createShipType("shipType")}}},[e._v("立即创建")])],1)],1)],1)],1)},pt=[],dt={render:ut,staticRenderFns:pt},mt=dt,vt=r("VU/8"),ht=d,ft=vt(lt,mt,!1,ht,"data-v-6db5cedd",null),_t=ft.exports,gt=r("lHA8"),yt=r.n(gt),bt=r("Gu7T"),xt=r.n(bt),wt={name:"ConsoleShip",components:{},data:function(){return{ship:{code:"",name:"",type:[]},shipRules:{code:[{required:!0,message:"请输入图鉴ID",trigger:"blur"}],name:[{required:!0,message:"请输入舰船名称",trigger:"blur"}]},shipTypeList:[]}},computed:{options:function(){var e=[],t=[];return this.shipTypeList.forEach(function(e){t.push(e.ship_type)}),[].concat(xt()(new yt.a(t))).forEach(function(t){e.push({value:t,label:t,children:[]})}),this.shipTypeList.forEach(function(t){for(var r=0;r<e.length;r+=1)t.ship_type===e[r].value&&e[r].children.push({value:t.id,label:t.ship_subtype})}),e}},mounted:function(){this.initTypeDatas()},methods:{submit:function(){var e=this;return R()(T.a.mark(function t(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/v1/ships",{code:Number(e.ship.code),name:e.ship.name,ship_type_id:e.ship.type[1]});case 2:case"end":return t.stop()}},t,e)}))()},handleChange:function(e){return e},initTypeDatas:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_types");case 2:r=t.sent,e.shipTypeList=r.data;case 4:case"end":return t.stop()}},t,e)}))()}}},Ct=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[e._v("舰船管理")]),e._v(" "),r("el-main",[r("el-form",{ref:"ship",attrs:{model:e.ship,rules:e.shipRules,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"图鉴ID",prop:"code"}},[r("el-input",{attrs:{placeholder:"请输入图鉴ID"},model:{value:e.ship.code,callback:function(t){e.$set(e.ship,"code",e._n(t))},expression:"ship.code"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"舰名",prop:"name"}},[r("el-input",{attrs:{placeholder:"请输入舰名"},model:{value:e.ship.name,callback:function(t){e.$set(e.ship,"name","string"==typeof t?t.trim():t)},expression:"ship.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"类型"}},[r("el-cascader",{attrs:{"expand-trigger":"hover",options:e.options},on:{change:e.handleChange},model:{value:e.ship.type,callback:function(t){e.$set(e.ship,"type",t)},expression:"ship.type"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即创建")])],1)],1)],1)],1)},kt=[],$t={render:Ct,staticRenderFns:kt},Tt=$t,St=r("VU/8"),Rt=m,Lt=St(wt,Tt,!1,Rt,"data-v-9c284bbc",null),Ft=Lt.exports,Et={name:"MainConsoleCard",components:{},data:function(){return{card:{preview:"",name:"",type:[],shipName:"",fileName:"",creator:"",sourceUrl:"",uploader:"",pixivId:""},shipTypeList:[],ships:[],imageUrl:""}},computed:{shipTypes:function(){var e=[],t=[];return this.shipTypeList.forEach(function(e){t.push(e.ship_type)}),[].concat(xt()(new yt.a(t))).forEach(function(t){e.push({value:t,label:t,children:[]})}),this.shipTypeList.forEach(function(t){for(var r=0;r<e.length;r+=1)t.ship_type===e[r].value&&e[r].children.push({value:t.id,label:t.ship_subtype})}),e},shipsOptions:function(){var e=[];return this.ships.forEach(function(t){e.push({value:t.id,label:t.name})}),e}},mounted:function(){this.initTypeDatas()},methods:{submit:function(){var e=this;return R()(T.a.mark(function t(){return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.post("/v1/ship_cards",{preview:e.card.preview,name:e.card.name,ship_id:e.card.shipName,file_name:e.card.fileName,creator:e.card.creator,source_url:e.card.sourceUrl,uploader:e.card.uploader,pixiv_id:e.card.pixivId});case 2:case"end":return t.stop()}},t,e)}))()},getShipsByType:function(e){var t=this;return R()(T.a.mark(function r(){var a;return T.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.$http.get("/v1/ships?type="+e);case 2:a=r.sent,t.ships=a.data;case 4:case"end":return r.stop()}},r,t)}))()},initTypeDatas:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_types");case 2:r=t.sent,e.shipTypeList=r.data;case 4:case"end":return t.stop()}},t,e)}))()},uploadPreviewSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw),this.card.preview=e.path},uploadFileSuccess:function(e){this.card.fileName=e.fileName},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,r=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),r||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&r}}},It=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[e._v("魔改管理")]),e._v(" "),r("el-main",[r("el-form",{ref:"card",attrs:{model:e.card,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称"}},[r("el-input",{model:{value:e.card.name,callback:function(t){e.$set(e.card,"name",t)},expression:"card.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"预览图"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:"/v1/previews","show-file-list":!1,"on-success":e.uploadPreviewSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?r("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),e._v(" "),r("el-form-item",{attrs:{label:"类型"}},[r("el-cascader",{attrs:{"expand-trigger":"hover",options:e.shipTypes},on:{change:function(t){e.getShipsByType(e.card.type[1])}},model:{value:e.card.type,callback:function(t){e.$set(e.card,"type",t)},expression:"card.type"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"舰名"}},[r("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.card.shipName,callback:function(t){e.$set(e.card,"shipName",t)},expression:"card.shipName"}},e._l(e.shipsOptions,function(e){return r("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"附件上传"}},[r("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"/v1/files","on-success":e.uploadFileSuccess,multiple:!1}},[r("i",{staticClass:"el-icon-upload"}),e._v(" "),r("div",{staticClass:"el-upload__text"},[e._v("将文件拖到此处，或"),r("em",[e._v("点击上传")])]),e._v(" "),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n            只能上传jpg/png文件，且不超过500kb\n          ")])])],1),e._v(" "),r("el-form-item",{attrs:{label:"画师名"}},[r("el-input",{model:{value:e.card.creator,callback:function(t){e.$set(e.card,"creator",t)},expression:"card.creator"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"上传者"}},[r("el-input",{model:{value:e.card.uploader,callback:function(t){e.$set(e.card,"uploader",t)},expression:"card.uploader"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"素材图源"}},[r("el-input",{model:{value:e.card.sourceUrl,callback:function(t){e.$set(e.card,"sourceUrl",t)},expression:"card.sourceUrl"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"Pixiv ID"}},[r("el-input",{model:{value:e.card.pixivId,callback:function(t){e.$set(e.card,"pixivId",t)},expression:"card.pixivId"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("立即创建")])],1)],1)],1)],1)},Ut=[],Dt={render:It,staticRenderFns:Ut},Nt=Dt,zt=r("VU/8"),Pt=v,At=zt(Et,Nt,!1,Pt,"data-v-ea84c7a2",null),Bt=At.exports,Mt={name:"CardThumbnailExplore",components:{},props:{id:{type:String},name:{type:String},preview:{type:String}},data:function(){return{}},computed:{card_url:function(){return"/card_detail/"+this.id}}},Vt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"m-card_thumbnail_explore",attrs:{to:e.card_url}},[r("div",{staticClass:"m-preview"},[r("img",{attrs:{src:e.preview,alt:e.name}})]),e._v(" "),r("div",{staticClass:"m-introduction"},[r("h1",[e._v(e._s(e.name))]),e._v(" "),r("p",{staticClass:"tags"},[e._v("圣诞 冬季 西方")]),e._v(" "),r("p",{staticClass:"download_times"},[e._v("下载 NA次")]),e._v(" "),r("p",{staticClass:"rate"},[e._v("评分 "),r("span",[e._v("NA")])])])])},qt=[],Ht={render:Vt,staticRenderFns:qt},jt=Ht,Ot=r("VU/8"),Jt=h,Gt=Ot(Mt,jt,!1,Jt,"data-v-0f9b5c92",null),Qt=Gt.exports,Zt={name:"ExploreCards",components:{CardThumbnailExplore:Qt},mixins:[Ue],props:{sort:String},data:function(){return{shipCards:[],pageSize:1,currentPage:1,cardTotal:0}},mounted:function(){var e=this;this.getTotal().then(function(t){e.cardTotal=t}),this.getShipCards({type:"detail",sortBy:"uploadTime",limit:this.pageSize,offset:this.pageSize*(this.currentPage-1),order:"DESC"}).then(function(t){e.shipCards=t})},methods:{getTotal:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_cards",{params:{type:"quantity"}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}},t,e)}))()},handleSizeChange:function(e){var t=this;this.pageSize=e,this.getShipCards({sortBy:"uploadTime",limit:e,offset:e*(this.currentPage-1)}).then(function(e){t.shipCards=e})},handleCurrentChange:function(e){var t=this;this.currentPage=e,this.getShipCards({sortBy:"uploadTime",limit:this.pageSize,offset:this.pageSize*(e-1)}).then(function(e){t.shipCards=e})}}},Kt=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-aside"),e._v(" "),r("el-main",[r("el-container",[r("el-header"),e._v(" "),r("el-main",e._l(e.shipCards,function(t){return r("CardThumbnailExplore",e._b({key:t.key},"CardThumbnailExplore",t,!1))})),e._v(" "),r("el-footer",[r("el-pagination",{attrs:{"current-page":e.currentPage,"page-sizes":[1,2,3,4,5,10],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.cardTotal,background:!0},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1),e._v(" "),r("el-aside")],1)},Wt=[],Xt={render:Kt,staticRenderFns:Wt},Yt=Xt,er=r("VU/8"),tr=f,rr=er(Zt,Yt,!1,tr,"data-v-e70b73ca",null),ar=rr.exports,nr={name:"CardDetail",components:{},props:{id:{type:String}},data:function(){return{cardDetails:{},avgRate:4.5,privateRate:5,downloadUrl:""}},computed:{},mounted:function(){this.getCardDetails()},methods:{getCardDetails:function(){var e=this;return R()(T.a.mark(function t(){var r;return T.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$http.get("/v1/ship_cards/"+e.id);case 2:r=t.sent,e.cardDetails=r.data,e.downloadUrl="/v1/files/"+e.cardDetails.file_name;case 5:case"end":return t.stop()}},t,e)}))()}}},sr=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{staticClass:"m-card_detail"},[r("el-main",{staticClass:"main"},[r("section",{staticClass:"detail"},[r("h1",[e._v("\n        "+e._s(e.cardDetails.name)+"\n      ")]),e._v(" "),r("section",{staticClass:"avg_rate"},[r("p",[r("span",[r("strong",[e._v("评分 ")]),e._v(e._s(e.avgRate))])]),e._v(" "),r("el-rate",{attrs:{disabled:"",colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:e.avgRate,callback:function(t){e.avgRate=t},expression:"avgRate"}})],1),e._v(" "),r("table",[r("tr",[r("td",[e._v("舰名")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.shipName))])]),e._v(" "),r("tr",[r("td",[e._v("舰种")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.shipType)+e._s(e.cardDetails.shipSubtype))])]),e._v(" "),r("tr",[r("td",[e._v("素材来源")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.source_url))])]),e._v(" "),r("tr",[r("td",[e._v("画师")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.creator))])]),e._v(" "),r("tr",[r("td",[e._v("Pixiv ID")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.pixiv_id))])]),e._v(" "),r("tr",[r("td",[e._v("上传者")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.uploader))])]),e._v(" "),r("tr",[r("td",[e._v("上传时间")]),e._v(" "),r("td",[e._v(e._s(e.cardDetails.created_at))])]),e._v(" "),r("tr",[r("td",[e._v("评价")]),e._v(" "),r("td",[r("el-rate",{attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"]},model:{value:e.privateRate,callback:function(t){e.privateRate=t},expression:"privateRate"}})],1)])])]),e._v(" "),r("section",{staticClass:"preview"},[r("img",{attrs:{src:e.cardDetails.preview,alt:"cardDetails.name"}}),e._v(" "),r("p",[r("strong",[e._v("下载次数")]),e._v(" "+e._s(e.cardDetails.download_times))]),e._v(" "),r("p",[r("a",{attrs:{href:e.downloadUrl,target:"_blank"}},[r("button",{staticClass:"download"},[e._v("下载")])]),e._v(" "),r("button",{staticClass:"favorite"},[e._v("收藏")])])]),e._v(" "),r("section",{staticClass:"comment"})]),e._v(" "),r("el-aside",{staticClass:"aside"})],1)},ir=[],or={render:sr,staticRenderFns:ir},cr=or,lr=r("VU/8"),ur=_,pr=lr(nr,cr,!1,ur,"data-v-34487c0c",null),dr=pr.exports,mr={name:"UserLogin",data:function(){return{login:{name:"",password:""},loginRules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:5,max:16,message:"长度在 5 到 16 个字符",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}]}}},computed:{isLogin:function(){return this.$store.state.isLogin}},methods:{processLogin:function(e){var t=this;this.$refs[e].validate(function(r){r&&t.$http.post("/v1/sign_in",{name:t.login.name,password:t.login.password}).then(function(r){if("success"===r.data.result){var a=t.$route.query.redirect;t.$refs[e].resetFields(),t.$store.dispatch("checkLogin").then(function(){"/login"!==a&&""!==a&&a?t.$router.push({path:a}):t.$router.push({path:"/"})})}})})},resetInfo:function(e){this.$refs[e].resetFields()}}},vr=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-login"},[r("h1",[e._v("登录")]),e._v(" "),r("el-form",{ref:"login",attrs:{model:e.login,rules:e.loginRules,"status-icon":"","label-width":"80px"}},[r("el-form-item",{attrs:{label:"昵称",prop:"name"}},[r("el-input",{model:{value:e.login.name,callback:function(t){e.$set(e.login,"name","string"==typeof t?t.trim():t)},expression:"login.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password"},model:{value:e.login.password,callback:function(t){e.$set(e.login,"password","string"==typeof t?t.trim():t)},expression:"login.password"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.processLogin("login")}}},[e._v("登录")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetInfo("login")}}},[e._v("重置")])],1),e._v(" "),r("p",[e._v(e._s(e.isLogin?"已登录":"未登录"))])],1)],1)},hr=[],fr={render:vr,staticRenderFns:hr},_r=fr,gr=r("VU/8"),yr=g,br=gr(mr,_r,!1,yr,null,null),xr=br.exports,wr={name:"UserRegister",data:function(){var e=this;return{register:{name:"",password:"",checkPassword:""},registerRules:{name:[{required:!0,message:"请输入昵称",trigger:"blur"},{min:5,max:16,message:"长度在 5 到 16 个字符",trigger:"blur"}],password:[{validator:function(t,r,a){""===r?a(new Error("请输入密码")):(""!==e.register.checkPassword&&e.$refs.register.validateField("checkPassword"),a())},trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}],checkPassword:[{validator:function(t,r,a){""===r?a(new Error("请再次输入密码")):r!==e.register.password?a(new Error("两次输入密码不一致!")):a()},trigger:"blur"},{min:6,max:16,message:"长度在 6 到 16 个字符",trigger:"blur"}]}}},methods:{processRegister:function(e){var t=this;this.$refs[e].validate(function(r){return!!r&&(t.$http.post("/v1/register",{name:t.register.name,password:t.register.password}).then(function(r){t.result=ct()(r.data),t.$refs[e].resetFields()}),!1)})},resetInfo:function(e){this.$refs[e].resetFields()}}},Cr=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"m-register"},[r("h1",[e._v("注册一个新的账号")]),e._v(" "),r("el-form",{ref:"register",attrs:{model:e.register,rules:e.registerRules,"status-icon":"","label-width":"80px"}},[r("el-form-item",{attrs:{label:"昵称",prop:"name"}},[r("el-input",{model:{value:e.register.name,callback:function(t){e.$set(e.register,"name","string"==typeof t?t.trim():t)},expression:"register.name"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"密码",prop:"password"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.register.password,callback:function(t){e.$set(e.register,"password","string"==typeof t?t.trim():t)},expression:"register.password"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"重复密码",prop:"checkPassword"}},[r("el-input",{attrs:{type:"password","auto-complete":"off"},model:{value:e.register.checkPassword,callback:function(t){e.$set(e.register,"checkPassword","string"==typeof t?t.trim():t)},expression:"register.checkPassword"}})],1),e._v(" "),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){e.processRegister("register")}}},[e._v("注册")]),e._v(" "),r("el-button",{on:{click:function(t){e.resetInfo("register")}}},[e._v("重置")])],1)],1)],1)},kr=[],$r={render:Cr,staticRenderFns:kr},Tr=$r,Sr=r("VU/8"),Rr=y,Lr=Sr(wr,Tr,!1,Rr,"data-v-6efd9b76",null),Fr=Lr.exports,Er={mode:"history",routes:[{path:"/",component:We},{path:"/home",name:"home",component:We},{path:"/login",name:"login",component:xr},{path:"/register",name:"register",component:Fr},{path:"/console",name:"console",component:it,meta:{requiresAuth:!0},children:[{path:"ship",name:"ship",component:Ft},{path:"ship_type",name:"shipType",component:_t},{path:"card",name:"card",component:Bt}]},{path:"/explore/:sort",name:"explore",component:ar,props:!0},{path:"/category",name:"category",component:ar},{path:"/card_detail/:id",name:"cardDetail",component:dr,props:!0}]},Ir={getLoginState:function(){var e=this;return R()(T.a.mark(function t(){var r,a;return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("/v1/checkLogin");case 2:return r=e.sent,a=r.data.isLogin,e.abrupt("return",a);case 5:case"end":return e.stop()}},t,e)}))()}};b.default.use(E.a);var Ur=new E.a.Store({state:{isLogin:!1},mutations:{checkLogin:function(e,t){e.isLogin=t}},actions:{checkLogin:function(e){var t=this,r=e.commit;return R()(T.a.mark(function e(){return T.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=r,e.next=3,Ir.getLoginState();case 3:e.t1=e.sent,(0,e.t0)("checkLogin",e.t1);case 5:case"end":return e.stop()}},e,t)}))()}}});b.default.use(se.a);var Dr=new se.a(Er);Dr.beforeEach(function(e,t,r){e.matched.some(function(e){return e.meta.requiresAuth})?Ur.dispatch("checkLogin").then(function(){Ur.state.isLogin||e===t?r():r({path:"/login",query:{redirect:e.fullPath}})}):r()});var Nr=Dr;b.default.prototype.$http=w.a,b.default.config.productionTip=!1,b.default.use(k.a),new b.default({el:"#app",router:Nr,store:Ur,template:"<App/>",components:{App:ne}})},QKuC:function(e,t){},"Qz/L":function(e,t){},RI3y:function(e,t){},RVFI:function(e,t){},bMpz:function(e,t){},jvM6:function(e,t){},oclS:function(e,t){},tvR6:function(e,t){},v3Cf:function(e,t){},xAfj:function(e,t){},zOAo:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.7b596a4596d85d60da13.js.map