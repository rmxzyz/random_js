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
(Scratch => {
  'use strict';
  const icon = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAsMCwyMjUuMzU0OCwyMjUuMzU0OCIgaGVpZ2h0PSIyMjUuMzU0OCIgd2lkdGg9IjIyNS4zNTQ4Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IuWbvuWxgl8yIiBkYXRhLW5hbWU9IuWbvuWxgiAyIj48ZyBpZD0iRGlzY29yZF9Mb2dvcyIgZGF0YS1uYW1lPSJEaXNjb3JkIExvZ29zIj48ZyBpZD0iRGlzY29yZF9Mb2dvXy1fTGFyZ2VfLV9XaGl0ZSIgZGF0YS1uYW1lPSJEaXNjb3JkIExvZ28gLSBMYXJnZSAtIFdoaXRlIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOTAuODk4IDE0LjMwNEExODYuMzc4IDE4Ni4zNzggMCAwIDAgMTQ0LjQwNSAwYTEyNy43MjYgMTI3LjcyNiAwIDAgMCAtNS45NTYgMTIuMTA2QTE3My4xMzcgMTczLjEzNyAwIDAgMCA4Ni44NTIgMTIuMTA2IDEyOC4yNzUgMTI4LjI3NSAwIDAgMCA4MC44OTcgMCAxODcuNjg5IDE4Ny42ODkgMCAwIDAgMzQuMzY5IDE0LjMzOUM0Ljk0NSA1Ny44NzIgLTMuMDMxIDEwMC4zMjMgMC45NTcgMTQyLjE3MmgwQTE4Ny40MDYgMTg3LjQwNiAwIDAgMCA1Ny45NzggMTcwLjc5NyAxMzcuNzIzIDEzNy43MjMgMCAwIDAgNzAuMTkxIDE1MS4xMDVhMTIxLjI3NCAxMjEuMjc0IDAgMCAxIC0xOS4yMzIgLTkuMTgyYzEuNjEzIC0xLjE3IDMuMTkgLTIuMzc1IDQuNzE1IC0zLjU0NWExMzMuOTQ3IDEzMy45NDcgMCAwIDAgMTE0LjAwNyAwYzEuNTQyIDEuMjU4IDMuMTIgMi40NjQgNC43MTUgMy41NDVhMTIxLjczNSAxMjEuNzM1IDAgMCAxIC0xOS4yNjcgOS4xOTkgMTM2LjQ4MiAxMzYuNDgyIDAgMCAwIDEyLjIxMiAxOS42NzVBMTg2LjU1NSAxODYuNTU1IDAgMCAwIDIyNC4zOTggMTQyLjE4OWgwQzIyOS4wNzcgOTMuNjU5IDIxNi40MDQgNTEuNTk3IDE5MC44OTggMTQuMzA0Wk03NS4yNDIgMTE2LjQzNUM2NC4xMjkgMTE2LjQzNSA1NC45NDcgMTA2LjM1IDU0Ljk0NyA5My45NDJzOC44NjIgLTIyLjU4MiAyMC4yNiAtMjIuNTgyUzk1LjcxNSA4MS41MzUgOTUuNTIgOTMuOTQyIDg2LjU2OSAxMTYuNDM1IDc1LjI0MiAxMTYuNDM1Wm03NC44NyAwQzEzOC45ODEgMTE2LjQzNSAxMjkuODM1IDEwNi4zNSAxMjkuODM1IDkzLjk0MnM4Ljg2MiAtMjIuNTgyIDIwLjI3NyAtMjIuNTgyUzE3MC41NjcgODEuNTM1IDE3MC4zNzIgOTMuOTQyIDE2MS40MzkgMTE2LjQzNSAxNTAuMTEyIDExNi40MzVaIi8+PC9nPjwvZz48L2c+PC9zdmc+';
  class Discord {
    getInfo() {
      return {

        id: 'Discord',
        name: 'Discord',

        color1: '#5865F2',
        color2: '#57F287',
        color3: '#FEE75C',

        menuIconURI: icon,

        blocks: [
          {
            opcode: 'send_message_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'send message [MESSAGE] as [USERNAME] webhook url: [WEBHOOK_URL]',
            arguments: {
              MESSAGE: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Text send from TurboWarp!'
              },
              USERNAME:{
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'TurboWarp Bot'
              },
              WEBHOOK_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://discord.com/api/webhooks/'
              }
            }
          },
          {
            opcode: 'send_json_block',
            blockType: Scratch.BlockType.COMMAND,
            text: 'send json [JSON_DATA] webhook url: [WEBHOOK_URL]',
            arguments: {
              JSON_DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"content": "Text send from TurboWarp!","embeds": null,"attachments": []}'
              },
              WEBHOOK_URL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://discord.com/api/webhooks/'
              }
             }
            }
        ]
      }

    }
    send_message_block({MESSAGE,USERNAME,WEBHOOK_URL}){
        var json_data = {
            username: USERNAME,
            avatar_url: "",
            content: MESSAGE
        }
      try {return fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(json_data)
          }).then(res => {
            console.log(res);
          })
      }
    catch(err) {}
    }
    send_json_block({JSON_DATA,WEBHOOK_URL}){
      try {return fetch(WEBHOOK_URL, {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: (JSON_DATA)
          }).then(res => {
            console.log(res);
          })
      }
    catch(err) {}
    }
}
  //Scratch.extensions.register(new Discord());
   var extensionInstance = new Discord(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})(window.Scratch);
