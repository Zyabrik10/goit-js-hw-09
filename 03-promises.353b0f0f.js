!function(){function e(e,t){return Math.random()>.3?Promise.resolve({position:e,delay:t}):Promise.reject({position:e,delay:t})}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();var n=Number(document.querySelector("input[name=delay]").value),o=Number(document.querySelector("input[name=step]").value),i=Number(document.querySelector("input[name=amount]").value);setTimeout((function(){var t=1;e(t,n).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}));var c=setInterval((function(){t>=i?clearInterval(c):e(++t,n+o*(t-1)).then((function(e){var t=e.position,n=e.delay;Notiflix.Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;Notiflix.Notify.failure("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))}))}),o)}),n)}))}();
//# sourceMappingURL=03-promises.353b0f0f.js.map
