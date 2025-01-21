/*let amigos = [];
let lista = document.getElementById('listaAmigos');


function agregarAmigo() {
    let input = document.querySelector('#amigo').value;

    if(input == ""){
        alert("Este campo no puede estar vácio!")
    }else{
        let li = document.createElement('li');
        li.innerText = input;
        lista.appendChild(li);
        amigos.push(input);
        
        console.log(amigos)
    }
   
}*/

/*let amigos = [];
let lista = document.getElementById('listaAmigos');

function agregarAmigo() {
    let inputElement = document.querySelector('#amigo');
    let input = inputElement.value;

    if (input === "") {
        alert("Este campo no puede estar vacío!");
    } else {
        let li = document.createElement('li');
        li.innerText = input;
        lista.appendChild(li);
        amigos.push(input);
        
        console.log(amigos);

        // Vaciar el campo de entrada
        inputElement.value = "";
    }
}*/

// Lista de amigos y referencia al elemento de la lista
const amigos = [];
const lista = document.getElementById('listaAmigos');

// Función para agregar un amigo
function agregarAmigo() {
    const inputElement = document.querySelector('#amigo');
    const input = inputElement.value.trim(); // Elimina espacios innecesarios

    // Validar entrada vacía
    if (!input) {
        alert("Este campo no puede estar vacío!");
        return; // Detener la ejecución
    }

    // Crear y agregar un nuevo elemento de lista
    const li = document.createElement('li');
    li.textContent = input; // Mejor práctica: usar textContent
    lista.appendChild(li);

    // Agregar el amigo al array
    amigos.push(input);
    console.log(amigos);

    // Limpiar el campo de entrada
    inputElement.value = "";
}