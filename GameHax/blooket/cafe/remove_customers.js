javascript:(async()=>{const o=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];o.state.customers.forEach((e,t)=>Object.keys(e).length&&o.removeCustomer(t,!0))})();