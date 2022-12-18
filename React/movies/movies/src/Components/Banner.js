import React,{ Component } from 'react'
import { movies } from './getMovies'
export default class Banner extends Component{
    render(){ 
       let movie=movies.results[0];
      // let movie="";
        return(
            <>
             {movie=="" ?(
              <div className="banner spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
            ):(
              <div className="card banner" >
  <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="card-img-top banner-img" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{movie.original_title}</h5>
    <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content" {movies.results[0].overview}.</p>
    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
  </div>
</div>
)
            }                     
        
        </>
         
          
        )
    }
}