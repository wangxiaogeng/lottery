(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],u=0,f=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);m&&m(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var m=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"1d39":function(t,e,i){t.exports=i.p+"img/feichuan.261a7360.png"},"1e03":function(t,e,i){t.exports=i.p+"img/gold.7752147e.png"},2888:function(t,e,i){"use strict";i("a684")},"4c33":function(t,e,i){t.exports=i.p+"img/plane.7ae9baab.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box"},[i("div",{staticClass:"btn"},[i("button",{class:{active:!t.show},on:{click:t.showRotary}},[t._v("转盘抽奖")]),i("button",{class:{active:t.show},on:{click:t.showGongge}},[t._v("宫格抽奖")])]),i("GongGeDraw",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]}),i("RotaryDraw",{directives:[{name:"show",rawName:"v-show",value:!t.show,expression:"!show"}]})],1)},a=[],r=i("8cb8"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrap"},[i("div",{ref:"inner",staticClass:"active",attrs:{id:"inner"}},[t._m(0),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7)]),i("div",{staticClass:"arrow",on:{click:t.startRotate}}),i("div",{ref:"info",staticClass:"drawInfo"})])},o=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods"},[s("div",[t._v("Iphonex11")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(45deg)"}},[s("div",[t._v("100元话费")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(90deg)"}},[s("div",[t._v("京东购物卡")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(135deg)"}},[s("div",[t._v("爱奇艺会员")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(180deg)"}},[s("div",[t._v("50元话费")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(225deg)"}},[s("div",[t._v("100购物积分")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(270deg)"}},[s("div",[t._v("周大福钻戒")]),s("img",{attrs:{src:i("d967"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"goods",staticStyle:{transform:"rotate(315deg)"}},[s("div",[t._v("1年QQ会员")]),s("img",{attrs:{src:i("d967"),alt:""}})])}],l=(i("fed6"),{data:function(){return{str:"恭喜获得Iphonex11"}},methods:{startRotate:function(){var t=this,e=Math.round(7*Math.random());switch(e){case 0:this.str="恭喜获得Iphonex11",this.$refs.inner.style="transform:rotate(".concat(45*e*360,"deg)");break;case 1:this.str="恭喜获得一年QQ会员",this.$refs.inner.style="transform:rotate(".concat(45*e*360+45,"deg)");break;case 2:this.str="恭喜获得周大福钻戒",this.$refs.inner.style="transform:rotate(".concat(45*e*360+90,"deg)");break;case 3:this.str="恭喜获得100购物积分",this.$refs.inner.style="transform:rotate(".concat(45*e*360+135,"deg)");break;case 4:this.str="恭喜获得50元话费",this.$refs.inner.style="transform:rotate(".concat(45*e*360+180,"deg)");break;case 5:this.str="恭喜获得爱奇艺会员",this.$refs.inner.style="transform:rotate(".concat(45*e*360+225,"deg)");break;case 6:this.str="恭喜获得京东购物卡",this.$refs.inner.style="transform:rotate(".concat(45*e*360+270,"deg)");break;case 7:this.str="恭喜获得100元话费",this.$refs.inner.style="transform:rotate(".concat(45*e*360+315,"deg)");break}setTimeout((function(){t.$refs.info.style="height:40px;",t.$refs.info.innerHTML=t.str}),3e3),setTimeout((function(){t.$refs.info.style="height:0px;",t.$refs.info.innerHTML=""}),6e3)}}}),m=l,u=(i("984e"),i("2877")),f=Object(u["a"])(m,c,o,!1,null,"ac62a14e",null),d=f.exports,v={data:function(){return{show:!1}},components:{GongGeDraw:r["default"],RotaryDraw:d},methods:{showRotary:function(){this.show=!1},showGongge:function(){this.show=!0}}},g=v,p=(i("034f"),Object(u["a"])(g,n,a,!1,null,null,null)),h=p.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(h)}}).$mount("#app")},"5f12":function(t,e,i){t.exports=i.p+"img/wan.a9c14611.png"},"79b3":function(t,e,i){},"85ec":function(t,e,i){},"8cb8":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("h3",[t._v("抽奖次数："+t._s(t.num))]),s("div",{attrs:{id:"outer"}},[s("div",{ref:"inner",staticClass:"inner"},[s("div",{staticClass:"same",class:{active:0===t.index},staticStyle:{left:"0",top:"0"}},[t._m(0),s("div",[t._v("黄金卡X6")])]),s("div",{staticClass:"same",class:{active:1===t.index},staticStyle:{left:"92px",top:"0"}},[t._m(1),s("div",[t._v("丸子X5")])]),s("div",{staticClass:"same",class:{active:2===t.index},staticStyle:{left:"184px",top:"0"}},[t._m(2),s("div",[t._v("火箭X4")])]),s("div",{staticClass:"same",class:{active:3===t.index},staticStyle:{left:"276px",top:"0"}},[t._m(3),s("div",[t._v("弹夹X2")])]),s("div",{staticClass:"same",class:{active:4===t.index},staticStyle:{left:"368px",top:"0"}},[t._m(4),s("div",[t._v("豆腐丸X9")])]),s("div",{staticClass:"same",class:{active:5===t.index},staticStyle:{left:"460px",top:"0"}},[t._m(5),s("div",[t._v("飞船X3")])]),s("div",{staticClass:"same",class:{active:6===t.index},staticStyle:{left:"460px",top:"92px"}},[t._m(6),s("div",[t._v("飞机X6")])]),s("div",{staticClass:"same",class:{active:7===t.index},staticStyle:{left:"460px",top:"184px"}},[t._m(7),s("div",[t._v("超级火箭X6")])]),s("div",{staticClass:"same",class:{active:8===t.index},staticStyle:{left:"460px",top:"276px"}},[t._m(8),s("div",[t._v("止痛药X6")])]),s("div",{staticClass:"same",class:{active:9===t.index},staticStyle:{left:"460px",top:"368px"}},[t._m(9),s("div",[t._v("给力X3")])]),s("div",{staticClass:"same",class:{active:10===t.index},staticStyle:{left:"368px",top:"368px"}},[t._m(10),s("div",[t._v("飞船X1")])]),s("div",{staticClass:"same",class:{active:11===t.index},staticStyle:{left:"276px",top:"368px"}},[t._m(11),s("div",[t._v("豆腐丸X7")])]),s("div",{staticClass:"same",class:{active:12===t.index},staticStyle:{left:"184px",top:"368px"}},[t._m(12),s("div",[t._v("飞机X9")])]),s("div",{staticClass:"same",class:{active:13===t.index},staticStyle:{left:"92px",top:"368px"}},[t._m(13),s("div",[t._v("弹夹X1")])]),s("div",{staticClass:"same",class:{active:14===t.index},staticStyle:{left:"0px",top:"368px"}},[t._m(14),s("div",[t._v("火箭X5")])]),s("div",{staticClass:"same",class:{active:15===t.index},staticStyle:{left:"0px",top:"276px"}},[t._m(15),s("div",[t._v("黄金卡X6")])]),s("div",{staticClass:"same",class:{active:16===t.index},staticStyle:{left:"0px",top:"184px"}},[t._m(16),s("div",[t._v("止痛药X6")])]),s("div",{staticClass:"same",class:{active:17===t.index},staticStyle:{left:"0px",top:"92px"}},[t._m(17),s("div",[t._v("给力X8")])]),t.isShowStart?s("button",{attrs:{id:"start"},on:{click:t.startChou}},[t._v("开始")]):s("button",{attrs:{id:"end"}},[t._v("抽奖中...")])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.infoShow,expression:"infoShow"}],attrs:{id:"showInfo"}},[s("div",[s("button",{on:{click:t.infoClick}},[t._v("X")]),s("div",{staticClass:"gotimg"},[s("img",{attrs:{src:i("f1c7")("./"+t.inoList[t.index].imgurl)}})]),s("p",{staticClass:"gotname"},[t._v(t._s(t.inoList[t.index].name))]),s("p",{staticClass:"gotnum"},[t._v(t._s(t.inoList[t.index].xnum)+"个")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.alertShow,expression:"alertShow"}],attrs:{id:"alertInfo"}},[t._v("抽奖次数不足，抓紧做任务赚取抽奖次数吧！！")])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("1e03"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("9e00"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("fe51"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("ee33"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("5f12"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("1d39"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("4c33"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("df1b"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("e736"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("f1f3"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("1d39"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("9e00"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("4c33"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("ee33"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("fe51"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("1e03"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("e736"),alt:""}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("img",{attrs:{src:i("f1f3"),alt:""}})])}],a={data:function(){return{num:5,isShowStart:!0,infoShow:!1,index:0,timer:null,timer2:null,n:5,alertShow:!1,inoList:[{imgurl:"images/gold.png",name:"黄金卡",xnum:6},{imgurl:"images/wanzi.png",name:"丸子",xnum:5},{imgurl:"images/rocket.png",name:"火箭",xnum:4},{imgurl:"images/dan.png",name:"弹夹",xnum:2},{imgurl:"images/wan.png",name:"豆腐丸",xnum:9},{imgurl:"images/feichuan.png",name:"飞船",xnum:3},{imgurl:"images/plane.png",name:"飞机",xnum:6},{imgurl:"images/superocket.png",name:"超级火箭",xnum:6},{imgurl:"images/yao.png",name:"止痛药",xnum:6},{imgurl:"images/geili.png",name:"给力",xnum:3},{imgurl:"images/feichuan.png",name:"飞船",xnum:1},{imgurl:"images/wanzi.png",name:"豆腐丸",xnum:7},{imgurl:"images/plane.png",name:"飞机",xnum:9},{imgurl:"images/dan.png",name:"弹夹",xnum:1},{imgurl:"images/rocket.png",name:"火箭",xnum:5},{imgurl:"images/gold.png",name:"黄金卡",xnum:6},{imgurl:"images/yao.png",name:"止痛药",xnum:6},{imgurl:"images/geili.png",name:"给力",xnum:8}]}},methods:{startChou:function(){var t=this;if(this.num>0){this.num--,this.isShowStart=!1;var e=Math.round(17*Math.random()),i=-1;this.timer=setInterval((function(){0===t.n&&(clearInterval(t.timer),t.index=0,t.timer2=setInterval((function(){t.index++,t.index===e&&(clearInterval(t.timer2),t.index=e,t.infoShow=!0)}),300)),i++,t.index++,18!==i&&18!==t.index||(i=0,t.index=0,t.n--)}),50)}else this.alertShow=!0,setTimeout((function(){t.alertShow=!1}),3e3)},infoClick:function(){this.infoShow=!1,this.isShowStart=!0,this.n=5,this.timer2=null,this.timer=null}}},r=a,c=(i("2888"),i("2877")),o=Object(c["a"])(r,s,n,!1,null,"3792c607",null);e["default"]=o.exports},"984e":function(t,e,i){"use strict";i("79b3")},"9e00":function(t,e,i){t.exports=i.p+"img/wanzi.79965d10.png"},a684:function(t,e,i){},d967:function(t,e,i){t.exports=i.p+"img/iphonex.1f5750ad.png"},df1b:function(t,e,i){t.exports=i.p+"img/superocket.48674875.png"},e736:function(t,e,i){t.exports=i.p+"img/yao.b7c3d6b1.png"},ee33:function(t,e,i){t.exports=i.p+"img/dan.8b85dc07.png"},f1c7:function(t,e,i){var s={"./":"8cb8","./images/dan.png":"ee33","./images/feichuan.png":"1d39","./images/geili.png":"f1f3","./images/gold.png":"1e03","./images/plane.png":"4c33","./images/rocket.png":"fe51","./images/superocket.png":"df1b","./images/wan.png":"5f12","./images/wanzi.png":"9e00","./images/yao.png":"e736","./index":"8cb8","./index.vue":"8cb8"};function n(t){var e=a(t);return i(e)}function a(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=a,t.exports=n,n.id="f1c7"},f1f3:function(t,e,i){t.exports=i.p+"img/geili.909453bb.png"},fe51:function(t,e,i){t.exports=i.p+"img/rocket.920f52cd.png"}});
//# sourceMappingURL=app.46d37a18.js.map