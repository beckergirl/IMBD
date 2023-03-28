import {Movie} from "./Movie"


const fs = require("fs")



export class IMDB {
    public peliculas : Movie[];

    constructor(peliculas : Movie[]){

        this.peliculas = peliculas;
    }

    // // METODOS

    public escribirEnFicheroJSON(nuevaEntrada : string){    
        
        let stringnuevaEntrada = JSON.stringify(this);
        fs.writeFileSync(nuevaEntrada, stringnuevaEntrada)
    }

    public obtenerInstancialIMDB(nombreFichero : string) : IMDB{
        let newObjet = JSON.parse(fs.readFileSync(nombreFichero)); // // JSON.parse nos lo cambia a objeto
        return newObjet;
    }
    
} 