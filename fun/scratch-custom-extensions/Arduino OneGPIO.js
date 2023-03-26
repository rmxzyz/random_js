var Scratch;

function assign(target, firstSource) {
  if (target === undefined || target === null) {
    throw new TypeError('Cannot convert first argument to object');
  }

  var to = Object(target);
  for (var i = 1; i < arguments.length; i++) {
    var nextSource = arguments[i];
    if (nextSource === undefined || nextSource === null) {
      continue;
    }

    var keysArray = Object.keys(Object(nextSource));
    for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
      var nextKey = keysArray[nextIndex];
      var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
      if (desc !== undefined && desc.enumerable) {
        to[nextKey] = nextSource[nextKey];
      }
    }
  }
  return to;
}
// @flow
var LONG = 'long'
var SHORT = 'short'
var NARROW = 'narrow'
var NUMERIC = 'numeric'
var TWODIGIT = '2-digit'

/**
 * formatting information
 **/
origFormats = {
  number: {
    decimal: {
      style: 'decimal'
    },
    integer: {
      style: 'decimal',
      maximumFractionDigits: 0
    },
    currency: {
      style: 'currency',
      currency: 'USD'
    },
    percent: {
      style: 'percent'
    },
    default: {
      style: 'decimal'
    }
  },
  date: {
    short: {
      month: NUMERIC,
      day: NUMERIC,
      year: TWODIGIT
    },
    medium: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    },
    long: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC
    },
    full: {
      month: LONG,
      day: NUMERIC,
      year: NUMERIC,
      weekday: LONG
    },
    default: {
      month: SHORT,
      day: NUMERIC,
      year: NUMERIC
    }
  },
  time: {
    short: {
      hour: NUMERIC,
      minute: NUMERIC
    },
    medium: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    },
    long: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    full: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC,
      timeZoneName: SHORT
    },
    default: {
      hour: NUMERIC,
      minute: NUMERIC,
      second: NUMERIC
    }
  },
  duration: {
    default: {
      hours: {
        minimumIntegerDigits: 1,
        maximumFractionDigits: 0
      },
      minutes: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 0
      },
      seconds: {
        minimumIntegerDigits: 2,
        maximumFractionDigits: 3
      }
    }
  },
  parseNumberPattern: function (pattern/*: ?string */) {
    if (!pattern) return
    var options = {}
    var currency = pattern.match(/\b[A-Z]{3}\b/i)
    var syms = pattern.replace(/[^¤]/g, '').length
    if (!syms && currency) syms = 1
    if (syms) {
      options.style = 'currency'
      options.currencyDisplay = syms === 1 ? 'symbol' : syms === 2 ? 'code' : 'name'
      options.currency = currency ? currency[0].toUpperCase() : 'USD'
    } else if (pattern.indexOf('%') >= 0) {
      options.style = 'percent'
    }
    if (!/[@#0]/.test(pattern)) return options.style ? options : undefined
    options.useGrouping = pattern.indexOf(',') >= 0
    if (/E\+?[@#0]+/i.test(pattern) || pattern.indexOf('@') >= 0) {
      var size = pattern.replace(/E\+?[@#0]+|[^@#0]/gi, '')
      options.minimumSignificantDigits = Math.min(Math.max(size.replace(/[^@0]/g, '').length, 1), 21)
      options.maximumSignificantDigits = Math.min(Math.max(size.length, 1), 21)
    } else {
      var parts = pattern.replace(/[^#0.]/g, '').split('.')
      var integer = parts[0]
      var n = integer.length - 1
      while (integer[n] === '0') --n
      options.minimumIntegerDigits = Math.min(Math.max(integer.length - 1 - n, 1), 21)
      var fraction = parts[1] || ''
      n = 0
      while (fraction[n] === '0') ++n
      options.minimumFractionDigits = Math.min(Math.max(n, 0), 20)
      while (fraction[n] === '#') ++n
      options.maximumFractionDigits = Math.min(Math.max(n, 0), 20)
    }
    return options
  },
  parseDatePattern: function (pattern/*: ?string */) {
    if (!pattern) return
    var options = {}
    for (var i = 0; i < pattern.length;) {
      var current = pattern[i]
      var n = 1
      while (pattern[++i] === current) ++n
      switch (current) {
        case 'G':
          options.era = n === 5 ? NARROW : n === 4 ? LONG : SHORT
          break
        case 'y':
        case 'Y':
          options.year = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'M':
        case 'L':
          n = Math.min(Math.max(n - 1, 0), 4)
          options.month = [NUMERIC, TWODIGIT, SHORT, LONG, NARROW][n]
          break
        case 'E':
        case 'e':
        case 'c':
          options.weekday = n === 5 ? NARROW : n === 4 ? LONG : SHORT
          break
        case 'd':
        case 'D':
          options.day = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'h':
        case 'K':
          options.hour12 = true
          options.hour = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'H':
        case 'k':
          options.hour12 = false
          options.hour = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'm':
          options.minute = n === 2 ? TWODIGIT : NUMERIC
          break
        case 's':
        case 'S':
          options.second = n === 2 ? TWODIGIT : NUMERIC
          break
        case 'z':
        case 'Z':
        case 'v':
        case 'V':
          options.timeZoneName = n === 1 ? SHORT : LONG
          break
      }
    }
    return Object.keys(options).length ? options : undefined
  }
}

function namespace ()/*: FormatMessage */ {
  var formats = assign({}, origFormats)
  var currentLocales/*: Locales */ = 'en'
  var translations/*: Translations */ = {}
  var generateId/*: GenerateId */ = function (pattern) { return pattern }
  var missingReplacement/*: Replacement */ = null
  var missingTranslation/*: MissingTranslation */ = 'warning'
  var types/*: Types */ = {}

  function formatMessage (msg/*: Message */, args/*:: ?: Object */, locales/*:: ?: Locales */) {
    var pattern = typeof msg === 'string' ? msg : msg.default
    var id = (typeof msg === 'object' && msg.id) || generateId(pattern)
    var translated = translate(pattern, id, locales || currentLocales)
    var format = translated.format || (
      translated.format = interpret(parse(translated.message), locales || currentLocales, types)
    )
    return format(args)
  }

  formatMessage.rich = function rich (msg/*: Message */, args/*:: ?: Object */, locales/*:: ?: Locales */) {
    var pattern = typeof msg === 'string' ? msg : msg.default
    var id = (typeof msg === 'object' && msg.id) || generateId(pattern)
    var translated = translate(pattern, id, locales || currentLocales)
    var format = translated.toParts || (
      translated.toParts = interpret.toParts(parse(translated.message, { tagsType: tagsType }), locales || currentLocales, types)
    )
    return format(args)
  }

  var tagsType = '<>'
  function richType (node/*: any[] */, locales/*: Locales */) {
    var style = node[2]
    return function (fn, args) {
      var props = typeof style === 'object' ? mapObject(style, args) : style
      return typeof fn === 'function' ? fn(props) : fn
    }
  }
  types[tagsType] = richType

  function mapObject (object/* { [string]: (args?: Object) => any } */, args/*: ?Object */) {
    return Object.keys(object).reduce(function (mapped, key) {
      mapped[key] = object[key](args)
      return mapped
    }, {})
  }

  function translate (pattern/*: string */, id/*: string */, locales/*: Locales */)/*: Translation */ {
    var locale = lookupClosestLocale(locales, translations) || 'en'
    var messages = translations[locale] || (translations[locale] = {})
    var translated = messages[id]
    if (typeof translated === 'string') {
      translated = messages[id] = { message: translated }
    }
    if (!translated) {
      var message = 'Translation for "' + id + '" in "' + locale + '" is missing'
      if (missingTranslation === 'warning') {
        /* istanbul ignore else */
        if (typeof console !== 'undefined') console.warn(message)
      } else if (missingTranslation !== 'ignore') { // 'error'
        throw new Error(message)
      }
      var replacement = typeof missingReplacement === 'function'
        ? missingReplacement(pattern, id, locale) || pattern
        : missingReplacement || pattern
      translated = messages[id] = { message: replacement }
    }
    return translated
  }

  formatMessage.setup = function setup (opt/*:: ?: Options */) {
    opt = opt || {}
    if (opt.locale) currentLocales = opt.locale
    if ('translations' in opt) translations = opt.translations || {}
    if (opt.generateId) generateId = opt.generateId
    if ('missingReplacement' in opt) missingReplacement = opt.missingReplacement
    if (opt.missingTranslation) missingTranslation = opt.missingTranslation
    if (opt.formats) {
      if (opt.formats.number) assign(formats.number, opt.formats.number)
      if (opt.formats.date) assign(formats.date, opt.formats.date)
      if (opt.formats.time) assign(formats.time, opt.formats.time)
    }
    if (opt.types) {
      types = opt.types
      types[tagsType] = richType
    }
    return {
      locale: currentLocales,
      translations: translations,
      generateId: generateId,
      missingReplacement: missingReplacement,
      missingTranslation: missingTranslation,
      formats: formats,
      types: types
    }
  }

  formatMessage.number = function (value/*: number */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.number[style]) ||
      formats.parseNumberPattern(style) ||
      formats.number.default
    return new Intl.NumberFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.date = function (value/*:: ?: number | Date */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.date[style]) ||
      formats.parseDatePattern(style) ||
      formats.date.default
    return new Intl.DateTimeFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.time = function (value/*:: ?: number | Date */, style/*:: ?: string */, locales/*:: ?: Locales */) {
    var options = (style && formats.time[style]) ||
      formats.parseDatePattern(style) ||
      formats.time.default
    return new Intl.DateTimeFormat(locales || currentLocales, options).format(value)
  }

  formatMessage.select = function (value/*: any */, options/*: Object */) {
    return options[value] || options.other
  }

  formatMessage.custom = function (placeholder/*: any[] */, locales/*: Locales */, value/*: any */, args/*: Object */) {
    if (!(placeholder[1] in types)) return value
    return types[placeholder[1]](placeholder, locales)(value, args)
  }

  formatMessage.plural = plural.bind(null, 'cardinal')
  formatMessage.selectordinal = plural.bind(null, 'ordinal')
  function plural (
    pluralType/*: 'cardinal' | 'ordinal' */,
    value/*: number */,
    offset/*: any */,
    options/*: any */,
    locale/*: any */
  ) {
    if (typeof offset === 'object' && typeof options !== 'object') { // offset is optional
      locale = options
      options = offset
      offset = 0
    }
    var closest = lookupClosestLocale(locale || currentLocales, plurals)
    var plural = (closest && plurals[closest][pluralType]) || returnOther
    return options['=' + +value] || options[plural(value - offset)] || options.other
  }
  function returnOther (/*:: n:number */) { return 'other' }

  formatMessage.namespace = namespace

  return formatMessage
}
var formatMessage = namespace()
 function findReactComponent(element) {
    let fiber = element[Object.keys(element).find(key => key.startsWith("__reactInternalInstance$"))];
    if (fiber == null) return null;

    const go = fiber => {
        let parent = fiber.return;
        while (typeof parent.type == "string") {
            parent = parent.return;
        }
        return parent;
    };
    fiber = go(fiber);
    while(fiber.stateNode == null) {
        fiber = go(fiber);
    }
    return fiber.stateNode;
}
  window.vm = findReactComponent(document.getElementsByClassName("stage-header_stage-size-row_14N65")[0]).props.vm;
if (!Scratch) {
    Scratch = {
      // @ts-expect-error
      BlockType: {
        COMMAND: 'command',
        REPORTER: 'reporter',
        BOOLEAN: 'Boolean',
        HAT: 'hat'
      },
      // @ts-expect-error
      ArgumentType: {
        STRING: 'string',
        NUMBER: 'number',
        COLOR: 'color',
        ANGLE: 'angle',
        BOOLEAN: 'Boolean',
        MATRIX: 'matrix',
        NOTE: 'note'
      },
      // @ts-expect-error
      vm: window.vm,
      extensions: {
        unsandboxed: true,
        register: (object) => {
          // @ts-expect-error
          const serviceName = vm.extensionManager._registerInternalExtension(object);
          // @ts-expect-error
          vm.extensionManager._loadedExtensions.set(object.getInfo().id, serviceName);
        }
      }
    };
    BlockType = Scratch.BlockType;
    ArgumentType = Scratch.ArgumentType;
    TargetType = Scratch.TargetType;
    if (!Scratch.vm) {
      alert("Error: VM does not exist. (line 53)")
      throw new Error('The VM does not exist');
    }
  };
  

//INPUTS
const DIGITAL_INPUT = 1;
const DIGITAL_OUTPUT = 2;
const PWM = 3;
const SERVO = 4;
const TONE = 5;
const SONAR = 6;
const ANALOG_INPUT = 7;
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
//require('sweetalert');

// an array to save the current pin mode
// this is common to all board types since it contains enough
// entries for all the boards.
// Modes are listed above - initialize to invalid mode of -1
let pin_modes = new Array(30).fill(-1);

// has an websocket message already been received
let alerted = false;

let connection_pending = false;

// general outgoing websocket message holder
let msg = null;

// the pin assigned to the sonar trigger
// initially set to -1, an illegal value
let sonar_report_pin = -1;

// flag to indicate if the user connected to a board
let connected = false;

// arrays to hold input values
let digital_inputs = new Array(32);
let analog_inputs = new Array(8);

// flag to indicate if a websocket connect was
// ever attempted.
let connect_attempt = false;

// an array to buffer operations until socket is opened
let wait_open = [];

let the_locale = null;

// common
const FormDigitalWrite = {
    'pt-br': 'Escrever Pino Digital [PIN]como[ON_OFF]',
    'pt': 'Escrever Pino Digital[PIN]como[ON_OFF]',
    'en': 'Write Digital Pin [PIN] [ON_OFF]',
    'fr': 'Mettre la pin numérique[PIN]à[ON_OFF]',
    'zh-tw': '腳位[PIN]數位輸出[ON_OFF]',
    'zh-cn': '引脚[PIN]数字输出[ON_OFF]',
    'pl': 'Ustaw cyfrowy Pin [PIN] na [ON_OFF]',
    'de': 'Setze digitalen Pin [PIN] [ON_OFF]',
    'ja': 'デジタル・ピン [PIN] に [ON_OFF] を出力',
};

const FormPwmWrite = {
    'pt-br': 'Escrever Pino PWM[PIN]com[VALUE]%',
    'pt': 'Escrever Pino PWM[PIN]com[VALUE]%',
    'en': 'Write PWM Pin [PIN] [VALUE]%',
    'fr': 'Mettre la pin PWM[PIN]à[VALUE]%',
    'zh-tw': '腳位[PIN]類比輸出[VALUE]%',
    'zh-cn': '引脚[PIN]模拟输出[VALUE]%',
    'pl': 'Ustaw PWM Pin [PIN] na [VALUE]%',
    'de': 'Setze PWM-Pin [PIN] [VALUE]%',
    'ja': 'PWM ピン [PIN] に [VALUE]% を出力',
};

const FormTone = {
    'pt-br': 'Soar no Pino[PIN]com[FREQ]Hz e[DURATION]ms',
    'pt': 'Soar no Pino[PIN]com[FREQ]Hz  e[DURATION]ms',
    'en': 'Tone Pin [PIN] [FREQ] Hz [DURATION] ms',
    'fr': 'Définir le buzzer sur la pin[PIN]à[FREQ]Hz pendant[DURATION] ms',
    'zh-tw': '腳位[PIN]播放音調，頻率為[FREQ]赫茲 時間為[DURATION]毫秒',
    'zh-cn': '引脚[PIN]播放音调，频率为[FREQ]赫兹 时间为[DURATION]毫秒',
    'pl': 'Ustaw brzęczyk na Pinie [PIN] na [FREQ] Hz i [DURATION] ms%',
    'de': 'Spiele Ton am Pin [PIN] [FREQ] Hz [DURATION] ms',
    'ja': '音調ピン [PIN] を [FREQ] Hz [DURATION] ms に',
};

const FormServo = {
    'pt-br': 'Mover Servo Motor no[PIN]para[ANGLE]°',
    'pt': 'Mover Servo Motor no[PIN]para[ANGLE]°',
    'en': 'Write Servo Pin [PIN] [ANGLE] Deg.',
    'fr': 'Mettre le servo[PIN]à[ANGLE] Deg.',
    'zh-tw': '伺服馬達腳位[PIN]轉動角度到[ANGLE]度',
    'zh-cn': '伺服电机引脚[PIN]转动角度到[ANGLE]度',
    'pl': 'Ustaw silnik servo na Pinie [PIN] na [ANGLE]°',
    'de': 'Setze Servo-Pin [PIN] [ANGLE]°',
    'ja': 'サーボ・ピン [PIN] に [ANGLE] 度を出力',
};

const FormAnalogRead = {
    'pt-br': 'Ler Pino Analógico [PIN]',
    'pt': 'Ler Pino Analógico [PIN]',
    'en': 'Read Analog Pin [PIN]',
    'fr': 'Lecture analogique [PIN]',
    'zh-tw': '讀取類比腳位[PIN]',
    'zh-cn': '读取模拟引脚[PIN]',
    'pl': 'Odczytaj analogowy Pin [PIN]',
    'de': 'Lies analogen Pin [PIN]',
    'ja': 'アナログ・ピン [PIN] から入力',
};

const FormDigitalRead = {
    'pt-br': 'Ler Pino Digital [PIN]',
    'pt': 'Ler Pino Digital [PIN]',
    'en': 'Read Digital Pin [PIN]',
    'fr': 'Lecture numérique [PIN]',
    'zh-tw': '讀取數位腳位[PIN]',
    'zh-cn': '读取数字引脚[PIN]',
    'pl': 'Odczytaj cyfrowy Pin [PIN]',
    'de': 'Lies digitalen Pin [PIN]',
    'ja': 'デジタル・ピン [PIN] から入力',
};

const FormSonarRead = {
    'pt-br': 'Ler Distância: Sonar em T[TRIGGER_PIN] E[ECHO_PIN]',
    'pt': 'Ler Distância: Sonar em T[TRIGGER_PIN] E[ECHO_PIN]',
    'en': 'Read SONAR  T [TRIGGER_PIN]  E [ECHO_PIN]',
    'fr': 'Distance de lecture : Sonar T [TRIGGER_PIN] E [ECHO_PIN]',
    'zh-tw': 'HCSR超音波感測器，Echo在腳位[ECHO_PIN] Trig在腳位[TRIGGER_PIN]',
    'zh-cn': 'HCSR超声波传感器，Echo在引脚[ECHO_PIN] Trig在引脚[TRIGGER_PIN]',
    'pl': 'Odczytaj odległość: Sonar T [TRIGGER_PIN]  E [ECHO_PIN]',
    'de': 'Lies Sonar T [TRIGGER_PIN]  E [ECHO_PIN]',
    'ja': '超音波測距器からトリガ [TRIGGER_PIN] とエコー [ECHO_PIN] で入力',
};

// ESP-8266 specific

const FormIPBlockE = {
    'pt-br': 'Endereço IP da placa ESP-8266 [IP_ADDR]',
    'pt': 'Endereço IP da placa ESP-8266 [IP_ADDR]',
    'en': 'ESP-8266 IP Address [IP_ADDR]',
    'fr': "Adresse IP de l'ESP-8266 [IP_ADDR]",
    'zh-tw': 'ESP-8266 IP 位址[IP_ADDR]',
    'zh-cn': 'ESP-8266 IP 地址[IP_ADDR]',
    'pl': 'Adres IP ESP-8266 [IP_ADDR]',
    'de': 'ESP-8266 IP-Adresse [IP_ADDR]',
    'ja': 'ESP-8266 の IP アドレスを [IP_ADDR] に',
};

// Raspbery Pi Specific
const FormIPBlockR = {
    'pt-br': 'Endereço IP do RPi [IP_ADDR]',
    'pt': 'Endereço IP do RPi [IP_ADDR]',
    'en': 'Remote IP Address [IP_ADDR]',
    'fr': 'Adresse IP du RPi [IP_ADDR]',
    'zh-tw': '遠端 IP 位址[IP_ADDR]',
    'zh-cn': '远程 IP 地址[IP_ADDR]',
    'pl': 'Adres IP Rasberry Pi [IP_ADDR]',
    'de': 'IP-Adresse des RPi [IP_ADDR]',
    'ja': 'ラズパイの IP アドレスを [IP_ADDR] に',
};

// General Alert
const FormWSClosed = {
    'pt-br': "A Conexão do WebSocket está Fechada",
    'pt': "A Conexão do WebSocket está Fechada",
    'en': "WebSocket Connection Is Closed.",
    'fr': "La connexion WebSocket est fermée.",
    'zh-tw': "網路連線中斷",
    'zh-cn': "网络连接中断",
    'pl': "Połączenie WebSocket jest zamknięte.",
    'de': "WebSocket-Verbindung geschlossen.",
    'ja': "ウェブソケット接続が切断されています",
};

// ESP-8266 Alert
const FormAlrt = {
    'pt-br': {
        title: "Atenção",
        text: "Informe o endereço IP da placa ESP-8266 no bloco apropriado",
        icon: "info",
    },
    'pt': {
        title: "Atenção",
        text: "Informe o endereço IP da placa ESP-8266 no bloco apropriado",
        icon: "info",
    },
    'en': {
        title: "Reminder",
        text: "Enter the IP Address of the ESP-8266 Into The IP Address Block",
        icon: "info",
    },
    'fr': {
        title: "Attention",
        text: "Entrez l'adresse IP de l'ESP-8266 dans le bloc approprié.",
        icon: "info",
    },
    'zh-tw': {
        title: "提醒",
        text: "請於 IP 位址積木中輸入 ESP-8266 的 IP 位址",
        icon: "info",
    },
    'zh-cn': {
        title: "提醒",
        text: "请于 IP地址积木中输入 ESP-8266 的 IP 地址",
        icon: "info",
    },
    'pl': {
        title: "Przypomnienie",
        text: "Wprowadź adres IP ESP-8266 do bloku adresu IP",
        icon: "info",
    },
    'de': {
        title: "Wichtig",
        text: "Trage die IP-Adresse des ESP-8266 im Blcok IP-Adresse ein",
        icon: "info",
    },
    'ja': {
    title: "注意",
        text: "ESP-8266 の IP アドレスを IP アドレス・ブロックに記入して下さい",
        icon: "info",
    },
};


class ArduinoOneGPIO {
    constructor(runtime) {
        the_locale = this._setLocale();
        this.runtime = runtime;
    }

    getInfo() {
        the_locale = this._setLocale();
        this.connect();

        return {
            id: 'onegpioArduino',
            color1: '#0C5986',
            color2: '#34B0F7',
            name: 'OneGpio Arduino',
            blockIconURI: 'data:image/png;base64,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',
            blocks: [
                {
                    opcode: 'digital_write',
                    blockType: BlockType.COMMAND,
                    //text: 'Write Digital Pin [PIN] [ON_OFF]',
                    text: FormDigitalWrite[the_locale],

                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '2',
                            menu: "digital_pins"
                        },
                        ON_OFF: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '0',
                            menu: "on_off"
                        }
                    }
                },
                {
                    opcode: 'pwm_write',
                    blockType: BlockType.COMMAND,
                    text: FormPwmWrite[the_locale],
                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '3',
                            menu: 'pwm_pins'
                        },
                        VALUE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '50',
                        }
                    }
                },
                '---',
                {
                    opcode: 'tone_on',
                    blockType: BlockType.COMMAND,
                    text: FormTone[the_locale],
                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '2',
                            menu: 'digital_pins'
                        },
                        FREQ: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 100,
                        },
                        DURATION: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 50,
                        }
                    }
                },

                '---',
                {
                    opcode: 'servo',
                    blockType: BlockType.COMMAND,
                    text: FormServo[the_locale],
                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '2',
                            menu: 'digital_pins'
                        },
                        ANGLE: {
                            type: ArgumentType.NUMBER,
                            defaultValue: 90,
                        },

                    }
                },
                '---',
                {
                    opcode: 'analog_read',
                    blockType: BlockType.REPORTER,
                    text: FormAnalogRead[the_locale],
                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '0',
                            menu: 'analog_pins'
                        },
                    }
                },
                '---',
                {
                    opcode: 'digital_read',
                    blockType: BlockType.REPORTER,
                    text: FormDigitalRead[the_locale],
                    arguments: {
                        PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '2',
                            menu: 'digital_pins'
                        },
                    }
                },
                '---',
                {
                    opcode: 'sonar_read',
                    blockType: BlockType.REPORTER,
                    text: FormSonarRead[the_locale],

            arguments: {
                        TRIGGER_PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '7',
                            menu: 'digital_pins'
                        },
                        ECHO_PIN: {
                            type: ArgumentType.NUMBER,
                            defaultValue: '8',
                            menu: 'digital_pins'
                        }
                    }
                },
            ],
            menus: {
                digital_pins: {
                    acceptReporters: true,
                    items: ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
                        '12', '13', '14', '15', '16', '17', '18', '19']
                },
                pwm_pins: {
                    acceptReporters: true,
                    items: ['3', '5', '6', '9', '10', '11']
                },
                analog_pins: {
                    acceptReporters: true,
                    items: ['0', '1', '2', '3', '4', '5']
                },

                mode: {
                    acceptReporters: true,
                    items: [{text: "Input", value: '1'}, {text: "Output", value: '2'}]
                },
                on_off: {
                    acceptReporters: true,
                    items: ['0', '1']
                }
            }
        };
    }

    // The block handlers

    // command blocks

    digital_write(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }

        }

        if (!connected) {
            let callbackEntry = [this.digital_write.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            pin = parseInt(pin, 10);

            if (pin_modes[pin] !== DIGITAL_OUTPUT) {
                pin_modes[pin] = DIGITAL_OUTPUT;
                msg = {"command": "set_mode_digital_output", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            let value = args['ON_OFF'];
            value = parseInt(value, 10);
            msg = {"command": "digital_write", "pin": pin, "value": value};
            msg = JSON.stringify(msg);
            window.socket.send(msg);
        }
    }

    //pwm
    pwm_write(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }

        if (!connected) {
            let callbackEntry = [this.pwm_write.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            // maximum value for RPi and Arduino
            let the_max = 255;
            pin = parseInt(pin, 10);

            let value = args['VALUE'];
            value = parseInt(value, 10);

            // calculate the value based on percentage
            value = the_max * (value / 100);
            value = Math.round(value);
            if (pin_modes[pin] !== PWM) {
                pin_modes[pin] = PWM;
                msg = {"command": "set_mode_pwm", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            msg = {"command": "pwm_write", "pin": pin, "value": value};
            msg = JSON.stringify(msg);
            window.socket.send(msg);

        }
    }

    tone_on(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }

        if (!connected) {
            let callbackEntry = [this.tone_on.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            pin = parseInt(pin, 10);
            let freq = args['FREQ'];
            freq = parseInt(freq, 10);
            let duration = args['DURATION'];
            duration = parseInt(duration, 10);
            // make sure duration maximum is 5 seconds
            if (duration > 5000) {
                duration = 5000;
            }


            if (pin_modes[pin] !== TONE) {
                pin_modes[pin] = TONE;
                msg = {"command": "set_mode_tone", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            msg = {"command": "play_tone", "pin": pin, 'freq': freq, 'duration': duration};
            msg = JSON.stringify(msg);
            window.socket.send(msg);

        }
    }

    // move servo
    servo(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }
        if (!connected) {
            let callbackEntry = [this.servo.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            pin = parseInt(pin, 10);
            let angle = args['ANGLE'];
            angle = parseInt(angle, 10);


            if (pin_modes[pin] !== SERVO) {
                pin_modes[pin] = SERVO;
                msg = {"command": "set_mode_servo", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            msg = {
                'command': 'servo_position', "pin": pin,
                'position': angle
            };
            msg = JSON.stringify(msg);
            window.socket.send(msg);

        }
    }

    // reporter blocks
    analog_read(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }
        if (!connected) {
            let callbackEntry = [this.analog_read.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            pin = parseInt(pin, 10);

            if (pin_modes[pin] !== ANALOG_INPUT) {
                pin_modes[pin] = ANALOG_INPUT;
                msg = {"command": "set_mode_analog_input", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            return analog_inputs[pin];

        }
    }

    digital_read(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }
        if (!connected) {
            let callbackEntry = [this.digital_read.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let pin = args['PIN'];
            pin = parseInt(pin, 10);

            if (pin_modes[pin] !== DIGITAL_INPUT) {
                pin_modes[pin] = DIGITAL_INPUT;
                msg = {"command": "set_mode_digital_input", "pin": pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            return digital_inputs[pin];

        }
    }

    sonar_read(args) {
        if (!connected) {
            if (!connection_pending) {
                this.connect();
                connection_pending = true;
            }
        }
        if (!connected) {
            let callbackEntry = [this.sonar_read.bind(this), args];
            wait_open.push(callbackEntry);
        } else {
            let trigger_pin = args['TRIGGER_PIN'];
            trigger_pin = parseInt(trigger_pin, 10);
            sonar_report_pin = trigger_pin;
            let echo_pin = args['ECHO_PIN'];
            echo_pin = parseInt(echo_pin, 10);


            if (pin_modes[trigger_pin] !== SONAR) {
                pin_modes[trigger_pin] = SONAR;
                msg = {"command": "set_mode_sonar", "trigger_pin": trigger_pin, "echo_pin": echo_pin};
                msg = JSON.stringify(msg);
                window.socket.send(msg);
            }
            return digital_inputs[sonar_report_pin];

        }
    }

    // end of block handlers

    _setLocale () {
        let now_locale = '';
        switch (formatMessage.setup().locale){
            case 'pt-br':
            case 'pt':
                now_locale='pt-br';
                break;
            case 'en':
                now_locale='en';
                break;
            case 'fr':
                now_locale='fr';
                break;
            case 'zh-tw':
                now_locale= 'zh-tw';
                break;
            case 'zh-cn':
                now_locale= 'zh-cn';
                break;
            case 'pl':
                now_locale= 'pl';
                break;
            case 'ja':
                now_locale= 'ja';
                break;
            case 'de':
                now_locale= 'de';
                break;
            default:
                now_locale='en';
                break;
        }
        return now_locale;
    }

    // helpers
    connect() {
        if (connected) {
            // ignore additional connection attempts
            return;
        } else {
            connect_attempt = true;
            window.socket = new WebSocket("ws://127.0.0.1:9000");
            msg = JSON.stringify({"id": "to_arduino_gateway"});
        }


        // websocket event handlers
        window.socket.onopen = function () {

            digital_inputs.fill(0);
            analog_inputs.fill(0);
            pin_modes.fill(-1);
            // connection complete
            connected = true;
            connect_attempt = true;
            // the message is built above
            try {
                //ws.send(msg);
                window.socket.send(msg);

            } catch (err) {
                // ignore this exception
            }
            for (let index = 0; index < wait_open.length; index++) {
                let data = wait_open[index];
                data[0](data[1]);
            }
        };

        window.socket.onclose = function () {
            digital_inputs.fill(0);
            analog_inputs.fill(0);
            pin_modes.fill(-1);
            if (alerted === false) {
                alerted = true;
                alert(FormWSClosed[the_locale]);}
            connected = false;
        };

        // reporter messages from the board
        window.socket.onmessage = function (message) {
            msg = JSON.parse(message.data);
            let report_type = msg["report"];
            let pin = null;
            let value = null;

            // types - digital, analog, sonar
            if (report_type === 'digital_input') {
                pin = msg['pin'];
                pin = parseInt(pin, 10);
                value = msg['value'];
                digital_inputs[pin] = value;
            } else if (report_type === 'analog_input') {
                pin = msg['pin'];
                pin = parseInt(pin, 10);
                value = msg['value'];
                analog_inputs[pin] = value;
            } else if (report_type === 'sonar_data') {
                value = msg['value'];
                digital_inputs[sonar_report_pin] = value;
            }
        };
    }


}
 var extensionInstance = new ArduinoOneGPIO(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
