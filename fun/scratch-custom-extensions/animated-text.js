/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* eslint-env worker */
var jobsActive = 0;
var complete = [];
var intervalId = null;
/**
 * Register a step function.
 *
 * Step checks if there are completed jobs and if there are sends them to the
 * parent. Then it checks the jobs count. If there are no further jobs, clear
 * the step.
 */

var registerStep = function registerStep() {
  intervalId = setInterval(function () {
    if (complete.length) {
      // Send our chunk of completed requests and instruct postMessage to
      // transfer the buffers instead of copying them.
      postMessage(complete.slice(), // Instruct postMessage that these buffers in the sent message
      // should use their Transferable trait. After the postMessage
      // call the "buffers" will still be in complete if you looked,
      // but they will all be length 0 as the data they reference has
      // been sent to the window. This lets us send a lot of data
      // without the normal postMessage behaviour of making a copy of
      // all of the data for the window.
      complete.map(function (response) {
        return response.buffer;
      }).filter(Boolean));
      complete.length = 0;
    }

    if (jobsActive === 0) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }, 1);
};
/**
 * Receive a job from the parent and fetch the requested data.
 * @param {object} options.job A job id, url, and options descriptor to perform.
 */


var onMessage = function onMessage(_ref) {
  var job = _ref.data;

  if (jobsActive === 0 && !intervalId) {
    registerStep();
  }

  jobsActive++;
  fetch(job.url, job.options).then(function (response) {
    return response.arrayBuffer();
  }).then(function (buffer) {
    return complete.push({
      id: job.id,
      buffer: buffer
    });
  })["catch"](function (error) {
    return complete.push({
      id: job.id,
      error: error
    });
  }).then(function () {
    return jobsActive--;
  });
};

if (self.fetch) {
  postMessage({
    support: {
      fetch: true
    }
  });
  self.addEventListener('message', onMessage);
} else {
  postMessage({
    support: {
      fetch: false
    }
  });
  self.addEventListener('message', function (_ref2) {
    var job = _ref2.data;
    postMessage([{
      id: job.id,
      error: new Error('fetch is unavailable')
    }]);
  });
}

/***/ })
/******/ ]);
(function(module, exports, __webpack_require__, Scratch) {
  'use strict';
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

  // This is for compatibility with plugin loaders that don't implement window.Scratch.
  // This is a one-time exception. Similar code like this WILL NOT be accepted in new extensions without
  // significant justification.
  if (!Scratch) {
    Scratch = {
      //@ts-expect-error
      TargetType: {
        SPRITE: '_sprite_',
        STAGE: '_stage_',
      },
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
    if (!Scratch.vm) {
      throw new Error('The VM does not exist');
    }
  }

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Pen+ must be run unsandboxed');
  }
  if(!vm) {
  const vm = Scratch.vm;
  }
  const runtime = vm.runtime;
  const canvas = runtime.renderer.canvas;
  const gl = runtime.renderer._gl;
var blockIconURI = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMjcuODM0IDlhMyAzIDAgMDEyLjU0NiAxLjQxMmwuMDk3LjE2Ny4wNTQuMTEuMDUyLjExMi4wNDguMTEyIDYuMjIyIDE2YTMuMDAxIDMuMDAxIDAgMDEtMi4yNyA0LjA0MWwtLjE4LjAyNS0uMTE1LjAxMS0uMTE2LjAwNy0uMTE1LjAwM2gtMS44NTVhMyAzIDAgMDEtMi41NDUtMS40MTJsLS4wOTYtLjE2Ny0uMTA3LS4yMjItLjA0OC0uMTExTDI4Ljk4MyAyOGgtNC45M2wtLjQyMiAxLjA4N2EzLjAwMyAzLjAwMyAwIDAxLTIuNDEgMS44ODlsLS4xOTMuMDE4LS4xOTQuMDA2LTEuOTQtLjAwMi0uMDk2LjAwMkg3YTMgMyAwIDAxLTIuODctMy44NzJsLjA3Mi0uMjA5IDYuMTgzLTE2YTMuMDAxIDMuMDAxIDAgMDEyLjYwNC0xLjkxM0wxMy4xODQgOWwzLjkuMDAxLjA5OS0uMDAxIDMuOTI0LjAwMi4wOTUtLjAwMiAzLjkwNS4wMDIuMDk1LS4wMDJoMi42MzJ6IiBmaWxsLW9wYWNpdHk9Ii4xNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0yNS42NjMgMjFsLjgxNi0yLjA5OS44MTYgMi4wOTloLTEuNjMyem0xMC4yNTggNi4yNzVsLTYuMjIzLTE2LS4wNzUtLjE2OC0uMDg1LS4xNDVjLS4zODctLjYxMS0xLjAxOS0uOTYyLTEuNzAzLS45NjJoLTIuNjMzbC0uMDk2LjAwMi0uMDYyLS4wMDFMMjEuMjAyIDEwbC0uMDk2LjAwMi0uMDYyLS4wMDFMMTcuMTgzIDEwbC0uMDg2LjAwMkwxMy4xODQgMTBsLS4xNjUuMDA3YTIuMDAzIDIuMDAzIDAgMDAtMS43MDIgMS4yNzJsLTYuMTgyIDE2LS4wNTkuMTc1QTIgMiAwIDAwNyAzMGgxMS43OThsLjA4OC0uMDAyIDEuOTQ5LjAwMi4xNjMtLjAwNy4xNjEtLjAxOWEyIDIgMCAwMDEuNTM5LTEuMjQ5bC42Ny0xLjcyNWg2LjI5OWwuNjcyIDEuNzI2LjA3NC4xNjcuMDg2LjE0NWMuMzg3LjYxMSAxLjAxOC45NjIgMS43MDMuOTYyaDEuODU1bC4xNzQtLjAwOS4xNjQtLjAyNGMuOTc2LS4xODcgMS42NjItMS4wMDMgMS42NjItMS45NjcgMC0uMjQ4LS4wNDYtLjQ5NC0uMTM2LS43MjV6IiBmaWxsLW9wYWNpdHk9Ii4yNSIgZmlsbD0iIzAwMCIvPjxwYXRoIGQ9Ik0xMy4xODMgMTFoMy44MThhMSAxIDAgMDEuOTQxIDEuMzM4bC01Ljc0MiAxNmExIDEgMCAwMS0uOTQuNjYySDdhMSAxIDAgMDEtLjkzMy0xLjM2bDYuMTgzLTE2YTEgMSAwIDAxLjkzMy0uNjR6IiBmaWxsPSIjNEM5N0ZGIi8+PHBhdGggZD0iTTE3LjE4MyAxMUgyMWExIDEgMCAwMS45NDIgMS4zMzhsLTUuNzQyIDE2YTEgMSAwIDAxLS45NDEuNjYyaC00LjI2YTEgMSAwIDAxLS45MzItMS4zNmw2LjE4My0xNmExIDEgMCAwMS45MzMtLjY0eiIgZmlsbD0iI0NGNjNDRiIvPjxwYXRoIGQ9Ik0yMS4yMDIgMTFIMjVhMSAxIDAgMDEuOTMzIDEuMzYxbC02LjIwMyAxNmExIDEgMCAwMS0uOTMyLjYzOUgxNWExIDEgMCAwMS0uOTMzLTEuMzYxbDYuMjAzLTE2YTEgMSAwIDAxLjkzMi0uNjM5eiIgZmlsbD0iI0ZGQkYwMCIvPjxwYXRoIGQ9Ik0yNy44MzQgMTFhMSAxIDAgMDEuOTMyLjYzOGw2LjIyMiAxNkExIDEgMCAwMTM0LjA1NiAyOWgtMS44NTRhMSAxIDAgMDEtLjkzMi0uNjM4TDMwLjM1MSAyNmgtNy42NjZsLS45MTkgMi4zNjJhMSAxIDAgMDEtLjkzMi42MzhIMTguOThhMSAxIDAgMDEtLjkzMi0xLjM2Mmw2LjIyMi0xNmExIDEgMCAwMS45MzItLjYzOHptLTEuMzE2IDUuMTQzTDI0LjI0IDIyaDQuNTU2bC0yLjI3OC01Ljg1N3oiIGZpbGw9IiNGRkYiLz48L2c+PC9zdmc+';
var menuIconURI = blockIconURI;
var DefaultText = 'Welcome to my project!';
var DefaultAnimateText = 'Here we go!';
var SANS_SERIF_ID = 'Sans Serif';
var SERIF_ID = 'Serif';
var HANDWRITING_ID = 'Handwriting';
var MARKER_ID = 'Marker';
var CURLY_ID = 'Curly';
var PIXEL_ID = 'Pixel';
var RANDOM_ID = 'Random';
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var formatMessage = __webpack_require__(68);

var ArgumentType = __webpack_require__(58);

var BlockType = __webpack_require__(46);

var Cast = __webpack_require__(47);

var Clone = __webpack_require__(103);

var Timer = __webpack_require__(117);

var StageLayering = __webpack_require__(105);

  var sprite = '_sprite_';


  /**
   * @param {VM.RenderedTarget} target
   * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
   */
  
  

  vm.runtime.on('PROJECT_LOADED', () => {
    console.log('l2')
  });

  /**
   * @param {VM.RenderedTarget} target
   */
  const forceUpdateDirectionAndScale = (target) => {
    target.setDirection(target.direction);
  };

  class Stretch {
    getInfo() {
      return {
         id: 'text',
        name: 'Animated Text',
        blockIconURI: blockIconURI,
        menuIconURI: menuIconURI,
        blocks: [{
          opcode: 'setText',
          text: formatMessage({
            id: 'text.setText',
            "default": 'show text [TEXT]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: DefaultText
            }
          }
        }, {
          opcode: 'animateText',
          text: formatMessage({
            id: 'text.animateText',
            "default": '[ANIMATE] text [TEXT]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            ANIMATE: {
              type: ArgumentType.STRING,
              menu: 'ANIMATE',
              defaultValue: 'rainbow'
            },
            TEXT: {
              type: ArgumentType.STRING,
              defaultValue: DefaultAnimateText
            }
          }
        }, {
          opcode: 'clearText',
          text: formatMessage({
            id: 'text.clearText',
            "default": 'show sprite',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {}
        }, '---', {
          opcode: 'setFont',
          text: formatMessage({
            id: 'text.setFont',
            "default": 'set font to [FONT]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            FONT: {
              type: ArgumentType.STRING,
              menu: 'FONT',
              defaultValue: 'Pixel'
            }
          }
        }, {
          opcode: 'setColor',
          text: formatMessage({
            id: 'text.setColor',
            "default": 'set text color to [COLOR]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            COLOR: {
              type: ArgumentType.COLOR
            }
          }
        }, // {
        //     opcode: 'setSize',
        //     text: formatMessage({
        //         id: 'text.setSize',
        //         default: 'set text size to [SIZE]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         SIZE: {
        //             type: ArgumentType.NUMBER,
        //             defaultValue: 30
        //         }
        //     }
        // },
        {
          opcode: 'setWidth',
          text: formatMessage({
            id: 'text.setWidth',
            "default": 'set width to [WIDTH] aligned [ALIGN]',
            description: ''
          }),
          blockType: BlockType.COMMAND,
          arguments: {
            WIDTH: {
              type: ArgumentType.NUMBER,
              defaultValue: 200
            },
            ALIGN: {
              type: ArgumentType.STRING,
              defaultValue: 'left',
              menu: 'ALIGN'
            }
          }
        } // {
        //     opcode: 'setAlign',
        //     text: formatMessage({
        //         id: 'text.setAlign',
        //         default: 'align text [ALIGN] width [WIDTH]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         ALIGN: {
        //             type: ArgumentType.STRING,
        //             defaultValue: 'left',
        //             menu: 'ALIGN'
        //         },
        //         WIDTH: {
        //             type: ArgumentType.NUMBER,
        //             defaultValue: 200
        //         }
        //     }
        // },
        // {
        //     opcode: 'rainbow',
        //     text: formatMessage({
        //         id: 'text.rainbow',
        //         default: 'rainbow for [SECS] seconds',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         SECS: {
        //             type: ArgumentType.NUMBER,
        //             defaultValue: 1
        //         }
        //     }
        // }
        // '---',
        // {
        //     opcode: 'addText',
        //     text: formatMessage({
        //         id: 'text.addText',
        //         default: 'add text [TEXT]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         TEXT: {
        //             type: ArgumentType.STRING,
        //             defaultValue: ' and more!'
        //         }
        //     }
        // },
        // {
        //     opcode: 'addLine',
        //     text: formatMessage({
        //         id: 'text.addLine',
        //         default: 'add line [TEXT]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         TEXT: {
        //             type: ArgumentType.STRING,
        //             defaultValue: 'more lines!'
        //         }
        //     }
        // },
        // '---',
        // {
        //     opcode: 'setOutlineWidth',
        //     text: formatMessage({
        //         id: 'text.setOutlineWidth',
        //         default: 'set outline width to [WIDTH]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         WIDTH: {
        //             type: ArgumentType.NUMBER,
        //             defaultValue: 1
        //         }
        //     }
        // },
        // {
        //     opcode: 'setOutlineColor',
        //     text: formatMessage({
        //         id: 'text.setOutlineColor',
        //         default: 'set outline color to [COLOR]',
        //         description: ''
        //     }),
        //     blockType: BlockType.COMMAND,
        //     arguments: {
        //         COLOR: {
        //             type: ArgumentType.COLOR
        //         }
        //     }
        // }
        ], // end of block def
      };
    } //end of blocks
  
    
    //end of function
  }

 // Scratch.extensions.register(new Stretch());
  var extensionInstance = new Stretch(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
}(1,2,__webpack_require__,window.Scratch))
