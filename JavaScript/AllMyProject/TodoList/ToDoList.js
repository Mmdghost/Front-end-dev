var addtoDoButton = document.getElementById('addToDo');
var toDoContainer = document.getElementById('todocontainer');
var inputField = document.getElementById('inputField');

addtoDoButton.onclick = function (){
    if (inputField.value != ""){
        var paragraphe = document.createElement('p');
    }
      paragraphe.innerText = inputField.value;

    paragraphe.classList.add('para');

    toDoContainer.appendChild(paragraphe);

    inputField.value = "";

    // barre le paragraphe when click on it

    paragraphe.addEventListener('click', function() {
      paragraphe.classList.add('para_click');
    })
}