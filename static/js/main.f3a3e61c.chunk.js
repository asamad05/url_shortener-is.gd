(this["webpackJsonpurl-shortener-is.gd"]=this["webpackJsonpurl-shortener-is.gd"]||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),o=a.n(r),c=a(24),i=a(4),s=a(11),u=a(1);var m=function(e){var t=e.title,a=Object(n.useState)(!1),r=Object(s.a)(a,2),o=r[0],c=r[1];return Object(n.useEffect)((function(){"dark"===localStorage.getItem("theme")&&c(!0)}),[]),l.a.createElement("header",null,l.a.createElement(u.Navbar,{alignLinks:"right",brand:l.a.createElement("a",{href:document.domain},t),menuIcon:l.a.createElement(u.Icon,null,"menu"),options:{draggable:!0,edge:"left",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:200,preventScrolling:!0}},l.a.createElement(u.NavItem,null,l.a.createElement(u.Switch,{id:"theme-switch",checked:o,offLabel:l.a.createElement(u.Icon,{className:"yellow-text",left:!0},"wb_sunny"),onChange:function(e){e.target.checked?(c(!0),document.body.classList.replace("light","dark"),localStorage.setItem("theme","dark")):(c(!1),document.body.classList.replace("dark","light"),localStorage.setItem("theme","light"))},onLabel:l.a.createElement(u.Icon,{className:"yellow-text text-lighten-4",right:!0},"brightness_6")}))))},d=a(25),h=a.n(d),p=a(45),g=a(8),f=a.n(g);function E(e){var t=e.copyText,a=e.classes,r=e.btnText,o=e.title;return l.a.createElement(n.Fragment,null,l.a.createElement("a",{href:"#!",className:a,onClick:function(){return function(e){var t=document.createElement("textarea");f.a.Toast.dismissAll(),t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),f.a.toast({html:"<i class='material-icons green-text'>check_circle</i> &nbsp; Link Copied",classes:"copy-toast"})}(t)},title:o},l.a.createElement(u.Icon,{left:!0},"content_copy")," ",r))}E.defaultProps={btnText:"Copy"};var v=E,b=a(19),S=a.n(b);var C=function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(null),c=Object(s.a)(o,2),i=c[0],m=c[1],d=Object(n.useRef)(),g=function(e,t,a){var n={url:e,shorturl:t,stats:a,id:t.replace("https://is.gd/",""),timestamp:Date.now()};if(null===localStorage.getItem("linksCollection")){var l=[];l.unshift(n),localStorage.setItem("linksCollection",JSON.stringify(l))}else{var r=JSON.parse(localStorage.getItem("linksCollection"));r.unshift(n),localStorage.setItem("linksCollection",JSON.stringify(r))}E(e).then((function(e){var t=JSON.parse(localStorage.getItem("linksCollection"));t[0].title=e.trim(),localStorage.setItem("linksCollection",JSON.stringify(t)),m(!0)})).catch((function(){return m(!1)}))},E=function(e){return S.a.get("https://cors-anywhere.herokuapp.com/".concat(e),{timeout:5e3}).then((function(e){var t=(new DOMParser).parseFromString(e.data,"text/html").querySelectorAll("title")[0];if(t)return t.innerText.trim()}))},b=function(){var e=Object(p.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.clipboard.readText();case 3:t=e.sent,d.current.value=t,d.current.blur(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),alert("Clipboard permission not granted."),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return l.a.createElement("section",{className:"form-container"},l.a.createElement(u.CardPanel,{className:"z-depth-2"},l.a.createElement(u.Row,null,l.a.createElement(u.Col,{s:12},l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m(null);var t=new URL(e.target.elements.url.value),a=e.target.elements.stats.checked;a?S.a.get("https://is.gd/create.php?format=json&url=".concat(t,"&logstats=1"),{timeout:5e3}).then((function(e){var n=e.data.shorturl;r(n),g(t.href,n,a)})).catch((function(e){console.log(e),f.a.toast({html:"<i class='material-icons red-text'>error</i> &nbsp; ".concat(e.message),classes:"error-toast"})})):S.a.get("https://is.gd/create.php?format=json&url=".concat(t),{timeout:5e3}).then((function(e){var n=e.data.shorturl;r(n),g(t.href,n,a)})).catch((function(e){console.log(e),f.a.toast({html:"<i class='material-icons red-text'>error</i> &nbsp; ".concat(e.message),classes:"error-toast"})})),e.target.elements.url.value=""},className:"form"},l.a.createElement("div",{className:"input-field"},l.a.createElement("label",{className:"active",htmlFor:"url"},"Enter a Long URL"),l.a.createElement("input",{type:"url",name:"url",ref:d,placeholder:"https://mylongurl.com/",className:"validate url",required:!0}),l.a.createElement(u.Button,{flat:!0,tabIndex:"-1","aria-hidden":"true",className:"paste-button hide",style:{padding:"0"},waves:"light",onClick:b},l.a.createElement(u.Icon,null,"content_paste"))),l.a.createElement(u.Row,null,l.a.createElement(u.Col,{s:12},l.a.createElement("div",{className:"switch"},l.a.createElement("label",null,l.a.createElement("span",null,"Show Stats"),l.a.createElement("input",{type:"checkbox",name:"stats"}),l.a.createElement("span",{className:"lever"}))))),l.a.createElement(u.Button,{node:"button",type:"submit",style:{marginRight:"5px"},waves:"light"},l.a.createElement(u.Icon,{left:!0},"content_cut"),l.a.createElement("span",null,"Shorten It"))),a&&l.a.createElement("div",null,l.a.createElement("div",{className:"input-field"},l.a.createElement("input",{type:"url",className:"shorten-url",value:a,disabled:!0}),l.a.createElement(u.Button,{flat:!0,"aria-hidden":"true",className:"shorturl-title-preload",style:{padding:"0"},waves:"light"},null===i&&l.a.createElement(u.Preloader,{active:!0,color:"blue",tooltip:"Fetching link title",tooltipOptions:{position:"top"},flashing:!1,size:"small"}),!1===i&&l.a.createElement(u.Icon,{tooltip:"Fetching link title failed",tooltipOptions:{position:"top"},className:"red-text"},"highlight_off"),i&&l.a.createElement(u.Icon,{tooltip:"Link title fetched",tooltipOptions:{position:"top"},className:"green-text"},"check_circle"))),navigator.share&&l.a.createElement(u.Button,{small:!0,onClick:function(){var e={title:"Created with ".concat(document.title),text:"Check this out!",url:a};navigator.share(e)},node:"button",style:{marginRight:"5px"},waves:"light"},l.a.createElement(u.Icon,{left:!0},"share"),l.a.createElement("span",null,"Share")),l.a.createElement(v,{copyText:a,classes:"btn btn-small waves-effect waves-light",btnText:"Copy",title:"Copy ShortURL to Clipboard"}))))))},w=a(18),y=a(26);var k=function(e){var t=e.onSearch,a=e.onSearchCancel,n=e.showSearch,r=e.setShowSearch,o=e.editMode,c="e5a9cc5a85b282aec3acbc5f95bd009a",i=localStorage.getItem("linksCollection"),s=function(){var e=document.createElement("a"),t=JSON.parse(localStorage.getItem("linksCollection"));t?(t.push({id:c}),e.href="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)),e.download=document.domain+".json",document.body.appendChild(e),e.click(),document.body.removeChild(e),f.a.toast({html:"<i class='material-icons blue-text'>info</i> &nbsp; Please download your backup and Keep it safe."})):f.a.toast({html:"<i class='material-icons red-text'>error</i> &nbsp; Nothing to export",classes:"error-toast"})},m=function(e){var t=e.target.files[0];if(t)try{var a=new FileReader;if("application/json"!==t.type)throw new Error("Not a valid file");a.readAsText(t,"UTF-8"),a.onload=function(e){var t=JSON.parse(e.target.result),a=t.pop().id,n=localStorage.getItem("linksCollection");if(a!==c)throw new Error("Not a valid file");if(null===n)localStorage.setItem("linksCollection",JSON.stringify(t));else{var l=t.concat(JSON.parse(n));localStorage.setItem("linksCollection",JSON.stringify(l))}window.location.reload()}}catch(n){f.a.toast({html:"<i class='material-icons red-text'>error</i> &nbsp; ".concat(n.message),classes:"error-toast"})}};return n?l.a.createElement("div",{className:"search-input-container"},l.a.createElement(u.TextInput,{placeholder:"Enter Search Keyword",onKeyUp:t,autoFocus:!0}),l.a.createElement(u.Button,{className:"red darken-1",onClick:a},l.a.createElement(u.Icon,null,"close"))):l.a.createElement("div",{className:"list-head"},l.a.createElement("div",{className:"heading"},"Recent Shorten Links"),i&&l.a.createElement("span",{className:"list-dropdown"},l.a.createElement("a",{href:"#!",onClick:function(){return r(!0)}},l.a.createElement(u.Icon,null,"search")),l.a.createElement(u.Dropdown,{id:"list-dropdown",options:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},trigger:l.a.createElement("a",{href:"#!"},l.a.createElement(u.Icon,{right:!0},"more_vert"))},l.a.createElement("a",{href:"#!",onClick:o},l.a.createElement(u.Icon,{left:!0},"edit")," Edit Mode"),l.a.createElement("a",{href:"#!",onChange:m},l.a.createElement(u.Icon,{left:!0},"import_export"),l.a.createElement("input",{type:"file",className:"import-file-input"})),l.a.createElement("a",{href:"#!",onClick:s},l.a.createElement(u.Icon,{left:!0},"cloud_download")," Export"),l.a.createElement("a",{className:"modal-trigger",href:"#delete-modal"},l.a.createElement(u.Icon,{left:!0},"delete")," Delete All"))),!i&&l.a.createElement(u.Dropdown,{id:"list-dropdown",options:{alignment:"left",autoTrigger:!0,closeOnClick:!0,constrainWidth:!0,container:null,coverTrigger:!0,hover:!1,inDuration:150,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,outDuration:250},trigger:l.a.createElement("a",{href:"#!"},l.a.createElement(u.Icon,{right:!0},"more_vert"))},l.a.createElement("a",{href:"#!",onChange:m},l.a.createElement(u.Icon,{left:!0},"import_export"),l.a.createElement("input",{type:"file",className:"import-file-input"}))),l.a.createElement(u.Modal,{bottomSheet:!1,fixedFooter:!1,header:"Delete All links stored locally?",id:"delete-modal",open:!1,options:{dismissible:!0,endingTop:"10%",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"}},l.a.createElement("h6",null,l.a.createElement("b",null,"Note:")," All your created short links will continue to redirect to their destination."),l.a.createElement("p",null,"Meanwhile, You can download your backup data\xa0",l.a.createElement("a",{href:"#!",onClick:s},"here.")),l.a.createElement(u.Button,{className:"red darken-1",node:"button",onClick:function(){localStorage.removeItem("linksCollection"),window.location.reload()}},"Yes")))};var N=function(e){var t=e.match,a=Object(i.g)(),r=Object(n.useState)([]),o=Object(s.a)(r,2),c=o[0],m=o[1],d=Object(n.useState)(0),h=Object(s.a)(d,2),p=h[0],g=h[1],E=Object(n.useState)(1),b=Object(s.a)(E,2),S=b[0],C=b[1],N=Object(n.useState)(!1),O=Object(s.a)(N,2),I=O[0],x=O[1],j=Object(n.useState)(!1),T=Object(s.a)(j,2),L=T[0],R=T[1],_=Object(n.useState)({url:"",shorturl:"",title:"",id:""}),J=Object(s.a)(_,2),D=J[0],U=J[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("linksCollection");if(e){for(var a=1,n=JSON.parse(e).length;10*a<n;)a++;g(a),"/"!==t.path&&C(parseInt(t.params.page)),m(JSON.parse(e).slice(10*S-10,10*S))}}),[p,S,t]),l.a.createElement("section",{className:"links-collection z-depth-2"},l.a.createElement(u.Collection,{header:l.a.createElement(k,{onSearch:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=localStorage.getItem("linksCollection");if(a){var n=JSON.parse(a).filter((function(t){var a=new RegExp(e.target.value,"gi");return t.title?t.url.match(a)||t.shorturl.match(a)||t.title.match(a):t.url.match(a)||t.shorturl.match(a)}));m(n.slice(0,t))}},onSearchCancel:function(){x(!1),a.push("/")},showSearch:I,setShowSearch:x,editMode:function(){return R((function(e){return!e}))}})},0===c.length&&l.a.createElement(u.CollectionItem,null,l.a.createElement("br",null),l.a.createElement("h5",{className:"grey-text"},"Your history will appear here."),l.a.createElement("br",null)),S>p&&c.length>0&&l.a.createElement(u.CollectionItem,null,l.a.createElement("br",null),l.a.createElement("h5",{className:"grey-text"},"Page not found"),l.a.createElement("br",null)),c.map((function(e,t){return l.a.createElement(u.CollectionItem,{key:t,onClick:function(e){var t=JSON.parse(localStorage.getItem("linksCollection")),a=e.target.parentElement.parentElement.parentElement.querySelector(".shorturl").innerText.replace("https://is.gd/","");if(e.target.classList.contains("edit")){var n=t.find((function(e){return e.id===a}));U(Object(y.a)({title:""},n))}else e.target.classList.contains("delete")&&function(e,t){var a=JSON.parse(localStorage.getItem("linksCollection")).filter((function(t){return t.id!==e})),n=c.filter((function(t){return t.id!==e}));t.classList.add("deleting-item"),f.a.Toast.dismissAll(),localStorage.setItem("linksCollection",JSON.stringify(a)),m(n),setTimeout((function(){t.classList.remove("deleting-item")}),500),f.a.toast({html:"<i class='material-icons red-text'>check_circle</i> &nbsp; URL Deleted",classes:"delete-toast"})}(a,e.currentTarget)}},l.a.createElement(u.Row,null,l.a.createElement(u.Col,{s:L?12:10,style:{padding:"0px"}},L&&l.a.createElement("div",{className:"edit-mode-icons"},l.a.createElement("a",{href:"#Edit-Modal",className:"modal-trigger"},l.a.createElement(u.Icon,{left:!0,className:"edit"},"edit")),l.a.createElement("a",{href:"#!"},l.a.createElement(u.Icon,{left:!0,className:"delete"},"delete"))),l.a.createElement("div",{className:"truncate",title:"Title"},e.title?e.title:e.url),l.a.createElement("div",{className:"truncate blue-text shorturl",title:"Short URL"},e.shorturl)),!L&&l.a.createElement(u.Col,{s:2,className:"center-align"},l.a.createElement(v,{copyText:e.shorturl,classes:"secondary-content secondary-copy-btn",btnText:"",title:"Copy ShortURL to Clipboard"}),e.stats&&!L&&l.a.createElement("a",{href:"https://is.gd/stats.php?url=".concat(e.id),target:"_blank",rel:"noreferrer noopener",className:"secondary-content",title:"Check Statistics"},l.a.createElement(u.Icon,{left:!0},"show_chart")))))})),!I&&l.a.createElement(u.CollectionItem,{className:"center-align"},l.a.createElement(u.Pagination,{activePage:S,items:p,leftBtn:l.a.createElement(u.Icon,null,"chevron_left"),maxButtons:5,rightBtn:l.a.createElement(u.Icon,null,"chevron_right"),onSelect:function(e){a.push("/".concat(e))}}))),l.a.createElement(u.Modal,{actions:[l.a.createElement(u.Button,{modal:"close",node:"button",className:"red"},"Cancel"),l.a.createElement("span",null,"\xa0\xa0\xa0"),l.a.createElement(u.Button,{modal:"close",node:"button",className:"blue",onClick:function(){return function(e){var t=e.id,a=JSON.parse(localStorage.getItem("linksCollection")).map((function(e){return e.id===t?D:e})),n=c.map((function(e){return e.id===t?D:e}));m(n),localStorage.setItem("linksCollection",JSON.stringify(a))}(D)}},"Edit")],className:"edit-modal",bottomSheet:!1,fixedFooter:!0,header:"Edit URL",id:"Edit-Modal",options:{dismissible:!0,endingTop:"10%",inDuration:250,onCloseEnd:null,onCloseStart:null,onOpenEnd:null,onOpenStart:null,opacity:.5,outDuration:250,preventScrolling:!0,startingTop:"4%"}},l.a.createElement("div",{style:{paddingTop:"10px"}},l.a.createElement(u.TextInput,{type:"text",icon:"title",value:D.title,name:"title",onChange:function(e){return U(Object(y.a)({},D,Object(w.a)({},e.target.name,e.target.value)))},label:"Title"}),l.a.createElement(u.TextInput,{type:"url",icon:"public",value:D.url,name:"url",label:"Full URL",readOnly:!0}),l.a.createElement(u.TextInput,{type:"url",icon:"link",value:D.shorturl,name:"shorturl",label:"Short URL",readOnly:!0}))))};var O=function(){return l.a.createElement(u.Footer,{className:"footer z-depth-2",copyrights:"\xa9 2020"},l.a.createElement("h5",{className:"white-text"},"URL Shortner v","1.0.0"),l.a.createElement("p",{className:"grey-text text-lighten-4 valign-wrapper"},"Made with \xa0 ",l.a.createElement(u.Icon,{className:"red-text"},"favorite"),"\xa0 by \xa0","Abdul Samad"))};a(116);var I=function(){return Object(n.useEffect)((function(){localStorage.getItem("theme")&&(document.body.className=localStorage.getItem("theme"))}),[]),l.a.createElement(c.a,{basename:"/url_shortener_is.gd"},l.a.createElement("div",{className:"App"},l.a.createElement(m,{title:"URL Shortener"}),l.a.createElement("div",{className:"container"},l.a.createElement(C,null),l.a.createElement(i.d,null,l.a.createElement(i.a,{exact:!0,from:"/",to:"/1"}),l.a.createElement(i.b,{exact:!0,from:"/:page",component:N}))),l.a.createElement(O,null)))},x=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(I,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/url_shortener_is.gd",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/url_shortener_is.gd","/service-worker.js");x?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()},47:function(e,t,a){e.exports=a(117)}},[[47,1,2]]]);
//# sourceMappingURL=main.f3a3e61c.chunk.js.map