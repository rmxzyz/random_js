//idk
if (!location.pathname.includes("editor")) {
  window.alert("This must be run in the scratch editor!");
}
function getVM() {
  if (!document.querySelector("#app"))
    throw new Error("Unable to access vm through redux");
  window.vm = document
    .querySelector("#app")
    [
      Object.keys(app).find((key) => key.startsWith("__reactContainer"))
    ].child.stateNode.store.getState().scratchGui.vm;
  console.log("Got VM");
}
function getAppState() {
  if (!document.querySelector("#app"))
    throw new Error("Unable to access vm through redux");
  window.appState = document
    .querySelector("#app")
    [
      Object.keys(app).find((key) => key.startsWith("__reactContainer"))
    ].child.stateNode.store.getState();
  console.log("Got appState");
}
function getInternalKey(elem) {
  var _react_internal_key = Object.keys(elem).find((key) =>
    key.startsWith("__reactInternalInstance$")
  );
  return this._react_internal_key;
}
function _getsoundeditor() {
  var sa = document
    .querySelector('[class*="sound-editor_row-reverse_"] > :nth-child(10)')
    .closest('[class*="sound-editor_editor-container_"]');
  var key = getInternalKey(sa);
  window.SoundEditor = sa[key].return.return.return.stateNode;
  console.log("Got SoundEditor");
}
function getSoundEditor() {
  var hookSoundEditor = () => {
    setTimeout(() => {
      _getsoundeditor();
    }, 10);
  };
  document
    .getElementById("react-tabs-4")
    .addEventListener("click", hookSoundEditor);
}
function getBlockly() {
  window.REACT_INTERNAL_PREFIX =
    "__reactInternalInstance$"; /*/GetScratchBlocksModal Script by Robert Pirtea/*/
  window.BLOCKS_CLASS = '[class^="gui_blocks-wrapper"]';
  window.elem = document.querySelector(BLOCKS_CLASS);
  function getInternalKey(elem) {
    if (!window._react_internal_key) {
      window._react_internal_key = Object.keys(elem).find((key) =>
        key.startsWith(REACT_INTERNAL_PREFIX)
      );
    }
    return window._react_internal_key;
  }
  var internal = elem[getInternalKey(elem)];
  var childable = internal;
  while (
    ((childable = childable.child),
    !childable || !childable.stateNode || !childable.stateNode.ScratchBlocks)
  ) {}
  window.ScratchBlocks = childable.stateNode.ScratchBlocks;
  console.log("Got Blockly");
}
getBlockly();
getVM();
getAppState();
getSoundEditor();
var global_fps = 30;
vm.runtime.start = function () {
  if (this._steppingInterval) return;
  let interval = 1000 / global_fps;
  this.currentStepTime = interval;
  this._steppingInterval = setInterval(() => {
    this._step();
  }, interval);
  this.emit("RUNTIME_STARTED");
};
function setFPS(fps) {
  global_fps = fps;

  clearInterval(vm.runtime._steppingInterval);
  vm.runtime._steppingInterval = null;
  vm.runtime.start();
}
setFPS(30);
function injectScript(url) {
  fetch(url).then((x) => {
    x.blob().then((y) => {
      y.text().then((z) => {
        var script = document.createElement("script");
        script.innerHTML = z;
        document.body.appendChild(script);
      });
    });
  });
}
function modTarget(target) {
  switch (target) {
    case "size":
      vm.editingTarget.size =
        window.prompt(
          "Set size of " + vm.editingTarget.getName(),
          vm.editingTarget.size
        ) * 1;
      vm.emitTargetsUpdate();
      break;
    case "x":
      vm.editingTarget.x =
        window.prompt(
          "Set x pos of " + vm.editingTarget.getName(),
          vm.editingTarget.x
        ) * 1;
      vm.emitTargetsUpdate();
      break;
    case "y":
      vm.editingTarget.y =
        window.prompt(
          "Set y pos of " + vm.editingTarget.getName(),
          vm.editingTarget.y
        ) * 1;
      vm.emitTargetsUpdate();
      break;
    case "removeFencing":
      vm.runtime.renderer._xLeft = Infinity * -1;
      vm.runtime.renderer._xRight = Infinity * 1;
      vm.runtime.renderer._yTop = Infinity * 1;
      vm.runtime.renderer._yBottom = Infinity * -1;
      break;
  }
}

/*/Start custom block script injection/*/
function initForceir() {
  var forceir = document.createElement("div");
  forceir.id = "forceir";
  forceir.setAttribute("title", "Forceir Menu");
  forceir.innerHTML = `
  <details>
    <summary>> Forcer</summary>
    <button onclick="modTarget('size')">Set Size</button>
    <button onclick="modTarget('x')">Set X</button>
    <button onclick="modTarget('y')">Set Y</button>
    <button onclick="modTarget('removeFencing');this.remove();">Remove Fencing</button>
    <button onclick="setFPS(30);">Set FPS to 30 [default]</button>
    <button onclick="setFPS(60);">Set FPS to 60</button>
  </details>
  `;
  document
    .getElementsByClassName("sprite-info_sprite-info_3EyZh box_box_2jjDp")[0]
    .appendChild(forceir);
}

const contextMenuCallbacks = [];
const CONTEXT_MENU_ORDER = [
  "editor-devtools",
  "block-switching",
  "blocks2image",
  "swap-local-global",
];
function createBlockContextMenu(
  callback,
  { workspace = false, blocks = false, flyout = false, comments = false } = {}
) {
  contextMenuCallbacks.push({
    addonId: this._addonId,
    callback,
    workspace,
    blocks,
    flyout,
    comments,
  });

  contextMenuCallbacks.sort(
    (b, a) =>
      CONTEXT_MENU_ORDER.indexOf(b.addonId) -
      CONTEXT_MENU_ORDER.indexOf(a.addonId)
  );

  if (createdAnyBlockContextMenus) return;
  createdAnyBlockContextMenus = true;

  const oldShow = ScratchBlocks.ContextMenu.show;
  ScratchBlocks.ContextMenu.show = function (event, items, rtl) {
    const gesture = ScratchBlocks.mainWorkspace.currentGesture_;
    const block = gesture.targetBlock_;

    for (const {
      callback,
      workspace,
      blocks,
      flyout,
      comments,
    } of contextMenuCallbacks) {
      let injectMenu =
        // Workspace
        (workspace && !block && !gesture.flyout_ && !gesture.startBubble_) ||
        // Block in workspace
        (blocks && block && !gesture.flyout_) ||
        // Block in flyout
        (flyout && gesture.flyout_) ||
        // Comments
        (comments && gesture.startBubble_);
      if (injectMenu) {
        try {
          items = callback(items, block);
        } catch (e) {
          console.error("Error while calling context menu callback: ", e);
        }
      }
    }

    oldShow.call(this, event, items, rtl);

    const blocklyContextMenu = ScratchBlocks.WidgetDiv.DIV.firstChild;
    items.forEach((item, i) => {
      if (i !== 0 && item.separator) {
        const itemElt = blocklyContextMenu.children[i];
        itemElt.style.paddingTop = "2px";
        itemElt.style.borderTop = "1px solid hsla(0, 0%, 0%, 0.15)";
      }
    });
  };
}
const ICON =
  "data:image/svg+xml;base64," +
  btoa(
    `<?xml version="1.0" encoding="UTF-8" standalone="no"?><svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" style="display:inline;enable-background:new" version="1.0" id="svg11300" height="128" width="128"><title id="title4162">Adwaita Icon Template</title><defs id="defs3"><linearGradient id="linearGradient1948"><stop id="stop1944" offset="0" style="stop-color:#2d2839;stop-opacity:1;"/><stop id="stop1946" offset="1" style="stop-color:#282433;stop-opacity:1"/></linearGradient><linearGradient id="linearGradient1020"><stop id="stop1016" offset="0" style="stop-color:#ffffff;stop-opacity:1;"/><stop id="stop1018" offset="1" style="stop-color:#ffffff;stop-opacity:0.09411765"/></linearGradient><linearGradient id="linearGradient1001"><stop id="stop989" offset="0" style="stop-color:#77767b;stop-opacity:1"/><stop style="stop-color:#c0bfbc;stop-opacity:1" offset="0.05" id="stop991"/><stop id="stop993" offset="0.09999998" style="stop-color:#9a9996;stop-opacity:1"/><stop style="stop-color:#9a9996;stop-opacity:1" offset="0.89999938" id="stop995"/><stop id="stop997" offset="0.94999999" style="stop-color:#c0bfbc;stop-opacity:1"/><stop id="stop999" offset="1" style="stop-color:#77767b;stop-opacity:1"/></linearGradient><linearGradient gradientUnits="userSpaceOnUse" y2="44" x2="464" y1="44" x1="48" id="linearGradient965" xlink:href="#linearGradient1001"/><radialGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(-4.7272726,7.935912e-7,-3.0301491e-7,-1.6363636,238.54547,49.766183)" r="44" fy="194.19048" fx="63.999996" cy="194.19048" cx="63.999996" id="radialGradient1030" xlink:href="#linearGradient1020"/><linearGradient gradientUnits="userSpaceOnUse" y2="269.13693" x2="70.346565" y1="245.39511" x1="70.346565" id="linearGradient1950" xlink:href="#linearGradient1948"/></defs><metadata id="metadata4"></metadata><g transform="translate(0,-172)" style="display:inline" id="layer1"><g style="display:inline" id="layer9"><g transform="rotate(-30,420.69873,288.4192)" id="g1710" style="display:inline;enable-background:new"/><rect transform="matrix(0.25,0,0,0.25,0,225)" style="display:inline;opacity:1;fill:url(#linearGradient965);fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;marker-start:none;marker-mid:none;marker-end:none;paint-order:normal;enable-background:new" id="rect953" width="416" height="376" x="48" y="-124" rx="32" ry="32"/><rect ry="32" rx="32" y="-164" x="48" height="384" width="416" id="rect950" style="display:inline;opacity:1;fill:#deddda;fill-opacity:1;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;marker-start:none;marker-mid:none;marker-end:none;paint-order:normal;enable-background:new" transform="matrix(0.25,0,0,0.25,0,225)"/><rect transform="scale(1,-1)" ry="3.9999695" rx="4" y="-276" x="16" height="87.999969" width="96" id="rect1004" style="display:inline;opacity:1;vector-effect:none;fill:#241f31;fill-opacity:1;stroke:none;stroke-width:0.01121096px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;marker-start:none;marker-mid:none;marker-end:none;paint-order:normal;enable-background:new"/><rect transform="scale(-1)" style="display:inline;opacity:0.05;vector-effect:none;fill:url(#radialGradient1030);fill-opacity:1;stroke:none;stroke-width:0.01121096px;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;marker-start:none;marker-mid:none;marker-end:none;paint-order:normal;enable-background:new" id="rect968" width="88" height="78" x="-108" y="-272"/><g id="g976" transform="translate(-2,-2)" style="fill:#ffffff"><path d="M 44.012301,210.88755 30,203.27182 V 208 l 9.710724,4.62951 v 0.1422 L 30,218 v 4.72818 l 14.012301,-8.21451 z" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:medium;line-height:1.25;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.24999999" id="path972"/><path d="m 47.999998,226 2e-6,4 h 16.00001 l -2e-6,-4 z" style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:medium;line-height:1.25;font-family:'Source Code Pro';-inkscape-font-specification:'Source Code Pro, Bold';font-variant-ligatures:normal;font-variant-caps:normal;font-variant-numeric:normal;font-feature-settings:normal;text-align:start;letter-spacing:0px;word-spacing:0px;writing-mode:lr-tb;text-anchor:start;fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.24999999" id="path974"/></g><path d="m 100,244 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 84,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 76,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 84,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 76,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 84,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m 76,4 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z m -8,0 h 4 v 4 h -4 z" style="opacity:1;vector-effect:none;fill:url(#linearGradient1950);fill-opacity:1;stroke:none;stroke-width:8;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;marker:none;marker-start:none;marker-mid:none;marker-end:none;paint-order:normal" id="rect1059"/></g></g></svg>`
  );
const escapeHTML = (str) =>
  str.replace(/([<>'"&])/g, (_, l) => `&#${l.charCodeAt(0)};`);
const autoescaper = (strings, ...dangerous) => {
  let r = "";
  let i = 0;
  for (; i < strings.length; i++) {
    r += strings[i];
    if (i !== dangerous.length) r += escapeHTML(String(dangerous[i]));
  }
  return r;
};

const color = {
  color: ["#000000"],
  secondaryColor: ["#076b43", "#0b076b", "#6b0754"],
  tertiaryColor: [
    "#07f2ea",
    "#07f226",
    "#f207db",
    "#f207db",
    "#f28007",
    "#07f294",
  ],
};

const setCustomBlockColor = (newColor) => {
  Object.assign(color, newColor);
};

const customBlocks = {};
const customBlockParamNamesIdsDefaults = Object.create(null);
const getCustomBlock = (proccode) => {
  if (!Object.prototype.hasOwnProperty.call(customBlocks, proccode)) {
    return;
  }
  return customBlocks[proccode];
};
const getArgumentId = (index) => `arg${index}`;

const getNamesIdsDefaults = (blockData) => [
  blockData.args,
  blockData.args.map((_, i) => getArgumentId(i)),
  blockData.args.map(() => ""),
];
const parseArguments = (code) =>
  code
    .split(/(?=[^\\]%[nbs])/g)
    .map((i) => i.trim())
    .filter((i) => i.charAt(0) === "%")
    .map((i) => i.substring(0, 2));

const fixDisplayName = (displayName) =>
  displayName.replace(
    /([^\s])(%[nbs])/g,
    (_, before, arg) => `${before} ${arg}`
  );
const compareArrays = (a, b) => JSON.stringify(a) === JSON.stringify(b);
let workspaceUpdateQueued = false;
const queueWorkspaceUpdate = () => {
  if (workspaceUpdateQueued) {
    return;
  }
  workspaceUpdateQueued = true;
  queueMicrotask(() => {
    workspaceUpdateQueued = false;
    if (vm.editingTarget) {
      vm.emitWorkspaceUpdate();
    }
  });
};
const addBlock = (proccode, { args, callback, hidden, displayName }) => {
  if (getCustomBlock(proccode)) {
    return;
  }
  const procCodeArguments = parseArguments(proccode);
  if (args.length !== procCodeArguments.length) {
    //throw new Error(
    //  "Procedure code and argument list do not match! " +
    //    `Args:${args.length}; Procs:${procCodeArguments.length}`
    //);
  }
  if (displayName) {
    displayName = fixDisplayName(displayName);
    const displayNameArguments = parseArguments(displayName);
    if (!compareArrays(procCodeArguments, displayNameArguments)) {
      console.warn(
        `block displayName ${displayName} for ${proccode} does not have matching arguments, ignoring it.`
      );
      displayName = proccode;
    }
  } else {
    displayName = proccode;
  }

  const blockData = {
    id: proccode,
    args,
    handler: callback,
    hide: !!hidden,
    displayName,
  };
  customBlocks[proccode] = blockData;
  customBlockParamNamesIdsDefaults[proccode] = getNamesIdsDefaults(blockData);
  queueWorkspaceUpdate();
};
const removeBlock = (proccode) => {
  customBlocks[proccode] = null;
  customBlockParamNamesIdsDefaults[proccode] = null;
};
const generateBlockXML = () => {
  let xml = "";
  for (const proccode of Object.keys(customBlocks)) {
    const blockData = customBlocks[proccode];
    if (blockData.hide) continue;
    const [names, ids, defaults] = getNamesIdsDefaults(blockData);
    xml +=
      '<block type="procedures_call" gap="16"><mutation generateshadows="true" warp="false"' +
      ` proccode="${escapeHTML(proccode)}"` +
      ` argumentnames="${escapeHTML(JSON.stringify(names))}"` +
      ` argumentids="${escapeHTML(JSON.stringify(ids))}"` +
      ` argumentdefaults="${escapeHTML(JSON.stringify(defaults))}"` +
      "></mutation></block>";
  }
  if (xml.length === 0) {
    const message = "No custom blocks.";
    return `<label text="${escapeHTML(message)}" showStatusButton="null" />`;
  }
  return xml;
};
const injectWorkspace = (ScratchBlocks) => {
  const BlockSvg = ScratchBlocks.BlockSvg;
  const oldUpdateColour = BlockSvg.prototype.updateColour;
  BlockSvg.prototype.updateColour = function (...args) {
    if (this.type === "procedures_call") {
      const block = this.procCode_ && getCustomBlock(this.procCode_);
      if (block) {
        this.colour_ =
          color.color[Math.floor(Math.random() * color.color.length) + 0];
        this.colourSecondary_ =
          color.secondaryColor[
            Math.floor(Math.random() * color.secondaryColor.length) + 0
          ];
        this.colourTertiary_ =
          color.tertiaryColor[
            Math.floor(Math.random() * color.tertiaryColor.length) + 0
          ];
        this.customContextMenu = null;
      }
    }
    return oldUpdateColour.call(this, ...args);
  };
  const originalGetBlocksXML = vm.runtime.getBlocksXML;
  vm.runtime.getBlocksXML = function (target) {
    const result = originalGetBlocksXML.call(this, target);
    result.unshift({
      id: "sa-blocks",
      xml:
        "<category" +
        ` name="${escapeHTML("SK2 Blocks")}"` +
        ' id="sa-blocks"' +
        ' colour="#32a852"' +
        ' secondaryColour="#000000"' +
        ` iconURI="${ICON}"` +
        `>${generateBlockXML()}</category>`,
    });
    return result;
  };
  const originalGetDefineBlock = ScratchBlocks.Procedures.getDefineBlock;
  ScratchBlocks.Procedures.getDefineBlock = function (procCode, workspace) {
    const result = originalGetDefineBlock.call(this, procCode, workspace);
    if (result) {
      return result;
    }
    const block = getCustomBlock(procCode);
    if (block) {
      return {
        workspace,
        getInput() {
          return {
            connection: {
              targetBlock() {
                return null;
              },
            },
          };
        },
      };
    }
    return result;
  };

  const originalCreateAllInputs =
    ScratchBlocks.Blocks["procedures_call"].createAllInputs_;
  ScratchBlocks.Blocks["procedures_call"].createAllInputs_ = function (
    ...args
  ) {
    const blockData = getCustomBlock(this.procCode_);
    if (blockData) {
      const originalProcCode = this.procCode_;
      this.procCode_ = blockData.displayName;
      const ret = originalCreateAllInputs.call(this, ...args);
      this.procCode_ = originalProcCode;
      return ret;
    }
    return originalCreateAllInputs.call(this, ...args);
  };
  queueWorkspaceUpdate();
};

let inited = false;
async function init() {
  if (inited) {
    return;
  }
  inited = true;

  const Blocks = vm.runtime.monitorBlocks.constructor;
  const originalGetProcedureParamNamesIdsAndDefaults =
    Blocks.prototype.getProcedureParamNamesIdsAndDefaults;
  Blocks.prototype.getProcedureParamNamesIdsAndDefaults =
    function getProcedureParamNamesIdsAndDefaultsWrapped(name) {
      return (
        customBlockParamNamesIdsDefaults[name] ||
        originalGetProcedureParamNamesIdsAndDefaults.call(this, name)
      );
    };

  const oldStepToProcedure = vm.runtime.sequencer.stepToProcedure;
  vm.runtime.sequencer.stepToProcedure = function (thread, proccode) {
    const blockData = getCustomBlock(proccode);
    if (blockData) {
      const stackFrame = thread.peekStackFrame();
      blockData.handler(stackFrame.params, thread);
      return;
    }
    return oldStepToProcedure.call(this, thread, proccode);
  };
  injectWorkspace(ScratchBlocks);
}
addBlock("alert %s", {
  args: ["content"],
  displayName: "block-alert",
  callback: ({ content }, thread) => {
    window.alert(content);
  },
});
addBlock("JavaScript %s", {
  args: ["content"],
  displayName: "block-js",
  callback: ({ content }, thread) => {
    window.eval(content);
  },
});
addBlock(
  "Save JavaScript to Variable: (Variable Name: %s ) (JavaScript: %s )",
  {
    args: ["vname", "js"],
    displayName: "block-savevar",
    hide: true,
    callback: ({ vname, js }, thread) => {
      vm.setVariableValue(
        thread.target.id,
        variableNameToId(vname),
        window.eval(js)
      );
    },
  }
);
addBlock("log to console %s", {
  args: ["content"],
  displayName: "block-log",
  callback: ({ content }, thread) => {
    console.log(content);
  },
});
addBlock("log warning to console %s", {
  args: ["content"],
  displayName: "block-warn",
  callback: ({ content }, thread) => {
    console.warn(content);
  },
});
addBlock("log error to console %s", {
  args: ["content"],
  displayName: "block-error",
  callback: ({ content }, thread) => {
    console.error(content);
  },
});
addBlock("clear console", {
  args: [],
  displayName: "clear console",
  callback: () => {
    console.clear();
  },
});
addBlock("inject-Eruda", {
  args: [],
  displayName: "Inject Eruda",
  callback: () => {
    (function () {
      var script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/eruda";
      document.body.appendChild(script);
      script.onload = function () {
        eruda.init();
      };
    })();
  },
});
addBlock("rStore", {
  args: [],
  displayName: "rStore",
  callback: () => {
  },
});
addBlock("Show HTML Box", {
  args: [],
  displayName: "Show HTML Box",
  callback: () => {
    document.getElementById("html_box").classList.remove("hidden");
  },
});
addBlock("Hide HTML Box", {
  args: [],
  displayName: "Hide HTML Box",
  callback: () => {
    document.getElementById("html_box").classList.add("hidden");
  },
});
addBlock("Clear HTML Box", {
  args: [],
  displayName: "Clear HTML Box",
  callback: () => {
    document.getElementById("html_box").srcdoc = "";
  },
});
addBlock("Set HTML of HTML Box to: %s", {
  args: ["content"],
  displayName: "block-log",
  callback: ({ content }, thread) => {
    document.getElementById("html_box").srcdoc = content;
  },
});

addBlock("Add HTML to HTML Box: %s", {
  args: ["content"],
  displayName: "block-log",
  callback: ({ content }, thread) => {
    document.getElementById("html_box").srcdoc += content;
  },
});
addBlock("Unfocus HTML Box", {
  args: [],
  displayName: "Unfocus  Box",
  callback: () => {
    document.getElementById("html_box").classList.add("unfocused");
  },
});
addBlock("Focus HTML Box", {
  args: [],
  displayName: "Focus HTML Box",
  callback: () => {
    document.getElementById("html_box").classList.remove("unfocused");
  },
});
addBlock("set-fps %s", {
  args: ['fps'],
  displayName: "Set FPS",
  callback: ({ fps }, threadd) => {
    setFPS(fps)
  },
});
addBlock("Test Block %s", {
  args: ['number'],
  displayName: "Square Root",
  callback: ({ number }, threada) => {
    alert(Math.sqrt(new Number(number)))
  },
});
addBlock("Test Block %s", {
  args: ['number'],
  displayName: "Square Root",
  callback: ({ number }, threada) => {
    alert(Math.sqrt(new Number(number)))
  },
});
init();
/*/End custom block script injection/*/
Blockly.getMainWorkspace().options.collapse = true;
createBlockContextMenu(
  (items, block) => {
    items.splice(items.length, 0, {
      enabled: true,
      text: "Collapse/Uncollapse",
      callback: () => {
        var collapse = !block.isCollapsed();
        var children = ScratchBlocks.getMainWorkspace()
          .getTopBlocks()[0]
          .getChildren();
        for (let i = 0; i < children.length; i++) {
          const e = array[i];
          e.setCollapsed(collapse);
        }
        block.setCollapsed(collapse);
      },
      separator: true,
    });

    return items;
  },
  { blocks: true }
);


/*
Blockly.Blocks['variables_set'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("set")
        .appendField(new Blockly.FieldVariable("VAR_NAME"), "FIELD_NAME")
        .appendField("to");
    this.setOutput(true, null);
    ...
  }
};
*/
