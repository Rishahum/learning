import React, {Component} from 'react'
import { movies } from './getMovies'
import axios from 'axios'
//import { API_KEY } from './secret'
export default class list extends Component{
  constructor(){
    super();
   this.state={
    hoverr:"",
    currPage:4,
    movies:[]
   }
    
   
    
  }
  handleEnter = (id) => {
    this.setState({
      hoverr: id,
    });
  };

  handleLeave = () => {
    this.setState({
      hoverr: "",
    });
  };
  async componentDidMount(){
    console.log("component is called");
    //console.log(API_KEY);
    // let res=await axios.get("https://api.themoviedb.org/3/movie/550?api_key=5e74cc2ecfc48d2dadfb3568b68d8265")
    let ans = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5e74cc2ecfc48d2dadfb3568b68d8265&language=en-US&page=${this.state.currPage}`
    );
    console.log(ans.data);
    this.setState({
      movies:[...ans.data.results]
    })
  }


    render(){
      //let movie=movies.results;
        return(
            <> 
            {/* <></> we can only use this in react not in html babbel */}
          {this.state.movies.length==0?(
            <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          ):( <div className='text-center'><strong>Trending</strong></div>)}
          <div className='movie-list'>
          {this.state.movies.map((mapObj)=> (
            //  <div className="card movie-card" 
            //   onMouseEnter={()=>this.handleEnter(movie.id)}
            //   onMouseLeave={
            //     ()=>this.handleExit()
            //   }
            //   >
                <div
                  className="card movie-card"
                  onMouseEnter={() => this.handleEnter(mapObj.id)}
                  onMouseLeave={this.handleLeave}
                >
             <img src={`https://image.tmdb.org/t/p/original${mapObj.backdrop_path}`} className="card-img-top banner-img" alt="..."
             style={{height:"40vh", width:"20vw"}}/>
             <div className="movie-body">
               <h5 className="movie-title">{mapObj.original_title}</h5>
               {/* <p className="card-text">"Some quick example text to build on the card title and make up the bulk of the card's content" {mapObj.overview}.</p> */}
                 <div className="button-wrapper">
                   {this.state.hoverr == mapObj.id && <a href="#" className="btn btn-primary movie-button">Add to Favrouites</a> 
                 } 
                 </div> 
                 
                  
             </div>
           </div>
          
          ))}
          </div>
          
          <nav aria-label="...">
  <ul class="pagination">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active" aria-current="page">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
            </>
           
        )
    }
}