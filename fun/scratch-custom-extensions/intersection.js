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

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Pen+ must be run unsandboxed');
  }

  const vm = Scratch.vm;
  const runtime = vm.runtime;
  const canvas = runtime.renderer.canvas;
  const gl = runtime.renderer._gl;
(function(Scratch) {
    'use strict';
  
    class intersection {
      getInfo () {
        return {
          id: 'intersection',
          name: 'intersection',
          blocks: [
            {
              opcode: 'ix',
              blockType: Scratch.BlockType.REPORTER,
              text: 'intersection x [X1][Y1],[X2][Y2],[X3][Y3],[X4][Y4]',
              arguments: {
                X1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y1: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y2: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X3: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y3: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X4: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y4: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                }
              },
              
            },
            
            {
                opcode: 'iy',
                blockType: Scratch.BlockType.REPORTER,
                text: 'intersection y [X1][Y1],[X2][Y2],[X3][Y3],[X4][Y4]',
                arguments: {
                  X1: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y1: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X2: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y2: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X3: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y3: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X4: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y4: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  }
                },
                
              }
          ]
        };
      }
  
      ix (args) {
        
        var m = (new Number(args.Y2) - new Number(args.Y1)) / (new Number(args.X2) - new Number(args.X1));
        var m1 = (new Number(args.Y4) - new Number(args.Y3)) / (new Number(args.X4) - new Number(args.X3));
        var b = new Number(args.Y1) - m * new Number(args.X1);
        var b1 = new Number(args.Y3) - m1 * new Number(args.X3);
        var x = (b1 - b) / (m - m1);
        var y = m * x + b;
        return x;

      }
      ix (args) {
        
        var m = (new Number(args.Y2) - new Number(args.Y1)) / (new Number(args.X2) - new Number(args.X1));
        var m1 = (new Number(args.Y4) - new Number(args.Y3)) / (new Number(args.X4) - new Number(args.X3));
        var b = new Number(args.Y1) - m * new Number(args.X1);
        var b1 = new Number(args.Y3) - m1 * new Number(args.X3);
        var x = (b1 - b) / (m - m1);
        var y = m * x + b;
        return y;

      }
    }
  
    //Scratch.extensions.register(new intersection());
   var extensionInstance = new intersection(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
  })(window.Scratch);
