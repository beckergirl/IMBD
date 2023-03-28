"use strict";
exports.__esModule = true;
exports.Movie = void 0;
var Movie = /** @class */ (function () {
    function Movie(titulo, año, nacionalidad, genero) {
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
    return Movie;
}());
exports.Movie = Movie;
