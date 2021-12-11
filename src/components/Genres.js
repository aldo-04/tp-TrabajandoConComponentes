import React from 'react'

const genres = ["Acción","Animación","Aventura","Ciencia Ficción","Comedia","Documental","Drama","Fantasia","Infantiles","Musical"]

import Genre from './Genre'

function Genres(){
    return(
                        <div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Genres in Data Base</h5>
								</div>
								<div className="card-body">
									<div className="row">

										{genres.map((genre,i)=> <Genre key={genre+i} genre = {genre} />)}
										
									</div>
								</div>
							</div>
						</div>
    )
}

export default Genres