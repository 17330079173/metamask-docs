"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1378],{34928:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),o=t(28453);const s={description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5.5},a="Initial Connections",c={id:"features/initial-connections",title:"Initial Connections",description:"Authorize specific websites to automatically connect to a Snap.",source:"@site/snaps/features/initial-connections.md",sourceDirName:"features",slug:"/features/initial-connections",permalink:"/zs/initialconnections-feature/snaps/features/initial-connections",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/features/initial-connections.md",tags:[],version:"current",sidebarPosition:5.5,frontMatter:{description:"Authorize specific websites to automatically connect to a Snap.",sidebar_position:5.5},sidebar:"snapsSidebar",previous:{title:"Data storage",permalink:"/zs/initialconnections-feature/snaps/features/data-storage"},next:{title:"Lifecycle hooks",permalink:"/zs/initialconnections-feature/snaps/features/lifecycle-hooks"}},r={},l=[{value:"Relationship to <code>endowment:rpc</code>",id:"relationship-to-endowmentrpc",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"initial-connections",children:"Initial Connections"}),"\n",(0,i.jsxs)(n.p,{children:["You can authorize specific websites or Snaps to automatically connect, skipping the need for users to manually confirm a connection when the website or Snap calls ",(0,i.jsx)(n.code,{children:"wallet_requestSnaps"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To do so, add an ",(0,i.jsx)(n.a,{href:"/zs/initialconnections-feature/snaps/reference/permissions#initial-connections",children:(0,i.jsx)(n.code,{children:"initialConnections"})})," section at the top-level of ",(0,i.jsx)(n.code,{children:"snap.manifest.json"}),". Include each website you want to allow to automatically connect:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",metastring:'title="snap.manifest.json"',children:'"initialConnections": {\n  "https://my-secure-site.com": {},\n  "https://www.other-allowed-site.com": {}\n}\n'})}),"\n",(0,i.jsxs)(n.h2,{id:"relationship-to-endowmentrpc",children:["Relationship to ",(0,i.jsx)(n.code,{children:"endowment:rpc"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"initialConnections"})," is not a replacement for ",(0,i.jsx)(n.code,{children:"endowment:rpc"}),". The latter is still required to allow websites or Snaps to call RPC methods of your Snap."]})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var i=t(96540);const o={},s=i.createContext(o);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);