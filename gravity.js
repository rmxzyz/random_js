javascript:var script = document.createElement("script"); script.src="https://cdn.jsdelivr.net/gh/rmxzyz/random_js@main/fsj/gravity.js"; document.body.appendChild(script);void(0);

/* FIX : 
Uncaught TypeError: els[i].className.split is not a function
    at getElementsByClass (gravity.js:1804:37) <---
    at init (gravity.js:1464:16)  ^^^^^^^^^^^^^
    at gravity.js:1430:4
*/
