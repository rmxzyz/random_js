function setMailCount(msgs) {document.body.querySelector('span.sa-editormessages-count').innerHTML = msgs}; var a = prompt("Last restored. Set it?"); if(a == true | a == 'yes' | a == "True" | a == 'Yes') {
  var amount = new Number(prompt("Amount")); 
  localStorage.setItem('fake-msg', amount);
  setInterval(setMailCount, amount);
} else {
  var ex = localStorage.getItem('fake-msg')
  if(!ex) {var amount = new Number("Set the amount ( the item has not been defined yet.)")
  localStorage.setItem('fake-msg', amount)
  
  }
  setInterval(setMailCount, ex)
}
