(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-287ffaf3"],{"1dde":function(t,e,n){var r=n("d039"),o=n("b622"),s=n("2d00"),c=o("species");t.exports=function(t){return s>=51||!r((function(){var e=[],n=e.constructor={};return n[c]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"676a":function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={class:"container mt-5"},s={class:"col-md-6"},c=Object(r["h"])("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),a={class:"mb-2"},i=Object(r["h"])("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),u={class:"mb-2"},d=Object(r["h"])("label",{for:"inputPassword",class:"sr-only"},"Password",-1),l=Object(r["h"])("div",{class:"text-end mt-4"},[Object(r["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1);function f(t,e,n,f,p,b){return Object(r["y"])(),Object(r["g"])("div",o,[Object(r["h"])("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=Object(r["T"])((function(){return b.signin&&b.signin.apply(b,arguments)}),["prevent"]))},[Object(r["h"])("div",s,[c,Object(r["h"])("div",a,[i,Object(r["S"])(Object(r["h"])("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return p.user.username=t})},null,512),[[r["N"],p.user.username]])]),Object(r["h"])("div",u,[d,Object(r["S"])(Object(r["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return p.user.password=t})},null,512),[[r["N"],p.user.password]])]),l])],32)])}n("99af");var p={data:function(){return{user:{username:"",password:""}}},methods:{signin:function(){var t=this,e="".concat("https://vue3-course-api.hexschool.io/","admin/signin");this.$http.post(e,this.user).then((function(e){if(e.data.success){var n=e.data,r=n.token,o=n.expired;document.cookie="snToken=".concat(r,";expires=").concat(new Date(o)),console.log(e),t.$router.push("/dashboard/products")}}))}}};p.render=f;e["default"]=p},8418:function(t,e,n){"use strict";var r=n("a04b"),o=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var c=r(e);c in t?o.f(t,c,s(0,n)):t[c]=n}},"99af":function(t,e,n){"use strict";var r=n("23e7"),o=n("d039"),s=n("e8b5"),c=n("861d"),a=n("7b0b"),i=n("50c4"),u=n("8418"),d=n("65f0"),l=n("1dde"),f=n("b622"),p=n("2d00"),b=f("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",v=p>=51||!o((function(){var t=[];return t[b]=!1,t.concat()[0]!==t})),w=l("concat"),j=function(t){if(!c(t))return!1;var e=t[b];return void 0!==e?!!e:s(t)},O=!v||!w;r({target:"Array",proto:!0,forced:O},{concat:function(t){var e,n,r,o,s,c=a(this),l=d(c,0),f=0;for(e=-1,r=arguments.length;e<r;e++)if(s=-1===e?c:arguments[e],j(s)){if(o=i(s.length),f+o>h)throw TypeError(m);for(n=0;n<o;n++,f++)n in s&&u(l,f,s[n])}else{if(f>=h)throw TypeError(m);u(l,f++,s)}return l.length=f,l}})}}]);
//# sourceMappingURL=chunk-287ffaf3.8ccc39de.js.map