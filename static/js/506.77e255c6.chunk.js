"use strict";(self.webpackChunkapp_react=self.webpackChunkapp_react||[]).push([[506],{5133:function(A,a,e){e.d(a,{Z:function(){return d}});var n=e(2677),s=e(9140),o=e(1087),r=e(885),c=e(2791),i=e(184),t=function(A){var a=A.placeholderSrc,e=A.src,n=A.altsrc,s=(0,c.useState)(a||e),o=(0,r.Z)(s,2),t=o[0],d=o[1];(0,c.useEffect)((function(){var A=new Image;A.src=e,A.onload=function(){d(e)}}),[e]);var l=a&&t===a?"loading":"loaded";return(0,i.jsx)("img",{src:t,alt:n||"",className:"image ".concat(l)})};var d=function(A){var a=A.nombre,e=A.portada;return(0,i.jsx)(n.Z,{className:"py-2",xs:"6",sm:"4",md:"3",lg:"3",xl:"2",children:(0,i.jsx)(s.Z,{className:"bg-secondary border border-1 border-secondary",children:(0,i.jsxs)(o.rU,{className:"cont-imagen link",to:a,children:[(0,i.jsx)(t,{className:"imagen",src:e,placeholderSrc:"data:image/gif;base64,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",altsrc:a}),(0,i.jsx)(s.Z.Title,{className:"px-1 text-center text-white",children:a})]})})})}},1917:function(A,a,e){e.r(a);var n=e(7022),s=e(9743),o=e(5133),r=e(9370),c=e(184);a.default=function(){return(0,c.jsxs)("div",{className:"artistico-1",children:[(0,c.jsx)("h1",{className:"encabezado text-center",children:"Linovels - Cuentos"}),(0,c.jsx)(n.Z,{fluid:!0,children:(0,c.jsx)(s.Z,{children:r.Z&&r.Z.map((function(A,a){return(0,c.jsx)(o.Z,{indice:a,nombre:A.cuento,portada:A.portada},a)}))})})]})}},9370:function(A,a,e){e.d(a,{Z:function(){return s}});var n={cuentos_Tradicionales:{cuentos_Tradicionales1:e.p+"static/media/cuentos-infantiles.ceb74068bbc5987c97e2.pdf"},cuentos_Tradicionales_Portada:{cuentos_Tradicionales_Portada1:e.p+"static/media/cuentos-infantiles.dae154e8df6234075e21.png"}},s=[{cuento:"Cuentos tradicionanes de japon",portada:n.cuentos_Tradicionales_Portada.cuentos_Tradicionales_Portada1,sinopsis:'En un esfuerzo conjunto, la Asociaci\xf3n Internacional de Hyogo (Hyogo Ken Kokusai\n        Koryu Kyoka) y la Comunidad Latina Hyogo (CLH), acaban de publicar el libro\n        "Cuentos Tradicionales de Jap\xf3n\u201d, material de distribuci\xf3n gratuita para los\n        ni\xf1os hispanohablantes residentes en la prefectura de Hyogo. La propuesta\n        de confeccionar el material fue hecha por Comunidad Latina Hyogo con la finalidad\n        de que los padres hispanohablantes puedan aprender un poco m\xe1s de la cultura\n        japonesa a trav\xe9s de estos cuentos y que sus hijos puedan reforzar la lengua&nbsp;materna&nbsp;a trav\xe9s de una lectura compartida que contribuya a afianzar la\n        comunicaci\xf3n padre-hijo; mientras que la financiaci\xf3n estuvo a cargo de la\n        Asociaci\xf3n Internacional de Hyogo.\n        La confecci\xf3n\n        del material tard\xf3 7 meses, el proceso de selecci\xf3n de los cuentos y la&nbsp; edici\xf3n y traducci\xf3n de los mismos estuvo a\n        cargo de CLH; mientras que las ilustraciones fueron hechas por dibujantes\n        japoneses. El texto contiene 4 de los cuentos japoneses m\xe1s tradicionales en\n        idioma japon\xe9s y espa\xf1ol e incluye un cuestionario de preguntas al final de\n        cada historia para ayudar a reforzar el aprendizaje.',link:n.cuentos_Tradicionales.cuentos_Tradicionales1}]},9140:function(A,a,e){e.d(a,{Z:function(){return Q}});var n=e(1413),s=e(5987),o=e(1694),r=e.n(o),c=e(2791),i=e(162),t=e(6543),d=e(7472),l=e(184),u=["bsPrefix","className","variant","as"],f=c.forwardRef((function(A,a){var e=A.bsPrefix,o=A.className,c=A.variant,t=A.as,d=void 0===t?"img":t,f=(0,s.Z)(A,u),p=(0,i.vE)(e,"card-img");return(0,l.jsx)(d,(0,n.Z)({ref:a,className:r()(c?"".concat(p,"-").concat(c):p,o)},f))}));f.displayName="CardImg";var p=f,m=e(6040),v=["bsPrefix","className","as"],x=c.forwardRef((function(A,a){var e=A.bsPrefix,o=A.className,t=A.as,d=void 0===t?"div":t,u=(0,s.Z)(A,v),f=(0,i.vE)(e,"card-header"),p=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,l.jsx)(m.Z.Provider,{value:p,children:(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:a},u),{},{className:r()(o,f)}))})}));x.displayName="CardHeader";var g=x,C=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,d.Z)("h5"),b=(0,d.Z)("h6"),Z=(0,t.Z)("card-body"),j=(0,t.Z)("card-title",{Component:h}),N=(0,t.Z)("card-subtitle",{Component:b}),y=(0,t.Z)("card-link",{Component:"a"}),P=(0,t.Z)("card-text",{Component:"p"}),z=(0,t.Z)("card-footer"),w=(0,t.Z)("card-img-overlay"),L=c.forwardRef((function(A,a){var e=A.bsPrefix,o=A.className,c=A.bg,t=A.text,d=A.border,u=A.body,f=A.children,p=A.as,m=void 0===p?"div":p,v=(0,s.Z)(A,C),x=(0,i.vE)(e,"card");return(0,l.jsx)(m,(0,n.Z)((0,n.Z)({ref:a},v),{},{className:r()(o,x,c&&"bg-".concat(c),t&&"text-".concat(t),d&&"border-".concat(d)),children:u?(0,l.jsx)(Z,{children:f}):f}))}));L.displayName="Card",L.defaultProps={body:!1};var Q=Object.assign(L,{Img:p,Title:j,Subtitle:N,Body:Z,Link:y,Text:P,Header:g,Footer:z,ImgOverlay:w})},2677:function(A,a,e){var n=e(885),s=e(1413),o=e(5987),r=e(1694),c=e.n(r),i=e(2791),t=e(162),d=e(184),l=["as","bsPrefix","className"],u=["className"];var f=i.forwardRef((function(A,a){var e=function(A){var a=A.as,e=A.bsPrefix,n=A.className,r=(0,o.Z)(A,l);e=(0,t.vE)(e,"col");var i=(0,t.pi)(),d=(0,t.zG)(),u=[],f=[];return i.forEach((function(A){var a,n,s,o=r[A];delete r[A],"object"===typeof o&&null!=o?(a=o.span,n=o.offset,s=o.order):a=o;var c=A!==d?"-".concat(A):"";a&&u.push(!0===a?"".concat(e).concat(c):"".concat(e).concat(c,"-").concat(a)),null!=s&&f.push("order".concat(c,"-").concat(s)),null!=n&&f.push("offset".concat(c,"-").concat(n))})),[(0,s.Z)((0,s.Z)({},r),{},{className:c().apply(void 0,[n].concat(u,f))}),{as:a,bsPrefix:e,spans:u}]}(A),r=(0,n.Z)(e,2),i=r[0],f=i.className,p=(0,o.Z)(i,u),m=r[1],v=m.as,x=void 0===v?"div":v,g=m.bsPrefix,C=m.spans;return(0,d.jsx)(x,(0,s.Z)((0,s.Z)({},p),{},{ref:a,className:c()(f,!C.length&&g)}))}));f.displayName="Col",a.Z=f},7022:function(A,a,e){var n=e(1413),s=e(5987),o=e(1694),r=e.n(o),c=e(2791),i=e(162),t=e(184),d=["bsPrefix","fluid","as","className"],l=c.forwardRef((function(A,a){var e=A.bsPrefix,o=A.fluid,c=A.as,l=void 0===c?"div":c,u=A.className,f=(0,s.Z)(A,d),p=(0,i.vE)(e,"container"),m="string"===typeof o?"-".concat(o):"-fluid";return(0,t.jsx)(l,(0,n.Z)((0,n.Z)({ref:a},f),{},{className:r()(u,o?"".concat(p).concat(m):p)}))}));l.displayName="Container",l.defaultProps={fluid:!1},a.Z=l},9743:function(A,a,e){var n=e(1413),s=e(5987),o=e(1694),r=e.n(o),c=e(2791),i=e(162),t=e(184),d=["bsPrefix","className","as"],l=c.forwardRef((function(A,a){var e=A.bsPrefix,o=A.className,c=A.as,l=void 0===c?"div":c,u=(0,s.Z)(A,d),f=(0,i.vE)(e,"row"),p=(0,i.pi)(),m=(0,i.zG)(),v="".concat(f,"-cols"),x=[];return p.forEach((function(A){var a,e=u[A];delete u[A],a=null!=e&&"object"===typeof e?e.cols:e;var n=A!==m?"-".concat(A):"";null!=a&&x.push("".concat(v).concat(n,"-").concat(a))})),(0,t.jsx)(l,(0,n.Z)((0,n.Z)({ref:a},u),{},{className:r().apply(void 0,[o,f].concat(x))}))}));l.displayName="Row",a.Z=l}}]);
//# sourceMappingURL=506.77e255c6.chunk.js.map