 `use strict`
 

function validatey(){
    const tunde =/^[a-zA-Z]+$/ ;
    const kemi = /^[0-9]+$/ ;

    if(!document.form2.joy.value.match(tunde)){
      document.querySelector('#job').innerHTML = "please your name must be in alphabetic";
      document.querySelector('#job').style.color ="blue";
        document.form2.joy.focus();
        return false;
    }

    if(!document.form2.ade.value.match(kemi)){
        
        document.querySelector('#olu').innerHTML = "please in numeric";
        document.querySelector('#olu').style.color = "red";
        document.form2.ade.focus();
        return false;
    }
    else{
            
        return true;
    }
    
}