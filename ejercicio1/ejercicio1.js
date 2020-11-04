let interval = window.setInterval(myFunction,1500);
let rand=Math.floor(Math.random()*9)+1;
let anterior = document.getElementById(rand);
anterior.classList.add("target");
anterior.addEventListener('click',onclicked);


function myFunction(){

    anterior.classList.remove("target");
    let rand=Math.floor(Math.random()*9)+1;
    let container = document.getElementById(rand);
    container.addEventListener('click',onclicked);
    anterior=container;
    container.classList.add("target");

}
function onclicked(){
    window.alert("Has Ganado");
    clearInterval(interval);
}