//Current user (when your signed in on roblox)
javascript:roblox:var user = RobloxBadges.getCurrentUserId();alert("Your current user is : "+user)

//User info
javascript:roblox:var myUser = Roblox.CurrentUser; if(myUser) {console.log("User Found"); var is13orOver = myUser.is13orOver; var displayName = myUser.displayName; var userId = myUser.userId; var isPremium = myUser.isPremiumUser; var name = myUser.name; var hasBadge = myUser.hasVerifiedBadge; var authenticated = myUser.isAuthenticated;  } else {prompt("You are not logged in as a user.")}

//Tests
//Dialog controller
javascript:roblox:function openDialog(o){Roblox.Dialog.open(o)}function closeDialog(o){Roblox.Dialog.close(o)}function click(o){"yes"==o|!0==o&&Roblox.Dialog.clickYes(),"no"==o|!1==o&&Roblox.Dialog.clickNo()}function SetButtons(o){o?Roblox.Dialog.enableButtons():Roblox.Dialog.disableButtons()}function toggleProcessing(){Roblox.Dialog.toggleProcessing()}var message=prompt("What would you like to do with Dialog? {Close | Open | Set button status | toggle Processing | Click button} (say them the way I said)");"Close"==message&&closeDialog(prompt("t")),"Open"==message&&openDialog(prompt("f")),"Set button status"==message&&SetButtons(prompt("Status (yes | no")),"Click button"==message&&click(prompt("What Button (yes or no)")),"toggle Processing"==message&&toggleProcessing();

//Device data
javascript:roblox:var meta = Roblox.DeviceMeta(); alert("Device: "+meta.deviceType+", App type: "+meta.appType+", Is in app: "+meta.isInApp+", is Desktop: "+meta.isDesktop+", Is phone: "+meta.isPhone+", Is console: "+meta.isConsole+", is IOS app: "+meta.isIosApp+", Is IOS device: "+meta.isIosDevice+", is Phone: "+meta.isPhone+", Is Roblox Studio: "+meta.isStudio+", Is tablet: "+meta.isTablet+", Is UWPApp: "+meta.isUWPApp+", Is universal app: "+meta.isUniversalApp+", Is isWin32App: "+meta.isWin32App+", is XBOX app: "+meta.isXboxApp)

//Open roblox studio
javascript:roblox:Roblox.GameLauncher.openStudio()

//Try asset in roblox studio (copy a model asset id then put it into the prompt)
javascript:roblox:Roblox.GameLauncher.tryAssetInStudio(prompt("What asset id?"))

//Edit game in studio (copy a game id then put it into the prompt)
javascript:roblox:Roblox.GameLauncher.editGameInStudio(prompt("What game id?"))


//Vote Controller 
javascript:roblox:var voting = Roblox.Voting; function setVotes(upvotes, downvotes) {Roblox.Voting.SetVotes(upvotes, downvotes)}; alert("If you aren't on a game, this won't work."); var up = prompt("Upvotes"); var down = prompt("Downvotes"); setVotes(up, down)

//Follow user into game (unfixed)
javascript:roblox:Roblox.GameLauncher.followPlayerIntoGame(prompt("What is the user id?"))

//Fake robux count (broken for now, it just worked bruh)























var currentRobux = document.getElementsByClassName("rbx-text-navbar-right text-header")[0].textContent;
var last = localStorage.getItem('fake-rbx-count');
if(!last) {
  localStorage.setItem('fake-rbx-count', document.getElementById("nav-robux-amount").innerHTML)
}
if(!Roblox) {
  alert("Please go to roblox, This can't work when not on roblox.")
  const RobloxScripts = {}
  
}
function FakeRobux(robux = 0, i = true, f = true) {
  
  if(robux !=null & i == true) {
var robuxCounter = document.getElementById("nav-robux-amount");
var balanceCounter = document.getElementsByClassName('rbx-menu-item')[4] | document.getElementById('nav-robux-balance');
var balance2 = document.getElementsByClassName('icon-robux-16x16')[0];   //document.getElementsByClassName('icon-robux-16x16')[0].parentElement.textContent
var gamepassRemainder = document.getElementsByClassName('modal-footer text-footer modal-footer-center')[0];
var gamepass2 = document.getElementsByClassName('text-robux')[1] // textContent
var gamepass3 = document.getElementsByClassName('icon-robux-gray-16x16')[0]
var gm2result = 0;
var gmresult = 0;
var gm3endChar = 0;
var rbxChar = currentRobux.length;
var gm3startChar = 0;
var subrbx = 0;
var gm3result = 0;
if(gamepass2) {
   gm2result = gamepass2.textContent
}
if(gamepass3) {
  var gm3 = gamepass3.parentElement
  gm3result = gm3.textContent

  gm3endChar = gm3.textContent.length - 1
  if (!gm3endChar == ".") {
    gm3endChar = gm3.textContent.length - 2
  }
  gm3startChar = gm3endChar - currentRobux.length - -2

   subrbx = gm3.textContent.substring(gm3startChar, gm3endChar)
}
if(gamepassRemainder) {
  
}
var rbx = robux;
var r = robux;
console.log(robux)
var stats = {};
stats.finished = false;
stats.request = rbx;
stats.error = '';

if(f == false) {
localStorage.setItem('fake-rbx-count', rbx);
  }
robuxCounter.innerHTML = rbx; // Make the fake count displayed on the main counter
if(true) {
balanceCounter.innerHTML = rbx+'&nbsp;Robux'
  }
  if(gamepassRemainder) {
    gamepassRemainder.innerHTML = 'Your balance after this transaction will be <span class="icon-robux-gray-16x16"></span>'+subrbx+rbx+'.'
  }
  if(balance2) {
    var rbx_span = document.getElementsByClassName('icon-robux-16x16')[0].parentElement.children[0]
    //document.getElementsByClassName('icon-robux-16x16')[0].parentElement.parentElement.appendChild(rbx_span)
    document.getElementsByClassName('icon-robux-16x16')[0].parentElement.innerHTML = 'My Balance: <span class="icon-robux-16x16"></span>'+rbx;
  }
  if(gamepass2) {
    gamepass2.textContent = rbx - gm2result
  }
  if(gamepass3) {
    gamepass3.innerHTML = 'Your balance after this transaction will be <span class="icon-robux-gray-16x16"></span>'+rbx+'.'
  }
stats.finished = true;
stats.localStorageID = 'fake-rbx-count';
if(f == false) {
localStorage.setItem('fake-rbx-count', rbx)
}
console.log(localStorage.getItem('fake-rbx-count'))
console.log(rbx)
return stats;
}
}
console.log(last)
FakeRobux(last, true, true) // set it to the last count
var aws01 = prompt(" Last fake robux count on page restored, Do you want to set the fake robux count? Yes or No (say the exact same i said)");
var a = aws01;
if(a == 1 | a == true  | a == 'yes' | a == 'true' | a == 'Yes' | a == 'True') {
  var amount = prompt("Amount")
  setInterval(FakeRobux, 10, amount, true, true)  
  localStorage.setItem('fake-rbx-count', amount.trim());
  console.log('trim '+amount.trim())
  console.log(localStorage.getItem('fake-rbx-count'))
  localStorage.setItem('fake-rbx-count', amount.trim())
} else {
  console.log(localStorage.getItem('fake-rbx-count').trim())
setInterval(FakeRobux, 10, localStorage.getItem('fake-rbx-count').trim(), true, false)  


}


