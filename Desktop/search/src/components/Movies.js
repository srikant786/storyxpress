import React from 'react'
import { Button,Card } from 'react-bootstrap';


 const Movies=(props)=> {
    return (
    
    <div className="container">
    <div className="row">
    {props.movies.map((movie)=>{
        return(
            <div className="col-md-4">
              <Card style={{ width: '18rem' }}>
            <Card.Img variant="top"  src={movie.poster_path && `${props.url}${movie.poster_path}`} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
            
        <Button variant="primary">overview</Button>
            </Card.Body>
  
            </Card>
            </div>
            
            

        )
        
        })}
            
       </div>

        </div>
 
 
 
 
 
 
 
 
 )
}
export default Movies;


