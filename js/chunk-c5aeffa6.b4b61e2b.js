(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c5aeffa6"],{"1dde":function(t,e,c){var r=c("d039"),n=c("b622"),a=c("2d00"),o=n("species");t.exports=function(t){return a>=51||!r((function(){var e=[],c=e.constructor={};return c[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var r=c("a04b"),n=c("9bf2"),a=c("5c6c");t.exports=function(t,e,c){var o=r(e);o in t?n.f(t,o,a(0,c)):t[o]=c}},"99af":function(t,e,c){"use strict";var r=c("23e7"),n=c("d039"),a=c("e8b5"),o=c("861d"),l=c("7b0b"),s=c("50c4"),d=c("8418"),i=c("65f0"),u=c("1dde"),b=c("b622"),h=c("2d00"),O=b("isConcatSpreadable"),j=9007199254740991,f="Maximum allowed index exceeded",p=h>=51||!n((function(){var t=[];return t[O]=!1,t.concat()[0]!==t})),v=u("concat"),y=function(t){if(!o(t))return!1;var e=t[O];return void 0!==e?!!e:a(t)},g=!p||!v;r({target:"Array",proto:!0,forced:g},{concat:function(t){var e,c,r,n,a,o=l(this),u=i(o,0),b=0;for(e=-1,r=arguments.length;e<r;e++)if(a=-1===e?o:arguments[e],y(a)){if(n=s(a.length),b+n>j)throw TypeError(f);for(c=0;c<n;c++,b++)c in a&&d(u,b,a[c])}else{if(b>=j)throw TypeError(f);d(u,b++,a)}return u.length=b,u}})},b0c0:function(t,e,c){var r=c("83ab"),n=c("9bf2").f,a=Function.prototype,o=a.toString,l=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&n(a,s,{configurable:!0,get:function(){try{return o.call(this).match(l)[1]}catch(t){return""}}})},e953:function(t,e,c){"use strict";c.r(e);c("b0c0");var r=c("7a23"),n={class:"container my-5"},a=Object(r["h"])("div",{class:"row text-center"},[Object(r["h"])("div",{class:"col-12 col-md-4"},[Object(r["h"])("div",{class:"alert alert-success alert-rounded",role:"alert"}," 1.購物車內容 ")]),Object(r["h"])("div",{class:"col-12 col-md-4"},[Object(r["h"])("div",{class:"alert alert-success alert-rounded",role:"alert"}," 2.填寫資訊 ")]),Object(r["h"])("div",{class:"col-12 col-md-4"},[Object(r["h"])("div",{class:"alert alert-warning alert-rounded",role:"alert"}," 3.完成 ")])],-1),o={class:"col-md-10 m-auto mt-5"},l={class:"card text-center"},s=Object(r["h"])("div",{class:"card-header"},[Object(r["h"])("span",{class:"h4"},"訂單")],-1),d={class:"card-body"},i={class:"my-5 row justify-content-center"},u={class:"table align-middle"},b=Object(r["h"])("thead",null,[Object(r["h"])("th",null,"品名"),Object(r["h"])("th",null,"數量"),Object(r["h"])("th",null,"單價")],-1),h={class:"text-end"},O=Object(r["h"])("td",{colspan:"2",class:"text-end"},"總計",-1),j={class:"text-end text-success"},f={class:"table"},p=Object(r["h"])("th",{width:"100"},"Email",-1),v=Object(r["h"])("th",null,"姓名",-1),y=Object(r["h"])("th",null,"收件人電話",-1),g=Object(r["h"])("th",null,"收件人地址",-1),m=Object(r["h"])("th",null,"付款狀態",-1),x={key:0},I={key:1,class:"text-success"},w={class:"text-end me-5 mt-5"},k={class:"btn btn-danger"};function L(t,e,c,L,$,S){var E=Object(r["F"])("Loading");return Object(r["y"])(),Object(r["g"])(r["a"],null,[Object(r["k"])(E,{active:$.isLoading},null,8,["active"]),Object(r["h"])("div",n,[a,Object(r["h"])("div",o,[Object(r["h"])("div",l,[s,Object(r["h"])("div",d,[Object(r["h"])("div",i,[Object(r["h"])("form",{class:"col-md-10",onSubmit:e[0]||(e[0]=Object(r["T"])((function(){return S.payOrder&&S.payOrder.apply(S,arguments)}),["prevent"]))},[Object(r["h"])("table",u,[b,Object(r["h"])("tbody",null,[(Object(r["y"])(!0),Object(r["g"])(r["a"],null,Object(r["D"])($.order.products,(function(e){return Object(r["y"])(),Object(r["g"])("tr",{key:e.id},[Object(r["h"])("td",null,Object(r["I"])(e.product.title),1),Object(r["h"])("td",null,Object(r["I"])(e.qty)+" / "+Object(r["I"])(e.product.unit),1),Object(r["h"])("td",h,Object(r["I"])(t.$filters.currency(e.final_total))+"元",1)])})),128))]),Object(r["h"])("tfoot",null,[Object(r["h"])("tr",null,[O,Object(r["h"])("td",j,Object(r["I"])(t.$filters.currency($.order.total))+"元",1)])])]),Object(r["h"])("table",f,[Object(r["h"])("tbody",null,[Object(r["h"])("tr",null,[p,Object(r["h"])("td",null,Object(r["I"])($.order.user.email),1)]),Object(r["h"])("tr",null,[v,Object(r["h"])("td",null,Object(r["I"])($.order.user.name),1)]),Object(r["h"])("tr",null,[y,Object(r["h"])("td",null,Object(r["I"])($.order.user.tel),1)]),Object(r["h"])("tr",null,[g,Object(r["h"])("td",null,Object(r["I"])($.order.user.address),1)]),Object(r["h"])("tr",null,[m,Object(r["h"])("td",null,[$.order.is_paid?(Object(r["y"])(),Object(r["g"])("span",I,"付款完成")):(Object(r["y"])(),Object(r["g"])("span",x,"尚未付款"))])])])]),Object(r["h"])("div",w,[Object(r["S"])(Object(r["h"])("button",k,"確認付款去",512),[[r["O"],!$.order.is_paid]])])],32)])])])])])],64)}c("99af");var $={data:function(){return{order:{user:{}},orderId:"",isLoading:!1}},methods:{getOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/order/").concat(this.orderId);this.isLoading=!0,this.$http.get(e).then((function(e){t.isLoading=!1,e.data.success&&(t.order=e.data.order,console.log(e.data.order))}))},payOrder:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/pay/").concat(this.orderId);this.isLoading=!0,this.$http.post(e).then((function(e){t.isLoading=!1,console.log(e),e.data.success&&t.getOrder()}))}},created:function(){this.orderId=this.$route.params.orderId,this.getOrder(this.orderId)}};$.render=L;e["default"]=$}}]);
//# sourceMappingURL=chunk-c5aeffa6.b4b61e2b.js.map