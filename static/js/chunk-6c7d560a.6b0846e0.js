(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6c7d560a"],{1154:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",[a("el-col",{attrs:{span:2}},[a("h2",[e._v("案件信息")])]),e._v(" "),a("el-col",{attrs:{span:22}},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline,size:"mini"}},[a("el-row",[a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"案由"}},[a("el-input",{attrs:{placeholder:"案由"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"嫌疑人"}},[a("el-input",{attrs:{placeholder:"嫌疑人"},model:{value:e.formInline.user,callback:function(t){e.$set(e.formInline,"user",t)},expression:"formInline.user"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:7}},[a("el-form-item",{attrs:{label:"审讯时间"}},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:4}},[a("el-form-item",{attrs:{label:"状态"}},[a("el-select",{attrs:{placeholder:"案件状态"},model:{value:e.formInline.region,callback:function(t){e.$set(e.formInline,"region",t)},expression:"formInline.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",[a("el-button",{attrs:{type:"primary",round:""},on:{click:e.onSubmit}},[a("i",{staticClass:"el-icon-search"}),e._v(" 查询")]),e._v(" "),a("el-button",{attrs:{type:"warning","native-type":"reset",round:""}},[a("i",{staticClass:"el-icon-delete-solid"}),e._v(" 清空")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.showCaseAddDialogMethod}},[a("i",{staticClass:"el-icon-plus"}),e._v(" 添加提审案件")])],1)],1)],1)],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"序号",width:"95"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"嫌疑人",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.title)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"案由"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.author))])]}}])}),e._v(" "),e._e(),e._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:"状态",width:"110",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e._f("statusFilter")(t.row.status.type)}},[e._v(e._s(t.row.status.text))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"问讯时间",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(t.row.display_time))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"关联文书",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.related_document))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-link",{attrs:{type:"warning",underline:!1},on:{click:e.showCaseConfDialogMethod}},[e._v("开始提审")]),e._v("\n           \n        "),a("el-link",{attrs:{type:"primary",underline:!1},on:{click:e.showCaseEditDialogMethod}},[e._v("查看详情")]),e._v(" "),a("el-link",{attrs:{type:"primary",underline:!1,href:"#/case/item"}},[e._v("已归档案件详情")])]}}])})],1),e._v(" "),a("br"),e._v(" "),a("div",{staticClass:"block",staticStyle:{float:"right"}},[a("el-pagination",{attrs:{"current-page":e.currentPage4,"page-sizes":[100,200,300,400],"page-size":100,layout:"total, sizes, prev, pager, next, jumper",total:20},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("EditCaseDialog",{ref:"child"})],1)},i=[],n=a("ad8f"),r=a("46f3"),o={components:{EditCaseDialog:r["a"]},filters:{statusFilter:function(e){var t={published:"success",draft:"gray",deleted:"danger"};return t[e]}},data:function(){return{list:null,listLoading:!0,formInline:{user:"",region:"",date1:"",date2:""},currentPage4:4,dialogFormVisible:!1,sizeForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""},tableData:[],pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},value1:"",value2:""}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(n["b"])().then((function(t){e.list=t.data.items,e.listLoading=!1}))},onSubmit:function(){console.log("submit!")},handleSizeChange:function(e){console.log("每页 ".concat(e," 条"))},handleCurrentChange:function(e){console.log("当前页: ".concat(e))},showCaseEditDialogMethod:function(){this.$refs.child.dialogTitle="编辑提审",this.$refs.child.dialogFormVisible=!0},showCaseConfDialogMethod:function(){this.$refs.child.dialogTitle="提审前确认信息",this.$refs.child.dialogFormVisible=!0,this.$refs.child.jumpLink="#/case/remote_review"},showCaseAddDialogMethod:function(){this.$refs.child.dialogTitle="添加提审",this.$refs.child.dialogFormVisible=!0}}},s=o,c=(a("272f"),a("2877")),m=Object(c["a"])(s,l,i,!1,null,"a8409c14",null);t["default"]=m.exports},"272f":function(e,t,a){"use strict";var l=a("dc5b"),i=a.n(l);i.a},"46f3":function(e,t,a){"use strict";var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:e.dialogTitle,visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-form",{attrs:{model:e.sizeForm,"label-position":e.labelPosition,"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"询问时间",required:""}},[a("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:11}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"选择日期"},model:{value:e.sizeForm.date1,callback:function(t){e.$set(e.sizeForm,"date1",t)},expression:"sizeForm.date1"}})],1),e._v(" "),a("el-col",{staticClass:"line",attrs:{span:2}},[e._v("-")]),e._v(" "),a("el-col",{attrs:{span:11}},[a("el-time-picker",{staticStyle:{width:"100%"},attrs:{placeholder:"选择时间"},model:{value:e.sizeForm.date2,callback:function(t){e.$set(e.sizeForm,"date2",t)},expression:"sizeForm.date2"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"询问地点",required:""}},[a("el-select",{attrs:{placeholder:"请选择询问地点"},model:{value:e.sizeForm.region,callback:function(t){e.$set(e.sizeForm,"region",t)},expression:"sizeForm.region"}},[a("el-option",{attrs:{label:"区域一",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"区域二",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"询问人1",required:""}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"询问人2"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"记录人"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1)],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("el-form",{attrs:{model:e.sizeForm,"label-position":e.labelPosition,"label-width":"80px",size:"mini"}},[a("el-form-item",{attrs:{label:"案由"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"嫌疑人"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"身份证"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"民族"}},[a("el-col",{staticStyle:{"padding-left":"0"},attrs:{span:10}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1),e._v(" "),a("el-col",{attrs:{span:4}},[e._v("\n            性别\n          ")]),e._v(" "),a("el-col",{attrs:{span:10}},[a("el-radio-group",{model:{value:e.sizeForm.resource,callback:function(t){e.$set(e.sizeForm,"resource",t)},expression:"sizeForm.resource"}},[a("el-radio",{attrs:{label:"男"}}),e._v(" "),a("el-radio",{attrs:{label:"女"}})],1)],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"年龄"}},[a("el-input",{model:{value:e.sizeForm.name,callback:function(t){e.$set(e.sizeForm,"name",t)},expression:"sizeForm.name"}})],1)],1)],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"grid-content bg-purple-dark"},[a("el-table",{staticStyle:{width:"100%","text-align":"center"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"date",label:"序号",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"名称",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"tempId",label:"操作",width:"180",align:"center"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio")],1)],1)],1)])],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),e._v(" "),""==e.jumpLink?a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")]):a("el-link",{attrs:{href:e.jumpLink}},[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("确 定")])],1)],1)],1)},i=[],n={data:function(){return{dialogFormVisible:!1,labelPosition:"right",sizeForm:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"男",desc:""},tableData:[{date:1,name:"审讯模板",tempId:1},{date:2,name:"笔录模板",tempId:2},{date:3,name:"盗抢模板",tempId:3}],dialogTitle:"",radio:"1",jumpLink:""}}},r=n,o=a("2877"),s=Object(o["a"])(r,l,i,!1,null,null,null);t["a"]=s.exports},ad8f:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"a",(function(){return n})),a.d(t,"d",(function(){return r})),a.d(t,"c",(function(){return o}));var l=a("b775");function i(e){return Object(l["a"])({url:"/vue-admin-template/table/list",method:"get",params:e})}function n(e){return Object(l["a"])({url:"/vue-admin-template/table/doc_list",method:"get",params:e})}function r(e){return Object(l["a"])({url:"/vue-admin-template/table/transcript_template_list",method:"get",params:e})}function o(e){return Object(l["a"])({url:"/vue-admin-template/table/phraseology_template_list",method:"get",params:e})}},dc5b:function(e,t,a){}}]);