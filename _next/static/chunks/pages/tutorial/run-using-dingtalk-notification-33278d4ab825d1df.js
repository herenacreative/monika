(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[723],{720:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tutorial/run-using-dingtalk-notification",function(){return n(5819)}])},5819:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return c},meta:function(){return l}});n(7294);var a=n(3905),o=n(8470);function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l={id:"run-using-dingtalk-notification",title:"Run using DingTalk Notification"},s={meta:l},r=function(t){var e=t.children,n=i(t,["children"]);return(0,a.kt)(o.C,Object.assign({meta:l},n),e)};function c(t){var e=t.components,n=i(t,["components"]);return(0,a.kt)(r,Object.assign({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial will show you how to integrate Monika with DingTalk to get your Monika notifications"),(0,a.kt)("h2",Object.assign({},{id:"setup-dingtalk-robot"}),"Setup DingTalk Robot",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#setup-dingtalk-robot",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Setting up DingTalk could be very difficult if you can\u2019t read Chinese. So, we will guide you on how to do it with pictures so that you can understand it more straightforwardly."),(0,a.kt)("p",null,"First, you need to open ",(0,a.kt)("a",Object.assign({parentName:"p"},{href:"https://open.dingtalk.com/document/group/assign-a-webhook-url-to-an-internal-chatbot"}),"https://open.dingtalk.com/document/group/assign-a-webhook-url-to-an-internal-chatbot")," to access the documentation. Then, you need to click the highlighted URL below:"),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*bjcKSc71-vJ0f_DUVzxrIQ.png",alt:null})),(0,a.kt)("p",null,"Assuming you already have a DingTalk account, you will be redirected to the page in the image below. If you haven\u2019t, you will be redirected to create an account."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*7IhEPPKt8cSHHW7SXb43RA.png",alt:null})),(0,a.kt)("p",null,"After that, go to the second menu on the navbar, and select the first sub-menu like so:"),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*EO_Q32yQ2i5QCYWu5m1HHQ.png",alt:null})),(0,a.kt)("p",null,"You will be redirected to another page. Select the last menu on the sidebar, and click the blue button to create a robot."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*pZ_NNnYJpe32gX2owFjkxA.png",alt:null})),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*Xzr0ymcg4Ocnhu6HqVS5BQ.png",alt:null})),(0,a.kt)("p",null,"After that, you will be prompted to fill out a form to create a robot. Fill out the form with the application name, description, and icon. Once that\u2019s done, click the blue button again."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1010/1*EuuSsn0CuNbyupAtOlgXzA.png",alt:null})),(0,a.kt)("p",null,"If the bot has been successfully created, it should redirect you to the robot details page."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*BtVMMytotPJ8M92O_xxrVw.png",alt:null})),(0,a.kt)("p",null,"But your newly created robot has not been activated yet, so let\u2019s activate the robot by selecting the last menu on the sidebar, then select the first sub-menu of it, and click the right blue button. Once that\u2019s done, the red indicator should turn green."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*cc2N50OthuoFiu_gu2N8qA.png",alt:null})),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*aVktbkHKUVuSD0_KXwpTYg.png",alt:null})),(0,a.kt)("h2",Object.assign({},{id:"use-dingtalk-robot-in-the-desktop-app"}),"Use DingTalk Robot in the Desktop App",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#use-dingtalk-robot-in-the-desktop-app",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Now that we have successfully created the robot, we can use it in the desktop app. So, download the desktop app and authenticate with your credentials. Then, create a new group for the robot to be added."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*apSlFVVuY6rO0ESenFjVWg.png",alt:null})),(0,a.kt)("p",null,"Then, click the group and open the settings inside the group and click the ",(0,a.kt)("strong",{parentName:"p"},"Group Assistant")," menu."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*CErcG2uj6zvDQe0tkbltzA.png",alt:null})),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*-5Zqw8S__gfrxPn2A-syXQ.png",alt:null})),(0,a.kt)("p",null,"From there, you can add your previously created robot. Click the robot name you have just created."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*syajlhyWbKAblt50DLS_wg.png",alt:null})),(0,a.kt)("p",null,"A popup will appear showing your robot data. Scroll down to the webhook URL and copy the webhook URL to another place. Then, copy ",(0,a.kt)("strong",{parentName:"p"},"only the access token in the webhook URL.")," The access token format should be like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{}),"https://oapi.dingtalk.com/robot/send?access\\_token=<your\\_access\\_token>\n")),(0,a.kt)("p",null,"Save it to somewhere safe as we are going to need it later."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*tTCEFpOG8k3SLl4Ub4NCrw.png",alt:null})),(0,a.kt)("p",null,"Additionally, you can secure your robot by allowing keywords. Scroll down to Security Settings and check the Custom Keywords checkbox. From there, you can define the keywords allowlist yourself."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*LzmzX33q8EJWqtt_k8RkTA.png",alt:null})),(0,a.kt)("p",null,"We are finally done with the DingTalk setup, all that\u2019s left is to set up Monika with the DingTalk webhook URL."),(0,a.kt)("h2",Object.assign({},{id:"integrating-monika-with-dingtalk"}),"Integrating Monika with DingTalk",(0,a.kt)("a",Object.assign({parentName:"h2"},{href:"#integrating-monika-with-dingtalk",title:"Direct link to heading",className:"anchor"}),(0,a.kt)("span",Object.assign({parentName:"a"},{className:"icon icon-link"})))),(0,a.kt)("p",null,"Now that we have our access token from DingTalk, it\u2019s time to create a Monika configuration called ",(0,a.kt)("inlineCode",{parentName:"p"},"monika.yml")),(0,a.kt)("pre",null,(0,a.kt)("code",Object.assign({parentName:"pre"},{}),"notifications:\n  - id: dingtalk-notif\n    type: dingtalk\n    data:\n      access_token: <your_access_token>\nprobes:\n  - id: '1'\n    name: Hyperjump\n    description: Landing page\n    interval: 1\n    requests:\n      - method: GET\n        url: 'http://localhost:3000/api/demo/status'\n    alerts:\n      - query: response.status != 200\n        message: Status not 2xx\n")),(0,a.kt)("p",null,"Let me explain the configuration a little bit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Monika will use DingTalk as their notification channel, using the access token from the previous step"),(0,a.kt)("li",{parentName:"ul"},"Monika will probe ",(0,a.kt)("a",Object.assign({parentName:"li"},{href:"http://localhost:3000/api/demo/status"}),"http://localhost:3000/api/demo/status")," every one second"),(0,a.kt)("li",{parentName:"ul"},"Monika will alert you if the response status code is not 200")),(0,a.kt)("p",null,"Once that\u2019s done, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"monika.yml")," with the configuration above."),(0,a.kt)("img",Object.assign({},{src:"https://miro.medium.com/max/1400/1*uU4mOkglFMPu-_iWVQN0gA.jpeg",alt:null})),(0,a.kt)("p",null,"Congratulations! You have successfully integrated Monika with DingTalk!"))}c.isMDXComponent=!0}},function(t){t.O(0,[547,778,470,774,888,179],(function(){return e=720,t(t.s=e);var e}));var e=t.O();_N_E=e}]);