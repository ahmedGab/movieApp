import React, { Component } from 'react'

import { Switch, Route, Link } from 'react-router-dom'

import './App.css';
import Navbar from './component/navbar'
import Carousel from './component/caroussel'
import Scrolingmovies from './component/scroling-movies'
import Listfavoris from'./component/listfavoris'
import Desc from './component/desc'

import Homes from './component/home'

let films=[]
let filmsDesc=[]



export default class App extends Component {

addMovieinfavoris=(e)=>{
films.push(e)
console.log(e.index)
console.log(films)
  
}
descMovies=(e)=>{
  filmsDesc.splice(0, 1, e);
}
  render() {
    return (
      <div>
        
    <Switch>
    <Route exact path='/'> 
    < Navbar />
    < Carousel />
    <Scrolingmovies  addMovieinfavoris={this.addMovieinfavoris} descMovies={this.descMovies}/>

    </Route>
    
      <Route path="/favoris" exact render={(props) => ( <Listfavoris  films={films} />)} />
      <Route path="/desc" exact render={(props) => ( <Desc  filmsDesc={filmsDesc} />)} />
     
      </Switch>
    </div>
  );
    
  }
}
