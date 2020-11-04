let addButton = document.getElementById('addButton');
let keywordElement = document.getElementById('keyword');
let valElement = document.getElementById('value');


addButton.addEventListener('click', function () {
    let loc = localStorage.getItem(keywordElement.value);
    localStorage.setItem(keywordElement.value, valElement.value);
    
    if(loc != valElement.value){
       console.log("Han introducido un valor nuevo");
    }
});

