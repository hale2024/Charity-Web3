import{C as m,m as t,n as s,A as u,o as l,au as g,p as W,q as v,r as w,s as C,w as y,G as f,v as T,x as b,y as R,av as S,z as E,F as A,H as F,T as B}from"./index.c6f9d9cb.js";import{S as M}from"./erc-721-standard-4576c134.browser.esm.dee0547c.js";class o extends M{constructor(r,e,n){let p=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,h=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new m(r,e,c,p);super(d,n,h),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"events",void 0),t(this,"sales",void 0),t(this,"platformFees",void 0),t(this,"royalties",void 0),t(this,"owner",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"mint",s(async a=>this.erc721.mint.prepare(a))),t(this,"mintTo",s(async(a,i)=>this.erc721.mintTo.prepare(a,i))),t(this,"mintBatch",s(async a=>this.erc721.mintBatch.prepare(a))),t(this,"mintBatchTo",s(async(a,i)=>this.erc721.mintBatchTo.prepare(a,i))),t(this,"burn",s(a=>this.erc721.burn.prepare(a))),this.abi=u.parse(c||[]),this.metadata=new l(this.contractWrapper,g,this.storage),this.app=new W(this.contractWrapper,this.metadata,this.storage),this.roles=new v(this.contractWrapper,o.contractRoles),this.royalties=new w(this.contractWrapper,this.metadata),this.sales=new C(this.contractWrapper),this.encoder=new y(this.contractWrapper),this.estimator=new f(this.contractWrapper),this.events=new T(this.contractWrapper),this.platformFees=new b(this.contractWrapper),this.interceptor=new R(this.contractWrapper),this.signature=new S(this.contractWrapper,this.storage),this.owner=new E(this.contractWrapper)}onNetworkUpdated(r){this.contractWrapper.updateSignerOrProvider(r)}getAddress(){return this.contractWrapper.readContract.address}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(A("transfer"),F)}async getMintTransaction(r,e){return this.erc721.getMintTransaction(r,e)}async prepare(r,e,n){return B.fromContractWrapper({contractWrapper:this.contractWrapper,method:r,args:e,overrides:n})}async call(r,e,n){return this.contractWrapper.call(r,e,n)}}t(o,"contractRoles",["admin","minter","transfer"]);export{o as NFTCollection};
