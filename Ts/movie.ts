import {Professional} from "./professional"

export class Movie{

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public nisMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

constructor(titulo:string,año: number,nacionalidad: string,genero: string){

     this.title = titulo;
     this.releaseYear = año;
     this.actors;
     this.nacionality = nacionalidad;
     this.director;
     this.writer;
     this.language;
     this.plataforma;
     this.nisMCU;
     this.mainCharacterName;
     this.producer;
     this.distributor;
     this.genre = genero;
}
}