javascript:(async()=>{var e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner.stateNode.setState({toysPerQ:parseInt(prompt("How many toys per question would you like?%22))})})();
