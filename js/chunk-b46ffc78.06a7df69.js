(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b46ffc78"],{"057f":function(t,e,r){var n=r("fc6a"),c=r("241c").f,o={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(t){try{return c(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==o.call(t)?a(t):c(n(t))}},"1dde":function(t,e,r){var n=r("d039"),c=r("b622"),o=r("2d00"),i=c("species");t.exports=function(t){return o>=51||!n((function(){var e=[],r=e.constructor={};return r[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"428f":function(t,e,r){var n=r("da84");t.exports=n},"466d":function(t,e,r){"use strict";var n=r("d784"),c=r("825a"),o=r("50c4"),i=r("577e"),a=r("1d80"),s=r("8aa5"),u=r("14c3");n("match",(function(t,e,r){return[function(e){var r=a(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](i(r))},function(t){var n=c(this),a=i(t),l=r(e,n,a);if(l.done)return l.value;if(!n.global)return u(n,a);var d=n.unicode;n.lastIndex=0;var f,b=[],h=0;while(null!==(f=u(n,a))){var p=i(f[0]);b[h]=p,""===p&&(n.lastIndex=s(a,o(n.lastIndex),d)),h++}return 0===h?null:b}]}))},"4de4":function(t,e,r){"use strict";var n=r("23e7"),c=r("b727").filter,o=r("1dde"),i=o("filter");n({target:"Array",proto:!0,forced:!i},{filter:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},"746f":function(t,e,r){var n=r("428f"),c=r("5135"),o=r("e538"),i=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});c(e,t)||i(e,t,{value:o.f(t)})}},"7bda":function(t,e,r){"use strict";r.r(e);r("ac1f"),r("5319"),r("a4d3"),r("e01a");var n=r("7a23"),c={class:"container my-5"},o={class:"row"},i={class:"input-group mb-4"},a=Object(n["h"])("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2"},"搜尋",-1),s={class:"col-md-2 me-auto mb-5"},u={class:"list-group text-center sticky-top",style:{top:"40px"}},l=["onClick"],d={class:"col-md-10"},f=["onClick"],b={class:"row g-0"},h={class:"col-md-4"},p={class:"pic position-relative h4 mb-n1"},g=["src"],v={key:0,class:"badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed"},y=Object(n["h"])("i",{class:"bi bi-hand-thumbs-up"},null,-1),O=Object(n["h"])("strong",{class:""},"大力推薦",-1),j=[y,O],m={key:1,class:"badge bg-danger position-absolute top-0 end-0 p-2 zindex-fixed"},w=Object(n["h"])("i",{class:"bi bi-hand-thumbs-up"},null,-1),x=Object(n["h"])("strong",{class:""},"推薦",-1),S=[w,x],k={class:"col-md-8 position-relative",style:{position:"relative"}},I={class:"card-body mb-5"},P={class:"h5"},C={class:"badge rounded-pill bg-info text-dark float-end ml-2 position-absolute top-10"},T={class:"card-title"},E=["innerHTML"],$={class:"card-footer border-top-0 bg-white"},L={class:"row align-items-end justify-content-center"},_={class:"col-md-4 align-self-end"},A={class:"col-md-8 text-end"},N={key:0,class:"h5"},D={key:1,class:"h6"},J={key:2,class:"h5"},M=Object(n["j"])("現在只要 "),F={class:"text-danger"},z=Object(n["j"])(" 元/人 ");function H(t,e,r,y,O,w){var x=this,H=Object(n["F"])("Loading");return Object(n["y"])(),Object(n["g"])(n["a"],null,[Object(n["k"])(H,{active:O.isLoading},null,8,["active"]),Object(n["h"])("div",null,[Object(n["h"])("div",c,[Object(n["h"])("div",o,[Object(n["h"])("div",i,[Object(n["S"])(Object(n["h"])("input",{type:"text",class:"form-control",placeholder:"請輸入","aria-label":"請輸入","aria-describedby":"button-addon2","onUpdate:modelValue":e[0]||(e[0]=function(t){return x.serch=t})},null,512),[[n["N"],this.serch]]),a]),Object(n["h"])("div",s,[Object(n["h"])("div",u,[Object(n["h"])("button",{type:"button",class:Object(n["r"])(["list-group-item list-group-item-action border-0 py-4",{active:"All"===O.category}]),"aria-current":"true",onClick:e[1]||(e[1]=Object(n["T"])((function(t){return O.category="All"}),["prevent"]))}," 全部 ",2),(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(w.filterCategory,(function(t,e){return Object(n["y"])(),Object(n["g"])("button",{type:"button",class:Object(n["r"])(["list-group-item list-group-item-action border-0 py-3",{active:O.category===t}]),key:e,onClick:Object(n["T"])((function(e){return O.category=t}),["prevent"])},Object(n["I"])(t),11,l)})),128))])]),Object(n["h"])("div",d,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(w.filterProducts,(function(t){return Object(n["y"])(),Object(n["g"])("div",{class:"card mb-3 box-shadow",style:{"max-width":"100%"},key:t.id},[Object(n["h"])("a",{type:"button",onClick:Object(n["T"])((function(e){return w.getProduct(t.id)}),["prevent"])},[Object(n["h"])("div",b,[Object(n["h"])("div",h,[Object(n["h"])("div",p,[Object(n["h"])("img",{src:t.imageUrl,class:"h-100 w-100 img-fluid"},null,8,g),t.sell_num>=800?(Object(n["y"])(),Object(n["g"])("span",v,j)):t.sell_num>=100&&t.sell_num<800?(Object(n["y"])(),Object(n["g"])("span",m,S)):Object(n["f"])("",!0)])]),Object(n["h"])("div",k,[Object(n["h"])("div",I,[Object(n["h"])("div",null,[Object(n["h"])("p",P,[Object(n["h"])("span",C,Object(n["I"])(t.category),1)]),Object(n["h"])("h5",T,Object(n["I"])(t.title),1),Object(n["h"])("p",{class:"card-text",innerHTML:t.description.replace(/\n/g,"<br>")},null,8,E)])]),Object(n["h"])("div",$,[Object(n["h"])("div",L,[Object(n["h"])("div",_,[Object(n["h"])("div",null,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(t.star,(function(t){return Object(n["y"])(),Object(n["g"])("i",{class:"bi bi-star-fill text-warning mb-3",key:t})})),128)),Object(n["h"])("p",null,"已經有 "+Object(n["I"])(t.sell_num)+" 人出發去旅行",1)])]),Object(n["h"])("div",A,[t.price?Object(n["f"])("",!0):(Object(n["y"])(),Object(n["g"])("div",N,Object(n["I"])(t.origin_price)+" 元",1)),t.price?(Object(n["y"])(),Object(n["g"])("del",D,"原價 "+Object(n["I"])(t.origin_price)+" 元",1)):Object(n["f"])("",!0),t.price?(Object(n["y"])(),Object(n["g"])("div",J,[Object(n["h"])("strong",null,[M,Object(n["h"])("span",F,Object(n["I"])(t.price),1),z])])):Object(n["f"])("",!0)])])])])])],8,f)])})),128))])])])])],64)}r("99af"),r("159b"),r("4de4"),r("466d");var U=r("cfb9"),q={data:function(){return{products:[],product:{},status:{loadingItem:""},isLoading:!1,category:"All",categoryItem:[],tempProducts:[],serch:""}},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/products/?page=").concat(e);this.isLoading=!0,this.$http.get(r).then((function(e){t.isLoading=!1,e.data.success&&(console.log(e),t.products=e.data.products)}))},getProduct:function(t){this.$router.push("/product/".concat(t))},addCart:function(t){var e=this,r="".concat("https://vue3-course-api.hexschool.io/","api/").concat("yiru0220","/cart");this.status.loadingItem=t;var n={product_id:t,qty:1};this.$http.post(r,{data:n}).then((function(t){t.data.success&&(console.log(t),U["a"].emit("update-cart"),e.status.loadingItem="",e.$httpMessageState(t,"加入購物車"))}))}},computed:{filterCategory:function(){var t=this;return t.products.forEach((function(e){t.categoryItem.push(e.category)})),t.categoryItem.filter((function(t,e,r){var n=r.indexOf(t)===e;return n}))},filterProducts:function(){var t=this,e=[];return""===this.serch?(e="All"===this.category?this.products:this.products.filter((function(e){return e.category.match(t.category)})),e):(e=this.products.filter((function(e){return e.title.match(t.serch)})),e)}},created:function(){this.$route.params.category&&(this.category=this.$route.params.category),this.getProducts()}};r("be1f");q.render=H;e["default"]=q},8418:function(t,e,r){"use strict";var n=r("a04b"),c=r("9bf2"),o=r("5c6c");t.exports=function(t,e,r){var i=n(e);i in t?c.f(t,i,o(0,r)):t[i]=r}},"99af":function(t,e,r){"use strict";var n=r("23e7"),c=r("d039"),o=r("e8b5"),i=r("861d"),a=r("7b0b"),s=r("50c4"),u=r("8418"),l=r("65f0"),d=r("1dde"),f=r("b622"),b=r("2d00"),h=f("isConcatSpreadable"),p=9007199254740991,g="Maximum allowed index exceeded",v=b>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),y=d("concat"),O=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},j=!v||!y;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,r,n,c,o,i=a(this),d=l(i,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(o=-1===e?i:arguments[e],O(o)){if(c=s(o.length),f+c>p)throw TypeError(g);for(r=0;r<c;r++,f++)r in o&&u(d,f,o[r])}else{if(f>=p)throw TypeError(g);u(d,f++,o)}return d.length=f,d}})},a4d3:function(t,e,r){"use strict";var n=r("23e7"),c=r("da84"),o=r("d066"),i=r("c430"),a=r("83ab"),s=r("4930"),u=r("d039"),l=r("5135"),d=r("e8b5"),f=r("861d"),b=r("d9b5"),h=r("825a"),p=r("7b0b"),g=r("fc6a"),v=r("a04b"),y=r("577e"),O=r("5c6c"),j=r("7c73"),m=r("df75"),w=r("241c"),x=r("057f"),S=r("7418"),k=r("06cf"),I=r("9bf2"),P=r("d1e7"),C=r("9112"),T=r("6eeb"),E=r("5692"),$=r("f772"),L=r("d012"),_=r("90e3"),A=r("b622"),N=r("e538"),D=r("746f"),J=r("d44e"),M=r("69f3"),F=r("b727").forEach,z=$("hidden"),H="Symbol",U="prototype",q=A("toPrimitive"),B=M.set,Q=M.getterFor(H),R=Object[U],V=c.Symbol,W=o("JSON","stringify"),G=k.f,K=I.f,X=x.f,Y=P.f,Z=E("symbols"),tt=E("op-symbols"),et=E("string-to-symbol-registry"),rt=E("symbol-to-string-registry"),nt=E("wks"),ct=c.QObject,ot=!ct||!ct[U]||!ct[U].findChild,it=a&&u((function(){return 7!=j(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=G(R,e);n&&delete R[e],K(t,e,r),n&&t!==R&&K(R,e,n)}:K,at=function(t,e){var r=Z[t]=j(V[U]);return B(r,{type:H,tag:t,description:e}),a||(r.description=e),r},st=function(t,e,r){t===R&&st(tt,e,r),h(t);var n=v(e);return h(r),l(Z,n)?(r.enumerable?(l(t,z)&&t[z][n]&&(t[z][n]=!1),r=j(r,{enumerable:O(0,!1)})):(l(t,z)||K(t,z,O(1,{})),t[z][n]=!0),it(t,n,r)):K(t,n,r)},ut=function(t,e){h(t);var r=g(e),n=m(r).concat(ht(r));return F(n,(function(e){a&&!dt.call(r,e)||st(t,e,r[e])})),t},lt=function(t,e){return void 0===e?j(t):ut(j(t),e)},dt=function(t){var e=v(t),r=Y.call(this,e);return!(this===R&&l(Z,e)&&!l(tt,e))&&(!(r||!l(this,e)||!l(Z,e)||l(this,z)&&this[z][e])||r)},ft=function(t,e){var r=g(t),n=v(e);if(r!==R||!l(Z,n)||l(tt,n)){var c=G(r,n);return!c||!l(Z,n)||l(r,z)&&r[z][n]||(c.enumerable=!0),c}},bt=function(t){var e=X(g(t)),r=[];return F(e,(function(t){l(Z,t)||l(L,t)||r.push(t)})),r},ht=function(t){var e=t===R,r=X(e?tt:g(t)),n=[];return F(r,(function(t){!l(Z,t)||e&&!l(R,t)||n.push(Z[t])})),n};if(s||(V=function(){if(this instanceof V)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?y(arguments[0]):void 0,e=_(t),r=function(t){this===R&&r.call(tt,t),l(this,z)&&l(this[z],e)&&(this[z][e]=!1),it(this,e,O(1,t))};return a&&ot&&it(R,e,{configurable:!0,set:r}),at(e,t)},T(V[U],"toString",(function(){return Q(this).tag})),T(V,"withoutSetter",(function(t){return at(_(t),t)})),P.f=dt,I.f=st,k.f=ft,w.f=x.f=bt,S.f=ht,N.f=function(t){return at(A(t),t)},a&&(K(V[U],"description",{configurable:!0,get:function(){return Q(this).description}}),i||T(R,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:V}),F(m(nt),(function(t){D(t)})),n({target:H,stat:!0,forced:!s},{for:function(t){var e=y(t);if(l(et,e))return et[e];var r=V(e);return et[e]=r,rt[r]=e,r},keyFor:function(t){if(!b(t))throw TypeError(t+" is not a symbol");if(l(rt,t))return rt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!a},{create:lt,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:ft}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:u((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(p(t))}}),W){var pt=!s||u((function(){var t=V();return"[null]"!=W([t])||"{}"!=W({a:t})||"{}"!=W(Object(t))}));n({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,r){var n,c=[t],o=1;while(arguments.length>o)c.push(arguments[o++]);if(n=e,(f(e)||void 0!==t)&&!b(t))return d(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!b(e))return e}),c[1]=e,W.apply(null,c)}})}V[U][q]||C(V[U],q,V[U].valueOf),J(V,H),L[z]=!0},bd71:function(t,e,r){},be1f:function(t,e,r){"use strict";r("bd71")},e01a:function(t,e,r){"use strict";var n=r("23e7"),c=r("83ab"),o=r("da84"),i=r("5135"),a=r("861d"),s=r("9bf2").f,u=r("e893"),l=o.Symbol;if(c&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var d={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof f?new l(t):void 0===t?l():l(t);return""===t&&(d[e]=!0),e};u(f,l);var b=f.prototype=l.prototype;b.constructor=f;var h=b.toString,p="Symbol(test)"==String(l("test")),g=/^Symbol\((.*)\)[^)]+$/;s(b,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=h.call(t);if(i(d,t))return"";var r=p?e.slice(7,-1):e.replace(g,"$1");return""===r?void 0:r}}),n({global:!0,forced:!0},{Symbol:f})}},e538:function(t,e,r){var n=r("b622");e.f=n}}]);
//# sourceMappingURL=chunk-b46ffc78.06a7df69.js.map