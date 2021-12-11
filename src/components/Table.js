import React from 'react'
import Movie from './Movie'

const peliculas = [
    {
        title : "Billy Elliot",
        duration : 123,
        rating : 5,
        genre : ["Drama","Comedia"],
        awards : 2,
    },
    {
        title : "Alicia en el pais de las maravillas",
        duration : 142,
        rating : 4.8,
        genre : ["Drama","Accion","Comedia"],
        awards : 3,
    },
    {
        title : "La Guerra de las galaxias: Episodio VI",
        duration : 180,
        rating : 9,
        genre : ["Ciencia Ficción"],
        awards : 6,
    }
]

const Table = ()=>{
    return  (
    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">Titulo</th>
                <th scope="col">Duración</th>
                <th scope="col">Rating</th>
                <th scope="col">Género</th>
                <th scope="col">Premios</th>
            </tr>
        </thead>
        <tbody>
            {
                peliculas.map((pelicula,i)=> < Movie title={pelicula.title} 
                    duration={pelicula.duration} 
                    rating={pelicula.rating}
                    genre={pelicula.genre.map(genre => <li>{genre}</li>)}
                    awards={pelicula.awards}/>)
            }
        </tbody>
    </table>
    )
}

export default Table