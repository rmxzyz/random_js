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

  if(!vm) {const vm = Scratch.vm;}
  if(!runtime) {const runtime = vm.runtime;}
  if(!canvas) {const canvas = runtime.renderer.canvas;}
  if(!gl) {const gl = runtime.renderer._gl;}
// create by scratch3-extension generator
const ArgumentType = Scratch.ArgumentType;
const BlockType = Scratch.BlockType;
const formatMessage = Scratch.formatMessage;
const log = Scratch.log;

const menuIconURI = null;
const blockIconURI = "data:image/png;base64,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";

class testExt{
  constructor (runtime){
    this.runtime = runtime;
    // communication related
    this.comm = runtime.ioDevices.comm;
    this.session = null;
    this.runtime.registerPeripheralExtension('testExt', this);
    // session callbacks
    this.reporter = null;
    this.onmessage = this.onmessage.bind(this);
    this.onclose = this.onclose.bind(this);
    this.write = this.write.bind(this);
    // string op
    this.decoder = new TextDecoder();
    this.lineBuffer = '';
  }

  onclose (){
    this.session = null;
  }

  write (data, parser = null){
    if (this.session){
      return new Promise(resolve => {
        if (parser){
          this.reporter = {
            parser,
            resolve
          }
        }
        this.session.write(data);
      })
    }
  }

  onmessage (data){
    const dataStr = this.decoder.decode(data);
    this.lineBuffer += dataStr;
    if (this.lineBuffer.indexOf('\n') !== -1){
      const lines = this.lineBuffer.split('\n');
      this.lineBuffer = lines.pop();
      for (const l of lines){
        if (this.reporter){
          const {parser, resolve} = this.reporter;
          resolve(parser(l));
        };
      }
    }
  }

  scan (){
    this.comm.getDeviceList().then(result => {
        this.runtime.emit(this.runtime.constructor.PERIPHERAL_LIST_UPDATE, result);
    });
  }

  getInfo (){
    return {
      id: 'testExt',
      name: 'Test',
      color1: '#0FBD8C',
      color2: '#0DA57A',
      menuIconURI: menuIconURI,
      blockIconURI: blockIconURI,
      blocks: [
        {
          opcode: 'testBlock',
          blockType: BlockType.COMMAND,
          arguments: {
            VALUE: {
              type: ArgumentType.STRING
            }
          },
          text: 'eval [VALUE]',
          gen: {
            arduino: this.testBlockCpp,
            micropy: this.testBlockMpy
          }
        }
      ]
    }
  }

testBlock (args, util){
  const VALUE = args.VALUE;

  return eval(VALUE)
}

testBlockCpp (gen, block){
  cppComm(gen);
  return gen.template2code(block, 'testBlock')
}

testBlockCpp (gen, block){
  mpyComm(gen);
  return gen.template2code(block, 'testBlock')
}

}
 var extensionInstance = new testExt(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
//module.exports = testExt;

