!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("span[data-days]"),n=document.querySelector("span[data-hours]"),o=document.querySelector("span[data-minutes]"),s=document.querySelector("span[data-seconds]"),a={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose:function(a){var r=(new Date).getTime(),u=a[0].getTime();if(u<=r)return Notiflix.Notify.failure("Please choose a date in the future"),void(t.disabled=!0);t.disabled=!1;var i=setInterval((function(){var t,a,r,d,c,l,m,f,h,x=(new Date).getTime(),y=u-x,C=(t=y,c=24*(d=60*(r=60*(a=1e3))),l=Math.floor(t/c),m=Math.floor(t%c/d),f=Math.floor(t%c%d/r),h=Math.floor(t%c%d%r/a),{days:l,hours:m,minutes:f,seconds:h});if(y<=0)return clearInterval(i),void Notiflix.Notify.success("Time has left");C.days<10?e.textContent="0"+C.days:C.days>=10?e.textContent=C.days:0===C.days&&(e.textContent="00"),C.hours<10?n.textContent="0"+C.hours:C.hours>=10?n.textContent=C.hours:0===C.hours&&(n.textContent="00"),C.minutes<10?o.textContent="0"+C.minutes:C.minutes>=10?o.textContent=C.minutes:0===C.minutes&&(o.textContent="00"),C.seconds<10?s.textContent="0"+C.seconds:C.seconds>=10?s.textContent=C.seconds:0===C.seconds&&(s.textContent="00")}),1e3)}};flatpickr("#datetime-picker",a)}();
//# sourceMappingURL=02-timer.0a33e613.js.map
