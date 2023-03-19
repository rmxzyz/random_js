//bookmarklet
function r1010(e){let t=e,a=prompt("What should this do {get | set | remove}");if("1"==a|"get"==a|"get value"==a|"gt"==a|"one"==a|"get |"==a|"ge"==a){var o=prompt("What value?"),u=localStorage.getItem(o);if(!u){var l=prompt("Not a valid input, do you want to create it (yes | no)");"yes"==l|"true"==l|"1"==l&&localStorage.setItem(o,prompt("What value?")),"no"==l|"false"==l|"2"==l|"0"==l|"No"==l&&r1010(t)}u&&alert("The value of "+o+" is "+u)}if("2"==a|"set"==a|"set value"==a|"st"==a|"two"==a|"Set"==a|"se"==a){var o=prompt("What value?"),u=localStorage.getItem(o);if(!u){var l=prompt("Not a valid input, do you want to create it (yes | no)");"yes"==l|"true"==l|"1"==l&&localStorage.setItem(o,prompt("What value?")),"no"==l|"false"==l|"2"==l|"0"==l|"No"==l&&r1010(t)}if(u){var r=prompt("What value would you like "+o+" to be?");localStorage.setItem(o,r)}}if("3"==a|"delete"==a|"del"==a|"delete value"==a|"remove"==a|"rem"==a|"Delete"==a){var o=prompt("What value?"),u=t.getItem(o);if(!u){var l=prompt("Not a valid input, do you want to create it (yes | no)");"yes"==l|"true"==l|"1"==l&&t.setItem(o,prompt("What value?")),"no"==l|"false"==l|"2"==l|"0"==l|"No"==l&&r1010(t)}if(u){var r=prompt("Do you want to delete "+o+" ?");"yes"==r|"1"==r|"ye"==r|"true"==r|"yea"==r|"yeah"==r|"sure"==r?t.removeItem(o):r1010(t)}}}r1010(localStorage);













//regular
function r1010(ls) {
const storage = ls
const e1 = prompt("What should this do {get | set | remove}")
if (e1 == '1' | e1 == 'get' | e1 == 'get value' | e1 == 'gt' | e1 == 'one' | e1 == 'get |' | e1 == 'ge') {
    var val = prompt("What value?")
    var output = localStorage.getItem(val);
    if(!output) {
        var ip101  = prompt("Not a valid input, do you want to create it (yes | no)") 
        if(ip101 == 'yes' | ip101 == 'true' | ip101 == '1') {
            localStorage.setItem(val, prompt("What value?"))
        }
        if(ip101 == 'no' | ip101 == 'false' | ip101 == '2' | ip101 == '0' | ip101 == 'No') {
            //extra values
            r1010(storage)
        }
    
        
    } 
    if(output) {
        var res = 'The value of '+val+' is '+output
        alert(res)
    }
}
if(e1 == '2' | e1 == 'set' | e1 == 'set value' | e1 == 'st' | e1 == 'two' | e1 == 'Set' | e1 == 'se') {
    var val = prompt("What value?")
    var output = localStorage.getItem(val);
    if(!output) {
        var ip101  = prompt("Not a valid input, do you want to create it (yes | no)") 
        if(ip101 == 'yes' | ip101 == 'true' | ip101 == '1') {
            localStorage.setItem(val, prompt("What value?"))
        }
        if(ip101 == 'no' | ip101 == 'false' | ip101 == '2' | ip101 == '0' | ip101 == 'No') {
            //extra values
            r1010(storage)
        }
    }
    if(output) {
        var del = prompt("What value would you like "+val+" to be?") 
        //if(del == "yes" | del =="1" | del == "ye" | del == "true" | del == "yea" | del == "yeah" | del == "sure") {           
        //}
        localStorage.setItem(val, del);

    } 
}
if(e1 == '3' | e1 == 'delete' | e1 == 'del' | e1 == 'delete value' | e1 == 'remove' | e1 == 'rem' | e1 == 'Delete') {
    var val = prompt("What value?")
    var output = storage.getItem(val);
    if(!output) {
        var ip101  = prompt("Not a valid input, do you want to create it (yes | no)") 
        if(ip101 == 'yes' | ip101 == 'true' | ip101 == '1') {
            storage.setItem(val, prompt("What value?"))
        }
        if(ip101 == 'no' | ip101 == 'false' | ip101 == '2' | ip101 == '0' | ip101 == 'No') {
            //extra values
            r1010(storage)
        }
    }
    if(output) {
        var del = prompt("Do you want to delete "+val+" ?") 
        if(del == "yes" | del =="1" | del == "ye" | del == "true" | del == "yea" | del == "yeah" | del == "sure") {        
            storage.removeItem(val)   
        } else {
            r1010(storage)
        }
        

    }   
}
}
r1010(localStorage);
