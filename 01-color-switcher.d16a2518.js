const t={start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]"),body:document.querySelector("body")};t.start.addEventListener("click",(function(){t.start.disabled=!0,t.stop.disabled=!1,e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3)})),t.stop.addEventListener("click",(function(){t.start.disabled=!1,t.stop.disabled=!0,clearInterval(e)}));let e=null;
//# sourceMappingURL=01-color-switcher.d16a2518.js.map
