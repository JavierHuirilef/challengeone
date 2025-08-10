// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = document.getElementById('amigo');
let listaDeAmigos = [];
let ullistaDeAmigos = document.getElementById('listaAmigos');

function agregarAmigo() {
    let nombreAmigo = amigo.value;
    if (nombreAmigo === '') {
        alert("Favor indicar Nombre para continuar");
        return;
    } else if (!isNaN(nombreAmigo)) { // Nueva verificación
        alert("Indique un valor correcto (sólo texto)");
        return;
    } else {
        listaDeAmigos.push(nombreAmigo); // agrega amigo a la lista
        ullistaDeAmigos.innerHTML = ullistaDeAmigos.innerHTML + `<li>${nombreAmigo}</li>`;
    }
};




