(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),c=n(4),r=n.n(c),i=(n(13),n(5)),s=n(6),u=n(8),d=n(7),b=(n(14),n(1)),l=n.n(b),j=n(0),h=function(e){var t=e.good,n=e.neutral,o=e.bad,a=e.total,c=e.positivePercentage;return Object(j.jsxs)("section",{children:[Object(j.jsx)("p",{children:t}),Object(j.jsx)("p",{children:n}),Object(j.jsx)("p",{children:o}),Object(j.jsxs)("p",{children:["Total:",a]}),a<1?Object(j.jsx)("p",{children:"Positive feedback: 0"}):Object(j.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]})};h.prototype={good:l.a.number.isRequired,neutral:l.a.number.isRequired,bad:l.a.number.isRequired,total:l.a.number.isRequired,positivePercentage:l.a.number.isRequired};var p=h,v=function(e){var t=e.title,n=e.children;return Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:t}),n]})};v.prototype={title:l.a.string};var O=v,f=function(e){var t=e.onLeaveFeedback,n=e.options;return Object(j.jsx)("button",{type:"button",onClick:t,children:n})};f.prototype={options:l.a.string.isRequired,onLeaveFeedback:l.a.func.isRequired};var g=f,x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(i.a)(this,n);for(var o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.onButtonGoodPush=function(){e.setState((function(e){return{good:e.good+1}}))},e.onButtonNeutralPush=function(){e.setState((function(e){return{neutral:e.neutral+1}}))},e.onButtonBadPush=function(){e.setState((function(e){return{bad:e.bad+1}}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return 100*e.state.good/e.countTotalFeedback()},e}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,o=e.bad;return Object(j.jsxs)("div",{children:[Object(j.jsxs)(O,{title:"Pleas leave feedback",children:[Object(j.jsx)(g,{options:"Good",onLeaveFeedback:this.onButtonGoodPush}),Object(j.jsx)(g,{options:"Neutral",onLeaveFeedback:this.onButtonNeutralPush}),Object(j.jsx)(g,{options:"Bad",onLeaveFeedback:this.onButtonBadPush})]}),Object(j.jsx)(O,{title:"Statistic",children:Object(j.jsx)(p,{good:t,neutral:n,bad:o,total:this.countTotalFeedback(),positivePercentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(o.Component),k=x;r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(k,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c7582be8.chunk.js.map