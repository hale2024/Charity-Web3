import{ai as s,aj as d,ak as g,al as u,C as l,m as t,A as m,o as f,ag as W,p as v,q as E,w as C,G as w,v as A,x as I,y as F,T as R,am as n,an as S,ao as T,ap as _}from"./index.dddf8e87.js";class i{get directListings(){return s(this.detectDirectListings(),d)}get englishAuctions(){return s(this.detectEnglishAuctions(),g)}get offers(){return s(this.detectOffers(),u)}get chainId(){return this._chainId}constructor(e,r,a){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,p=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new l(e,r,c,o);t(this,"abi",void 0),t(this,"contractWrapper",void 0),t(this,"storage",void 0),t(this,"encoder",void 0),t(this,"events",void 0),t(this,"estimator",void 0),t(this,"platformFees",void 0),t(this,"metadata",void 0),t(this,"app",void 0),t(this,"roles",void 0),t(this,"interceptor",void 0),t(this,"_chainId",void 0),this._chainId=p,this.abi=m.parse(c||[]),this.contractWrapper=h,this.storage=a,this.metadata=new f(this.contractWrapper,W,this.storage),this.app=new v(this.contractWrapper,this.metadata,this.storage),this.roles=new E(this.contractWrapper,i.contractRoles),this.encoder=new C(this.contractWrapper),this.estimator=new w(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new I(this.contractWrapper),this.interceptor=new F(this.contractWrapper)}onNetworkUpdated(e){this.contractWrapper.updateSignerOrProvider(e)}getAddress(){return this.contractWrapper.readContract.address}async prepare(e,r,a){return R.fromContractWrapper({contractWrapper:this.contractWrapper,method:e,args:r,overrides:a})}async call(e,r,a){return this.contractWrapper.call(e,r,a)}detectDirectListings(){if(n(this.contractWrapper,"DirectListings"))return new S(this.contractWrapper,this.storage)}detectEnglishAuctions(){if(n(this.contractWrapper,"EnglishAuctions"))return new T(this.contractWrapper,this.storage)}detectOffers(){if(n(this.contractWrapper,"Offers"))return new _(this.contractWrapper,this.storage)}}t(i,"contractRoles",["admin","lister","asset"]);export{i as MarketplaceV3};
