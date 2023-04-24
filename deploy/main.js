(()=>{"use strict";const t=function(){function t(t,n,e,o){void 0===n&&(n="div"),void 0===e&&(e=""),void 0===o&&(o="");var r=document.createElement(n);r.className=e,r.innerHTML=o,t&&t.append(r),this.node=r}return t.prototype.destroy=function(){this.node.remove()},t}();var n,e=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)});const o=function(n){function o(t,e){var o=n.call(this,t,"div","card")||this;return o.data=e,o.node.setAttribute("data-filmid","".concat(e.filmId)),o.data.nameRu?o.render(e):o.destroy(),o}return e(o,n),o.prototype.render=function(n,e){new t(this.node,"div","card__img").node.style.backgroundImage=this.checkPoster(n),new t(this.node,"button","card__btn","Узнать больше")},o.prototype.checkPoster=function(t){if(t.posterUrl)return"url(".concat(t.posterUrl,")");this.destroy()},o}(t);var r=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const i=function(n){function e(e,r){var i=n.call(this,e,"div","card-field")||this;i.cardList=[],r.forEach((function(t){var n=new o(i.node,t);i.cardList.push(n)}));var a=new t(i.node,"a","scroll-to-top"),c=new t(a.node,"img","");return c.node.setAttribute("src","/public/arrow-up.svg"),c.node.setAttribute("alt",""),a.node.setAttribute("href","#logo"),i}return r(e,n),e}(t),a=function(){function n(){this.form=document.createElement("form"),this.input=document.createElement("input")}return n.prototype.render=function(n){var e=new t(n,"div","form-wrapper"),o=new t(e.node,"div","logo-wrapper");new t(o.node,"h1","logo","Movie App").node.id="logo",this.form.className="form",this.input.className="input",this.input.id="input",this.input.setAttribute("required",""),this.input.setAttribute("autocomplete","off");var r=new t(this.form,"div","input-wrapper");r.node.append(this.input),new t(r.node,"label","input-wrapper__label","Поиск").node.setAttribute("for","input"),new t(r.node,"div","input-wrapper__underline"),this.form.append(r.node),e.node.append(this.form),n.append(e.node)},n.prototype.getValue=function(){return this.input.value},n.prototype.clearInput=function(){this.input.value=""},n}();var c=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const s=function(t){function n(n){var e=t.call(this,n,"header","header")||this;return e.search=new a,e.search.render(e.node),e}return c(n,t),n}(t);var u=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const p=function(n){function e(e,o){var r=n.call(this,e,"main","main")||this;return r.title=new t(r.node,"h2","main__title","Топ популярных фильмов:"),r.cardFieldWrapper=new t(r.node,"div","card-field-wrapper"),r.cardField=new i(r.cardFieldWrapper.node,o.films),r}return u(e,n),e.prototype.setTitle=function(t){this.title.node.textContent=t},e}(t);var l=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const f=function(n){function e(e){var o=n.call(this,e,"footer","footer")||this,r=new t(o.node,"div","footer__content");return new t(r.node,"a","content__item","my_github").node.setAttribute("href","https://github.com/RTinIT"),new t(r.node,"p","content__item","© 2022"),o}return l(e,n),e}(t);function d(t){return t.map((function(t){return Object.values(t)})).slice(0,3).join(", ")}function h(t,n){return"DIRECTOR"===n?t.filter((function(t){return t.professionKey===n})).map((function(t){return t.nameRu})).join(", "):t.filter((function(t){return t.professionKey===n})).slice(0,5).map((function(t){return t.nameRu})).join(", ")}var y=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}(),w=function(n){function e(e,o){for(var r=n.call(this,e,"div","text-wrapper__item")||this,i=Math.floor(o),a=Math.round(100*(o-i)),c=10-Math.ceil(o),s=(new t(r.node,"p","rating__title","Рейтинг: "),new t(r.node,"div","rating__stars")),u=(new t(s.node,"div","rating__svg-masks",'\n  <svg style="width: 0; height: 0;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">\n    <defs>\n      <mask id="half">\n        <rect x="0" y="0" width="32" height="32" fill="white" />\n        <rect x="'.concat(a,'%" y="0" width="32" height="32" fill="black" />\n      </mask>\n\n      <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="star">\n        <path d="M31.547 12a.848.848 0 00-.677-.577l-9.427-1.376-4.224-8.532a.847.847 0 00-1.516 0l-4.218 8.534-9.427 1.355a.847.847 0 00-.467 1.467l6.823 6.664-1.612 9.375a.847.847 0 001.23.893l8.428-4.434 8.432 4.432a.847.847 0 001.229-.894l-1.615-9.373 6.822-6.665a.845.845 0 00.214-.869z" />\n      </symbol>\n    </defs>\n  </svg>\n')),new t(s.node,"div","rating__svg-stars")),p=0;p<i;p++)u.node.innerHTML+='\n  <svg class="c-star active" width="32" height="32" viewBox="0 0 32 32">\n    <use xlink:href="#star"></use>\n    <use xlink:href="#star" fill="none" stroke="grey"></use>\n  </svg>\n';for(a&&(u.node.innerHTML+='\n  <svg class="c-star active" width="32" height="32" viewBox="0 0 32 32">\n    <use xlink:href="#star" mask=url("#half")></use>\n    <use xlink:href="#star" fill="none" stroke="grey"></use>\n  </svg>\n'),p=0;p<c;p++)u.node.innerHTML+='\n  <svg class="c-star" width="32" height="32" viewBox="0 0 32 32">\n    <use xlink:href="#star"></use>\n    <use xlink:href="#star" fill="none" stroke="grey"></use>\n  </svg>\n';return r}return y(e,n),e}(t),v=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const _=function(n){function e(e,o,r){var i=n.call(this,e,"p","text-wrapper__item")||this;return r||i.destroy(),new t(i.node,"span","item__content","".concat(o,":")),new t(i.node,"span","item__content","".concat(r)),i}return v(e,n),e}(t);var m=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const g=function(n){function e(e,o,r){var i=n.call(this,e,"div","details")||this,a=r[0],c=r[1],s=new t(i.node,"section","details__top-section"),u=new t(s.node,"div","close-btn");u.node.onclick=function(){return o()},new t(u.node,"span",""),new t(u.node,"span","");var p=new t(s.node,"div","top-section__img-wrapper"),l=new t(p.node,"img","img-wrapper__img");l.node.setAttribute("src","".concat(a.posterUrl)),l.node.setAttribute("alt","Постер ".concat(a.nameRu?a.nameRu:a.nameEn));var f,y=new t(s.node,"div","top-section__text-wrapper"),v=(new t(y.node,"h2","text-wrapper__title","".concat(a.nameRu)),new _(y.node,"Жанр","".concat(d(a.genres))),new _(y.node,"Страна","".concat(d(a.countries))),new _(y.node,"Год выпуска","".concat(a.year?a.year:"-")),new _(y.node,"Режисёры","".concat(h(c,"DIRECTOR"))),new _(y.node,"В ролях","".concat(h(c,"ACTOR"))),new w(y.node,a.ratingKinopoisk)),m=(f=a.ratingKinopoisk,"null"!=="".concat(f)?"".concat(f):"-"),g=new t(v.node,"div","rating__count",m);return i.setBorder(m,g.node),new t(y.node,"p","text-wrapper__description","".concat(a.description?a.description:"")),i}return m(e,n),e.prototype.setBorder=function(t,n){isNaN(+t)&&n.classList.add("empty-rate"),+t>=7&&n.classList.add("high-rate"),+t<7&&n.classList.add("low-rate")},e}(t);var b=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();const O=function(t){function n(n,e){var o=t.call(this,n,"div","modal")||this;return o.data=e,o.detailsInfo=new g(o.node,o.hide.bind(o),e),o}return b(n,t),n.prototype.hide=function(){var t=this;document.body.classList.remove("blocked"),this.node.classList.add("exit"),setTimeout((function(){t.destroy()}),200)},n}(t),k=function(){function n(){}return n.prototype.start=function(n){this.root=new t(document.body,"div","root"),this.header=new s(this.root.node),this.main=new p(this.root.node,n),new f(this.root.node)},n.prototype.update=function(t){this.main.cardField.destroy(),this.main.cardField=new i(this.main.cardFieldWrapper.node,t.films)},n.prototype.showModal=function(t){this.modal=new O(this.root.node,t)},n}();var x=function(t,n,e,o){return new(e||(e=Promise))((function(r,i){function a(t){try{s(o.next(t))}catch(t){i(t)}}function c(t){try{s(o.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?r(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(a,c)}s((o=o.apply(t,n||[])).next())}))},j=function(t,n){var e,o,r,i,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;a;)try{if(e=1,o&&(r=2&i[0]?o.return:i[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,i[1])).done)return r;switch(o=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,o=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((r=(r=a.trys).length>0&&r[r.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){a.label=i[1];break}if(6===i[0]&&a.label<r[1]){a.label=r[1],r=i;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(i);break}r[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(t,a)}catch(t){i=[6,t],o=0}finally{e=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}};const P=function(){function t(){this.apiKey="1a5db326-08fe-414f-8a22-62e0e9615e74",this.defaultPage="https://kinopoiskapiunofficial.tech/api/v2.2/films/top?type=TOP_100_POPULAR_FILMS&page=1",this.searchUrl="https://kinopoiskapiunofficial.tech/api/v2.1/films/search-by-keyword?keyword=",this.searchByIdUrl="https://kinopoiskapiunofficial.tech/api/v2.2/films/",this.searchActors="https://kinopoiskapiunofficial.tech/api/v1/staff?filmId=",this.headers={"Content-Type":"application/json","X-API-KEY":this.apiKey}}return t.prototype.getData=function(t){return x(this,void 0,void 0,(function(){return j(this,(function(n){switch(n.label){case 0:return t?[4,fetch("".concat(this.searchUrl).concat(t),{headers:this.headers})]:[3,2];case 1:case 3:return[2,n.sent().json()];case 2:return[4,fetch(this.defaultPage,{headers:this.headers})]}}))}))},t.prototype.getDataByFilmId=function(t){return x(this,void 0,void 0,(function(){var n,e,o,r;return j(this,(function(i){switch(i.label){case 0:return i.trys.push([0,5,,6]),e=(n=Promise).all,[4,fetch("".concat(this.searchByIdUrl).concat(t),{headers:this.headers})];case 1:case 3:return[4,i.sent().json()];case 2:return o=[i.sent()],[4,fetch("".concat(this.searchActors).concat(t),{headers:this.headers})];case 4:return[2,e.apply(n,[o.concat([i.sent()])])];case 5:return r=i.sent(),console.log("Возникли проблемы",r.message),[3,6];case 6:return[2]}}))}))},t}();(new(function(){function t(){this.view=new k,this.model=new P,this.selectedCard={name:"",id:""}}return t.prototype.init=function(){var t=this;this.model.getData().then((function(n){t.view.start(n),t.setEventListeners(n)}))},t.prototype.setEventListeners=function(t){var n=this;this.view.header.search.form.addEventListener("submit",(function(t){t.preventDefault(),n.searching()})),this.view.main.cardField.cardList.forEach((function(t){t.node.addEventListener("click",(function(t){document.body.classList.add("blocked"),n.saveSelectedCard(t),n.getAdditionalInfo()}))}))},t.prototype.searching=function(){var t=this,n=this.view.header.search.getValue();this.model.getData(n).then((function(e){t.view.main.setTitle("Результаты поиска: ".concat(n)),t.view.header.search.clearInput(),t.view.update(e),t.setEventListeners(e)}))},t.prototype.saveSelectedCard=function(t){var n=t.currentTarget,e=n.dataset.filmid,o=n.dataset.filmname;this.selectedCard.name=o,this.selectedCard.id=e},t.prototype.getAdditionalInfo=function(){var t=this;this.model.getDataByFilmId(this.selectedCard.id).then((function(n){t.view.showModal(n)}))},t}())).init()})();