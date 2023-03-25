(function(Scratch) {
  'use strict';
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
 //  if (!Scratch.extensions.unsandboxed) {
 //   throw new Error('This Block Utility example must run unsandboxed');
 // }

  class BlockUtilityExamples {
    getInfo() {
      return {
        id: 'blockutilityexamples',
        name: 'BlockUtility Examples',
        blocks: [
          {
            opcode: 'getSpriteName',
            text: 'sprite name',
            blockType: 'reporter',
          },
          {
            opcode: 'doesVariableExist',
            text: 'is there a [TYPE] named [NAME]?',
            blockType: 'reporter',
            arguments: {
              NAME: {
                type: 'string',
                defaultValue: 'my variable'
              },
              TYPE: {
                type: 'string',
                menu: 'TYPE_MENU',
                defaultValue: 'list'
              }
            }
          }
        ],
        menus: {
          TYPE_MENU: {
            acceptReporters: true,
            items: [
              // Value here corresponds to the internal types of the variables
              // in scratch-vm. And yes, broadcasts are actually variables.
              // https://github.com/TurboWarp/scratch-vm/blob/20c60193c1c567a65cca87b16d22c51963565a43/src/engine/variable.js#L43-L67
              {
                text: 'variable',
                value: ''
              },
              'list',
              {
                text: 'broadcast',
                value: 'broadcast_msg'
              }
            ]
          }
        }
      };
    }
    // highlight-start
    getSpriteName(args, util) {
      return util.target.getName();
    }
    doesVariableExist(args, util) {
      const variable = util.target.lookupVariableByNameAndType(args.NAME.toString(), args.TYPE);
      // Remember: Boolean blocks need to explicitly return a boolean on their own
      return !!variable;
    }
    // highlight-end
  }
    var extensionInstance = new BlockUtilityExamples(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
  //Scratch.extensions.register(new BlockUtilityExamples());
})();
