(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8112:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return Z}});var o=n(7294),r=n(2870);function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],o=!0,r=!1,i=void 0;try{for(var a,l=t[Symbol.iterator]();!(o=(a=l.next()).done)&&(n.push(a.value),!e||n.length!==e);o=!0);}catch(s){r=!0,i=s}finally{try{o||null==l.return||l.return()}finally{if(r)throw i}}return n}}(t,e)||function(t,e){if(t){if("string"===typeof t)return i(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=function(t,e){return[(0,o.useRef)(null),(0,o.useCallback)((function(t){e(t.target.value)}),[])]},s=function(t){var e=t.colorProps,n=e.color,i=e.setColor,s=(0,o.useState)(Math.floor(256*Math.random()).toString()),f=s[0],p=s[1],u=(0,o.useState)(Math.floor(256*Math.random()).toString()),c=u[0],d=u[1],g=(0,o.useState)(Math.floor(256*Math.random()).toString()),x=g[0],h=g[1],b=(0,o.useState)(!1),m=b[0],v=b[1],y=a(l(f,p),2),Z=y[0],w=y[1],k=a(l(c,d),2),S=k[0],C=k[1],z=a(l(x,h),2),I=z[0],j=z[1],_={red:parseInt(f).toString(16).padStart(2,"0").toUpperCase(),green:parseInt(c).toString(16).padStart(2,"0").toUpperCase(),blue:parseInt(x).toString(16).padStart(2,"0").toUpperCase()};(0,o.useEffect)((function(){i("#".concat(_.red).concat(_.green).concat(_.blue))}),[f,c,x]);var N=(0,o.useCallback)((function(){v(!0)}),[]),F=(0,o.useCallback)((function(t){i(t.target.value.toUpperCase())}),[]),T=(0,o.useCallback)((function(){v(!1);var t=n.replace("#","");p(parseInt(t.substr(0,2),16).toString()),d(parseInt(t.substr(2,2),16).toString()),h(parseInt(t.substr(4,2),16).toString())}),[n]),A=(0,r.iv)("background-color:#ffffff;border:1px solid #33333390;padding:10px;border-radius:5px;display:flex;flex-direction:column;width:100%;box-sizing:border-box;margin-bottom:40px;&:nth-last-of-type(1){margin-bottom:20px;}&>.selector-top{margin-bottom:20px;display:flex;flex-direction:column;align-items:center;justify-content:center;&>div{width:100%;background-color:",n,";border:1px solid #00000050;border-radius:5px;height:120px;}&>p{&.edit-false{font-weight:900;margin-bottom:10px;font-size:28pt;display:flex;flex-direction:row;align-items:center;justify-content:center;line-height:100%;cursor:pointer;background-color:#eeeeee;border:1px solid #33333390;padding:5px 10px;border-radius:5px;}&.edit-true{margin-bottom:10px;&>input{font-size:28pt;font-weight:900;background-color:#eeeeee;border:1px solid #33333390;border-radius:5px;text-align:center;width:200px;margin-right:10px;padding:0 10px;outline:none;}&>button{font-weight:500;font-size:28pt;background-color:#666666;color:#eeeeee;border:none;border-radius:5px;padding:0 10px;outline:none;cursor:pointer;transition:all 0.3s;&:hover{background-color:#333333;color:#ffffff;transition:all 0.3s;}}}}}&>.selector-bottom{&>p{display:flex;flex-direction:row;width:inherit;margin:5px 0;align-items:center;justify-content:flex-start;line-height:100%;&>span{font-weight:500;font-size:14pt;&:nth-of-type(1){display:inline-block;padding:5px 10px;border-radius:5px 0 0 5px;border-right:none;text-align:center;width:70px;box-sizing:border-box;}&:nth-of-type(2){margin-right:10px;font-weight:900;box-sizing:border-box;padding:5px;text-align:center;border-left:none;border-radius:0 5px 5px 0;width:55px;}&:nth-of-type(3){margin-right:10px;}&:nth-of-type(4){margin-left:10px;}}&:nth-of-type(1){margin-top:0;&>span:nth-of-type(1){border:2px solid #c21b1b;background-color:#c21b1b;color:#ffffff;}&>span:nth-of-type(2){border:2px solid #c21b1b;color:#c21b1b;}}&:nth-of-type(2){&>span:nth-of-type(1){border:2px solid #016705;background-color:#016705;color:#ffffff;}&>span:nth-of-type(2){border:2px solid #016705;color:#016705;}}&:nth-of-type(3){margin-bottom:0;&>span:nth-of-type(1){border:2px solid #2747a8;background-color:#2747a8;color:#ffffff;}&>span:nth-of-type(2){border:2px solid #2747a8;color:#2747a8;}}&>input{flex:1;width:50px;}}}","","");return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("div",{css:A},(0,r.tZ)("div",{className:"selector-top"},m?(0,r.tZ)("p",{className:"edit-true"},(0,r.tZ)("input",{type:"text",value:n,onChange:F}),(0,r.tZ)("button",{onClick:T},"\ubcc0\uacbd")):(0,r.tZ)("p",{className:"edit-false",onClick:N,title:"\ud074\ub9ad\ud558\uba74 \uc218\uc815 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."},n),(0,r.tZ)("div",null)),(0,r.tZ)("div",{className:"selector-bottom"},(0,r.tZ)("p",null,(0,r.tZ)("span",null,"Red"),(0,r.tZ)("span",null,f),(0,r.tZ)("span",null,"0"),(0,r.tZ)("input",{type:"range",min:0,max:255,ref:Z,onChange:w,value:f}),(0,r.tZ)("span",null,"255")),(0,r.tZ)("p",null,(0,r.tZ)("span",null,"Green"),(0,r.tZ)("span",null,c),(0,r.tZ)("span",null,"0"),(0,r.tZ)("input",{type:"range",min:0,max:255,ref:S,onChange:C,value:c}),(0,r.tZ)("span",null,"255")),(0,r.tZ)("p",null,(0,r.tZ)("span",null,"Blue"),(0,r.tZ)("span",null,x),(0,r.tZ)("span",null,"0"),(0,r.tZ)("input",{type:"range",min:0,max:255,ref:I,onChange:j,value:x}),(0,r.tZ)("span",null,"255")))))};var f={name:"1bjhojm",styles:"border:1px solid #00000050;margin:0 auto;display:block"},p=function(t){var e=t.backgroundColor,n=t.textColor,i=t.text,l=t.width,s=t.height,p=t.href,u=t.setHref,c=t.textSize,d=(0,o.useRef)(null);(0,o.useEffect)((function(){var t=d.current,o=null===t||void 0===t?void 0:t.getContext("2d");o.fillStyle=e,o.fillRect(0,0,null===t||void 0===t?void 0:t.width,null===t||void 0===t?void 0:t.height),function(t,e){var n=d.current,o=null===n||void 0===n?void 0:n.getContext("2d"),r=e.color,i=e.size,l=e.font;o.font="500 ".concat(i,"pt ").concat(l),o.fillStyle=r,o.textAlign="center",o.textBaseline="middle";var s=(null===n||void 0===n?void 0:n.width)/2,f=(null===n||void 0===n?void 0:n.height)/2,p=1.4*i,u=t.split("\\n");if(u.length%2)u.map((function(t,e){var n=parseInt((u.length/2).toString(),10),r=f+(e-n)*p;return o.fillText(t,s,r),null}));else{var c=(u.length-1)/2;u.map((function(t,e){return e})).reduce((function(t,e){var n=e-c;return t.push([n<0,parseInt(n.toString(),10)]),t}),[]).map((function(t,e){var n=a(t,2),r=n[0],i=n[1],l=f+i*p+(r?p/2*-1:p/2);return o.fillText(u[e],s,l),null}))}}(i,{color:n,size:c,font:"Noto Sans KR"});var r=null===t||void 0===t?void 0:t.toDataURL();p!==r&&u(r),console.log("canvas >> ",t),console.log("ctx >> ",o)}),[e,n,i,c,l,s]);var g=f;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("canvas",{css:g,ref:d,width:l,height:s}))};var u={name:"14p4b58",styles:"margin-bottom:40px;&>p{display:flex;flex-direction:row;align-items:center;justify-content:center;&>span{background-color:#666666;color:#ffffff;padding:5px 10px;display:inline-block;border-radius:5px;font-weight:500;font-size:16pt;margin-right:10px;line-height:100%;}&>input{background-color:#eeeeee;border:1px solid #33333390;border-radius:5px;text-align:center;width:100px;font-weight:500;font-size:16pt;outline:none;transition:all 0.3s;&:focus{background-color:#ffffff;transition:all 0.3s;}&:nth-of-type(1){margin-right:10px;}}}"},c=function(t){var e=t.state,n=t.setState,i=e.width,a=e.height,l=n.setWidth,s=n.setHeight,f=(0,o.useCallback)((function(t){l(t.target.value)}),[]),p=(0,o.useCallback)((function(t){s(t.target.value)}),[]),c=(0,o.useCallback)((function(t){t.target.value=t.target.value.replace(/[^0-9]/gi,"")}),[]),d=u;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("div",{css:d},(0,r.tZ)("p",null,(0,r.tZ)("span",null,"\uac00\ub85c \ud06c\uae30"),(0,r.tZ)("input",{type:"text",onChange:f,value:i,onInput:c}),(0,r.tZ)("span",null,"\uc138\ub85c \ud06c\uae30"),(0,r.tZ)("input",{type:"text",onChange:p,value:a,onInput:c}))))};var d={name:"1pfjfv9",styles:"margin-bottom:40px;line-height:100%;&>p{margin-bottom:10px;display:flex;flex-direction:row;justify-content:center;align-items:center;&>span{font-size:16pt;font-weight:500;display:inline-block;padding:5px 10px;line-height:100%;background-color:#666666;color:#ffffff;border-radius:5px;margin-right:10px;}&>input{width:100px;text-align:center;border:1px solid #33333390;border-radius:5px;background-color:#eeeeee;color:#333333;font-weight:500;font-size:16pt;outline:none;transition:all 0.3s;&:focus{background-color:#ffffff;transition:all 0.3s;}}}&>textarea{padding:10px;text-align:justify;width:100%;box-sizing:border-box;background-color:#eeeeee;color:#333333;border-radius:5px;border:1px solid #33333390;line-height:1.5;font-weight:500;font-size:16pt;transition:all 0.3s;outline:none;&:focus{background-color:#ffffff;transition:all 0.3s;}}"},g=function(t){var e=t.text,n=t.setText,i=t.textSize,a=t.setTextSize,l=(0,o.useCallback)((function(t){n(t.target.value)}),[]),s=(0,o.useCallback)((function(t){a(t.target.value)}),[]),f=d;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("div",{css:f},(0,r.tZ)("p",null,(0,r.tZ)("span",null,"\ud14d\uc2a4\ud2b8 \ud06c\uae30"),(0,r.tZ)("input",{type:"text",value:i,onChange:s})),(0,r.tZ)("textarea",{placeholder:e,onChange:l,rows:3})))};var x={name:"1i0pedj",styles:"text-align:center;margin-top:20px;&>a{display:inline-block;text-decoration:none;color:#ffffff;border-radius:10px;border:2px solid #ffffff;padding:10px 20px;line-height:100%;font-size:26pt;font-weight:900;transition:all 0.3s;&:hover{background-color:#ffffff;color:#333333;transition:all 0.3s;}}"},h=function(t){var e=t.href,n=t.text,i=x;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("div",{css:i},(0,r.tZ)("a",{href:e,download:"".concat(n,"_.png")},"\ub2e4\uc6b4\ub85c\ub4dc")))};var b={name:"1rojq64",styles:"padding:20px 10px;background-color:#333333;color:#ffffff;text-align:center;font-size:16pt;font-weight:900;user-select:none;margin-top:100px;&>p{line-height:100%;&:before{content:'\\f1f9';font-weight:500;font-family:'Font Awesome 5 Free',sans-serif;margin-right:5px;}&>a{color:#cccccc;text-decoration:underline dotted;&:hover{color:#ffffff;text-decoration:underline solid;}}}"},m=function(){var t=(new Date).getFullYear(),e=b;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)("footer",{css:e},(0,r.tZ)("p",null,t,". ",(0,r.tZ)("a",{href:"https://github.com/NIHILncunia",target:"_blank",rel:"noreferrer noopener"},"NIHILncunia."))))};var v={name:"10ep43t",styles:"&>div{&:nth-of-type(1){margin-bottom:100px;background-color:#333333;padding:20px 10px;}&:nth-of-type(2){width:100%;margin:0 auto;padding:0 20px;box-sizing:border-box;&>h2{margin:20px 0;text-align:center;font-weight:900;&>span{background-color:#333333;color:#ffffff;padding:10px 20px;display:inline-block;border-radius:10px;font-size:26pt;line-height:100%;}}@media (min-width: 801px){max-width:960px;}}}"},y={name:"1g6fb5z",styles:"@import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);{}*{padding:0;margin:0;font-family:'Noto Sans KR',sans-serif;}body{background-color:#dddddd;}"},Z=function(){var t=(0,o.useState)(""),e=t[0],n=t[1],i=(0,o.useState)(""),a=i[0],l=i[1],f=(0,o.useState)("\ud14d\uc2a4\ud2b8\ub97c \uc785\ub825\ud558\uc138\uc694."),u=f[0],d=f[1],x=(0,o.useState)("32"),b=x[0],Z=x[1],w=(0,o.useState)(""),k=w[0],S=w[1],C=(0,o.useState)("720"),z=C[0],I=C[1],j=(0,o.useState)("450"),_=j[0],N=j[1],F={color:e,setColor:n},T={color:a,setColor:l},A=y,E=v;return(0,r.tZ)(o.Fragment,null,(0,r.tZ)(r.xB,{styles:A}),(0,r.tZ)("main",{css:E},(0,r.tZ)("div",null,(0,r.tZ)(p,{backgroundColor:e,textColor:a,textSize:b,text:u,width:z,height:_,href:k,setHref:S}),(0,r.tZ)(h,{href:k,text:u})),(0,r.tZ)("div",null,(0,r.tZ)("h2",null,(0,r.tZ)("span",null,"\uce94\ubc84\uc2a4 \ud06c\uae30")),(0,r.tZ)(c,{state:{width:z,height:_},setState:{setWidth:I,setHeight:N}}),(0,r.tZ)("h2",null,(0,r.tZ)("span",null,"\ud14d\uc2a4\ud2b8")),(0,r.tZ)(g,{text:u,setText:d,textSize:b,setTextSize:Z}),(0,r.tZ)("h2",null,(0,r.tZ)("span",null,"\ubc30\uacbd \uc0c9\uc0c1")),(0,r.tZ)(s,{colorProps:F}),(0,r.tZ)("h2",null,(0,r.tZ)("span",null,"\ud14d\uc2a4\ud2b8 \uc0c9\uc0c1")),(0,r.tZ)(s,{colorProps:T}))),(0,r.tZ)(m,null))}},3685:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(8112)}])}},function(t){t.O(0,[888,774,179],(function(){return e=3685,t(t.s=e);var e}));var e=t.O();_N_E=e}]);