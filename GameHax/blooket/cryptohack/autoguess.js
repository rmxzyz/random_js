javascript:(async()=>{var e=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode["state"];if("hack"==e.stage)for(const t of document.querySelector("div[class^=styles__buttonContainer]").children)t.innerText==e.correctPassword&&t.click()})();