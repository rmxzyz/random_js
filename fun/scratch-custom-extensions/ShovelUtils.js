(function () {
  'use strict';
  console.log("ShovelUtils v1.3 - Made working on scratch by rmxzyz");
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

  const vm = window.vm;
var StringToColor = (string, saturation = 100, lightness = 75) => {
  let hash = 0;
  for (let i = 0; i < string.length; i++) {
hash = string.charCodeAt(i) + ((hash << 5) - hash);
hash = hash & hash;
  }
  return `hsl(${(hash % 360)}, ${saturation}%, ${lightness}%)`;
}


// For the sample on stackoverflow
function colorByHashCode(value) {
return "<span style='color:" + stringToColor(value) + "'>" + value + "</span>";
}
  // Based on from https://www.growingwiththeweb.com/2017/12/fast-simple-js-fps-counter.html
  const times = [];
  let fps = vm.runtime.frameLoop.framerate;
  const oldStep = vm.runtime._step;
  vm.runtime._step = function () {
    oldStep.call(this);
    const now = performance.now();
    while (times.length > 0 && times[0] <= now - 1000) {
      times.shift();
    }
    times.push(now);
    fps = times.length;
  };

  class ShovelUtils {
    getInfo() {
      return {
        id: 'ShovelUtils',
        name: 'ShovelUtils',
        color1: '#f54242',
        color2: '#f54242',
        color3: '#f54242',
        blocks: [
          {
            opcode: 'importImage',
            blockType: 'command',
            text: 'Import image from [TEXT] name [NAME]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'https://extensions.turbowarp.org/dango.png',
              },
              NAME: {
                type: 'string',
                defaultValue: 'Apple',
              }
            }
          },
          {
            opcode: 'getlist',
            blockType: 'reporter',
            text: 'Get list [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'MyList',
              }
            }
          },
          {
            opcode: 'setlist',
            blockType: 'command',
            text: 'Set list [NAME] to [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: '[1,2]',
              },
              NAME: {
                type: 'string',
                defaultValue: 'MyList',
              }
            }
          },
          {
            opcode: 'importSprite',
            blockType: 'command',
            text: 'Import sprite from [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'Link or data uri here',
              }
            }
          },
          {
            opcode: 'importSound',
            blockType: 'command',
            text: 'Import sound from [TEXT] name [NAME]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'https://theshovel.github.io/kewlab-data/char%20edit.mp3',
              },
              NAME: {
                type: 'string',
                defaultValue: 'Apple',
              }
            }
          },
          {
            opcode: 'importProject',
            blockType: 'command',
            text: 'Import project from [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: 'https://theshovel.github.io/Bullet-Hell/Bullet%20Hell',
              }
            }
          },
          {
            opcode: 'loadExtension',
            blockType: 'command',
            text: 'Load extension from [TEXT]',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: '',
              }
            }
          },

          {
            opcode: 'restartProject',
            blockType: 'command',
            text: 'Restart project',
            arguments: {
              TEXT: {
                type: 'string',
                defaultValue: '0',
              }
            }
          },
          {
            opcode: 'setedtarget',
            blockType: 'command',
            text: 'Set editing target to [NAME]',
            arguments: {
              NAME: {
                type: 'string',
                defaultValue: 'Sprite1',
              }
            }
          },

          {
            opcode: 'brightnessByColor',
            blockType: 'reporter',
            text: 'Get brightness of [color]',
            arguments: {
              color: {
                type: 'string',
                defaultValue: '#ffffff',
              }
            }
          },

          {
            opcode: 'getfps',
            blockType: 'reporter',
            text: 'Fps'
          },
        ]
      };
    }

    importImage({ TEXT, NAME }) {
      fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((arrayBuffer) => {
          const storage = vm.runtime.storage;
          vm.addCostume(NAME + '.PNG', {
            name: NAME,
            asset: new storage.Asset(
              storage.AssetType.ImageBitmap,
              null, // asset id, doesn't need to be set here because of `true` at the end will make Scratch generate it for you
              storage.DataFormat.PNG,
              new Uint8Array(arrayBuffer),
              true
            )
          });
        });
    }

    importSprite({ TEXT }) {
      fetch(TEXT)
        .then(r => r.arrayBuffer())
        .then(buffer => vm.addSprite(buffer))
        .then(() => {
          console.log("Done");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    importSound({ TEXT, NAME }) {
      fetch(TEXT)
        .then((r) => r.arrayBuffer())
        .then((arrayBuffer) => {
          const storage = vm.runtime.storage;
          const asset = new storage.Asset(
            storage.AssetType.Sound,
            null,
            storage.DataFormat.MP3,
            new Uint8Array(arrayBuffer),
            true
          );
          vm.addSound({
            md5: asset.assetId + '.' + asset.dataFormat,
            asset: asset,
            name: NAME
          });
        });
    }

    importProject({ TEXT }) {
      // @ts-ignore
      if (typeof ScratchBlocks !== 'undefined') {
        // We are in the editor. Ask before loading a new project to avoid unrecoverable data loss.
        if (!confirm(`Do you want to import a project from "${TEXT}"? Everything in the current project will be permanently deleted.`)) {
          return;
        }
      }
      fetch(TEXT) //Scratch.fetch
        .then(r => r.arrayBuffer())
        .then(buffer => vm.loadProject(buffer))
        .then(() => {
          console.log("Done");
          vm.greenFlag();
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }

    restartProject() {
      vm.greenFlag();
    }

    async loadExtension({ TEXT }) {
      if (await vm.securityManager.canLoadExtensionFromProject(TEXT)) {
        vm.extensionManager.loadExtensionURL(TEXT);
      }
    }

    getlist({ TEXT }) {
      const list = vm.runtime.getTargetForStage().lookupVariableByNameAndType(TEXT, 'list');
      if (list) {
        return JSON.stringify(list.value);
      } else {
        return "";
      }
    }
    setlist({ TEXT, NAME }) {
      let parsed;
      try {
        parsed = JSON.parse(TEXT);
      } catch (e) {
        return; // JSON was invalid
      }

      if (!Array.isArray(parsed)) {
        return; // it's not an array
      }

      for (const element of parsed) {
        const type = typeof element;
        if (type !== "string" && type !== "number" && type !== "boolean") {
          return; // One of the elements has a disallowed type
        }
      }

      const list = vm.runtime.getTargetForStage().lookupVariableByNameAndType(NAME, 'list');
      if (!list) {
        return; // List was not found
      }

      list.value = parsed;
    }

    setedtarget({ NAME }) {
      let target;

      //I know this might cause sprites called "stage" to be ignored. But lets be real, who names their sprite "stage"?
      if (NAME.toLowerCase() === "stage") {
        target = vm.runtime.getTargetForStage();
      } else {
        target = vm.runtime.getSpriteTargetByName(NAME);
      }
      if (target) {
        vm.setEditingTarget(target.id);
      }
    }

    /**
     * Calculate brightness value by RGB or HEX color.
     * @param color (String) The color value in RGB or HEX (for example: #000000 || #000 || rgb(0,0,0) || rgba(0,0,0,0))
     * @returns (Number) The brightness value (dark) 0 ... 255 (light)
     */
    brightnessByColor({ color }) {
      // https://www.w3.org/TR/AERT/#color-contrast
      const {r, g, b} = StringToColor(color); //Scratch.Cast.toRgbColorObject(color);
      return ((r * 299) + (g * 587) + (b * 114)) / 1000;
    }

    getfps(){
      return fps;
    }
  }

  //Scratch.extensions.register(new ShovelUtils());
   var extensionInstance = new ShovelUtis(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
// @ts-ignore
})();
