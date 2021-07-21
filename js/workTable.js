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



document.addEventListener('keydown', function (event) {
  if (event.altKey) {
    event.preventDefault();
  }
});


let currentURL = (window.location.href).slice(0, 32);
const operatorDeskURL = 'https://operatordesk.ftband.net/';


if (currentURL === operatorDeskURL) {

  setInterval(() => {

    let cards = document.getElementsByClassName('w-sub-block ng-scope');
    let creditPlastic;
    let btnSettingCreditCard;
    let cardMenu;
    let btnMenuClient = document.querySelector('.button-round.inline.highlight.ng-scope');


    function getCardMenu() {
      return document.querySelectorAll('.dropdown-list.dropdown-appear-animation.dropdown-box.ng-scope .ng-binding.ng-scope');
    }

    function getMenuClient() {
      return getCardMenu();
    }

    function getPaymentsClient() {
      return document.getElementsByClassName('modal-bg');
    }

    function getElementByText(array, text) {
      for (let i = 0; i < array.length; i++) {
        if (text.includes(array[i].innerText)) {
          return array[i];
        }
      }
    }


    for (let i = 0; i < cards.length; i++) {
      let cardType = cards[i].innerText.split(' ')[1];
      if (['Кредитная', 'Кредитна'].includes(cardType)) {
        creditPlastic = cards[i];
        btnSettingCreditCard = creditPlastic.getElementsByClassName('button-round inline ng-scope')[0];
        break;
      }
    }


    //credit details
    Mousetrap.bind("alt+k", function () {
      btnSettingCreditCard.click();
      setTimeout(() => {
        getElementByText(getCardMenu(), ['Детали кредита', 'Деталі кредиту']).click();
      }, 0);
    })

    // paypass details
    Mousetrap.bind("alt+p", function () {
      btnSettingCreditCard.click();
      setTimeout(() => {
        getElementByText(getCardMenu(), ['Бесконтактная оплата','Безконтактна оплата']).click();
      }, 0);
    })

    // credit history			
    Mousetrap.bind("alt+l", function () {
      btnSettingCreditCard.click();
      setTimeout(() => {
        getElementByText(getCardMenu(), ['История заявок на изменение лимита','Історія заявок на зміну ліміту']).click();
      }, 0);
    })

    // block card
    Mousetrap.bind("alt+1", function () {
      btnMenuClient.click();
      setTimeout(() => {
        getElementByText(getMenuClient(), ['Блокировка карт', 'Блокування карт']).click();
        setTimeout(() => {
          document.getElementsByClassName('inversed block ng-scope')[0].click();
        }, 900);
      }, 0);
    });


    Mousetrap.bind("alt+2", function () {
      btnMenuClient.click();
      setTimeout(() => {
        getElementByText(getMenuClient(), ['Блокировка карт', 'Блокування карт']).click();
        setTimeout(() => {
          document.getElementsByClassName('inversed block ng-scope')[1].click();
        }, 900);
      }, 0);
    });


    //close an active window
    Mousetrap.bind("alt+c", function () {
      let close_active_window = document.getElementsByClassName('multitask-window-header')[0].getElementsByClassName('button-round')[2];
      close_active_window.click();
    });

    
    //subscribers
    Mousetrap.bind("alt+w", function () {
      document.getElementsByClassName('content ng-binding')[3].click();
    });

    Mousetrap.bind("alt+n", function () {
      document.getElementsByClassName('main-view-sidebar additional-sidebar')[0].getElementsByClassName('button-round inline ng-scope')[0].click();
      debugger;
      setTimeout(() => {
        getElementByText(document.getElementsByClassName('dropdown-option ng-scope'), ['Карта точек выдачи', 'Карта точок видачі']).click();

        setTimeout(() => {
          getElementByText(document.getElementsByClassName('content ng-pristine ng-valid')[0].getElementsByClassName('ng-binding ng-scope'), ['Точки выдачи', 'Точки видачі']).click();
        }, 0);
      }, 0);
    });

    Mousetrap.bind("alt+s", function () {
      btnMenuClient.click();
      setTimeout(() => {
        getElementByText(getMenuClient(), ['Платежи клиента','Платежі клієнта']).click();

        setTimeout(() => {
          getElementByText(getPaymentsClient(), ['Регулярные платежи', 'Регулярні платежі']).click();

          setTimeout(() => {
            getElementByText(document.getElementsByClassName('modal-bg'), ['Подписки','Підписка']).click();

          }, 1000);
        }, 0);
      }, 0);
    });

    Mousetrap.bind("alt+y", function () {
      btnMenuClient.click();
      setTimeout(() => {
        getElementByText(getMenuClient(), ['Доставка мгновенной карты', 'Доставка миттєвої карти']).click();
      }, 0);
    });
  });
}