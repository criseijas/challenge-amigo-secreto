// Lista de amigos, referencia al elemento ul de la lista y referencia la otro ul para el amigo sorteado
const amigos = [];
const lista = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo() {
    const inputElement = document.querySelector('#amigo');
    const input = inputElement.value.trim().toLowerCase(); // el metodo trim() sirve para eliminar espacios innecesarios

    if (!input) {
        alert("Este campo no puede estar vacío!");
        return;
    }

    if (amigos.includes(input)) { // Verificar si el nombre ya está en el arreglo
        alert(`El amigo "${input}" ya está en la lista.`);
        return;
    }


    // Agregar amigo al arreglo
    amigos.push(input);
    console.log(amigos)
    // Actualizar la lista en el DOM
    mostrarLista();
    console.log(amigos)
    // Limpiar el campo de entrada
    inputElement.value = "";
}

function mostrarLista() {
    lista.innerHTML = ""; // Limpiar lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li'); // Crear elemento <li>
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Agrega al menos uno.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el elemento con id 'resultado'
    resultado.innerHTML = `<strong>Amigo sorteado:</strong> ${amigoSorteado}`;
}