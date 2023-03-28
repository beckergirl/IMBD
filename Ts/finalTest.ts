// Crear un nuevo fichero finaltest.ts que solicite por pantalla cada uno de las propiedades
// de la clase Profesional e inserte un nuevo profesional a una película del fichero
// “imdbBBDD.json”

import {Professional} from "./professional";
import { IMDB } from "./imdb";

const fs = require("fs")

let readlineSync = require("readline-sync") // // creamos una variable para el comando readline-sync


const professional = "professional.ts";


let datos = fs.readFileSync(professional, "utf8");

// console.log(datos);


let imdb:IMDB = JSON.parse(fs.readFileSync("./imdbBBDD.json","utf8"));    // // creamos una variable, en la primera parte JSON.parse, convierte un objeto JSON con formato string en un objeto literal, 
let name:string = readlineSync.question("Escribe el nombre del profesional"); // creamos una variable por cada atributo que tiene el objeto y en ella usando 
let age:number = parseInt(readlineSync.question("Escribe la edad del profesional"));
let weight:number = parseInt(readlineSync.question("Escribe el peso en kg. del profesional"));
let height:number = parseInt(readlineSync.question("Escribe la altura en cm. del profesional"));
let isRetired:boolean = readlineSync.question("¿Está el profesional actualmente retirado?");
let nationality:string = readlineSync.question("Escribe la nacionalidad del profesional");
let oscarsNumbers:number = parseInt(readlineSync.question("¿Cuántos premios Oscar tiene el profesional?"));
let profession:string = readlineSync.question("Escribe la profesión del profesional");

let newProfessional:Professional = new Professional(name,age,weight,height,
    isRetired,nationality,oscarsNumbers,profession);

if (isRetired.toString() == "false"){
    isRetired = true;
} else {
    isRetired = false;
}

imdb.peliculas[0].actors.push(newProfessional);
console.log(imdb.peliculas[0]);


