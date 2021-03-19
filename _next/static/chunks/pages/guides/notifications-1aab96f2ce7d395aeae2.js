_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[11],{ScRu:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/notifications",function(){return n("c/vi")}])},"c/vi":function(e,t,n){"use strict";n.r(t),n.d(t,"meta",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n("wx14"),i=n("Ff2n"),l=n("q1tI"),r=n.n(l),b=n("7ljp"),o=n("er9C"),c=(r.a.createElement,{id:"notifications",title:"Notifications"}),m={meta:c},p=function(e){var t=e.children,n=Object(i.a)(e,["children"]);return Object(b.b)(o.a,Object(a.a)({meta:c},n),t)};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(b.b)(p,Object(a.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"notification-types"},"Notification Types",Object(b.b)("a",{parentName:"h2",href:"#notification-types",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"Monika will send notifications to you whenever ",Object(b.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts"},"alerts")," are triggered, e.g., when the response status of a probed URL is not ",Object(b.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#2xx_success"},"2xx success code")," (",Object(b.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika/guides/alerts#1-http-code"},"status-not-2xx"),")."),Object(b.b)("p",null,"At this moment, Monika supports 4 types of notifications\u2014smtp, webhook, Mailgun, and Sendgrid. We are working on more notifications like Microsoft Teams, Telegram, and many more. You can help!"),Object(b.b)("h2",{id:"configurations"},"Configurations",Object(b.b)("a",{parentName:"h2",href:"#configurations",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"To use one or more notifications, you need to define the settings in the config.json file as shown below."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'"notifications": [\n    {\n      "id": "unique-id-mailgun",\n      "type": "mailgun",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY",\n        "domain": "YOUR_DOMAIN"\n      }\n    },\n    {\n      "id": "unique-id-sendgrid",\n      "type": "sendgrid",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "apiKey": "YOUR_API_KEY"\n      }\n    },\n    {\n      "id": "unique-id-smtp",\n      "type": "smtp",\n      "data": {\n        "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n        "hostname": "SMTP_HOSTNAME",\n        "port": 587,\n        "username": "SMTP_USERNAME",\n        "password": "SMTP_PASSWORD"\n      }\n    },\n    {\n      "id": "unique-id-webhook",\n      "type": "webhook",\n      "data": {\n        "method": "POST",\n        "url": "https://WEBHOOK_URL"\n      }\n    }\n  ],\n')),Object(b.b)("p",null,"Note that every triggered alert will be sent to you through all the notifications you defined in the config.json, e.g., if you added ",Object(b.b)("inlineCode",{parentName:"p"},"webhook")," and ",Object(b.b)("inlineCode",{parentName:"p"},"smtp")," settings, you will receive the alert messages through both."),Object(b.b)("h2",{id:"smtp"},"SMTP",Object(b.b)("a",{parentName:"h2",href:"#smtp",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol"},"SMTP (Simple Mail Transfer Protocol)")," is a way to send email using the TCP/IP protocol. This is the easiest way to get notified when alerts are triggered. Use the following configuration to set up SMTP notification."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-smtp",\n  "type": "smtp",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "hostname": "smtp.mail.com",\n    "port": 587,\n    "username": "SMTP_USERNAME",\n    "password": "SMTP_PASSWORD"\n  }\n}\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Smtp12345"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Type"),Object(b.b)("td",{parentName:"tr",align:null},"Notification types"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"smtp"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Recipients"),Object(b.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Hostname"),Object(b.b)("td",{parentName:"tr",align:null},"The smtp host that you will be using for sending the email"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"smtp.gmail.com"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Port"),Object(b.b)("td",{parentName:"tr",align:null},"The port allowed to be used for sending mail in your host"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"587"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Username"),Object(b.b)("td",{parentName:"tr",align:null},"Registered username on your smtp server"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"yourusername@gmail.com"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Password"),Object(b.b)("td",{parentName:"tr",align:null},"The password set for your username"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"thepasswordforyourusername"))))),Object(b.b)("h3",{id:"example-using-gmail-smtp"},"Example using Gmail SMTP",Object(b.b)("a",{parentName:"h3",href:"#example-using-gmail-smtp",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"To use Gmail SMTP with Monika,"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"You need to have a Gmail account."),Object(b.b)("li",{parentName:"ol"},"Use ",Object(b.b)("inlineCode",{parentName:"li"},"smtp.gmail.com")," for ",Object(b.b)("inlineCode",{parentName:"li"},"hostname"),"."),Object(b.b)("li",{parentName:"ol"},"Use ",Object(b.b)("inlineCode",{parentName:"li"},"587")," for ",Object(b.b)("inlineCode",{parentName:"li"},"port"),"."),Object(b.b)("li",{parentName:"ol"},"Use your Gmail address for ",Object(b.b)("inlineCode",{parentName:"li"},"username"),"."),Object(b.b)("li",{parentName:"ol"},"Use your Gmail password for ",Object(b.b)("inlineCode",{parentName:"li"},"password"),". If you have activated 2-Factor-Authentication (2FA), you need to ",Object(b.b)("a",{parentName:"li",href:"https://myaccount.google.com/security"},"create an App Password from your Account Settings"),". Then use the app password for ",Object(b.b)("inlineCode",{parentName:"li"},"password"),".")),Object(b.b)("h2",{id:"mailgun"},"Mailgun",Object(b.b)("a",{parentName:"h2",href:"#mailgun",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"Mailgun is an email notification delivery provided by Mailgun email service. To use mailgun for your notification, you\nwould need a mailgun account to obtain your API_KEY and DOMAIN. Please consult ",Object(b.b)("a",{parentName:"p",href:"https://documentation.mailgun.com/en/latest/quickstart.html"},"mailgun documentation here")," on how to obtain them. Once that done, you could use the API_KEY and DOMAIN in monika's json configuration as follows;"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-mailgun",\n  "type": "mailgun",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY",\n    "domain": "YOUR_DOMAIN"\n  }\n}\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Mailgun12345"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Type"),Object(b.b)("td",{parentName:"tr",align:null},"Notification types"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"mailgun"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Recipients"),Object(b.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Api Key"),Object(b.b)("td",{parentName:"tr",align:null},"Mailgun's account api key, mailgun's registered key to identify your account"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"MAILGUN_API_KEY"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Domain"),Object(b.b)("td",{parentName:"tr",align:null},"The domain to set in Mailgun"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"sandboxmail.mailgun.com"))))),Object(b.b)("h2",{id:"sendgrid"},"Sendgrid",Object(b.b)("a",{parentName:"h2",href:"#sendgrid",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"Similar to mailgun, sendgrid is also an email delivery service. First, sign up for an account in sendgrid and get the API key. Please check ",Object(b.b)("a",{parentName:"p",href:"https://sendgrid.com/docs/api-reference/"},"sendgrid's documentation"),". Then put the API key in Monika's configuration as follows."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-sendgrid",\n  "type": "sendgrid",\n  "data": {\n    "recipients": ["RECIPIENT_EMAIL_ADDRESS"],\n    "apiKey": "YOUR_API_KEY"\n  }\n}\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Sendgrid12345"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Type"),Object(b.b)("td",{parentName:"tr",align:null},"Notification types"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"sendgrid"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Recipients"),Object(b.b)("td",{parentName:"tr",align:null},"An array of email addresses that will receive the e-mail from Monika"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'["monika@testmail.com", "symon@testmail.com"]'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Api Key"),Object(b.b)("td",{parentName:"tr",align:null},"Mailgun's account api key, mailgun's registered key to identify your account"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"70e34aba-0ea908325"))))),Object(b.b)("h2",{id:"webhook"},"Webhook",Object(b.b)("a",{parentName:"h2",href:"#webhook",title:"Direct link to heading",className:"anchor"},Object(b.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(b.b)("p",null,"Besides the email notifications, ",Object(b.b)("inlineCode",{parentName:"p"},"Monika")," can also call your server using POST or PUT request."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "unique-id-webhook",\n  "type": "webhook",\n  "data": {\n    "method": "POST",\n    "url": "https://YOUR_WEBHOOK_URL"\n  }\n}\n')),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Key"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"ID"),Object(b.b)("td",{parentName:"tr",align:null},"Notification identity number"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"Webhook12345"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Type"),Object(b.b)("td",{parentName:"tr",align:null},"Notification types"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"webhook"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Method"),Object(b.b)("td",{parentName:"tr",align:null},"HTTP method POST or PUT"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"POST"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Url"),Object(b.b)("td",{parentName:"tr",align:null},"The URL of the server that will receive the webhook notification"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"https://yourwebsite.com/webhook"))))),Object(b.b)("p",null,"Using the webhook type configuration, ",Object(b.b)("inlineCode",{parentName:"p"},"Monika")," will send a request with the following body:"),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-js"},"body: {\n  url: string\n  time: string\n  alert: string\n}\n")),Object(b.b)("p",null,"Keep watch on these pages, new notification methods are being developed."))}d.isMDXComponent=!0}},[["ScRu",0,2,4,1,3,5]]]);