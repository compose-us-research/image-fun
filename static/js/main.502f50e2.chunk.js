(this["webpackJsonpimage-fun"]=this["webpackJsonpimage-fun"]||[]).push([[0],{14:function(e,t,n){e.exports=n.p+"static/media/logo.cfcd6516.png"},15:function(e,t,n){e.exports={root:"dialog_root__1rU97",content:"dialog_content__28Sao",party:"dialog_party__1WKYc"}},16:function(e,t,n){e.exports={root:"solution-display_root__3CP2X",spacer:"solution-display_spacer__18nRm",word:"solution-display_word__10BHP"}},17:function(e,t,n){e.exports={root:"splash_root__2Prvf",card:"splash_card__1oslK",actions:"splash_actions__OpTM6"}},19:function(e,t,n){e.exports={root:"compound-word-display_root__3lhZf",input:"compound-word-display_input__19Qtd"}},23:function(e,t,n){e.exports={root:"how-to-play_root__OzdBH",card:"how-to-play_card__2MGeo"}},30:function(e,t,n){e.exports={root:"letter-input_root__QfAbd"}},32:function(e,t,n){e.exports={root:"button_root__27uNe"}},33:function(e,t,n){e.exports=n(46)},38:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(28),c=n.n(r),l=(n(38),n(5)),i=n(29),u=n.n(i),s=function(e){var t=e.height,n=e.keyword,a=e.width;return{height:t,keyword:n,url:"https://source.unsplash.com/random/".concat(a,"x").concat(t,"?").concat(n,",").concat(u.a.v4()),width:a}},m={backgroundImage:"background-image.png"},d=o.a.createContext(m),h=function(e){var t=e.children,n=o.a.useState({backgroundImage:m.backgroundImage}),a=Object(l.a)(n,2),r=a[0],c=a[1];return o.a.useEffect((function(){var e=s({width:window.innerWidth,height:window.innerHeight,keyword:"background"});c({backgroundImage:e.url})}),[]),o.a.createElement(d.Provider,{value:r},t)},g=function(){return o.a.useContext(d)},f=n(9),p=[["advent","calendar"],["anger","management"],["chocolate","milk"],["christmas","carols"],["christmas","decoration"],["christmas","present"],["christmas","stockings"],["christmas","tree"],["climate","change"],["consumption","trap"],["digestive","schnapps"],["epiphany","kings"],["fairy","lights"],["Family","disputes"],["gift","exchange"],["holiday","decoration"],["hot","chocolate"],["mistletoe","kiss"],["mulled","wine"],["north","pole"],["reindeer","sleigh"],["road","grit"],["saint","nicholas"],["santa","claus"],["snow","chaos"],["social","distancing"],["stomach","pain"],["winter","tires"]];function v(){return p[Math.floor(Math.random()*p.length)]}var w="Error: Context not initialized ".concat(Date.now()),E={showHint:!1,showSolver:!1,compoundWord:v(),toggleHint:function(){throw Error(w)},toggleSolver:function(){throw Error(w)},resetCompoundWord:function(){throw Error(w)}},b=o.a.createContext(E),y=function(e){var t=e.children,n=Object(a.useState)({showHint:E.showHint,showSolver:E.showSolver,compoundWord:E.compoundWord}),r=Object(l.a)(n,2),c=r[0],i=r[1],u=Object(a.useCallback)((function(){i((function(e){return Object(f.a)(Object(f.a)({},e),{},{showHint:!e.showHint})}))}),[i]),s=Object(a.useCallback)((function(){i((function(e){return Object(f.a)(Object(f.a)({},e),{},{showSolver:!e.showSolver})}))}),[i]),m=Object(a.useCallback)((function(){var e=v();i((function(t){return Object(f.a)(Object(f.a)({},t),{},{compoundWord:e})}))}),[i]);return o.a.createElement(b.Provider,{value:{showHint:c.showHint,showSolver:c.showSolver,compoundWord:c.compoundWord,toggleHint:u,toggleSolver:s,resetCompoundWord:m}},t)},k=function(){return o.a.useContext(b)},_=function(e){var t=e.children;return o.a.createElement(o.a.Fragment,null,o.a.createElement(h,null,o.a.createElement(y,null,o.a.createElement(o.a.Fragment,null,t))))},j=n(10),O=n(1),C=n(15),x=n.n(C),S=function(e){var t=e.animate,n=e.close,a=e.message,r=e.title;return o.a.createElement("div",{className:x.a.root,onClick:function(e){e.target===e.currentTarget&&n()}},o.a.createElement("div",{className:"".concat(x.a.content," ").concat(t?x.a.party:"")},o.a.createElement("h3",null,r),"string"===typeof a?o.a.createElement("h4",null,a):a,o.a.createElement("br",null),o.a.createElement("button",{autoFocus:!0,onClick:n},"Close")))},H=n(19),W=n.n(H),I=function(e){var t=e.word.split("");return o.a.createElement("div",{className:W.a.root},t.map((function(e,t){return o.a.createElement("input",{key:t,tabIndex:-1,type:"text",value:e,className:W.a.input,disabled:"*"===e,readOnly:!0})})))},N=function(e){var t=e.secrets;return o.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},t.map((function(e,t){return o.a.createElement(I,{key:t,word:e})})))},F=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Math.floor(e.length/3),n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"*",a=e.split(""),o=a.map((function(e,t){return t})),r=a.map((function(){return n})),c=function(e){var t=o[Math.floor(Math.random()*o.length)];r[t]=a[t].toUpperCase(),o=o.filter((function(e){return e!==t}))},l=0;l<t;l++)c(l);return r.join("")},M=function(){var e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1];return[F(e),F(t)]},P=function(e){var t=e.onClose,n=Object(l.a)(e.words,2),r=n[0],c=n[1],i=Object(a.useMemo)((function(){return M(r,c)}),[r,c]);return o.a.createElement(S,{close:t,title:"It has something to do with:",message:o.a.createElement(N,{secrets:i})})},D=function(){var e=k(),t=e.compoundWord,n=e.toggleHint,r=e.showHint,c=e.showSolver;return Object(a.useEffect)((function(){var e=function(e){"KeyH"===e.code&&n()};return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)}}),[n]),o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{tabIndex:r||!c?0:-1,onClick:n,disabled:r,"aria-label":"Hint"},"Hint"),r&&o.a.createElement(P,{words:t,onClose:n}))},z=n(8),K=n(30),R=n.n(K),B=o.a.forwardRef((function(e,t){var n=e.disabled,a=void 0!==n&&n,r=e.letter,c=e.onChange,l=void 0===c?void 0:c,i=e.onKeyDown,u=void 0===i?void 0:i;return o.a.createElement("input",{className:R.a.root,disabled:a,maxLength:1,onKeyDown:u,onChange:l&&function(e){return l(e.currentTarget.value)},onFocus:function(e){e.currentTarget.setSelectionRange(0,1)},readOnly:!l,ref:t,type:"text",value:r||""})})),L=function(e){var t=e.active,n=e.solved,a=e.onClose,r=k().compoundWord;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(S,{animate:n,title:n?"Yesss!":"Nope...",message:n?"You solved this puzzle!":"Sorry, the correct answer was: ".concat(r.join(" ")),close:a}))},T=n(16),A=n.n(T),G=function(e){var t=e.solution,n=Object(O.f)(),r=Object(a.useState)(!1),c=Object(l.a)(r,2),i=c[0],u=c[1],s=Object(a.useRef)([]),m=function(e){e&&!s.current.includes(e)&&s.current.push(e)},d=new Array(t[0].length+t[1].length).fill(null),h=Object(a.useState)(d),g=Object(l.a)(h,2),f=g[0],p=g[1];return Object(a.useEffect)((function(){s.current.length>0&&s.current[0].focus()}),[]),o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u(!0)}},o.a.createElement("div",{className:A.a.root},o.a.createElement("div",{className:A.a.word},d.map((function(e,n){return o.a.createElement(o.a.Fragment,{key:n},t[0].length===n&&o.a.createElement("span",{className:A.a.spacer}),o.a.createElement(B,{disabled:i,letter:f[n],onChange:function(e){1===e.length?(p([].concat(Object(z.a)(f.slice(0,n)),[e],Object(z.a)(f.slice(n+1)))),s.current[(n+1)%s.current.length].focus()):p([].concat(Object(z.a)(f.slice(0,n)),[null],Object(z.a)(f.slice(n+1))))},onKeyDown:function(e){46!==e.keyCode&&8!==e.keyCode||(e.preventDefault(),p([].concat(Object(z.a)(f.slice(0,n)),[null],Object(z.a)(f.slice(n+1)))),s.current[(s.current.length+n-1)%s.current.length].focus())},ref:m}))})))),o.a.createElement("br",null),o.a.createElement("button",{type:"submit","aria-label":"Verify your answer",tabIndex:i?-1:0},"Solve"),o.a.createElement(L,{active:i,solved:t.join("").toLowerCase()===f.join("").toLowerCase(),onClose:function(){n.go(0)}}))},Y=function(e){var t=e.onClose,n=e.solution;return o.a.createElement(S,{close:t,title:"What's the compound word?",message:o.a.createElement(G,{solution:n})})},J=function(){var e=k(),t=e.compoundWord,n=e.toggleSolver,a=e.showHint,r=e.showSolver;return o.a.createElement(o.a.Fragment,null,o.a.createElement("button",{tabIndex:!a||r?0:-1,onClick:n,disabled:r,"aria-label":"Solve"},"Solve"),r&&o.a.createElement(Y,{onClose:n,solution:t}))},Q=function(e){var t=e.src,n=e.width,a=e.height;return o.a.createElement("img",{src:t,width:n,height:a,alt:"hmm.",style:{margin:"0 auto"}})},U=function(){return[window.innerHeight,window.innerWidth]},V=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s,a=t(),o=Object(l.a)(a,2),r=o[0],c=o[1],i=c>600?Math.ceil(c/2):c,u=Math.ceil(r/2);return e.map((function(e){return n({height:u,keyword:e,width:i})}))},X=n(32),Z=n.n(X),$=function(e){var t=e.to,n=e.label;return o.a.createElement(j.b,{to:t,className:Z.a.root},n)},q=function(){var e=k().compoundWord,t=Object(a.useMemo)((function(){return V(e)}),[e]);return o.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"center",height:"100vh"}},o.a.createElement("div",{style:{textAlign:"center"}},t.map((function(e,t){return o.a.createElement(Q,{key:t,src:e.url,width:.8*e.width,height:.8*e.height})}))),o.a.createElement("div",null,o.a.createElement(J,null),o.a.createElement(D,null)),o.a.createElement($,{to:"/",label:"Exit"}))},ee=n(23),te=n.n(ee),ne=n(14),ae=n.n(ne),oe=function(){return o.a.createElement("footer",null,"developed by"," ",o.a.createElement("a",{href:"https://compose.us",rel:"noreferrer noopener",target:"_blank"},"compose.us"))},re=function(){var e=g().backgroundImage;return o.a.createElement("div",{className:te.a.root,style:{backgroundImage:'url("'.concat(e,'")'),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},o.a.createElement("div",{className:te.a.card},o.a.createElement("img",{src:ae.a,alt:"Image Fun"})),o.a.createElement("article",null,o.a.createElement("h1",null,"How To Play"),o.a.createElement("p",null,"Find out how well you know your open compound words."),o.a.createElement("section",null,o.a.createElement("h2",null,"Objective:"),o.a.createElement("p",null,"Start by looking at the two images provided and try to figure out which compound word the two images refer to.")),o.a.createElement("section",null,o.a.createElement("h2",null,"Game Play"),o.a.createElement("p",null,'When you think you know what the compound word is, click on the "Solve" button and enter your answer.'),o.a.createElement("p",null,'If you\'re having trouble figuring it out, click on the "Hint" button to see few random letters to help you solve it.'))),o.a.createElement($,{to:"/",label:"Back"}),o.a.createElement(oe,null))},ce=n(17),le=n.n(ce),ie=function(){var e=g().backgroundImage;return o.a.createElement("div",{className:le.a.root,style:{backgroundImage:'url("'.concat(e,'")'),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"}},o.a.createElement("div",null,o.a.createElement("div",{className:le.a.card},o.a.createElement("img",{src:ae.a,alt:"Image Fun"})),o.a.createElement("div",{className:le.a.actions},o.a.createElement($,{to:"/game",label:"Start Game"}),o.a.createElement($,{to:"/how-to-play",label:"How to Play"}))),o.a.createElement(oe,null))},ue=function(){return o.a.createElement("main",null,o.a.createElement(O.c,null,o.a.createElement(O.a,{path:"/game"},o.a.createElement(q,null)),o.a.createElement(O.a,{path:"/how-to-play"},o.a.createElement(re,null)),o.a.createElement(O.a,{path:"/"},o.a.createElement(ie,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(_,null,o.a.createElement(j.a,null,o.a.createElement(ue,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.502f50e2.chunk.js.map