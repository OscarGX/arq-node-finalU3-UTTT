(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{oAjb:function(e,r,t){"use strict";t.r(r),t.d(r,"ProveedoresModule",(function(){return h}));var o=t("ofXK"),i=t("tyNb"),s=t("quSY"),b=t("fXoL"),n=t("UDAh"),a=t("/sur");function c(e,r){1&e&&(b.Kb(0,"div",9),b.Kb(1,"strong"),b.ac(2,"Cargando informaci\xf3n, espere... "),b.Ib(3,"i",10),b.Jb(),b.Jb())}function d(e,r){if(1&e){const e=b.Lb();b.Kb(0,"tr"),b.Kb(1,"td"),b.ac(2),b.Jb(),b.Kb(3,"td"),b.ac(4),b.Jb(),b.Kb(5,"td"),b.ac(6),b.Jb(),b.Kb(7,"td"),b.ac(8),b.Jb(),b.Kb(9,"td"),b.ac(10),b.Jb(),b.Kb(11,"td"),b.ac(12),b.Jb(),b.Kb(13,"td"),b.Kb(14,"button",15),b.Ib(15,"i",16),b.Jb(),b.Jb(),b.Kb(16,"td"),b.Kb(17,"button",17),b.Rb("click",(function(){b.Wb(e);const t=r.$implicit;return b.Tb(2).editarProveedor(t._id)})),b.Ib(18,"i",18),b.Jb(),b.Kb(19,"button",19),b.Rb("click",(function(){b.Wb(e);const t=r.$implicit;return b.Tb(2).eliminarProveedor(t._id,t.name)})),b.Ib(20,"i",20),b.Jb(),b.Jb(),b.Jb()}if(2&e){const e=r.$implicit;b.xb(2),b.bc(e.area),b.xb(2),b.cc(" ",e.name," "),b.xb(2),b.cc(" ",e.company," "),b.xb(2),b.cc(" ",e.address," "),b.xb(2),b.cc(" ",e.phoneNumber," "),b.xb(2),b.cc(" ",e.email," ")}}function l(e,r){if(1&e&&(b.Kb(0,"div",11),b.Kb(1,"table",12),b.Kb(2,"thead"),b.Kb(3,"tr"),b.Kb(4,"th",13),b.ac(5,"\xc1rea"),b.Jb(),b.Kb(6,"th",13),b.ac(7,"Nombre"),b.Jb(),b.Kb(8,"th",13),b.ac(9,"Empresa"),b.Jb(),b.Kb(10,"th",13),b.ac(11,"Direcci\xf3n"),b.Jb(),b.Kb(12,"th",13),b.ac(13,"Tel\xe9fono"),b.Jb(),b.Kb(14,"th",13),b.ac(15,"Email"),b.Jb(),b.Kb(16,"th",13),b.ac(17,"Cotizar producto"),b.Jb(),b.Kb(18,"th",13),b.ac(19,"Acciones"),b.Jb(),b.Jb(),b.Jb(),b.Kb(20,"tbody"),b.Zb(21,d,21,6,"tr",14),b.Jb(),b.Jb(),b.Jb()),2&e){const e=b.Tb();b.xb(21),b.Ub("ngForOf",e.proveedores)}}const p=[{path:"",component:(()=>{class e{constructor(e,r,t){this.ps=e,this.swas=r,this.router=t,this.proveedores=[],this.isLoading=!0,this.proveedoresSubscription$=new s.a,this.proveedoresSubscription$.add(this.ps.getProveedores().subscribe(e=>{console.log(e),this.proveedores=e,this.isLoading=!(this.proveedores.length>0)}))}ngOnInit(){}eliminarProveedor(e,r){this.swas.showConfirmDialog(`\xbfEst\xe1 seguro de eliminar a ${r}?`,"Esta acci\xf3n no se puede deshacer.","warning","Si, eliminar").then(r=>{r.isConfirmed&&(this.swas.showLoading("Eliminando...","Por favor, espere mientras se elimina el registro."),this.deleteProvider(e))})}deleteProvider(e){this.proveedoresSubscription$.add(this.ps.deleteProveedor(e).subscribe(e=>{this.swas.hideLoading(),e.ok?this.swas.showGenericAlert("Nice",e.message,"success"):e.error?this.swas.showGenericAlert("Error","Hubo un error al eliminar el registro, verifica los datos.","error"):this.swas.showGenericAlert("Bad Request",e.message,"error")}))}editarProveedor(e){this.router.navigateByUrl("/proveedor/"+e)}ngOnDestroy(){this.proveedoresSubscription$.unsubscribe()}}return e.\u0275fac=function(r){return new(r||e)(b.Hb(n.a),b.Hb(a.a),b.Hb(i.c))},e.\u0275cmp=b.Bb({type:e,selectors:[["app-proveedores"]],decls:13,vars:2,consts:[[1,"row","mt-3"],[1,"col-md-12"],[1,"text-center"],[1,"col-md-4"],["routerLink","/proveedor",1,"btn","btn-success"],[1,"fas","fa-plus-circle","ml-2"],[1,"row","mt-2"],["class","alert alert-info","role","alert",4,"ngIf"],["class","table-responsive",4,"ngIf"],["role","alert",1,"alert","alert-info"],[1,"fas","fa-spinner","fa-spin","ml-2"],[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["type","button","data-toggle","modal","data-target","#exampleModal",1,"btn","btn-warning","cot"],[1,"fas","fa-plus"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"far","fa-edit"],["type","button",1,"btn","btn-danger","ml-2",3,"click"],[1,"far","fa-trash-alt"]],template:function(e,r){1&e&&(b.Kb(0,"div",0),b.Kb(1,"div",1),b.Kb(2,"h1",2),b.ac(3,"Proveedores"),b.Jb(),b.Jb(),b.Jb(),b.Kb(4,"div",0),b.Kb(5,"div",3),b.Kb(6,"a",4),b.ac(7,"Nuevo proveedor"),b.Ib(8,"i",5),b.Jb(),b.Jb(),b.Jb(),b.Kb(9,"div",6),b.Kb(10,"div",1),b.Zb(11,c,4,0,"div",7),b.Zb(12,l,22,1,"div",8),b.Jb(),b.Jb()),2&e&&(b.xb(11),b.Ub("ngIf",r.isLoading),b.xb(1),b.Ub("ngIf",!r.isLoading))},directives:[i.d,o.i,o.h],styles:[""]}),e})()}];let u=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(r){return new(r||e)},imports:[[i.e.forChild(p)],i.e]}),e})(),h=(()=>{class e{}return e.\u0275mod=b.Fb({type:e}),e.\u0275inj=b.Eb({factory:function(r){return new(r||e)},imports:[[o.b,u,i.e]]}),e})()}}]);