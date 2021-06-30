(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{sI7U:function(e,n,t){"use strict";t.r(n),t.d(n,"meta",(function(){return p})),t.d(n,"default",(function(){return m}));var a=t("wx14"),i=t("Ff2n"),o=t("q1tI"),l=t.n(o),r=t("7ljp"),c=t("er9C"),p=(l.a.createElement,{id:"quick-start",title:"Quick Start"}),b={meta:p},s=e=>{var{children:n}=e,t=Object(i.a)(e,["children"]);return Object(r.b)(c.a,Object(a.a)({meta:p},t),n)};function m(e){var{components:n}=e,t=Object(i.a)(e,["components"]);return Object(r.b)(s,Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"getting-started"},"Getting Started",Object(r.b)("a",{parentName:"h2",href:"#getting-started",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"To start monitoring URLs, you need to provide a configuration (JSON file) either from an URL or local file. The configuration file contains the probes, alerts, and notification configurations. You can generate a configuration file using ",Object(r.b)("a",{parentName:"p",href:"https://hyperjumptech.github.io/monika-config-generator"},"Monika Config Generator")," web app. Alternatively, you can use one of the following configuration examples:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.smtp-gmail.example.json"},"SMTP Gmail")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.mailgun.example.json"},"Mailgun")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.sendgrid.example.json"},"SendGrid")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.webhook.example.json"},"Webhook")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.slack.example.json"},"Slack")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.telegram.example.json"},"Telegram")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.whatsapp.example.json"},"WhatsApp")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.teams.example.json"},"Microsoft Teams")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/config_sample/config.monika-whatsapp.example.json"},"Monika Whatsapp Notifier")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",{parentName:"li",href:"https://github.com/hyperjumptech/monika/blob/main/monika.example.json"},"Default"))),Object(r.b)("p",null,"When you have created the configuration file, you can run ",Object(r.b)("inlineCode",{parentName:"p"},"monika")," as follows"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"monika -c <path_to_your_configuration.json>\n")),Object(r.b)("p",null,"Or you can provide an URL that contains monika configuration"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"monika -c https://domain.com/path/to/your/configuration.json\n")),Object(r.b)("p",null,"Options and parameters can be seen by running ",Object(r.b)("inlineCode",{parentName:"p"},"monika -h"),". Or if you cloned this repository, you need to run ",Object(r.b)("inlineCode",{parentName:"p"},"bin/run -h"),"."),Object(r.b)("h2",{id:"quick-start"},"Quick Start",Object(r.b)("a",{parentName:"h2",href:"#quick-start",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"At the center of monica is a configuration file. Follow the following steps to quickly setup monitoring and get notification when a website is down via Gmail."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create a ",Object(r.b)("inlineCode",{parentName:"p"},"monika.json")," file and fill it out with the following"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n  "notifications": [\n    {\n      "id": "unique-id-smtp",\n      "type": "smtp",\n      "data": {\n        "recipients": ["YOUR_EMAIL_ADDRESS_HERE"],\n        "hostname": "smtp.gmail.com",\n        "port": 587,\n        "username": "YOUR_GMAIL_ACCOUNT",\n        "password": "YOUR_GMAIL_PASSWORD_OR_APP_PASSWORD"\n      }\n    }\n  ],\n  "probes": [\n    {\n      "id": "1",\n      "name": "Monika Landing Page",\n      "description": "Landing page of awesome Monika",\n      "interval": 10,\n      "requests": [\n        {\n          "url": "https://hyperjumptech.github.io/monika",\n          "timeout": 7000\n        }\n      ],\n      "alerts": ["status-not-2xx"]\n    }\n  ]\n}\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replace ",Object(r.b)("inlineCode",{parentName:"p"},"YOUR_EMAIL_ADDRESS_HERE")," in the monika.json with your email address that will receive the notification.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replace ",Object(r.b)("inlineCode",{parentName:"p"},"YOUR_GMAIL_ACCOUNT")," with your valid Gmail account, e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"yourname@gmail.com"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Replace ",Object(r.b)("inlineCode",{parentName:"p"},"YOUR_GMAIL_PASSWORD_OR_APP_PASSWORD")," with your Gmail password."),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"If you have activated Two Factor Authentication (2FA), you need to create an app password. Refer ",Object(r.b)("a",{parentName:"li",href:"https://support.google.com/accounts/answer/185833"},"here")," to create an app password for your Gmail account."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"If you have ",Object(r.b)("a",{parentName:"p",href:"/installation"},"installed Monika globally"),", run ",Object(r.b)("inlineCode",{parentName:"p"},"monika")," from Terminal app (macOS) in the same directory where ",Object(r.b)("inlineCode",{parentName:"p"},"monika.json")," exists. If you haven't, you can quickly run Monika by running ",Object(r.b)("inlineCode",{parentName:"p"},"npx @hyperjumptech/monika")," in the same directory where monika.json exists.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"During runtime, Monika will output a log that looks like this"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre",className:"language-bash"}," INFO (on x1): Starting Monika. Probes: 4. Notifications: 1\n")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"INFO: 2021-06-16T04:14:40.128Z 1 id:5 200 http://localhost:7001/health 7ms\nINFO: 2021-06-16T04:14:45.109Z 2 id:5 200 http://localhost:7001/health 4ms\nINFO: 2021-06-16T04:14:50.126Z 3 id:5 200 http://localhost:7001/health 10ms\nINFO: 2021-06-16T04:14:55.107Z 4 id:5 200 http://localhost:7001/health 1ms\nWARN: 2021-06-16T04:15:00.117Z 5 id:5 500 http://localhost:7001/health 0ms, ALERT: status-not-2xx\nWARN: 2021-06-16T04:15:05.371Z 6 id:5 500 http://localhost:7001/health 0ms, ALERT: status-not-2xx\nWARN: 2021-06-16T04:15:10.128Z 7 id:5 500 http://localhost:7001/health 0ms, ALERT: status-not-2xx\nWARN: 2021-06-16T04:15:15.138Z 8 id:5 500 http://localhost:7001/health 0ms, ALERT: status-not-2xx, NOTIF: service probably down\nINFO: 2021-06-16T04:15:20.130Z 9 id:5 200 http://localhost:7001/health 6ms\nINFO: 2021-06-16T04:15:25.128Z 10 id:5 200 http://localhost:7001/health 4ms\nINFO: 2021-06-16T04:15:30.137Z 11 id:5 200 http://localhost:7001/health 6ms\nINFO: 2021-06-16T04:15:35.146Z 12 id:5 200 http://localhost:7001/health 8ms, NOTIF: service is back up\nINFO: 2021-06-16T04:15:40.140Z 13 id:5 200 http://localhost:7001/health 4ms\n\n\nINFO_TYPE: current-time iteration probe:id _probeURL_ [response time in ms],[ALERT messages if any], [NOTIFICATION messages if any]\n")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\n## Configuration file\n\n> The configuration file contains the [notification](/monika/guides/notifications), [probes](/monika/guides/probes), and [alerts](/monika/guides/alerts) as shown below.\n\n")),Object(r.b)("p",null,"// monika.json"),Object(r.b)("p",null,'{\n"notifications": ',"[...]",',\n"probes": [\n{\n...\n"alerts": ',"[...]","\n}\n]\n}"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"\nFor advanced configuration, you can find them on the sidebar menu.\n\nMonika by default reads a configuration file called `monika.json` in the current working directory if it exists. You can specify a path to a JSON configuration file with `-c` flag as follows\n\n```bash\nmonika -c <path_to_configuration_json_file>\n")),Object(r.b)("p",null,"Or if you haven't installed Monika globally, you can run it without installing first using ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/npx"},"npx"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"npx @hyperjumptech/monika -c <path_to_configuration_json_file>\n")),Object(r.b)("h2",{id:"background-run"},"Background run",Object(r.b)("a",{parentName:"h2",href:"#background-run",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("p",null,"By default Monika will run in the foreground. Like other Node.js applications, there are several ways to run Monika in the background on Unix, Linux, and macOS."),Object(r.b)("h3",{id:"using-nohup"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"nohup"),Object(r.b)("a",{parentName:"h3",href:"#using-nohup",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On your terminal, run ",Object(r.b)("inlineCode",{parentName:"p"},"nohup monika &"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You'll get an output similar to the following."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"[1] 93457\nappending output to nohup.out\n")),Object(r.b)("p",{parentName:"li"},"In the above example, 93457 is the process ID (pid). And the output of Monika is written to ",Object(r.b)("inlineCode",{parentName:"p"},"nohup.out")," file.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To stop Monika, run ",Object(r.b)("inlineCode",{parentName:"p"},"kill -9 <pid>"),"."))),Object(r.b)("h3",{id:"using-screen"},"Using ",Object(r.b)("inlineCode",{parentName:"h3"},"screen"),Object(r.b)("a",{parentName:"h3",href:"#using-screen",title:"Direct link to heading",className:"anchor"},Object(r.b)("span",{parentName:"a",className:"icon icon-link"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On Debian/Ubuntu, you can install it by running ",Object(r.b)("inlineCode",{parentName:"p"},"sudo apt install screen"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"screen"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run ",Object(r.b)("inlineCode",{parentName:"p"},"monika -c monika.json"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Press Ctrl+a then D. This will cause Monika to run on a different screen in the background.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To go back to the screen, run ",Object(r.b)("inlineCode",{parentName:"p"},"screen -ls")," to list the running screens. You will get an output similar to the following."),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",{parentName:"pre"},"There is a screen on:\n  9049.pts-0.the-server (03/23/21 08:34:38) (Detached)\n  1 Socket in /run/screen/S-server.\n")),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"9049.pts-0.the-server")," is the name of the screen.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Then run ",Object(r.b)("inlineCode",{parentName:"p"},"screen -r <name_of_the_screen>"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"To stop Monika, hit Ctrl+c then Ctrl+d."))))}m.isMDXComponent=!0},yNvj:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/quick-start",function(){return t("sI7U")}])}},[["yNvj",0,1,2,3,4]]]);