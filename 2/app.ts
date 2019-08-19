interface xmen{
    nombre:string
 
}



function enviar(xmen:xmen){
console.log(xmen.nombre);

}


let wolverine = {
    nombre:"logan",
    poder:'nada'
};


enviar(wolverine);