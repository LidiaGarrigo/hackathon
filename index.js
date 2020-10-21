function send(){
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let textarea = document.getElementById("textarea");
    if(name.value.trim() == ""){
    
        name.classList.add("aviso");
    }else{
    
        name.classList.remove("aviso");
    }
    if(email.value.trim() == ""){
    email.classList.add("aviso");
    
    }else{
    email.classList.remove("aviso");
    }
    if(textarea.value.trim() == ""){
    textarea.classList.add("aviso");
    
    }else{
    textarea.classList.remove("aviso");
    }
}

let object_boton = document.querySelector("button");
object_boton.addEventListener("click", boto_clickat);
function boto_clickat(evento) {
    evento.preventDefault();
    window.alert("¡Mensaje enviado!")
}