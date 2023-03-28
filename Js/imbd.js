
class Movie {

    constructor(title, releaseYear, image, nationality, genre, director, language, plataforma, isMCU, mainCharacterName, producer, distributor) {


        this.title = title;

        this.releaseYear = releaseYear;

        this.image = image;

        this.nationality = nationality;

        this.director = director;

        this.language = language;

        this.plataforma = plataforma;

        this.isMCU = isMCU;

        this.mainCharacterName = mainCharacterName;

        this.producer = producer;

        this.distributor = distributor;

        this.genre = genre;

    }

    movieData() {

        console.log(this);

    }

}

/* películas */

let TheLifeAquatic = new Movie("The Life Aquatic with Steve Zissou", 2004,"../img/lifeAcuatic.png", "Estados Unidos", "comedia, aventuras", "Wes Anderson", "Inglés", "Disney+", "NO", "Steve Zissou", "Wes Anderson, Barry Mendel and Scot Rudi", "Buena Vista Pictures");

let TheRoyalTenenbaums = new Movie("The Royal Tenenbaums", 2001,"../img/The_Tenenbaums.jpg", "Estados Unidos", "comedia", "Wes Anderson", "Inglés", "Prime Video", "NO","Royal Tenenbaum", "Wes Anderson, Barry mendel and Scott Rudin", "Buena Vista Pictures");

let TheDarjeelingLimited = new Movie("The Darjeeling Limited", 2007,"../img/TheDarjeelingLimited.jpg" , "Estados Unidos", "comedia, aventuras, drama", "Wes Anderson", "Inglés", "Prime Video", "NO", "Hermanos Whitman", "Wes Anderson and Alice Bamford", "Walt Disney Studios");

let CoffeeAndCigarettes = new Movie("Coffee and Cigarettes", 2003, "../img/001.jpg", "United States, Japan, Italy", "comedia, drama, independiente", "Jim Jarmusch", "Inglés", "Disney+", "NO", "Cate, Shelly", "Wes Anderson and Barry Mendel", "Buena Vista Pictures");


let movies = [ TheLifeAquatic, TheRoyalTenenbaums, TheDarjeelingLimited, CoffeeAndCigarettes ];



/* funcion tarjetas peliculas IMBD */


function ficha(){

    console.log(movies);

    document.getElementById("movies").innerHTML= '';

    movies.forEach(function (movie){

        document.getElementById("movies").innerHTML += `

       <div class="card" style="width: 20rem;">

             <img src="${movie.image}" class="card-img-top" alt="...">

             <div class="card-body">

             <h4 class="card-title">${movie.title}</h4>

             <p class="card-text"><b>Director:</b>${movie.director}</p>

             <p class="card-text"><b>Año:</b>${movie.releaseYear}</p>

             <p class="card-text"><b>Género:</b>${movie.genre}</p>

             <p class="card-text"><b>Nacionalidad:</b>${movie.nationality}</p>

             <p class="card-text"><b>Idioma:</b>${movie.language}</p>

             <p class="card-text"><b>Productor:</b>${movie.producer}</p>

             <p class="card-text"><b>Plataforma:</b> ${movie.plataforma}</p>

           </div>
         </div>
                   `

    })

}

window.onload = (event) => {

    ficha();

}


function introducirPelicula(){

    let image = document.getElementById("image").value;

    let title = document.getElementById("title").value;

    let director = document.getElementById("director").value;

    let releaseYear = document.getElementById("releaseYear").value;

    let genre = document.getElementById("genre").value;

    let nationality = document.getElementById("nationality").value;

    let language = document.getElementById("language").value;

    let producer = document.getElementById("producer").value;

    let plataforma = document.getElementById("plataforma").value;



    let pelicula = { image, title, director, releaseYear, genre, nationality, language, producer, plataforma};

    movies.push(pelicula);

    ficha();

}

