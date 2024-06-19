"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[5569],{32161:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=n(74848),r=n(28453),s=n(11470),l=n(19365);const i={sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},o="Use MetaMask SDK with iOS",c={id:"how-to/use-sdk/mobile/ios",title:"Use MetaMask SDK with iOS",description:"Set up the SDK in your iOS dapp.",source:"@site/wallet/how-to/use-sdk/mobile/ios.md",sourceDirName:"how-to/use-sdk/mobile",slug:"/how-to/use-sdk/mobile/ios",permalink:"/feat-reference-req/wallet/how-to/use-sdk/mobile/ios",draft:!1,unlisted:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/how-to/use-sdk/mobile/ios.md",tags:[{inline:!0,label:"iOS SDK",permalink:"/feat-reference-req/wallet/tags/i-os-sdk"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"iOS",sidebar_position:1,toc_max_heading_level:4,description:"Set up the SDK in your iOS dapp.",tags:["iOS SDK"]},sidebar:"walletSidebar",previous:{title:"Mobile",permalink:"/feat-reference-req/wallet/how-to/use-sdk/mobile/"},next:{title:"Android",permalink:"/feat-reference-req/wallet/how-to/use-sdk/mobile/android"}},d={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Install the SDK",id:"1-install-the-sdk",level:3},{value:"2. Import the SDK",id:"2-import-the-sdk",level:3},{value:"3. Connect your dapp",id:"3-connect-your-dapp",level:3},{value:"4. Call methods",id:"4-call-methods",level:3},{value:"Example: Get chain ID",id:"example-get-chain-id",level:4},{value:"Example: Get account balance",id:"example-get-account-balance",level:4},{value:"Example: Send transaction",id:"example-send-transaction",level:4},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"use-metamask-sdk-with-ios",children:"Use MetaMask SDK with iOS"}),"\n",(0,a.jsxs)(t.p,{children:["Import ",(0,a.jsx)(t.a,{href:"/feat-reference-req/wallet/concepts/sdk/",children:"MetaMask SDK"})," into your native iOS dapp to enable your\nusers to easily connect with their MetaMask Mobile wallet."]}),"\n",(0,a.jsx)(t.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["MetaMask Mobile version 7.6.0 or later installed on your target device (that is, a physical device\nor emulator).\nYou can install MetaMask Mobile from the ",(0,a.jsx)(t.a,{href:"https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202",children:"App Store"}),"\nor clone and compile MetaMask Mobile from ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-mobile",children:"source"}),"\nand build to your target device."]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["iOS version 14 or later.\nThe SDK supports ",(0,a.jsx)(t.code,{children:"ios-arm64"})," (iOS devices) and ",(0,a.jsx)(t.code,{children:"ios-arm64-simulator"})," (M1 chip simulators).\nIt currently doesn't support ",(0,a.jsx)(t.code,{children:"ios-ax86_64-simulator"})," (Intel chip simulators)."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"steps",children:"Steps"}),"\n",(0,a.jsx)(t.h3,{id:"1-install-the-sdk",children:"1. Install the SDK"}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(l.A,{value:"CocoaPods",children:[(0,a.jsx)(t.p,{children:"To add the SDK as a CocoaPods dependency to your project, add the following entry to our Podfile:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'pod "metamask-ios-sdk"\n'})}),(0,a.jsx)(t.p,{children:"Run the following command:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"pod install\n"})})]}),(0,a.jsxs)(l.A,{value:"Swift Package Manager",children:[(0,a.jsxs)(t.p,{children:["To add the SDK as a Swift Package Manager (SPM) package to your project, in Xcode, select\n",(0,a.jsx)(t.strong,{children:"File > Swift Packages > Add Package Dependency"}),".\nEnter the URL of the MetaMask iOS SDK repository: ",(0,a.jsx)(t.code,{children:"https://github.com/MetaMask/metamask-ios-sdk"}),"."]}),(0,a.jsx)(t.p,{children:"Alternatively, you can add the URL directly in your project's package file:"}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'dependencies: [\n  .package(\n    url: "https://github.com/MetaMask/metamask-ios-sdk",\n    from: "0.3.0"\n  )\n]\n'})})]})]}),"\n",(0,a.jsx)(t.h3,{id:"2-import-the-sdk",children:"2. Import the SDK"}),"\n",(0,a.jsx)(t.p,{children:"Import the SDK by adding the following line to the top of your project file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"import metamask_ios_sdk\n"})}),"\n",(0,a.jsx)(t.h3,{id:"3-connect-your-dapp",children:"3. Connect your dapp"}),"\n",(0,a.jsx)(t.p,{children:"Connect your dapp to MetaMask by adding the following code to your project file:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'let appMetadata = AppMetadata(name: "Dub Dapp", url: "https://dubdapp.com")\n\n@ObservedObject var metamaskSDK = MetaMaskSDK.shared(appMetadata)\n\nmetamaskSDK.connect()\n'})}),"\n",(0,a.jsxs)(t.p,{children:["By default, MetaMask logs three SDK events: ",(0,a.jsx)(t.code,{children:"connectionRequest"}),", ",(0,a.jsx)(t.code,{children:"connected"}),", and ",(0,a.jsx)(t.code,{children:"disconnected"}),".\nThis allows MetaMask to monitor any SDK connection issues.\nTo disable this, set ",(0,a.jsx)(t.code,{children:"MetaMaskSDK.shared.enableDebug = false"})," or ",(0,a.jsx)(t.code,{children:"ethereum.enableDebug = false"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"4-call-methods",children:"4. Call methods"}),"\n",(0,a.jsxs)(t.p,{children:["You can now call any ",(0,a.jsx)(t.a,{href:"/wallet/reference/json-rpc-api",children:"JSON-RPC API method"})," using ",(0,a.jsx)(t.code,{children:"metamaskSDK.request()"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"example-get-chain-id",children:"Example: Get chain ID"}),"\n",(0,a.jsxs)(t.p,{children:["The following example gets the user's chain ID by calling\n",(0,a.jsx)(t.a,{href:"/wallet/reference/eth_chainId",children:(0,a.jsx)(t.code,{children:"eth_chainId"})}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:"let chainIdRequest = EthereumRequest(method: .ethChainId)\nlet chainId = await metamaskSDK.request(chainIdRequest)\n"})}),"\n",(0,a.jsx)(t.h4,{id:"example-get-account-balance",children:"Example: Get account balance"}),"\n",(0,a.jsxs)(t.p,{children:["The following example gets the user's account balance by calling\n",(0,a.jsx)(t.a,{href:"/wallet/reference/eth_getBalance",children:(0,a.jsx)(t.code,{children:"eth_getBalance"})}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String] = [\n  // Account to check for balance.\n  account,\n  // "latest", "earliest", or "pending" (optional)\n  "latest"\n]\n\n// Create request.\nlet getBalanceRequest = EthereumRequest(\n  method: .ethGetBalance,\n  params: parameters\n)\n\n// Make request.\nlet accountBalance = await metamaskSDK.request(getBalanceRequest)\n'})}),"\n",(0,a.jsx)(t.h4,{id:"example-send-transaction",children:"Example: Send transaction"}),"\n",(0,a.jsxs)(t.p,{children:["The following example sends a transaction by calling\n",(0,a.jsx)(t.a,{href:"/wallet/reference/eth_sendTransaction",children:(0,a.jsx)(t.code,{children:"eth_sendTransaction"})}),"."]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsxs)(l.A,{value:"Use a dictionary",children:[(0,a.jsxs)(t.p,{children:["If your request parameters make up a simple dictionary of string key-value pairs, you can use the\ndictionary directly.\nNote that ",(0,a.jsx)(t.code,{children:"Any"})," or even ",(0,a.jsx)(t.code,{children:"AnyHashable"})," types aren't supported, since the type must be explicitly known."]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'// Create parameters.\nlet account = metamaskSDK.account\n\nlet parameters: [String: String] = [\n  // Receiver address.\n  "to": "0x...",\n  // Sender address.\n  "from": account,\n  // Amount to send.\n  "value": "0x..."\n]\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [parameters]\n)\n\n// Make a transaction request.\nlet transactionResult = await metamaskSDK.request(transactionRequest)\n'})})]}),(0,a.jsxs)(l.A,{value:"Use a struct",children:[(0,a.jsxs)(t.p,{children:["For more complex parameter representations, define and use a struct that conforms to ",(0,a.jsx)(t.code,{children:"CodableData"}),",\nthat is, a struct that implements the following requirement:"]}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"func socketRepresentation() -> NetworkData\n"})}),(0,a.jsx)(t.p,{children:"The type can then be represented as a socket packet."}),(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-swift",children:'struct Transaction: CodableData {\n  let to: String\n  let from: String\n  let value: String\n  let data: String?\n\n  init(to: String, from: String, value: String, data: String? = nil) {\n    self.to = to\n    self.from = from\n    self.value = value\n    self.data = data\n  }\n\n  func socketRepresentation() -> NetworkData {\n    [\n      "to": to,\n      "from": from,\n      "value": value,\n      "data": data\n    ]\n  }\n}\n\n// Create parameters.\nlet account = metamaskSDK.account\n\nlet transaction = Transaction(\n  // Receiver address.\n  to: "0x...",\n  // Sender address.\n  from: account,\n  // Amount.\n  value: "0x..."\n)\n\n// Create request.\nlet transactionRequest = EthereumRequest(\n  method: .ethSendTransaction,\n  // eth_sendTransaction expects an array parameters object.\n  params: [transaction]\n)\n\n// Make a transaction request.\nlet result = await metamaskSDK.request(transactionRequest)\n'})})]})]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://github.com/MetaMask/metamask-ios-sdk/tree/main/Example",children:"example iOS dapp"})," in the\niOS SDK GitHub repository for more information."]})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(18215);const r={tabItem:"tabItem_Ymn6"};var s=n(74848);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,l),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>S});var a=n(96540),r=n(18215),s=n(23104),l=n(56347),i=n(205),o=n(57485),c=n(31682),d=n(70679);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,l.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(74848);function j(e){let{className:t,block:n,selectedValue:a,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,n=o.indexOf(t),r=i[n].value;r!==a&&(c(t),l(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>o.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function v(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,g.jsx)(j,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function S(e){const t=(0,x.A)();return(0,g.jsx)(v,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>i});var a=n(96540);const r={},s=a.createContext(r);function l(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);