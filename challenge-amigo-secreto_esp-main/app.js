// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = document.getElementById('amigo');
let listaDeAmigos = [];
let ulListaDeAmigos = document.getElementById('listaAmigos');//mostrar lista de amigos en etiqueta ul

function agregarAmigo(){
    let nombreAmigo = amigo.value;
    if(nombreAmigo === ''){
        alert("-debe ingresar un nombre a la lista");
        return;
    }else if(!isNaN(nombreAmigo)){
        alert("El valor ingresado es incorrecto, favor intente de nuevo");
        return;
    }else if (listaDeAmigos.includes(nombreAmigo)) { 
        alert("Valor duplicado, intente otra vez");
        return;
    } else{
        listaDeAmigos.push(nombreAmigo);//agrega amigo a la lista
        ulListaDeAmigos.innerHTML = ulListaDeAmigos.innerHTML + <li>${nombreAmigo}</li>;
        limpiarCampoNombre();
    }   
};
function sortearAmigo(){
    if(listaDeAmigos.length=== 0){
        alert("La lista debe contener nombres");
        return;
    }else if(listaDeAmigos.length < 2) {
        alert("cantidad de participantes inferior al minimo (2 o más para continuar)");
        return;
    } {
        let posicionAleatoria = Math.floor(Math.random()*listaDeAmigos.length);
        let amigoSorteado = listaDeAmigos[posicionAleatoria];
        alert(El amigo secreto sorteado es ${amigoSorteado});
        limpiarLista();
        return;
    };
    }








