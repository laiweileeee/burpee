(this.webpackJsonpburpee=this.webpackJsonpburpee||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),i=(a(15),a(2)),c=a(3),l=a(5),m=a(4),u=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){fetch("https://secret-harbor-87790.herokuapp.com/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("div",{className:"limiter"},s.a.createElement("div",{className:"container-login100"},s.a.createElement("div",{className:"wrap-login100"},s.a.createElement("div",{className:"login100-pic js-tilt","data-tilt":!0},s.a.createElement("h1",{className:"appname grow",size:"50px"},s.a.createElement("font",{size:"+5"},"B U R P E E",s.a.createElement("hr",null))),s.a.createElement("img",{src:"images/img-01.png",alt:"IMG"})),s.a.createElement("div",{className:"login100-form validate-form"},s.a.createElement("span",{className:"login100-form-title"},"Member Login",s.a.createElement("hr",null)),s.a.createElement("div",{className:"wrap-input100 validate-input"},s.a.createElement("input",{className:"input100 grow",type:"text",name:"email",placeholder:"Email",onChange:this.onEmailChange}),s.a.createElement("span",{className:"focus-input100"}),s.a.createElement("span",{className:"symbol-input100"},s.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),s.a.createElement("div",{className:"wrap-input100 validate-input"},s.a.createElement("input",{className:"input100 grow",type:"password",name:"pass",placeholder:"Password",onChange:this.onPasswordChange}),s.a.createElement("span",{className:"focus-input100"}),s.a.createElement("span",{className:"symbol-input100"},s.a.createElement("i",{className:"fa fa-lock","aria-hidden":"true"}))),s.a.createElement("div",{className:"container-login100-form-btn"},s.a.createElement("button",{onClick:this.onSubmitSignIn,className:"login100-form-btn shadow-4 grow"},"Login")),s.a.createElement("div",{className:"text-center p-t-136"},s.a.createElement("p",{onClick:function(){return e("register")},className:"txt2"},"Create your Account",s.a.createElement("i",{className:"fa fa-long-arrow-right m-l-5","aria-hidden":"true"}))))))),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/bootstrap/css/bootstrap.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"fonts/font-awesome-4.7.0/css/font-awesome.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/animate/animate.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/css-hamburgers/hamburgers.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/select2/select2.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"css/util.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"css/main.css"}))}}]),a}(n.Component),d=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onSubmitRegister=function(){fetch("https://secret-harbor-87790.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,password:n.state.password,name:n.state.name})}).then((function(e){return e.json()})).then((function(e){e.id&&(n.props.loadUser(e),n.props.onRouteChange("home"))}))},n.state={email:"",password:"",name:""},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("div",{className:"limiter"},s.a.createElement("div",{className:"container-login100"},s.a.createElement("div",{className:"wrap-login100"},s.a.createElement("div",{className:"login100-pic js-tilt","data-tilt":!0},s.a.createElement("h1",{className:"appname",size:"50px"},s.a.createElement("font",{size:"+5"},"B U R P E E",s.a.createElement("hr",null))),s.a.createElement("img",{src:"images/img-01.png",alt:"IMG"})),s.a.createElement("div",{className:"login100-form validate-form"},s.a.createElement("span",{className:"login100-form-title"},"Register",s.a.createElement("hr",null)),s.a.createElement("div",{className:"wrap-input100"},s.a.createElement("input",{className:"input100 grow",type:"text",name:"name",placeholder:"Name",onChange:this.onNameChange}),s.a.createElement("span",{className:"focus-input100"}),s.a.createElement("span",{className:"symbol-input100"},s.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"}))),s.a.createElement("div",{className:"wrap-input100 "},s.a.createElement("input",{className:"input100 grow",type:"text",name:"email",placeholder:"Email",onChange:this.onEmailChange}),s.a.createElement("span",{className:"focus-input100"}),s.a.createElement("span",{className:"symbol-input100"},s.a.createElement("i",{className:"fa fa-envelope","aria-hidden":"true"}))),s.a.createElement("div",{className:"wrap-input100"},s.a.createElement("input",{className:"input100 grow",type:"password",name:"pass",placeholder:"Password",onChange:this.onPasswordChange}),s.a.createElement("span",{className:"focus-input100"}),s.a.createElement("span",{className:"symbol-input100"},s.a.createElement("i",{className:"fa fa-lock","aria-hidden":"true"}))),s.a.createElement("div",{className:"container-login100-form-btn"},s.a.createElement("button",{onClick:this.onSubmitRegister,className:"login100-form-btn shadow-5 grow"},"Register")),s.a.createElement("div",{className:"text-center p-t-136"},s.a.createElement("p",{onClick:function(){return e("signin")},className:"txt2"},s.a.createElement("i",{className:"fa fa-long-arrow-left m-l-5","aria-hidden":"true"}),"\xa0 Back to Sign-in")))))),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/bootstrap/css/bootstrap.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"fonts/font-awesome-4.7.0/css/font-awesome.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/animate/animate.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/css-hamburgers/hamburgers.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"vendor/select2/select2.min.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"css/util.css"}),s.a.createElement("link",{rel:"stylesheet",type:"text/css",href:"css/main.css"}))}}]),a}(n.Component),p=(a(16),a(6)),h=a.n(p),g=a(7),b=a.n(g),f=a(1),E=[],w=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).onInputChange=function(e){n.setState({input:e.target.value})},n.onDateChange=function(e){n.setState({dueDate:e.target.value})},n.addReminders=function(){if(n.state.input&&n.state.dueDate){var e={id:Math.random(),text:n.state.input,dueDate:n.state.dueDate};n.state.reminders.push(e),n.setState({input:""}),document.getElementById("myForm").value="",Object(f.bake_cookie)("reminders",n.state.reminders),console.log("added reminders",n.state.reminders),console.log("curernt date",n.state.reminders.dueDate),console.log("js date",h()(new Date))}},n.clearReminders=function(){n.setState({reminders:[]}),Object(f.bake_cookie)("reminders",n.state.reminders),console.log("clear",n.state.reminders)},n.deleteReminders=function(e){var t=n.state.reminders.filter((function(t){return t.id!==e}));n.setState({reminders:t}),Object(f.bake_cookie)("reminders",t),console.log("deleted cookies",n.state.reminders)},n.displayReminders=function(){return n.state.reminders.map((function(e){return s.a.createElement("ul",{id:"ul",className:"list-group col-l-4"},s.a.createElement("li",{key:e.id,className:"list-group-item shadow-4"},s.a.createElement("button",{onClick:function(){return n.wrapperComplete(e)},className:"btn btn-primay grow shadow-4"},"\u2713"),s.a.createElement("div",{className:"list-item"},s.a.createElement("div",null,e.text),s.a.createElement("div",null,s.a.createElement("em",null,h()(new Date(e.dueDate)).fromNow())),s.a.createElement("div",null,s.a.createElement("em",null,h()(new Date(e.dueDate)).calendar()))),s.a.createElement("button",{onClick:function(){return n.deleteReminders(e.id)},className:"btn btn-dark grow shadow-4"},"\u2715")))}))},n.allowNotifications=function(){b.a.Permission.has&&console.log("permission granted")},n.renderExpiryNotifications=function(e,t){b.a.create("Expiry ALERT!",{body:"".concat(e," is expiring ").concat(t,"!"),icon:"/icon.png",timeout:5e3,onClick:function(){window.focus(),this.close()}})},n.renderAddConfirmation=function(e,t){b.a.create("Reminder created!",{body:"Reminder for ".concat(e," is created. Item will expire in ").concat(t,"!"),icon:"/icon.png",timeout:5e3,onClick:function(){window.focus(),this.close()}})},n.wrapperAdd=function(){var e=n.state.input,t=h()(new Date(n.state.dueDate)).fromNow();n.addReminders(),n.state.input&&n.state.dueDate&&n.renderAddConfirmation(e,t)},n.wrapperComplete=function(e){n.props.completeReminders(e),n.deleteReminders(e.id)},n.componentDidMount=function(){n.state.reminders.forEach((function(e){"in 7 days"===h()(new Date(e.dueDate)).fromNow()&&E.push(n.renderExpiryNotifications(e.text,h()(new Date(e.dueDate)).fromNow()))}))},n.state={input:"",dueDate:"",reminders:Object(f.read_cookie)("reminders")},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",{className:"App"},s.a.createElement("button",{onClick:function(){return e("signin")},className:"btn btn-secondary signout-button black grow shadow-4",type:"button"},"Sign Out"),s.a.createElement("div",{className:"title br3"},s.a.createElement("div",{className:"header"},s.a.createElement("hr",null),s.a.createElement("h1",{className:"shadow-3 pa2 burpee"},s.a.createElement("strong",null," \u23f0 B U R P E E ")))),s.a.createElement("div",{className:"form-inline"},s.a.createElement("div",{className:"reminder-container"},s.a.createElement("div",{className:"reminder-inputs br3 shadow-5"},s.a.createElement("input",{id:"myForm",onChange:this.onInputChange,className:"form-control item-input",placeholder:"Insert item name"}),s.a.createElement("input",{id:"myForm",onChange:this.onDateChange,className:"form-control date-input",type:"datetime-local"}),s.a.createElement("button",{onClick:this.wrapperAdd,className:"add-btn btn btn-success grow add-button br2 shadow-4",type:"button"},"\uff0b")),s.a.createElement("div",null,this.displayReminders()),s.a.createElement("button",{onClick:function(){return e("milestones")},className:"btn btn-secondary achieve-button grow shadow-4",type:"button"},"Milestones \ud83c\udfc6"),s.a.createElement("button",{onClick:this.clearReminders,className:"btn btn-secondary clear-button grow shadow-4",type:"button"},"Clear All \ud83d\uddd1"))))}}]),a}(n.Component),y=(a(19),a(20),Object(f.read_cookie)("unlockedList")),v=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).removeClass=function(e,t,a,n){var s=document.getElementById(e);console.log(a),s&&(a>=n&&!y.includes(e)?(alert("Congrats! You've unlocked a ".concat(t,"!")),s.classList.remove("parent"),s.children[0].classList.add("z-1"),y.push(e),Object(f.bake_cookie)("unlockedList",y),console.log(y)):y.includes(e)||alert("Reward locked.. Consume ".concat(n-a," more items to unlock your reward!")))},n.renderParentClass=function(e){return y.includes(e)?"br3 pa10 ma3 bw2":"br3 pa10 ma3 bw2 parent"},n.renderChildClass=function(e){return y.includes(e)?"tc bg-washed-blue br3 pa10 ma2 bw3 shadow-3 ba grow child z-1":"tc bg-washed-blue br3 pa10 ma2 bw3 shadow-3 ba grow child"},n.state={},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.count,n=t.countReq,r=t.id,o=t.name,i=t.height,c=t.weight,l=t.type;return s.a.createElement("div",{className:"cardWrapper"},s.a.createElement("div",{id:r,onClick:function(){return e.removeClass(r,o,a,n)},className:this.renderParentClass(r)},s.a.createElement("div",{id:r,className:this.renderChildClass(r)},s.a.createElement("h4",{className:"tl ma1 b bb"},"\xa0 ",o),s.a.createElement("img",{className:"pa1",alt:"pokemon",src:"https://pokeres.bastionbot.org/images/pokemon/".concat(r,".png"),width:"200",height:"200"}),s.a.createElement("div",{className:"pa3"},s.a.createElement("div",{className:"bw2 ba pa1 bg-washed-green"},s.a.createElement("p",{className:"ma0 pa1 bt"},"No. ",s.a.createElement("strong",null,r)),s.a.createElement("p",{className:"b pa1"},"Height: ",i," ",s.a.createElement("br",null),"Weight: ",c," ",s.a.createElement("br",null),"Type: ",l))))))}}]),a}(n.Component),k=function(e){var t=e.count,a=e.pokemon;return s.a.createElement("div",{className:"flex flex-wrap pt3 justify-center",style:{flex:"1 1 auto"}},console.log("count inside Cardlist",t),a.map((function(e,a){return s.a.createElement(v,{count:t,key:a,id:e.id,name:e.name,height:e.height,weight:e.weight,type:e.type,countReq:e.countReq})})))},N=[{countReq:1,id:25,name:"Pikachu",height:"0.4 m (1\u203204\u2033)",weight:"6.0 kg (13.2 lbs)",type:"Electric"},{countReq:2,id:2,name:"Bulbasaur",height:"0.7 m (2\u203204\u2033)",weight:"6.9 kg (15.2 lbs)",type:"Grass, Poison"},{countReq:3,id:7,name:"Squirtle",height:"0.5 m (1\u203208\u2033)",weight:"9.0 kg (19.8 lbs)",type:"Water"},{countReq:4,id:4,name:"Charmander",height:"0.6 m (2\u203200\u2033)",weight:"8.5 kg (18.7 lbs)",type:"Fire"},{countReq:5,id:132,name:"Ditto",height:"0.3 m (1\u203200\u2033)",weight:"4.0 kg (8.8 lbs)",type:"Normal"},{countReq:6,id:143,name:"Snorlax",height:"2.1 m (6\u203211\u2033)",weight:"460.0 kg (1014.1 lbs)",type:"Normal"},{countReq:7,id:382,name:"Kyogre",height:"4.5 m (14\u203209\u2033)",weight:"352.0 kg (776.0 lbs)",type:"Water"},{countReq:8,id:383,name:"Groudon",height:"3.5 m (11\u203206\u2033)",weight:"950.0 kg (2094.4 lbs)",type:"Ground"},{countReq:3,id:384,name:"Rayquaza",height:"7.0 m (23\u203200\u2033)",weight:"206.5 kg (455.3 lbs)",type:"Dragon, Flying"},{countReq:3,id:150,name:"Mewtwo",height:"2.0 m (6\u203207\u2033)",weight:"122.0 kg (269.0 lbs)",type:"Psychic"}],C=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={pokemon:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.setState({pokemon:N}),console.log("count inside milstone",this.props.count)}},{key:"render",value:function(){var e=this.props.onRouteChange;return s.a.createElement("div",null,s.a.createElement("h2",{className:"tc mt5 white shadow-4 pt3 pb3"},"Mystery Rewards"),s.a.createElement("nav",null,s.a.createElement("button",{onClick:function(){return e("signin")},className:"btn btn-secondary signout-button black grow shadow-4 ma0 mr5",type:"button"},"Sign Out"),s.a.createElement("button",{onClick:function(){return e("home")},className:"btn btn-secondary home-button black grow shadow-4 ma0 ml5",type:"button"},"Home \ud83c\udfe0")),s.a.createElement("p",{className:"text1 tc white"},"Click on the cards to unlock rewards."),s.a.createElement("p",{className:"text2 tc white"},this.props.count," Item(s) consumed before expiry!"),s.a.createElement("div",null,s.a.createElement(k,{count:this.props.count,pokemon:N})))}}]),a}(n.Component),R=(a(21),{input:"",route:"home",isSignedIn:!1,count:Object(f.read_cookie)("countCookie"),user:{id:"",name:"",email:"",entries:0,joined:""}}),j=Object(f.read_cookie)("countCookie"),x=function(e){Object(l.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.onRouteChange=function(t){"signout"===t?e.setState(R):"home"!==t&&"milestone"!==t||e.setState({isSignedIn:!0}),e.setState({route:t})},e.completeReminders=function(e){var t=j++;h()()<=h()(new Date(e.dueDate))&&(Object(f.bake_cookie)("countCookie",t),console.log(h()()<=h()(new Date(e.dueDate))))},e.componentDidMount=function(){console.log("stateCount",e.state.count),console.log("countCookie",Object(f.read_cookie)("countCookie"))},e.state={input:"",route:"milestone",isSignedIn:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},e}return Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,"home"===this.state.route?s.a.createElement(w,{completeReminders:this.completeReminders,onRouteChange:this.onRouteChange}):"signin"===this.state.route?s.a.createElement(u,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):"register"===this.state.route?s.a.createElement(d,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(C,{count:j,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(22);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.bf162113.chunk.js.map