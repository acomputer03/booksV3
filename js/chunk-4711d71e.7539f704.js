(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4711d71e"],{"1dde":function(t,e,c){var a=c("d039"),n=c("b622"),o=c("2d00"),s=n("species");t.exports=function(t){return o>=51||!a((function(){var e=[],c=e.constructor={};return c[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},8418:function(t,e,c){"use strict";var a=c("a04b"),n=c("9bf2"),o=c("5c6c");t.exports=function(t,e,c){var s=a(e);s in t?n.f(t,s,o(0,c)):t[s]=c}},"99af":function(t,e,c){"use strict";var a=c("23e7"),n=c("d039"),o=c("e8b5"),s=c("861d"),i=c("7b0b"),r=c("50c4"),l=c("8418"),u=c("65f0"),d=c("1dde"),b=c("b622"),h=c("2d00"),p=b("isConcatSpreadable"),j=9007199254740991,O="Maximum allowed index exceeded",f=h>=51||!n((function(){var t=[];return t[p]=!1,t.concat()[0]!==t})),g=d("concat"),v=function(t){if(!s(t))return!1;var e=t[p];return void 0!==e?!!e:o(t)},y=!f||!g;a({target:"Array",proto:!0,forced:y},{concat:function(t){var e,c,a,n,o,s=i(this),d=u(s,0),b=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?s:arguments[e],v(o)){if(n=r(o.length),b+n>j)throw TypeError(O);for(c=0;c<n;c++,b++)c in o&&l(d,b,o[c])}else{if(b>=j)throw TypeError(O);l(d,b++,o)}return d.length=b,d}})},d398:function(t,e,c){"use strict";c.r(e);var a=c("7a23"),n={class:"container my-5"},o=Object(a["h"])("div",{class:"row text-center"},[Object(a["h"])("div",{class:"col-12 col-md-4"},[Object(a["h"])("div",{class:"alert alert-warning alert-rounded",role:"alert"}," 1.購物車內容 ")]),Object(a["h"])("div",{class:"col-12 col-md-4"},[Object(a["h"])("div",{class:"alert alert-dark alert-rounded",role:"alert"}," 2.填寫資訊 ")]),Object(a["h"])("div",{class:"col-12 col-md-4"},[Object(a["h"])("div",{class:"alert alert-dark alert-rounded",role:"alert"}," 3.完成 ")])],-1),s={class:"col-md-10 m-auto mt-5"},i={key:0},r={class:"table align-middle"},l=Object(a["h"])("thead",null,[Object(a["h"])("tr",null,[Object(a["h"])("th"),Object(a["h"])("th",null,"品名"),Object(a["h"])("th",{style:{width:"110px"}},"數量"),Object(a["h"])("th",null,"單價")])],-1),u=["disabled","onClick"],d=Object(a["h"])("i",{class:"bi bi-trash"},null,-1),b=[d],h={key:0,class:"text-success"},p={class:"input-group input-group-sm"},j=["onUpdate:modelValue","disabled","onChange"],O={class:"input-group-text"},f={class:"text-end"},g={key:0,class:"text-success"},v=Object(a["h"])("td",{colspan:"3",class:"text-end"},"總計",-1),y={class:"text-end"},m={key:0},x=Object(a["h"])("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),C={class:"text-end text-success"},k={class:"input-group mb-3 input-group-sm"},I={class:"input-group-append"},w={class:"d-flex"},$=Object(a["h"])("span",{class:"display-6"},[Object(a["h"])("i",{class:"bi bi-chevron-double-left"}),Object(a["j"])("繼續購物")],-1),_=[$],L=["disabled"],S=Object(a["h"])("span",{class:"display-6 text-white"},[Object(a["j"])("去買單 "),Object(a["h"])("i",{class:"bi bi-chevron-double-right"})],-1),T=[S],q={key:1},M=Object(a["h"])("div",{class:"p-5 display-2"},[Object(a["h"])("span",null,"購物車還是空的?"),Object(a["h"])("br"),Object(a["h"])("span",null,"還不快逛好逛滿買起來!!!")],-1),U={class:"d-flex mt-3"},V=Object(a["h"])("span",{class:"display-6"},[Object(a["h"])("i",{class:"bi bi-cart4 me-3"}),Object(a["j"])("現在就去逛逛!!")],-1),E=[V];function J(t,e,c,d,$,S){var V=this,J=Object(a["F"])("Loading");return Object(a["y"])(),Object(a["g"])(a["a"],null,[Object(a["k"])(J,{active:$.isLoading},null,8,["active"]),Object(a["h"])("div",n,[o,Object(a["h"])("div",s,[0!==$.carts.total?(Object(a["y"])(),Object(a["g"])("div",i,[Object(a["h"])("table",r,[l,Object(a["h"])("tbody",null,[(Object(a["y"])(!0),Object(a["g"])(a["a"],null,Object(a["D"])($.carts.carts,(function(e){return Object(a["y"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",null,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:V.status.loadingItem===e.id,onClick:function(t){return S.delCartItem(e.id)}},b,8,u)]),Object(a["h"])("td",null,[Object(a["j"])(Object(a["I"])(e.product.title)+" ",1),e.coupon?(Object(a["y"])(),Object(a["g"])("div",h," 已套用優惠券 ")):Object(a["f"])("",!0)]),Object(a["h"])("td",null,[Object(a["h"])("div",p,[Object(a["S"])(Object(a["h"])("input",{type:"number",class:"form-control",min:"1","onUpdate:modelValue":function(t){return e.qty=t},disabled:V.status.loadingItem===e.id,onChange:function(t){return S.updateCart(e)}},null,40,j),[[a["N"],e.qty,void 0,{number:!0}]]),Object(a["h"])("div",O,"/ "+Object(a["I"])(e.product.unit),1)])]),Object(a["h"])("td",f,[$.carts.final_total!==$.carts.total?(Object(a["y"])(),Object(a["g"])("small",g,"折扣價：")):Object(a["f"])("",!0),Object(a["j"])(" $ "+Object(a["I"])(t.$filters.currency(e.final_total)),1)])])})),128))]),Object(a["h"])("tfoot",null,[Object(a["h"])("tr",null,[v,Object(a["h"])("td",y,Object(a["I"])(t.$filters.currency($.carts.total)),1)]),$.carts.final_total!==$.carts.total?(Object(a["y"])(),Object(a["g"])("tr",m,[x,Object(a["h"])("td",C,Object(a["I"])(t.$filters.currency($.carts.final_total)),1)])):Object(a["f"])("",!0)])]),Object(a["h"])("div",k,[Object(a["S"])(Object(a["h"])("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=function(t){return $.coupon_code=t}),placeholder:"請輸入優惠碼"},null,512),[[a["N"],$.coupon_code]]),Object(a["h"])("div",I,[Object(a["h"])("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[1]||(e[1]=function(){return S.addCouponCode&&S.addCouponCode.apply(S,arguments)})}," 套用優惠碼 ")])]),Object(a["h"])("div",w,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-secondary p-3 mt-3 me-auto",onClick:e[2]||(e[2]=Object(a["T"])((function(e){return t.$router.push("/products")}),["prevent"]))},_),Object(a["h"])("button",{type:"button",class:"btn btn-orange p-3 mt-3",onClick:e[3]||(e[3]=Object(a["T"])((function(e){return t.$router.push("/userinfo")}),["prevent"])),disabled:0===$.carts.total},T,8,L)])])):(Object(a["y"])(),Object(a["g"])("div",q,[M,Object(a["h"])("div",U,[Object(a["h"])("button",{type:"button",class:"btn btn-outline-orange p-3 mt-3 m-auto",onClick:e[4]||(e[4]=Object(a["T"])((function(e){return t.$router.push("/products")}),["prevent"]))},E)])]))])])],64)}c("99af");var N=c("cfb9"),A={data:function(){return{carts:[],coupon_code:"",status:{loadingItem:""},isLoading:!1}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart");this.$http.get(e).then((function(e){t.isLoading=!1,e.data.success&&(t.carts=e.data.data,console.log(e.data.data))}))},delCartItem:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart/").concat(t);this.status.loadingItem=t,this.$http.delete(c).then((function(t){e.status.loadingItem="",t.data.success&&(e.$httpMessageState(t,"移除購物車品項"),e.getCart(),N["a"].emit("update-cart"))}))},updateCart:function(t){var e=this,c="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart/").concat(t.id);this.isLoading=!0,this.status.loadingItem=t.id;var a={product_id:t.product_id,qty:t.qty};this.$http.put(c,{data:a}).then((function(t){e.isLoading=!1,e.status.loadingItem="",t.data.success&&e.getCart()}))},addCouponCode:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/coupon");this.isLoading=!0;var c={code:this.coupon_code};this.$http.post(e,{data:c}).then((function(e){t.isLoading=!1,e.data.success&&(t.$httpMessageState(e,"使用優惠券"),t.getCart())}))}},created:function(){this.getCart()}};A.render=J;e["default"]=A}}]);
//# sourceMappingURL=chunk-4711d71e.7539f704.js.map