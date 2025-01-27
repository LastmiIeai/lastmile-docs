"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[1971],{33554:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>d,contentTitle:()=>m,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var i=a(74848),r=a(28453),n=(a(6050),a(60674)),t=a.n(n),l=(a(23397),a(51107));a(19365);const c={id:"getfinetunejobresponse",title:"GetFineTuneJobResponse",description:"",sidebar_label:"GetFineTuneJobResponse",hide_title:!0,schema:!0,custom_edit_url:null},m=void 0,o={id:"api/schemas/getfinetunejobresponse",title:"GetFineTuneJobResponse",description:"",source:"@site/docs/api/schemas/getfinetunejobresponse.schema.mdx",sourceDirName:"api/schemas",slug:"/api/schemas/getfinetunejobresponse",permalink:"/api/schemas/getfinetunejobresponse",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"getfinetunejobresponse",title:"GetFineTuneJobResponse",description:"",sidebar_label:"GetFineTuneJobResponse",hide_title:!0,schema:!0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"GetFineTuneJobRequest",permalink:"/api/schemas/getfinetunejobrequest"},next:{title:"FineTuneJob",permalink:"/api/schemas/finetunejob"}},d={},p=[];function h(e){const s={p:"p",...(0,r.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.default,{as:"h1",className:"openapi__heading",children:"GetFineTuneJobResponse"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsx)(t(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"job"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(t(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID of the fine tune job."}}),(0,i.jsx)(t(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(t(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(t(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Name corresponding to the fine tuned model derived from this job"}}),(0,i.jsx)(t(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(t(),{collapsible:!1,name:"status",required:!0,schemaName:"JobStatus (string)",qualifierMessage:"**Possible values:** [`JOB_STATUS_UNSPECIFIED`, `JOB_STATUS_QUEUED`, `JOB_STATUS_RUNNING`, `JOB_STATUS_COMPLETED`, `JOB_STATUS_CANCELLED`, `JOB_STATUS_FAILED`]",schema:{type:"string",enum:["JOB_STATUS_UNSPECIFIED","JOB_STATUS_QUEUED","JOB_STATUS_RUNNING","JOB_STATUS_COMPLETED","JOB_STATUS_CANCELLED","JOB_STATUS_FAILED"],title:"JobStatus"}}),(0,i.jsx)(t(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"config"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)(t(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional name for the job."}}),(0,i.jsx)(t(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional description for the job."}}),(0,i.jsx)(t(),{collapsible:!1,name:"baselineModelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID for the model used as the starting point for training."}}),(0,i.jsx)(t(),{collapsible:!1,name:"trainDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for training, with splits baked in or to be\n derived dynamically"}}),(0,i.jsx)(t(),{collapsible:!1,name:"testDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for an unbiased evaluation of the model"}}),(0,i.jsx)(t(),{collapsible:!1,name:"selectedColumns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",description:"Set of columns to be used in fine-tuning.\n Supported columns: input, output, ground_truth\n For example, a task similar to summarization might need output and\n ground_truth."}}})]})]})}),(0,i.jsx)(t(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"result"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Result of a Fine-Tuning Job."})}),(0,i.jsx)(t(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"progress"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object[]"})}),(0,i.jsx)("span",{className:"openapi-schema__divider"}),(0,i.jsx)("span",{className:"openapi-schema__required",children:(0,i.jsx)(s.p,{children:"required"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"Array ["})})}),(0,i.jsx)(t(),{collapsible:!1,name:"jobId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(t(),{collapsible:!1,name:"epoch",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}}),(0,i.jsx)(t(),{collapsible:!1,name:"loss",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(t(),{collapsible:!1,name:"accuracy",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(t(),{collapsible:!1,name:"progress",required:!0,schemaName:"number",qualifierMessage:void 0,schema:{type:"number"}}),(0,i.jsx)(t(),{collapsible:!1,name:"timestamp",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)("li",{children:(0,i.jsx)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"},children:(0,i.jsx)(s.p,{children:"]"})})})]})]})}),(0,i.jsx)(t(),{collapsible:!0,className:"schemaItem",children:(0,i.jsxs)(a,{style:{},className:"openapi-markdown__details",children:[(0,i.jsx)("summary",{style:{},children:(0,i.jsxs)("span",{className:"openapi-schema__container",children:[(0,i.jsx)("strong",{className:"openapi-schema__property",children:(0,i.jsx)(s.p,{children:"trainedModelFile"})}),(0,i.jsx)("span",{className:"openapi-schema__name",children:(0,i.jsx)(s.p,{children:"object"})})]})}),(0,i.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,i.jsx)(s.p,{children:"The trained model, if it was created successfully."})}),(0,i.jsx)(t(),{collapsible:!1,name:"id",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(t(),{collapsible:!1,name:"createdAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(t(),{collapsible:!1,name:"updatedAt",required:!0,schemaName:"date-time",qualifierMessage:void 0,schema:{type:"string",format:"date-time"}}),(0,i.jsx)(t(),{collapsible:!1,name:"modelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(t(),{collapsible:!1,name:"contentMd5Hash",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"}}),(0,i.jsx)(t(),{collapsible:!1,name:"fileSizeBytes",required:!0,schemaName:"integer",qualifierMessage:void 0,schema:{type:"integer"}})]})]})}),(0,i.jsx)(t(),{collapsible:!1,name:"resultUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Url to view the full results and progress (e.g. external W&B url)"}})]})]})})]})]})})})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}}}]);