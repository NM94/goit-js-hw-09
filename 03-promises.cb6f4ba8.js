!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var r={id:e,exports:{}};return o[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=r);var i=r("6JpON"),u={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),form:document.querySelector(".form")};function a(n,o){var t=Math.random()>.3;new Promise((function(e,r){setTimeout((function(){t?e({position:n,delay:o}):r({position:n,delay:o})}),o)})).then((function(n){var o=n.position,t=n.delay;e(i).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(i).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}))}u.form.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.delay.value),o=Number(u.step.value),t=Number(u.amount.value),r=1;r<=t;r+=1)a(r,n),n+=o}))}();
//# sourceMappingURL=03-promises.cb6f4ba8.js.map