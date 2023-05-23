import{E as u,_ as e,f as d}from"./index.c6f9d9cb.js";class p extends u{constructor(r){let{chains:t=d,options:o}=r;super(),e(this,"id",void 0),e(this,"name",void 0),e(this,"chains",void 0),e(this,"options",void 0),e(this,"ready",void 0),this.chains=t,this.options=o}getBlockExplorerUrls(r){var o,n;const t=(n=(o=r.explorers)==null?void 0:o.map(i=>i.url))!=null?n:[];return t.length>0?t:void 0}isChainUnsupported(r){return!this.chains.some(t=>t.chainId===r)}updateChains(r){this.chains=r}}class a extends Error{constructor(r,t){const{cause:o,code:n,data:i}=t;if(!Number.isInteger(n))throw new Error('"code" must be an integer.');if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string.');super(r),e(this,"cause",void 0),e(this,"code",void 0),e(this,"data",void 0),this.cause=o,this.code=n,this.data=i}}class c extends a{constructor(r,t){const{cause:o,code:n,data:i}=t;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(r,{cause:o,code:n,data:i})}}class l extends Error{constructor(){super(...arguments),e(this,"name","AddChainError"),e(this,"message","Error adding chain")}}class m extends Error{constructor(r){let{chainId:t,connectorId:o}=r;super(`Chain "${t}" not configured for connector "${o}".`),e(this,"name","ChainNotConfigured")}}class E extends Error{constructor(){super(...arguments),e(this,"name","ConnectorNotFoundError"),e(this,"message","Connector not found")}}class f extends a{constructor(r){super("Resource unavailable",{cause:r,code:-32002}),e(this,"name","ResourceUnavailable")}}class g extends c{constructor(r){super("Error switching chain",{cause:r,code:4902}),e(this,"name","SwitchChainError")}}class C extends c{constructor(r){super("User rejected request",{cause:r,code:4001}),e(this,"name","UserRejectedRequestError")}}function x(s){return typeof s=="string"?Number.parseInt(s,s.trim().substring(0,2)==="0x"?16:10):typeof s=="bigint"?Number(s):s}export{l as A,p as C,f as R,g as S,C as U,E as a,m as b,x as n};
