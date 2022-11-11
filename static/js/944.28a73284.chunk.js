"use strict";(self.webpackChunkapp_react=self.webpackChunkapp_react||[]).push([[944],{4030:function(e,a,o){var n=o(2677),i=o(9140),r=o(1087),l=o(184);a.Z=function(e){var a=e.nombre,o=e.portada;return(0,l.jsx)(n.Z,{className:"py-2",xs:"6",sm:"4",md:"3",lg:"3",xl:"2",children:(0,l.jsx)(i.Z,{className:"bg-secondary border border-1 border-secondary",children:(0,l.jsxs)(r.rU,{className:"cont-imagen link",to:a,children:[(0,l.jsx)(i.Z.Img,{className:"imagen",src:o,alt:""}),(0,l.jsx)(i.Z.Title,{className:"px-1 text-center text-white",children:a})]})})})}},8711:function(e,a,o){var n=o(4270),i=(o(2791),o(184));a.Z=function(e){var a=e.title,o=e.description,r=e.keywords,l=document.URL;return(0,i.jsx)(n.q,{htmlAttributes:{lang:"en"},title:a,meta:[{name:"description",content:o},{name:"keywords",content:r}],links:[{rel:"canonical",href:l}]})}},5431:function(e,a,o){o.r(a),o.d(a,{default:function(){return ce}});var n=o(4942),i=o(1413),r=o(885),l=o(9743),t=o(2677),d=o(5987),s=o(1694),c=o.n(s),m=o(2007),u=o.n(m),p=o(2791),f=o(184),v=["as","className","type","tooltip"],b={type:u().string,tooltip:u().bool,as:u().elementType},g=p.forwardRef((function(e,a){var o=e.as,n=void 0===o?"div":o,r=e.className,l=e.type,t=void 0===l?"valid":l,s=e.tooltip,m=void 0!==s&&s,u=(0,d.Z)(e,v);return(0,f.jsx)(n,(0,i.Z)((0,i.Z)({},u),{},{ref:a,className:c()(r,"".concat(t,"-").concat(m?"tooltip":"feedback"))}))}));g.displayName="Feedback",g.propTypes=b;var k=g,x=p.createContext({}),h=o(162),D=["id","bsPrefix","className","type","isValid","isInvalid","as"],C=p.forwardRef((function(e,a){var o=e.id,n=e.bsPrefix,r=e.className,l=e.type,t=void 0===l?"checkbox":l,s=e.isValid,m=void 0!==s&&s,u=e.isInvalid,v=void 0!==u&&u,b=e.as,g=void 0===b?"input":b,k=(0,d.Z)(e,D),C=(0,p.useContext)(x).controlId;return n=(0,h.vE)(n,"form-check-input"),(0,f.jsx)(g,(0,i.Z)((0,i.Z)({},k),{},{ref:a,type:t,id:o||C,className:c()(r,n,m&&"is-valid",v&&"is-invalid")}))}));C.displayName="FormCheckInput";var N=C,P=["bsPrefix","className","htmlFor"],Z=p.forwardRef((function(e,a){var o=e.bsPrefix,n=e.className,r=e.htmlFor,l=(0,d.Z)(e,P),t=(0,p.useContext)(x).controlId;return o=(0,h.vE)(o,"form-check-label"),(0,f.jsx)("label",(0,i.Z)((0,i.Z)({},l),{},{ref:a,htmlFor:r||t,className:c()(n,o)}))}));Z.displayName="FormCheckLabel";var y=Z,V=o(1701),F=["id","bsPrefix","bsSwitchPrefix","inline","reverse","disabled","isValid","isInvalid","feedbackTooltip","feedback","feedbackType","className","style","title","type","label","children","as"],j=p.forwardRef((function(e,a){var o=e.id,n=e.bsPrefix,r=e.bsSwitchPrefix,l=e.inline,t=void 0!==l&&l,s=e.reverse,m=void 0!==s&&s,u=e.disabled,v=void 0!==u&&u,b=e.isValid,g=void 0!==b&&b,D=e.isInvalid,C=void 0!==D&&D,P=e.feedbackTooltip,Z=void 0!==P&&P,j=e.feedback,O=e.feedbackType,E=e.className,I=e.style,w=e.title,L=void 0===w?"":w,z=e.type,K=void 0===z?"checkbox":z,R=e.label,G=e.children,S=e.as,q=void 0===S?"input":S,A=(0,d.Z)(e,F);n=(0,h.vE)(n,"form-check"),r=(0,h.vE)(r,"form-switch");var T=(0,p.useContext)(x).controlId,H=(0,p.useMemo)((function(){return{controlId:o||T}}),[T,o]),M=!G&&null!=R&&!1!==R||(0,V.XW)(G,y),U=(0,f.jsx)(N,(0,i.Z)((0,i.Z)({},A),{},{type:"switch"===K?"checkbox":K,ref:a,isValid:g,isInvalid:C,disabled:v,as:q}));return(0,f.jsx)(x.Provider,{value:H,children:(0,f.jsx)("div",{style:I,className:c()(E,M&&n,t&&"".concat(n,"-inline"),m&&"".concat(n,"-reverse"),"switch"===K&&r),children:G||(0,f.jsxs)(f.Fragment,{children:[U,M&&(0,f.jsx)(y,{title:L,children:R}),j&&(0,f.jsx)(k,{type:O,tooltip:Z,children:j})]})})})}));j.displayName="FormCheck";var O=Object.assign(j,{Input:N,Label:y}),E=(o(2391),["bsPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","as"]),I=p.forwardRef((function(e,a){var o,r,l=e.bsPrefix,t=e.type,s=e.size,m=e.htmlSize,u=e.id,v=e.className,b=e.isValid,g=void 0!==b&&b,k=e.isInvalid,D=void 0!==k&&k,C=e.plaintext,N=e.readOnly,P=e.as,Z=void 0===P?"input":P,y=(0,d.Z)(e,E),V=(0,p.useContext)(x).controlId;(l=(0,h.vE)(l,"form-control"),C)?o=(0,n.Z)({},"".concat(l,"-plaintext"),!0):(r={},(0,n.Z)(r,l,!0),(0,n.Z)(r,"".concat(l,"-").concat(s),s),o=r);return(0,f.jsx)(Z,(0,i.Z)((0,i.Z)({},y),{},{type:t,size:m,ref:a,readOnly:N,id:u||V,className:c()(v,o,g&&"is-valid",D&&"is-invalid","color"===t&&"".concat(l,"-color"))}))}));I.displayName="FormControl";var w=Object.assign(I,{Feedback:k}),L=(0,o(6543).Z)("form-floating"),z=["controlId","as"],K=p.forwardRef((function(e,a){var o=e.controlId,n=e.as,r=void 0===n?"div":n,l=(0,d.Z)(e,z),t=(0,p.useMemo)((function(){return{controlId:o}}),[o]);return(0,f.jsx)(x.Provider,{value:t,children:(0,f.jsx)(r,(0,i.Z)((0,i.Z)({},l),{},{ref:a}))})}));K.displayName="FormGroup";var R=K,G=["as","bsPrefix","column","visuallyHidden","className","htmlFor"],S=p.forwardRef((function(e,a){var o=e.as,n=void 0===o?"label":o,r=e.bsPrefix,l=e.column,s=e.visuallyHidden,m=e.className,u=e.htmlFor,v=(0,d.Z)(e,G),b=(0,p.useContext)(x).controlId;r=(0,h.vE)(r,"form-label");var g="col-form-label";"string"===typeof l&&(g="".concat(g," ").concat(g,"-").concat(l));var k=c()(m,r,s&&"visually-hidden",l&&g);return u=u||b,l?(0,f.jsx)(t.Z,(0,i.Z)({ref:a,as:"label",className:k,htmlFor:u},v)):(0,f.jsx)(n,(0,i.Z)({ref:a,className:k,htmlFor:u},v))}));S.displayName="FormLabel",S.defaultProps={column:!1,visuallyHidden:!1};var q=S,A=["bsPrefix","className","id"],T=p.forwardRef((function(e,a){var o=e.bsPrefix,n=e.className,r=e.id,l=(0,d.Z)(e,A),t=(0,p.useContext)(x).controlId;return o=(0,h.vE)(o,"form-range"),(0,f.jsx)("input",(0,i.Z)((0,i.Z)({},l),{},{type:"range",ref:a,className:c()(n,o),id:r||t}))}));T.displayName="FormRange";var H=T,M=["bsPrefix","size","htmlSize","className","isValid","isInvalid","id"],U=p.forwardRef((function(e,a){var o=e.bsPrefix,n=e.size,r=e.htmlSize,l=e.className,t=e.isValid,s=void 0!==t&&t,m=e.isInvalid,u=void 0!==m&&m,v=e.id,b=(0,d.Z)(e,M),g=(0,p.useContext)(x).controlId;return o=(0,h.vE)(o,"form-select"),(0,f.jsx)("select",(0,i.Z)((0,i.Z)({},b),{},{size:r,ref:a,className:c()(l,o,n&&"".concat(o,"-").concat(n),s&&"is-valid",u&&"is-invalid"),id:v||g}))}));U.displayName="FormSelect";var _=U,B=["bsPrefix","className","as","muted"],Y=p.forwardRef((function(e,a){var o=e.bsPrefix,n=e.className,r=e.as,l=void 0===r?"small":r,t=e.muted,s=(0,d.Z)(e,B);return o=(0,h.vE)(o,"form-text"),(0,f.jsx)(l,(0,i.Z)((0,i.Z)({},s),{},{ref:a,className:c()(n,o,t&&"text-muted")}))}));Y.displayName="FormText";var J=Y,W=p.forwardRef((function(e,a){return(0,f.jsx)(O,(0,i.Z)((0,i.Z)({},e),{},{ref:a,type:"switch"}))}));W.displayName="Switch";var X=Object.assign(W,{Input:O.Input,Label:O.Label}),Q=["bsPrefix","className","children","controlId","label"],$=p.forwardRef((function(e,a){var o=e.bsPrefix,n=e.className,r=e.children,l=e.controlId,t=e.label,s=(0,d.Z)(e,Q);return o=(0,h.vE)(o,"form-floating"),(0,f.jsxs)(R,(0,i.Z)((0,i.Z)({ref:a,className:c()(n,o),controlId:l},s),{},{children:[r,(0,f.jsx)("label",{htmlFor:l,children:t})]}))}));$.displayName="FloatingLabel";var ee=$,ae=["className","validated","as"],oe={_ref:u().any,validated:u().bool,as:u().elementType},ne=p.forwardRef((function(e,a){var o=e.className,n=e.validated,r=e.as,l=void 0===r?"form":r,t=(0,d.Z)(e,ae);return(0,f.jsx)(l,(0,i.Z)((0,i.Z)({},t),{},{ref:a,className:c()(o,n&&"was-validated")}))}));ne.displayName="Form",ne.propTypes=oe;var ie=Object.assign(ne,{Group:R,Control:w,Floating:L,Check:O,Switch:X,Label:q,Text:J,Range:H,Select:_,FloatingLabel:ee}),re=o(3360),le=o(7022),te=o(4030),de=o(4196),se=o(8711);var ce=function(){var e=(0,p.useState)({name:""}),a=(0,r.Z)(e,2),o=a[0],d=a[1];return(0,f.jsxs)("div",{className:"artistico-1",children:[(0,f.jsx)(se.Z,{title:"Linovels-Novelas",description:"",keywords:"novelas,ligeras,anime,cuentos,ver,completa,capitulo,"}),(0,f.jsxs)(l.Z,{children:[(0,f.jsx)(t.Z,{className:"encabezado",children:(0,f.jsx)("div",{className:"",children:(0,f.jsx)("h1",{className:"text-center",children:"Linovels - Novelas"})})}),(0,f.jsx)(t.Z,{className:"encabezado col-4",children:(0,f.jsxs)(ie,{className:"d-flex",onSubmit:function(e){e.preventDefault(),console.log(o.name)},children:[(0,f.jsx)(ie.Control,{onClick:function(e){var a=e.target,r=a.name,l=a.value;d((0,i.Z)((0,i.Z)({},o),{},(0,n.Z)({},r,l))),console.log(r)},type:"search",placeholder:"Search",className:"me-2","aria-label":"Search"}),(0,f.jsx)(re.Z,{variant:"outline-success",type:"sumit",children:"Buscar"})]})})]}),(0,f.jsx)(le.Z,{fluid:!0,children:(0,f.jsx)(l.Z,{children:de.Z&&de.Z.map((function(e,a){return!!e.novela.toLowerCase().includes(o.name)&&(0,f.jsx)(te.Z,{nombre:e.novela,portada:e.portada},a.toString())}))})})]})}},4196:function(e,a,o){o.d(a,{Z:function(){return v}});var n=o.p+"static/media/Overlord_Volume_16.96cf7404b834908ff01d.webp",i=o.p+"static/media/Overlord-Extras-Prologo.f36fe13e8ab79e4e1c6d.pdf",r=o.p+"static/media/Overlord-Extras-La-princesa-vampiro-del-pais-perdido.7b671aa9c94a17a2c1bb.pdf",l=o.p+"static/media/Overlord-Extras-ElEmisarioDelRey.ffba1ef941b8cd9fe7df.pdf",t=o.p+"static/media/Overlord-Extras-DramaDeLas3Damas.3936fd424c80e8da0372.pdf",d=o.p+"static/media/Overlord-Extras-CharlaEntreChicas.3c43429542c66dabf464.pdf",s=o.p+"static/media/Overlord-Extras-Volumen-0.1bf6b8602c4a52c5251d.pdf",c=o.p+"static/media/Overlord-Extras-DiaDePleyades.0f582e6784dd1c9cbb6e.pdf",m={OverlordImg:{OverlordImg:n},OverlordPDF:{Prologo:i,Volumen1:o.p+"static/media/Overlord-Volumen-1.0eb71f6c2be04a545d3e.pdf",Volumen0Alternativo:s,Volumen1Alternativo:r,ElEmisarioDelRey:l,CharlaEntreChicas:d,DramaDeLas3Damas:t,DiaDePleyades:c,Volumen2:o.p+"static/media/Overlord-Volumen-2.176c610bb74f0e42ee06.pdf",Volumen3:o.p+"static/media/Overlord-Volumen-3.8469400d8b6279f4485f.pdf",Volumen4:o.p+"static/media/Overlord-Volumen-4.142314d18bbaae79fbfe.pdf",Volumen5:o.p+"static/media/Overlord-Volumen-5.86dfea8808a9f3a80f43.pdf",Volumen6:o.p+"static/media/Overlord-Volumen-6.4f0bd5ec973aad16e1ef.pdf",Volumen7:o.p+"static/media/Overlord-Volumen-7.a4ec163c2b45722df933.pdf",Volumen8:o.p+"static/media/Overlord-Volumen-8.91257d2b0806144e8601.pdf",Volumen9:o.p+"static/media/Overlord-Volumen-9.7b39c002145c492e3bf1.pdf",Volumen10:o.p+"static/media/Overlord-Volumen-10.0dee928c49752f39392f.pdf",Volumen11:o.p+"static/media/Overlord-Volumen-11.9d0d0f015b0320ed3715.pdf",Volumen12:o.p+"static/media/Overlord-Volumen-12.6ac1c034ab026ad6215b.pdf",Volumen13:o.p+"static/media/Overlord-Volumen-13.18685d540a753cc01687.pdf",Volumen14:o.p+"static/media/Overlord-Volumen-14.04687778de6299137137.pdf",Volumen15:o.p+"static/media/Overlord-Volumen-15.e3130536025706ca8202.pdf",Volumen16:o.p+"static/media/Overlord-Volumen-16.435edd569aa466a568ac.pdf"}},u={greatDemondKingImg:o.p+"static/media/great-demon-king-gran-rey-demonio-1-1.080bf850bf60cb1253b3.jpg",greatDemondKingPDF:{Compendio1:o.p+"static/media/great-demon-king-001-100.c60a8c3a836b325f83f4.pdf",Compendio2:o.p+"static/media/great-demon-king-101-200.96c96620554b257d1304.pdf",Compendio3:o.p+"static/media/great-demon-king-201-300.8bc9c56e3bac3d33b1ef.pdf",Compendio4:o.p+"static/media/great-demon-king-301-400.29eeb0b7a3dafe803c3b.pdf",Compendio5:o.p+"static/media/great-demon-king-401-500.0142e4b372f9e96af1d7.pdf",Compendio6:o.p+"static/media/great-demon-king-501-600.04ab6232324fb99ea98c.pdf",Compendio7:o.p+"static/media/great-demon-king-601-700.904e5281a38d55645da8.pdf",Compendio8:o.p+"static/media/great-demon-king-701-800.cc233b1da4edae2678c5.pdf",Compendio9:o.p+"static/media/great-demon-king-801-900.c1ae6316a52f8996a23c.pdf",Compendio10:o.p+"static/media/great-demon-king-901-1000.cefd6ba06fb8ece480a5.pdf",Compendio11:o.p+"static/media/great-demon-king-1001-1027.9fa5fc5dc6714ac4fda5.pdf"}},p={kumoDesuGaNaniKaImg:o.p+"static/media/vol16-cover-jp.470e7aee17bc7bd39b71.webp",kumoDesuGaNaniKaPDF:{Compendio1:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-1.96f94672ebf9195dbc7a.pdf",Compendio2:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-2.ed93420c9f8b56caa4dc.pdf",Compendio3:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-3.c8e4cae68e892504d8d3.pdf",Compendio4:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-4.dbc5e24a10be541263a7.pdf",Compendio5:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-5.1ddfa003b303fdb3227a.pdf",Compendio6:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-6.1b4ddee1e5273108cd77.pdf",Compendio7:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-7.3e0a9b7f51de23bf9c24.pdf",Compendio8:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-8.e14eee92f11368ebc648.pdf",Compendio9:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-9.e54377b2e8aacbe78a60.pdf",Compendio10:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-10.6df0be6cbb45ca61452e.pdf",Compendio11:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-11.fc64cbcd05b9dd5bd88c.pdf",Compendio12:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-12.fb3dbd4952e0b6fa945f.pdf",Compendio13:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-13.7c3c8b26289a40125681.pdf",Compendio14:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-14.19f1dfa618f8b33daa34.pdf",Compendio15:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-15.1ca1933c9e1c8166f21a.pdf",Compendio16:o.p+"static/media/kumo-desu-ga-nani-ka-volumen-16.b2195016a809a3a60f1f.pdf"}},f={soloLevelingImg:o.p+"static/media/portada-sololeveling.72b0687ba7f820bec7ff.jpg",soloLevelingPDF:{Compendio1:o.p+"static/media/sololeveling-arco1-mazmorrarangod.26d316fc088bf8b8ca53.pdf",Compendio2:o.p+"static/media/sololeveling-arco2-despertar.8f1920e29af1cc287b48.pdf",Compendio3:o.p+"static/media/sololeveling-arco3-mazmorrainstantanea.7eef2f8f9da39e39f049.pdf",Compendio4:o.p+"static/media/sololeveling-arco4-mazmorrasylagartos.8246d5351504da8335ff.pdf",Compendio5:o.p+"static/media/sololeveling-arco5-mazmorrasyprisioneros.2059b560f1fca01e92af.pdf",Compendio6:o.p+"static/media/sololeveling-arco6-incursiondeyoojinho.8f8fe3839117a1950232.pdf"}},v=[{novela:"Overlord",portada:m.OverlordImg.OverlordImg,sinopsis:'Despu\xe9s de anunciar que suspender\xeda todos sus servicios, el juego de internet "Yggdrasil" apago sus servidores.\n        Pero por alguna raz\xf3n, un jugador no se desconect\xf3 autom\xe1ticamente\u2026\n        Pero eso no fue todo, los NPC de su gremio cobraron vida\u2026\n        Es as\xed como un joven normal, que amaba el videojuego Yggdrasil en el mundo real, fue transportado a un mundo alternativo junto con todo su gremio.\n        Convirti\xe9ndose como resultado en el mago m\xe1s poderoso, Momonga, un no-muerto con la apariencia de un esqueleto.\n        \xa1Ahora \xe9l dirigir\xe1 a su gremio "Ainz Ooal Gown" hacia una aventura legendaria sin precedentes!',volumen:[{link:m.OverlordPDF.Prologo,title:"Extras - Prologo"},{link:m.OverlordPDF.Volumen0Alternativo,title:"Volumen 0 alternativo - La llegada de los Dioses"},{link:m.OverlordPDF.Volumen1,title:"Volumen 1 - El rey no muerto"},{link:m.OverlordPDF.Volumen1Alternativo,title:"Volumen 1 alternativo - La princesa vampiro del pa\xeds perdido"},{link:m.OverlordPDF.ElEmisarioDelRey,title:"Extras - El emisario del rey"},{link:m.OverlordPDF.DramaDeLas3Damas,title:"Extras - Drama de las 3 damas"},{link:m.OverlordPDF.Volumen2,title:"Volumen 2 - El gerrero oscuro"},{link:m.OverlordPDF.Volumen3,title:"Volumen 3 - La valquiria sangrienta"},{link:m.OverlordPDF.Volumen4,title:"Volumen 4 - Los h\xe9roes hombres lagarto"},{link:m.OverlordPDF.Volumen8,title:"Volumen 8 - Los dos l\xedderes"},{link:m.OverlordPDF.Volumen5,title:"Volumen 5 - Los Hombres del reino 1"},{link:m.OverlordPDF.Volumen6,title:"Volumen 6 - Los Hombres del reino 2"},{link:m.OverlordPDF.Volumen7,title:"Volumen 7 - Los invasores de la gran tumba"},{link:m.OverlordPDF.CharlaEntreChicas,title:"Extras - Charla entre chicas"},{link:m.OverlordPDF.Volumen9,title:"Volumen 9 - El lanzador de magia de la destrucci\xf3n"},{link:m.OverlordPDF.Volumen10,title:"Volumen 10 - El gobernante de las conspiraciones"},{link:m.OverlordPDF.DiaDePleyades,title:"Extras - D\xeda de Pl\xe9yades"},{link:m.OverlordPDF.Volumen11,title:"Volumen 11 - Los artesanos enanos"},{link:m.OverlordPDF.Volumen12,title:"Volumen 12 - El palad\xedn del Reino Sagrado 1"},{link:m.OverlordPDF.Volumen13,title:"Volumen 13 - El palad\xedn del Reino Sagrado 2"},{link:m.OverlordPDF.Volumen14,title:"Volumen 14 - La bruja del reino ca\xeddo"},{link:m.OverlordPDF.Volumen15,title:"Volumen 15 - La semi-elfo del bosque"},{link:m.OverlordPDF.Volumen16,title:"Volumen 16 - La semi-elfo God-kin"}]},{novela:"Great Demon King",portada:u.greatDemondKingImg,sinopsis:"Han Shuo, es un joven que ha desperdiciado su vida y no ha sabido sacarle provecho.\n        Un d\xeda es raptado por un misterioso anciano para ser usado como recipiente para su alma si es que pierde la batalla que esta a punto de librar contra las fuerzas del bien.\n        Durante la batalla su captor perece pero su hechizo de resurrecci\xf3n es interrumpido provocando que Han Shuo sea afectado por un horrible dolor.\n        \u201cSi logro sobrevivir\u2026 juro que no dejar\xe9 de cumplir con mis m\xe1s perversos deseos.\u201d\n        No es exactamente el t\xedpico pensamiento que tendr\xedan quienes est\xe1n a punto de morir.\n        Al despertar se encuentra en un mundo de fantas\xeda medieval dentro del cuerpo de un esclavo\u2026",volumen:[{link:u.greatDemondKingPDF.Compendio1,title:"Capitulos 001-100"},{link:u.greatDemondKingPDF.Compendio2,title:"Capitulos 101-200"},{link:u.greatDemondKingPDF.Compendio3,title:"Capitulos 201-300"},{link:u.greatDemondKingPDF.Compendio4,title:"Capitulos 301-400"},{link:u.greatDemondKingPDF.Compendio5,title:"Capitulos 401-500"},{link:u.greatDemondKingPDF.Compendio6,title:"Capitulos 501-600"},{link:u.greatDemondKingPDF.Compendio7,title:"Capitulos 601-700"},{link:u.greatDemondKingPDF.Compendio8,title:"Capitulos 701-800"},{link:u.greatDemondKingPDF.Compendio9,title:"Capitulos 801-900"},{link:u.greatDemondKingPDF.Compendio10,title:"Capitulos 901-1000"},{link:u.greatDemondKingPDF.Compendio10,title:"Capitulos 1001-1027"}]},{novela:"Kumo desu ga Nani ka",portada:p.kumoDesuGaNaniKaImg,sinopsis:"En un mundo donde la batalla entre el H\xe9roe y el Se\xf1or Demonio se repet\xeda continuamente. Un enorme hechizo provocado por ambos cruzo la frontera entre ese y otros mundos e hizo explotar un aula en una secundaria.\n        El hechizo golpe\xf3 a todos en la clase, y todos ellos perdieron sus vidas en un instante. Las almas de esas v\xedctimas fueron lanzadas a otro mundo, y cada uno de ellos reencarno.\n        La protagonista, quien tenia la peor reputaci\xf3n en la clase, se ve reencarnada en una ara\xf1a dentro de una enorme cueva. Ahora, sin comida, refugio y rodeada de monstruos, se vera obligada a usar todo su ingenio y fuerza de voluntad para sobrevivir.\n        Esta es la historia de la joven estudiante que se ve convertida en una ara\xf1a y su lucha a trav\xe9s de este nuevo mundo.",volumen:[{link:p.kumoDesuGaNaniKaPDF.Compendio1,title:"Volumen 1"},{link:p.kumoDesuGaNaniKaPDF.Compendio2,title:"Volumen 2"},{link:p.kumoDesuGaNaniKaPDF.Compendio3,title:"Volumen 3"},{link:p.kumoDesuGaNaniKaPDF.Compendio4,title:"Volumen 4"},{link:p.kumoDesuGaNaniKaPDF.Compendio5,title:"Volumen 5"},{link:p.kumoDesuGaNaniKaPDF.Compendio6,title:"Volumen 6"},{link:p.kumoDesuGaNaniKaPDF.Compendio7,title:"Volumen 7"},{link:p.kumoDesuGaNaniKaPDF.Compendio8,title:"Volumen 8"},{link:p.kumoDesuGaNaniKaPDF.Compendio9,title:"Volumen 9"},{link:p.kumoDesuGaNaniKaPDF.Compendio10,title:"Volumen 10"},{link:p.kumoDesuGaNaniKaPDF.Compendio11,title:"Volumen 11"},{link:p.kumoDesuGaNaniKaPDF.Compendio12,title:"Volumen 12"},{link:p.kumoDesuGaNaniKaPDF.Compendio13,title:"Volumen 13"},{link:p.kumoDesuGaNaniKaPDF.Compendio14,title:"Volumen 14"},{link:p.kumoDesuGaNaniKaPDF.Compendio15,title:"Volumen 15"},{link:p.kumoDesuGaNaniKaPDF.Compendio16,title:"Volumen 16"}]},{novela:"Solo leveling",portada:f.soloLevelingImg,sinopsis:"En un mundo en el que ciertos humanos poseen habilidades m\xe1gicas, llamados cazadores, deben luchar contra monstruos para proteger a la raza humana de una aniquilaci\xf3n segura, un cazador muy d\xe9bil llamado Sung Jinwoo se encuentra en una lucha en la que solo puede tratar de sobrevivir.",volumen:[{link:f.soloLevelingPDF.Compendio1,title:"Arco 1 - Mazmorra rango D"},{link:f.soloLevelingPDF.Compendio2,title:"Arco 2 - Despertar"},{link:f.soloLevelingPDF.Compendio3,title:"Arco 3 - Mazmorra instant\xe1nea"},{link:f.soloLevelingPDF.Compendio4,title:"Arco 4 - Mazmorras y Lagartos"},{link:f.soloLevelingPDF.Compendio5,title:"Arco 5 - Mazmorras y Prisioneros"},{link:f.soloLevelingPDF.Compendio6,title:"Arco 6 - Incursi\xf3n de Yoo Jin-Ho"}]}]},3360:function(e,a,o){var n=o(1413),i=o(885),r=o(5987),l=o(1694),t=o.n(l),d=o(2791),s=o(5341),c=o(162),m=o(184),u=["as","bsPrefix","variant","size","active","className"],p=d.forwardRef((function(e,a){var o=e.as,l=e.bsPrefix,d=e.variant,p=e.size,f=e.active,v=e.className,b=(0,r.Z)(e,u),g=(0,c.vE)(l,"btn"),k=(0,s.FT)((0,n.Z)({tagName:o},b)),x=(0,i.Z)(k,2),h=x[0],D=x[1].tagName;return(0,m.jsx)(D,(0,n.Z)((0,n.Z)((0,n.Z)({},h),b),{},{ref:a,className:t()(v,g,f&&"active",d&&"".concat(g,"-").concat(d),p&&"".concat(g,"-").concat(p),b.href&&b.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},a.Z=p},9140:function(e,a,o){o.d(a,{Z:function(){return O}});var n=o(1413),i=o(5987),r=o(1694),l=o.n(r),t=o(2791),d=o(162),s=o(6543),c=o(7472),m=o(184),u=["bsPrefix","className","variant","as"],p=t.forwardRef((function(e,a){var o=e.bsPrefix,r=e.className,t=e.variant,s=e.as,c=void 0===s?"img":s,p=(0,i.Z)(e,u),f=(0,d.vE)(o,"card-img");return(0,m.jsx)(c,(0,n.Z)({ref:a,className:l()(t?"".concat(f,"-").concat(t):f,r)},p))}));p.displayName="CardImg";var f=p,v=o(6040),b=["bsPrefix","className","as"],g=t.forwardRef((function(e,a){var o=e.bsPrefix,r=e.className,s=e.as,c=void 0===s?"div":s,u=(0,i.Z)(e,b),p=(0,d.vE)(o,"card-header"),f=(0,t.useMemo)((function(){return{cardHeaderBsPrefix:p}}),[p]);return(0,m.jsx)(v.Z.Provider,{value:f,children:(0,m.jsx)(c,(0,n.Z)((0,n.Z)({ref:a},u),{},{className:l()(r,p)}))})}));g.displayName="CardHeader";var k=g,x=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,c.Z)("h5"),D=(0,c.Z)("h6"),C=(0,s.Z)("card-body"),N=(0,s.Z)("card-title",{Component:h}),P=(0,s.Z)("card-subtitle",{Component:D}),Z=(0,s.Z)("card-link",{Component:"a"}),y=(0,s.Z)("card-text",{Component:"p"}),V=(0,s.Z)("card-footer"),F=(0,s.Z)("card-img-overlay"),j=t.forwardRef((function(e,a){var o=e.bsPrefix,r=e.className,t=e.bg,s=e.text,c=e.border,u=e.body,p=e.children,f=e.as,v=void 0===f?"div":f,b=(0,i.Z)(e,x),g=(0,d.vE)(o,"card");return(0,m.jsx)(v,(0,n.Z)((0,n.Z)({ref:a},b),{},{className:l()(r,g,t&&"bg-".concat(t),s&&"text-".concat(s),c&&"border-".concat(c)),children:u?(0,m.jsx)(C,{children:p}):p}))}));j.displayName="Card",j.defaultProps={body:!1};var O=Object.assign(j,{Img:f,Title:N,Subtitle:P,Body:C,Link:Z,Text:y,Header:k,Footer:V,ImgOverlay:F})},2677:function(e,a,o){var n=o(885),i=o(1413),r=o(5987),l=o(1694),t=o.n(l),d=o(2791),s=o(162),c=o(184),m=["as","bsPrefix","className"],u=["className"];var p=d.forwardRef((function(e,a){var o=function(e){var a=e.as,o=e.bsPrefix,n=e.className,l=(0,r.Z)(e,m);o=(0,s.vE)(o,"col");var d=(0,s.pi)(),c=(0,s.zG)(),u=[],p=[];return d.forEach((function(e){var a,n,i,r=l[e];delete l[e],"object"===typeof r&&null!=r?(a=r.span,n=r.offset,i=r.order):a=r;var t=e!==c?"-".concat(e):"";a&&u.push(!0===a?"".concat(o).concat(t):"".concat(o).concat(t,"-").concat(a)),null!=i&&p.push("order".concat(t,"-").concat(i)),null!=n&&p.push("offset".concat(t,"-").concat(n))})),[(0,i.Z)((0,i.Z)({},l),{},{className:t().apply(void 0,[n].concat(u,p))}),{as:a,bsPrefix:o,spans:u}]}(e),l=(0,n.Z)(o,2),d=l[0],p=d.className,f=(0,r.Z)(d,u),v=l[1],b=v.as,g=void 0===b?"div":b,k=v.bsPrefix,x=v.spans;return(0,c.jsx)(g,(0,i.Z)((0,i.Z)({},f),{},{ref:a,className:t()(p,!x.length&&k)}))}));p.displayName="Col",a.Z=p},7022:function(e,a,o){var n=o(1413),i=o(5987),r=o(1694),l=o.n(r),t=o(2791),d=o(162),s=o(184),c=["bsPrefix","fluid","as","className"],m=t.forwardRef((function(e,a){var o=e.bsPrefix,r=e.fluid,t=e.as,m=void 0===t?"div":t,u=e.className,p=(0,i.Z)(e,c),f=(0,d.vE)(o,"container"),v="string"===typeof r?"-".concat(r):"-fluid";return(0,s.jsx)(m,(0,n.Z)((0,n.Z)({ref:a},p),{},{className:l()(u,r?"".concat(f).concat(v):f)}))}));m.displayName="Container",m.defaultProps={fluid:!1},a.Z=m},1701:function(e,a,o){o.d(a,{Ed:function(){return r},UI:function(){return i},XW:function(){return l}});var n=o(2791);function i(e,a){var o=0;return n.Children.map(e,(function(e){return n.isValidElement(e)?a(e,o++):e}))}function r(e,a){var o=0;n.Children.forEach(e,(function(e){n.isValidElement(e)&&a(e,o++)}))}function l(e,a){return n.Children.toArray(e).some((function(e){return n.isValidElement(e)&&e.type===a}))}},9743:function(e,a,o){var n=o(1413),i=o(5987),r=o(1694),l=o.n(r),t=o(2791),d=o(162),s=o(184),c=["bsPrefix","className","as"],m=t.forwardRef((function(e,a){var o=e.bsPrefix,r=e.className,t=e.as,m=void 0===t?"div":t,u=(0,i.Z)(e,c),p=(0,d.vE)(o,"row"),f=(0,d.pi)(),v=(0,d.zG)(),b="".concat(p,"-cols"),g=[];return f.forEach((function(e){var a,o=u[e];delete u[e],a=null!=o&&"object"===typeof o?o.cols:o;var n=e!==v?"-".concat(e):"";null!=a&&g.push("".concat(b).concat(n,"-").concat(a))})),(0,s.jsx)(m,(0,n.Z)((0,n.Z)({ref:a},u),{},{className:l().apply(void 0,[r,p].concat(g))}))}));m.displayName="Row",a.Z=m},2391:function(e){var a=function(){};e.exports=a}}]);
//# sourceMappingURL=944.28a73284.chunk.js.map