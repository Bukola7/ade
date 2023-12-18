`use strict`

function vali(){
    var firstn = /^[a-zA-Z]+$/ ;
 var mynum = /^[0-9]+$/ ;
if(!document.myform.firstname.value.match(firstn)){
    alert("please provide your name");
    document.myform.firstname.focus();
    
    return false;
}
if(!document.myform.number1.value.match(mynum)){
    alert("please enter number");
    document.myform.number.focus();
    
    return false;
}
else{
    return true;
}
}