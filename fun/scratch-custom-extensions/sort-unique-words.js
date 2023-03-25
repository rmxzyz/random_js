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
  const parseEnglish = (text) => {
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const uniques = Array.from(new Set(words));
    uniques.sort();
    return uniques;
  };

  const parseChinese = (text) => {
    const words = text.match(/[^\u4e00-\u9fa5]+|[\u4e00-\u9fa5]+/g);
    const uniques = Array.from(new Set(words));
    uniques.sort(function(a, b) {
      return a.localeCompare(b, 'zh-Hans-CN', {sensitivity: 'accent'});
    });
    return uniques;
  };

  const parse = (text, language) => {
    if (language === 'zh') {
      return parseChinese(text);
    }
    return parseEnglish(text);
  };

  class SortUniqueWords {
    getInfo() {
      return {
        id: 'sortuniquewords',
        name: 'Sort Unique Words',
        color1: '#5a8b9e',
        color2: '#427081',
        color3: '#427081',
        blocks: [
          {
            opcode: 'words',
            blockType: Scratch.BlockType.REPORTER,
            disableMonitor: true,
            text: 'Sort unique words in [text] as [language]',
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'movie dog restaurant book school'
              },
              language: {
                type: Scratch.ArgumentType.STRING,
                menu: 'language'
              }
            }
          }
        ],
        menus: {
          language: {
            acceptReporters: true,
            items: [
              {
                text: 'English (en)',
                value: 'en'
              },
              {
                text: 'Chinese (zh)',
                value: 'zh'
              }
            ]
          }
        }
      };
    }
    words(args) {
      const text = new String(args.text); //Scratch.Cast.toString(args.text)
      const words = parse(text, args.language);
      return words.join(' ');
    }
  }

 //Scratch.extensions.register(new SortUniqueWords());
   var extensionInstance = new SortUniqueWords(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
}})(window.Scratch);
