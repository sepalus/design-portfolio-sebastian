(this["webpackJsonpdesign-portfolio"]=this["webpackJsonpdesign-portfolio"]||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(1),s=n(14),c=n.n(s),o=(n(31),n(3)),r=n(2),l=n.n(r),d=n(12),p=n.n(d);n(32);var u=function(e){var t=e.designerRef,n=e.showTypist,s=e.selectViewport,c=e.setSkipProjectSection,r=Object(a.useState)(!1),d=Object(o.a)(r,2),u=d[0],j=d[1],m=Object(a.useState)(!1),b=Object(o.a)(m,2),g=b[0],h=b[1];return Object(i.jsx)("section",{ref:t,className:"designer-section-container",children:Object(i.jsx)("div",{className:"designer-section-content",children:Object(i.jsxs)("div",{className:"designer-section-typist-wrapper",children:[n?Object(i.jsx)("h3",{className:l()({"typist-button-disabled":!u}),children:Object(i.jsxs)(p.a,{startDelay:700,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return j(!0)}),500)},children:["Hello, I'm\xa0",Object(i.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){c(!0),s(3)},children:"Sebastian"}),"\xa0a designer in both the physical and digital world"]})}):Object(i.jsxs)("h3",{children:["Hello, I'm\xa0",Object(i.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return s(3)},children:"Sebastian"}),"\xa0a designer in both the physical and digital world"]}),n?u&&Object(i.jsx)("h3",{className:l()({"typist-button-disabled":!g}),children:Object(i.jsxs)(p.a,{startDelay:200,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return h(!0)}),500)},children:["If you\u2019re interested in what I\u2019ve done, please take a look at my\xa0",Object(i.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return s(1)},children:"work"})]})}):Object(i.jsxs)("h3",{children:["If you\u2019re interested in what I\u2019ve done, please take a look at my\xa0",Object(i.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return s(1)},children:"work"})]})]})})})},j=(n(33),n(15)),m=n.n(j);var b=function(e){var t=e.designArea,n=e.projects,a=e.activeProjectIndex,s=e.setActiveProjectIndex,c=e.setCarouselIsOpen;return Object(i.jsxs)("div",{className:l()("project-catalog",{"project-catalog-dark":n[a].hasOwnProperty("styleCatalogDarkColor")?n[a].styleCatalogDarkColor:n[a].styleDarkColor}),children:[Object(i.jsx)("h2",{children:3===t?"Aesthetics":2===t?"Digital and Service":"Products and Furniture"}),Object(i.jsx)("ul",{className:"project-catalog-projects",children:n.map((function(e,t){var n=t===a;return Object(i.jsx)("li",{className:l()({"project-catalog-active-project":n}),children:Object(i.jsxs)("button",{className:l()("link-button",{"icon-button icon-button-space":n}),onClick:function(){a===t?c(!0):s(t)},children:[Object(i.jsx)("h4",{children:e.title}),n&&Object(i.jsx)(m.a,{})]})})}))})]})},g=(n(39),n(8)),h=n(19),x=n.n(h),f=n(18),O=n.n(f),y=n(17),v=n.n(y);var k=function(e){var t=e.currentViewport,n=e.designArea,s=e.project,c=e.activeProject,r=Object(a.useState)(!1),d=Object(o.a)(r,2),p=d[0],u=d[1],j=s.title===c.title,m=function(){return!(!j||t!==n||1!==t&&2!==t)};return Object(i.jsxs)("div",{className:l()("project-card-description-wrapper",{"animate-description-in":m()},{"animate-description-out":!m()}),style:Object(g.a)(Object(g.a)({},c.descriptionStyle),{},{zIndex:j?1:0}),onMouseLeave:function(){u(!1)},children:[Object(i.jsx)("div",{className:"vertical-line"}),Object(i.jsx)("h3",{className:"project-card-description-title",children:c.title}),Object(i.jsx)("p",{className:"project-card-description-text",children:c.description}),Object(i.jsxs)("div",{className:"project-card-description-tag-wrapper",children:[Object(i.jsxs)("div",{className:"project-card-description-tag",children:[Object(i.jsx)(v.a,{className:"project-card-description-tag-icon"}),Object(i.jsxs)("p",{children:[" ",c.year]})]}),Object(i.jsxs)("div",{className:"project-card-description-tag",children:[c.isTeam?Object(i.jsx)(O.a,{className:"project-card-description-tag-icon"}):Object(i.jsx)(x.a,{className:"project-card-description-tag-icon"}),Object(i.jsxs)("div",{className:l()("project-card-description-tag-designer-wrapper",{"project-card-description-tag-designer-wrapper-open":c.isTeam&&p}),children:[Object(i.jsx)("p",{onMouseEnter:function(){u(!0)},children:c.isTeam?"Design Team":"Sebastian H\xf6gnabba"}),p&&Object(i.jsx)("div",{className:l()("project-card-description-tag-design-team-wrapper",{"project-card-description-tag-design-team-wrapper-horizontal":c.displayTeamHorizontal}),children:c.designTeam&&c.designTeam.map((function(e){return Object(i.jsx)("p",{children:e})}))})]})]})]})]})},w=(n(40),n(22)),C=n.n(w),S=n(21),D=n.n(S),N=n(20),T=n.n(N);var I=function(e){var t=e.activeImage,n=e.project,a=e.index;return Object(i.jsx)("div",{className:l()("project-card-carousel-image-wrapper",{"project-card-carousel-image-wrapper-active":t===a}),children:Object(i.jsx)("img",{src:"./assets/".concat(n.images[a]),alt:"",style:n.carouselStyle?n.carouselStyle.individual?Object(g.a)(Object(g.a)({},n.carouselStyle.common),n.carouselStyle.individual[a]):Object(g.a)({},n.carouselStyle.common):{}})})},A=function(e){var t=e.activeImage,n=e.setActiveImage,a=e.index;return Object(i.jsx)("span",{className:l()({"project-card-carousel-image-active-button":t===a}),onClick:function(){return n(a)}})},E=function(e){var t=e.designArea,n=e.project,s=e.carouselIsOpen,c=e.setCarouselIsOpen,r=Object(a.useState)(0),l=Object(o.a)(r,2),d=l[0],p=l[1],u=n.images.length,j=function(e){s&&(27===e.keyCode&&c(!1),32===e.keyCode&&p(d+1),37===e.keyCode&&p(d-1),39===e.keyCode&&p(d+1))};return Object(a.useEffect)((function(){return window.addEventListener("keydown",j),function(){window.removeEventListener("keydown",j)}}),[j]),d<0&&p(u-1),d>u-1&&p(0),Object(i.jsxs)("div",{className:"project-card-carousel",children:[Object(i.jsx)("div",{className:"project-card-carousel-main-area-cover clickable-background-element",onClick:function(){return c(!1)}}),Object(i.jsxs)("div",{className:"project-card-carousel-image-container",style:2===t?{backgroundColor:n.backgroundColor}:{},children:[n.images.map((function(e,t){return Object(i.jsx)(I,{activeImage:d,project:n,index:t})})),Object(i.jsx)("div",{className:"project-card-carousel-close-button",children:Object(i.jsx)(T.a,{className:n.styleDarkColor?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return c(!1)}})}),u>1&&Object(i.jsxs)("div",{className:"project-card-carousel-next-buttons",children:[Object(i.jsx)(D.a,{className:n.styleDarkColor?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return p(d-1)}}),Object(i.jsx)(C.a,{className:n.styleDarkColor?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return p(d+1)}})]}),u>1&&Object(i.jsx)("div",{className:"project-card-carousel-image-buttons",children:n.images.map((function(e,t){return Object(i.jsx)(A,{activeImage:d,setActiveImage:p,index:t})}))})]})]})};var M=function(e){var t=e.currentViewport,n=e.projects,a=e.activeProjectIndex,s=e.designArea,c=e.carouselIsOpen,o=e.setCarouselIsOpen,r=e.animationDirectionIn,d=n[a];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:l()("project-card",{"project-card-dark":n[a].styleDarkColor},{"animate-card-in":r},{"animate-card-out":!r}),style:{backgroundColor:d.backgroundColor||"black",color:d.styleDarkColor?"black":"white",borderColor:d.styleDarkColor?"black":"white"},children:Object(i.jsxs)("div",{className:"project-card-image-wrapper",children:[n.map((function(e,n){var c=a===n;return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("img",{src:e.mainImage?"./assets/".concat(e.mainImage):"./assets/".concat(e.images[0]),alt:"",className:l()([e.classes],{"animate-card-fade-in":c},{"animate-card-fade-out":!c}),style:e.imageStyle}),Object(i.jsx)(k,{currentViewport:t,designArea:s,project:e,activeProject:d})]})})),Object(i.jsx)("div",{className:"project-card-clickable-area",onClick:function(){return o(!0)}})]})}),c&&Object(i.jsx)(E,{designArea:s,project:d,carouselIsOpen:c,setCarouselIsOpen:o})]})},P=(n(41),{catalogWidth:"380px",catalogWidthPlusMargin:"480px"}),W=P.catalogWidthPlusMargin,H=[{title:"Aesthetics",description:"Aesthetics",year:2020,isTeam:!1,categories:["Beauty","Cuteness","Hotness"],displayableCategory:0,images:[""],styleDarkColor:!0,backgroundColor:"black"}],V=[{title:"Kaarna",description:"An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",year:2017,isTeam:!1,categories:["Product Design","Vehicle Design","Urban Mobility"],displayableCategory:1,images:["kaarna1.jpg","kaarna2.jpg","kaarna3.jpg","kaarna4.jpg"],descriptionStyle:{top:"126px",right:"100px",width:"285px"},styleDarkColor:!1,backgroundColor:"black"},{title:"Tyyni",description:"A sound diffusing wall element, with oustanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",year:2017,isTeam:!1,categories:["Product Design","Acoustic Design","Wall Panel Design"],displayableCategory:1,mainImage:["tyyni.jpg"],images:["tyyni1.jpg","tyyni2.jpg"],descriptionStyle:{left:W,right:"80px",bottom:"40px"},imageStyle:{boxSizing:"border-box",width:"100%",top:"0px",objectPosition:"0 0",paddingLeft:P.catalogWidth},styleCatalogDarkColor:!1,styleDarkColor:!0,backgroundColor:"#333333"},{title:"Kierre",description:"An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled plastic, made out of monomaterial components and designed for easy disassembly. Kierre showcases that products designed for recyclability can be beautiful, by turning the recyclable features into the product's own aesthetics.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Mikko Siponen","Tuomas Jussila","Aurora Tani"],categories:["Home Appliance Design","Design for Recyclability","Design for the Circular Economy"],displayableCategory:2,images:["kierre1.png","kierre2.png","kierre3.png","kierre4.png"],classes:"contain contain-center",imageStyle:{paddingTop:"80px",paddingBottom:"80px",paddingLeft:"150px"},descriptionStyle:{width:"235px",top:"50%",transform:"translateY(-50%)",right:"80px"},carouselStyle:{common:{padding:"40px 0px 60px",boxSizing:"border-box",maxWidth:"calc(100vh - 340px)",margin:"auto"},individual:[{},{},{},{transform:"translateX(40px)"}]},styleDarkColor:!1,backgroundColor:"black"},{title:"Kohdataan Kolmioilla",description:"Three pieces of street furniture that create a space that encourages both planned and incidental encounters. The concept is designed for an unused triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the triangular pieces of furniture create a cultural meeting point for city residents.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Johanna Kes\xe4l\xe4","Anna Akins"],categories:["Street Furniture Design","Chair Design","Spatial Design"],displayableCategory:2,images:["kolmiot1.png","kolmiot2.png","kolmiot3.png","kolmiot4.png"],descriptionStyle:{top:"70px",left:W,right:"80px"},carouselStyle:{individual:[{},{},{},{height:"100%",objectFit:"cover",marginLeft:"120px",marginRight:"120px",width:"calc(100% - 240px)"}]},styleDarkColor:!1,backgroundColor:"black"}],R=[{title:"Muse",description:"A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a value-added service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",year:2014,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Tik Ho Lee","Beatrice Hutzli","Matthias Wittmann","Martina Rakaric","Samuel Huber","Shanshan Chu","Yuntao Zhu","Elena Vimpari","Issey Ishikura"],displayTeamHorizontal:"true",categories:["Service Design","Web Design","Concept Design"],displayableCategory:0,mainImage:["muse.png"],images:["muse1.jpg","muse2.jpg","muse3.png","muse4.png","muse5.jpg","muse6.jpg","muse7.jpg"],classes:"contain",imageStyle:{paddingBottom:"250px",left:"80px"},descriptionStyle:{right:W,left:"80px",bottom:"40px"},carouselStyle:{common:{padding:"40px 0px 60px",height:"calc(100% - 100px)",width:"auto",margin:"auto"},individual:[{backgroundColor:"white",paddingLeft:"30px",paddingRight:"30px"},{backgroundColor:"white",paddingLeft:"70px",paddingRight:"70px"},{},{},{padding:"0",height:"100%"},{padding:"0",height:"100%"},{padding:"12%",height:"100%",backgroundColor:"white",boxSizing:"border-box"}]},styleDarkColor:!0,backgroundColor:"#6bc9b7"},{title:"Anneliina",description:"A new brand identity for Anneliina that communicates the caring service's core values: compassion, respect, trustworthiness and personalized care. The brand update included the launch of a re-designed responsive website and new marketing material, such as flyers and newspaper ads.",year:2016,isTeam:!1,categories:["Brand Identity Design","Web Design","Graphic Design"],displayableCategory:0,images:["anneliina1.png","anneliina2.png","anneliina3.png","anneliina4.png","anneliina5.png"],classes:"contain contain-center",imageStyle:{paddingTop:"270px"},descriptionStyle:{top:"50px",left:"80px",right:W},carouselStyle:{common:{padding:"40px 0px 60px",height:"calc(100% - 100px)",width:"auto",margin:"auto"},individual:[{},{},{},{},{padding:"15%",height:"100%",boxSizing:"border-box"}]},styleDarkColor:!0,backgroundColor:"#96c1d9"},{title:"Scoot",description:"A responsive website showcasing designs for electric foldable scooters. The site displays seven scooter designs that were exhibited at Helsinki Design Week. The Scoot website has an impressive video and high quality images of the scooters, details about the exhibition, information about thew design project and a press kit.",year:2017,isTeam:!1,categories:["Web Design","UX Design","UI Design"],displayableCategory:0,showVideo:!0,images:["scoot1.png","scoot2.png","scoot3.png"],classes:"contain contain-center",imageStyle:{paddingTop:"270px"},descriptionStyle:{top:"50px",left:"80px",right:"480px"},carouselStyle:{common:{padding:"40px 0px 60px",height:"calc(100% - 100px)",width:"auto",margin:"auto"}},styleDarkColor:!0,backgroundColor:"#f8f379"},{title:"Axiom",description:"A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allwos doctoral candidates, unviersities and companies to conduct more qualitave, compelling and relevant industrial PhD research.",year:2019,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Ira Ottmann","Suvi Majander","Yi-tzu Hsiao"],categories:["Service Design","Co-Design","Concept Design"],displayableCategory:0,mainImage:["axiom.png"],images:["axiom1.jpg","axiom2.jpg","axiom3.jpg","axiom4.jpg","axiom5.jpg","axiom6.jpg","axiom7.jpg","axiom8.jpg"],classes:"contain",imageStyle:{paddingTop:"250px",left:"0px"},descriptionStyle:{top:"45px",right:"445px",width:"425px"},styleDarkColor:!0,backgroundColor:"#d2ebf9"}];var L=function(e){var t=e.projectRef,n=e.designArea,s=e.currentViewport,c=(e.selectViewport,e.firstSectionEntry,e.firstAreaEntry,e.setFirstAreaEntry,e.skipProjectSection),r=Object(a.useState)(0),d=Object(o.a)(r,2),p=d[0],u=d[1],j=Object(a.useState)(!1),m=Object(o.a)(j,2),g=m[0],h=m[1],x=3===n?H:2===n?R:V;return p>=x.length&&u(0),Object(a.useEffect)((function(){u(0)}),[n]),Object(a.useEffect)((function(){1!==s&&h(!1)}),[s]),c?Object(i.jsx)("section",{ref:t,className:"project-section-container"}):Object(i.jsx)("section",{ref:t,className:"project-section-container",children:Object(i.jsxs)("div",{className:l()("project-section",{"project-section-digital":2===n},{"project-section-industrial":1===n},{"project-section-animation-enter":s===n},{"project-section-animation-exit":s!==n}),children:[Object(i.jsx)(b,{designArea:n,projects:x,activeProjectIndex:p,setActiveProjectIndex:u,setCarouselIsOpen:h}),Object(i.jsx)(M,{currentViewport:s,projects:x,activeProjectIndex:p,designArea:n,carouselIsOpen:g,setCarouselIsOpen:h,animationDirectionIn:1===s})]})})},z=n(24),q=n.n(z),F=n(23),B=n.n(F);n(42);var K=function(e){var t=e.informationRef,n=e.currentViewport,s=e.selectViewport,c=Object(a.useState)(!1),r=Object(o.a)(c,2),d=r[0],p=r[1],u=Object(a.useState)(!1),j=Object(o.a)(u,2),m=j[0],b=j[1],g=Object(a.useState)(!1),h=Object(o.a)(g,2),x=h[0],f=h[1],O=Object(a.useState)(!1),y=Object(o.a)(O,2),v=y[0],k=y[1],w=Object(a.useState)(!1),C=Object(o.a)(w,2),S=C[0],D=C[1],N=Object(a.useState)(0),T=Object(o.a)(N,2),I=T[0],A=T[1],E=Object(a.useState)(0),M=Object(o.a)(E,2),P=M[0],W=M[1],H="040 7752722",V="sebastian.hognabba@gmail.com",R=(window.innerWidth-334-488-32)/2+334+32;Object(a.useEffect)((function(){f(!d)}),[n]),Object(a.useEffect)((function(){setTimeout((function(){return b(d)}),d?1100:200)}),[d]);var L=function(e){d&&s(e)},z=l()("information-section-about-introduction-label",{"link-button link-button-narrow":m},{"no-style-button":!m}),F=function(){return Object(i.jsx)("img",{src:"./assets/icons/phone.png",alt:"Phone",onMouseEnter:function(){D(!1),W(0),k(!0)}})},K=function(){return Object(i.jsx)("img",{src:"./assets/icons/email.png",alt:"email",onMouseEnter:function(){k(!1),A(0),D(!0)}})};return Object(i.jsx)("section",{ref:t,className:"information-section-container",children:Object(i.jsxs)("div",{className:l()("information-section-content",{"information-section-static":!x},{"information-section-animation-enter":3===n&&x},{"information-section-animation-exit":3!==n&&x}),children:[Object(i.jsx)("div",{className:"information-section-about",children:Object(i.jsxs)("div",{className:"information-section-about-content-wrapper",children:[Object(i.jsx)("div",{children:Object(i.jsx)("img",{src:"./assets/face.jpg",alt:"Sebastian",className:l()("information-section-about-image",{"information-section-about-image-open":d},{"information-section-about-image-closed":!d})})}),Object(i.jsx)("div",{className:"information-section-about-text-wrapper-placeholder"}),Object(i.jsxs)("div",{className:l()("information-section-about-text-wrapper",{"information-section-about-text-wrapper-expanded animate-text-wrapper-element":d},{"animate-text-wrapper-element-reverse":!d}),style:{left:R},children:[Object(i.jsxs)("button",{className:"information-section-about-introduction-title link-button link-button-narrow icon-button",onClick:function(){p(!d)},children:[Object(i.jsx)("h3",{children:" Sebastian H\xf6gnabba"}),d?Object(i.jsx)(B.a,{}):Object(i.jsx)(q.a,{})]}),Object(i.jsx)("button",{className:"".concat(z," ").concat(l()({"animate-title-element-1":d},{"animate-title-element-1-reverse":!d})),onClick:function(){L(1)},children:"Industrial Designer"}),Object(i.jsx)("button",{className:"".concat(z," ").concat(l()({"animate-title-element-2":d},{"animate-title-element-2-reverse":!d})),onClick:function(){L(2)},children:"Digital Creator"}),Object(i.jsx)("button",{className:"disabled-button ".concat(z," ").concat(l()({"animate-title-element-3":d},{"animate-title-element-3-reverse":!d})),onClick:function(){},children:"Genuine Aesthete"}),Object(i.jsx)("p",{className:l()("information-section-about-introduction-text",{"animate-text-element-in":d},{"animate-text-element-out":!d}),children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."})]})]})}),Object(i.jsx)("div",{className:"information-section-contact",onMouseLeave:function(){D(!1),k(!1),W(0),A(0)},children:Object(i.jsxs)("div",{className:"information-section-contact-content-wrapper",children:[Object(i.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(i.jsx)("p",{children:"Check me out:"}),Object(i.jsx)("a",{href:"https://www.linkedin.com/in/sebastian-h\xf6gnabba-9a45a19b",target:"_blank",rel:"noopener noreferrer",children:Object(i.jsx)("img",{src:"./assets/icons/linkedin.png",alt:"LinkedIn"})}),Object(i.jsx)("a",{className:"hide-element",children:Object(i.jsx)("img",{src:"./assets/icons/instagram.png",alt:"Instagram"})}),Object(i.jsx)("a",{className:"hide-element",children:Object(i.jsx)("img",{src:"./assets/icons/finnishdesigners.png",alt:"Finnish Designers"})})]}),Object(i.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(i.jsx)("p",{children:"Hit me up:"}),Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"information-section-contact-icon-expandable-content-wrapper",children:[Object(i.jsx)("div",{children:!v&&Object(i.jsx)(F,{})}),v&&Object(i.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper",children:[Object(i.jsx)("span",{className:l()({"animate-copied-text-1":-1===I},{"animate-copied-text-2":1===I}),children:"Copied"}),Object(i.jsxs)("button",{className:"link-button icon-button",onClick:function(){navigator.clipboard.writeText(H.replace(/ /g,"")),A(0===I?1:-I)},children:[Object(i.jsx)(F,{}),H]})]}),Object(i.jsx)("div",{children:!S&&Object(i.jsx)(K,{})}),S&&Object(i.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper",children:[Object(i.jsx)("span",{className:l()({"animate-copied-text-1":-1===P},{"animate-copied-text-2":1===P}),children:"Copied"}),Object(i.jsxs)("button",{className:"link-button icon-button",onClick:function(){navigator.clipboard.writeText(V),W(0===P?1:-P)},children:[Object(i.jsx)(K,{}),V]})]})]})})]})]})})]})})};function U(){var e=Object(a.useState)(0),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(a.useState)(0),r=Object(o.a)(c,2),l=r[0],d=r[1],p=Object(a.useState)(!1),j=Object(o.a)(p,2),m=j[0],b=j[1],g=Object(a.useState)(!0),h=Object(o.a)(g,2),x=h[0],f=h[1],O=Object(a.useRef)(!0),y=Object(a.useRef)(!0),v=Object(a.useRef)(null),k=Object(a.useRef)(null),w=Object(a.useRef)(null),C=Object(a.useRef)(null),S=document.getElementById("root");Object(a.useEffect)((function(){f(!0)}),[l]),Object(a.useEffect)((function(){var e=function(){var e=S.scrollTop,t=[v.current.offsetTop,k.current.offsetTop,w.current.offsetTop,C.current.offsetTop];s(e);var n=e<=t[l-3]?l-3:e>=t[l+3]?l+3:e<=t[l-2]?l-2:e>=t[l+2]?l+2:e<=t[l-1]?l-1:e>=t[l+1]?l+1:l;n!==l&&(0===l&&(O.current=!1),1!==l||m||(y.current=!1),d(n),3===n&&b(!1))};return S.addEventListener("scroll",e),function(){return S.removeEventListener("scroll",e)}}),[l,n,S]);var D=function(e){var t=3===e?C:2===e?w:1===e?k:v;S.scrollTo({top:t.current.offsetTop,left:0,behavior:"smooth"})};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(u,{designerRef:v,selectViewport:D,showTypist:O.current,setSkipProjectSection:b}),Object(i.jsx)(L,{projectRef:k,designArea:1,currentViewport:l,selectViewport:D,firstSectionEntry:y.current,firstAreaEntry:x,setFirstAreaEntry:f,skipProjectSection:m}),Object(i.jsx)(L,{projectRef:w,designArea:2,currentViewport:l,selectViewport:D,firstSectionEntry:y.current,firstAreaEntry:x,setFirstAreaEntry:f,skipProjectSection:m}),Object(i.jsx)(K,{informationRef:C,currentViewport:l,selectViewport:D})]})}var J=function(){return Object(i.jsx)(U,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(i.jsx)(J,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.30b3d477.chunk.js.map