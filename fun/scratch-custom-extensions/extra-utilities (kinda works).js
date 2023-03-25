(function() {
  "use strict";
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
if(!vm) {
  const vm = window.vm;
}
  class codegioExtension {
    getInfo () {
      return {
        id: "utilitiesCg", //thanks to codegio for orig
        name: "Utilities",
        color1: "#0fbd8c",

        blocks: [
          {
            opcode: "newline",
            blockType: 'reporter',
            text: "New Line"
          },

          {
            opcode: "strict_equality",
            blockType: 'Boolean',
            text: "Strict Equality | [one]=[two]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: ""
              },
              two: {
                type: 'string',
                defaultValue: ""
              }
            }
          },

          {
            opcode: "returntrue",
            blockType: 'Boolean',
            text: "True"
          },

          {
            opcode: "returnfalse",
            blockType: 'Boolean',
            text: "False"
          },

          {
            opcode: "exponent",
            blockType: 'reporter',
            text: "[one] ^ [two]",
            arguments: {
              one: {
                type: 'number',
                defaultValue: ""
              },
              two: {
                type: 'number',
                defaultValue: ""
              }
            }
          },

          {
            opcode: "color",
            blockType: 'reporter',
            text: "Hex Value of [color]",
            arguments: {
              color: {
                type: 'color',
                defaultValue: "#96ccff"
              }
            }
          },

          {
            opcode: "monitor_width",
            blockType: 'reporter',
            text: "Screen | Width"
          },

          {
            opcode: "monitor_height",
            blockType: 'reporter',
            text: "Screen | Height"
          },

          {
            opcode: "window_width",
            blockType: 'reporter',
            text: "Window | Width"
          },

          {
            opcode: "window_height",
            blockType: 'reporter',
            text: "Window | Height"
          },

          {
            opcode: "alert_ext",
            blockType: 'command',
            text: "Alert | Text: [one]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: "Hello, world!"
              }
            }
          },

          {
            opcode: "confirm_ext",
            blockType: 'Boolean',
            text: "Confirm | Text: [one]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: " Hello, how's your day?"
              }
            }
          },

          {
            opcode: "prompt_ext",
            blockType: 'reporter',
            text: "Prompt | Text: [one] Default: [two]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: "Enter Username:"
              },
              two: {
                type: 'string',
                defaultValue: "griffpatch"
              },
            }
          },

          {
            opcode: "open_link",
            blockType: 'command',
            text: "Open | Link: [one]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: "https://scratch.mit.edu/"
              }
            }
          },

          {
            opcode: "redirect",
            blockType: 'command',
            text: "Redirect | Link: [one]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: "https://scratch.mit.edu/projects/editor"
              }
            }
          },

          {
            opcode: "get_current_url",
            blockType: 'reporter',
            text: "Current URL"
          },

          {
            opcode: "get_current_url_hash",
            blockType: 'reporter',
            text: "Current URL hash (#)"
          },

          {
            opcode: "set_clipboard",
            blockType: 'command',
            text: "Set clipboard | Text: [one]",
            arguments: {
              one: {
                type: 'string',
                defaultValue: ""
              }
            }
          },

          {
            opcode: "get_clipboard",
            blockType: 'reporter',
            text: "Clipboard"
          },

          {
            opcode: "get_browser",
            blockType: 'reporter',
            text: "Browser"
          },

          {
            opcode: "get_os",
            blockType: 'reporter',
            text: "Operating System"
          },

          {
            opcode: "consoleLog",
            blockType: 'command',
            text: "Console | Log: [input] Font: [font] Size [size] Color [color]",
            arguments: {
              input: {
                type: 'string',
                defaultValue: "Hello World!",
              },
              font: {
                type: 'string',
                defaultValue: "Monospace",
                menu: "consoleFonts"
              },
              size: {
                type: 'number',
                defaultValue: "8",
              },
              color: {
                type: 'color',
                defaultValue: "#000000",
              },
            }
          },

          {
            opcode: "consoleClear",
            blockType: 'command',
            text: "Console | Clear"
          },
        ],
        menus: {
          consoleFonts: {
            acceptReporters: true,
            items: [
              {text: "Serif (default)", value: "serif"},
              {text: "Monospace", value: "monospace"},
              {text: "Sans-serif", value: "sans-serif"}
            ]
          }
        }
      };
    }

    newline() {
      return "\n";
    }

    returntrue() {
      return true;
    }

    returnfalse() {
      return false;
    }

    strict_equality(args) {
      return (args.one == args.two);
    }

    exponent(args) {
      return args.one ** args.two;
    }

    color(args) {
      return args.color;
    }

    monitor_width() {
      return screen.width;
    }

    monitor_height() {
      return screen.height;
    }

    window_width() {
      return window.innerWidth;
    }

    window_height() {
      return window.innerHeight;
    }

    alert_ext(args) {
      alert(args.one);
    }

    confirm_ext(args) {
      if (confirm(args.one)) {
        return true;
      } else {
        return false;
      }
    }

    prompt_ext(args) {
      let userInput = prompt(args.one, args.two);
      if (userInput == null || userInput == "") {
        return "";
      } else {
        return userInput;
      }
    }

    open_link(args) {
      //Scratch.openWindow(args.one);
      window.open(args.one);
    }

    redirect(args) {
      //Scratch.redirect(args.one);
      document.location.href = args.one;
    }

    get_current_url() {
      return window.location.href;
    }

    get_current_url_hash() {
      if (window.location.hash) {
        return window.location.hash.substring(1);
      } else {
        return "";
      }
    }

    set_clipboard(args) {
      navigator.clipboard.writeText(args.one);
    }

    get_clipboard() {
      if (navigator.clipboard && navigator.clipboard.readText) {
        return navigator.clipboard.readText();
      }
      return '';
    }

    get_browser() {
      let userAgent = navigator.userAgent;

      if (userAgent.match(/chrome|chromium|crios/i)){
        return "Chrome";
      } else if (userAgent.match(/firefox|fxios/i)){
        return "Firefox";
      } else if (userAgent.match(/safari/i)){
        return "Safari";
      } else if (userAgent.match(/opr\//i)){
        return "Opera";
      } else if (userAgent.match(/edg/i)){
        return "Edge";
      } else {
        return "No browser detection";
      }
    }

    get_os() {
      return window.navigator.platform;
    }

    consoleLog(args) {
      console.log(`%c${args.input}`, `color:${args.color}; font-family:${args.font}; font-size: ${args.size}px;`);
    }

    consoleClear() {
      console.clear();
    }
  }
 // Scratch.extensions.register(new codegioExtension());
  var extensionInstance = new codegioExtension(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})();
