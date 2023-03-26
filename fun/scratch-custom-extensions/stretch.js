(function (Scratch) {
  'use strict';
 function findReactComponent(element) {
    let fiber = element[Object.keys(element).find(key => key.startsWith("__reactInternalInstance$"))]; //
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
//Stretch does not work on backdrops.
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
    if (!Scratch.vm) {
      throw new Error('The VM does not exist');
    }
  }

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Stretch must be run unsandboxed');
  }
  if(!vm) {
  const vm = Scratch.vm;
  }
  const runtime = vm.runtime;
  const canvas = runtime.renderer.canvas;
  const gl = runtime.renderer._gl;
  const STRETCH_X = Symbol('stretch.x');
  const STRETCH_Y = Symbol('stretch.y');

  var sprite = '_sprite_';


  /**
   * @param {VM.RenderedTarget} target
   * @param {VM.RenderedTarget} [originalTarget] If target is a clone, the original to copy from.
   */
  const implementStretchForTarget = (target, originalTarget) => {
    if (STRETCH_X in target) {
      // Target already has stretch. Don't implement again.
      return;
    }

    target[STRETCH_X] = originalTarget ? originalTarget[STRETCH_X] : 100;
    target[STRETCH_Y] = originalTarget ? originalTarget[STRETCH_Y] : 100;

    const original = target._getRenderedDirectionAndScale;
    target._getRenderedDirectionAndScale = function () {
      const result = original.call(this);

      result.scale[0] *= this[STRETCH_X] / 100;
      result.scale[1] *= this[STRETCH_Y] / 100;

      return result;
    };
  };
  vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
  vm.runtime.on('targetWasCreated', (target, originalTarget) => implementStretchForTarget(target, originalTarget));
  vm.runtime.on('PROJECT_LOADED', () => {
    vm.runtime.targets.forEach((target) => implementStretchForTarget(target));
  });

  /**
   * @param {VM.RenderedTarget} target
   */
  const forceUpdateDirectionAndScale = (target) => {
    target.setDirection(target.direction);
  };

  class Stretch {
    getInfo() {
      return {
        id: 'stretchAddon',
        name: 'Stretch',
        color1: '#4287f5',
        color2: '#2b62ba',
        color3: '#204785',
        blocks: [
          {
            opcode: 'setSpriteStretch',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set stretch to X: [X] Y: [Y]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100,
              },
            },
            //filter: [sprite], //TargetType.SPRITE
          },
          {
            opcode: 'getX',
            blockType: Scratch.BlockType.REPORTER,
            text: 'X Stretch',
            //filter: [sprite],
            disableMonitor: true,
          },
          {
            opcode: 'getY',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Y Stretch',
            //filter: [sprite],
            disableMonitor: true,
          },
        ],
      };
    }
    setSpriteStretch(args, util) {
      // TODO: move to Scratch.Cast when it's merged
      util.target[STRETCH_X] = +args.X || 0;
      util.target[STRETCH_Y] = +args.Y || 0;
      forceUpdateDirectionAndScale(util.target);
    }
    getX(args, util) {
      return util.target[STRETCH_X];
    }
    getY(args, util) {
      return util.target[STRETCH_Y];
    }
  }

 // Scratch.extensions.register(new Stretch());
  var extensionInstance = new Stretch(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})(window.Scratch);
