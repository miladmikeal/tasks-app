(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)o=i[d],r[o]&&p.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1b01":function(t,e,a){},"1f5b":function(t,e,a){"use strict";var s=a("1b01"),r=a.n(s);r.a},4678:function(t,e,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(t){var e=n(t);return a(e)}function n(t){var e=s[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}r.keys=function(){return Object.keys(s)},r.resolve=n,t.exports=r,r.id="4678"},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),r=a("bc3a"),n=a.n(r),o=a("75fc"),i=(a("96cf"),a("3b8d")),c=a("2f62");s["a"].use(c["a"]);var l=new c["a"].Store({state:{user:{},token:"",avatar:"/avatar.png",incompleteTasks:[],completeTasks:[]},getters:{getUser:function(t){return t.user},getToken:function(t){return t.token},getAvatar:function(t){return t.avatar},getIncompleteTasks:function(t){return t.incompleteTasks},getCompleteTasks:function(t){return t.completeTasks}},actions:{setUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,s("setUser",a);case 2:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),updateUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,t.prev=1,t.next=4,axios.patch("users/me",a);case 4:s("setUser",a),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[1,7]])}));function e(e,a){return t.apply(this,arguments)}return e}(),setToken:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,s("setToken",a);case 2:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),fetchIncompleteTasks:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,s,r,n,o=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,s=o.length>1&&void 0!==o[1]?o[1]:0,t.prev=2,r=100*s,t.next=6,axios.get("tasks?completed=false&limit=100&skip=".concat(r));case 6:n=t.sent,a("setIncompleteTasks",n.data),t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](2),console.log(t.t0);case 13:case"end":return t.stop()}},t,null,[[2,10]])}));function e(e){return t.apply(this,arguments)}return e}(),fetchCompleteTasks:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a,s,r,n,o,i=arguments;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,s=i.length>1&&void 0!==i[1]?i[1]:0,t.prev=2,r=100*s,t.next=6,axios.get("tasks?completed=true&limit=100&skip=".concat(r));case 6:n=t.sent,o=n.data.reverse(),a("setCompleteTasks",o),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](2),console.log(t.t0);case 14:case"end":return t.stop()}},t,null,[[2,11]])}));function e(e){return t.apply(this,arguments)}return e}(),addTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e.commit,t.prev=1,t.next=4,axios.post("tasks",{description:a});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.log(t.t0);case 9:case"end":return t.stop()}},t,null,[[1,6]])}));function e(e,a){return t.apply(this,arguments)}return e}(),editTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){var s,r,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,r=e.state,t.prev=1,t.next=4,axios.patch("tasks/".concat(a.id),{description:a.description});case 4:n=t.sent,i=[].concat(Object(o["a"])(r.incompleteTasks),[n]),s("setIncompleteTasks",i),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),console.log(t.t0);case 12:case"end":return t.stop()}},t,null,[[1,9]])}));function e(e,a){return t.apply(this,arguments)}return e}(),deleteTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e,a){var s,r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return s=e.commit,r=e.state,t.next=3,axios.delete("tasks/".concat(a));case 3:n=r.incompleteTasks,n.filter(function(t){return t.id!==a}),s("deleteTask",n);case 6:case"end":return t.stop()}},t)}));function e(e,a){return t.apply(this,arguments)}return e}(),signOut:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return a=e.commit,t.prev=1,t.next=4,axios.post("users/logout");case 4:a("signOut"),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](1),console.log(t.t0);case 10:case"end":return t.stop()}},t,null,[[1,7]])}));function e(e){return t.apply(this,arguments)}return e}()},mutations:{setUser:function(t,e){t.user=e},setToken:function(t,e){t.token=e},setAvatar:function(t,e){t.avatar=e},setIncompleteTasks:function(t,e){t.incompleteTasks=e},setCompleteTasks:function(t,e){t.completeTasks=e},deleteTask:function(t,e){t.incompleteTasks=e},signOut:function(t,e){t.user={},t.token=""}}}),u={baseURL:"https://mikeal-tasks-manager.herokuapp.com//",timeout:6e4,withCredentials:!1},d=n.a.create(u);d.interceptors.request.use(function(t){var e=l.getters.getToken;return e&&(t.headers.common.Authorization=e),t},function(t){return Promise.reject(t)}),d.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=d,window.axios=d,Object.defineProperties(t.prototype,{axios:{get:function(){return d}},$axios:{get:function(){return d}}})},s["a"].use(Plugin);Plugin;var p=a("bb71");a("da64");s["a"].use(p["a"],{iconfont:"md",theme:{primary:"#9652ff",success:"#3cd1c2",info:"#ffaa2c",error:"#f83e70"}});var f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{staticClass:"grey lighten-4"},[a("Navbar"),a("v-content",[a("router-view")],1)],1)},m=[],v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("v-toolbar",{attrs:{app:""}},[a("v-toolbar-side-icon",{staticClass:"grey--text",on:{click:function(e){t.drawer=!t.drawer}}}),a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Task")]),a("span",[t._v("Manager")])]),a("v-spacer"),t.getToken?a("v-toolbar-title",{staticClass:"text-uppercase grey--text"},[a("span",{staticClass:"font-weight-light"},[t._v("Welcome")]),a("span",[t._v(t._s(t.getUser.name))])]):t._e(),t.getToken?a("v-btn",{attrs:{flat:"",color:"grey"},on:{click:function(e){return t.logout()}}},[a("span",[t._v("Sign Out")]),a("v-icon",{attrs:{right:""}},[t._v("exit_to_app")])],1):t._e()],1),a("v-navigation-drawer",{staticClass:"primary",attrs:{app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-layout",{attrs:{column:"","align-center":""}},[a("v-flex",{staticClass:"mt-5"},[a("v-avatar",{attrs:{size:"100"}},[a("img",{attrs:{src:"/avatar.png"}})]),a("p",{staticClass:"white--text text-md-center subheading mt-1"},[t._v(t._s(t.getUser.name))])],1)],1),a("v-list",t._l(t.links,function(e){return a("v-list-tile",{key:e.text,attrs:{router:"",to:e.route}},[a("v-list-tile-action",[a("v-icon",{staticClass:"white--text"},[t._v(t._s(e.icon))])],1),a("v-list-tile-content",[a("v-list-tile-title",{staticClass:"white--text"},[t._v(t._s(e.text))])],1)],1)}),1)],1)],1)},b=[],h=a("cebc"),k={data:function(){return{drawer:!1,links:[{icon:"person",text:"Profile",route:"/profile"},{icon:"dashboard",text:"Dashboard",route:"/dashboard"}]}},computed:Object(h["a"])({},Object(c["c"])(["getToken","getUser"])),methods:Object(h["a"])({},Object(c["b"])(["signOut"]),{logout:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.signOut();case 2:return t.next=4,this.$router.push("/");case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},g=k,j=a("2877"),x=a("6544"),w=a.n(x),T=a("8212"),_=a("8336"),C=a("0e8f"),y=a("132d"),V=a("a722"),O=a("8860"),R=a("ba95"),I=a("40fe"),L=a("5d23"),E=a("f774"),D=a("9910"),S=a("71d9"),$=a("706c"),U=a("2a7f"),z=Object(j["a"])(g,v,b,!1,null,null,null),F=z.exports;w()(z,{VAvatar:T["a"],VBtn:_["a"],VFlex:C["a"],VIcon:y["a"],VLayout:V["a"],VList:O["a"],VListTile:R["a"],VListTileAction:I["a"],VListTileContent:L["a"],VListTileTitle:L["b"],VNavigationDrawer:E["a"],VSpacer:D["a"],VToolbar:S["a"],VToolbarSideIcon:$["a"],VToolbarTitle:U["b"]});var A={name:"App",components:{Navbar:F},data:function(){return{}}},P=A,q=a("7496"),M=a("549c"),Y=Object(j["a"])(P,f,m,!1,null,null,null),N=Y.exports;w()(Y,{VApp:q["a"],VContent:M["a"]});var B=a("8c4f"),W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("task-list-toolbar",{on:{switchTaskList:function(e){return t.changeTasks(e)}}}),a("transition",{attrs:{name:"fade-transition",mode:"out-in"}},[a(t.selectedComponent,{tag:"component"})],1)],1)},G=[],J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-0 pt-0"},t._l(t.getIncompleteTasks,function(e){return a("v-card",{key:e.id,class:""+t.dueDate(e),attrs:{flat:""}},[a("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Task:")]),a("div",[t._v(t._s(e.description))])]),a("v-flex",{staticClass:"text-sm-center",attrs:{xs12:"",md1:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Edit")]),a("edit-task-form",{attrs:{task:e}})],1),a("v-flex",{staticClass:"text-sm-center",attrs:{xs12:"",md1:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Delete")]),a("v-icon",{staticClass:"mt-2",attrs:{small:""},on:{click:function(a){return t.deleteItem(e._id)}}},[t._v("delete")])],1),a("v-spacer"),a("v-flex",{attrs:{xs12:"",md2:""}},[a("div",{staticClass:"caption grey--text text-sm-center"},[t._v("Created")]),a("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(s){var r=s.on;return[a("div",{staticClass:"text-sm-center"},[a("v-chip",t._g({class:t.dueDate(e)+" white--text",attrs:{slot:"activator"},slot:"activator"},r),[t._v(t._s(t.formattedDate(e.createdAt)))])],1)]}}],null,!0)},["over"===t.dueDate(e)?a("span",[t._v("More Than Week Old")]):"week"===t.dueDate(e)?a("span",[t._v("Less Than Week Old")]):a("span",[t._v("Less Than Day Old")])])],1),a("v-spacer"),a("v-flex",{attrs:{xs12:"",md2:""}},[a("div",{staticClass:"text-sm-center"},[a("div",{staticClass:"caption grey--text"},[t._v("Mark Complete")]),a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"success"},on:{click:function(a){return t.markComplete(e._id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("done")])],1)],1)])],1),a("v-divider")],1)}),1)},H=[],K=(a("28a5"),a("c1df")),Q=a.n(K),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-tooltip",{attrs:{bottom:""}},[a("v-icon",t._g({staticClass:"mt-2",attrs:{slot:"activator",small:""},slot:"activator"},s),[t._v("edit")]),a("span",[t._v("Edit Task")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Edit Task")])]),a("v-card-text",[a("v-form",[a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.saveTask}},[t._v("Save")])],1)],1)],1)],1)},Z=[],tt={data:function(){return{dialog:!1,description:""}},created:function(){this.description=this.$props.task.description},props:["task"],methods:Object(h["a"])({},Object(c["b"])(["fetchIncompleteTasks","editTask"]),{saveTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={description:this.description,id:this.$props.task._id},t.prev=1,t.next=4,this.editTask(e);case 4:return t.next=6,this.fetchIncompleteTasks();case 6:this.dialog=!1,this.description="",t.next=13;break;case 10:t.prev=10,t.t0=t["catch"](1),console.log(t.t0);case 13:case"end":return t.stop()}},t,this,[[1,10]])}));function e(){return t.apply(this,arguments)}return e}()})},et=tt,at=a("b0af"),st=a("99d9"),rt=a("12b2"),nt=a("169a"),ot=a("4bd4"),it=a("a844"),ct=a("3a2f"),lt=Object(j["a"])(et,X,Z,!1,null,null,null),ut=lt.exports;w()(lt,{VBtn:_["a"],VCard:at["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:rt["a"],VDialog:nt["a"],VForm:ot["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTextarea:it["a"],VTooltip:ct["a"]});var dt={data:function(){return{moment:Q.a}},components:{EditTaskForm:ut},computed:Object(h["a"])({},Object(c["c"])(["getIncompleteTasks"])),methods:Object(h["a"])({},Object(c["b"])(["fetchIncompleteTasks","deleteTask"]),{formattedDate:function(t){return(t=Q()(t).format("MM-DD-YYYY"))?t:(t=t.split("").splice(0,10).join(""),Q()(t).format("MM-DD-YYYY"))},dueDate:function(t){var e=new Date(t.createdAt),a=Date.now()-e;return a<=864e5?"day":a<=6048e5?"week":"over"},markComplete:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.patch("tasks/".concat(e),{completed:!0});case 2:return t.next=4,this.fetchIncompleteTasks();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),deleteItem:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.deleteTask(e);case 2:return t.next=4,this.fetchIncompleteTasks();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})},pt=dt,ft=(a("1f5b"),a("cc20")),mt=a("a523"),vt=a("ce7e6"),bt=Object(j["a"])(pt,J,H,!1,null,"2532aca0",null),ht=bt.exports;w()(bt,{VBtn:_["a"],VCard:at["a"],VChip:ft["a"],VContainer:mt["a"],VDivider:vt["a"],VFlex:C["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTooltip:ct["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-0 pt-0"},t._l(t.getCompleteTasks,function(e){return a("v-card",{key:e.id,attrs:{flat:""}},[a("v-layout",{staticClass:"pa-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Task:")]),a("div",[t._v(t._s(e.description))])]),a("v-flex",{attrs:{xs12:"",md2:""}},[a("div",{staticClass:"caption grey--text text-sm-center"},[t._v("Created")]),a("div",{staticClass:"text-sm-center"},[a("v-chip",[t._v(t._s(t.formattedDate(e.createdAt)))])],1)]),a("v-spacer"),a("v-flex",{attrs:{xs12:"",md2:""}},[a("div",{staticClass:"caption grey--text text-sm-center"},[t._v("Completed")]),a("div",{staticClass:"text-sm-center"},[a("v-chip",[t._v(t._s(t.formattedDate(e.updatedAt)))])],1)]),a("v-spacer"),a("v-flex",{attrs:{xs12:"",md2:""}},[a("div",{staticClass:"text-sm-center"},[a("div",{staticClass:"caption grey--text"},[t._v("Mark Incomplete")]),a("v-btn",{attrs:{fab:"",dark:"",small:"",color:"error"},on:{click:function(a){return t.markIncomplete(e._id)}}},[a("v-icon",{attrs:{dark:""}},[t._v("undo")])],1)],1)])],1),a("v-divider")],1)}),1)},gt=[],jt=(a("ac6a"),{data:function(){return{moment:Q.a}},bforeCreate:function(){var t=this,e=this.getCompleteTasks;e.forEach(function(e){var a=new Date(e.updatedAt);Date.now()-a>=6048e5&&t.deleteTask(e._id)})},computed:Object(h["a"])({},Object(c["c"])(["getCompleteTasks"])),methods:Object(h["a"])({},Object(c["b"])(["fetchCompleteTasks","deleteTask"]),{formattedDate:function(t){return t=t.split("").splice(0,10).join(""),Q()(t).format("MM-DD-YYYY")},markIncomplete:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,axios.patch("tasks/".concat(e),{completed:!1});case 2:return t.next=4,this.fetchCompleteTasks();case 4:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()})}),xt=jt,wt=Object(j["a"])(xt,kt,gt,!1,null,null,null),Tt=wt.exports;w()(wt,{VBtn:_["a"],VCard:at["a"],VChip:ft["a"],VContainer:mt["a"],VDivider:vt["a"],VFlex:C["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"]});var _t=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mb-0 pb-0"},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[!0===t.taskList?a("v-toolbar-title",[t._v("Incomplete Tasks")]):a("v-toolbar-title",[t._v("Complete Tasks")]),a("v-spacer"),a("add-task-form"),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[!0===t.taskList?a("v-btn",{attrs:{flat:""},on:{click:t.getCompleted}},[t._v("View Completed")]):a("v-btn",{attrs:{flat:""},on:{click:t.getIncomplete}},[t._v("View Incomplete")])],1)],1)],1)},Ct=[],yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-tooltip",{attrs:{top:""}},[a("v-btn",t._g({attrs:{slot:"activator",small:"",fab:"",color:"white",dark:""},slot:"activator"},s),[a("v-icon",{attrs:{color:"primary"}},[t._v("add")])],1),a("span",[t._v("Add Task")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Add Task")])]),a("v-card-text",[a("v-form",[a("v-textarea",{attrs:{label:"Description"},model:{value:t.description,callback:function(e){t.description=e},expression:"description"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.saveTask}},[t._v("Save")])],1)],1)],1)],1)},Vt=[],Ot={data:function(){return{dialog:!1,description:""}},methods:Object(h["a"])({},Object(c["b"])(["fetchIncompleteTasks","addTask"]),{saveTask:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.description,t.next=3,this.addTask(e);case 3:return t.next=5,this.fetchIncompleteTasks();case 5:this.dialog=!1,this.description="";case 7:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})},Rt=Ot,It=Object(j["a"])(Rt,yt,Vt,!1,null,null,null),Lt=It.exports;w()(It,{VBtn:_["a"],VCard:at["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:rt["a"],VDialog:nt["a"],VForm:ot["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTextarea:it["a"],VTooltip:ct["a"]});var Et={data:function(){return{taskList:!0}},components:{AddTaskForm:Lt},methods:{getIncomplete:function(){this.$emit("switchTaskList","TaskListIncomplete"),this.taskList=!0},getCompleted:function(){this.$emit("switchTaskList","TaskListComplete"),this.taskList=!1}}},Dt=Et,St=Object(j["a"])(Dt,_t,Ct,!1,null,null,null),$t=St.exports;w()(St,{VBtn:_["a"],VContainer:mt["a"],VSpacer:D["a"],VToolbar:S["a"],VToolbarItems:U["a"],VToolbarTitle:U["b"]});var Ut={data:function(){return{selectedComponent:"TaskListIncomplete"}},components:{TaskListIncomplete:ht,TaskListComplete:Tt,TaskListToolbar:$t},computed:Object(h["a"])({},Object(c["c"])(["getIncompleteTasks","getCompleteTasks"])),methods:Object(h["a"])({},Object(c["b"])(["fetchIncompleteTasks","fetchCompleteTasks"]),{changeTasks:function(t){"TaskListIncomplete"===t?(this.fetchIncompleteTasks(),this.selectedComponent=t):(this.fetchCompleteTasks(),this.selectedComponent=t)}}),created:function(){this.fetchIncompleteTasks(),this.fetchCompleteTasks()}},zt=Ut,Ft=Object(j["a"])(zt,W,G,!1,null,null,null),At=Ft.exports;w()(Ft,{VContainer:mt["a"]});var Pt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("profile-dashboard",{staticClass:"mt-5"})],1)},qt=[],Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("v-card",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Profile")]),a("v-spacer"),a("v-toolbar-items",{staticClass:"pt-3"},[a("edit-profile-form",{staticClass:"justify-right",attrs:{user:this.getUser}})],1)],1),a("v-img",{attrs:{src:this.getAvatar,"aspect-ratio":"2.75"}}),a("v-card-title",{staticClass:"justify-center",attrs:{"primary-title":""}},[a("div",[a("h1",{staticClass:"grey--text"},[t._v("Name: "+t._s(this.getUser.name))])])]),a("v-divider"),a("v-card-text",{staticClass:"mt-3"},[a("div",{staticClass:"text-md-center"},[a("p",{staticClass:"grey--text"},[t._v("Email: "+t._s(this.getUser.email))])]),a("div",{staticClass:"text-md-center"},[a("p",{staticClass:"grey--text"},[t._v("Age: "+t._s(this.getUser.age))])])]),a("v-card-actions",{staticClass:"justify-center"})],1)],1)],1)],1)},Yt=[],Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[a("v-tooltip",{attrs:{bottom:""}},[a("v-icon",t._g({staticClass:"mt-2",attrs:{slot:"activator",small:""},slot:"activator"},s),[t._v("edit")]),a("span",[t._v("Edit Profile")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",[a("span",{staticClass:"headline"},[t._v("Edit Profile")])]),a("v-card-text",[a("v-form",[a("v-text-field",{attrs:{label:"Name",rules:t.nameRules},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{label:"Email",rules:t.emailRules},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{label:"Age",type:"number"},model:{value:t.age,callback:function(e){t.age=e},expression:"age"}})],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.saveUser}},[t._v("Save")])],1)],1)],1)],1)},Bt=[],Wt=(a("7f7f"),{data:function(){return{dialog:!1,name:"",email:"",age:0,nameRules:[function(t){return!!t||"Name is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}]}},props:["user"],created:function(){this.name=this.$props.user.name,this.email=this.$props.user.email,this.age=this.$props.user.age},methods:Object(h["a"])({},Object(c["b"])(["updateUser"]),{saveUser:function(){var t=Object(i["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e={name:this.name,email:this.email,age:this.age},t.next=3,this.updateUser(e);case 3:this.dialog=!1;case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}()})}),Gt=Wt,Jt=a("2677"),Ht=Object(j["a"])(Gt,Nt,Bt,!1,null,null,null),Kt=Ht.exports;w()(Ht,{VBtn:_["a"],VCard:at["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:rt["a"],VDialog:nt["a"],VForm:ot["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTextField:Jt["a"],VTooltip:ct["a"]});var Qt={computed:Object(h["a"])({},Object(c["c"])(["getUser","getAvatar"])),components:{EditProfileForm:Kt}},Xt=Qt,Zt=a("adda"),te=Object(j["a"])(Xt,Mt,Yt,!1,null,null,null),ee=te.exports;w()(te,{VCard:at["a"],VCardActions:st["a"],VCardText:st["b"],VCardTitle:rt["a"],VContainer:mt["a"],VDivider:vt["a"],VFlex:C["a"],VImg:Zt["a"],VLayout:V["a"],VSpacer:D["a"],VToolbar:S["a"],VToolbarItems:U["a"],VToolbarTitle:U["b"]});var ae={components:{ProfileDashboard:ee}},se=ae,re=Object(j["a"])(se,Pt,qt,!1,null,null,null),ne=re.exports;w()(re,{VContainer:mt["a"]});var oe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"mt-5"},[a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("transition",{attrs:{name:"fade-transition",mode:"out-in"}},[a(t.selectedComponent,{tag:"component",staticClass:"mt-5",on:{switchToLogin:function(e){t.selectedComponent=e},switchToSignup:function(e){t.selectedComponent=e}}})],1)],1)],1)],1)},ie=[],ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-icon",[t._v("exit_to_app")]),a("v-toolbar-title",[t._v("Login")])],1),a("v-card",{staticClass:"pa-5"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",rules:t.passwordRules,label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-layout",{attrs:{row:""}},[a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Login")]),a("v-spacer"),a("span",{on:{click:t.switchForm}},[a("a",[t._v("Need an account?")])])],1)],1)],1)],1)},le=[],ue={data:function(){return{valid:!0,email:"",password:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],select:null}},methods:Object(h["a"])({},Object(c["b"])(["setToken","setUser","changeLoggedStatus"]),{validate:function(){var t=this;if(this.$refs.form.validate()){this.snackbar=!0;var e=this.email,a=this.password;axios.post("users/login",{email:e,password:a}).then(function(e){t.setUser(e.data.user),t.setToken(e.data.token),t.$router.push("/dashboard")}).catch(function(t){console.log(t)})}},switchForm:function(){this.$emit("switchToSignup","SignupForm")}})},de=ue,pe=Object(j["a"])(de,ce,le,!1,null,null,null),fe=pe.exports;w()(pe,{VBtn:_["a"],VCard:at["a"],VForm:ot["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTextField:Jt["a"],VToolbar:S["a"],VToolbarTitle:U["b"]});var me=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-icon",[t._v("exit_to_app")]),a("v-toolbar-title",[t._v("Sign Up")])],1),a("v-card",{staticClass:"pa-5"},[a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{rules:t.nameRules,label:"Name",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-text-field",{attrs:{type:"password",rules:t.passwordRules,label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("v-layout",{attrs:{row:""}},[a("v-btn",{attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v("Sign Up")]),a("v-spacer"),a("span",{on:{click:t.switchForm}},[a("a",[t._v("Already have an account?")])])],1)],1)],1)],1)},ve=[],be={data:function(){return{valid:!0,name:"",email:"",password:"",nameRules:[function(t){return!!t||"Name is required"}],emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}],select:null}},methods:Object(h["a"])({},Object(c["b"])(["setToken","setUser"]),{validate:function(){var t=this;if(this.$refs.form.validate()){this.snackbar=!0;var e=this.name,a=this.email,s=this.password;axios.post("users",{name:e,email:a,password:s}).then(function(e){t.setUser(e.data.user),t.setToken(e.data.token),t.$router.push("/dashboard")}).catch(function(t){console.log(t)})}},switchForm:function(){this.$emit("switchToLogin","LoginForm")}})},he=be,ke=Object(j["a"])(he,me,ve,!1,null,null,null),ge=ke.exports;w()(ke,{VBtn:_["a"],VCard:at["a"],VForm:ot["a"],VIcon:y["a"],VLayout:V["a"],VSpacer:D["a"],VTextField:Jt["a"],VToolbar:S["a"],VToolbarTitle:U["b"]});var je={data:function(){return{selectedComponent:"LoginForm"}},components:{LoginForm:fe,SignupForm:ge}},xe=je,we=Object(j["a"])(xe,oe,ie,!1,null,null,null),Te=we.exports;w()(we,{VContainer:mt["a"],VFlex:C["a"],VLayout:V["a"]}),s["a"].use(B["a"]);var _e=new B["a"]({mode:"history",base:"/",routes:[{path:"/",name:"login",component:Te},{path:"/dashboard",name:"dashboard",component:At,beforeEnter:function(t,e,a){l.state.token?a():a("/")}},{path:"/profile",name:"profile",component:ne,beforeEnter:function(t,e,a){l.state.token?a():a("/")}}]});s["a"].config.productionTip=!1,new s["a"]({router:_e,store:l,render:function(t){return t(N)}}).$mount("#app")}});
//# sourceMappingURL=app.5dd92c72.js.map