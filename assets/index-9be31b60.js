import{s as n,j as t,B as i}from"./index-58d6287e.js";var r=(e=>(e[e.Primary=0]="Primary",e[e.Secondary=1]="Secondary",e[e.Outline=2]="Outline",e))(r||{});const a=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-top: 2rem;
`,o=n.h1`
  color: ${e=>e.theme.text};
  font-size: 2.5rem;
  text-align: center;
`,c=n.div`
  max-width: 34rem;
  color: ${e=>e.theme.textSecondary};
  font-size: 1rem;
  text-align: center;
  line-height: 1.5rem;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,l=n.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`,s=n.button`
  width: 6rem;
  height: 3rem;
  border: none;
  border-radius: 14px;
  color: ${e=>e.variant==r.Outline?`${e.theme.text}`:`${e.theme.background}`};
  outline: 
    ${e=>e.variant==r.Outline?`2px solid ${e.theme.text}`:`2px solid ${e.theme.backgroundVariant}`};
  background-color: 
    ${e=>e.variant==r.Outline?"transparent":e.theme.backgroundVariant};
  cursor: pointer;
`,d=()=>t.jsxs(a,{children:[t.jsx(o,{children:"PEPE without the Gas Fees"}),t.jsxs(c,{children:[t.jsx("span",{children:"If a picture is worth a thousand words, then a meme is worth a thousand pictures!"}),t.jsx("span",{children:"Tezos Pepe is no different - Pepes may look alike, but no two Pepes are the same! With Tezos Pepe, tezonians can have fun building, trading, playing, memeing, and using the DAO treasury to fund other projects."})]}),t.jsxs(l,{children:[t.jsx("a",{href:"https://pepeswap.tez.page/",children:t.jsx(s,{children:"PepePot"})}),t.jsx("a",{href:"https://pepeswap.tez.page/",children:t.jsx(s,{variant:r.Outline,children:"PepeSwap"})})]})]}),p="/assets/pepelegs-b08cbfb7.png",h=n.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  justify-self: flex-end;
`,m=()=>t.jsx(h,{src:p}),x=n(i)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

`,g=()=>t.jsxs(x,{children:[t.jsx(d,{}),t.jsx(m,{})]});export{x as PageWrapper,g as SplashPage};
