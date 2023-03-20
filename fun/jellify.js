//debug version
javascript:(()=>{window.JELLIFY_DEBUG=1,window.JELLIFY_OPTIONS={geometry:{animationAreaZoom:1e6,translationAreaZoom:1e6}};let e=["https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js","https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/jellify.js",];e.forEach(e=>{let t=document.getElementsByTagName("head")[0],a=document.createElement("script");a.src=e,t.appendChild(a)})})();
//https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/jellify.js
//HOW TO USE: use a bookmarklet of your choice, and then scroll down and you will see jelly, if it does not work, check the developer console and see if it said "Jellify is loaded"


//normal
javascript:(()=>{let e=["https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js","https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/jellify.js",];e.forEach(e=>{let t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)})})();
//hard
javascript:(()=>{window.JELLIFY_OPTIONS={physics:{constraint:{minStiffness:.01}}};let e=["https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js","https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/jellify.js",];e.forEach(e=>{let t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)})})();
//soft
javascript:(()=>{window.JELLIFY_OPTIONS={physics:{constraint:{minStiffness:.001}}};let e=["https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js","https://cdn.jsdelivr.net/npm/matter-js@0.17.1/build/matter.min.js","https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/jellify.js",];e.forEach(e=>{let t=document.getElementsByTagName("head")[0],s=document.createElement("script");s.src=e,t.appendChild(s)})})();

//orig by sc420
