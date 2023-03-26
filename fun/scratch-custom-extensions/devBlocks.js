var Scratch;
const icon = "data:image/png;base64,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";
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
    if (!Scratch.vm) {
      throw new Error('The VM does not exist');
    }
  }

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Pen+ must be run unsandboxed');
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const canvas = runtime.renderer.canvas;
class DevBlocksUtils {

  constructor() {
    this.counter = 0;
  }

  getInfo() {
    return {
      id: 'devblocksUtilities',
      name: 'DevBlocks',

      color1: '#2dc4c4',
      color2: '#2dc4b3',
      color3: '#29a395',

      menuIconURI: icon,

      blocks: [
        {
          opcode: 'isDevBlocks',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is DevBlocks?'
        },
        {
          opcode: 'isExactly',

          blockType: Scratch.BlockType.BOOLEAN,

          text: 'is [A] exactly equal to [B]?',
          arguments: {
            A: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'APPLE'
            }
          }
        },
        {
          opcode: 'isLessOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] <= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'isMoreOrEqual',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[A] >= [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 50
            }
          }
        },
        {
          opcode: 'trueBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'true'
        },
        {
          opcode: 'falseBlock',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'false'
        },
        {
          opcode: 'exponent',

          blockType: Scratch.BlockType.REPORTER,

          text: '[A] ^ [B]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 2
            },
            B: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 1
            }
          }
        },
        {
          opcode: 'pi',
          blockType: Scratch.BlockType.REPORTER,
          text: 'π'
        },
        {
          opcode: 'ternaryOperator',

          blockType: Scratch.BlockType.REPORTER,

          text: 'if [A] then [B] else [C]',
          arguments: {
            A: {
              type: Scratch.ArgumentType.BOOLEAN
            },
            B: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            C: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'letters',

          blockType: Scratch.BlockType.REPORTER,

          text: 'letters [START] to [END] of [STRING]',
          arguments: {
            START: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 5
            },
            END: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 7
            },
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'red apple'
            }
          }
        },
        {
          opcode: 'currentMillisecond',
          blockType: Scratch.BlockType.REPORTER,
          text: 'current millisecond'
        },
        {
          opcode: 'fetchFrom',

          blockType: Scratch.BlockType.REPORTER,

          text: 'get content from http://[URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'google.com'
            }
          }
        },
        {
          opcode: 'parseJSON',

          blockType: Scratch.BlockType.REPORTER,

          text: '[PATH] of [JSON_STRING]',
          arguments: {
            PATH: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'fruit/apples'
            },
            JSON_STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '{"fruit": {"apples": 2, "bananas": 3}, "total_fruit": 5}'
            }
          }
        },
        {
          opcode: 'stringToBoolean',

          blockType: Scratch.BlockType.BOOLEAN,

          text: '[STRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'regexReplace',

          blockType: Scratch.BlockType.REPORTER,

          text: 'replace [REGEX] in text [STRING] with [NEWSTRING]',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Bananas are awesome. I like bananas.'
            },
            REGEX: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'banana'
            },
            NEWSTRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'apple'
            }
          }
        },
        {
          opcode: 'toFixedDecimal',

          blockType: Scratch.BlockType.REPORTER,

          text: 'give [NUMBER] [POINTS] decimal points',
          arguments: {
            NUMBER: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '3.141592653589793'
            },
            POINTS: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'strLower',

          blockType: Scratch.BlockType.REPORTER,

          text: '[STRING] to lowercase',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'HEllo TheRE'
            }
          }
        },
        {
          opcode: 'strUpper',

          blockType: Scratch.BlockType.REPORTER,

          text: '[STRING] to uppercase',
          arguments: {
            STRING: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'HEllo TheRE'
            }
          }
        }
      ]
    }
  }

  isDevBlocks(){
    return document.location.href.startsWith('https://dev-blocks.powerbox1000.repl.co');
  }

  isExactly({A, B}) {
    return A === B;
  }

  isLessOrEqual({A, B}) {
    return A <= B;
  }

  isMoreOrEqual({A, B}) {
    return A >= B;
  }

  trueBlock() {
    return true;
  }

  falseBlock() {
    return false;
  }

  exponent({A, B}) {
    return Math.pow(A, B);
  }

  pi() {
    return Math.PI;
  }

  ternaryOperator({A, B, C}) {
    return A ? B : C;
  }

  letters({STRING, START, END}) {
    return STRING.slice(Math.max(1, START) - 1, Math.min(STRING.length, END));
  }

  currentMillisecond() {
    return Date.now() % 1000;
  }

  fetchFrom({URL}) {
    return fetch("https://api.allorigins.win/raw?url=http%3A//" + escape(URL)).then(res => res.text())
      .catch(err => 'ERROR');
  }

  parseJSON({PATH, JSON_STRING}) {
    try {
      const path = PATH.toString().split('/').map(prop => decodeURIComponent(prop));
      if (path[0] === '') path.splice(0, 1);
      if (path[path.length - 1] === '') path.splice(-1, 1);
      let json;
      try {
        json = JSON.parse(' ' + JSON_STRING);
      } catch (e) {
        return e.message;
      }
      path.forEach(prop => json = json[prop]);
      if (json === null) return 'null';
      else if (json === undefined) return '';
      else if (typeof json === 'object') return JSON.stringify(json);
      else return json.toString();
    } catch (err) {
      return '';
    }
  }

  stringToBoolean({STRING}) {
    return STRING.toString().toLowerCase() == 'false' ? false : STRING;
  }

  regexReplace({STRING, REGEX, NEWSTRING}) {
    return STRING.toString().replace(new RegExp(REGEX, 'gi'), NEWSTRING);
  }
  
  toFixedDecimal({NUMBER, POINTS}){
    try{
      return parseFloat(NUMBER).toFixed(POINTS);
    }catch(e){
      return 0;
    }
  }

  strLower({STRING}){
    return STRING.toString().toLowerCase();
  }

  strUpper({STRING}){
    return STRING.toString().toUpperCase();
  }
}
 var extensionInstance = new DevBlocksUtils(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
//Scratch.extensions.register(new DevBlocksUtils());
