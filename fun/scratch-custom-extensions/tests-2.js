(function (Scratch) {
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
  const STRETCH_X = Symbol('stretch.x');
  const STRETCH_Y = Symbol('stretch.y');

  var sprite = '_sprite_';


  /**
   * @param {VM.RenderedTarget} target
   * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
   */
  const implementStretchForTarget = (target, originalTarget) => {
    if (STRETCH_X in target) {
      // Target already has stretch. Don't implement again.
      return;
    }

    target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
    target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

    const original = target._getRenderedDirectionAndScale;
    target._getRenderedDirectionAndScale = function () {
      const result = original.call(this);

      result.scale[0] *= this[STRETCH_X] / 100;
      result.scale[1] *= this[STRETCH_Y] / 100;

      return result;
    };
  };
  vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
  vm.runtime.on('targetWasCreated', (target, originalTarget) => implementStretchForTarget(target, originalTarget));
  vm.runtime.on('PROJECT_LOADED', () => {
    vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
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
        id: 'customExtension2',
        name: 'YMX-Utilities 2',
        color1: '#4287f5',
        color2: '#2b62ba',
        color3: '#204785',
        blocks: [
          {
            opcode: 'setTurboMode',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set turbomode [ON]',
            arguments: {
              ON: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: '', //defaultValue
              },
             
            },
          }, //next block
           {
            opcode: 'currentClones',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Clone Counter',
            arguments: {},
          }, //next block
           {
            opcode: 'changeCloneCounter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Change Clone Counter by [INPUT]',
            arguments: {
            INPUT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
            }
            },
          }, //next block
           {
            opcode: 'greenFlag',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Press Green Flag',
            arguments: {},
          }, //next block
            {
            opcode: 'consoleLog',
            blockType: 'command',
            text: 'Console [DROPDOWN] [INPUT]',
            disableMonitor: true,
            arguments: {
              DROPDOWN: {
                type: 'string',
                defaultValue: 'log',
                menu: 'consoleLogMenu'
              },
              INPUT: {
                type: 'string',
                defaultValue: 'Hello, world!'
              }
            }
          },
          {
            opcode: 'strictequality',
            blockType: Scratch.BlockType.BOOLEAN,
            text: '[ONE] Strictly equals [TWO]',
            arguments: {
            ONE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
            },
            TWO: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
               }
            }
            },
           {
            opcode: 'True',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'true',
            arguments: {},
            },
           {
            opcode: 'whenBooleanHat',
            blockType: 'hat',
            text: 'when [INPUT]',
            isEdgeActivated: true,
            arguments: {
              INPUT: {
                type: Scratch.ArgumentType.BOOLEAN,
                defaultValue: ''
              }
            }
          },
           {
            opcode: 'False',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'false',
            arguments: {},
            }, // next block def
           {
            opcode: 'exponent2',
            blockType: Scratch.BlockType.REPORTER,
            text: ' [A] ^ [B] ',
            arguments: {
              A: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '10',
              },
              B: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: '2',
              }
            },
          }, //next block
           {
            opcode: 'changeCloneCounter',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Change Clone Counter by [INPUT]',
            arguments: {
            INPUT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '0',
            }
            },
          }, //next block
           {
            opcode: 'turbomode',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Turbo mode',
            arguments: {},
          },
          {
            opcode: 'trueFalseBoolean',
            blockType: Scratch.BlockType.BOOLEAN, //BOOLEAN
            text: '[TRUEFALSE]',
            arguments: {
              TRUEFALSE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'true',
                menu: 'trueFalseMenu'
              }
            }
          },
           {
            opcode: 'isClone',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is Clone?',
            filter: ['_sprite_']
          },
          {
            opcode: 'spriteClicked',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'sprite clicked?',
            filter: ['_sprite_'] //Scratch.TargetType.SPRITE
          },
          {
            opcode: 'readClipboard',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Clipboard',
            arguments: {},
            }, //next
           {
            opcode: 'setClipboard',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Clipboard to [STRING]',
            arguments: {
              STRING: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Apple',
              }
            },
            }, //next
           {
            opcode: 'javascript',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Run javascript [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'alert("Hi!")',
              
            },
            },
            }, //next
               {
            opcode: 'js',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Run javascript with output [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'alert("Hi!")',
            },
            },
            }, //next
            {
            opcode: 'alert',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Alert [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Hi!',
              
            },
            },
            }, //next control_for_each
             {
            opcode: 'confirm',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Confirm [A]',
            arguments: {
              A: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Are you the red spy?',
              
            },
            },
            }, //next
         
        ], //end of block def
      };
    } //commands >
       setClipboard(args) {
      navigator.clipboard.writeText(args.STRING);
    }
     js(args) {
      return eval(args.A);
    }
    alert(args) {
      return alert(args.A);
    }
    confirm(args) {
      return confirm(args.A);
    }
    javascript(args) {
      return eval(args.A);
    }
    readClipboard(args) {
      if (navigator.clipboard && navigator.clipboard.readText) {
        return navigator.clipboard.readText();
      }
      return '';
    }
        consoleLog(args) {
      if (args.DROPDOWN === 'log') {
        console.log(args.INPUT);
      } else if (args.DROPDOWN === 'error') {
        console.error(args.INPUT);
      } else if (args.DROPDOWN === 'warn') {
        console.warn(args.INPUT);
      }
    }
    turbomode() {
      return vm.runtime.turboMode;
    }
     notEqualToV(args) {
      return (args.IA != args.IB);
    }
    isClone(args, util) {
      if (util.target.isOriginal) {
        return false;
      } else {
        return true;
      }
    }
     osBrowserDetails(args) {
      var user = navigator.userAgent;
      if (args.DROPDOWN === 'operating system') {
        if (user.includes('Mac OS')) {
          return 'macOS';
        }
        if (user.includes('CrOS')) {
          return 'ChromeOS';
        }
        if (user.includes('Linux')) {
          return 'Linux';
        }
        if (user.includes('Windows')) {
          return 'Windows';
        }
        if (user.includes('iPad')) {
          return 'iOS';
        }
        if (user.includes('iPod')) {
          return 'iOS';
        }
        if (user.includes('iPhone')) {
          return 'iOS';
        }
        if (user.includes('Android')) {
          return 'Android';
        }
        return 'Other';
      }
      if (args.DROPDOWN === 'browser') {
        if (user.includes('Chrome')) {
          return 'Chrome';
        }
        if (user.includes('MSIE')) {
          return 'Internet Explorer';
        }
        if (user.includes('rv:')) {
          return 'Internet Explorer';
        }
        if (user.includes('Firefox')) {
          return 'Firefox';
        }
        if (user.includes('Safari')) {
          return 'Safari';
        }
        if(user.includes('Edge')) {
          return 'Microsoft Edge';
        }
        return 'Other';
      }
    }
     ProjectURL() {
      return window.location.href;
    }
  spriteClicked(args, util) {
      return (util.ioQuery('mouse', 'getIsDown') && util.target.isTouchingObject('_mouse_'));
    }
    setTurboMode(args) {
            return vm.setTurboMode(args.ON);
    }
    whenBooleanHat(args) {
      return args.INPUT
    }
    currentClones() {
          return vm.runtime._cloneCounter;
    }
    changeCloneCounter(args) {
      vm.runtime.changeCloneCounter(args.INPUT);
      return vm.runtime._cloneCounter;
    }
    greenFlag() {
      return vm.greenFlag();
    }
    strictequality(args) {
      var st =  (args.ONE === args.TWO);
      var a = true;
      if(st == 1 | st == true) {
        a = true;
      } else {
        a = false;
      }
      return a;
    }
    True() {
      return true;
    }
    False() { 
      return false;
    }
    exponent2(args) {
      return Math.pow(new Number(args.A), new Number(args.B))
    }
  
  } //end of commands

 // Scratch.extensions.register(new Stretch());
  var extensionInstance = new Stretch(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})(window.Scratch);
