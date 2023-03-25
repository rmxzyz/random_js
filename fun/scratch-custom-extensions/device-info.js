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
  vm = window.vm;
class DeviceInfo {
  constructor() {
  }

  getInfo() {
    return {
      "id": "deviceInfo",
      "name": "Device Info",
      "blocks": [
        {
          "opcode": "deviceBattery",
          "blockType": "reporter",
          "text": "device battery",
          "arguments": {}
        },
        {
          "opcode": "screenWidth",
          "blockType": "reporter",
          "text": "screen width",
          "arguments": {}
        },
        {
          "opcode": "screenHeight",
          "blockType": "reporter",
          "text": "screen height",
          "arguments": {}
        },
        {
          "opcode": "screenOrientation",
          "blockType": "reporter",
          "text": "screen orientation",
          "arguments": {}
        },
        {
          "opcode": "platform",
          "blockType": "reporter",
          "text": "platform",
          "arguments": {}
        }
      ]
    }
  }

  deviceBattery() {
    try {
      return navigator.getBattery().then((battery) => {
        return battery.level * 100;
      });
    } catch {
      return "undefined";
    }
  }

  screenWidth() {
    return screen.width;
  }

  screenHeight() {
    return screen.height;
  }

  screenOrientation() {
    try {
      return screen.orientation.type;
    } catch {
      return "undefined";
    }
  }

  platform() {
    try {
      return navigator.platform;
    } catch {
      return "undefined";
    }
  }
}
var extensionInstance = new DeviceInfo(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
//Scratch.extensions.register(new DeviceInfo());
}
