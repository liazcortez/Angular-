"use strict";
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//clase 25 decoradores de clase
function consola(constructor) {
    console.log(constructor);
}
var villano = /** @class */ (function () {
    function villano(nombre) {
        this.nombre = nombre;
    }
    villano = __decorate([
        consola
    ], villano);
    return villano;
}());
