(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{364:function(t,e,n){"use strict";n.r(e);n(62),n(6);var r=n(226),o=n.n(r),s=(n(227),n(4)),c=n(1),a=n.n(c),u=n(353);function i(t,e,n,r,o,s,c){try{var a=t[s](c),u=a.value}catch(i){return void n(i)}a.done?e(u):Promise.resolve(u).then(r,o)}function p(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var s=t.apply(e,n);function c(t){i(s,r,o,c,a,"next",t)}function a(t){i(s,r,o,c,a,"throw",t)}c(void 0)}))}}var f=function(t){var e,n;function r(e){var n;return(n=t.call(this,e)||this).getUsers=p(o.a.mark((function t(){var e,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("http://localhost:5001/users/",{headers:{"Content-Type":"application/json"},credentials:"include",method:"get"});case 2:return e=t.sent,t.next=5,e.json();case 5:r=t.sent,e.ok&&n.setState({users:r});case 7:case"end":return t.stop()}}),t)}))),n.state={users:[]},n}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=r.prototype;return c.componentDidMount=function(){this.getUsers()},c.render=function(){return Object(s.b)(u.a,null,Object(s.b)("div",{className:"section text-center"},Object(s.b)("div",{css:l},Object(s.b)("h2",null,"Users"),Object(s.b)("pre",null,JSON.stringify(this.state.users)))))},r}(a.a.Component),l={name:"c3vlm2",styles:"background:#fff;"};e.default=f}}]);
//# sourceMappingURL=component---src-pages-users-tsx-c8e67b65f6f9d21152a2.js.map