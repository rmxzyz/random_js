/* click and hold on something to drag it*/var b=X=Y=T=L=0;document.addEventListener("click",function(a){a.preventDefault()},!0);document.addEventListener("mousedown",c);document.addEventListener("touchstart",c);function c(a){a.preventDefault();a.target!==document.documentElement&&a.target!==document.body&&(b=Date.now(),a.target.setAttribute("data-drag",b),a.target.style.position="relative",T=a.target.style.top.split("px")[0]||0,L=a.target.style.left.split("px")[0]||0);X=a.clientX||a.touches[0].clientX;Y=a.clientY||a.touches[0].clientY}document.addEventListener("mousemove",d);document.addEventListener("touchmove",d);function d(a){if(""!==b){var e=document.querySelector('[data-drag="'+b+'"]');e.style.top=parseInt(T)+parseInt((a.clientY||a.touches[0].clientY)-Y)+"px";e.style.left=parseInt(L)+parseInt((a.clientX||a.touches[0].clientX)-X)+"px"}}document.addEventListener("mouseup",f);document.addEventListener("touchend",f);function f(){b=""}document.addEventListener("mouseover",g);function g(a){a.target.style.cursor="move";a.target.style.boxShadow="inset lime 0 0 1px,lime 0 0 1px"}document.addEventListener("mouseout",h);function h(a){a.target.style.cursor=a.target.style.boxShadow=""};
