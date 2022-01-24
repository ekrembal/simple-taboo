(function(e){function t(t){for(var n,i,d=t[0],c=t[1],a=t[2],l=0,p=[];l<d.length;l++)i=d[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,a||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,d=1;d<r.length;d++){var c=r[d];0!==o[c]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],c=d.push.bind(d);d.push=t,d=d.slice();for(var a=0;a<d.length;a++)t(d[a]);var u=c;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23"),o={class:"container"},s={class:"row justify-content-center"},i={class:"row justify-content-center"},d={class:"row justify-content-center fixed-bottom"},c={class:"col"},a={class:"col"},u={class:"col"};function l(e,t,r,l,p,b){var f=Object(n["n"])("Card");return Object(n["j"])(),Object(n["f"])("div",o,[Object(n["g"])("div",s," Points: "+Object(n["o"])(p.points),1),Object(n["g"])("div",i,[Object(n["h"])(n["b"],{name:"bounce"},{default:Object(n["p"])((function(){return[p.isCardVisible?(Object(n["j"])(),Object(n["d"])(f,{key:0,word:p.card.word,restrictedWords:p.card.restrictedWords},null,8,["word","restrictedWords"])):Object(n["e"])("",!0)]})),_:1})]),Object(n["g"])("div",d,[Object(n["g"])("div",c,[Object(n["g"])("button",{onClick:t[0]||(t[0]=function(e){return b.newCard(-1)}),type:"button",class:"btn btn-danger"},"Wrong")]),Object(n["g"])("div",a,[Object(n["g"])("button",{onClick:t[1]||(t[1]=function(e){return b.newCard(0)}),type:"button",class:Object(n["i"])(["btn btn-primary",{disabled:p.numSkips>=3}])},"Skip",2)]),Object(n["g"])("div",u,[Object(n["g"])("button",{onClick:t[2]||(t[2]=function(e){return b.newCard(1)}),type:"button",class:"btn btn-success"},"Correct")])])])}var p={class:"col-md-auto"},b={class:"card"},f={class:"card-header"},g={class:"card-body"},w={class:"list-group list-group-flush"};function y(e,t,r,o,s,i){return Object(n["j"])(),Object(n["f"])("div",p,[Object(n["g"])("div",b,[Object(n["g"])("div",f,Object(n["o"])(r.word),1),Object(n["g"])("div",g,[Object(n["g"])("ul",w,[(Object(n["j"])(!0),Object(n["f"])(n["a"],null,Object(n["m"])(r.restrictedWords,(function(e){return Object(n["j"])(),Object(n["f"])("li",{key:e,class:"list-group-item"},Object(n["o"])(e),1)})),128))])])])])}var m={name:"Card",props:{word:String,restrictedWords:Array}},h=(r("9cd9"),r("6b0d")),v=r.n(h);const C=v()(m,[["render",y],["__scopeId","data-v-3f8a242a"]]);var O=C,j={name:"App",components:{Card:O},data:function(){return{points:-1,card:null,gameCards:[{word:"Accredited Investor",restrictedWords:["Money","Wealthy","Business","Investor","Bank"]},{word:"B-to-B",restrictedWords:["Business","Digital Marketing","Small Business","Email","Sales"]},{word:"B-to-C",restrictedWords:["Business to Consumer","Company","Selling","Advertising"]},{word:"Burn Rate",restrictedWords:["Fire","Blaze","Forest","Rate","Smoke"]},{word:"Churn Rate",restrictedWords:["Credit","Bank","Mortgage","Income","Interest"]},{word:"Disruptive İnnovation",restrictedWords:["Breakthrough","Think","Change","Product","Phone"]},{word:"Exit Strategy",restrictedWords:["Business","Business Plan","Strategy","Exit","Company"]},{word:"First Mover Advantage",restrictedWords:["Business","Company","Start","Entrepreneur","Product"]},{word:"Intellectual Property",restrictedWords:["Copyright","Patent","Trademark","Intellectual","Lawyer"]},{word:"Launch",restrictedWords:["Rocket","Shuttle","Blast","Lift-Off","Airplane"]},{word:"Lean Startup",restrictedWords:["Business","Concept","Idea","Building","Startup"]},{word:"Leverage",restrictedWords:["Cog","Machine","Gear","Force","Power"]},{word:"Market Penetration",restrictedWords:["Strategy","Business","Product","Sales","Statistics"]},{word:"Monetize Model",restrictedWords:["Business","Marketing","Branding","Strategy","Analytics"]},{word:"Minimum Viable Product",restrictedWords:["Business","Product","Idea","Beta","Test"]},{word:"Ramen Profitable",restrictedWords:["Dish","Noodles","Microwave","Packet","Instant"]},{word:"Responsive Design",restrictedWords:["Website","Code","Responsive","Mobile","Open"]},{word:"Return On Investment (ROI)",restrictedWords:["Profit","Company","Profit Margin","Dollar","Return"]},{word:"SaaS",restrictedWords:["Cloud","Software","Internet","Technology","Program"]},{word:"Traction",restrictedWords:["Snow","Ice","Car","Slippery","Skid"]},{word:"Business Valuation",restrictedWords:["Accountant","Company","Defined","Value","Stock"]},{word:"Value Proposition",restrictedWords:["Marketing","Advertising","Business","Customer","Offer"]},{word:"Crowdfunding",restrictedWords:["Kickstarter","GoFundMe","Pledging","Donations","Financial"]},{word:"Term Sheet",restrictedWords:["Contract","Financial","Investing","Borrowing","Equity"]},{word:"Break Even Point",restrictedWords:["Accounting","Income","Profit","Loss","Expenses"]},{word:"Preferred Stock",restrictedWords:["Investment","Company","Business","Stockholder","Shareholder"]},{word:"Dilution",restrictedWords:["Water","Solution","Thin","Concentration","Reduce"]},{word:"Acquisitions",restrictedWords:["Book","Buy","Sell","Trade","Shopping","Library"]},{word:"Due Diligence",restrictedWords:["Law","Attorney","Research","Case","Case Study"]},{word:"Initial Public Offering (IPO)",restrictedWords:["Stock","Stock Market","Company","Raise","Increase"]},{word:"Joint Venture",restrictedWords:["Partnership","Business","Employees","Company","Goals"]},{word:"Merger",restrictedWords:["Company","Acquire","Business","Corporate","Partnership"]},{word:"Series A-B-C",restrictedWords:["Smallest-Largest","Numbers","Alphabet","A to Z"]},{word:"Seed Capital",restrictedWords:["Investment","Venture","Money","Fund","Business"]},{word:"Venture Capital",restrictedWords:["Investment","Business","Start-Up","Company","Venture"]},{word:"Private Equity",restrictedWords:["Money","Company","Investment","Bank","Wall Street"]},{word:"Angel investment",restrictedWords:["Business","Startup","Rich","Rich People","Sponsor"]}],curCard:-1,isCardVisible:!0,numSkips:0}},methods:{getRandomCard:function(){return this.curCard++,this.gameCards[this.curCard]},newCard:function(e){var t=this;if(0==e){if(this.numSkips>=3)return;this.numSkips++}this.points+=e,this.isCardVisible=!1,this.card=this.getRandomCard(),setTimeout((function(){t.isCardVisible=!0}),0)}},created:function(){this.newCard(1)}};r("64d8");const S=v()(j,[["render",l]]);var W=S;Object(n["c"])(W).mount("#app")},"64d8":function(e,t,r){"use strict";r("932c")},"932c":function(e,t,r){},"9cd9":function(e,t,r){"use strict";r("ce62")},ce62:function(e,t,r){}});
//# sourceMappingURL=app.a1cdc06d.js.map