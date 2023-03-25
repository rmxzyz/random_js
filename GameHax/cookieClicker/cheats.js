//simple autoclicker
javascript:var autoclicker = setInterval(function(){ try { Game.lastClick -= 1000; document.getElementById('bigCookie').click(); } catch (err) { console.error('Stopping auto clicker'); clearInterval(autoclicker); } }, 0.1);

//----Hack menu
javascript:(function(){function n(){var e=document.getElementsByClassName("product");for(i=0;i<e.length;i++){e[i].click()}}function r(){var e=document.getElementsByClassName("upgrade");for(i=0;i<e.length;i++){e[i].click()}}function s(t,n){if(!e.buttons[t]){return}e.buttons[t].interval=setInterval(n,e.intervalDelay)}function o(t){clearInterval(e.buttons[t].interval)}function u(t,n){if(!e.buttons[t].on){s(t,n);e.buttons[t].on=true;e.buttons[t].element.className="active"}else{o(t);e.buttons[t].on=false;e.buttons[t].element.className=""}}function a(){if(document.getElementById(e.panelId)){document.getElementById(e.panelId).remove()}e.panel=document.createElement("div");e.panel.id=e.panelId;var t=document.createElement("span");t[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=e.panelLabel;e.panel.appendChild(t);document.body.appendChild(e.panel)}function f(t,n,r){if(!e.buttons[t]){return}e.buttons[t].element=document.createElement("button");e.buttons[t].element[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=n;e.buttons[t].element.addEventListener("click",r);e.panel.appendChild(e.buttons[t].element)}function l(){var t=document.createElement("style");t.type="text/css";document.body.appendChild(t);document.getElementsByTagName("head")[0].appendChild(t);var n="#"+e.panelId+"{position:fixed;top:0;right:0;background:#fff;color:#000;padding:5px;z-index:9999;}#"+e.panelId+" button{margin-left: 5px;}#"+e.panelId+' button.active:after{content:"*";color:red;}';t[typeof document.body.style.WebkitAppearance=="string"?"innerText":"innerHTML"]=n}var e={panelId:"cookie-cheater",panelLabel:"CheatMenu",intervalDelay:1,buttons:{bigCookie:{label:"Auto-click cookie",action:function(){u("bigCookie",function(){Game.ClickCookie()})}},autoGoldenCookie:{label:"Auto-click golden cookie",action:function(){u("autoGoldenCookie",function(){Game.goldenCookie.click()})}},buyProducts:{label:"Buy products",action:function(){n()}},autoBuyProducts:{label:"Auto-buy products",action:function(){u("autoBuyProducts",function(){n()})}},buyUpgrades:{label:"Buy upgrades",action:function(){r()}},autoBuyUpgrades:{label:"Auto-buy upgrades",action:function(){u("autoBuyUpgrades",function(){r()})}},showGoldenCookieDelay:{label:"Show golden cookie delay in title",action:function(){u("showGoldenCookieDelay",function(){document.title="("+Math.floor(Game.goldenCookie.delay/Game.fps)+" s) "+Beautify(Game.cookies)+" "+(Game.cookies==1?"cookie":"cookies")})}}}};l();a();for(var t in e.buttons){if(!e.buttons[t]){return}f(t,e.buttons[t].label,e.buttons[t].action)}})()

//----autosave
javascript:var time=1e3*parseInt(prompt("How many seconds between saves?","3600"));setInterval(function(){Game.FileSave()},time)

//----Hack Menu (at top left corner)
javascript:Game.OpenSesame();

//Infinite Cookies
javascript:Game.Earn(Math.pow(10010100001010101010101001010111111111111111111100000000000000000 * (Math.PI * 1901000191991), 1000000000))

//Set FPS
javascript:function setFPS(fps) {Game.fps = fps}; setFPS(Number(prompt("FPS (number)"))

//All Achievs
Game.SetAllAchievs(1);

//All upgrades
Game.SetAllUpgrades(1);

//Debugs
Game.debugTimersOn=!Game.debugTimersOn;Game.OpenSesame();

//Ruin the fun (max out game)
Game.RuinTheFun(1);
//Reset
Game.SesameReset();

//Max Specials
Game.MaxSpecials();

//Reset refills
Game.lumpRefill=0;/*Date.now()-Game.getLumpRefillMax();

//Debug upgrade
Game.DebugUpgradeCpS();

//New seed
alert(Game.seed=Game.makeSeed())

//thing
Game.heralds=100;l('heraldsAmount').textContent=Game.heralds;Game.externalDataLoaded=true;Game.recalculateGains=1;

//Frenzy
var newShimmer=new Game.shimmer('golden');newShimmer.force='frenzy';

//Lucky
var newShimmer=new Game.shimmer('golden');newShimmer.force='multiply cookies';

//Ruin
var newShimmer=new Game.shimmer('golden');newShimmer.force='ruin cookies';

//Elder Frenzy
var newShimmer=new Game.shimmer('golden');newShimmer.force='blood frenzy';

//Clot
var newShimmer=new Game.shimmer('golden');newShimmer.force='clot';

//Click Frenzy
var newShimmer=new Game.shimmer('golden');newShimmer.force='click frenzy';

//cursed finger
var newShimmer=new Game.shimmer('golden');newShimmer.force='cursed finger';

//cookie chain
var newShimmer=new Game.shimmer('golden');newShimmer.force='chain cookie';

//cookie storm
var newShimmer=new Game.shimmer('golden');newShimmer.force='cookie storm';

//building special
var newShimmer=new Game.shimmer('golden');newShimmer.force='building special';

//dragon harvest
var newShimmer=new Game.shimmer('golden');newShimmer.force='dragon harvest';

//dragonflight
var newShimmer=new Game.shimmer('golden');newShimmer.force='dragonflight';

//sweet
var newShimmer=new Game.shimmer('golden');newShimmer.force='free sugar lump';

//blab
var newShimmer=new Game.shimmer('golden');newShimmer.force='blab';

//buy 100 of all
for (var i in Game.Objects){Game.Objects[i].buy(100);}

//Ascend
Game.Ascend(prompt('level', 1);

//Sparkle at mouse when click
window.onmousedown = function() { var e = window.event; Game.SparkleAt(e.clientX, e.clientY) }



//Misc

//Popup
javascript:Game.Popup(prompt("What is the text?"), 50, 50)

