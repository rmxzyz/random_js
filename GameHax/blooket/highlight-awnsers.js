javascript:(async()=>{const{state:n,props:r}=Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"];[...document.querySelectorAll('[class*="answerContainer"]')].forEach((e,o)=>{(n.question||r.client.question).correctAnswers.includes((n.question||r.client.question).answers[o])?e.style.backgroundColor=%22rgb(0,%20207,%20119)%22:e.style.backgroundColor=%22rgb(189,%2015,%2038)%22})})();
