//normal
javascript:["","-ms-","-webkit-","-o-","-moz-"].map(function(o){Array.prototype.slice.call(document.querySelectorAll("div,p,span,img,a,body")).map(function(t){t.style[o+"transform"]="rotate("+(Math.floor(3*Math.random())-1)+"deg)"})});

//animated / smooth
javascript:["","-ms-","-webkit-","-o-","-moz-"].map(function(o){Array.prototype.slice.call(document.querySelectorAll("div,p,span,img,a,body")).map(function(t){t.style[o+"transition"]="transform 0.5s ease-in-out",t.style[o+"transform"]="rotate("+(Math.floor(3*Math.random())-1)+"deg)"})});
