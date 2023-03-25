(function() {
  'use strict';

  const encode = (str) => btoa(str).split('').map((i) => String.fromCharCode(i.charCodeAt(0) + 1)).join('');
  const decode = (str) => atob(str.split('').map((i) => String.fromCharCode(i.charCodeAt(0) - 1)).join(''));
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
if(!vm) {
  const vm = window.vm;
}
  // A forewarning for the reader:
  // This list contains some very bad naughty words, so we've encoded it in a way that
  // it requires a tiny bit of work to read. Most of these words will get you banned from
  // Scratch. You have been warned.
  const NAUGHTY_WORDS = [
    "[oWkbx>>",
    "ZYK{[R>>",
    "ZYK{[XiwcHV>",
    "ZYO{",
    "ZYO{[YN>",
    "ZYO{[nGk[R>>",
    "ZYO{[nGk[YN>",
    "ZYO{bH:t[R>>",
    "ZYO{bH:t[YN>",
    "ZnG{eHGz[B>>",
    "ZnG{eHGz[IN>",
    "ZnWicnWz",
    "ZnWtcHWv[B>>",
    "ZnmveB>>",
    "Znm1Z3h>",
    "Znm1Z3imdx>>",
    "Znm1Z3i6",
    "Znywe3qwZh>>",
    "Zny2cYB>",
    "Zny2cYCsbX5>",
    "Zn:tcH:kb4N>",
    "Zn:tcH:5",
    "Zn:v[YJ>",
    "ZoWsb3Gs[R>>",
    "ZoWtcIOpbYR>",
    "ZoWv[3iwcHV>",
    "ZoW1eHOp[XWsdx>>",
    "ZoW1eHiwcHV>",
    "ZoW1eICqdnG1[R>>",
    "ZoW1eICteXd>",
    "Z3GzdHW1cYWvZ3imdh>>",
    "Z3iqcnN>",
    "Z3iqcnt>",
    "Z3iwZXR>",
    "Z3iw[HV>",
    "Z3mzZ3ymbnWzbx>>",
    "Z3yqeB>>",
    "Z3y2cnem",
    "Z3:kbx>>",
    "Z3:kb4O2Z3umdh>>",
    "Z3:kb4O2Z3umdoN>",
    "Z3:kb4O2Z3uqcnd>",
    "Z3:wZ3iq[R>>",
    "Z3:wZ3i6",
    "Z3:wch>>",
    "Z3:weHWz",
    "Z3:zcniwcHV>",
    "Z4Wu",
    "Z4Wvcnmm",
    "Z4WveB>>",
    "Z4WveIN>",
    "[HGocx>>",
    "[Hmk",
    "[Hmkbx>>",
    "[Hmkb3imZXR>",
    "[Hmkb3imZXS{",
    "[Hms",
    "[Hms[R>>",
    "[Hmt[H9>",
    "[H:wZ3ijZXd>",
    "[H:wd3h>",
    "[H:2Z3im",
    "[H:2Z3imZnGo",
    "[IWuZnG{dx>>",
    "[IWuZnG{d3W{",
    "[Ims[R>>",
    "[nGo",
    "[nGo[3W1",
    "[nGo[3m1",
    "[nGo[3:1",
    "[nGo[3:1dx>>",
    "[nGoeHGz[B>>",
    "[nGvcol>",
    "[nWkbx>>",
    "[nWtZ3h>",
    "[nWteHOp",
    "[nmo[3mv[x>>",
    "[nmv[3WzZnGv[x>>",
    "[oKweISqcnd>",
    "[oWk",
    "[oWkbx>>",
    "[oWkb3Wl",
    "[oWkb3WleYB>",
    "[oWkb3Wz",
    "[oWkb3Wzdx>>",
    "[oWkb3mv[x>>",
    "[oWkb3:n[h>>",
    "[oWkb4N>",
    "[oWkb4Wx",
    "[oWl[3WxZXOs[YJ>",
    "[oWs",
    "[oWsb3Wz",
    "[oWsb3Wzdx>>",
    "[oWy",
    "[3Gv[3Kicnd>",
    "[3G{bB>>",
    "[3:l[HGuch>>",
    "[3:l[HGucnm1",
    "[3:sb4Wv",
    "[3:wZ3h>",
    "[3:wbx>>",
    "[4Wq[H9>",
    "bHWmZh>>",
    "bH:vb3W6",
    "bH:wb3Wz",
    "bnGkb3G{dx>>",
    "bnGkb3G{d3W{",
    "bnGkb3:n[h>>",
    "bnGx",
    "bnWzb3:n[h>>",
    "bnmoZXKwcx>>",
    "bnmo[3WzZn:w",
    "bnm7fh>>",
    "boWv[3ymZoWvcol>",
    "b3ms[R>>",
    "b36wZnKqcnd>",
    "b3:wZ3h>",
    "b3:weHOp",
    "b4KieYR>",
    "b4ms[R>>",
    "cHW{Zn9>",
    "cHW7fnmm",
    "cXmt[h>>",
    "cXmv[3V>",
    "cX:1bHWz[oWkb3Wz",
    "cX:1bHWz[oWkb3Wzdx>>",
    "cX:1bHWz[oWkb3mv[x>>",
    "cYWn[h>>",
    "cYWn[nSqenWz",
    "cYWn[nSqenmv[x>>",
    "cYWv[3mv[x>>",
    "cYWveHWz",
    "cneoZR>>",
    "cnmoZR>>",
    "cnmo[3F>",
    "cnmo[3Wz",
    "cnmo[3Wzdx>>",
    "cnmocHW1",
    "cnmodh>>",
    "dHGsbR>>",
    "dHGvc3:kbB>>",
    "dHWkb3Wz",
    "dHWkb3WzbHWi[B>>",
    "dHmtcH:kbx>>",
    "dHm{dx>>",
    "dHm{d3Wl",
    "dH:tcH:kbx>>",
    "dH:wch>>",
    "dH:wcnGvbR>>",
    "dH:wcnGvfR>>",
    "dH:wcoSicnd>",
    "dH:zZ3iuc36s[Yl>",
    "dIKqZ3t>",
    "dIWvZX6q",
    "dIWvZX6vfR>>",
    "dIWvZX66",
    "dIW{d3mm",
    "dIW{d3mmdx>>",
    "dIW{d4l>",
    "dIW1ZR>>",
    "dIW1cx>>",
    "dYWqcR>>",
    "dnGobHWi[B>>",
    "doW{b3l>",
    "d3OpcH:v[x>>",
    "d3Ozc4Sm",
    "d3ii[x>>",
    "d3iqeB>>",
    "d3iqeHV>",
    "d3iqeHimZXR>",
    "d3iqeHimZXS{",
    "d3iqeIN>",
    "d3iqeISq[YJ>",
    "d3iqeISq[YO1",
    "d3iqeISqcnd>",
    "d3iqeIS6",
    "d3uicnt>",
    "d3um[YR>",
    "d3yi[x>>",
    "d3yicoSmfXV>",
    "d3y2eB>>",
    "d32idoSid4N>",
    "d32idoSid4Omdx>>",
    "d32m[x>>",
    "d36ieHOp",
    "d4CqZx>>",
    "d4CqZ3t>",
    "d4Ctc3:o[R>>",
    "d4Cwc3em",
    "eHWiZnGo[3mv[x>>",
    "eHm1",
    "eHm1bXW{",
    "eHm1dx>>",
    "eHm1eHmmdx>>",
    "eHm1eIl>",
    "eH:{d3Wz",
    "eH:4[Xyp[XGl",
    "eIeieB>>",
    "enmjdnG1c4J>",
    "e3Gvbx>>",
    "e3Gvb3Wz",
    "e3W1ZnGkbx>>",
    "e3iwdnV>",
    "e3m{[XG{dx>>",
    "e3m{[XG{d3W{",
    "e3:x"
  ].map(decode);

  // Put the longest words first so that if "test" and "tests" are in the word list in
  // that order, redacting "tests" will give "***" instead of "***s"
  NAUGHTY_WORDS.sort((a, b) => b.length - a.length);

  const regex = new RegExp(NAUGHTY_WORDS.join('|'), 'gi');

  class Profanity {
    getInfo () {
      return {
        id: 'tsprofanity', //thanks to theshovel for original.
        name: 'Bad Word Remover',
        color1: '#cf6a3c',
        color2: '#cf6a3c',
        color3: '#cf6a3c',
        blocks: [
          {
            opcode: 'checkProfanity',
            blockType: 'reporter',
            text: 'Replace bad words in [TEXT] with [REPLACEMENT]',
            arguments: {
              REPLACEMENT: {
                type: 'string',
                defaultValue: '***',
              },
              TEXT: {
                type: 'string',
                defaultValue: 'Hello!',
              }
            }
          },
        ]
      };
    }

    checkProfanity({TEXT, REPLACEMENT}) {
      // Use a function as the second argument so that replacing with "$&" does not allow
      // bypass.
      return String(TEXT).replace(regex, () => REPLACEMENT);
    }
  }

  //Scratch.extensions.register(new Profanity());
     var extensionInstance = new Profanity(window.vm.extensionManager.runtime)
    var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
    window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})();
