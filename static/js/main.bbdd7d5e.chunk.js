(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{35:function(t,e,n){t.exports=n.p+"static/media/langham.753cb62e.png"},37:function(t,e,n){t.exports=n.p+"static/media/sameeraakbar.7d61ad0b.png"},43:function(t,e,n){t.exports=n.p+"static/media/kone.29357ec4.png"},48:function(t,e,n){t.exports=n(70)},53:function(t,e,n){},54:function(t,e,n){},70:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),l=n(4),r=n.n(l),i=(n(53),n(54),n(12)),c=n(13),s=n(14),u=n(15),m=n(35),d=n.n(m),h=n(36),b=(n(55),n(99)),p=n(98),g=n(37),f=n.n(g),E=n(38),F=n.n(E),k=n(62),v=function(t,e){return void 0!==t?t:e},y=[["P","U","1","2","3"],["R","L","4","5","6"],["M","B","7","8","9"],["F","G","del","0","#"]],C=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(t){var a;return Object(i.a)(this,n),(a=e.call(this,t)).handleClick=function(t){var e="del"===t.target.name?"":a.state.baseInput+t.target.name;a.setState({baseInput:e})},a.button=function(t){var e=a.state.numberButtonVariant,n=a.state.numberButtonFont;return"del"===t?(e=a.state.dangerButtonVariant,n=a.state.dangerButtonFont):t.charAt(0).match(/[a-z]/i)&&(e=a.state.floorButtonVariant,n=a.state.floorButtonFont),o.a.createElement(b.a,{name:t,onClick:a.handleClick,className:a.state.defaultButtonClass,style:{fontSize:a.state.buttonFontSize,fontWeight:"bold",backgroundColor:e,borderColor:e,color:n}},t)},a.keyboard=function(){return o.a.createElement("div",null,o.a.createElement("table",{align:"center",className:a.state.baseKeyboardClass},o.a.createElement("tbody",null,a.state.keys.map((function(t,e){return o.a.createElement("tr",null,t.map((function(t,e){return o.a.createElement("td",null,a.button(t))})))})))))},a.handleChange=function(t){a.setState(Object(h.a)({},t.target.name,t.target.value))},a.state={baseInput:"",title:v(t.title,"SameeraAkbar"),logo:v(t.logo,f.a),useTitle:v(t.useTitle,!1),icon:v(t.icon,"icons/qlicky.ico"),logoWidth:v(t.logoWidth,150),qrWidth:v(t.qrWidth,250),baseKeyboardClass:v(t.baseKeyboardClass,"keyboard-content"),defaultButtonClass:v(t.defaultButtonClass,"keyboard-button"),floorButtonVariant:v(t.floorButtonVariant,"#1976d2"),floorButtonFont:v(t.floorButtonFont,"#FFFFFF"),numberButtonVariant:v(t.numberButtonVariant,"#f5f5f5"),numberButtonFont:v(t.numberButtonFont,"#000000"),dangerButtonVariant:v(t.dangerButtonVariant,"#212121"),dangerButtonFont:v(t.dangerButtonFont,"FFFFFF"),buttonFontSize:v(t.buttonFontSize,30),keys:v(t.keyboard,y)},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.title=this.state.title}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(F.a,null,o.a.createElement("title",null,this.state.title),o.a.createElement("meta",{name:this.state.title,content:this.state.title}),o.a.createElement("link",{rel:"icon",type:"image/png",href:this.state.icon,sizes:"16x16"}),o.a.createElement("link",{rel:"apple-touch-icon",type:"image/png",href:this.state.icon,sizes:"16x16"})),o.a.createElement("br",null),this.state.useTitle?o.a.createElement("h1",null,this.state.title):o.a.createElement("img",{src:this.state.logo,alt:"",width:this.state.logoWidth}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement(k,{value:this.state.baseInput,size:this.state.qrWidth,renderAs:"svg",fgColor:""===this.state.baseInput?"#DCDCDC":"#000000",bgColor:""===this.state.baseInput?"#DCDCDC":"#FFFFFF"})," ",o.a.createElement("br",null)," ",o.a.createElement("br",null),o.a.createElement(p.a,{name:"baseInput",id:"outlined-basic",label:"Where to?",variant:"outlined",onChange:this.handleChange,value:this.state.baseInput,inputProps:{style:{fontSize:"20px",fontWeight:"bold"}},InputLabelProps:{style:{fontSize:"20px",fontWeight:"bold"}}}),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("div",null,this.keyboard()))}}]),n}(o.a.Component),B=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{title:"Langham Place",logo:d.a,icon:"icons/langhamplace/langham.ico",logoWidth:200}))}}]),n}(o.a.Component),O=n(43),j=n.n(O),W=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(C,{title:"KONE",logo:j.a,icon:"icons/kone/kone.ico"}))}}]),n}(o.a.Component),x=n(10);var z=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,path:"/",component:C}),o.a.createElement(x.a,{exact:!0,path:"/langhamplace",component:B}),o.a.createElement(x.a,{exact:!0,path:"/kone",component:W})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=n(22),V=o.a.createElement(I.a,{basename:"https://qlicky.github.io"},o.a.createElement(z,null));console.log("Hello V1, https://qlicky.github.io"),r.a.render(V,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[48,1,2]]]);
//# sourceMappingURL=main.bbdd7d5e.chunk.js.map