//only works on touchscreen devices.
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
      alert("Error: VM does not exist. (line 53)")
      throw new Error('The VM does not exist');
    }
  }


  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const canvas = runtime.renderer.canvas;
class multiTouch {
  getInfo() {
    return {
      id: 'multiTouch',
      color1: '#2457b5',
      color2: '#2457b5',
      color3: '#5285e3',
      name: 'Multi-Touch',
      blocks: [
        {
          opcode: 'coord',
          text: 'Coordinate [thing] of finger [target] ',
          blockType: Scratch.BlockType.REPORTER,
          arguments: {
            thing: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: "X",
              menu: 'thing'
            },
            target: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "0"
            }
          }
        },

        {
          opcode: 'setDimensions',
          text: 'Set width to [width] and height to [height]',
          blockType: Scratch.BlockType.COMMAND,
          arguments: {
            width: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '480'
            },
             height: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '360'
            }
          }
        }
        
      ],
      menus: {
          thing: {
            acceptReporters: true,
            items: [
              {
                text: 'X',
                value: "X"
              },
              {
                text: 'Y',
                value: "Y"
              }
              
            ]
          }
      }
  };
}
  
  coord({ thing, target }) {
    
    let XY = 0;
    let x = 0;
    let y = 0;
    let num = target;

    
        if (thing === "X") {
        return new Promise((resolve, reject) => {
        document.addEventListener("touchmove", function(event) {
        XY = event.touches[num].clientX;
        XY = (XY - w/2);
        resolve(XY);
        });
        });
      };
      if (thing === "Y") {
        return new Promise((resolve, reject) => {
        document.addEventListener("touchmove", function(event) {
        XY = event.touches[num].clientY;
        XY = (XY - h/2) * "-1";
        resolve(XY);
        });
        });
      };
    
  }
  setDimensions ({ width, height }) {
      window.w = width;
      window.h = height;
    }
}
 var extensionInstance = new multiTouch(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
