var startTime=new Date();
var endTime=new Date();
var startPressed=false;
var bgChangeStarted=false;
var maxWait=20;
var timerID;
var originalColor = document.body.style.background
function startTest()
{
	document.body.style.background=document.response.bgColorChange.options[document.response.bgColorChange.selectedIndex].text;
	bgChangeStarted=true;
	startTime=new Date();
}

function remark(responseTime)
{
	var responseString="";
	if (responseTime < 0.10)
		responseString="Well done!";
	if (responseTime >= 0.10 && responseTime < 0.20)
		responseString="Nice!";
	if (responseTime >=0.20 && responseTime < 0.30)
		responseString="Could be better...";
	if (responseTime >=0.30 && responseTime < 0.60)
		responseString="Keep practising!";
	if (responseTime >=0.60 && responseTime < 1)
		responseString="Have you been drinking?";
	if (responseTime >=1 && responseTime < 3)
		responseString="Did you fall asleep?";
    if(responseTime >= 3 && responseTime < 10) 
    responseString = "Were you destracted?"
    if(responseTime >=10) 
    responseString = "You probably slept. What even happened."
	return responseString;
}

function stopTest()
{
	if(bgChangeStarted)
	{
		endTime=new Date();
		var responseTime=(endTime.getTime()-startTime.getTime())/1000;

		document.body.style.background=originalColor    
		alert("Your response time is: " + responseTime + " Seconds " + "\n" + remark(responseTime));
		startPressed=false;
		bgChangeStarted=false;
	}
	else
	{
		if (!startPressed)
		{
			alert("Press Start First to start test.");
		}
		else
		{       
			clearTimeout(timerID);
			startPressed=false;             
			alert("Cheater! you pressed too early!");
		}               
	}
}

var randMULTIPLIER=0x015a4e35;
var randINCREMENT=1;
var today=new Date();
var randSeed=today.getSeconds();
function randNumber()
{
	randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
	return((randSeed >> 15) & 0x7fff) / 32767;
}

function startit()
{
	if(startPressed)
	{
		alert("Already started. Press stop to stop!");
		return;
	}
	else
	{
		startPressed=true; 
		timerID=setTimeout('startTest()', 6000*randNumber());
	}
}
// --> 

var html = `
<p font face="arial, helvetica" >Test your Response time!</p>
Click on "Start" first, and wait until the background color changes. As soon as it changes, hit "stop!"


<form name="response" font face="arial, helvetica" >
Change background color in: 
<select name="bgColorChange" font face="arial, helvetica" >
<option selected>deeppink
<option>aliceblue
<option>crimson
<option>darkkhaki
<option>cadetblue
<option>darkorchid
<option>coral
<option>chocolate
<option>mediumslateblue
<option>tomato
<option>darkslategray
<option>limegreen
<option>cornflowerblue
<option>darkolivegreen
</select>
<input type="button" value="start" onClick="startit()" font face="arial, helvetica" >
<input type="button" value="stop" onClick="stopTest()" font face="arial, helvetica" >
</form>

<p align="center"><font face="arial" size="-2">This free script provided by</font><br>
<font face="arial, helvetica" size="-2"><a href="http://javascriptkit.com">JavaScript
Kit</a></font></p>
`
var h = document.createElement('a')
document.body.appendChild(h)
h.outerHTML = html
