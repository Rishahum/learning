import React, {Component} from "react"
 export default class Navbar extends Component{
    render(){
       return(
        <div style={{justifyContent:"left", backgroundColor:"white", padding:"2 rem",margin:"10 rem",
        display:"flex", color:"blue" }}>
            <h1>Movies</h1>
            <h2 style={{marginLeft:"2rem", marginTop:"0.5rem"}}>Favrouites</h2>
            {/* movies p click krke all movies p paunch jayenge usse routing kehte hai */}
            
            
        </div>
       )
    }
 }