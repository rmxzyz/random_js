javascript:(async()=>{var e=document.createElement("iframe");document.body.append(e),window.alert=e.contentWindow.alert.bind(window),e.remove(),"/tower/map"==window.location.pathname?(e=Object.values(document.querySelector(%22body%20div[id]%20%3E%20div%20%3E%20div%22))[1].children[0]._owner[%22stateNode%22],e.props.tower.cards.forEach(e=%3E{e.strength=20,e.charisma=20,e.wisdom=20})):alert(%22You%20need%20to%20be%20on%20the%20map%20to%20run%20this%20cheat!%22)})();
