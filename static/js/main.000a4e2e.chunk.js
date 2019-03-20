(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(41),i=n.n(o),c=n(2),l=n(3),s=n(5),u=n(4),p=n(6),b=n(72),d=n(74),f=n.n(d),h=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("header",{style:{paddingBottom:"0.5em",display:"flex",justifyContent:"center",alignItems:"flex-end",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.2))",borderBottom:"1px solid black"}},r.a.createElement("h1",{style:{color:"rgba(229, 172, 0, 1)",fontSize:"5rem",textTransform:"uppercase",fontWeight:"100",textShadow:"4px 4px 2px rgba(0, 0, 0, 1)"}},"Chess Board"))}}]),t}(a.Component),m=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.black,n=e.children,a=t?"hsla(25, 75%, 60%, 1)":"hsla(240, 66%, 15%, 1)",o={background:t?"hsla(240, 66%, 15%, 1)":"hsla(25, 75%, 60%, 1)",color:a,textShadow:"0px 0px 0px ".concat(a),width:"100%",height:"100%"};return r.a.createElement("div",{style:o},n)}}]),t}(a.Component),y={pawn:{outline:{icon:"\u2659",position:{x:0,y:0}},fill:{icon:"\u265f",position:{x:0,y:0}}},rook:{outline:{icon:"\u2656",position:{x:0,y:0}},fill:{icon:"\u265c",position:{x:0,y:0}}},knight:{outline:{icon:"\u2658",position:{x:0,y:0}},fill:{icon:"\u265e",position:{x:0,y:0}}},bishop:{outline:{icon:"\u2657",position:{x:0,y:0}},fill:{icon:"\u265d",position:{x:0,y:0}}},queen:{outline:{icon:"\u2655",position:{x:0,y:0}},fill:{icon:"\u265b",position:{x:0,y:0}}},king:{outline:{icon:"\u2654",position:{x:0,y:0}},fill:{icon:"\u265a",position:{x:0,y:0}}}},j=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={icon:""},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState(function(e){return{icon:y.knight.fill.icon}})}},{key:"render",value:function(){var e=this.state.icon;return r.a.createElement("span",{style:{}},"".concat(e))}}]),t}(a.Component),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:{fontSize:"4rem",border:"1px solid black",padding:"0.5rem",zIndex:"1"}},r.a.createElement(m,{black:!0},r.a.createElement(j,null)),r.a.createElement(m,null,r.a.createElement(j,null)))}}]),t}(a.Component),x=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={},n}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Main",style:{display:"grid",justifyContent:"center",alignContent:"center",justifyItems:"center",alignItems:"center"}},r.a.createElement(g,null))}}]),t}(a.Component),O=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={color:"rgba(241, 91, 49, 1)",textDecoration:"none",fontWeight:"700",textShadow:"1.5px 1.5px 0px black"};return r.a.createElement("footer",{style:{padding:"0 0.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",background:"linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.8))"}},r.a.createElement("p",{style:{fontSize:"1em",textTransform:"uppercase"}},r.a.createElement("a",{href:"https://github.com/simongt/chess-board-react-dnd",target:"_blank",rel:"noopener noreferrer",style:e},"Chess Board (React-DnD)")),r.a.createElement("p",{style:{fontSize:"1em",textTransform:"uppercase"}},"Developed by ",r.a.createElement("a",{href:"https://simongt.net",target:"_blank",rel:"noopener noreferrer",style:e},"Simon G. Tsegay")))}}]),t}(a.Component),k=(n(210),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(b.DragDropContextProvider,{backend:f.a},r.a.createElement("div",{className:"App",style:{width:"100vw",height:"100vh",display:"grid",gridTemplateRows:"12rem 1fr 2rem",overflow:"hidden"}},r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(O,null)))}}]),t}(a.Component)),v=document.getElementById("root");i.a.render(r.a.createElement(k,null),v)},75:function(e,t,n){e.exports=n(211)}},[[75,1,2]]]);
//# sourceMappingURL=main.000a4e2e.chunk.js.map