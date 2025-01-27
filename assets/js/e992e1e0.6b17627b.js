"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[3001],{45180:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>m,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var i=a(74848),t=a(28453),n=(a(6050),a(60674)),r=a.n(n),l=(a(23397),a(51107));a(19365);const o={id:"dataset",title:"Dataset",description:"A Dataset in the most basic sense: metadata and ownership, but nothing tied",sidebar_label:"Dataset",hide_title:!0,schema:!0,custom_edit_url:null},m=void 0,c={id:"api/schemas/dataset",title:"Dataset",description:"A Dataset in the most basic sense: metadata and ownership, but nothing tied",source:"@site/docs/api/schemas/dataset.schema.mdx",sourceDirName:"api/schemas",slug:"/api/schemas/dataset",permalink:"/api/schemas/dataset",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"dataset",title:"Dataset",description:"A Dataset in the most basic sense: metadata and ownership, but nothing tied",sidebar_label:"Dataset",hide_title:!0,schema:!0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"CreateDatasetResponse",permalink:"/api/schemas/createdatasetresponse"},next:{title:"Timestamp",permalink:"/api/schemas/timestamp"}},d={},p=[];function _(e){const s={p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{as:"h1",className:"openapi__heading",children:"Dataset"}),"\n",(0,i.jsx)(s.p,{children:"A Dataset in the most basic sense: metadata and ownership, but nothing tied\nto its data."}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsx)(r(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the dataset."}}),(0,i.jsx)(r(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(r(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(r(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Human-readable name for the dataset, if one exists."}}),(0,i.jsx)(r(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Human-readable description of the dataset, if one exists."}}),(0,i.jsx)(r(),{collapsible:!1,name:"ownerUserId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the user who owns the dataset."}}),(0,i.jsx)(r(),{collapsible:!1,name:"numRows",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(r(),{collapsible:!1,name:"numCols",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(r(),{collapsible:!1,name:"initializationStatus",required:!0,schemaName:"JobStatus (string)",qualifierMessage:"**Possible values:** [`JOB_STATUS_UNSPECIFIED`, `JOB_STATUS_QUEUED`, `JOB_STATUS_RUNNING`, `JOB_STATUS_COMPLETED`, `JOB_STATUS_CANCELLED`, `JOB_STATUS_FAILED`]",schema:{type:"string",enum:["JOB_STATUS_UNSPECIFIED","JOB_STATUS_QUEUED","JOB_STATUS_RUNNING","JOB_STATUS_COMPLETED","JOB_STATUS_CANCELLED","JOB_STATUS_FAILED"],title:"JobStatus"}}),(0,i.jsx)(r(),{collapsible:!1,name:"initializationError",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(r(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"columns"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(r(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the dataset file."}}),(0,i.jsx)(r(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(r(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(r(),{collapsible:!1,name:"index",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer",description:"Index of the column within the dataset file."}}),(0,i.jsx)(r(),{collapsible:!1,name:"literalName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The literal name for the column."}}),(0,i.jsx)(r(),{collapsible:!1,name:"dtype",required:!1,schemaName:"DatasetColumnDType (string)",qualifierMessage:"**Possible values:** [`DATASET_COLUMN_D_TYPE_UNSPECIFIED`, `DATASET_COLUMN_D_TYPE_INT32`, `DATASET_COLUMN_D_TYPE_INT64`, `DATASET_COLUMN_D_TYPE_FLOAT32`, `DATASET_COLUMN_D_TYPE_FLOAT64`, `DATASET_COLUMN_D_TYPE_STRING`, `DATASET_COLUMN_D_TYPE_BYTES`, `DATASET_COLUMN_D_TYPE_ANY`]",schema:{type:"string",enum:["DATASET_COLUMN_D_TYPE_UNSPECIFIED","DATASET_COLUMN_D_TYPE_INT32","DATASET_COLUMN_D_TYPE_INT64","DATASET_COLUMN_D_TYPE_FLOAT32","DATASET_COLUMN_D_TYPE_FLOAT64","DATASET_COLUMN_D_TYPE_STRING","DATASET_COLUMN_D_TYPE_BYTES","DATASET_COLUMN_D_TYPE_ANY"],title:"DatasetColumnDType",description:"Datatypes for a column in a dataset file. We likely don't need everything\n here, but it's good to be explicit, for example to avoid unknowingly coercing\n int64 values into int32. Encoding for text is UTF_8 unless indicated\n otherwise."}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(r(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"labelState"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"The state of the latest labeling job for the dataset"})}),(0,i.jsx)(r(),{collapsible:!1,name:"labelingStatus",required:!0,schemaName:"JobStatus (string)",qualifierMessage:"**Possible values:** [`JOB_STATUS_UNSPECIFIED`, `JOB_STATUS_QUEUED`, `JOB_STATUS_RUNNING`, `JOB_STATUS_COMPLETED`, `JOB_STATUS_CANCELLED`, `JOB_STATUS_FAILED`]",schema:{type:"string",enum:["JOB_STATUS_UNSPECIFIED","JOB_STATUS_QUEUED","JOB_STATUS_RUNNING","JOB_STATUS_COMPLETED","JOB_STATUS_CANCELLED","JOB_STATUS_FAILED"],title:"JobStatus",description:"The status of the latest general pseudo-labeling job for the dataset"}}),(0,i.jsx)(r(),{collapsible:!1,name:"promptTemplate",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"aka user general instructions"}}),(0,i.jsx)(r(),{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"if the labeling status is error, this field may contain an error message"}})]})]})})]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(_,{...e})}):_(e)}}}]);