(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{ZM4Q:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/alerts",function(){return a("gmV/")}])},"gmV/":function(e,t,a){"use strict";a.r(t),a.d(t,"meta",(function(){return o})),a.d(t,"default",(function(){return m}));var n=a("wx14"),r=a("Ff2n"),i=a("q1tI"),b=a.n(i),c=a("7ljp"),l=a("er9C"),o=(b.a.createElement,{}),s={meta:o},p=e=>{var{children:t}=e,a=Object(r.a)(e,["children"]);return Object(c.b)(l.a,Object(n.a)({meta:o},a),t)};function m(e){var{components:t}=e,a=Object(r.a)(e,["components"]);return Object(c.b)(p,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"alerts"},"Alerts",Object(c.b)("a",{parentName:"h1",href:"#alerts",title:"Direct link to heading",className:"anchor"},Object(c.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(c.b)("p",null,"Alerts are the types of condition that will trigger Monika to send notification. It is an array located on probes defined in the config file ",Object(c.b)("inlineCode",{parentName:"p"},"monika.json")," like so."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'  "probes": [\n    {\n      "id": "1",\n      "name": "Name of the probe",\n      ...\n      "alerts": ["status-not-2xx", "response-time-greater-than-200-ms"]\n    },\n  ]\n')),Object(c.b)("h2",{id:"alerts-types"},"Alerts types",Object(c.b)("a",{parentName:"h2",href:"#alerts-types",title:"Direct link to heading",className:"anchor"},Object(c.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(c.b)("p",null,"Now there are 2 supported types of alerts conditions:"),Object(c.b)("h3",{id:"1-http-code"},"1. HTTP Code",Object(c.b)("a",{parentName:"h3",href:"#1-http-code",title:"Direct link to heading",className:"anchor"},Object(c.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(c.b)("p",null,"To measure returned HTTP code."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Value"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"status-not-2xx"),Object(c.b)("td",{parentName:"tr",align:null},"Condition met if the returned http code from the probes is less than 200 or greater than 299.")))),Object(c.b)("h3",{id:"2-response-time"},"2. Response Time",Object(c.b)("a",{parentName:"h3",href:"#2-response-time",title:"Direct link to heading",className:"anchor"},Object(c.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(c.b)("p",null,"To measure response time. The time value and unit can be changed."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"left"},"Value"),Object(c.b)("th",{parentName:"tr",align:null},"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"left"},"response-time-greater-than-",Object(c.b)("inlineCode",{parentName:"td"},"200"),"-",Object(c.b)("inlineCode",{parentName:"td"},"ms")),Object(c.b)("td",{parentName:"tr",align:null},"Condition met if the response time from the probes URL is greater than 200 milliseconds.")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The time value can be changed to any positive integer value. In above example, the value is ",Object(c.b)("inlineCode",{parentName:"li"},"200"),"."),Object(c.b)("li",{parentName:"ul"},"The time unit can be changed to ",Object(c.b)("inlineCode",{parentName:"li"},"s")," second. In above example, the unit is ",Object(c.b)("inlineCode",{parentName:"li"},"ms")," for milliseconds.")),Object(c.b)("p",null,"Example changed time value and unit:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"response-time-greater-than-1-s\n")),Object(c.b)("p",null,"means Monika will send notification if the response of the probes URL is received after 1 second."),Object(c.b)("h2",{id:"further-reading"},"Further reading",Object(c.b)("a",{parentName:"h2",href:"#further-reading",title:"Direct link to heading",className:"anchor"},Object(c.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"./probes"},"Probes")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"./notifications"},"Notifications"))))}m.isMDXComponent=!0}},[["ZM4Q",0,1,2,3,4]]]);