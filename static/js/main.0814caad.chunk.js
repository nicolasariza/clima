(this.webpackJsonpclima=this.webpackJsonpclima||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),l=t(5),r=t.n(l),o=(t(13),t(3)),s=t.n(o),i=t(6),m=t(2),u=function(e){var a=e.titulo;return c.a.createElement("nav",{className:"nav-wrapper light-blue darken-2"},c.a.createElement("a",{href:"#!",className:"brand-logo"},a))},d=t(1),p=t(7),E=function(e){var a=e.mensaje;return c.a.createElement("p",{className:"error red darken-4"},a)},b=function(e){var a,t=e.busqueda,l=e.setBusqueda,r=e.setConsultar,o=Object(n.useState)(!1),s=Object(m.a)(o,2),i=s[0],u=s[1],b=t.ciudad,v=t.pais,f=function(e){l(Object(p.a)({},t,Object(d.a)({},e.target.name,e.target.value)))};return c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),""!==b.trim()&&""!==v.trim()?(u(!1),r(!0)):u(!0)}},i?c.a.createElement(E,{mensaje:"Todos los campos son obligatorios"}):null,c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("input",{type:"text",name:"ciudad",id:"ciudad",value:b,onChange:f}),c.a.createElement("label",{htmlFor:"ciudad"},"Ciudad:")),c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("select",(a={name:"pais"},Object(d.a)(a,"name","pais"),Object(d.a)(a,"id","pais"),Object(d.a)(a,"value",v),Object(d.a)(a,"onChange",f),a),c.a.createElement("option",{value:""},"--Seleccione un pa\xeds"),c.a.createElement("option",{value:"US"},"Estados Unidos"),c.a.createElement("option",{value:"MX"},"M\xe9xico"),c.a.createElement("option",{value:"AR"},"Argentina"),c.a.createElement("option",{value:"CO"},"Colombia"),c.a.createElement("option",{value:"CR"},"Costa Rica"),c.a.createElement("option",{value:"ES"},"Espa\xf1a"),c.a.createElement("option",{value:"PE"},"Per\xfa")),c.a.createElement("label",{htmlFor:"pais"},"Pa\xeds:")),c.a.createElement("div",{className:"input-field col s12"},c.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn-large btn-block yellow accent-4 col s12"},"Buscar clima")))},v=function(e){var a=e.resultado,t=a.name,n=a.main;if(!t)return null;return c.a.createElement("div",{className:"card-panel white col s12"},c.a.createElement("div",{className:"black-text"},c.a.createElement("h2",null,"El clima de ",t," es:"," ",c.a.createElement("p",{className:"temperatura"},parseFloat(n.temp-273.15,10).toFixed(2)," ",c.a.createElement("span",null," \u2103")),c.a.createElement("p",{className:""},"Temperatura m\xe1xima",parseFloat(n.temp_max-273.15,10).toFixed(2)," ",c.a.createElement("span",null," \u2103")),c.a.createElement("p",{className:""},"Temperatura Minima:",parseFloat(n.temp_min-273.15,10).toFixed(2)," ",c.a.createElement("span",null," \u2103")))))};var f=function(){var e,a=Object(n.useState)({cuidad:"",pais:""}),t=Object(m.a)(a,2),l=t[0],r=t[1],o=l.ciudad,d=l.pais,p=Object(n.useState)(!1),f=Object(m.a)(p,2),h=f[0],j=f[1],O=Object(n.useState)({}),g=Object(m.a)(O,2),w=g[0],N=g[1],x=Object(n.useState)(!1),k=Object(m.a)(x,2),C=k[0],S=k[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){var a,t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h){e.next=13;break}return"79040aa3323970bc38c240d69b812626",a="https://api.openweathermap.org/data/2.5/weather?q=".concat(o,",").concat(d,"&appid=").concat("79040aa3323970bc38c240d69b812626"),console.log(a),e.next=6,fetch(a);case 6:return t=e.sent,e.next=9,t.json();case 9:n=e.sent,N(n),j(!1),"404"===n.cod?S(!0):S(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]),e=C?c.a.createElement(E,{mensaje:"No hay resultados"}):c.a.createElement(v,{resultado:w}),c.a.createElement(n.Fragment,null,c.a.createElement(u,{titulo:"Clima"}),c.a.createElement("div",{className:"contenedor-form"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col m6 s12"},c.a.createElement(b,{busqueda:l,setBusqueda:r,setConsultar:j})),c.a.createElement("div",{className:"col m6 s12"},e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.0814caad.chunk.js.map