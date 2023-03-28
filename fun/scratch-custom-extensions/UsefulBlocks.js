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
class usefulBlocks {
    constructor() {}
    getInfo() {
        return {
            id: "usefulBlocks",
            name: "Useful Blocks",
            blocks: [{
                opcode: "returnSelf",
                blockType: "reporter",
                text: "[string]",
                arguments: {
                    string: {
                        type: "string",
                        defaultValue: "Hello, world!"
                    }
                }
            }, {
                opcode: "stringToBool",
                blockType: "Boolean",
                text: "[string]",
                arguments: {
                    string: {
                        type: "string",
                        menu: "boolMenu"
                    }
                }
            }, {
                opcode: "stringEqual",
                blockType: "Boolean",
                text: "[a] = [b] (case sensitive)",
                arguments: {
                    a: {
                        type: "string",
                        defaultValue: "hello"
                    },
                    b: {
                        type: "string",
                        defaultValue: "HELLO"
                    }
                }
            }, {
                opcode: "intToBool",
                blockType: "Boolean",
                text: "[int]",
                arguments: {
                    int: {
                        type: "number",
                        defaultValue: 0
                    }
                }
            }, {
                opcode: "boolToInt",
                blockType: "reporter",
                text: "[bool]",
                arguments: {
                    bool: {
                        type: "Boolean"
                    }
                }
            }, {
                opcode: "specialGates",
                blockType: "Boolean",
                text: "[a] [gate] [b]",
                arguments: {
                    a: {
                        type: "Boolean"
                    },
                    gate: {
                        type: "string",
                        menu: "gatesMenu"
                    },
                    b: {
                        type: "Boolean"
                    }
                }
            }, {
                opcode: "power",
                blockType: "reporter",
                text: "[a]^[b]",
                arguments: {
                    a: {
                        type: "number",
                        defaultValue: 2
                    },
                    b: {
                        type: "number",
                        defaultValue: 3
                    }
                }
            }, {
                opcode: "returnConst",
                blockType: "reporter",
                text: "constant [constant]",
                arguments: {
                    constant: {
                        type: "string",
                        menu: "constantMenu"
                    }
                }
            }],
            menus: {
                boolMenu: [{
                    text: "true",
                    value: "true"
                }, {
                    text: "false",
                    value: "false"
                }],
                gatesMenu: [{
                    text: "xor",
                    value: "xor"
                }, {
                    text: "nand",
                    value: "nand"
                }, {
                    text: "nor",
                    value: "nor"
                }, {
                    text: "xnor",
                    value: "xnor"
                }],
                constantMenu: [{
                    text: "pi",
                    value: Math.PI.toString()
                }, {
                    text: "phi",
                    value: ((1 + Math.sqrt(5)) / 2).toString()
                }]
            }
        }
    }
    returnSelf({
        string: e
    }) {
        return e
    }
    stringToBool({
        string: e
    }) {
        return "true" == e || "false" != e && void 0
    }
    stringEqual({
        a: e,
        b: t
    }) {
        return e === t
    }
    intToBool({
        int: e
    }) {
        return Boolean(e)
    }
    boolToInt({
        bool: e
    }) {
        return +e
    }
    specialGates({
        a: e,
        gate: t,
        b: o
    }) {
        return "xor" === t ? (e | o) & !(e & o) : "nand" === t ? !(e & o) : "nor" === t ? !(e | o) : "xnor" === t ? (e | !o) & (!e | o) : void 0
    }
    power({
        a: e,
        b: t
    }) {
        return e ** t
    }
    returnConst({
        constant: e
    }) {
        return parseFloat(e)
    }
}
  var extensionInstance = new usefulBlocks(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
}
//Scratch.extensions.register(new usefulBlocks);
