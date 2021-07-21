(function(q,u,c){function v(a,b,g){a.addEventListener?a.addEventListener(b,g,!1):a.attachEvent("on"+b,g)}function z(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return n[a.which]?n[a.which]:r[a.which]?r[a.which]:String.fromCharCode(a.which).toLowerCase()}function F(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function w(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function A(a,b){var g,d=[];var e=a;"+"===e?e=["+"]:(e=e.replace(/\+{2}/g,"+plus"),e=e.split("+"));for(g=0;g<e.length;++g){var m=e[g];B[m]&&(m=B[m]);b&&"keypress"!=b&&C[m]&&(m=C[m],d.push("shift"));w(m)&&d.push(m)}e=m;g=b;if(!g){if(!p){p={};for(var c in n)95<c&&112>c||n.hasOwnProperty(c)&&(p[n[c]]=c)}g=p[e]?"keydown":"keypress"}"keypress"==g&&d.length&&(g="keydown");return{key:m,modifiers:d,action:g}}function D(a,b){return null===a||a===u?!1:a===b?!0:D(a.parentNode,b)}function d(a){function b(a){a=
a||{};var b=!1,l;for(l in p)a[l]?b=!0:p[l]=0;b||(x=!1)}function g(a,b,t,f,g,d){var l,E=[],h=t.type;if(!k._callbacks[a])return[];"keyup"==h&&w(a)&&(b=[a]);for(l=0;l<k._callbacks[a].length;++l){var c=k._callbacks[a][l];if((f||!c.seq||p[c.seq]==c.level)&&h==c.action){var e;(e="keypress"==h&&!t.metaKey&&!t.ctrlKey)||(e=c.modifiers,e=b.sort().join(",")===e.sort().join(","));e&&(e=f&&c.seq==f&&c.level==d,(!f&&c.combo==g||e)&&k._callbacks[a].splice(l,1),E.push(c))}}return E}function c(a,b,c,f){k.stopCallback(b,
b.target||b.srcElement,c,f)||!1!==a(b,c)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function e(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=z(a);b&&("keyup"==a.type&&y===b?y=!1:k.handleKey(b,F(a),a))}function m(a,g,t,f){function h(c){return function(){x=c;++p[a];clearTimeout(q);q=setTimeout(b,1E3)}}function l(g){c(t,g,a);"keyup"!==f&&(y=z(g));setTimeout(b,10)}for(var d=p[a]=0;d<g.length;++d){var e=d+1===g.length?l:h(f||
A(g[d+1]).action);n(g[d],e,f,a,d)}}function n(a,b,c,f,d){k._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var e=a.split(" ");1<e.length?m(a,e,b,c):(c=A(a,c),k._callbacks[c.key]=k._callbacks[c.key]||[],g(c.key,c.modifiers,{type:c.action},f,a,d),k._callbacks[c.key][f?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:f,level:d,combo:a}))}var k=this;a=a||u;if(!(k instanceof d))return new d(a);k.target=a;k._callbacks={};k._directMap={};var p={},q,y=!1,r=!1,x=!1;k._handleKey=function(a,
d,e){var f=g(a,d,e),h;d={};var k=0,l=!1;for(h=0;h<f.length;++h)f[h].seq&&(k=Math.max(k,f[h].level));for(h=0;h<f.length;++h)f[h].seq?f[h].level==k&&(l=!0,d[f[h].seq]=1,c(f[h].callback,e,f[h].combo,f[h].seq)):l||c(f[h].callback,e,f[h].combo);f="keypress"==e.type&&r;e.type!=x||w(a)||f||b(d);r=l&&"keydown"==e.type};k._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)n(a[d],b,c)};v(a,"keypress",e);v(a,"keydown",e);v(a,"keyup",e)}if(q){var n={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},r={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},C={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},B={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},p;for(c=1;20>c;++c)n[111+c]="f"+c;for(c=0;9>=c;++c)n[c+96]=c.toString();d.prototype.bind=function(a,b,c){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,c);return this};d.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};d.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};d.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};d.prototype.stopCallback=function(a,b){if(-1<(" "+b.className+" ").indexOf(" mousetrap ")||D(b,this.target))return!1;if("composedPath"in a&&"function"===typeof a.composedPath){var c=a.composedPath()[0];c!==a.target&&(b=c)}return"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};d.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};d.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(n[b]=a[b]);p=null};
d.init=function(){var a=d(u),b;for(b in a)"_"!==b.charAt(0)&&(d[b]=function(b){return function(){return a[b].apply(a,arguments)}}(b))};d.init();q.Mousetrap=d;"undefined"!==typeof module&&module.exports&&(module.exports=d);"function"===typeof define&&define.amd&&define(function(){return d})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);


//test
function getActiveChat() {
  return document.getElementsByClassName('sf_sidebar_company_chat--active')[0];
}


document.addEventListener('keydown', function (event) {
  if (event.code == 'KeyO' && (event.altKey || event.metaKey)) {
    toRS();
  }

  if (event.code === 'KeyA' && (event.altKey || event.metaKey)) {

  }
});



function toRS() {
  let chat = document.getElementsByName('btn_desktop');
  let btnOperatorMenu = document.querySelector('[title="Operator menu"]');

  if (chat.length === 0) {
    btnOperatorMenu.click();
  }

  let jqID;
  for (let key in chat[0]) {
    if (key.startsWith('jQuery')) {
      jqID = key;
      break;
    }
  }

  let linkToRS = [];
  let legthOfPattern = 5;


  for (let value of chat) {

    value = value[jqID]["actions"].slice(28, -3);
    let name = value.slice(value.search(/name=/) + legthOfPattern);
    name = name.slice(0, name.search(/&/));
    let activeName = getActiveChat().getElementsByClassName('sf_sidebar_company_chat_name')[0]["textContent"];

    if (name === activeName) {
      linkToRS.push(value);
    }
  }


  if (linkToRS.length === 0) {
    btnOperatorMenu.click();
    setTimeout(() => {
      linkToRS = [];
      btn = document.getElementsByName('btn_desktop');
      for (let value of btn) {

        value = value[jqID]["actions"].slice(28, -3);
        name = value.slice(value.search(/name=/) + legthOfPattern);
        name = name.slice(0, name.search(/&/));
        activeName = getActiveChat().getElementsByClassName('sf_sidebar_company_chat_name')[0]["textContent"];

        if (name === activeName) {
          linkToRS.push(value);
        }
      }
      window.open(encodeURI((linkToRS.slice(-1)[0])));
      linkToRS = [];
    }, 500);
  } else {
    window.open(encodeURI((linkToRS.slice(-1)[0])));
    linkToRS = [];
  }
}

let markedDialogs = [];

// Удаление кнопок: треннинг, номер телефона, красной надписи с уведомлением о биткоине
let flag;
let hideAlert = setInterval(() => {
  let objectAlert = document.getElementsByClassName('sf_bitcoin_modal_button_cancel');
  if (objectAlert.length > 0) {
    objectAlert[0].click();
    clearInterval(hideAlert);
  }
}, 0);

let blockchainInterval = setInterval(() => {
  let blockchain = document.getElementsByClassName('sf_bitcoin_alert');
  if (blockchain.length === 1) {
    blockchain[0].remove();
    clearInterval(blockchainInterval);
  }
}, 0);

let aimsCompanies = setTimeout(() => {
  let companies = document.getElementsByClassName('sf_sidebar_company_name');
  if (companies.length > 1) {
    for (let i = 0; i < companies.length;) {
      let textofThis = companies[i].innerText.split(' ')[0];
      if (['Training', 'Company'].includes(textofThis)) {
        companies[i].parentNode.parentNode.remove();
        continue;
      }
      i++;
    }

    clearInterval(aimsCompanies);
  }
}, 2000);


setTimeout(() => {
  let inptField = document.getElementsByClassName('sf_chat_input')[0];
  inptField.classList.add('mousetrap');
}, 2000);

/*
let inputField = setInterval(() => {
  let inptField = document.getElementsByClassName('sf_chat_input');
  if (inptField.length === 1) {
    inptField[0].classList.add('mousetrap');
  }
  clearInterval(inputField);
},0);
*/

setTimeout(() => {

  document.addEventListener('keydown', function (event) {
    //пропись красным - вкл/выкл
    if (event.code == 'KeyQ' && (event.altKey || event.metaKey)) {
      document.querySelector('[title="Operators only"]').click();
    }

    //отметка диалога
    if (event.code == 'KeyA' && (event.altKey || event.metaKey)) {
      addMark();
    }
  });

  function getActiveChat() {
    return document.getElementsByClassName('sf_sidebar_company_chat--active')[0];
  }

  function markChat() {
    let chat = getActiveChat();
    chat.classList.toggle('markedChat');
  }

  function isMarked(chat) {
    return Boolean(chat.classList.contains('markedChat'));
  }

  function checkMarked(activeChatDetials) {

    let pib = activeChatDetials.getElementsByClassName('sf_sidebar_company_chat_name')[0].textContent;
    let markInterval = setInterval(() => {
      activeChatDetials = getByChatPIB(pib);
      if (isMarked(activeChatDetials.parentElement)) {
        if (!activeChatDetials.classList.contains('test')) {
          activeChatDetials.classList.add('test');
          let mark = document.createElement('div');
          mark.classList.add('mark');
          activeChatDetials.insertAdjacentElement('afterend', mark);
        }
      } else {
        clearInterval(markInterval);
      }
    }, 0);
  }

  function addMark() {
    markChat();
    let chat = getActiveChat();
    let mark = document.createElement('div');
    let activeChatDetials = chat.getElementsByClassName('sf_sidebar_company_chat_inner')[0];
    if (isMarked(chat)) {
      activeChatDetials.classList.add('test');
      mark.classList.add('mark');
      activeChatDetials.insertAdjacentElement('afterend', mark);
      checkMarked(activeChatDetials);
    } else {
      activeChatDetials.classList.remove('test');
      activeChatDetials.parentElement.getElementsByClassName('mark')[0].remove();
    }
  }

  function getByChatPIB(pib) {
    let chats = document.getElementsByClassName('sf_sidebar_company_chat_name');
    for (let i = 0; i < chats.length; i++) {
      if (chats[i].textContent === pib) {
        return chats[i].parentElement;
      }
    }
  }




  document.addEventListener('keyup', function (event) {

    //выход из диалога
    if (event.altKey && event.code == 'KeyC') {
      markChat();
      document.querySelector('[title="Leave dialog"]').click();
    }

  });
 
  function getChats() {
    return document.getElementsByClassName('sf_sidebar_company_chat');
  }

  let firstDialog = 'alt+1';
  let lastDialog = 'alt+9';
  let secondDialog = 'alt+2';
  let thirdDialog = 'alt+3';
  let fourthDialog = 'alt+4';
  let fortiesDialog = 'alt+5';
  let sixthDialog = 'alt+6';
  let seventhDialog = 'alt+7';
  let eighthDialog = 'alt+8';

  Mousetrap.bind(firstDialog, function () { getChats()[0].click(); });
  Mousetrap.bind(secondDialog, function () { getChats()[1].click(); });
  Mousetrap.bind(thirdDialog, function () { getChats()[2].click(); });
  Mousetrap.bind(fourthDialog, function () { getChats()[3].click(); });
  Mousetrap.bind(fortiesDialog, function () { getChats()[4].click(); });
  Mousetrap.bind(sixthDialog, function () { getChats()[5].click(); });
  Mousetrap.bind(seventhDialog, function () { getChats()[6].click(); });
  Mousetrap.bind(eighthDialog, function () { getChats()[7].click(); });
  Mousetrap.bind(lastDialog, function () {
    let chats = getChats();
    chats[chats.length - 1].click();
  });

}, 1000);



function lastMsg() {
  return document.getElementsByClassName('sf_chat_msg_text').length;
}