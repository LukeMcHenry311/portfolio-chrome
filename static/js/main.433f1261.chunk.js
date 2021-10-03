(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{47:function(n,e,t){"use strict";t.r(e);var i,r,a=t(1),o=t(27),c=t.n(o),s=t(10),l=t(8),d=t(4),m=t(5),b=t(0),h=m.b.div(i||(i=Object(d.a)(["\n  .heading {\n    font-size: 2.4rem;\n    margin-bottom: 2rem;\n  }\n  li {\n    margin-bottom: 1rem;\n  }\n  a {\n    font-size: 1.8rem;\n  }\n"])));function j(n){var e=n.heading,t=void 0===e?"Col Heading":e,i=n.links,r=void 0===i?[{type:"Link",title:"Home",path:"/home"},{type:"Link",title:"About",path:"/about"}]:i;return Object(b.jsxs)(h,{children:[Object(b.jsx)("h2",{className:"heading",children:t}),Object(b.jsx)("ul",{children:r.map((function(n,e){return Object(b.jsx)("li",{children:"Link"===n.type?Object(b.jsx)(s.b,{to:n.path,children:n.title}):Object(b.jsx)("a",{href:n.path,target:"_blank",rel:"noreferrer",children:n.title})},e)}))})]})}var p,g=m.b.div(r||(r=Object(d.a)(["\n  max-width: 500px;\n  margin: 0 auto;\n  font-size: 18px;\n  line-height: 1.3 em;\n  @media only screen and (max-width: 768px) {\n    font-size: 1.4rem;\n  }\n"])));function x(n){var e=n.children;return Object(b.jsx)(g,{className:"para",children:Object(b.jsx)("p",{children:e})})}var u=m.b.div(p||(p=Object(d.a)(["\n  padding-top: 10rem;\n  background-color: var(--deep-dark);\n  .container {\n    display: flex;\n    gap: 3rem;\n  }\n  .footer__col1 {\n    flex: 2;\n  }\n  .footer__col2,\n  .footer__col3,\n  .footer__col4 {\n    flex: 1;\n  }\n  .footer__col1__title {\n    font-size: 3.5rem;\n    margin-bottom: 1rem;\n  }\n  .copyright {\n    background-color: var(--deep-dark);\n    text-align: left;\n    padding: 1rem 0;\n    margin-top: 5rem;\n    .para {\n      margin-left: 0;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      gap: 0rem;\n      & > div {\n        margin-top: 5rem;\n      }\n    }\n    .footer__col1 .para {\n      max-width: 100%;\n    }\n    .copyright {\n      .container {\n        div {\n          margin-top: 0;\n        }\n      }\n    }\n  }\n"])));function f(){return Object(b.jsxs)(u,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"footer__col1",children:[Object(b.jsx)("h1",{className:"footer__col1__title",children:"Luke McHenry"}),Object(b.jsx)(x,{className:"footer__col1_subtext",children:"A University of Utah coding bootcamp student from Lehi, Utah. My goal is to be humble and learn from other's."})]}),Object(b.jsx)("div",{className:"footer__col2",children:Object(b.jsx)(j,{heading:"Important Links",links:[{title:"Home",path:"/",type:"Link"},{title:"About",path:"/about",type:"Link"},{title:"Projects",path:"/projects",type:"Link"},{title:"Contact",path:"/contact",type:"Link"}]})}),Object(b.jsx)("div",{className:"footer__col3",children:Object(b.jsx)(j,{heading:"Contact Info",links:[{title:"+3852076265",path:"tel:+3852076265"},{title:"LukeMcHenry311@gmail.com",path:"mailto:LukeMcHenry311@gmail.com"},{title:"Lehi, Utah",path:"http://google.com/maps"}]})}),Object(b.jsx)("div",{className:"footer__col4",children:Object(b.jsx)(j,{heading:"Social Links",links:[{title:"LinkedIn",path:"https://www.linkedin.com/in/luke-mchenry-720b0720b/"},{title:"Instagram",path:"https://www.instagram.com/luke.mchenry/"},{title:"Github",path:"https://github.com/LukeMcHenry311"}]})})]}),Object(b.jsx)("div",{className:"copyright",children:Object(b.jsx)("div",{className:"container",children:Object(b.jsx)(x,{children:"\xa9\ufe0f 2021 - Luke McHenry | Collaborated with web cifar"})})})]})}var _,O=t(17),v=t(11),y=m.b.nav(_||(_=Object(d.a)(["\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 1rem 0;\n  background: var(--dark-bg);\n  ul {\n    max-width: 1200px;\n    margin: 0 auto;\n    width: 90%;\n    text-align: center;\n    li {\n      display: inline-block;\n      border-radius: 8px;\n      transition: 0.3s ease background-color;\n      &:hover {\n        background-color: var(--deep-dark);\n      }\n    }\n    a {\n      display: inline-block;\n      font-family: 'RobotoMono Regular';\n      padding: 1rem 2rem;\n      font-size: 2rem;\n      color: var(--gray-1);\n      outline: none;\n    }\n    .active {\n      color: var(--white);\n    }\n  }\n  .mobile-menu-icon {\n    position: absolute;\n    right: 1rem;\n    top: 1rem;\n    width: 4rem;\n    cursor: pointer;\n    display: none;\n    outline: none;\n    * {\n      pointer-events: none;\n    }\n  }\n  .navItems .closeNavIcon {\n    display: none;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 0;\n    .hide-item {\n      transform: translateY(calc(-100% - var(--top)));\n    }\n    .mobile-menu-icon {\n      display: block;\n    }\n    .navItems {\n      --top: 1rem;\n      transition: 0.3s ease transform;\n      background-color: var(--deep-dark);\n      padding: 2rem;\n      width: 90%;\n      max-width: 300px;\n      border-radius: 12px;\n      position: absolute;\n      right: 1rem;\n      top: var(--top);\n      .closeNavIcon {\n        display: block;\n        width: 3rem;\n        margin: 0 0 0 auto;\n        cursor: pointer;\n        * {\n          pointer-events: none;\n        }\n      }\n      li {\n        display: block;\n        margin-bottom: 1rem;\n      }\n    }\n  }\n"])));function w(){var n=Object(a.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1];return console.log(t,"showNav"),Object(b.jsxs)(y,{children:[Object(b.jsx)("div",{className:"mobile-menu-icon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(v.f,{})}),Object(b.jsxs)("ul",{className:t?"navItems":"navItems hide-item",children:[Object(b.jsx)("div",{className:"closeNavIcon",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:Object(b.jsx)(v.a,{})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/",exact:!0,onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Home"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/about",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"About"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/projects",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Projects"})}),Object(b.jsx)("li",{children:Object(b.jsx)(s.c,{to:"/contact",onClick:function(){return i(!t)},role:"button",onKeyDown:function(){return i(!t)},tabIndex:0,children:"Contact"})})]})]})}var k,N,I=t.p+"static/media/about-image-two.5a58d6f5.png",z=m.b.div(k||(k=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  margin-top: 3rem;\n  /* position: relative; */\n  .title {\n    font-size: 2.4rem;\n  }\n  .items {\n    display: flex;\n    gap: 1.5rem;\n    position: absolute;\n    left: 50rem;\n  }\n  .item {\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 8px;\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  @media only screen and (max-width: 768px) {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n    .items {\n      position: initial;\n      gap: 1rem;\n    }\n    .title {\n      font-size: 2rem;\n    }\n  }\n"])));function S(n){var e=n.title,t=void 0===e?"this is title":e,i=n.items,r=void 0===i?["html","css","js"]:i;return Object(b.jsxs)(z,{children:[Object(b.jsx)("h1",{className:"title",children:t}),Object(b.jsx)("div",{className:"items",children:r.map((function(n,e){return Object(b.jsx)("div",{className:"item",children:Object(b.jsx)(x,{children:n})},e)}))})]})}var L,M=m.b.div(N||(N=Object(d.a)(["\n  margin-top: 2rem;\n  .button {\n    font-size: 2.2.rem;\n    background-color: ",";\n    padding: 0.7em 2em;\n    border-radius: 8px;\n    display: inline-block;\n    border: 2px solid var(--gray-1);\n    color: ",";\n  }\n  .button:hover {\n    transform: scale(1.3) rotate(5deg);\n    transition: 0.3s;\n  }\n  @media only screen and (max-width: 768px) {\n    .button {\n      font-size: 1.8rem;\n    }\n  }\n"])),(function(n){return n.outline?"transparents":"var(--gray-1)"}),(function(n){return n.outline?"var(--gray-1)":"black"}));function H(n){var e=n.btnLink,t=void 0===e?"test":e,i=n.btnText,r=void 0===i?"test":i,a=n.outline,o=void 0!==a&&a;return Object(b.jsx)(M,{outline:o,className:"button-wrapper",children:Object(b.jsx)(s.b,{className:"button",to:t,children:r})})}var B=m.b.div(L||(L=Object(d.a)(["\n  padding: 10 rem 0;\n  .contactBanner__wrapper {\n    background-color: var(--deep-dark);\n    border-radius: 12px;\n    padding: 5rem 0rem;\n    text-align: center;\n  }\n  .contactBanner__heading {\n    font-size: 4rem;\n    margin-bottom: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactBanner__heading {\n      font-size: 1.8rem;\n    }\n  }\n"])));function C(){return Object(b.jsx)(B,{children:Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"contactBanner__wrapper",children:[Object(b.jsx)(x,{children:"Looking to get in touch?"}),Object(b.jsx)("h3",{className:"contactBanner__heading",children:"Let's build something"}),Object(b.jsx)(H,{btnText:"Contact Me",btnLink:"/contact"})]})})})}var R,D,P=t.p+"static/media/_Resume.023783b7.png",U=m.b.div(R||(R=Object(d.a)(["\n  padding: 20rem 0 10rem 0;\n  .button {\n    font-size: 1.5rem;\n  }\n  .top-section {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 2rem;\n  }\n  .left {\n    flex: 3;\n  }\n  .right {\n    flex: 2;\n  }\n  .about__subheading {\n    font-size: 2rem;\n    margin-bottom: 2rem;\n    span {\n      background-color: var(--deep-dark);\n      padding: 0.5rem;\n      border-radius: 8px;\n    }\n  }\n  .about__heading {\n    font-size: 3.6rem;\n    margin-bottom: 3rem;\n  }\n  .about__info {\n    margin-bottom: 4rem;\n    .para {\n      max-width: 100%;\n    }\n  }\n  .right {\n    img {\n      border: 2px solid var(--gray-1);\n    }\n  }\n  .about__info__items {\n    margin-top: 15rem;\n  }\n  .about__info__item {\n    margin-bottom: 10rem;\n  }\n  .about__info__heading {\n    font-size: 3.6rem;\n    text-transform: uppercase;\n  }\n  .resume {\n    font-size: 1.5rem;\n    background-color: var(--deep-dark);\n    padding: 0.7em 2em;\n    border-radius: 8px;\n    display: inline-block;\n    border: 2px solid var(--gray-1);\n  }\n  .resume:hover {\n    background-color: var(--white);\n    color: var(--deep-dark);\n    transform: scale(1.3) rotate(5deg);\n    transition: 0.4s;\n  }\n  @media only screen and (max-width: 768px) {\n    padding: 10rem 0;\n    .top-section {\n      flex-direction: column;\n      gap: 5rem;\n    }\n    .about__subheading {\n      font-size: 1.8rem;\n    }\n    .about__heading {\n      font-size: 2.8rem;\n    }\n    .about__info__heading {\n      font-size: 3rem;\n    }\n  }\n"])));function A(){return Object(b.jsxs)(U,{children:[Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"top-section",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsxs)("p",{className:"about__subheading",children:["Hi, I'm ",Object(b.jsx)("span",{children:"Luke McHenry"})]}),Object(b.jsx)("h2",{className:"about__heading",children:"A Web Developer"}),Object(b.jsx)("div",{className:"about__info",children:Object(b.jsxs)(x,{children:["I am from Lehi, Utah. A fast growing state in America. I've always enjoyed art and design, I feel that incorporating modern and unique style idea's to a website can make all the difference of an application.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"I started coding 6 months ago. I believe that Coding is an art. I love impressing both peers and non-programmers with what i write.",Object(b.jsx)("br",{})," ",Object(b.jsx)("br",{}),"My vision is to become very proficient in react, in the long term I want to get an entry-level job programming. In 5 years I see myself starting my own website."]})}),Object(b.jsx)("a",{className:"resume",href:P,download:!0,children:"Download Resume Here"})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)("img",{src:I,alt:"Luke McHenry"})})]}),Object(b.jsx)("div",{className:"about__info__items",children:Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Education"}),Object(b.jsx)(S,{title:"School",items:["Lehi High High School, Utah."]}),Object(b.jsx)(S,{title:"College",items:["University of Utah coding bootcamp"]})]})}),Object(b.jsx)("div",{className:"about__info__items",children:Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Skills"}),Object(b.jsx)(S,{title:"Frontend",items:["HTML","CSS","Javascript","React"]}),Object(b.jsx)(S,{title:"Backend",items:["Node","Express","Queries"]})]})}),Object(b.jsx)("div",{className:"about__info__items",children:Object(b.jsxs)("div",{className:"about__info__item",children:[Object(b.jsx)("h1",{className:"about__info__heading",children:"Other Interests"}),Object(b.jsx)(S,{title:"Movies",items:["Lord of the Rings","John Wick","Blackfish"]}),Object(b.jsx)(S,{title:"Gaming",items:["World of Warcraft","Diablo 3","Starcraft"]})]})})]}),Object(b.jsx)(C,{})]})}var T,F=m.b.form(D||(D=Object(d.a)(["\n  width: 100%;\n  .form-group {\n    width: 100%;\n    margin-bottom: 2rem;\n  }\n  label {\n    font-size: 1.8rem;\n  }\n  input,\n  textarea {\n    width: 100%;\n    font-size: 2rem;\n    padding: 1.2rem;\n    color: var(--gray-1);\n    background-color: var(--deep-dark);\n    outline: none;\n    border: none;\n    border-radius: 8px;\n    margin-top: 1rem;\n  }\n  textarea {\n    min-height: 250px;\n    resize: vertical;\n  }\n  button[type='submit'] {\n    background-color: var(--gray-1);\n    color: var(--black);\n    font-size: 2rem;\n    display: inline-block;\n    outline: none;\n    border: none;\n    padding: 1rem 4rem;\n    border-radius: 8px;\n    cursor: pointer;\n  }\n"])));function G(){var n=Object(a.useState)(""),e=Object(O.a)(n,2),t=e[0],i=e[1],r=Object(a.useState)(""),o=Object(O.a)(r,2),c=o[0],s=o[1],l=Object(a.useState)(""),d=Object(O.a)(l,2),m=d[0],h=d[1];return Object(b.jsx)("div",{children:Object(b.jsxs)(F,{children:[Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"name",children:["Your Name",Object(b.jsx)("input",{type:"text",id:"name",name:"name",value:t,onChange:function(n){return i(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"email",children:["Your email",Object(b.jsx)("input",{type:"text",id:"email",email:"email",value:c,onChange:function(n){return s(n.target.value)}})]})}),Object(b.jsx)("div",{className:"form-group",children:Object(b.jsxs)("label",{htmlFor:"message",children:["Your message",Object(b.jsx)("textarea",{type:"text",id:"message",message:"message",value:m,onChange:function(n){return h(n.target.value)}})]})}),Object(b.jsx)("button",{type:"submit",children:"Send"})]})})}var W,E=m.b.div(T||(T=Object(d.a)(["\n  padding: 2rem;\n  background-color: var(--deep-dark);\n  display: flex;\n  align-items: center;\n  gap: 2rem;\n  border-radius: 8px;\n  margin-bottom: 2rem;\n  .icon {\n    color: var(--white);\n    background-color: var(--gray-2);\n    padding: 1.3rem;\n    align-items: center;\n    justify-content: center;\n    border-radius: 50%;\n  }\n  svg {\n    width: 3.5rem;\n  }\n"])));function J(n){var e=n.icon,t=void 0===e?Object(b.jsx)(v.h,{}):e,i=n.text,r=void 0===i?"this is info":i;return Object(b.jsxs)(E,{children:[Object(b.jsx)("div",{className:"icon",children:t}),Object(b.jsx)("div",{className:"info",children:Object(b.jsx)(x,{children:r})})]})}var K,Y=m.b.div(W||(W=Object(d.a)(["\n  text-align: center;\n  p {\n    font-family: 'RobotoMono Regular';\n    font-size: 2rem;\n  }\n  h2 {\n    font-family: 'Montserrat Bold';\n    font-size: 6rem;\n    margin-top: 0.5rem;\n    text-transform: uppercase;\n  }\n  @media only screen and (max-width: 768px) {\n    p {\n      font-size: 1.2rem;\n    }\n    h2 {\n      font-size: 3.6rem;\n    }\n  }\n"])));function V(n){var e=n.subheading,t=void 0===e?"This is subheading":e,i=n.heading,r=void 0===i?"This is heading":i;return Object(b.jsxs)(Y,{className:"section-title",children:[Object(b.jsx)("p",{children:t}),Object(b.jsx)("h2",{children:r})]})}var q=m.b.div(K||(K=Object(d.a)(["\n  padding: 10rem 0;\n  .contactSection__wrapper {\n    display: flex;\n    gap: 5rem;\n    margin-top: 7rem;\n    justify-content: space-between;\n    position: relative;\n  }\n  .contactSection__wrapper::after {\n    position: absolute;\n    content: '';\n    width: 2px;\n    height: 50%;\n    background-color: var(--gray-1);\n    left: 50%;\n    top: 30%;\n    transform: translate(-50%, -50%);\n  }\n  .left {\n    width: 100%;\n    max-width: 500px;\n  }\n  .right {\n    max-width: 500px;\n    width: 100%;\n    border-radius: 12px;\n  }\n  @media only screen and (max-width: 768px) {\n    .contactSection__wrapper {\n      flex-direction: column;\n    }\n    .contactSection__wrapper::after {\n      display: none;\n    }\n    .left,\n    .right {\n      max-width: 100%;\n    }\n    .right {\n      padding: 4rem 2rem 2rem 2rem;\n    }\n  }\n"])));function X(){return Object(b.jsx)(q,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"Contact Me",subheading:"Get in touch"}),Object(b.jsxs)("div",{className:"contactSection__wrapper",children:[Object(b.jsxs)("div",{className:"left",children:[Object(b.jsx)(J,{icon:Object(b.jsx)(v.e,{}),text:"+3852076265"}),Object(b.jsx)(J,{icon:Object(b.jsx)(v.d,{}),text:"LukeMcHenry311@gmail.com"}),Object(b.jsx)(J,{text:"Lehi, Utah."})]}),Object(b.jsx)("div",{className:"right",children:Object(b.jsx)(G,{})})]})]})})}function Q(){return Object(b.jsx)("div",{children:Object(b.jsx)(X,{})})}var Z,$=t.p+"static/media/heroimerge.3e5f758e.png",nn=t.p+"static/media/social-media-arrow.f5e093ce.svg",en=t.p+"static/media/scroll-down-arrow.b013ca45.svg",tn=m.b.div(Z||(Z=Object(d.a)(["\n  .hero {\n    height: 100vh;\n    min-height: 1000px;\n    width: 100%;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n  }\n  .hero__heading {\n    font-size: 2rem;\n    margin-bottom: -4 rem;\n    position: relative;\n    span {\n      display: inline-block;\n      width: 100%;\n    }\n    .hero__name {\n      font-family: 'Montserrat SemiBold';\n      font-size: 7rem;\n      color: var(--white);\n    }\n  }\n  .hero__img {\n    max-width: 900px;\n    width: 100%;\n    height: 600px;\n    margin: 0 auto;\n    border: 2px solid var(--white);\n  }\n  .hero__info {\n    margin-top: -16rem;\n    font-size: 1.5rem;\n  }\n  .hero__social,\n  .hero__scrollDown {\n    display: flex;\n    flex-direction: column;\n    gap: 2rem;\n    position: absolute;\n    bottom: 20px;\n    width: 50px;\n  }\n  .hero__social {\n    left: 50px;\n  }\n  .hero__scrollDown {\n    right: 50px;\n  }\n  .hero__social__indicator,\n  .hero__scrollDown {\n    width: 50px;\n    p {\n      font-size: 1.6rem;\n      transform: translateY(-70px) rotate(90deg);\n      letter-spacing: 0.7rem;\n      text-transform: uppercase;\n    }\n    img {\n      max-height: 45px;\n      width: 16px;\n      margin: 0 auto;\n      object-fit: contain;\n    }\n  }\n  .hero__scrollDown {\n    img {\n      max-height: 70px;\n    }\n  }\n  .hero__social__text {\n    ul {\n      li {\n        margin-bottom: 1rem;\n        a {\n          display: inline-block;\n          font-size: 1.6rem;\n          transform: rotate(-90deg);\n          letter-spacing: 5px;\n          margin-bottom: 2rem;\n        }\n      }\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .hero {\n      min-height: 750px;\n    }\n    .hero__heading {\n      font-size: 1.4rem;\n      margin-bottom: -3rem;\n      .hero__name {\n        font-size: 4.5rem;\n      }\n    }\n    .hero_img {\n      height: 300px;\n    }\n    .hero__info {\n      margin-top: 0.5rem;\n    }\n    .hero__social {\n      left: 0px;\n      bottom: 15%;\n      width: 20px;\n      .hero__social__indicator {\n        width: 20px;\n        p {\n          font-size: 1.2rem;\n        }\n        img {\n          max-height: 22px;\n        }\n      }\n      .hero__social__text {\n        ul {\n          li {\n            a {\n              font-size: 1.2rem;\n              margin-bottom: 1rem;\n            }\n          }\n        }\n      }\n    }\n    .hero__scrollDown {\n      right: 0;\n      width: 20px;\n      gap: 1rem;\n      p {\n        font-size: 1.3rem;\n      }\n    }\n  }\n"])));function rn(){return Object(b.jsx)(tn,{children:Object(b.jsx)("div",{className:"hero",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("h1",{className:"hero__heading",children:[Object(b.jsx)("span",{children:"Hi, my name is"}),Object(b.jsx)("span",{className:"hero__name",children:"Luke McHenry"})]}),Object(b.jsx)("div",{className:"hero__img",children:Object(b.jsx)("img",{src:$,alt:""})}),Object(b.jsxs)("div",{className:"hero__info",children:[Object(b.jsx)(x,{children:"I am looking for a career in web development. I enjoy learning new things and becoming the best programmer I can be."}),Object(b.jsx)(H,{btnText:"see my projects",btnLink:"/projects"})]}),Object(b.jsxs)("div",{className:"hero__social",children:[Object(b.jsxs)("div",{className:"hero__social__indicator",children:[Object(b.jsx)("p",{children:"Follow"}),Object(b.jsx)("img",{src:nn,alt:"icon"})]}),Object(b.jsx)("div",{className:"hero__social__text",children:Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.instagram.com/luke.mchenry/",target:"_blank",rel:"noreferrer",children:"IG"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://github.com/LukeMcHenry311",target:"_blank",rel:"noreferrer",children:"GH"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{href:"https://www.facebook.com/luke.mchenry.73",target:"_blank",rel:"noreferrer",children:"FB"})})]})})]}),Object(b.jsxs)("div",{className:"hero__scrollDown",children:[Object(b.jsx)("p",{children:"Scroll"}),Object(b.jsx)("img",{src:en,alt:""})]})]})})})}var an,on,cn=t.p+"static/media/about-lingo.6bd1c1f1.png",sn=m.b.div(an||(an=Object(d.a)(["\n  padding: 10 rem 0;\n  .container {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    text-align: left;\n  }\n  .aboutSection__left,\n  .aboutSection__right {\n    flex: 1;\n  }\n  .section-title {\n    text-align: left;\n  }\n  .para {\n    margin-top: 2rem;\n    margin-left: 0;\n  }\n  .aboutSection__buttons {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  @media only scren and (max-width: 950px) {\n    .aboutSection__left {\n      flex: 4;\n    }\n    .aboutSection__right {\n      flex: 3;\n    }\n  }\n  @media only screen and (max-width: 768px) {\n    .container {\n      flex-direction: column;\n      text-align: center;\n    }\n    .aboutSection__left,\n    .aboutSection__right {\n      width: 100%;\n    }\n    .aboutSection__right {\n      margin-top: 3rem;\n    }\n    .section-title {\n      text-align: center;\n    }\n    .para {\n      margin: 0 auto;\n      margin-top: 2rem;\n    }\n    .aboutSection__buttons {\n      flex-direction: column;\n      gap: 0;\n      .button-wrapper,\n      a {\n        width: 100%;\n        text-align: center;\n      }\n    }\n  }\n"])));function ln(){return Object(b.jsx)(sn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("div",{className:"aboutSection__left",children:[Object(b.jsx)(V,{subheading:"Please allow me to introduce myself \ud83d\ude1b",heading:"about me"}),Object(b.jsx)(x,{children:"I am a University of Utah Coding Bootcamp student from Lehi, Utah. I enjoy challenging myself, and always try to improve my coding skills through creative thinking."}),Object(b.jsxs)("div",{className:"aboutSection__buttons",children:[Object(b.jsx)(H,{btnLink:"/projects",btnText:"Projects"}),Object(b.jsx)(H,{btnLink:"./about",btnText:"Read More",outline:!0})]})]}),Object(b.jsx)("div",{className:"aboutSection__Right",children:Object(b.jsx)("img",{src:cn,alt:""})})]})})}var dn,mn=m.b.div(on||(on=Object(d.a)(["\n  text-align: center;\n  .servicesItem__icon {\n    svg {\n      width: 3rem;\n    }\n  }\n  .servicesItem__title {\n    font-size: 2.5rem;\n    font-family: 'Montserrat SemiBold';\n  }\n  .para {\n    margin-top: 2rem;\n  }\n"])));function bn(n){var e=n.icon,t=void 0===e?Object(b.jsx)(v.c,{}):e,i=n.title,r=void 0===i?"web design":i,a=n.desc,o=void 0===a?"sayori sayori sayori":a;return Object(b.jsxs)(mn,{children:[Object(b.jsx)("div",{className:"servicesItem__icon",children:t}),Object(b.jsx)("div",{className:"servicesItem__title",children:r}),Object(b.jsx)(x,{children:o})]})}var hn=m.b.div(dn||(dn=Object(d.a)(["\n  padding: 10rem 0;\n  .services__allItems {\n    display: flex;\n    gap: 10rem;\n    justify-content: space-between;\n    margin-top: 5rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .services__allItems {\n      flex-direction: column;\n      max-width: 350px;\n      margin: 0 auto;\n      margin-top: 5rem;\n      gap: 5rem;\n    }\n  }\n"])));function jn(){return Object(b.jsx)(hn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"Services",subheading:"What can i do for you?"}),Object(b.jsxs)("div",{className:"services__allItems",children:[Object(b.jsx)(bn,{icon:Object(b.jsx)(v.c,{}),title:"Website Design",desc:"I can design (or redesign) a website with a modern and unique look, while not sacrificing any vibrant ideas or colors"}),Object(b.jsx)(bn,{icon:Object(b.jsx)(v.b,{}),title:"Interface Design",desc:"I can develop a concise codebase with big ideas and a lightning-fast loading speed"}),Object(b.jsx)(bn,{icon:Object(b.jsx)(v.g,{}),title:"App Functionality",desc:"I can make website's responsive and dynamic to all screen resolution's (computer, laptop, tablet, phone, etc...)"})]})]})})}var pn,gn=t(53),xn=t(51),un=t(52),fn=t(50),_n=t(54),On=t.p+"static/media/projectone.15cb4156.png",vn=t.p+"static/media/projecttwo.edfb99cb.png",yn=t.p+"static/media/projectthree.f32ff353.png",wn=t.p+"static/media/projectfour.5ac5143e.png",kn=t.p+"static/media/projectfive.e0d9c4f4.png",Nn=[{id:Object(_n.a)(),name:"Coinvrt",desc:"An application to track cryptocurrency data, such as its price or how it compares to other cryptocurrencies data.",img:On,link1:"https://github.com/LukeMcHenry311/weekly-group-project",link2:"https://lukemchenry311.github.io/weekly-group-project/"},{id:Object(_n.a)(),name:"Hogwarts Library",desc:"A fun app to find your harry potter house, or create wizards and spells with other users.",img:vn,link1:"https://github.com/Jsieler/wizard-sorting-quiz",link2:"https://pacific-scrubland-02824.herokuapp.com/"},{id:Object(_n.a)(),name:"Team-Up",desc:"Team-Up is a gaming social networking app, where you can follow your favorite games. As well as add users with similar gaming interests to team up!",img:yn,link1:"https://github.com/Jsieler/team-up",link2:"https://protected-depths-21600.herokuapp.com/"},{id:Object(_n.a)(),name:"Weather Dashboard",desc:"A simple website to tell the 5-day weather forecast for any city in the world.",img:wn,link1:"https://github.com/LukeMcHenry311/Server-Side-Weather",link2:"https://lukemchenry311.github.io/Server-Side-Weather/"},{id:Object(_n.a)(),name:"Team-Profile-Generator-Xioma",desc:"A back-end node based application to generate a team-profile dynamically with minimal input from the user.",img:kn,link1:"https://github.com/LukeMcHenry311/Team-Profile-Generator-Xioma",link2:"https://github.com/LukeMcHenry311/Team-Profile-Generator-Xioma"}],In=m.b.div(pn||(pn=Object(d.a)(["\n  .projectItem__img {\n    width: 100%;\n    height: 400px;\n    overflow: hidden;\n    border-radius: 12px;\n    display: inline-block;\n    border: 3px solid var(--gray-2);\n    img {\n      height: 100%;\n    }\n  }\n  .projectItem__info {\n    margin-top: 1rem;\n    background-color: var(--deep-dark);\n    padding: 1rem;\n    border-radius: 12px;\n  }\n  .projectItem__title {\n    font-size: 2.2.rem;\n  }\n  .projectItem__desc {\n    font-size: 1.6rem;\n    font-family: 'RobotoMono Regular';\n    margin-top: 1rem;\n  }\n  .projectItem_links {\n    font-size: 20px;\n    justify-content: space-between;\n    margin-left: 18rem;\n    text-decoration: underline;\n  }\n  .projectItem_linkone {\n    margin-right: 3rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projectItem__img {\n      height: 350px;\n    }\n    .projectItem_links {\n      font-size: 10px;\n      margin-left: 2rem;\n    }\n  }\n"])));function zn(n){var e=n.img,t=void 0===e?On:e,i=n.title,r=void 0===i?"Project Name":i,a=n.desc,o=void 0===a?"blah blah blah":a,c=n.link1,l=void 0===c?"beep":c,d=n.link2,m=void 0===d?"boop":d;return Object(b.jsxs)(In,{children:[Object(b.jsx)(s.b,{to:"/projects",className:"projectItem__img",children:Object(b.jsx)("img",{src:t,alt:"project"})}),Object(b.jsxs)("div",{className:"projectItem__info",children:[Object(b.jsx)(s.b,{to:"#",children:Object(b.jsx)("h3",{className:"projectItem__title",children:r})}),Object(b.jsxs)("div",{className:"github-container",children:[Object(b.jsx)("p",{className:"projectItem__desc",children:o}),Object(b.jsxs)("div",{className:"projectItem_links",children:[Object(b.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"projectItem_linkone",children:"GitHub"}),Object(b.jsx)("a",{href:m,target:"_blank",rel:"noreferrer",children:"Deployed"})]})]})]})]})}var Sn;t(46);un.a.use([fn.a]);var Ln,Mn=m.b.div(Sn||(Sn=Object(d.a)(["\n  padding: 10rem 0;\n  .projects__allItems {\n    display: flex;\n    gap: 3rem;\n    margin-top: 5rem;\n  }\n  .swiper-container {\n    padding-top: 8rem;\n    max-width: 100%;\n  }\n  .swiper-button-prev,\n  .swiper-button-next {\n    position: absolute;\n    height: 50px;\n    width: 50px;\n    background-color: var(--deep-dark);\n    z-index: 10;\n    right: 60px;\n    left: auto;\n    top: 0;\n    transform: translateY(50%);\n    color: var(--gray-1);\n    border-radius: 8px;\n  }\n  .swiper-button-next {\n    right: 0;\n  }\n  .swiper-button-prev::after,\n  .swiper-button-next::after {\n    font-size: 2rem;\n  }\n  @media only screen and (max-width: 768px) {\n    .projects__allItems {\n      flex-direction: column;\n      max-width: 400px;\n      margin: 0 auto;\n      margin-top: 7rem;\n      gap: 5rem;\n      .projectItem__img {\n        width: 100%;\n      }\n    }\n  }\n"])));function Hn(){return Object(b.jsx)(Mn,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(V,{heading:"Projects",subheading:"swipe through some of my recent work"}),Object(b.jsx)("div",{className:"projects__allItems",children:Object(b.jsx)(gn.a,{spaceBetween:30,slidesPerView:1,navigation:!0,breakpoints:{640:{slidesPerView:1},768:{slidesPerView:2},1200:{slidesPerView:2},2e3:{slidesPerView:2}},children:Nn.map((function(n,e){if(!(e>=5))return Object(b.jsx)(xn.a,{children:Object(b.jsx)(zn,{title:n.name,img:n.img,desc:n.desc,link1:n.link1,link2:n.link2})},n.id)}))})})]})})}function Bn(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(rn,{}),Object(b.jsx)(ln,{}),Object(b.jsx)(jn,{}),Object(b.jsx)(Hn,{}),Object(b.jsx)(C,{})]})}var Cn,Rn=m.b.div(Ln||(Ln=Object(d.a)(["\n  padding: 3rem 0;\n"])));function Dn(){return Object(b.jsx)(Rn,{children:Object(b.jsx)(Hn,{})})}function Pn(){return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(s.a,{children:[Object(b.jsx)(w,{}),Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/about",children:Object(b.jsx)(A,{})}),Object(b.jsx)(l.a,{path:"/projects",children:Object(b.jsx)(Dn,{})}),Object(b.jsx)(l.a,{path:"/contact",children:Object(b.jsx)(Q,{})}),Object(b.jsx)(l.a,{path:"/",children:Object(b.jsx)(Bn,{})})]}),Object(b.jsx)(f,{})]})})}var Un,An=Object(m.a)(Cn||(Cn=Object(d.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),Tn=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",Fn=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",Gn=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",Wn=Object(m.a)(Un||(Un=Object(d.a)(["\n  @font-face {\n    font-family: 'RobotoMono Regular';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat SemiBold';\n    src: url(",");\n    font-style: normal;\n  }\n  @font-face {\n    font-family: 'Montserrat Bold';\n    src: url(",");\n    font-style: normal;\n  }\n  html{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  *{\n    font-family: 'RobotoMono Regular';\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: 'Montserrat SemiBold'\n  }\n\n"])),Tn,Fn,Gn);c.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(An,{}),Object(b.jsx)(Wn,{}),Object(b.jsx)(Pn,{})]}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.433f1261.chunk.js.map