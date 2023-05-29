import{m as t,H as d,B as u,a0 as f,C as W,n as c,T as g,O as m,A as v,o as w,aO as y,p as C,q as T,s as b,v as E,w as A,G as B,x as R,y as S,aP as F,F as O}from"./index.c8c81cbb.js";import{S as P}from"./erc-20-standard-ed827bca.browser.esm.a6e68eb7.js";class V{constructor(e,s){t(this,"events",void 0),t(this,"contractWrapper",void 0),this.contractWrapper=e,this.events=s}async getAllHolderBalances(){const s=(await this.events.getEvents("Transfer")).map(a=>a.data),r={};return s.forEach(a=>{const o=a==null?void 0:a.from,i=a==null?void 0:a.to,p=a==null?void 0:a.value;o!==d&&(o in r||(r[o]=u.from(0)),r[o]=r[o].sub(p)),i!==d&&(i in r||(r[i]=u.from(0)),r[i]=r[i].add(p))}),Promise.all(Object.keys(r).map(async a=>({holder:a,balance:await f(this.contractWrapper.getProvider(),this.contractWrapper.readContract.address,r[a])})))}}class l extends P{constructor(e,s,r){let a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0,p=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(e,s,o,a);super(p,r,i),t(this,"abi",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"encoder",void 0),t(this,"estimator",void 0),t(this,"history",void 0),t(this,"events",void 0),t(this,"platformFees",void 0),t(this,"sales",void 0),t(this,"signature",void 0),t(this,"interceptor",void 0),t(this,"mint",c(async n=>this.erc20.mint.prepare(n))),t(this,"mintTo",c(async(n,h)=>this.erc20.mintTo.prepare(n,h))),t(this,"mintBatchTo",c(async n=>this.erc20.mintBatchTo.prepare(n))),t(this,"delegateTo",c(async n=>g.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await m(n)]}))),t(this,"burn",c(n=>this.erc20.burn.prepare(n))),t(this,"burnFrom",c(async(n,h)=>this.erc20.burnFrom.prepare(n,h))),this.abi=v.parse(o||[]),this.metadata=new w(this.contractWrapper,y,this.storage),this.app=new C(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,l.contractRoles),this.sales=new b(this.contractWrapper),this.events=new E(this.contractWrapper),this.history=new V(this.contractWrapper,this.events),this.encoder=new A(this.contractWrapper),this.estimator=new B(this.contractWrapper),this.platformFees=new R(this.contractWrapper),this.interceptor=new S(this.contractWrapper),this.signature=new F(this.contractWrapper,this.roles)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(e){return await this.erc20.getValue(await this.contractWrapper.readContract.getVotes(e))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(e){return await this.contractWrapper.readContract.delegates(await m(e))}async isTransferRestricted(){return!await this.contractWrapper.readContract.hasRole(O("transfer"),d)}async getMintTransaction(e,s){return this.erc20.getMintTransaction(e,s)}async prepare(e,s,r){return g.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:s,overrides:r})}async call(e,s,r){return this.contractWrapper.call(e,s,r)}}t(l,"contractRoles",["admin","minter","transfer"]);export{l as Token};
