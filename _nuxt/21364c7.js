(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3],{290:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("061aa022",content,!0,{sourceMap:!1})},291:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(26),{props:{reposUrl:{type:String,required:!0}},data:function(){return{repos:null}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get(t.reposUrl);case 2:t.repos=e.sent;case 3:case"end":return e.stop()}}),e)})))()}}),o=r(51),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.$fetchState.pending?r("p",{staticClass:"text-center"},[t._v("Fetching repos...")]):t.$fetchState.error?r("p",{staticClass:"text-center"},[t._v("\n    Error fetching repos :(\n  ")]):r("div",{staticClass:"text-center"},[t._v("\n    Total: "+t._s(t.repos.length)+"\n    "),t._l(t.repos,(function(e,n){return r("p",{key:n,staticClass:"text-center"},[t._v("\n      "+t._s(e.name)),r("br"),r("a",{staticClass:"link",attrs:{href:e.html_url}},[t._v(t._s(e.html_url))])])}))],2)])}),[],!1,null,"7d71726a",null);e.default=component.exports},293:function(t,e,r){"use strict";r(290)},294:function(t,e,r){var n=r(78)((function(i){return i[1]}));n.push([t.i,".hr[data-v-4e034c22]{height:1px;width:100%;--tw-bg-opacity:1;background-color:rgb(209 213 219 / var(--tw-bg-opacity))}",""]),n.locals={},t.exports=n},299:function(t,e,r){"use strict";r.r(e);var n=r(6),c=(r(26),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("https://api.github.com/user/".concat(t.$fire.auth.currentUser.providerData[0].uid));case 2:return r=e.sent,e.abrupt("return",{githubUser:r});case 4:case"end":return e.stop()}}),e)})))()},middleware:"auth",methods:{logout:function(){this.$fire.auth.signOut()}},data:function(){return{avatar_size:"100px"}}}),o=(r(293),r(51)),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-4 w-full flex flex-col items-center"},[r("p",{staticClass:"text-center"},[t._v("\n    Username:"),r("br"),r("span",{staticClass:"underline"},[t._v(t._s(t.githubUser.login))])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("p",{staticClass:"text-center"},[t._v("\n    Avatar:"),r("br"),r("img",{staticClass:"w-[100px] h-[100px]",attrs:{src:t.githubUser.avatar_url}}),t._v(" "),r("span",{staticClass:"text-xs"},[t._v(t._s(t.avatar_size)+" x "+t._s(t.avatar_size))])]),t._v(" "),r("div",{staticClass:"hr"}),t._v(" "),r("p",{staticClass:"text-center"},[t._v("Repos:")]),t._v(" "),r("user-repos",{attrs:{reposUrl:t.githubUser.repos_url}})],1)}),[],!1,null,"4e034c22",null);e.default=component.exports;installComponents(component,{UserRepos:r(291).default})}}]);