javascript:(async()=>{var e=document.createElement("iframe"),e=(document.body.append(e),window.alert=e.contentWindow.alert.bind(window),window.prompt=e.contentWindow.prompt.bind(window),e.remove(),Object.values(document.querySelector("body div[id] > div > div"))[1].children[0]._owner["stateNode"]),a=[{name:"Chick",color:"#ffcd05%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[3,7,65,400,2500],time:[1,1,1,1,1],price:[300,3e3,3e4,2e5]},{name:%22Chicken%22,color:%22#ed1c24%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[10,40,200,1400,1e4],time:[5,4,3,2,1],price:[570,4e3,5e4,8e5]},{name:%22Cow%22,color:%22#58595b%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[25,75,1500,25e3,25e4],time:[15,10,10,10,5],price:[500,9500,16e4,4e6]},{name:%22Duck%22,color:%22#4ab96d%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[4,24,200,3e3,4e4],time:[3,3,3,3,3],price:[450,4200,7e4,11e5]},{name:%22Goat%22,color:%22#c59a74%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[5,28,200,1300,12e3],time:[3,3,2,2,2],price:[500,6400,45e3,5e5]},{name:%22Horse%22,color:%22#995b3c%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[5,20,270,1800,15e3],time:[2,2,2,2,2],price:[550,8200,65e3,6e5]},{name:%22Pig%22,color:%22#f6a9cb%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[20,50,1300,8e3,8e4],time:[7,7,7,7,5],price:[400,11e3,8e4,13e5]},{name:%22Sheep%22,color:%22#414042%22,class:%22%F0%9F%8C%BD%22,rarity:%22Common%22,cash:[6,25,250,1500,11e3],time:[3,3,3,2,2],price:[500,5e3,5e4,43e4]},{name:%22Cat%22,color:%22#f49849%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[5,18,170,1700,13e3],time:[2,2,2,2,2],price:[480,5500,6e4,5e5]},{name:%22Dog%22,color:%22#995b3c%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[7,25,220,1900,9e3],time:[3,3,2,2,1],price:[460,6600,7e4,73e4]},{name:%22Goldfish%22,color:%22#f18221%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[5,40,350,3500,35e3],time:[3,3,3,3,3],price:[750,7200,84e3,95e4]},{name:%22Rabbit%22,color:%22#e7bf9a%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[3,18,185,800,7e3],time:[2,2,2,1,1],price:[500,5800,56e3,55e4]},{name:%22Hamster%22,color:%22#ce9176%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[10,45,450,4500,45e3],time:[4,4,4,4,4],price:[650,6500,8e4,93e4]},{name:%22Turtle%22,color:%22#619a3c%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[23,120,1400,15e3,17e4],time:[10,10,10,10,10],price:[700,8500,11e4,13e5]},{name:%22Puppy%22,color:%22#414042%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[4,10,75,500,3e3],time:[1,1,1,1,1],price:[450,4e3,35e3,25e4]},{name:%22Kitten%22,color:%22#58595b%22,class:%22%F0%9F%90%BE%22,rarity:%22Common%22,cash:[4,8,60,400,2e3],time:[1,1,1,1,1],price:[350,3500,26e3,17e4]},{name:%22Bear%22,color:%22#995b3c%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[12,70,550,4500,1e5],time:[7,7,6,5,5],price:[550,5500,63e3,16e5]},{name:%22Moose%22,color:%22#995b3c%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[8,45,400,3500,26e3],time:[5,5,4,4,3],price:[520,6500,58e3,7e5]},{name:%22Fox%22,color:%22#f49849%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[7,15,80,550,3e3],time:[2,2,1,1,1],price:[400,4e3,36e3,24e4]},{name:%22Raccoon%22,color:%22#6d6e71%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[5,14,185,1900,19e3],time:[2,2,2,2,2],price:[400,5e3,71e3,8e5]},{name:%22Squirrel%22,color:%22#d25927%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[3,10,65,470,2600],time:[1,1,1,1,1],price:[420,3600,32e3,21e4]},{name:%22Owl%22,color:%22#594a42%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[4,17,155,1500,15e3],time:[2,2,2,2,2],price:[500,4800,55e3,58e4]},{name:%22Hedgehog%22,color:%22#3f312b%22,class:%22%F0%9F%8C%B2%22,rarity:%22Common%22,cash:[11,37,340,2200,3e4],time:[5,4,3,2,2],price:[540,7e3,77e3,12e5]},{name:%22Seal%22,color:%22#7ca1d5%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[6,17,150,1200,13e3],time:[2,2,2,2,2],price:[480,4500,43e3,52e4]},{name:%22Arctic%20Fox%22,color:%22#7ca1d5%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[5,18,180,850,8500],time:[2,2,2,1,1],price:[520,550,61e3,68e4]},{name:%22Snowy%20Owl%22,color:%22#feda3f%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[5,20,190,1900,16e3],time:[3,3,2,2,2],price:[370,5300,76e3,62e4]},{name:%22Arctic%20Hare%22,color:%22#7ca1d5%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[6,19,85,900,7e3],time:[2,2,1,1,1],price:[540,5200,66e3,55e4]},{name:%22Penguin%22,color:%22#fb8640%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[4,21,310,3200,33e3],time:[3,3,3,3,3],price:[400,6500,76e3,87e4]},{name:%22Baby%20Penguin%22,color:%22#414042%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[3,8,70,450,2700],time:[1,1,1,1,1],price:[420,3300,33e3,23e4]},{name:%22Polar%20Bear%22,color:%22#7ca1d5%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[12,75,700,6500,85e3],time:[8,7,6,5,5],price:[630,7e3,91e3,14e5]},{name:%22Walrus%22,color:%22#7d4f33%22,class:%22%E2%9D%84%EF%B8%8F%22,rarity:%22Common%22,cash:[11,46,420,3700,51e3],time:[5,5,4,4,4],price:[550,6200,68e3,1e6]},{name:%22Tiger%22,color:%22#f18221%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[6,20,100,975,7500],time:[3,3,1,1,1],price:[390,6e3,7e4,61e4]},{name:%22Jaguar%22,color:%22#fbb040%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[8,28,230,1600,17e3],time:[3,3,2,2,2],price:[390,6e3,7e4,61e4]},{name:%22Toucan%22,color:%22#ffca34%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[9,20,175,625,3800],time:[2,2,2,1,1],price:[520,4800,42e3,3e5]},{name:%22Cockatoo%22,color:%22#7ca1d5%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[6,35,160,1700,18e3],time:[4,4,2,2,2],price:[500,5e3,63e3,7e5]},{name:%22Macaw%22,color:%22#00aeef%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[3,8,85,850,8500],time:[1,1,1,1,1],price:[480,5400,62e3,63e4]},{name:%22Parrot%22,color:%22#ed1c24%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[3,9,90,900,9e3],time:[1,1,1,1,1],price:[540,5700,65e3,69e4]},{name:%22Panther%22,color:%22#2f2c38%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[12,28,215,2100,21e3],time:[5,3,2,2,2],price:[530,6500,76e3,87e4]},{name:%22Anaconda%22,color:%22#8a9143%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[3,15,85,1500,7600],time:[1,2,1,2,1],price:[410,5100,58e3,59e4]},{name:%22Orangutan%22,color:%22#bc6234%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[13,52,570,4300,7e4],time:[5,5,5,4,4],price:[600,7e3,8e4,14e5]},{name:%22Capuchin%22,color:%22#e0b0a6%22,class:%22%F0%9F%8C%B4%22,rarity:%22Common%22,cash:[4,14,160,780,8200],time:[2,2,2,1,1],price:[390,4700,57e3,68e4]},{name:%22Elf%22,color:%22#a7d054%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Uncommon%22,cash:[5e3,15e3,15e4,15e5,1e7],time:[1,1,1,1,1],price:[8e5,9e6,11e7,8e8]},{name:%22Witch%22,color:%22#4ab96d%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Uncommon%22,cash:[18e3,6e4,4e4,4e6,35e6],time:[3,3,2,2,2],price:[11e5,12e6,15e7,14e8]},{name:%22Wizard%22,color:%22#5a459c%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Uncommon%22,cash:[19500,65e3,44e4,46e5,4e6],time:[3,3,2,2,2],price:[13e5,135e5,16e7,16e8]},{name:%22Fairy%22,color:%22#df6d9c%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Uncommon%22,cash:[18500,6e4,62e4,44e5,38e6],time:[3,3,3,2,2],price:[12e5,125e5,15e6,15e8]},{name:%22Slime%20Monster%22,color:%22#2fa04a%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Uncommon%22,cash:[35e3,14e4,1e6,11e6,11e7],time:[5,5,4,4,4],price:[16e5,15e6,2e8,23e8]},{name:%22Jester%22,color:%22#be1e2d%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Rare%22,cash:[25e3,1e5,68e4,65e5,32e6],time:[3,3,2,2,1],price:[2e6,21e6,23e7,26e8]},{name:%22Dragon%22,color:%22#2fa04a%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Rare%22,cash:[36e3,15e4,15e5,15e6,15e7],time:[4,4,4,4,4],price:[23e5,24e6,27e7,3e9]},{name:%22Unicorn%22,color:%22#f6afce%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Epic%22,cash:[24e3,15e4,14e5,7e6,75e6],time:[2,2,2,1,1],price:[45e5,45e6,55e7,65e8]},{name:%22Queen%22,color:%22#9e1f63%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Rare%22,cash:[24e3,95e3,95e4,97e5,95e6],time:[3,3,3,3,3],price:[19e5,2e7,23e7,25e8]},{name:%22King%22,color:%22#ee2640%22,class:%22%E2%9A%94%EF%B8%8F%22,rarity:%22Legendary%22,cash:[75e3,4e5,6e6,9e7,125e7],time:[5,5,5,5,5],price:[6e6,95e6,16e8,25e9]},{name:%22Two%20of%20Spades%22,color:%22#414042%22,class:%22%F0%9F%8F%B0%22,rarity:%22Uncommon%22,cash:[4500,14e3,14e4,14e5,9e6],time:[1,1,1,1,1],price:[77e4,83e5,98e6,71e7]},{name:%22Eat%20Me%22,color:%22#d58c55%22,class:%22%F0%9F%8F%B0%22,rarity:%22Uncommon%22,cash:[13e3,45e3,45e4,45e5,5e7],time:[2,2,2,2,2],price:[13e5,14e6,16e7,2e9]},{name:%22Drink%20Me%22,color:%22#dd7399%22,class:%22%F0%9F%8F%B0%22,rarity:%22Uncommon%22,cash:[12e3,4e4,4e5,4e6,45e6],time:[2,2,2,2,2],price:[12e5,12e6,14e7,18e8]},{name:%22Alice%22,color:%22#4cc9f5%22,class:%22%F0%9F%8F%B0%22,rarity:%22Uncommon%22,cash:[13e3,42e3,21e4,21e5,23e6],time:[2,2,1,1,1],price:[12e5,13e6,15e7,19e8]},{name:%22Queen%20of%20Hearts%22,color:%22#d62027%22,class:%22%F0%9F%8F%B0%22,rarity:%22Uncommon%22,cash:[23e3,87e3,62e4,75e5,9e7],time:[4,4,3,3,3],price:[13e5,13e6,18e7,24e8]},{name:%22Dormouse%22,color:%22#89d6f8%22,class:%22%F0%9F%8F%B0%22,rarity:%22Rare%22,cash:[17e3,68e3,7e5,35e5,35e6],time:[2,2,1,1,1],price:[2e6,22e6,25e7,28e8]},{name:%22White%20Rabbit%22,color:%22#ffcd05%22,class:%22%F0%9F%8F%B0%22,rarity:%22Rare%22,cash:[26e3,105e3,11e6,77e5,72e6],time:[3,3,3,2,2],price:[2e6,23e6,28e7,29e8]},{name:%22Cheshire%20Cat%22,color:%22#dd7399%22,class:%22%F0%9F%8F%B0%22,rarity:%22Rare%22,cash:[32e3,1e5,9e5,9e6,6e7],time:[4,3,3,3,2],price:[18e5,19e6,22e7,24e8]},{name:%22Caterpillar%22,color:%22#00c0f3%22,class:%22%F0%9F%8F%B0%22,rarity:%22Epic%22,cash:[1e4,7e4,65e4,75e5,85e6],time:[1,1,1,1,1],price:[42e5,42e6,54e7,69e8]},{name:%22Mad%20Hatter%22,color:%22#914f93%22,class:%22%F0%9F%8F%B0%22,rarity:%22Epic%22,cash:[38e3,25e4,15e5,14e6,8e7],time:[3,3,2,2,1],price:[48e5,48e6,52e7,66e8]},{name:%22King%20of%20Hearts%22,color:%22#c62127%22,class:%22%F0%9F%8F%B0%22,rarity:%22Legendary%22,cash:[8e4,42e4,68e5,1e8,15e8],time:[5,5,5,5,5],price:[7e6,11e7,18e8,3e10]},{name:%22Earth%22,color:%22#416eb5%22,class:%22%F0%9F%9A%80%22,rarity:%22Uncommon%22,cash:[15e3,45e3,6e5,65e5,65e6],time:[3,3,3,3,3],price:[1e6,11e6,15e7,17e8]},{name:%22Meteor%22,color:%22#c68c3c%22,class:%22%F0%9F%9A%80%22,rarity:%22Uncommon%22,cash:[23e3,65e3,7e5,45e5,2e7],time:[5,4,3,2,1],price:[95e4,13e6,16e7,16e8]},{name:%22Stars%22,color:%22#19184d%22,class:%22%F0%9F%9A%80%22,rarity:%22Uncommon%22,cash:[1e4,4e4,2e5,2e6,18e6],time:[2,2,1,1,1],price:[14e5,14e6,15e7,15e8]},{name:%22Alien%22,color:%22#8dc63f%22,class:%22%F0%9F%9A%80%22,rarity:%22Uncommon%22,cash:[3e4,1e5,1e6,11e6,85e6],time:[4,4,4,4,4],price:[15e5,17e6,19e7,17e8]},{name:%22Planet%22,color:%22#9dc6ea%22,class:%22%F0%9F%9A%80%22,rarity:%22Rare%22,cash:[25e3,1e5,9e5,9e6,9e7],time:[3,3,3,3,3],price:[2e6,21e6,21e7,24e8]},{name:%22UFO%22,color:%22#a15095%22,class:%22%F0%9F%9A%80%22,rarity:%22Rare%22,cash:[17e3,7e4,7e5,7e6,7e7],time:[2,2,2,2,2],price:[21e5,23e6,25e7,28e8]},{name:%22Spaceship%22,color:%22#ffcb29%22,class:%22%F0%9F%9A%80%22,rarity:%22Epic%22,cash:[6e4,32e4,21e5,15e6,85e6],time:[5,4,3,2,1],price:[48e5,46e6,54e7,68e8]},{name:%22Astronaut%22,color:%22#9bd4ee%22,class:%22%F0%9F%9A%80%22,rarity:%22Legendary%22,cash:[45e3,26e4,25e5,38e6,55e7],time:[3,3,2,2,2],price:[65e5,1e8,17e8,27e9]},{name:%22Lil%20Bot%22,color:%22#3e564a%22,class:%22%F0%9F%A4%96%22,rarity:%22Uncommon%22,cash:[4e3,12e3,18e4,19e5,25e6],time:[1,1,1,1,1],price:[73e4,12e6,13e7,19e8]},{name:%22Lovely%20Bot%22,color:%22#f179af%22,class:%22%F0%9F%A4%96%22,rarity:%22Uncommon%22,cash:[16e3,65e3,65e4,48e5,42e6],time:[3,3,3,2,2],price:[13e5,14e6,17e7,16e8]},{name:%22Angry%20Bot%22,color:%22#f1613a%22,class:%22%F0%9F%A4%96%22,rarity:%22Uncommon%22,cash:[22e3,85e3,8e5,62e5,65e6],time:[4,4,4,3,3],price:[12e5,13e6,15e7,17e8]},{name:%22Happy%20Bot%22,color:%22#51ba6b%22,class:%22%F0%9F%A4%96%22,rarity:%22Uncommon%22,cash:[11e3,45e3,5e5,25e5,3e7],time:[2,2,2,1,1],price:[14e5,15e6,18e7,24e8]},{name:%22Watson%22,color:%22#d69b5a%22,class:%22%F0%9F%A4%96%22,rarity:%22Rare%22,cash:[24e3,1e5,1e6,1e7,1e8],time:[3,3,3,3,3],price:[2e6,22e6,24e7,26e8]},{name:%22Buddy%20Bot%22,color:%22#9dc6ea%22,class:%22%F0%9F%A4%96%22,rarity:%22Rare%22,cash:[22e3,95e3,65e4,65e5,65e6],time:[3,3,2,2,2],price:[19e5,21e6,23e7,25e8]},{name:%22Brainy%20Bot%22,color:%22#9ecf7a%22,class:%22%F0%9F%A4%96%22,rarity:%22Epic%22,cash:[5e4,25e4,21e5,21e6,17e7],time:[4,3,3,3,2],price:[5e6,46e6,5e8,67e8]},{name:%22Mega%20Bot%22,color:%22#d71f27%22,class:%22%F0%9F%A4%96%22,rarity:%22Legendary%22,cash:[8e4,43e4,42e5,62e6,1e9],time:[5,5,3,3,3],price:[7e6,12e7,19e8,35e9]}].find(function({name:e}){return%20e.toLowerCase()==this},prompt(%22Enter%20blook%20name:%22).toLowerCase());a?(10%3C=e.state.blooks.length&&alert(%22Choose%20a%20blook%20to%20replace%22),e.chooseBlook(a)):alert(%22That%20is%20not%20a%20valid%20blook!%22)})();
