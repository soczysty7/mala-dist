!function(){function a(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}function e(a,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(a,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3ros":function(t,n,i){"use strict";i.r(n),i.d(n,"GalleryModule",(function(){return m}));var o,r,s,l=i("ofXK"),c=i("tyNb"),g=i("fXoL"),p=i("RfWv"),u=i("+vn2"),b=[{path:"",component:(o=function(){function t(e){a(this,t),this.viewState=e,this.isInitLoad=this.viewState.getIsInitialLoad(),this.images=[{image:"../../mala-dist/mala-dist/assets/gallery/ja1.jpg",thumbImage:"../../mala-dist/mala-dist/assets/gallery/ja1.jpg",alt:"nie mozna zaladowac obrazka",title:"prace na wysokosci"},{image:"../../mala-dist/mala-dist/assets/gallery/j1.jpg",thumbImage:"../../mala-dist/mala-dist/assets/gallery/j1.jpg",alt:"nie mozna zaladowac obrazka",title:"bloki"},{image:"../../mala-dist/mala-dist/assets/gallery/j2.jpg",thumbImage:"../../mala-dist/mala-dist/assets/gallery/j2.jpg",alt:"nie mozna zaladowac obrazka",title:"w powietrzu"},{image:"../../mala-dist/mala-dist/assets/gallery/p1.jpg",thumbImage:"../../mala-dist/mala-dist/assets/gallery/p1.jpg",alt:"nie mozna zaladowac obrazka",title:"na linie"}]}var n,i,o;return n=t,(i=[{key:"ngAfterViewInit",value:function(){this.isInitLoad?this.viewState.setInitialLoadComplete():450!==window.pageYOffset&&window.scroll(0,450)}}])&&e(n.prototype,i),o&&e(n,o),t}(),o.\u0275fac=function(a){return new(a||o)(g.Jb(p.a))},o.\u0275cmp=g.Db({type:o,selectors:[["app-gallery"]],decls:5,vars:2,consts:[[1,"gallery-background"],["fxLayout","column","fxLayoutAlign","space-between center","fxLayoutGap","30px",1,"gallery-card-container"],[3,"title","imageArray"]],template:function(a,e){1&a&&(g.Ob(0,"div",0),g.Ob(1,"div",1),g.Ob(2,"div"),g.Ob(3,"app-section-card",2),g.sc(4," Opis zlecenia 1 "),g.Nb(),g.Nb(),g.Nb(),g.Nb()),2&a&&(g.zb(3),g.bc("title","Galeria 1")("imageArray",e.images))},directives:[u.a],styles:[".gallery-background[_ngcontent-%COMP%]{top:500px;display:flex;justify-content:center;align-items:center;background-image:url(/mala-dist/assets/page-backgrounds/about.jpg);background-position:40% top;height:2880px}.gallery-card-container[_ngcontent-%COMP%]{height:100%}"]}),o)}],f=((r=function e(){a(this,e)}).\u0275mod=g.Hb({type:r}),r.\u0275inj=g.Gb({factory:function(a){return new(a||r)},imports:[[c.b.forChild(b)],c.b]}),r),y=i("sITn"),m=((s=function e(){a(this,e)}).\u0275mod=g.Hb({type:s}),s.\u0275inj=g.Gb({factory:function(a){return new(a||s)},imports:[[l.b,f,y.a]]}),s)}}])}();