let fname = document.getElementById("fname");
let mail = document.getElementById("mail");
let mailformat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let form = document.getElementById("try");

form.addEventListener("submit", function (y) {
    y.preventDefault();
    let isValid = true;
    if(!fname.value){
        document.querySelector("#nameerror").textContent="its can non be empty";
        isValid = false;
    }
    else{
       fname.textContent ="";
    }
    if(!mail.value){
        mailerror.textContent=("mailerror").textContent="it must not be empty";
        isValid = false;
    }
    else if(!mail.value.match(mailformat)){
        mailerror.textContent=("#mailerror").textContent="it must have 6 character";
        isValid = false;
    }
    else{
        mail.textContent="";
    }
    
    if(isValid){
        form.submit();
    }
})