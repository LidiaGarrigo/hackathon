function send(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let textarea = document.getElementById("textarea");
    if(name.value.trim() == ""){
    
        name.classList.add("warning");
    }else{
    
        name.classList.remove("warning");
    }
    if(email.value.trim() == ""){
    email.classList.add("warning");
    
    }else{
    email.classList.remove("warning");
    }
    if(textarea.value.trim() == ""){
    textarea.classList.add("warning");
    
    }else{
    textarea.classList.remove("warning");
    }
}