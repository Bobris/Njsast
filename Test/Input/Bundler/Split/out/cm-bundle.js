var __bbb={};(function(r){"use strict";var e;e=function(e,t){var o,i;o=__bbb;i=o[t];if(i!==r){if(i instanceof Promise)return i;return Promise.resolve(i)}i=new Promise(function(n,s){var b,p;b=document.createElement("script");p=setTimeout(c,120000);function c(){b.onload=b.onerror=r;clearTimeout(p);if(o[t]===i){o[t]=r;s(new Error("Fail to load "+e))}else n(o[t])}b.charset="utf-8";b.onload=b.onerror=c;b.src=e;document.head.appendChild(b)});return o[t]=i};e("cm-lib.js","a").then(function(r){console.log(r.hello())})}).call(this)