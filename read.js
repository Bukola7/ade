function validate3(){
    let input1= document.getElementById("bukky").value;
    let tunji =/^[a-zA-Z]+$/;
    let error22= document.querySelector("#kemi");
 
    if(input1.match(tunji)){
       error22.innerHTML="correct input";
       return true;
    }
 
    else{
       error22.innerHTML="no, you are wrong";
       document.getElementById("bukky").focus();
       return false;
       }
     }