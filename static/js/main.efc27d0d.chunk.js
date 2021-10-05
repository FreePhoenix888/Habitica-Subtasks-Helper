(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{18:function(e,t,a){},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),n=a(15),r=a.n(n),i=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),s(e),n(e),r(e)})).catch((function(e){return console.log(e)}))},l=(a(24),a(25),a(2)),o=a(5),u=a.n(o),b=a(9),d=a(8),j=a(7),h=a(4),m=(a(27),a(1)),p=["className","children"],f=function(e){var t=e.className,a=void 0===t?"":t,c=e.children,s=Object(h.a)(e,p);return Object(m.jsx)("a",Object(l.a)(Object(l.a)({className:"habitica-subtasks-helper-anchor ".concat(a)},s),{},{children:c}))},O=(a(29),["className"]),v=function(e){var t=e.className,a=void 0===t?"":t,c=Object(h.a)(e,O);return Object(m.jsx)("label",Object(l.a)({className:"habitica-subtasks-helper-label ".concat(a)},c))},x=(a(30),["className"]),N=function(e){var t=e.className,a=void 0===t?"":t,c=Object(h.a)(e,x);return Object(m.jsx)("p",Object(l.a)({className:"habitica-subtasks-helper-paragraph ".concat(a)},c))},g=(a(31),["className"]),k=function(e){var t=e.className,a=void 0===t?"":t,c=Object(h.a)(e,g);return Object(m.jsx)("code",Object(l.a)({className:"habitica-subtasks-helper-code ".concat(a)},c))},y=(a(32),["className"]),_=function(e){var t=e.className,a=Object(h.a)(e,y);return Object(m.jsx)("form",Object(l.a)({className:"habitica-subtasks-helper-form ".concat(t)},a))},w=function(e){var t=e.children;return Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form-section__invalid-input-error habitica-subtasks-helper-form-section-invalid-input-error",children:[Object(m.jsx)("span",{className:"triangle-up habitica-subtasks-helper-form-section-invalid-input-error__triangle-up"}),Object(m.jsx)("span",{children:t})]})},C=(a(17),a(33),a(6));function I(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.trim().split(" "),c=t;a.forEach((function(e){var t=e.split("--")[1];t&&(c[t]=!0)}));var s=Object(C.a)(a);return c&&Object.entries(c).forEach((function(e){var t=Object(j.a)(e,2),c=t[0];if(t[1]){var n=a.map((function(e){return"".concat(e,"--").concat(c)}));s.push.apply(s,Object(C.a)(n))}})),s.join(" ")}var S=function(e,t){var a=Object(c.useState)((function(){var a=window.localStorage.getItem(e);return a?JSON.parse(a):t})),s=Object(j.a)(a,2),n=s[0],r=s[1];return[n,function(t){var a=t instanceof Function?t(n):t;r(a),window.localStorage.setItem(e,JSON.stringify(a))}]},T=a(47),F=["className","classNameModifiers"],P=Object(c.forwardRef)((function(e,t){var a=e.className,c=void 0===a?"":a,s=e.classNameModifiers,n=Object(h.a)(e,F);return Object(m.jsx)("input",Object(l.a)({className:I("habitica-subtasks-helper-input ".concat(c),s),ref:t},n))}));P.displayName="HabiticaSubtasksHelperInput";var R=["onInput","classNameModifiers"],E=Object(c.forwardRef)((function(e,t){var a=e.onInput,s=e.classNameModifiers,n=Object(h.a)(e,R),r=Object(c.useRef)(),i=Object(c.useCallback)((function(){if(r.current){var e=r.current,t=e.value.length;t||(t=e.placeholder.length),e.size=t}}),[r]);Object(c.useEffect)((function(){i()}),[i]),Object(c.useImperativeHandle)(t,(function(){return r.current}));var o=Object(c.useCallback)((function(e){i(),a&&a(e)}),[a,i]);return Object(m.jsx)(P,Object(l.a)({classNameModifiers:Object(l.a)({"auto-size":!0},s),ref:r,onInput:o},n))}));E.displayName="HabiticaSubtasksHelperInputAutoSize";a(34);var H=["className"],A=Object(c.forwardRef)((function(e,t){var a=e.className,c=void 0===a?"":a,s=Object(h.a)(e,H);return Object(m.jsx)("textarea",Object(l.a)(Object(l.a)({className:"habitica-subtasks-helper-textarea ".concat(c)},s),{},{ref:t}))}));A.displayName="HabiticaSubtasksHelperTextArea";a(35);var D=["labelClassName","className","children"];function L(e){var t=e.labelClassName,a=void 0===t?"":t,c=e.className,s=void 0===c?"":c,n=e.children,r=Object(h.a)(e,D),i=e.id,o={checked:e.checked};return Object(m.jsxs)("label",{className:I("habitica-subtasks-helper-radio ".concat(a),o),htmlFor:i,children:[n,Object(m.jsx)("input",Object(l.a)({className:I("habitica-subtasks-helper-radio__input ".concat(s),o),type:"radio"},r))]})}a(36);var q=["radiosData","name","className","value","onChange"];function V(e){var t=e.radiosData,a=e.name,s=e.className,n=void 0===s?"":s,r=e.value,i=e.onChange,o=Object(h.a)(e,q),u=Object(c.useCallback)((function(){return t.map((function(e){return Object(c.createElement)(L,Object(l.a)(Object(l.a)({checked:r===e.value,name:a},e),{},{key:e.id,onChange:i}))}))}),[t,r,a,i]);return Object(m.jsx)("div",Object(l.a)(Object(l.a)({className:"habitica-subtasks-helper-radio-group ".concat(n)},o),{},{children:u()}))}a(18);var M,B=function(e){var t=e.children,a=e.id,s=e.api,n=Object(c.createRef)();return Object(c.useEffect)((function(){n.current.focus()})),Object(m.jsx)("div",{className:"habitica-subtasks-helper-modal-container",ref:n,role:"button",tabIndex:-1,onClick:function(e){var t=e.target;t instanceof Element&&(t.classList.contains("habitica-subtasks-helper-modal__close-button")||t.classList.contains("habitica-subtasks-helper-modal-container"))&&s.remove(a)},onKeyDown:function(e){e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||"Tab"===e.code||"F7"===e.code||s.remove(a),"Tab"===e.code&&e.preventDefault()},children:Object(m.jsxs)("div",{className:"habitica-subtasks-helper-modal",children:[Object(m.jsx)("div",{className:"habitica-subtasks-helper-modal__content",children:t}),Object(m.jsx)("button",{className:"habitica-subtasks-helper-modal__close-button",tabIndex:-1,type:"button",children:"Press any key or click outside to close."})]})})},J={add:null,remove:null},K=function(){var e=Object(c.useState)([]),t=Object(j.a)(e,2),a=t[0],s=t[1];Object(c.useEffect)((function(){var e=document.body.style;if(0!==a.length){var t=""===e.paddingRight?0:parseInt(e.paddingRight,10);e.paddingRight="".concat(t+(window.innerWidth-document.documentElement.clientWidth),"px"),e.overflow="hidden"}else e.paddingRight="",e.overflow=""}));return J.add=function(e){var t=Object(T.a)();return s((function(a){return[].concat(Object(C.a)(a),[{children:e,id:t}])})),t},J.remove=function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))},Object(m.jsx)(m.Fragment,{children:a.map((function(e){return Object(m.jsx)(B,{api:J,id:e.id,children:e.children},e.id)}))})},W=a(19),z=a(13),Q=["title","titleId"];function U(){return(U=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function X(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function Y(e,t){var a=e.title,s=e.titleId,n=X(e,Q);return c.createElement("svg",U({xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"100%",height:"100%",viewBox:"0 0 438 438",style:{enableBackground:"new 0 0 438 438"},xmlSpace:"preserve",fill:"hsl(0, 0%, 77%)",ref:t,"aria-labelledby":s},n),a?c.createElement("title",{id:s},a):null,M||(M=c.createElement("path",{d:"M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365 c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63 c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996 c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136 c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559 c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559 c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997 c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851 c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136 c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41 c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126 c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817 c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994 c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849 c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24 c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979 c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146 c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995 c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906 C438.536,184.851,428.728,148.168,409.132,114.573z"})))}var Z,G=c.forwardRef(Y),$=(a.p,a(40),["children","className"]),ee=function(e){var t=e.children,a=e.className,c=void 0===a?"":a,s=Object(h.a)(e,$);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",Object(l.a)(Object(l.a)({className:"header ".concat(c)},s),{},{children:[Object(m.jsx)(f,{href:"https://github.com/FreePhoenix888/Habitica-Subtasks-Helper",rel:"noopener noreferrer",target:"_blank",children:Object(m.jsx)(G,{})}),t]})),Object(m.jsx)(z.a,{})]})},te=(a(41),["className"]),ae=function(e){var t=e.className,a=Object(h.a)(e,te);return Object(m.jsx)("button",Object(l.a)(Object(l.a)({},a),{},{className:"habitica-subtasks-helper-button ".concat(t),type:"button"}))},ce=["className"],se=function(e){var t=e.className,a=Object(h.a)(e,ce);return Object(m.jsx)(ae,Object(l.a)(Object(l.a)({className:"habitica-subtasks-helper-info-button ".concat(t)},a),{},{children:"?"}))},ne=["className"],re=function(e){var t=e.className,a=Object(h.a)(e,ne);return Object(m.jsx)("button",Object(l.a)({className:I("habitica-subtasks-helper-button ".concat(t)),type:"submit"},a))},ie=a(12),le=["title","titleId"];function oe(){return(oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&(e[c]=a[c])}return e}).apply(this,arguments)}function ue(e,t){if(null==e)return{};var a,c,s=function(e,t){if(null==e)return{};var a,c,s={},n=Object.keys(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(c=0;c<n.length;c++)a=n[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}function be(e,t){var a=e.title,s=e.titleId,n=ue(e,le);return c.createElement("svg",oe({width:40,height:40,viewBox:"0 0 40 40",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},n),a?c.createElement("title",{id:s},a):null,Z||(Z=c.createElement("path",{d:"M24.9279 16L20.0679 0L15.2079 16H0.0678711L12.4279 24.82L7.72787 40L20.0679 30.62L32.4279 40L27.7279 24.82L40.0679 16H24.9279Z",fill:"currentColor"})))}var de=c.forwardRef(be),je=(a.p,a(42),function(){var e=Object(c.useState)(30),t=Object(j.a)(e,2),a=t[0],s=t[1],n=S("isPersonalDataUsingAccepted",!1),r=Object(j.a)(n,2),i=r[0],o=r[1];Object(c.useEffect)((function(){i||setTimeout((function(){J.add(Object(m.jsxs)("div",{children:[Object(m.jsx)(N,{children:"App uses your browser local storage to preserve data of some input fields to save your time."}),Object(m.jsx)("strong",{children:"By staying in the app you agree to this."})]})),o(!0)}),5e3)}),[i,o]);var h=S("userId",""),p=Object(j.a)(h,2),f=p[0],O=p[1],x=S("apiToken",""),g=Object(j.a)(x,2),y=g[0],C=g[1],I=Object(ie.b)({defaultValues:{userId:f,apiToken:y}}),T=I.register,F=I.control,R=I.handleSubmit,H=I.formState.errors,D=Object(c.useCallback)((function(e,t){return t?e.split(t).map((function(e){return e.trim()})):[e]}),[]);return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(K,{}),Object(m.jsx)(W.a,{}),Object(m.jsx)(ee,{}),Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Habitica Subtasks Helper"}),Object(m.jsxs)(_,{action:"",className:"habitica-subtasks-helper-form",onChange:function(){console.log("change")},onSubmit:R((function(e){var t=e.userId,a=e.apiToken,c=e.title,n=e.type,r=e.notes,i=e.priority,l=e.subtasks,o=e.separator,j=e.amount;O(t),C(a);var h,p={"Content-Type":"application/json","x-client":"59322894-0bd9-45f1-af35-4ceffcd76fac-HabiticaSubtasksHelper","x-api-user":t,"x-api-key":a},f=D(l,o),v=[],x=Object(d.a)(f);try{for(x.s();!(h=x.n()).done;){var N=h.value;v.push({text:N,completed:!1})}}catch(w){x.e(w)}finally{x.f()}for(var g=JSON.stringify({text:c,type:n,priority:i,notes:r,checklist:v}),k=[],y=0,_=0;_<j;_++)k.push(new Promise((function(e,t){fetch("https://habitica.com/api/v3/tasks/user",{method:"POST",headers:p,body:g}).then(function(){var a=Object(b.a)(u.a.mark((function a(c){var n,r,i;return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,c.json();case 2:n=a.sent,c.ok||t(n),r=Number(c.headers.get("X-RateLimit-Remaining")),i=new Date(c.headers.get("X-RateLimit-Reset")),s(r),setTimeout((function(){s(30)}),i.getTime()-(new Date).getTime()),y++,e(n);case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())})));Promise.all(k).then((function(){Object(z.b)(Object(m.jsx)("p",{children:"Success"}),{type:"success"})})).catch((function(e){console.log(e),"TooManyRequests"===e.error?Object(z.b)(Object(m.jsxs)("p",{style:{wordBreak:"break-word"},children:["Requests limit reached. Successfully added: ",y]}),{type:"error"}):Object(z.b)(Object(m.jsx)("p",{style:{wordBreak:"break-word"},children:e.message}),{type:"error"})}))})),children:[Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsx)(v,{className:"title__label",htmlFor:"title",children:"Title"}),Object(m.jsx)(P,Object(l.a)({autoComplete:"off",className:"title__input",id:"title",name:"title",placeholder:"The Venus Project Conception."},T("title",{required:"Title is required"}))),H.title&&Object(m.jsx)(w,{children:H.title.message})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsx)(v,{className:"subtasks__label",htmlFor:"subtasks",children:"Subtasks"}),Object(m.jsx)(A,Object(l.a)({autoComplete:"off",className:"subtasks__textarea",id:"subtasks",placeholder:"What is the Venus Project?\n\t\t\t\t\t\t\t\tAims\n\t\t\t\t\t\t\t\tProposals\n\t\t\t\t\t\t\t\tFAQ\n\t\t\t\t\t\t\t\tFree e-Books\n\t\t\t\t\t\t\t\tRecommended books",rows:10,wrap:"soft"},T("subtasks")))]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsxs)("div",{className:"label-section",children:[Object(m.jsx)(v,{className:"separator__label label-section__label",htmlFor:"separator",children:"Separator"}),Object(m.jsx)(se,{className:"separator__info-button label-section__info-button",onClick:function(){J.add(Object(m.jsxs)("div",{children:[Object(m.jsxs)("div",{children:["You can use symbols or ",Object(m.jsx)(k,{children:"regular expression"})," to separate your subtasks."]}),Object(m.jsx)("b",{children:"Subtasks:"})," ",Object(m.jsx)(k,{children:"What is the Venus Project?;Aims;Proposals;FAQ"}),Object(m.jsx)("br",{}),Object(m.jsxs)("div",{children:[Object(m.jsx)("b",{children:"Separator:"})," ",Object(m.jsx)(k,{children:";"})]}),Object(m.jsx)("div",{children:Object(m.jsx)("b",{children:"Result:"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:"What is the Venus Project?"}),Object(m.jsx)("li",{children:"Aims"}),Object(m.jsx)("li",{children:"Proposals."}),Object(m.jsx)("li",{children:"FAQ."})]})]}))}})]}),Object(m.jsx)(E,Object(l.a)({autoComplete:"off",className:"separator__input",defaultValue:"",id:"separator",name:"separator",placeholder:"\\n"},T("separator",{setValueAs:function(e){try{return new RegExp(e)}catch(t){return null}},validate:function(e){return null!==e}}))),H.separator&&Object(m.jsx)(w,{children:"Invalid regular expression"})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsx)(v,{className:"notes__label",htmlFor:"notes",children:"Notes"}),Object(m.jsx)(A,Object(l.a)({autoComplete:"off",className:"notes__textarea",id:"notes",name:"notes",placeholder:"Read it without any prejudices as any new ideas.",rows:10,wrap:"soft"},T("notes")))]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section priority",children:[Object(m.jsx)(v,{htmlFor:"priority1",children:"Difficulty"}),Object(m.jsx)(ie.a,{control:F,defaultValue:1,name:"priority",render:function(e){var t=e.field,a=t.onChange,c=t.value,s=t.name;return Object(m.jsx)(V,{className:"priority__radio-group",name:s,radiosData:[{value:.1,children:Object(m.jsx)(de,{}),id:"priority0.1"},{value:1,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(de,{}),Object(m.jsx)(de,{})]}),id:"priority1"},{value:1.5,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(de,{}),Object(m.jsx)(de,{}),Object(m.jsx)(de,{})]}),id:"priority1.5"},{value:2,children:Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(de,{}),Object(m.jsx)(de,{}),Object(m.jsx)(de,{}),Object(m.jsx)(de,{})]}),id:"priority2"}],value:c,onChange:function(e){return a(parseFloat(e.currentTarget.value))}})},rules:{required:"Difficult is required"}})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsx)(v,{htmlFor:"todo",children:"Type"}),Object(m.jsx)(ie.a,{control:F,defaultValue:"todo",name:"type",render:function(e){var t=e.field,a=t.onChange,c=t.value,s=t.name;return Object(m.jsx)(V,{className:"type__radio-group type-radio-group",name:s,radiosData:[{value:"todo",children:"Todo",id:"task-type-todo"},{value:"daily",children:"Daily",id:"task-type-daily"},{value:"habit",children:"Habit",id:"task-type-habit"}],value:c,onChange:a})},rules:{required:"Type is required"}})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section habitica-subtasks-helper-form-section",children:[Object(m.jsxs)("div",{className:"label-section",children:[Object(m.jsx)(v,{className:"amount__label",htmlFor:"amount",children:"Amount"}),Object(m.jsx)(se,{"data-effect":"solid","data-place":"top","data-tip":"You can add the same task multiple times. Limit is 30 per minute"})]}),Object(m.jsx)(P,Object(l.a)({autoComplete:"off",className:"amount__input",defaultValue:1,id:"amount",name:"amount",placeholder:"1",type:"number"},T("amount",{valueAsNumber:!0,validate:function(e){if(Number.isNaN(e))return"Value must be a number"},max:{value:a,message:"Remained requests limit is ".concat(a)},min:{value:1,message:"Min value is 1"}}))),H.amount&&Object(m.jsx)(w,{children:H.amount.message})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsxs)("div",{className:"label-section",children:[Object(m.jsx)(v,{className:"label-section__label",htmlFor:"userId",children:"User ID"}),Object(m.jsx)(se,{className:"label-section__info-button",onClick:function(){window.open("https://habitica.com/user/settings/api","_blank").focus()}})]}),Object(m.jsx)(P,Object(l.a)({autoComplete:"off",id:"userId",name:"userId"},T("userId",{required:"User ID is required"}))),H.userId&&Object(m.jsx)(w,{children:H.userId.message})]}),Object(m.jsxs)("div",{className:"habitica-subtasks-helper-form__section",children:[Object(m.jsxs)("div",{className:"label-section",children:[Object(m.jsx)(v,{className:"label-section__label",htmlFor:"apiToken",children:"API Token:"}),Object(m.jsx)(se,{className:"label-section__info-button",onClick:function(){window.open("https://habitica.com/user/settings/api","_blank").focus()}})]}),Object(m.jsx)(P,Object(l.a)({autoComplete:"off",id:"apiToken",name:"apiToken"},T("apiToken",{required:"API token is required"}))),H.apiToken&&Object(m.jsx)(w,{children:H.apiToken.message})]}),Object(m.jsx)("div",{className:"submit-section",children:Object(m.jsx)(re,{className:"submit-button","data-disabled":0===a,"data-effect":"solid","data-place":"top","data-tip":"Requests limit reached","data-tip-disable":0!==a,"data-type":"error",children:"Create"})})]})]})]})});r.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(je,{})}),document.getElementById("root")),i()}},[[43,1,2]]]);
//# sourceMappingURL=main.efc27d0d.chunk.js.map