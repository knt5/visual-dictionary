!function r(e,t,o){function n(c,u){if(!t[c]){if(!e[c]){var f="function"==typeof require&&require;if(!u&&f)return f(c,!0);if(i)return i(c,!0);var s=new Error("Cannot find module '"+c+"'");throw s.code="MODULE_NOT_FOUND",s}var a=t[c]={exports:{}};e[c][0].call(a.exports,function(r){var t=e[c][1][r];return n(t?t:r)},a,a.exports,r,e,t,o)}return t[c].exports}for(var i="function"==typeof require&&require,c=0;c<o.length;c++)n(o[c]);return n}({1:[function(r,e,t){"use strict";r("./init")},{"./init":2}],2:[function(r,e,t){"use strict";console.log("hi");var o="cat",n=encodeURIComponent(o);$("#text-frame").prop("src","http://eow.alc.co.jp/sp/search.html?q="+n),$("#image-frame").prop("src","https://www.google.co.jp/search?q="+n+"&tbm=isch&safe=high")},{}]},{},[1]);