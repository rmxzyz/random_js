  var Scratch;
var icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAF62lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wMS0xMFQxMjowMzowMSswMTowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDEtMTBUMTI6MDQ6MjQrMDE6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDEtMTBUMTI6MDQ6MjQrMDE6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0ic1JHQiBJRUM2MTk2Ni0yLjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Yzc3OGYwMmMtZmE1Yy1hYzQ1LWFmNDUtMTMyODk1NjIyMmRiIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjU1MjY2NmMtODUyNS1kYzQzLTg0MGYtYzA4YjU5ZGJlZTY5IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YmU4Y2EzYjEtMDE5MC1jMzRlLWEwYjktMDMwNGYyNGM2ZWI3Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiZThjYTNiMS0wMTkwLWMzNGUtYTBiOS0wMzA0ZjI0YzZlYjciIHN0RXZ0OndoZW49IjIwMjEtMDEtMTBUMTI6MDM6MDErMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM3NzhmMDJjLWZhNWMtYWM0NS1hZjQ1LTEzMjg5NTYyMjJkYiIgc3RFdnQ6d2hlbj0iMjAyMS0wMS0xMFQxMjowNDoyNCswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4nrQxsAAAztElEQVR42u3debheVX0vcIGEQQgQEBQpDmyqMrWCdngQn0ihFWRQqPA4QrUlJUUIjtjqpVRbGs0lmkIF6nNtpVa8qehzn1iwF9BWw6TUlkmomlZAuRLmBJlC4P5W39+ph5iEk/Pu95w9fP74/Jecdw9r/dZ377322s966qmnngUA9IuDAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAow8A1ZyFddgpHBcWhUvDreHe8Fh4CmCaPJa1qNSkS8LZ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'
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
  }
    
    //---------------------------------------------------------------------------------
    
     class Storage {
    getInfo () {
      return {
        docsURI: 'https://developer.mozilla.org/docs/Web/API/Window/localStorage',

        id: 'storage',
        name: 'localStorage',
        menuIconURI: icon,
        color1: '#000066', //b
        color2: '#1a001a', //g
        //color3: '#ff0000', //r
        blockIconURI: icon,

        blocks: [ //opcode, blockType, text, arguments {}, filter? ]
          {
            opcode: 'items',
            blockType: Scratch.BlockType.REPORTER,
            text: 'localStorage',
            arguments: {
            },
            },
            {
            opcode: 'length',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Length',
            arguments: {
            },
            },
               {
            opcode: 'get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get Item [ITEM]',
            arguments: {
              ITEM: {
               type: Scratch.ArgumentType.STRING,
              defaultValue: 'saPersistentThumb',
              },
              
            },
          },
           {
            opcode: 'set',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set / Create Item [ITEM] to [VAL]',
            arguments: {
              ITEM: {
               type: Scratch.ArgumentType.STRING,
              defaultValue: 'saPersistentThumb',
              },
              VAL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '0',
              },
              
            },
          },
           {
            opcode: 'remove',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Remove Item [ITEM]',
            arguments: {
              ITEM: {
               type: Scratch.ArgumentType.STRING,
              defaultValue: 'saPersistentThumb',
              },
            },
          }, 
           {
            opcode: 'clear',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Clear Storage',
            arguments: {
            },
          },
        
        //end of blocks
        ]
      };
    } //commands
    //example  foo(args) {return args.HELLO}
       remove(args) {
         localStorage.removeIte,(args.ITEM);
       }
       clear() {
         localStorage.clear();
       }
      get(args) {
        var item = localStorage.getItem(args.ITEM);
        if(item) {
          return new String(item)
        } else {
          return '';
        }
      }
         set(args) {
         localStorage.setItem(args.ITEM, args.VAL);
      }
        
       
    length() {
      return (localStorage.length)
    }
    items() {
      var table = [];
      for (let i = 1; i < localStorage.length; i++) {
       table.push(' '+localStorage.key(i));
    }
      return table.toString();
    }
  }
     var extensionInstance = new Storage(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
