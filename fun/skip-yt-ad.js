javascript: document.querySelector("video").currentTime =
  document.querySelector("video").duration;

//Auto
  javascript:var length = document.querySelector("video").duration;   function check() {if(document.querySelector('video').duration != length)  { document.querySelector("video").currentTime =   document.querySelector("video").duration;} };   setInterval(check, 10)
