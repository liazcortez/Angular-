/*class avenger{
    nombre:string = 'Antman';
    equipo:string=undefined;
    nombrereal:string=undefined;
        
    puedepelear:boolean=false;
    peleasganadas:number=0;


constructor(nombre:string,equipo:string,nombrereal:string){
   this.nombre=nombre;
   this.equipo=equipo;

   this.nombrereal=nombrereal;
   
    
}
}


let antman = new avenger('alex','alliance','alejandro');

console.log(antman);
*/


//clase 25 decoradores de clase

function consola(constructor:Function){
    console.log(constructor);
    
}
@consola
class villano{



    constructor( public nombre:string){

    }
}
