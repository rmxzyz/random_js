//literally took so long for me to make, idk why. works with any website with a "video" element (youtube, tiktok, or others). only 1 video at a time.
var lastKey = localStorage.getItem('lastKey') || 'AIzaSyA8NTol288WL_csT8DeSB3GE4v-eDIqfb4'
function getYoutuberName() {
    var s2; try {document.getElementsByClassName('yt-simple-endpoint style-scope yt-formatted-string')[0].textContent.trim()}catch(error) {s2="Unkown / Guest"};
    return s2
}
function getVideo() {
    return document.querySelector('video')
}
function getVideoData() {
    var b=location.search.split("v=")[1].split("&")[0];
    var promise = new Promise((resolve, reject) => {
    fetch(`https://returnyoutubedislikeapi.com/votes?videoId=${b}`, {method: 'GET'}).then(function(response) {response.json().then((res) => {resolve(res)})})
    });
    return promise // {dateCreated, deleted, dislikes, id, likes, rating, viewCount}
}

            function secondsToMinute(seconds) {
            return Math.floor(seconds / 60);
            }
            var c=document.createElement("div");
c.className="menu-container";
c.style.position="absolute";
c.style.top="50px";
c.style.left="50px";
document.body.appendChild(c);
var m=document.createElement("ul");
m.className="menu-list";
c.appendChild(m);
var i=["Controls"];


i.forEach(function(t){var e=document.createElement("li");
e.className="menu-item";
e.textContent=t;
m.appendChild(e)});
c.style.width="400px";
c.style.height="300px";
c.style.border="1px solid #000";
c.style.borderRadius="10px";
c.style.padding="10px";
c.style.transition="top 0.3s, left 0.3s, background-color 0.2s, color 0.2s";
c.style.userSelect="none";
c.style.filter = 'none'
m.style.listStyle="none";
m.style.margin="0";
m.style.padding="0";
var s={padding:"12px",borderBottom:"1px solid #ccc",cursor:"pointer",transition:"background-color 0.3s ease-in-out"};
var n=document.getElementsByClassName("menu-item");
for(var j=0;j<n.length;j++){var r=n[j];
for(var p in s){r.style[p]=s[p]}}
var d=!1,u={x:0,y:0};
c.addEventListener("mousedown",function(t){d=!0,u.x=t.clientX-c.offsetLeft,u.y=t.clientY-c.offsetTop;
document.body.style.userSelect="none"});
document.addEventListener("mousemove",function(t){if(d){c.style.top=t.clientY-u.y+"px";
c.style.left=t.clientX-u.x+"px"}});
document.addEventListener("mouseup",function(){d=!1;
document.body.style.userSelect="auto"});
var b=document.createElement("button");
b.textContent="Toggle Dark Mode";
b.setAttribute('class', 'dark-mode btn_if')
document.body.appendChild(b);
var dark = false;
b.addEventListener("click",function(){dark = !dark ;c.classList.toggle("dark-mode"); if(dark) {b.style.backgroundColor = 'white'; b.style.color = 'black'} else {b.style.backgroundColor = 'black'; b.style.color = 'white'}});
var h=document.createElement("style");
c.classList.toggle('dark-mode');//enable it for now
h.innerHTML=`.menu-container{background-color:#f5f5f5; transition: background-color 0.2s ease-in-out; color 0.2s ease-in-out; filter: blur(0px);}.menu-item:hover{background-color:#eaeaea; filter: blur(0.9px);}.dark-mode{background-color:#222;color:#fff;border-color:#fff;}.dark-mode .menu-item:hover{background-color:#333;} .btn_if {position:absolute;top:10px;right:10px;}input[type='text']{width:100%;border:none;border-bottom:1px solid #000;margin-top:5px;padding:5px;background-color:transparent;}.input-container{width:100%;border:none;border-bottom:1px solid #000;display:flex;align-items:center;margin-top:5px;}.input-label{margin-right:5px;}.input-text{flex:1;border:none;background-color:transparent; color:grey;}
.input-text {
    font-family: monospace;
    transition: all 0.3s ease-in-out;
    
}
.menu-container {
z-index: 1000;
}
dark-mode {
font-family: monospace;
    transition: all 0.3s ease-in-out;
    color: white;
}
.menu-container {
    color: black;
    transition: background-color 0.2s ease-in-out; color 0.2s ease-in-out;
}
.dark-mode {
    font-family: monospace;
    transition: all 0.3s ease-in-out;
    color: white;
}
button .input_label, button.input_label, button .input-label, button,input-label {
    color: grey;
}
.dark-mode {
    font-family: monospace;
}
.dark-mode > .input-label, .dark-mode > .input_label {
    color: white;
}
.dark-mode:hover {
    filter: blur(1.1px);
    
}
input.input-text:disabled {
    color: grey;
    border-radius: 20px;
        transition: all 0.8s;

}
input.input-text:enabled {
    transition: all 0.8s;
}
input.input-text:active {
    filter: blur(2.1px) contrast(240);
    color: white;
}
.input-text:hover {
    filter: blur(1.1px);
    font-family: monospace;
    color: white;
}
.input-label {
    transition: all 0.3s ease-in-out;
    font-family: monospace;
}
.input-label:hover {
    filter: blur(1.1px);
    color: white;
}
button.input-label:hover {
    filter: blur(1.1px);
    color: black;
}
.input_label, .input-label:darkmode {
    color: black;
}
span.input-label  {
    color:grey;
}
button.input-label {
color:black; 
}
.menu-item {
    font-family: monospace;
    overflow: hidden; position: relative;
}
.input-label {
    color: black;
}
.ripple {
    font-family: monospace;
    overflow: hidden; position: relative;
    animation: .5s linear;
}
.input_label, .input-label {
    color: white;
}
@-webkit-keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2);
    }
}
@-moz-keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2);
    }
}
@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2);
    }
}@media (prefers-reduced-motion: reduce) { 
    * {
        -webkit-transition-property: none;
        -moz-transition-property: none;
        transition-property: none;
    }
}
`; // @media prefer thing is for browsers who have reduced motion, to slow it.
document.body.appendChild(h);
var i=document.createElement("div");
i.className="input-container";
/*
function createItem(label, inputType, inputPlaceholder, inputNeeded, inputValue, spanClass, inputClass) {
    var cls;
    /*switch(spanClass) {
    case null: 
    cls = null;
    break;
    default: 
    cls = "span";
    }* /
    if(spanClass) {
cls = spanClass
}
    if(spanClass == null|| !spanClass) {
    spanClass = 'span'}
    var l=document.createElement(cls || "span");
    //var div = document.createElement('div')
l.className="input-label";
l.textContent=label;

var a=document.createElement("input");
if(inputNeeded) {
if(inputClass) {
a.outerHTML =`<${inputClass}></${inputClass}>`
}
a.className="input-text";
a.value = inputValue
a.type=inputType;
a.placeholder=inputPlaceholder;
}
i.appendChild(l);
if(inputNeeded) {
i.appendChild(a);
}
if(!inputNeeded || inputNeeded == false) {
    a.remove()
    }
//c.appendChild(div)
//div.appendChild(l)
//div.appendChild(i)
c.appendChild(i);

return {span: l, input: a}
}
*/
function createItem(label, inputType, inputPlaceholder, inputNeeded, inputValue, spanClass, inputClass) {
  var cls;
  if (spanClass) {
    cls = spanClass;
  }
  if (spanClass == null || !spanClass) {
    spanClass = 'span';
  }

  // Create a container div for the item
  var itemContainer = document.createElement('div');
  itemContainer.classList.add('item-container');

  var l = document.createElement(cls || "span");
  l.className = "input-label";
  l.textContent = label;

  var a = document.createElement("input");
  if (inputNeeded) {
    if (inputClass) {
      a.outerHTML = `<${inputClass}></${inputClass}>`;
    }
    a.className = "input-text";
    a.value = inputValue;
    a.type = inputType;
    a.placeholder = inputPlaceholder;
  }
  itemContainer.appendChild(l);
  if (inputNeeded) {
    itemContainer.appendChild(a);
  }
  if (!inputNeeded || inputNeeded == false) {
    a.remove();
  }

  // Append the item container to the main container
  var mainContainer = c
  mainContainer.appendChild(itemContainer);

  // Set the height of the main container and add a scrollbar
  mainContainer.style.height = '300px';
  mainContainer.style.overflow = 'auto';

  return {span: l, input: a, container: itemContainer};
}

var src2;try {src2 = document.querySelector('video').src}catch(error) {}
var itemC = {
    Playback: {style: `border-radius: 20px;`,InputClass: 'number', SpanClass: 'span',InputNeeded: true, TextLabel: "Playback Rate", InputType: "number", InputPlaceholder: 1,Value: 1,Args: {playbackSpeed: [type="number"],YTVideo :[code="document.querySelector('video')"]}, onchange: (playbackSpeed, video) => {var vid = video; if(vid) {vid.playbackRate = Number(playbackSpeed)}}},
    Time: {style: `border-radius: 20px;`,InputClass: 'br', SpanClass: 'button',InputNeeded: false, TextLabel: "Skip Ad", InputType: "button", InputPlaceholder: '', Value: '', Args: {YTVideo: [code="document.querySelector('video')"]}},
    Controls: {style: `border-radius: 20px;`,InputClass: 'br', SpanClass: 'button',InputNeeded: false, TextLabel: "Toggle Controls", InputType: "button", InputPlaceholder: '', Value: '', Args: {YTVideo: [code="document.querySelector('video')"]}},
    Loop: {style: `border-radius: 20px;`,InputClass: 'br', SpanClass: 'button',InputNeeded: false, TextLabel: "Toggle Loop", InputType: "button", InputPlaceholder: '', Value: '', Args: {YTVideo: [code="document.querySelector('video')"]}},
    SourceFile: {style: `border-radius: 20px;`,InputClass: 'string', SpanClass: 'span',InputNeeded: true, TextLabel: "Set Source", InputType: "file", InputPlaceholder: 1,Value: 1,Args: {source: [type="number"],YTVideo :[code="document.querySelector('video')"]}, onchange: (playbackSpeed, video) => {var vid = video; if(vid) { /*var reader = new FileReader(); */}}},
    SourceLink: {style: `border-radius: 20px;`,InputClass: 'string', SpanClass: 'span',InputNeeded: true, TextLabel: "Set Source", InputType: "url", InputPlaceholder: src2,Value: src2,Args: {playbackSpeed: [type="number"],YTVideo :[code="document.querySelector('video')"]}, onchange: (playbackSpeed, video) => {var vid = video; if(vid) {vid.src = /*URL(src) ||*/ String(src)}}},
    Source: {style: `border-radius: 20px;`, InputClass: 'br', SpanClass: 'span',InputNeeded: false, TextLabel: "Current Source", InputType: "button", InputPlaceholder: src2,Value: src2,Args: {playbackSpeed: [type="number"],YTVideo :[code="document.querySelector('video')"]}, onchange: (playbackSpeed, video) => {var vid = video; if(vid) {vid.src = String(src)}}},

};
var csA2 = {};
if(document.querySelector('video')) {
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    if (mutation.type === "attributes") {
      var item = csA2.Source || csA2['Source'];


      // Example of accessing the element for which 
      // event was triggered
      //mutation.target.textContent = "Attribute of the element changed";
    }
    
    //console.log(mutation.target);
  });
});

observer.observe(document.querySelector('video'), {
  attributes: true //configure it to listen to attribute changes
});
};
ReadFileAsText = function(file) {
    let promise = new Promise((resolve, reject) =>{
    let fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.onload = function(ev) {
        resolve(fileReader.result);
    };
    fileReader.onerror = function(error) {
        reject('ReaderError: '+error)
    }
});
return promise;
}
ReadFileAsURL = function(file) {
    let promise = new Promise((resolve, reject) =>{
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function(ev) {
        resolve(fileReader.result);
    };
    fileReader.onerror = function(error) {
        reject('ReaderError: '+error)
    }
});
return promise;
}
var Keys = Object.keys(itemC)
Keys.forEach((item) => {
    var value = itemC[item];
    let style = value.style;
    var valu = value;
    var text = value.TextLabel;
    var inputType = value.InputType;
    var Args = value.Args;
    var inputPlaceholder = value.InputPlaceholder
    if(inputType) {
    var items; 
    //if(text != "Skip Ad") {
        items = createItem(text+' \n', inputType, inputPlaceholder || 'text', value.InputNeeded || true, value.Value, value.SpanClass, value.inputClass)
        //} //else {
            //   items = createItem(text+' \n', inputType, inputPlaceholder || 'text', value.InputNeeded || true, value.Value, 'span',"button")
 
        //}
        var br = document.createElement('br')
        var ea1 = document.getElementsByClassName('input-container')[0]//.appendChild(br)
        var span = items.span;
        var input = items.input;
        input.style += style;
        span.style += style;
        var onchange = value.onchange;
        var txt = value.TextLabel;
         if(txt == "Skip Ad") {
            span.onclick = function() {
            console.log("CLICK_LOAD2");
            var vid = document.querySelector('video')
            if(vid) {
                vid.currentTime = vid.duration * 50|| 1000000;
            } else {span.style.color = 'red'}
            span.style.filter = 'blur(5px) hue-rotate(23deg) brightness(40) opacity(0.5)'
            setTimeout(() => {span.style.filter = 'blur(0.4px)'; span.style.color = 'black'}, 170)
            }
         }
         if(txt == "Set Source") {
         //console.log(span, input)
         if(input.type == "file") {
         console.log('file found!');
         input.allow = ".mp4, .webm, .mov, .wmv, .flv, .avi, .avchd, .mkv, .m4v, .mts, .3gp, .insv, .m2tsm .mpeg";
                  input.accept = ".mp4, .webm, .mov, .wmv, .flv, .avi, .avchd, .mkv, .m4v, .mts, .3gp, .insv, .m2tsm .mpeg";

         input.onchange = function(event) {
            var fileList = input.files;
            let file = fileList[0];
            let fi = ReadFileAsURL(file);
            fi.then((response) => {
            var vid = document.querySelector('video'); if(vid) {vid.src = response; vid.currentSrc = src}})

}

         }
         }
         if(txt == "Toggle Controls") {
         span.onclick = function() {
            console.log("CLICK_LOAD3");
            var vid = document.querySelector('video')
            if(vid) {
                var isControlMode = (vid.getAttribute('controls') == null)
                if(isControlMode) {vid.removeAttribute('controls')} else {vid.setAttribute('controls', true)}

            } else {span.style.color = 'red'}
            span.style.filter = 'blur(5px) hue-rotate(23deg) brightness(40) opacity(0.5)'
            setTimeout(() => {span.style.filter = 'blur(0.4px)'; span.style.color = 'black'}, 170)
            }
         }
         if(txt == "Toggle Loop") {
          span.onclick = function() {
            console.log("CLICK_LOAD4");
            var vid = document.querySelector('video')
            if(vid) {
                vid.loop = !vid.loop

            } else {span.style.color = 'red'}
            span.style.filter = 'blur(5px) hue-rotate(23deg) brightness(40) opacity(0.5)'
            setTimeout(() => {span.style.filter = 'blur(0.4px)'; span.style.color = 'black'}, 170)
            }
         }
        if(input) {
            input.addEventListener('input', () => {
                var valuea = input.value;
                if(valuea.length == 0) {
                    //input.value = 1;
                    valuea = 0.25;
                }
                var arguments = Args;
                var txt = value.TextLabel
                if(txt == "Skip Ad") {
                    console.log("SKIP_LOAD")
                    }
                if(txt == "Playback Rate") {
                   try { onchange(value, document.querySelector('video'))
                   }catch(error) {};
                   var vid = document.querySelector('video')
                   if(vid) {
                   var num = Number(valuea)
                   if(num > 16) {num = 16} 
                   if(!num) {num=1}
                   console.log(valuea)
                   vid.playbackRate = Number(valuea);
                   }
                    } 
                    
                /*
                var updateKeys = [];
                var keys = Object.keys(arguments)
                
                keys.forEach((key) => {
                    if(typeof(arguments[key]) == "number")  {
                        if(!Object.hasOwnProperty.call(updateKeys, arguments[key])) {
                            console.log('number ', arguments[key])
                            updateKeys.push(key, arguments[key])
                        }
                    }
                    if(typeof(arguments[key] == "string"))  {
                        if(!Object.hasOwnProperty.call(updateKeys, arguments[key])) {
                            console.log('string 21', arguments[key])
                            updateKeys.push(key, arguments[key])
                        }
                    }


                    var string; try {string = JSON.stringify(arguments[key])} catch(error) {}
                    console.log('first', arguments[key])
                    if(string) {
                       // console.log(1)
                        var e = arguments[key]
                        console.log('string ',e)
                        if(e.at) {
                            
                            if(!Object.hasOwnProperty.call(updateKeys, [arguments[key]]) && !Object.hasOwnProperty.call(updateKeys, arguments[key]))
                                updateKeys.push(arguments[key].at(0));
                                console.log('e.at', arguments[key].at(0));
                        
                        }
                        if(arguments[key].code) {
                            console.log(2)
                            console.log(arguments[key].code)
                            updateKeys.push(arguments[key].code)
                        }
                    }
                })*/
                //console.log(updateKeys)
            })

            
        }
    } else {
        var items = createItem(text, null, null, false)
        var span = items.span;
        var input = items.input;
    }
})
const ripple = (e) => {
    // Our code will go here.
    let width = e.target.offsetWidth;
    let height = e.target.offsetHeight;
    width >= height ? (height = width) : (width = height);
    const ripple = document.createElement(`span`);
    e.target.appendChild(ripple);

    ripple.style = `
        height: ${height}px !important;
        left: ${e.pageX - e.target.offsetLeft - width / 2}px !important;
        top: ${e.pageY - e.target.offsetTop - height / 2}px !important;
        width: ${width}px !important;
        `.trim(); // `trim()` will remove the trailing whitespace.
        ripple.classList.add(`ripple`);
        setTimeout(() => e.target.removeChild(ripple), 500);

};
document.querySelectorAll(`.menu-item`).forEach((button) => {
    button.addEventListener(`click`, ripple);
});
