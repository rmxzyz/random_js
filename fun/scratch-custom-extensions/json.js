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
  class JSONS {
    getInfo() {
      return {
        id: 'JSON', //thanks to skyhigh173 for orig
        name: 'JSON',
        color1: '#2dc4c4',
        color2: '#2dc4b3',
        color3: '#29a395',
        blocks: [
          {
            opcode: 'json_is_valid',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'Is json [json] valid?',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}'
              }
            }
          },
          {
            opcode: 'json_has_key',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'JSON [json] contains Key [key]?',
            arguments: {
              key: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'key2'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}'
              }
            }
          },
          {
            opcode: 'json_has_value',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'array [json] contains [value]?',
            arguments: {
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'scratch'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["TurboWarp","scratch"]'
              }
            }
          },
          {
            opcode: 'json_get_all',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get all [Stype] from [json]',
            arguments: {
              Stype: {
                type: Scratch.ArgumentType.STRING,
                menu: 'get_all'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}'
              }
            }
          },
          {
            opcode: 'json_length',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Length of array [json]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[1,2,3]'
              }
            }
          },
          "---",
          {
            opcode: 'json_get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get [item] from [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'key'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}'
              }
            }
          },
          {
            opcode: 'json_set',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Set [item] to [value] from [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'key'
              },
              value: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'new value'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value"}'
              }
            }
          },
          {
            opcode: 'json_delete',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Delete [item] from [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'key2'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '{"key":"value","key2":"value2"}'
              }
            }
          },
          "---",
          {
            opcode: 'json_array_get',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Item [item] of Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 1
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","TurboWarp"]'
              }
            }
          },
          {
            opcode: 'json_array_itemH',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Item # of [item] in Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'scratch'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["Scratch","Extension"]'
              }
            }
          },
          {
            opcode: 'json_array_concat',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Array concat [json] [json2]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b"]'
              },
              json2: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["c","d"]'
              }
            }
          },
          {
            opcode: 'json_array_push',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Add [item] to Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'scratch'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["turbowarp"]'
              }
            }
          },
          {
            opcode: 'json_array_set',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Replace item [pos] of [json] to [item]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fav'
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","heart","follow"]'
              }
            }
          },
          {
            opcode: 'json_array_insert',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Insert [item] at [pos] of Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'fav'
              },
              pos: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["love","follow"]'
              }
            }
          },
          {
            opcode: 'json_array_delete',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Delete item [item] of Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["Turbowarp","a","Scratch"]'
              }
            }
          },
          {
            opcode: 'json_array_remove_all',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Delete every [item] from Array [json]',
            arguments: {
              item: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["scratch","a","TurboWarp","a","a"]'
              }
            }
          },
          "---",
          {
            opcode: 'json_array_fromto',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Array [json] from item [item] to [item2]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[1,2,3,4]'
              },
              item: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              },
              item2: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 3
              }
            }
          },
          {
            opcode: 'json_array_reverse',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Reverse Array [json]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["!","h","c","t","a","r","c","s"]'
              }
            }
          },
          {
            opcode: 'json_array_flat',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Flat Array [json] by Depth [depth]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '[[1],2,[3,4],[5,[6]]]'
              },
              depth: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 2
              }
            }
          },
          "---",
          {
            opcode: 'json_array_create',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Create array by [text] with delimiter [d]',
            arguments: {
              text: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'a,b,c'
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              }
            }
          },
          {
            opcode: 'json_array_join',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Join string by Array [json] with delimiter [d]',
            arguments: {
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["a","b","c"]'
              },
              d: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: ','
              }
            }
          },
          "---",
          {
            opcode: 'json_vm_getlist',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Get list [list] as Array',
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: 'get_list'
              },
            }
          },
          {
            opcode: 'json_vm_setlist',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set list [list] to content [json]',
            arguments: {
              list: {
                type: Scratch.ArgumentType.STRING,
                menu: 'get_list'
              },
              json: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '["apple","banana"]'
              },
            }
          },
        ],
        menus: {
          get_all: {
            items: ['keys','values','datas']
          },
          get_list: {
            acceptReporters: true,
            items: 'getLists'
          }
        }
      };
    }

    getLists () {
      const globalLists = Object.values(vm.runtime.getTargetForStage().variables).filter(x => x.type == 'list');
      const localLists = Object.values(vm.editingTarget.variables).filter(x => x.type == 'list');
      const uniqueLists = [...new Set([...globalLists, ...localLists])];
      if (uniqueLists.length === 0) {
        return [
          {
            text: '-',
            value: '-'
          }
        ];
      }
      return uniqueLists.map(i => ({
        text: i.name,
        value: i.id
      }));
    }

    json_is_valid({ json }) {
      if (typeof json != 'string') {
        return false;
      } else if ((json.slice(0,1) != '[' || json.slice(-1) != ']') && (json.slice(0,1) != '{' || json.slice(-1) != '}')) {
        return false;
      } else {
        try {
          JSON.parse(json);
          return true;
        } catch {
          return false;
        }
      }
    }

    // return object if its json else string
    json_valid_return(json){
      if (typeof json != 'string') {
        return json;
      } else if ((json.slice(0,1) != '[' || json.slice(-1) != ']') && (json.slice(0,1) != '{' || json.slice(-1) != '}')) {
        return json;
      } else {
        try {
          return JSON.parse(json);
        } catch {
          return json;
        }
      }
    }

    json_length({ json }) {
      try {
        json = JSON.parse(json);
        return Object.keys(json).length;
      } catch {
        return ' ';
      }
    }

    json_has_key({ json, key }) {
      try {
        return key in JSON.parse(json);
      } catch {
        return false;
      }
    }

    json_has_value({ json, value }) {
      try {
        json = JSON.parse(json);
        value = this.json_valid_return(value);
        return json.includes(value);
      } catch {
        return false;
      }
    }

    json_get_all({ Stype,json }) {
      try {
        json = JSON.parse(json);
        switch (Stype) {
          case 'keys':
            return JSON.stringify(Object.keys(json).map(key => key));
          case 'values':
            return JSON.stringify(Object.keys(json).map(key => json[key]));
          case 'datas':
            return JSON.stringify(Object.keys(json).map(key => [key,json[key]]));
          default: return ' ';
        }
      } catch {
        return ' ';
      }
    }

    json_get({ item, json }) {
      try {
        json = JSON.parse(json);
        let result = json[item];
        if (typeof result == 'object') {
          return JSON.stringify(result);
        } else {
          return result;
        }
      } catch {
        return ' ';
      }
    }

    json_set({ item, value, json }) {
      try {
        json = JSON.parse(json);
        value = this.json_valid_return(value);
        json[item] = value;
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_delete({ item, json }) {
      try {
        json = JSON.parse(json);
        delete json[item];
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_get({ item, json }) {
      // 1...length : array content, -1...-length : reverse array content, 0 : ERROR
      try {
        if (item == 0) return ' ';
        if (item > 0) {
          item--;
        }
        json = JSON.parse(json);
        let result;
        if (item >= 0) {
          result = json[item];
        } else {
          result = json[json.length + item];
        }
        if (typeof result == 'object') {
          return JSON.stringify(result);
        } else {
          return result;
        }
      } catch {
        return ' ';
      }
    }

    json_array_itemH({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this.json_valid_return(item);
        let result = JSON.stringify(json.indexOf(item) + 1);
        return result;
      } catch {
        return ' ';
      }
    }

    json_array_concat({ json, json2 }) {
      try {
        json = JSON.parse(json);
        json2 = JSON.parse(json2);
        return JSON.stringify(json.concat(json2));
      } catch {
        return ' ';
      }
    }

    json_array_push({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this.json_valid_return(item);
        json.push(item);
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_insert({ item, pos, json }) {
      try {
        json = JSON.parse(json);
        item = this.json_valid_return(item);
        json.splice(pos - 1, 0, item);
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_set({ item, pos, json }) {
      try {
        json = JSON.parse(json);
        json[pos - 1] = this.json_valid_return(item);
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_delete({ item, json }) {
      try {
        json = JSON.parse(json);
        json.splice(item - 1, 1);
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_remove_all({ item, json }) {
      try {
        json = JSON.parse(json);
        item = this.json_valid_return(item);
        let i = 0;
        while (i < json.length) {
          if (json[i] === item) {
            json.splice(i, 1);
          } else {
            ++i;
          }
        }
        return JSON.stringify(json);
      } catch {
        return ' ';
      }
    }

    json_array_fromto({ json, item, item2 }) {
      try {
        return JSON.stringify(JSON.parse(json).slice(item - 1,item2));
      } catch {
        return ' ';
      }
    }

    json_array_reverse({ json }) {
      try {
        return JSON.stringify(JSON.parse(json).reverse());
      } catch {
        return ' ';
      }
    }

    json_array_flat({ json, depth }) {
      try {
        return JSON.stringify(JSON.parse(json).flat(depth));
      } catch {
        return ' ';
      }
    }

    json_array_create({ text, d }) {
      return JSON.stringify(String(text).split(d));
    }

    json_array_join({ json, d }) {
      try {
        return JSON.parse(json).join(d);
      } catch {
        return ' ';
      }
    }

    json_vm_getlist({ list }, util) {
      try {
        const listVariable = util.target.lookupVariableById(list);
        if (listVariable) {
          return JSON.stringify(listVariable.value);
        }
      } catch (e) {
        // ignore
      }
      return '';
    }
    json_vm_setlist({ list, json }, util) {
      try {
        const listVariable = util.target.lookupVariableById(list);
        if (listVariable) {
          const array = JSON.parse(json);
          if (Array.isArray(array)) {
            const safeArray = array.map(i => {
              if (typeof i === 'object') return JSON.stringify(i);
              return i;
            });
            listVariable.value = safeArray;
          }
        }
      } catch (e) {
        // ignore
      }
      return '';
    }
  }
   var extensionInstance = new JSONS(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
  //Scratch.extensions.register(new JSONS());
}})(window.Scratch);
