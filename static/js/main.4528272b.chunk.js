(this["webpackJsonpflatiron-coliseum"]=this["webpackJsonpflatiron-coliseum"]||[]).push([[0],{59:function(e,t,n){},60:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(11),c=n.n(a),o=(n(59),n(60),n(15)),s=n(12),i=n(113),l=n(114),p=n(2);var j=function(){return Object(p.jsxs)("header",{style:{backgroundImage:'url("https://ssb.wiki.gallery/images/7/73/SSBU-Pok%C3%A9mon_Stadium.png")',backgroundSize:"100%",backgroundPositionY:"65%"},children:[Object(p.jsx)("img",{src:"https://fontmeme.com/permalink/210624/f76e565b296fd522a525e1f734845036.png",alt:"battleStage",style:{paddingTop:"10px",paddingBottom:"100px"}}),Object(p.jsxs)("nav",{children:[Object(p.jsx)(i.a,{component:o.c,to:"/Coliseum",exact:!0,label:"To Coliseum!",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png"})}),Object(p.jsx)(i.a,{component:o.c,to:"/HallOfFame",exact:!0,label:"To Hall Of Fame!",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://e7.pngegg.com/pngimages/7/208/png-clipart-poke-ball-pokemon-gold-and-silver-pokemon-orange-logo.png"})})]}),Object(p.jsx)("hr",{})]})},b=n(10),u=n(18),m=n(110),h=n(109);var d=function(e){var t=e.name,n=e.id,r=e.position;return e.wins,Object(p.jsxs)(h.a,{children:[Object(p.jsx)("h3",{style:{fontFamily:"Cinzel"},children:t.toUpperCase()}),Object(p.jsx)("img",{src:0===r?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/".concat(n,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t,height:"40%",width:"40%"})]})};var O=function(e){var t,n=e.contestants,r=e.warriors,a=e.pokeList,c=e.setPokemon;return Object(p.jsxs)("div",{children:[Object(p.jsx)(m.a,{container:!0,spacing:2,justify:"center",children:(t=n,t.map((function(e){return Object(p.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(p.jsx)(d,{name:e.name,id:parseFloat(e.url.slice(34)),position:t.indexOf(e)})},e.name)})))}),Object(p.jsx)(i.a,{component:o.b,onClick:function(){var e=Math.random();c(e>.5?{battlers:[],warriors:Object(b.a)(r),pokeList:[].concat(Object(b.a)(a),Object(b.a)(n)),winner:[n[0]]}:{battlers:[],warriors:Object(b.a)(r),pokeList:[].concat(Object(b.a)(a),Object(b.a)(n)),winner:[n[1]]})},to:"/Victory",exact:!0,label:"Fight!",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png"})})]})};var x=function(e){var t=e.winner,n=parseFloat(t.url.slice(34));return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{fontFamily:"Cinzel"},children:"The Winner is"}),Object(p.jsxs)(h.a,{style:{backgroundImage:"url(https://cdn1.vectorstock.com/i/1000x1000/92/35/fireworks-arc-on-starry-night-sky-vector-31919235.jpg)",backgroundPositionY:"50%"},children:[Object(p.jsx)("h1",{style:{fontFamily:"Cinzel",color:"white"},children:t.name.toUpperCase()}),Object(p.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t.name,height:"10%",width:"10%"}),Object(p.jsx)("br",{})]})]})};var g=function(e){var t=e.battlers,n=e.warriors,a=e.pokeList,c=e.setPokemon,j=e.winner,u=[];return Object(r.useEffect)((function(){if(j){var e={name:j[0].name,url:j[0].url,battleTime:Date.now()};fetch("http://localhost:3000/battles",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(e)})}}),[j]),Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{style:{fontFamily:"Cinzel"},children:"BattleField"}),n.length>=2?Object(p.jsx)(i.a,{component:o.b,onClick:function(){u=n.splice(0,2),c({battlers:u,warriors:Object(b.a)(n),pokeList:Object(b.a)(a)})},to:"/Fight",exact:!0,label:"Get Ready!",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png"})}):"",Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/Fight",component:function(){return Object(p.jsx)(O,{contestants:t,pokeList:a,warriors:n,setPokemon:c})}}),Object(p.jsx)(s.a,{path:"/Victory",component:function(){return Object(p.jsx)(x,{winner:j[0]})}})]})]})};var f=function(e){var t=e.name,n=e.id,r=e.selectWarrior;return Object(p.jsxs)(h.a,{style:{margin:"10px"},children:[Object(p.jsx)("h3",{style:{fontFamily:"Cinzel"},children:t.toUpperCase()}),Object(p.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),Object(p.jsx)("br",{}),Object(p.jsx)(i.a,{onClick:function(){r(t)},label:"Send Poke to Battle",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"})})]})},k=n(112),w=n(115),v=n(111),y=Object(v.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},small:{width:e.spacing(3),height:e.spacing(3)}}}));var C=function(e){var t=e.filterInput,n=e.handleSearch,r=y();return Object(p.jsx)("form",{children:Object(p.jsx)(k.a,{style:{backgroundColor:"white",borderRadius:"5px"},label:"Pok\xe9Search",value:t,onChange:n,InputProps:{disableUnderline:!0,startAdornment:Object(p.jsx)(w.a,{position:"start",children:Object(p.jsx)(l.a,{className:r.small,alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png"})})}})})};var P=function(e){var t=e.pokeList,n=e.selectWarrior,a=Object(r.useState)(""),c=Object(u.a)(a,2),o=c[0],s=c[1],i=t.filter((function(e){return e.name.toLowerCase().includes(o.toLowerCase())})).map((function(e){return Object(p.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(p.jsx)(f,{id:parseFloat(e.url.slice(34)),name:e.name,selectWarrior:n})},e.name)}));return Object(p.jsxs)("div",{style:{backgroundImage:"url(https://pics.freeartbackgrounds.com/Desert_Sand_Texture-1203.jpg)",backgroundSize:"100%",backgroundAttachment:"fixed"},children:[Object(p.jsx)("h1",{style:{fontFamily:"Cinzel"},children:"Pokemon Warriors"}),Object(p.jsx)(C,{handleSearch:function(e){s(e.target.value)},filterInput:o}),Object(p.jsx)("hr",{}),Object(p.jsx)(m.a,{container:!0,spacing:11,children:i})]})};var F=function(e){var t=e.name,n=e.id,r=e.returnHome;return Object(p.jsxs)(h.a,{children:[Object(p.jsx)("h3",{style:{fontFamily:"Cinzel"},children:t.toUpperCase()}),Object(p.jsx)("img",{src:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),Object(p.jsx)("br",{}),Object(p.jsx)(i.a,{onClick:function(e){r(t)},label:"Return Home",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://pngimg.com/uploads/pokeball/pokeball_PNG8.png"})})]})};var L=function(e){var t=e.warriors,n=e.returnHome,r=t.map((function(e){return Object(p.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(p.jsx)(F,{id:parseFloat(e.url.slice(34)),name:e.name,url:e.url,returnHome:n})},e.name)}));return Object(p.jsxs)("div",{children:[t.length%2===0&&0!==t.length?Object(p.jsx)("h4",{style:{fontFamily:"Cinzel"},children:"Ready for Battle!"}):Object(p.jsx)("h4",{style:{fontFamily:"Cinzel"},children:" Choose More Warriors"}),Object(p.jsx)(m.a,{container:!0,spacing:3,children:r})]})};var S=function(){var e=Object(r.useState)({battlers:[],warriors:[],pokeList:[],winner:[]}),t=Object(u.a)(e,2),n=t[0],a=t[1];function c(e){var t=n.pokeList.filter((function(t){return t.name===e})),r=[].concat(Object(b.a)(n.warriors),[t[0]]),c=n.pokeList.filter((function(t){return t.name!==e}));a({battlers:[],warriors:Object(b.a)(r),pokeList:Object(b.a)(c)})}for(Object(r.useEffect)((function(){fetch("https://pokeapi.co/api/v2/pokemon?limit=150").then((function(e){return e.json()})).then((function(e){return a({battlers:[],warriors:[],pokeList:e.results})}))}),[]);0===n.pokeList.length;)return Object(p.jsx)("img",{src:"https://wallpaperaccess.com/full/215986.jpg",width:"600",height:"500",alt:"splash screen"});return Object(p.jsxs)("div",{style:{backgroundImage:"url(https://pics.freeartbackgrounds.com/Desert_Sand_Texture-1203.jpg)",backgroundSize:"100%",backgroundAttachment:"fixed",height:"100vh"},children:[Object(p.jsxs)("nav",{children:[Object(p.jsx)(i.a,{component:o.c,to:"/BattleField",exact:!0,label:"To BattleField",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon4.png"})}),Object(p.jsx)(i.a,{component:o.c,to:"/PokemonContainer",exact:!0,label:"Choose Your Warriors",clickable:!0,color:"primary",avatar:Object(p.jsx)(l.a,{alt:"poke",src:"https://jenessa-reika.ca/wp-content/uploads/2020/04/pokemon2.png"})})]}),Object(p.jsx)(L,{warriors:n.warriors,pokeList:n.pokeList,returnHome:function(e){var t=n.warriors.filter((function(t){return t.name!==e})),r=n.warriors.filter((function(t){return t.name===e}));a({battlers:[],warriors:Object(b.a)(t),pokeList:[].concat(Object(b.a)(n.pokeList),[r[0]])})}}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/BattleField",component:function(){return Object(p.jsx)(o.a,{children:Object(p.jsx)(g,{winner:n.winner,battlers:n.battlers,warriors:n.warriors,pokeList:n.pokeList,setPokemon:a})})}}),Object(p.jsx)(s.a,{path:"/PokemonContainer",component:function(){return Object(p.jsx)(P,{pokeList:n.pokeList,warriors:n.warriors,selectWarrior:c})}})]})]})},I=n(41);var z=function(e){var t=e.name,n=e.id,r=e.position,a=e.wins;return Object(p.jsxs)(h.a,{variant:"outlined",children:[Object(p.jsx)("h3",{style:{fontFamily:"Cinzel"},children:t.toUpperCase()}),Object(p.jsx)("img",{src:0===r?"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/".concat(n,".png"):"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(n,".png"),alt:t}),Object(p.jsx)("br",{}),Object(p.jsxs)("h4",{style:{fontFamily:"Cinzel"},children:["All-Time Wins: ",a]})]})};var A=function(){var e=Object(r.useState)([]),t=Object(u.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){fetch("http://localhost:3000/battles").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]);var c=n.map((function(e){return{name:e.name,url:e.url}})),o=[];c.forEach((function(e){o.some((function(t){return t.name===e.name}))?o.find((function(t){return t.name===e.name})).wins++:o.push(Object(I.a)(Object(I.a)({},e),{},{wins:1}))}));var s=o.sort((function(e,t){return e.wins<t.wins?1:e.wins>t.wins?-1:0})).map((function(e){return Object(p.jsx)(m.a,{item:!0,xs:6,sm:3,children:Object(p.jsx)(z,{id:parseFloat(e.url.slice(34)),name:e.name,wins:e.wins})},e.name)}));return Object(p.jsxs)("div",{style:{backgroundImage:'url("https://cdn2.bulbagarden.net/upload/8/8b/Hall_of_Fame_PO.png")',backgroundSize:"100%",backgroundAttachment:"fixed",backgroundPositionY:"65%"},children:[Object(p.jsx)("h1",{style:{fontFamily:"Cinzel"},children:"Hall of Fame!"}),Object(p.jsx)(m.a,{container:!0,spacing:10,children:s})]})};var T=function(){return Object(p.jsxs)("div",{style:{backgroundColor:"rgb(243, 202, 67)",height:"100vh"},children:[Object(p.jsx)("br",{}),Object(p.jsx)("iframe",{style:{border:"10px solid"},autoPlay:!0,width:"560",height:"315",src:"https://www.youtube.com/embed/rg6CiPI6h2g",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]})};var B=function(){return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(j,{}),Object(p.jsxs)(s.c,{children:[Object(p.jsx)(s.a,{path:"/Coliseum",component:function(){return Object(p.jsx)(o.a,{children:Object(p.jsx)(S,{})})}}),Object(p.jsx)(s.a,{path:"/HallOfFame",component:A}),Object(p.jsx)(s.a,{exactPath:"/",component:T})]})]})},H=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,117)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))},_=n(48);n.n(_).a.load({google:{families:["Cinzel","sans-serif"]}}),c.a.render(Object(p.jsx)(o.a,{children:Object(p.jsx)(B,{})}),document.getElementById("root")),H()}},[[71,1,2]]]);
//# sourceMappingURL=main.4528272b.chunk.js.map