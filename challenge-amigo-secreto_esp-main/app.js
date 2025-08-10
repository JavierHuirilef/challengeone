// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = document.getElementById('amigo');
let listaDeAmigos = [];
let ullistaDeAmigos = document.getElementById('listaAmigos');

function agregarAmigo(){
    let nombreAmigo = amigo.value;
    if(nombreAmigo === ''){
        alert("El campo nombre está vacío, porfavor ingresa un nombre");
        return;
    }else if(!isNaN(nombreAmigo)){
        alert("Debes ingresar un nombre válido (sólo letras)");
        return;
    }else if (listaDeAmigos.includes(nombreAmigo)) { 
        alert("Este nombre ya ha sido ingresado");
        return;
    } else{
        listaDeAmigos.push(nombreAmigo);//agrega amigo a la lista
        ulListaDeAmigos.innerHTML = ulListaDeAmigos.innerHTML + <li>${nombreAmigo}</li>;
        limpiarCampoNombre();
    }   
};






