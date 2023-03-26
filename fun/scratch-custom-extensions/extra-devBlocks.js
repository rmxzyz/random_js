const icon = "data:image/jpeg;base64,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";
var Scratch;
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
class Featured {

    constructor() {
        this.counter = 0;
    }

    getInfo() {
        return {
            id: 'featuredExt',
            name: 'Featured Blocks',

            color1: '#b38823',
            color2: '#b38820',
            color3: '#8f6c1a',

            menuIconURI: icon,

            blocks: [{
                opcode: 'increaseCounter',
                blockType: Scratch.BlockType.COMMAND,
                text: 'increase counter'
            }, {
                opcode: 'resetCounter',
                blockType: Scratch.BlockType.COMMAND,
                text: 'reset counter'
            }, {
                opcode: 'getCounter',
                blockType: Scratch.BlockType.REPORTER,
                text: 'counter'
            }, {
                opcode: 'retColor',
                blockType: Scratch.BlockType.REPORTER,
                text: 'color [COLORVAL]',
                arguments: {
                    COLORVAL: {
                        type: Scratch.ArgumentType.COLOR,
                        defaultValue: '#2dc4c4'
                    }
                }
            }]
        }
    }

    increaseCounter() {
        this.counter += 1;
    }
  decreaseCounter() {
    this.counter -= 1;
  }

    resetCounter() {
        this.counter = 0;
    }

    getCounter() {
        return this.counter;
    }

    retColor({COLORVAL}) {
        return COLORVAL;
    }
}
  var extensionInstance = new Featured(window.vm.extensionManager.runtime)
  var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
  window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
//Scratch.extensions.register(new Featured());
