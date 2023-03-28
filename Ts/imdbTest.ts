import { IMDB } from "./imdb";
import {Professional} from "./professional";
import { CoffeeAndCigarettes, TheDarjeelingLimited, TheLifeAquatic, TheRoyalTenenbaums } from "./movieTest";


let imdb = new IMDB([TheLifeAquatic, TheRoyalTenenbaums, TheDarjeelingLimited, CoffeeAndCigarettes ]);
// let AdrienBrody = new Professional("Adrien Brody", 49, 80, 185, false, "estadounidense", 1, "actor");
// console.log(imdb);

export let stringify = JSON.stringify(imdb);  // // Transforma el archivo imdb en string.


const fs = require("fs")  // // importacion del modulo "fs"

// fs.writeFileSync("./imdbBBDD.json", stringify) // // Ponemos el nombre del archivo que vamos a crear y despues lo que vamos a meter en dicho archivo, luego compilamos y en consola iniciamos el imdbTest.js para que nos cree el archivo .json.


// fs.readFileSync("./imdbBBDD.json");




imdb.escribirEnFicheroJSON("./iiiiiii.json"); // // nos va a introducir los datos de un objeto "IMDB" en el fichero que le indiquemos por parametro, si no existe, creara uno nuevo.


console.log(imdb.obtenerInstancialIMDB("./iiiiiii.json")); // // nos devuelve un objeto IMDB desde el fichero que le indiquemos por parametro.



