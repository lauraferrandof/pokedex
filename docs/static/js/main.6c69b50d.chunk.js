(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a(19)},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(17),a(7)),u=a(10),l=a(1),s=a(2),m=a(4),p=a(3),f=a(5),h=a(6),v=(a(18),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.labelContent,a=e.inputType,n=e.inputName,o=e.inputValue,c=e.example,i=e.handleInputChange;return r.a.createElement("label",{className:"input__label",htmlFor:n},t,r.a.createElement("input",{className:"input__field",type:a,name:n,id:n,placeholder:c,value:o,onChange:i}))}}]),t}(n.Component)),k=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pokemonName,a=e.saveUserQuery;return r.a.createElement("section",{className:"app__filter"},r.a.createElement(v,{labelContent:"Filter pokemons by name",inputType:"text",inputName:"pokemonName",inputValue:t,example:"Ex: Pikachu",handleInputChange:a}))}}]),t}(n.Component),b=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pokemon,t=e.sprites,a=e.id,n=e.name,o=e.types;return r.a.createElement("div",{className:"pokemon__card"},r.a.createElement("img",{src:t.front_default,alt:n}),r.a.createElement("div",null,a),r.a.createElement("div",null,n),r.a.createElement("ul",null,o.map(function(e,t){return r.a.createElement("li",{key:t},e.type.name)})))}}]),t}(n.Component),j=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.pokemonData;return r.a.createElement("ul",{className:"pokemon__list"},e.map(function(e){return r.a.createElement("li",{key:e.id,className:"pokemon__item"},r.a.createElement(b,{pokemon:e}))}))}}]),t}(n.Component),y=function(){return r.a.createElement("span",{className:"loader"},"Loading...")},O=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pokemonName,a=e.pokemonData,n=e.saveUserQuery;return r.a.createElement("main",{className:"app__main"},r.a.createElement(k,{pokemonName:t,saveUserQuery:n}),a&&a.length?r.a.createElement(j,{pokemonData:a}):r.a.createElement(y,null))}}]),t}(n.Component),d=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).state={filters:{pokemonName:""},pokemonData:a.getDataFromLocalStorage()},a.saveUserQuery=a.saveUserQuery.bind(Object(h.a)(Object(h.a)(a))),a}return Object(f.a)(t,e),Object(s.a)(t,[{key:"fetchAndSaveData",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=25").then(function(e){return e.json()}).then(function(t){var a=t.results.map(function(e){return fetch(e.url).then(function(e){return e.json()})});Promise.all(a).then(function(t){t.forEach(function(t){e.setState(function(a){var n={pokemonData:a.pokemonData.concat(t)};return e.saveDataAtLocalStorage(n.pokemonData),n})})})})}},{key:"saveDataAtLocalStorage",value:function(e){localStorage.setItem("savedData",JSON.stringify(e))}},{key:"getDataFromLocalStorage",value:function(){var e=localStorage.getItem("savedData");return e?JSON.parse(e):(this.fetchAndSaveData(),[])}},{key:"saveUserQuery",value:function(e){var t=e.currentTarget,a=t.name,n=t.value;this.setState(function(e){return{filters:Object(u.a)({},e.filters,Object(i.a)({},a,n))}})}},{key:"filterPokemonsByName",value:function(){var e=this.state,t=e.pokemonData,a=e.filters.pokemonName;return t.filter(function(e){return!a||e.name.includes(a.toLowerCase())})}},{key:"render",value:function(){var e=this.state.filters.pokemonName,t=this.filterPokemonsByName();return r.a.createElement("div",{className:"App"},r.a.createElement(O,{pokemonName:e,pokemonData:t,saveUserQuery:this.saveUserQuery}))}}]),t}(n.Component);c.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.6c69b50d.chunk.js.map