"use strict";(self.webpackChunklastmile_docs=self.webpackChunklastmile_docs||[]).push([[5054],{11678:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var t=s(74848),a=s(28453),n=(s(6050),s(60674)),r=s.n(n),o=(s(23397),s(51107));s(19365);const l={id:"createfinetunejobrequest",title:"CreateFineTuneJobRequest",description:"Create a new Fine Tune Job",sidebar_label:"CreateFineTuneJobRequest",hide_title:!0,schema:!0,custom_edit_url:null},c=void 0,d={id:"api/schemas/createfinetunejobrequest",title:"CreateFineTuneJobRequest",description:"Create a new Fine Tune Job",source:"@site/docs/api/schemas/createfinetunejobrequest.schema.mdx",sourceDirName:"api/schemas",slug:"/api/schemas/createfinetunejobrequest",permalink:"/api/schemas/createfinetunejobrequest",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"createfinetunejobrequest",title:"CreateFineTuneJobRequest",description:"Create a new Fine Tune Job",sidebar_label:"CreateFineTuneJobRequest",hide_title:!0,schema:!0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"GetMetricResponse",permalink:"/api/schemas/getmetricresponse"},next:{title:"FineTuneJobConfig",permalink:"/api/schemas/finetunejobconfig"}},u={},m=[];function p(e){const i={p:"p",...(0,a.R)(),...e.components},{Details:s}=i;return s||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.default,{as:"h1",className:"openapi__heading",children:"CreateFineTuneJobRequest"}),"\n",(0,t.jsx)(i.p,{children:"Create a new Fine Tune Job\nInitialized with the provided configuration parameters."}),"\n",(0,t.jsx)("ul",{children:(0,t.jsx)(r(),{collapsible:!0,className:"schemaItem",children:(0,t.jsxs)(s,{style:{},className:"openapi-markdown__details",children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsxs)("span",{className:"openapi-schema__container",children:[(0,t.jsx)("strong",{className:"openapi-schema__property",children:(0,t.jsx)(i.p,{children:"fineTuneJobConfig"})}),(0,t.jsx)("span",{className:"openapi-schema__name",children:(0,t.jsx)(i.p,{children:"object"})}),(0,t.jsx)("span",{className:"openapi-schema__divider"}),(0,t.jsx)("span",{className:"openapi-schema__required",children:(0,t.jsx)(i.p,{children:"required"})})]})}),(0,t.jsxs)("div",{style:{marginLeft:"1rem"},children:[(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem"},children:(0,t.jsx)(i.p,{children:"Partial configuration with parameters for the fine-tune job."})}),(0,t.jsx)(r(),{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional name for the job."}}),(0,t.jsx)(r(),{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"Optional description for the job."}}),(0,t.jsx)(r(),{collapsible:!1,name:"baselineModelId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The ID for the model used as the starting point for training."}}),(0,t.jsx)(r(),{collapsible:!1,name:"trainDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for training, with splits baked in or to be\n derived dynamically"}}),(0,t.jsx)(r(),{collapsible:!1,name:"testDatasetId",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",description:"The dataset to use for an unbiased evaluation of the model"}}),(0,t.jsx)(r(),{collapsible:!1,name:"selectedColumns",required:!0,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",description:"Set of columns to be used in fine-tuning.\n Supported columns: input, output, ground_truth\n For example, a task similar to summarization might need output and\n ground_truth."}}})]})]})})})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}}}]);