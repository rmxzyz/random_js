javascript:(async()=>{let t=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];t.props.liveGameController.getDatabaseVal("c",e=>{t.setState({choosingPlayer:!1,players:e?Object.entries(e).map(([e,{b:t,t:o}])=%3E({name:e,blook:t,toys:o||0})).filter(e=%3Ee.name!=t.props.client.name).sort(({toys:e},{toys:t})=%3Et-e):[],phaseTwo:!0,stage:%22prize%22,choiceObj:{type:%22swap%22}},()=%3EsetTimeout(()=%3Et.setState({choosingPlayer:!0}),300))})})();
