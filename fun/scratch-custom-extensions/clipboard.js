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
  const gl = runtime.renderer._gl;
class ClipboardExtension {
  haspermission  = false;
  permissionasked  = false;
  getInfo() {
    return {
      id: 'Clipboard',
      name: 'Clipboard',
      blocks: [
        {

          opcode: 'copyClipboard',
          blockType: Scratch.BlockType.COMMAND,
          text: 'copy [CONTENT] to clipboard | non-text content?  [NONTEXT]',
          arguments: {
			CONTENT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Hi!'
			},
			NONTEXT: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
        },
        {
          opcode: 'pasteClipboard',
          blockType: Scratch.BlockType.REPORTER,
          text: 'read clipboard (ignoring max clipboard length of: [MAXLENGTH])  | non-text content?  [NONTEXT]',
          arguments: {
            MAXLENGTH: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1000'
            },
			NONTEXT: {
              type: Scratch.ArgumentType.BOOLEAN,
              defaultValue: false
            }
          }
          },
          {
          opcode: 'hasclipboardreadpermissionpermission',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'clipboard read permission',
          arguments: {
			}
    },
    {
		  opcode: 'hasclipboardwritepermissionpermission',
          blockType: Scratch.BlockType.BOOLEAN,
          text: 'clipboard write permission',
          arguments: {
			}
    },
    {
          opcode: 'askclipboardreadpermission',
          blockType: Scratch.BlockType.COMMAND,
          text: 'request clipboard read permission',
          arguments: {
            }
          },
          {
		  opcode: 'askclipboardwritepermission',
          blockType: Scratch.BlockType.COMMAND,
          text: 'request clipboard write permission',
          arguments: {
            }
        },
      ]
    };
  }

  _getpermission(permissiontype,ask) {
    if (permissiontype.permission === "granted") {
    return(true)
  } else if (permissiontype.permission !== "denied" && ask) {
    permissiontype.requestPermission().then((permission) => {
      if (permission === "granted") {
        return(true)
      }
    });
  }
  return(false)
}

	copyClipboard(args) {
	 //if (this._getpermission(clipboardRead,true)) {
	if (true) {
		if (Boolean(args.NONTEXT) == true) {
			navigator.clipboard.write(String(args.CONTENT))
		} else {
			navigator.clipboard.writeText(String(args.CONTENT))
		}
  }
}
	pasteClipboard(args) {
    //if (this._getpermission(clipboardRead,true)) {
	if (true) {
      if (Boolean(args.NONTEXT) == true) {
			navigator.clipboard.read()
		} else {
			navigator.clipboard.readText()
		}
        const clipboardcontents = String(navigator.clipboard.read());
        if (length(clipboardcontents) > args.MAXLENGTH) {
          return("[Clipboard length too long]");
        } else {
	        return(clipboardcontents);
        }
    } else {
      return("[Clipboard permission denied");
    }
  }
  askclipboardreadpermission(args) {
    this._getpermission(clipboardRead,true);
  }
  askclipboardwritepermission(args) {
    this._getpermission(clipboardWrite,true);
  }
  hasclipboardreadpermission(args) {
	  return(this._getpermission(clipboardRead,false));
  }
  hasclipboardwritepermission(args) {
	  return(this._getpermission(clipboardWrite,false));
  }
}

//Scratch.extensions.register(new ClipboardExtension());
 var extensionInstance = new ClipboardExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
