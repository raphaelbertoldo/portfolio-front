"use strict";(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[443],{334:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about white--text"},[s("h1",[e._v(" This is an about page UsersFilter: "+e._s(e.UsersFilter)+" listComp:"+e._s(e.listComp)+" ")]),s("div",{staticClass:"white"},[s("v-text-field",{model:{value:e.searchField,callback:function(t){e.searchField=t},expression:"searchField"}}),s("v-btn",{attrs:{color:"indigo"},on:{click:function(t){return e.handdleFindUser()}}},[e._v("BUSCAR")])],1)])},l=[],r=s(336),n={computed:{listComp(){return this.handdleFindUser()}},methods:{handdleFindUser(){if(this.searchField){const e=r.h.get(`defaults/querys?name=${this.searchField}`).then((e=>this.UsersFilter=e.data)).catch((e=>{console.log(e)}));return e}return this.searchField?r.h.get("defaults"):r.h.get("defaults").then((e=>this.UsersFilter=e.data)).catch((e=>{console.log(e)}))}},mouted(){this.handdleFindUser()},data(){return{searchField:"",UsersFilter:[]}}},a=n,d=s(1001),h=s(3453),o=s.n(h),c=s(3150),u=s(5978),F=(0,d.Z)(a,i,l,!1,null,null,null),f=F.exports;o()(F,{VBtn:c.Z,VTextField:u.Z})}}]);
//# sourceMappingURL=about.db4e7deb.js.map