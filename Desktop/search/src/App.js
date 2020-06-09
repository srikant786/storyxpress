import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form"
import Movies from "./components/Movies"

const api_key="f21ff994df621c11fc821aa018921e03";

class App extends Component {
  state={
    movies:[],
    url:""
    
  }
  getImage=async(e)=>{
    const imageName=e.target.elements.imageName.value;
    e.preventDefault();
    const api_call=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${imageName}&page=1&include_adult=false`);
   
    const Data=await api_call.json();
    this.setState({movies:Data.results,
    url:"https://image.tmdb.org/t/p/w500"})
    console.log(this.state.movies);
 
  }
    
  
  render(){
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Movies Search</h1>
        </header>
        <Form getImage={this.getImage}/>
        
        
        <Movies movies={this.state.movies} url={this.state.url}/>
        

      
      </div>
    )
  }
}

export default App;