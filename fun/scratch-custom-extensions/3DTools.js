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
(function(Scratch) {
  'use strict';
  
  class Tools3D {
    // Setup
    CameraPosition = [0,0,0]
    CameraRotation = [0,0,0]
    DistanceToScreen = 300
    // Math functions
    radians(x) {
      return x * (Math.PI/180)
    }
    sindeg(x) {
      return Math.sin(this.radians(x))
    }
    cosdeg(x) {
      return Math.cos(this.radians(x))
    }
    // 3D functions
    Project3D(a) {
      if (a.XYS == 'x') {
        return (a.X - this.CameraPosition[0]) * (this.DistanceToScreen / (a.Z - this.CameraPosition[2]))
      } else if (a.XYS == 'y') {
        return (a.Y - this.CameraPosition[1]) * (this.DistanceToScreen / (a.Z - this.CameraPosition[2]))
      } else if (a.XYS == 's') {
        return (this.DistanceToScreen / (a.Z - this.CameraPosition[2]))
      } else {
        return 'ERROR'+' '+a.XYS
      }
    }
    RotationMatrix(a) {
      this.rotx = (a.X - this.CameraPosition[0])
      this.roty = (a.Y - this.CameraPosition[1])
      this.rotz = (a.Z - this.CameraPosition[2])

      // Rotate XZ
      this.rotx = (this.rotz*this.sindeg((0-this.CameraRotation[1]))) + (this.rotx*this.cosdeg((0-this.CameraRotation[1])))
      this.rotz = (this.rotz*this.cosdeg((0-this.CameraRotation[1]))) - (this.rotx*this.sindeg((0-this.CameraRotation[1])))

      // Rotate YZ
      this.roty = (this.rotz*this.sindeg((0-this.CameraRotation[0]))) + (this.roty*this.cosdeg((0-this.CameraRotation[0])))
      this.rotz = (this.rotz*this.cosdeg((0-this.CameraRotation[0]))) - (this.roty*this.sindeg((0-this.CameraRotation[0])))

      // Rotate XY
      this.rotx = (this.roty*this.sindeg((0-this.CameraRotation[2]))) + (this.rotx*this.cosdeg((0-this.CameraRotation[2])))
      this.roty = (this.roty*this.cosdeg((0-this.CameraRotation[2]))) - (this.rotx*this.sindeg((0-this.CameraRotation[2])))

      if (a.XYZ == 'x') {
        return this.rotx
      } else if (a.XYZ == 'y') {
        return this.roty
      } else if (a.XYZ == 'z') {
        return this.rotz
      } 
    }
    SetCameraPosition(a) {
      this.CameraPosition[0] = a.X
      this.CameraPosition[1] = a.Y
      this.CameraPosition[2] = a.Z
    }
    SetCameraRotation(a) {
      this.CameraRotation[0] = a.X
      this.CameraRotation[1] = a.Y
      this.CameraRotation[2] = a.Z
    }
    SetCameraDistanceToScreen(a) {
      this.DistanceToScreen = a.DST
    }
    // Variable Reporters
    camx() {
      return this.CameraPosition[0]
    }
    camy() {
      return this.CameraPosition[1]
    }
    camz() {
      return this.CameraPosition[2]
    }
    camxr() {
      return this.CameraRotation[0]
    }
    camyr() {
      return this.CameraRotation[1]
    }
    camzr() {
      return this.CameraRotation[2]
    }
    // Project Definition
    getInfo () {
      return {
        id: 'tools3d',

        name: '3D Tools',
  
        blocks: [
          {
            opcode: 'Project3D',
            blockType: Scratch.BlockType.REPORTER,
            text: '[XYS] 3D project X: [X] Y: [Y] Z: [Z]',
            arguments: {
              XYS: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'project_Menu'
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Z: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'RotationMatrix',
            blockType: Scratch.BlockType.REPORTER,
            text: '[XYZ] Rotation Matrix X: [X] Y: [Y] Z: [Z]',
            arguments: {
              XYZ: {
                type: Scratch.ArgumentType.NUMBER,
                menu: 'rotation_Menu'
              },
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Z: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'SetCameraPosition',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Camera Position X: [X] Y: [Y] Z: [Z]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Z: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'SetCameraRotation',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Camera Rotation X: [X] Y: [Y] Z: [Z]',
            arguments: {
              X: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Y: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              },
              Z: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'SetCameraDistanceToScreen',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Set Camera Distance to Screen: [DST]',
            arguments: {
              DST: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 300
              }
            }
          },
          {
            opcode: 'camx',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera X',
            disableMonitor: false
          },
          {
            opcode: 'camy',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera Y',
            disableMonitor: false
          },
          {
            opcode: 'camz',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera Z',
            disableMonitor: false
          },
          {
            opcode: 'camxr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera X Rotation',
            disableMonitor: false
          },
          {
            opcode: 'camyr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera Y Rotation',
            disableMonitor: false
          },
          {
            opcode: 'camzr',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Camera Z Rotation',
            disableMonitor: false
          }
        ],
        menus: {
          project_Menu: {
            items: ['x', 'y', 's']
          },
          rotation_Menu: {
            items: ['x', 'y', 'z']
          }
        }
      };
    }
  }
  //Scratch.extensions.register(new Tools3D());
   var extensionInstance = new Tools3D(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})(window.Scratch);
