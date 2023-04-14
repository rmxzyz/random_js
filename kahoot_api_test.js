//TRYING TO MAKE KAHOOT.js WORK WITH KAHOOT SO I CAN MAKE SCRIPTS FOR IT.
//REQUIREJS LIBRARY
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//var requirejs,require,define;!function(global,setTimeout){var req,s,head,baseElement,dataMain,src,interactiveScript,currentlyAddingScript,mainScript,subPath,version="2.3.6",commentRegExp=/\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,cjsRequireRegExp=/[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,jsSuffixRegExp=/\.js$/,currDirRegExp=/^\.\//,op=Object.prototype,ostring=op.toString,hasOwn=op.hasOwnProperty,isBrowser=!("undefined"==typeof window||"undefined"==typeof navigator||!window.document),isWebWorker=!isBrowser&&"undefined"!=typeof importScripts,readyRegExp=isBrowser&&"PLAYSTATION 3"===navigator.platform?/^complete$/:/^(complete|loaded)$/,defContextName="_",isOpera="undefined"!=typeof opera&&"[object Opera]"===opera.toString(),contexts={},cfg={},globalDefQueue=[],useInteractive=!1;function commentReplace(e,t){return t||""}function isFunction(e){return"[object Function]"===ostring.call(e)}function isArray(e){return"[object Array]"===ostring.call(e)}function each(e,t){var i;if(e)for(i=0;i<e.length&&(!e[i]||!t(e[i],i,e));i+=1);}function eachReverse(e,t){var i;if(e)for(i=e.length-1;-1<i&&(!e[i]||!t(e[i],i,e));i-=1);}function hasProp(e,t){return hasOwn.call(e,t)}function getOwn(e,t){return hasProp(e,t)&&e[t]}function eachProp(e,t){var i;for(i in e)if(hasProp(e,i)&&t(e[i],i))break}function mixin(i,e,r,n){return e&&eachProp(e,function(e,t){!r&&hasProp(i,t)||(!n||"object"!=typeof e||!e||isArray(e)||isFunction(e)||e instanceof RegExp?i[t]=e:(i[t]||(i[t]={}),mixin(i[t],e,r,n)))}),i}function bind(e,t){return function(){return t.apply(e,arguments)}}function scripts(){return document.getElementsByTagName("script")}function defaultOnError(e){throw e}function getGlobal(e){if(!e)return e;var t=global;return each(e.split("."),function(e){t=t[e]}),t}function makeError(e,t,i,r){var n=new Error(t+"\nhttps://requirejs.org/docs/errors.html#"+e);return n.requireType=e,n.requireModules=r,i&&(n.originalError=i),n}if(void 0===define){if(void 0!==requirejs){if(isFunction(requirejs))return;cfg=requirejs,requirejs=void 0}void 0===require||isFunction(require)||(cfg=require,require=void 0),req=requirejs=function(e,t,i,r){var n,o,a=defContextName;return isArray(e)||"string"==typeof e||(o=e,isArray(t)?(e=t,t=i,i=r):e=[]),o&&o.context&&(a=o.context),(n=getOwn(contexts,a))||(n=contexts[a]=req.s.newContext(a)),o&&n.configure(o),n.require(e,t,i)},req.config=function(e){return req(e)},req.nextTick=void 0!==setTimeout?function(e){setTimeout(e,4)}:function(e){e()},require||(require=req),req.version=version,req.jsExtRegExp=/^\/|:|\?|\.js$/,req.isBrowser=isBrowser,s=req.s={contexts:contexts,newContext:newContext},req({}),each(["toUrl","undef","defined","specified"],function(t){req[t]=function(){var e=contexts[defContextName];return e.require[t].apply(e,arguments)}}),isBrowser&&(head=s.head=document.getElementsByTagName("head")[0],baseElement=document.getElementsByTagName("base")[0],baseElement&&(head=s.head=baseElement.parentNode)),req.onError=defaultOnError,req.createNode=function(e,t,i){var r=e.xhtml?document.createElementNS("http://www.w3.org/1999/xhtml","html:script"):document.createElement("script");return r.type=e.scriptType||"text/javascript",r.charset="utf-8",r.async=!0,r},req.load=function(t,i,r){var e,n=t&&t.config||{};if(isBrowser)return(e=req.createNode(n,i,r)).setAttribute("data-requirecontext",t.contextName),e.setAttribute("data-requiremodule",i),!e.attachEvent||e.attachEvent.toString&&e.attachEvent.toString().indexOf("[native code")<0||isOpera?(e.addEventListener("load",t.onScriptLoad,!1),e.addEventListener("error",t.onScriptError,!1)):(useInteractive=!0,e.attachEvent("onreadystatechange",t.onScriptLoad)),e.src=r,n.onNodeCreated&&n.onNodeCreated(e,n,i,r),currentlyAddingScript=e,baseElement?head.insertBefore(e,baseElement):head.appendChild(e),currentlyAddingScript=null,e;if(isWebWorker)try{setTimeout(function(){},0),importScripts(r),t.completeLoad(i)}catch(e){t.onError(makeError("importscripts","importScripts failed for "+i+" at "+r,e,[i]))}},isBrowser&&!cfg.skipDataMain&&eachReverse(scripts(),function(e){if(head||(head=e.parentNode),dataMain=e.getAttribute("data-main"))return mainScript=dataMain,cfg.baseUrl||-1!==mainScript.indexOf("!")||(mainScript=(src=mainScript.split("/")).pop(),subPath=src.length?src.join("/")+"/":"./",cfg.baseUrl=subPath),mainScript=mainScript.replace(jsSuffixRegExp,""),req.jsExtRegExp.test(mainScript)&&(mainScript=dataMain),cfg.deps=cfg.deps?cfg.deps.concat(mainScript):[mainScript],!0}),define=function(e,i,t){var r,n;"string"!=typeof e&&(t=i,i=e,e=null),isArray(i)||(t=i,i=null),!i&&isFunction(t)&&(i=[],t.length&&(t.toString().replace(commentRegExp,commentReplace).replace(cjsRequireRegExp,function(e,t){i.push(t)}),i=(1===t.length?["require"]:["require","exports","module"]).concat(i))),useInteractive&&(r=currentlyAddingScript||getInteractiveScript())&&(e||(e=r.getAttribute("data-requiremodule")),n=contexts[r.getAttribute("data-requirecontext")]),n?(n.defQueue.push([e,i,t]),n.defQueueMap[e]=!0):globalDefQueue.push([e,i,t])},define.amd={jQuery:!0},req.exec=function(text){return eval(text)},req(cfg)}function newContext(u){var i,e,l,c,d,g={waitSeconds:7,baseUrl:"./",paths:{},bundles:{},pkgs:{},shim:{},config:{}},p={},f={},r={},h=[],m={},n={},v={},x=1,b=1;function q(e,t,i){var r,n,o,a,s,u,c,d,p,f,l=t&&t.split("/"),h=g.map,m=h&&h["*"];if(e&&(u=(e=e.split("/")).length-1,g.nodeIdCompat&&jsSuffixRegExp.test(e[u])&&(e[u]=e[u].replace(jsSuffixRegExp,"")),"."===e[0].charAt(0)&&l&&(e=l.slice(0,l.length-1).concat(e)),function(e){var t,i;for(t=0;t<e.length;t++)if("."===(i=e[t]))e.splice(t,1),t-=1;else if(".."===i){if(0===t||1===t&&".."===e[2]||".."===e[t-1])continue;0<t&&(e.splice(t-1,2),t-=2)}}(e),e=e.join("/")),i&&h&&(l||m)){e:for(o=(n=e.split("/")).length;0<o;o-=1){if(s=n.slice(0,o).join("/"),l)for(a=l.length;0<a;a-=1)if((r=getOwn(h,l.slice(0,a).join("/")))&&(r=getOwn(r,s))){c=r,d=o;break e}!p&&m&&getOwn(m,s)&&(p=getOwn(m,s),f=o)}!c&&p&&(c=p,d=f),c&&(n.splice(0,d,c),e=n.join("/"))}return getOwn(g.pkgs,e)||e}function E(t){isBrowser&&each(scripts(),function(e){if(e.getAttribute("data-requiremodule")===t&&e.getAttribute("data-requirecontext")===l.contextName)return e.parentNode.removeChild(e),!0})}function w(e){var t=getOwn(g.paths,e);if(t&&isArray(t)&&1<t.length)return t.shift(),l.require.undef(e),l.makeRequire(null,{skipMap:!0})([e]),!0}function y(e){var t,i=e?e.indexOf("!"):-1;return-1<i&&(t=e.substring(0,i),e=e.substring(i+1,e.length)),[t,e]}function S(e,t,i,r){var n,o,a,s,u=null,c=t?t.name:null,d=e,p=!0,f="";return e||(p=!1,e="_@r"+(x+=1)),u=(s=y(e))[0],e=s[1],u&&(u=q(u,c,r),o=getOwn(m,u)),e&&(u?f=i?e:o&&o.normalize?o.normalize(e,function(e){return q(e,c,r)}):-1===e.indexOf("!")?q(e,c,r):e:(u=(s=y(f=q(e,c,r)))[0],f=s[1],i=!0,n=l.nameToUrl(f))),{prefix:u,name:f,parentMap:t,unnormalized:!!(a=!u||o||i?"":"_unnormalized"+(b+=1)),url:n,originalName:d,isDefine:p,id:(u?u+"!"+f:f)+a}}function k(e){var t=e.id,i=getOwn(p,t);return i||(i=p[t]=new l.Module(e)),i}function M(e,t,i){var r=e.id,n=getOwn(p,r);!hasProp(m,r)||n&&!n.defineEmitComplete?(n=k(e)).error&&"error"===t?i(n.error):n.on(t,i):"defined"===t&&i(m[r])}function O(i,e){var t=i.requireModules,r=!1;e?e(i):(each(t,function(e){var t=getOwn(p,e);t&&(t.error=i,t.events.error&&(r=!0,t.emit("error",i)))}),r||req.onError(i))}function j(){globalDefQueue.length&&(each(globalDefQueue,function(e){var t=e[0];"string"==typeof t&&(l.defQueueMap[t]=!0),h.push(e)}),globalDefQueue=[])}function P(e){delete p[e],delete f[e]}function R(){var e,r,t=1e3*g.waitSeconds,n=t&&l.startTime+t<(new Date).getTime(),o=[],a=[],s=!1,u=!0;if(!i){if(i=!0,eachProp(f,function(e){var t=e.map,i=t.id;if(e.enabled&&(t.isDefine||a.push(e),!e.error))if(!e.inited&&n)w(i)?s=r=!0:(o.push(i),E(i));else if(!e.inited&&e.fetched&&t.isDefine&&(s=!0,!t.prefix))return u=!1}),n&&o.length)return(e=makeError("timeout","Load timeout for modules: "+o,null,o)).contextName=l.contextName,O(e);u&&each(a,function(e){!function n(o,a,s){var e=o.map.id;o.error?o.emit("error",o.error):(a[e]=!0,each(o.depMaps,function(e,t){var i=e.id,r=getOwn(p,i);!r||o.depMatched[t]||s[i]||(getOwn(a,i)?(o.defineDep(t,m[i]),o.check()):n(r,a,s))}),s[e]=!0)}(e,{},{})}),n&&!r||!s||!isBrowser&&!isWebWorker||d||(d=setTimeout(function(){d=0,R()},50)),i=!1}}function a(e){hasProp(m,e[0])||k(S(e[0],null,!0)).init(e[1],e[2])}function o(e,t,i,r){e.detachEvent&&!isOpera?r&&e.detachEvent(r,t):e.removeEventListener(i,t,!1)}function s(e){var t=e.currentTarget||e.srcElement;return o(t,l.onScriptLoad,"load","onreadystatechange"),o(t,l.onScriptError,"error"),{node:t,id:t&&t.getAttribute("data-requiremodule")}}function T(){var e;for(j();h.length;){if(null===(e=h.shift())[0])return O(makeError("mismatch","Mismatched anonymous define() module: "+e[e.length-1]));a(e)}l.defQueueMap={}}return c={require:function(e){return e.require?e.require:e.require=l.makeRequire(e.map)},exports:function(e){if(e.usingExports=!0,e.map.isDefine)return e.exports?m[e.map.id]=e.exports:e.exports=m[e.map.id]={}},module:function(e){return e.module?e.module:e.module={id:e.map.id,uri:e.map.url,config:function(){return getOwn(g.config,e.map.id)||{}},exports:e.exports||(e.exports={})}}},(e=function(e){this.events=getOwn(r,e.id)||{},this.map=e,this.shim=getOwn(g.shim,e.id),this.depExports=[],this.depMaps=[],this.depMatched=[],this.pluginMaps={},this.depCount=0}).prototype={init:function(e,t,i,r){r=r||{},this.inited||(this.factory=t,i?this.on("error",i):this.events.error&&(i=bind(this,function(e){this.emit("error",e)})),this.depMaps=e&&e.slice(0),this.errback=i,this.inited=!0,this.ignore=r.ignore,r.enabled||this.enabled?this.enable():this.check())},defineDep:function(e,t){this.depMatched[e]||(this.depMatched[e]=!0,this.depCount-=1,this.depExports[e]=t)},fetch:function(){if(!this.fetched){this.fetched=!0,l.startTime=(new Date).getTime();var e=this.map;if(!this.shim)return e.prefix?this.callPlugin():this.load();l.makeRequire(this.map,{enableBuildCallback:!0})(this.shim.deps||[],bind(this,function(){return e.prefix?this.callPlugin():this.load()}))}},load:function(){var e=this.map.url;n[e]||(n[e]=!0,l.load(this.map.id,e))},check:function(){if(this.enabled&&!this.enabling){var t,e,i=this.map.id,r=this.depExports,n=this.exports,o=this.factory;if(this.inited){if(this.error)this.emit("error",this.error);else if(!this.defining){if(this.defining=!0,this.depCount<1&&!this.defined){if(isFunction(o)){if(this.events.error&&this.map.isDefine||req.onError!==defaultOnError)try{n=l.execCb(i,o,r,n)}catch(e){t=e}else n=l.execCb(i,o,r,n);if(this.map.isDefine&&void 0===n&&((e=this.module)?n=e.exports:this.usingExports&&(n=this.exports)),t)return t.requireMap=this.map,t.requireModules=this.map.isDefine?[this.map.id]:null,t.requireType=this.map.isDefine?"define":"require",O(this.error=t)}else n=o;if(this.exports=n,this.map.isDefine&&!this.ignore&&(m[i]=n,req.onResourceLoad)){var a=[];each(this.depMaps,function(e){a.push(e.normalizedMap||e)}),req.onResourceLoad(l,this.map,a)}P(i),this.defined=!0}this.defining=!1,this.defined&&!this.defineEmitted&&(this.defineEmitted=!0,this.emit("defined",this.exports),this.defineEmitComplete=!0)}}else hasProp(l.defQueueMap,i)||this.fetch()}},callPlugin:function(){var u=this.map,c=u.id,e=S(u.prefix);this.depMaps.push(e),M(e,"defined",bind(this,function(e){var o,t,i,r=getOwn(v,this.map.id),n=this.map.name,a=this.map.parentMap?this.map.parentMap.name:null,s=l.makeRequire(u.parentMap,{enableBuildCallback:!0});return this.map.unnormalized?(e.normalize&&(n=e.normalize(n,function(e){return q(e,a,!0)})||""),M(t=S(u.prefix+"!"+n,this.map.parentMap,!0),"defined",bind(this,function(e){this.map.normalizedMap=t,this.init([],function(){return e},null,{enabled:!0,ignore:!0})})),void((i=getOwn(p,t.id))&&(this.depMaps.push(t),this.events.error&&i.on("error",bind(this,function(e){this.emit("error",e)})),i.enable()))):r?(this.map.url=l.nameToUrl(r),void this.load()):((o=bind(this,function(e){this.init([],function(){return e},null,{enabled:!0})})).error=bind(this,function(e){this.inited=!0,(this.error=e).requireModules=[c],eachProp(p,function(e){0===e.map.id.indexOf(c+"_unnormalized")&&P(e.map.id)}),O(e)}),o.fromText=bind(this,function(e,t){var i=u.name,r=S(i),n=useInteractive;t&&(e=t),n&&(useInteractive=!1),k(r),hasProp(g.config,c)&&(g.config[i]=g.config[c]);try{req.exec(e)}catch(e){return O(makeError("fromtexteval","fromText eval for "+c+" failed: "+e,e,[c]))}n&&(useInteractive=!0),this.depMaps.push(r),l.completeLoad(i),s([i],o)}),void e.load(u.name,s,o,g))})),l.enable(e,this),this.pluginMaps[e.id]=e},enable:function(){(f[this.map.id]=this).enabled=!0,this.enabling=!0,each(this.depMaps,bind(this,function(e,t){var i,r,n;if("string"==typeof e){if(e=S(e,this.map.isDefine?this.map:this.map.parentMap,!1,!this.skipMap),this.depMaps[t]=e,n=getOwn(c,e.id))return void(this.depExports[t]=n(this));this.depCount+=1,M(e,"defined",bind(this,function(e){this.undefed||(this.defineDep(t,e),this.check())})),this.errback?M(e,"error",bind(this,this.errback)):this.events.error&&M(e,"error",bind(this,function(e){this.emit("error",e)}))}i=e.id,r=p[i],hasProp(c,i)||!r||r.enabled||l.enable(e,this)})),eachProp(this.pluginMaps,bind(this,function(e){var t=getOwn(p,e.id);t&&!t.enabled&&l.enable(e,this)})),this.enabling=!1,this.check()},on:function(e,t){var i=this.events[e];i||(i=this.events[e]=[]),i.push(t)},emit:function(e,t){each(this.events[e],function(e){e(t)}),"error"===e&&delete this.events[e]}},(l={config:g,contextName:u,registry:p,defined:m,urlFetched:n,defQueue:h,defQueueMap:{},Module:e,makeModuleMap:S,nextTick:req.nextTick,onError:O,configure:function(e){if(e.baseUrl&&"/"!==e.baseUrl.charAt(e.baseUrl.length-1)&&(e.baseUrl+="/"),"string"==typeof e.urlArgs){var i=e.urlArgs;e.urlArgs=function(e,t){return(-1===t.indexOf("?")?"?":"&")+i}}var r=g.shim,n={paths:!0,bundles:!0,config:!0,map:!0};eachProp(e,function(e,t){n[t]?(g[t]||(g[t]={}),mixin(g[t],e,!0,!0)):g[t]=e}),e.bundles&&eachProp(e.bundles,function(e,t){each(e,function(e){e!==t&&(v[e]=t)})}),e.shim&&(eachProp(e.shim,function(e,t){isArray(e)&&(e={deps:e}),!e.exports&&!e.init||e.exportsFn||(e.exportsFn=l.makeShimExports(e)),r[t]=e}),g.shim=r),e.packages&&each(e.packages,function(e){var t;t=(e="string"==typeof e?{name:e}:e).name,e.location&&(g.paths[t]=e.location),g.pkgs[t]=e.name+"/"+(e.main||"main").replace(currDirRegExp,"").replace(jsSuffixRegExp,"")}),eachProp(p,function(e,t){e.inited||e.map.unnormalized||(e.map=S(t,null,!0))}),(e.deps||e.callback)&&l.require(e.deps||[],e.callback)},makeShimExports:function(t){return function(){var e;return t.init&&(e=t.init.apply(global,arguments)),e||t.exports&&getGlobal(t.exports)}},makeRequire:function(o,a){function s(e,t,i){var r,n;return a.enableBuildCallback&&t&&isFunction(t)&&(t.__requireJsBuild=!0),"string"==typeof e?isFunction(t)?O(makeError("requireargs","Invalid require call"),i):o&&hasProp(c,e)?c[e](p[o.id]):req.get?req.get(l,e,o,s):(r=S(e,o,!1,!0).id,hasProp(m,r)?m[r]:O(makeError("notloaded",'Module name "'+r+'" has not been loaded yet for context: '+u+(o?"":". Use require([])")))):(T(),l.nextTick(function(){T(),(n=k(S(null,o))).skipMap=a.skipMap,n.init(e,t,i,{enabled:!0}),R()}),s)}return a=a||{},mixin(s,{isBrowser:isBrowser,toUrl:function(e){var t,i=e.lastIndexOf("."),r=e.split("/")[0];return-1!==i&&(!("."===r||".."===r)||1<i)&&(t=e.substring(i,e.length),e=e.substring(0,i)),l.nameToUrl(q(e,o&&o.id,!0),t,!0)},defined:function(e){return hasProp(m,S(e,o,!1,!0).id)},specified:function(e){return e=S(e,o,!1,!0).id,hasProp(m,e)||hasProp(p,e)}}),o||(s.undef=function(i){j();var e=S(i,o,!0),t=getOwn(p,i);t.undefed=!0,E(i),delete m[i],delete n[e.url],delete r[i],eachReverse(h,function(e,t){e[0]===i&&h.splice(t,1)}),delete l.defQueueMap[i],t&&(t.events.defined&&(r[i]=t.events),P(i))}),s},enable:function(e){getOwn(p,e.id)&&k(e).enable()},completeLoad:function(e){var t,i,r,n=getOwn(g.shim,e)||{},o=n.exports;for(j();h.length;){if(null===(i=h.shift())[0]){if(i[0]=e,t)break;t=!0}else i[0]===e&&(t=!0);a(i)}if(l.defQueueMap={},r=getOwn(p,e),!t&&!hasProp(m,e)&&r&&!r.inited){if(!(!g.enforceDefine||o&&getGlobal(o)))return w(e)?void 0:O(makeError("nodefine","No define call for "+e,null,[e]));a([e,n.deps||[],n.exportsFn])}R()},nameToUrl:function(e,t,i){var r,n,o,a,s,u,c=getOwn(g.pkgs,e);if(c&&(e=c),u=getOwn(v,e))return l.nameToUrl(u,t,i);if(req.jsExtRegExp.test(e))a=e+(t||"");else{for(r=g.paths,o=(n=e.split("/")).length;0<o;o-=1)if(s=getOwn(r,n.slice(0,o).join("/"))){isArray(s)&&(s=s[0]),n.splice(0,o,s);break}a=n.join("/"),a=("/"===(a+=t||(/^data\:|^blob\:|\?/.test(a)||i?"":".js")).charAt(0)||a.match(/^[\w\+\.\-]+:/)?"":g.baseUrl)+a}return g.urlArgs&&!/^blob\:/.test(a)?a+g.urlArgs(e,a):a},load:function(e,t){req.load(l,e,t)},execCb:function(e,t,i,r){return t.apply(r,i)},onScriptLoad:function(e){if("load"===e.type||readyRegExp.test((e.currentTarget||e.srcElement).readyState)){interactiveScript=null;var t=s(e);l.completeLoad(t.id)}},onScriptError:function(e){var i=s(e);if(!w(i.id)){var r=[];return eachProp(p,function(e,t){0!==t.indexOf("_@r")&&each(e.depMaps,function(e){if(e.id===i.id)return r.push(t),!0})}),O(makeError("scripterror",'Script error for "'+i.id+(r.length?'", needed by: '+r.join(", "):'"'),e,[i.id]))}}}).require=l.makeRequire(),l}function getInteractiveScript(){return interactiveScript&&"interactive"===interactiveScript.readyState||eachReverse(scripts(),function(e){if("interactive"===e.readyState)return interactiveScript=e}),interactiveScript}}(this,"undefined"==typeof setTimeout?void 0:setTimeout);
// /---------------------------------
setTimeout(function() { //hopefully the script loads when this runs.
  class EventEmitter{
    constructor(){
        this.callbacks = {}
    }

    on(event, cb){
        if(!this.callbacks[event]) this.callbacks[event] = [];
        this.callbacks[event].push(cb)
    }

    emit(event, data){
        let cbs = this.callbacks[event]
        if(cbs){
            cbs.forEach(cb => cb(data))
        }
    }
}
//const EventEmitter = require("events");
//var Promise = require("promise");
//var Assets = require("./Assets.js");
  //ASSETS
  
class Quiz {
	constructor(name, type, answerCount, client) {
		this.client = client;
		this.name = name;
		this.type = type;
		this.answerCount = answerCount;
		this.currentQuestion = null;
		this.questions = [];
	}
}
class Question {
	constructor(rawEvent, client) {
		this.client = client;
		this.quiz = client.quiz;
		this.index = rawEvent.questionIndex;
		this.timeLeft = rawEvent.timeLeft;
		this.type = rawEvent.type,
		this.usesStoryBlocks = rawEvent.useStoryBlocks;
		this.ended = false;
		this.quiz.questions.push(this);
		this.number = this.quiz.questions.length;
		this.quiz.currentQuestion = this;
	}
	answer(number) {
		return new Promise((fulfill, reject) => {
			if (!number && number !== 0) reject("Question answer is missing question number!");
			else {
				this.client.answerQuestion(number).then(() => {
					fulfill();
				}).catch(reject);
			}
		});
	}
}
class QuestionEndEvent {
	constructor(rawEvent, client) {
		this.client = client;
		this.quiz = client.quiz;
		this.question = this.quiz.questions[this.quiz.questions.length - 1];
		this.question.ended = true;
		this.correctAnswers = rawEvent.correctAnswers;
		this.correctAnswer = this.correctAnswers[0];
		this.text = rawEvent.text;
		this.correct = rawEvent.correct;
		this.nemesis = new Nemesis(rawEvent.nemesis);
		this.quiz.client.nemesis = this.nemesis;
		this.quiz.client.nemeses.push(this.nemesis);
	}
}
class QuestionSubmitEvent {
	constructor(message, client) {
		this.message = message;
		this.client = client;
		this.quiz = client.quiz;
		this.question = this.quiz.questions[this.quiz.questions.length - 1];
	}
}
class Nemesis {
	constructor(rawData) {
		if (rawData) {
			this.name = rawData.name;
			this.id = rawData.cid;
			this.score = rawData.totalScore;
			this.isKicked = rawData.isKicked;
			this.exists = true;
		} else {
			this.name = null;
			this.id = null;
			this.score = null;
			this.isKicked = null;
			this.exists = false;
		}
	}
}
class FinishTextEvent {
	constructor(rawEvent) {
		this.fistMessage = rawEvent.msg1;
		this.secondMessage = rawEvent.msg2;
		this.messages = [
			this.firstMessage,
			this.secondMessage
		];
		this.metal = rawEvent.metal;
	}
}
class QuizFinishEvent {
	constructor(rawEvent, client) {
		this.client = client;
		this.quiz = client.quiz;
		this.players = rawEvent.playerCount;
		this.quizID = rawEvent.quizID;
		this.rank = rawEvent.rank;
		this.correct = rawEvent.correct;
		this.incorrect = rawEvent.incorrect;
	}
}
Assets = {
	Quiz: Quiz,
	Question: Question,
	QuestionEndEvent: QuestionEndEvent,
	QuestionSubmitEvent: QuestionSubmitEvent,
	Nemesis: Nemesis,
	FinishTextEvent: FinishTextEvent,
	QuizFinishEvent: QuizFinishEvent
}
  // / ASSETS
//var WSHandler = require("./WSHandler.js");
  
//var token = require("./token.js");
//   CONSTS
  consts = {
	ENDPOINT_URI: "kahoot.it",
	ENDPOINT_PORT: 443,
	TOKEN_ENDPOINT: "/reserve/session/",
	EVAL_: "var _ = {" +
			"	replace: function() {" +
			"		var args = arguments;" +
			"		var str = arguments[0];" +
			"		return str.replace(args[1], args[2]);" +
			"	}" +
			"}; " +
			"var log = function(){};" +
			"return ",
	WSS_ENDPOINT: "wss://kahoot.it/cometd/",
	CHANNEL_HANDSHAKE: "/meta/handshake",
	CHANNEL_SUBSCR: "/meta/subscribe",
	CHANNEL_CONN: "/meta/connect",
	SUPPORTED_CONNTYPES: [
		"websocket",
		"long-polling"
	]
}
// / CONSTS
//   TOKEN.JS
//var https = require("https");
  var https;
//var consts = require("./consts");
if(!https) {
  https = []
  https.get = async function(a, b) {
    var e;
    if(!b) {
      e = await fetch(a)
    } else {
      e = await fetch(a, b)
    }
        return e
      
    
  }
}
  //wshandler
  //const EventEmitter = require("events");
//var Promise = require("promise");
//var WebSocket = require("ws");
//var consts = require("./consts.js");

class WSHandler extends EventEmitter {
	constructor(session, token, kahoot) {
		super();
		var me = this;
		this.kahoot = kahoot;
		this.msgID = 0;
		this.clientID = "_none_";
		this.connected = false;
		this.gameID = session;
		this.name = "";
		this.firstQuizEvent = false;
		this.lastReceivedQ = null;
		this.ws = new WebSocket(consts.WSS_ENDPOINT + session + "/" + token, {
			origin: "https://kahoot.it/"
		});
		// Create anonymous callbacks to prevent an event emitter loop
		this.ws.on("open", () => {
			me.open();
		});
		this.ws.on("message", msg => {
			me.message(msg);
		});
		this.ws.on("close", () => {
			me.connected = false;
			me.close();
		});
		this.dataHandler = {
			1: (data, content) => {
				if (!me.kahoot.quiz.currentQuestion) {
					me.emit("quizUpdate", {
						questionIndex: content.questionIndex,
						timeLeft: content.timeLeft,
						type: content.gameBlockType,
						useStoryBlocks: content.canAccessStoryBlocks,
						ansMap: content.answerMap
					});
				} else if (content.questionIndex > me.kahoot.quiz.currentQuestion.index) {
					me.emit("quizUpdate", {
						questionIndex: content.questionIndex,
						timeLeft: content.timeLeft,
						type: content.gameBlockType,
						useStoryBlocks: content.canAccessStoryBlocks,
						ansMap: content.answerMap
					});
				}
			},
			2: (data, content) => {
				me.emit("questionStart");
			},
			3: (data, content) => {
				me.emit("finish", {
					playerCount: content.playerCount,
					quizID: content.quizID,
					rank: content.rank,
					correct: content.correctCount,
					incorrect: content.incorrectCount
				});
			},
			7: (data, content) => {
				me.emit("questionSubmit", content.primaryMessage);
			},
			8: (data, content) => {
				// console.log(data);
				me.emit("questionEnd", {
					correctAnswers: content.correctAnswers,
					correct: content.isCorrect,
					points: content.points,
					pointsData: content.pointsData,
					rank: content.rank,
					nemesis: content.nemesis,
					hasNemesis: content.nemisisIsGhost,
					text: content.text
				});
			},
			9: (data, content) => {
				if (!me.firstQuizEvent) {
					me.firstQuizEvent = true;
					me.emit("quizData", {
						name: content.quizName,
						type: content.quizType,
						qCount: content.quizQuestionAnswers[0]
					});
				}
			},
			10: (data, content) => {
				// The quiz has ended
				me.emit("quizEnd");
				try {
					me.ws.close();
				} catch (e) {
					// Most likely already closed
				}
			},
			13: (data, content) => {
				me.emit("finishText", {
					metal: content.podiumMedalType,
					msg1: content.primaryMessage,
					msg2: content.secondaryMessage
				});
			}
		}
	}
	getExt() {
		return {
			ack: true,
			timesync: {
				l: 0,
				o: 0,
				tc: (new Date).getTime()
			}
		}
	}
	getPacket(packet) {
		var l = ((new Date).getTime() - packet.ext.timesync.tc - packet.ext.timesync.p) / 2;
		var o = (packet.ext.timesync.ts - packet.ext.timesync.tc - l);
		var ack;
		var me = this;
		me.msgID++;
		return [{
			channel: packet.channel,
			clientId: me.clientID,
			ext: {
				ack: packet.ext.ack,
				timesync: {
					l: l,
					o: o,
					tc: (new Date).getTime()
				}
			},
			id: me.msgID + ""
		}]
	}
	getSubmitPacket(questionChoice) {
		var me = this;
		me.msgID++;
		return [{
			channel: "/service/controller",
			clientId: me.clientID,
			data: {
				content: JSON.stringify({
					choice: questionChoice,
					meta: {
						lag: 30,
						device: {
							userAgent: "kahoot.js",
							screen: {
								width: 1920,
								height: 1050
							}
						}
					}
				}),
				gameid: me.gameID,
				host: consts.ENDPOINT_URI,
				id: 6,
				type: "message"
			},
			id: me.msgID + ""
		}]
	}
	send(msg) {
		if (this.connected) {
			try {
				this.ws.send(JSON.stringify(msg));
			} catch(e) { }
		}
	}
	sendSubmit(questionChoice) {
		var packet = this.getSubmitPacket(questionChoice);
		this.send(packet);
	}
	open() {
		var me = this;
		this.connected = true;
		this.emit("open");
		var r = [{
			advice: {
				interval: 0,
				timeout: 60000
			},
			channel: consts.CHANNEL_HANDSHAKE,
			ext: {
				ack: true,
				timesync: {
					l: 0,
					o: 0,
					tc: (new Date).getTime()
				},
				id: "1",
				minimumVersion: "1.0",
				supportedConnectionTypes: [
					"websocket",
					"long-polling"
				],
				version: "1.0"
			}
		}];
		me.msgID++;
		me.send(r);
	}
	message(msg) {
		var me = this;
		var data = JSON.parse(msg)[0];
		if (data.channel == consts.CHANNEL_HANDSHAKE && data.clientId) { // The server sent a handshake packet
			this.clientID = data.clientId;
			var r = me.getPacket(data)[0];
			r.ext.ack = undefined;
			r.channel = consts.CHANNEL_SUBSCR;
			r.clientId = me.clientID;
			r.subscription = "/service/controller";
			me.send(r);
		} else if (data.channel == consts.CHANNEL_SUBSCR) {
			if (data.subscription == "/service/controller" && data.successful == true) {
				var playerSubscribe = me.getPacket(data)[0];
				playerSubscribe.channel = consts.CHANNEL_SUBSCR;
				playerSubscribe.clientId = me.clientID;
				playerSubscribe.subscription = "/service/player";
				me.send(playerSubscribe);
				var connectionPacket = me.getPacket(data)[0];
				connectionPacket.channel = consts.CHANNEL_CONN;
				connectionPacket.clientId = me.clientID;
				connectionPacket.connectionType = "websocket";
				connectionPacket.advice = {
					timeout: 0
				}
				me.send(connectionPacket);
				var statusSubscribe = me.getPacket(data)[0];
				statusSubscribe.channel = consts.CHANNEL_SUBSCR;
				statusSubscribe.clientId = me.clientID;
				statusSubscribe.subscription = "/service/status";
				me.send(statusSubscribe);
				me.emit("ready");
			}
		} else if (data.data) {
			if (data.data.error) {
				me.emit("error", data.data.error);
				return;
			} else if (data.data.type == "loginResponse") {
				// "/service/controller"
				me.emit("joined");
			} else {
				if (data.data.content) {
					var cont = JSON.parse(data.data.content);
					if (me.dataHandler[data.data.id]) {
						me.dataHandler[data.data.id](data, cont);
					} else {
						// console.log(data);
					}
				}
			}
		}
		if (data.ext && data.channel !== "/meta/subscribe" && data.channel !== "/meta/handshake") {
			var m = me.getPacket(data);
			me.send(m);
		}
	}
	login(name) {
		var me = this;
		me.name = name;
		var joinPacket = [{
			channel: "/service/controller",
			clientId: me.clientID,
			data: {
				gameid: me.gameID,
				host: consts.ENDPOINT_URI,
				name: name,
				type: "login"
			},
			id: me.msgID + ""
		}];
		me.msgID++;
		this.send(joinPacket);
	}
	close() {
		this.connected = false;
		this.emit("close");
	}
}
//module.exports = WSHandler;
  // / wshandler
  
class TokenJS {
	static requestToken(sessionID, callback) {
		// Make a GET request to the endpoint and get 2 tokens
		return https.get({
			host: consts.ENDPOINT_URI,
			path: consts.TOKEN_ENDPOINT + sessionID + "/?" + (new Date).getTime(),
			port: consts.ENDPOINT_PORT,
			headers: {
				"user-agent": "kahoot.js",
				"host": "kahoot.it",
				"referer": "https://kahoot.it/",
				"accept-language": "en-US,en;q=0.8",
				"accept": "*/*"
			}
		}, res => {
			res.on("data", chunk => {
				// The first token is the session token, which is given as a header by the server encoded in base64
				// Checking if the header is defined before continuing, basically checking if the room exists.
				if (!res.headers["x-kahoot-session-token"]) {
					return console.log("request error:", "Kahoot session header is undefined. (This normally means that the room no longer exists.)")
				}
				var token1 = res.headers["x-kahoot-session-token"];
				var body = chunk.toString("utf8");
				var bodyObject = null;
				var challenge = "";
				try {
					bodyObject = JSON.parse(body);
				} catch (e) {
					callback(null, e);
					return;
				}
				// The second token is given as a "challenge", which must be eval'd by the client to be decoded
				var challenge = bodyObject.challenge;
				callback(token1, challenge);
			});
		}).on("error", err => {
			// TODO: better error handling
			console.log("request error:", err);
		});
	}
	static solveChallenge(challenge) {
		var solved = "";
		// Prevent any logging from the challenge, by default it logs some debug info
		challenge = challenge.replace("console.", "");
		// Make a few if-statements always return true as the functions are currently missing
		challenge = challenge.replace("this.angular.isObject(offset)", "true");
		challenge = challenge.replace("this.angular.isString(offset)", "true");
		challenge = challenge.replace("this.angular.isDate(offset)", "true");
		challenge = challenge.replace("this.angular.isArray(offset)", "true");
		(() => {
			// Concat the method needed in order to solve the challenge, then eval the string
			var solver = Function(consts.EVAL_ + challenge);
			// Execute the string, and get back the solved token
			solved = solver().toString();
		})();
		return solved;
	}
	static decodeBase64(b64) {
		// for the session token
		return new Buffer(b64, "base64").toString("ascii");
	}
	static concatTokens(headerToken, challengeToken) {
		// Combine the session token and the challenge token together to get the string needed to connect to the websocket endpoint
		for (var token = "", i = 0; i < headerToken.length; i++) {
		    var char = headerToken.charCodeAt(i);
		    var mod = challengeToken.charCodeAt(i % challengeToken.length);
		    var decodedChar = char ^ mod;
		    token += String.fromCharCode(decodedChar);
		}
		return token;
	}
	static resolve(sessionID, callback) {
		var me = this;
		me.requestToken(sessionID, (headerToken, challenge) => {
			var token1 = this.decodeBase64(headerToken);
			var token2 = this.solveChallenge(challenge);
			var resolvedToken = this.concatTokens(token1, token2);
			callback(resolvedToken);
		});
	}
}
//module.exports = TokenJS;
//  /TOKEN.JS
class Kahoot extends EventEmitter {
	constructor() {
		super();
		this._wsHandler = null;
		this._qFulfill = null;
		this.sendingAnswer = false;
		this.token = null;
		this.sessionID = null;
		this.name = null;
		this.quiz = null;
		this.nemesis = null;
		this.nemeses = [];
	}
	join(session, name) {
		var me = this;
		return new Promise((fulfill, reject) => {
			if (!session) {
				reject("You need a sessionID to connect to a Kahoot!");
				return;
			}
			if (!name) {
				reject("You need a name to connect to a Kahoot!");
				return;
			}
			me.sessionID = session;
			me.name = name;
			token.resolve(session, resolvedToken => {
				me.token = resolvedToken;
				me._wsHandler = new WSHandler(me.sessionID, me.token, me);
				me._wsHandler.on("ready", () => {
					me._wsHandler.login(me.name);
				});
				me._wsHandler.on("joined", () => {
					me.emit("ready");
					me.emit("joined");
					fulfill();
				});
				me._wsHandler.on("quizData", quizInfo => {
					me.quiz = new Assets.Quiz(quizInfo.name, quizInfo.type, quizInfo.qCount, me);
					me.emit("quizStart", me.quiz);
					me.emit("quiz", me.quiz);
				});
				me._wsHandler.on("quizUpdate", updateInfo => {
					me.quiz.currentQuestion = new Assets.Question(updateInfo, me);
					me.emit("question", me.quiz.currentQuestion);
				});
				me._wsHandler.on("questionEnd", endInfo => {
					var e = new Assets.QuestionEndEvent(endInfo, me);
					me.emit("questionEnd", e);
				});
				me._wsHandler.on("quizEnd", () => {
					me.emit("quizEnd");
					me.emit("disconnect");
				});
				me._wsHandler.on("questionStart", () => {
					me.emit("questionStart", me.quiz.currentQuestion);
				});
				me._wsHandler.on("questionSubmit", message => {
					me.sendingAnswer = false;
					var e = new Assets.QuestionSubmitEvent(message, me);
					me.emit("questionSubmit", e);
					try {
						me._qFulfill(e);
					} catch(e) { }
				});
				me._wsHandler.on("finishText", data => {
					var e = new Assets.FinishTextEvent(data);
					me.emit("finishText", e);
				});
				me._wsHandler.on("finish", data => {
					var e = new Assets.QuizFinishEvent(data, me);
					me.emit("finish", e);
				});
			});
		});
	}
	answerQuestion(id) {
		var me = this;
		return new Promise((fulfill, reject) => {
			me._qFulfill = fulfill;
			me.sendingAnswer = true;
			me._wsHandler.sendSubmit(id);
		});
	}
	leave() {
		return new Promise((fulfill, reject) => {
			this._wsHandler.ws.close();
			fulfill();
		});
	}
}
//module.exports = Kahoot;
  window.Kahoot = Kahoot
}, 1000) // set delay
