// use a javascript minifier to minify these scripts.
var html = `<div class=main-div><div class=screen id=screen><p></div><div class=clear id=clear>C</div><ul class=number-div><li>1<li>2<li>3<li>+<li>4<li>5<li>6<li>x<li>7<li>8<li>9<li>-<li>0<li>.<li id=equals>=<li>÷</ul></div>`;
var css = `*{box-sizing:border-box;font: bold 14px Arial, sans-serif;} h1{ font-size:40px; text-align:center; margin-bottom:110px; background:#673AB7; color:white; margin-top:0; padding:20px; } .main-div{ width:290px; margin:0 auto; background:#3F475B; height:310px; box-shadow:2px 2px 2px gray; padding:15px; border-bottom:5px solid #ED586C; border-radius:4px; position:relative; } .screen-div,.number-div{ padding:0; margin:0; } .screen{ list-style:none; color:white; height:45px; width:58px; margin-left:8px; border-radius:4px; border-top:4px solid #828A9B; text-align:center; font-weight:bold; font-family: 'Ubuntu', sans-serif; margin-bottom:8px; width:182px; background:#828A9B; border-top:4px solid #ED586C; overflow:hidden; } .clear{ width:60px; background:#7B8D8E; padding:10px 17px; position:absolute; border-radius:3px; left:215px; top:18px; color:white; cursor:pointer; text-align:center; } .screen{ } .number-div li{ list-style:none; float:left; width:52px; background:white; margin:9px 5px; padding:10px; border-bottom:4px solid #828A9B; border-radius:5px; color:#888888; text-align:center; transition:.2s; cursor:pointer; } .number-div li:hover{ background: #44B3C2; border-bottom: 4px solid #336699; color: white; } #equals{ background:#F43341; color:white; } #equals:hover{ background: #FE5E6A; border-bottom: 4px solid #B3232E; color: white; }`;
var style = document.createElement('style')
style.innerHTML = css
document.head.appendChild(style)
var ht = document.createElement('div')
ht.innerHTML = html
document.body.appendChild(ht)

//--- DRAG SCRIPT
function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
      // if present, the header is where you move the DIV from:
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
    }
  
    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }
  
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
  
    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
//---CALCULATOR SCRIPT

	var elements = document.getElementsByTagName("li");
	var screen = document.querySelectorAll(' p')[0];
	var clear =   document.getElementsByClassName('clear')[0];
	
	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}
	

	
	
	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               screen.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      screen.innerHTML += "*";
		   } else{
			   screen.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }
 


   clear.onclick = function () {
    screen.innerHTML = '';
  }; 

 function calculate(i) {
    return function () {
        screen.innerHTML = eval(screen.innerHTML);
    };
  }
dragElement(ht)
