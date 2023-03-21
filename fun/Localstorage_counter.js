//Add
var currentNum = localStorage.getItem('counter1a'); if(!currentNum) {localStorage.setItem('counter1a', 1)} else {localStorage.setItem('counter1a', new Number(currentNum ) + 1); alert(localStorage.getItem('counter1a')); }

//Subtract
var currentNum = localStorage.getItem('counter1a'); if(!currentNum) {localStorage.setItem('counter1a', 1)} else {localStorage.setItem('counter1a', new Number(currentNum ) - 1); alert(localStorage.getItem('counter1a')); }

//Reset
localStorage.setItem('counter1a', 0)

//Set
var currentNum = localStorage.getItem('counter1a'); if(!currentNum) {localStorage.setItem('counter1a', new Number(prompt("Custom value")))} else {localStorage.setItem('counter1a', new Number(prompt("Custom value"))); alert(localStorage.getItem('counter1a')); }


//A counter that saves accross localStorage on the website. Idk, this was a test for localStorage.
