(function() {
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
  const quadrilateral = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Ny4wMjc4MSIgaGVpZ2h0PSI1NC44MDY1NCIgdmlld0JveD0iMCwwLDc3LjAyNzgxLDU0LjgwNjU0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjUwNDMsLTE1Mi4yMTk3MykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjI4LjE3ODc4LDE1NS40NzM3NGw0Ni40MDEwMywxOS44ODYxNmwtMjIuNTM3NjQsMjkuMTY2MzZoLTQ2LjYyMTk5eiIvPjwvZz48L2c+PC9zdmc+";
  class MoreComparisons {
    getInfo() {
      return {
        id: 'nonameawacomparisons',
        name: 'More Comparisons',
        color1: '#00a889',
        color2: '#1e8c76',
        color3: '#1e8c76',
        blocks: [
          {
            opcode: 'true',
            blockType: 'boolean',
            text: 'true',
            arguments: {}
          },
          {
            opcode: 'false',
            blockType: 'boolean',
            text: 'false',
            arguments: {},
          },
          {
            opcode: 'boolean',
            blockType: 'boolean',
            text: '[a]',
            arguments: {
              a: {
                type: 'string',
                defaultValue: ''
              },
            }
          },
          {
            opcode: 'booleanToInt',
            blockType: 'reporter',
            text: '[a]',
            arguments: {
              a: {
                type: 'boolean',
              },
            }
          },
          '---',
          {
            opcode: 'equal',
            blockType: 'boolean',
            text: '[a] ⩵ [b]',
            arguments: {
              a: {
                type: 'string',
                defaultValue: 'A'
              },
              b: {
                type: 'string',
                defaultValue: 'a'
              },
            }
          },
          {
            opcode: 'equalNegative',
            blockType: 'boolean',
            text: '[a] =- [b]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '5'
              },
              b: {
                type: 'number',
                defaultValue: '-5'
              },
            }
          },
          {
            opcode: 'equalPlusMinus',
            blockType: 'boolean',
            text: '[a] =± [b]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '5'
              },
              b: {
                type: 'number',
                defaultValue: '-5'
              },
            }
          },
          {
            opcode: 'notEqual',
            blockType: 'boolean',
            text: '[a] ≠ [b]',
            arguments: {
              a: {
                type: 'string',
                defaultValue: '\n'
              },
              b: {
                type: 'string',
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'almostEqual2n',
            blockType: 'boolean',
            text: '[a] ≈ [b]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '5.5'
              },
              b: {
                type: 'number',
                defaultValue: '6'
              },
            }
          },
          {
            opcode: 'almostEqual3n',
            blockType: 'boolean',
            text: '[a] ≈ [b] ± [c]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '5'
              },
              b: {
                type: 'number',
                defaultValue: '6'
              },
              c: {
                type: 'number',
                defaultValue: '1'
              },
            }
          },
          {
            opcode: 'xor',
            blockType: 'boolean',
            text: '[a] ^ [b]',
            arguments: {
              a: {
                type: 'boolean',
              },
              b: {
                type: 'boolean',
              },
            }
          },
          '---',
          {
            opcode: 'equalOrGreater',
            blockType: 'boolean',
            text: '[a] ≥ [b]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '\n'
              },
              b: {
                type: 'number',
                defaultValue: '50'
              },
            }
          },
          {
            opcode: 'equalOrLess',
            blockType: 'boolean',
            text: '[a] ≤ [b]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '\n'
              },
              b: {
                type: 'number',
                defaultValue: '50'
              },
            }
          },
          {
            opcode: 'between',
            blockType: 'boolean',
            text: '[a] < [b] < [c]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '\n'
              },
              b: {
                type: 'number',
                defaultValue: '\n'
              },
              c: {
                type: 'number',
                defaultValue: '\n'
              },
            }
          },
          {
            opcode: 'betweenEqual',
            blockType: 'boolean',
            text: '[a] ≤ [b] ≤ [c]',
            arguments: {
              a: {
                type: 'number',
                defaultValue: '\n'
              },
              b: {
                type: 'number',
                defaultValue: '\n'
              },
              c: {
                type: 'number',
                defaultValue: '\n'
              },
            }
          },
          '---',
          {
            opcode: 'vertical',
            blockType: 'boolean',
            text: '[a] ⊥ [b]',
            arguments: {
              a: {
                type: 'angle',
                defaultValue: '0'
              },
              b: {
                type: 'angle',
                defaultValue: '90'
              },
            }
          },
          {
            opcode: 'segment_one',
            blockType: 'boolean',
            text: '⎵ ([x1],[y1]) ([x2],[y2]) = [n]',
            arguments: {
              x1: {
                type: 'number',
                defaultValue: '-100'
              },
              y1: {
                type: 'number',
                defaultValue: '0'
              },
              x2: {
                type: 'number',
                defaultValue: '0'
              },
              y2: {
                type: 'number',
                defaultValue: '0'
              },

              n: {
                type: 'number',
                defaultValue: '100'
              },
            }
          },
          {
            opcode: 'segment_two',
            blockType: 'boolean',
            text: '⎵ ([x11],[y11]) ([x12],[y12]) = ⎵ ([x21],[y21]) ([x22],[y22])',
            arguments: {
              x11: {
                type: 'number',
                defaultValue: '-100'
              },
              y11: {
                type: 'number',
                defaultValue: '0'
              },
              x12: {
                type: 'number',
                defaultValue: '0'
              },
              y12: {
                type: 'number',
                defaultValue: '-100'
              },

              x21: {
                type: 'number',
                defaultValue: '100'
              },
              y21: {
                type: 'number',
                defaultValue: '0'
              },
              x22: {
                type: 'number',
                defaultValue: '0'
              },
              y22: {
                type: 'number',
                defaultValue: '100'
              },
            }
          },
          {
            opcode: 'segment',
            blockType: 'reporter',
            text: '⎵ ([x1],[y1]) ([x2],[y2])',
            arguments: {
              x1: {
                type: 'number',
                defaultValue: '-100'
              },
              y1: {
                type: 'number',
                defaultValue: '0'
              },
              x2: {
                type: 'number',
                defaultValue: '0'
              },
              y2: {
                type: 'number',
                defaultValue: '0'
              },
            }
          },
          '---',
          {
            opcode: 'Squadrilateral_one',
            blockType: 'boolean',
            text: '[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4]) = [n]',
            arguments: {
              x1: {
                type: 'number',
                defaultValue: '0'
              },
              y1: {
                type: 'number',
                defaultValue: '10'
              },
              x2: {
                type: 'number',
                defaultValue: '10'
              },
              y2: {
                type: 'number',
                defaultValue: '10'
              },
              x3: {
                type: 'number',
                defaultValue: '10'
              },
              y3: {
                type: 'number',
                defaultValue: '0'
              },
              x4: {
                type: 'number',
                defaultValue: '0'
              },
              y4: {
                type: 'number',
                defaultValue: '0'
              },

              n: {
                type: 'number',
                defaultValue: '100'
              },

              IMAGE: {
                type: 'image',
                dataURI: quadrilateral,
                flipRTL: true
              }
            },
          },
          {
            opcode: 'Squadrilateral',
            blockType: 'reporter',
            text: '[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4])',
            arguments: {
              x1: {
                type: 'number',
                defaultValue: '0'
              },
              y1: {
                type: 'number',
                defaultValue: '10'
              },
              x2: {
                type: 'number',
                defaultValue: '10'
              },
              y2: {
                type: 'number',
                defaultValue: '10'
              },
              x3: {
                type: 'number',
                defaultValue: '10'
              },
              y3: {
                type: 'number',
                defaultValue: '0'
              },
              x4: {
                type: 'number',
                defaultValue: '0'
              },
              y4: {
                type: 'number',
                defaultValue: '0'
              },

              IMAGE: {
                type: 'image',
                dataURI: quadrilateral,
                flipRTL: true
              }
            },
          }
        ]
      };
    }
    true(){
      return true;
    }
    false(){
      return false;
    }
    boolean(args){
      return Boolean(args.a); //Boolean - scratch.cast.toBoolean
    }
    booleanToInt(args){
      if (Boolean(args.a)) {
        return 1;
      }
      return 0;
    }
    equal(args) {
      return (args.a == args.b);
    }
    equalNegative(args) {
      if (isNaN(args.a) || isNaN(args.b)){
        return false;
      } else {
        return (args.a == (0 - args.b));
      }
    }
    equalPlusMinus(args) {
      if (isNaN(args.a) || isNaN(args.b)){
        return false;
      } else {
        return (args.a == (0 - args.b)) || (args.a == args.b);
      }
    }
    almostEqual2n(args) {
      return (Math.round(args.a) == Math.round(args.b));
    }
    almostEqual3n(args) {
      return (Math.abs(args.a - args.b) <= args.c);
    }
    between(args) {
      return (args.a < args.b) && (args.b < args.c);
    }
    betweenEqual(args) {
      return (args.a <= args.b) && (args.b <= args.c);
    }
    notEqual(args){
      return (args.a != args.b);
    }
    xor(args){
      return Boolean(args.a) !== Boolean(args.b);
    }
    equalOrGreater(args) {
      return (args.a >= args.b);
    }
    equalOrLess(args) {
      return (args.a <= args.b);
    }
    vertical(args) {
      if (isNaN(args.a) || isNaN(args.b)){
        return false;
      } else {
        return ((args.a - (args.b - 90)) % 180) == 0;
      }
    }
    segment_one(args) {
      return Math.round(Math.sqrt(Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2))) == args.n;
    }
    segment_two(args) {
      return Math.round(Math.sqrt(Math.pow(args.x11 - args.x12, 2) + Math.pow(args.y11 - args.y12, 2)))
      == Math.round(Math.sqrt(Math.pow(args.x21 - args.x22, 2) + Math.pow(args.y21 - args.y22, 2)));
    }
    segment(args) {
      return Math.sqrt(Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2));
    }
    Squadrilateral_one(args) {
      let points = [[args.x1,args.y1], [args.x2,args.y2], [args.x3,args.y3], [args.x4,args.y4]];
      let area = 0;
      let n = points.length;
      for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];
        let x2 = points[(i + 1) % n][0];
        let y2 = points[(i + 1) % n][1];
        area += x1 * y2;
        area -= x2 * y1;
      }
      area = Math.abs(area) / 2;
      return Math.round(area) == args.n;
    }
    Squadrilateral(args) {
      let points = [[args.x1,args.y1], [args.x2,args.y2], [args.x3,args.y3], [args.x4,args.y4]];
      let area = 0;
      let n = points.length;
      for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];
        let x2 = points[(i + 1) % n][0];
        let y2 = points[(i + 1) % n][1];
        area += x1 * y2;
        area -= x2 * y1;
      }
      area = Math.abs(area) / 2;
      return (area);
    }
  }
  //Scratch.extensions.register(new MoreComparisons());
  var extensionInstance = new MoreComparisons(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})();
