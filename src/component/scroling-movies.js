import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import Carousel from 'react-multi-carousel';
import Update from './update'
import 'react-multi-carousel/lib/styles.css';
import SearchBar from './search'
import i0 from './images/add-logo.jpg'
import i1 from './images/2.jpg'
import i2 from './images/3.jpg'
import i3 from './images/10.jpg'
import i4 from './images/12.jpg'
import i5 from './images/13.jpg'
import i6 from './images/7.jpg'
import i7 from './images/14.jpg'
import Search from './search'
import Add from './addfilm'
import Remove from './removefilm'
const listmovies = [{ index:0,img: i1, nom: "john wick", rate: "****",desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos."}, { index:1,img: i2, nom: "spider-man", rate: "**" ,desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos."}, {index:2, img: i3, nom: "joker", rate: "*****" ,desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos."}, {index:3, img: i4, nom: "the ullisionist", rate: "****",desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos." }, { index:4,img: i5, nom: "bad boys", rate: "***",desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos." }, {index:5, img: i6, nom: "transformerss 5", rate: "*",desc:"Keanu Reeves reprises his role as the eponymous hitman in this third instalment of the action franchise. After killing a fellow assassin on the grounds of the Continental Hotel, John Wick is declared excommunicado from the league of assassins and a 14-million-dollar bounty is placed on his head. Immediately targeted by every assassin in New York, he is forced to flee the city and seeks refuge with former mentor The Director (Anjelica Huston) before going in search of the head of the High Table to overturn his exiled status. The cast also includes Halle Berry, Laurence Fishburne, Ian McShane and Mark Dacascos." }]

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
    slidesToSlide: 1// optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};



class Movies extends React.Component {
  constructor(props) {
    super(props);
this.state={
  c:"",
moviesSearched:listmovies,
Id:"",
name:"",
lien:"",
desc:"",
rate:"",
a:"ee",
rateStars:[1,2,3,4,5],
Nom:"",
Lien:"",
Desc:"",
Rate:"",
movies:[]
}
}

handleChange=(e)=>{
  if(e.target.value !==""){
    this.setState({moviesSearched:listmovies.filter(el=>el.nom.includes(e.target.value))})
  }
    else if(e.target.value ===""){
      this.setState({moviesSearched:listmovies})
    }
  

  }

  inputChangeName=(e)=>{
    if((/^[a-z]{0,15}$/gi).test(e.target.value)){
      this.setState({name:e.target.value})
      //Object.assign(this.state.movie, { name: e.target.value })
    }
    console.log(e.target.value)
    }

inputChangeImg=(e)=>{
 
    this.setState({lien:e.target.value})
   // Object.assign(this.state.movie, { lien: newRate })
    console.log(this.state.lien)

    }
    inputChangeDesc=(e)=>{
 
      //this.setState({desc:e.target.value})
     // Object.assign(this.state.movie, { desc: e.target.value})
      console.log(this.state.desc)
  
      }

inputChangeRate=(e)=>{
  if((/^\*{0,5}$/g).test(e.target.value)){
 this.setState({rate:e.target.value})
 // Object.assign(this.state.movie, { rate: e.target.value })
  }
  else{
    this.setState({rate:""})
  }
}
inputChangeId=(e)=>{
 // Object.assign(this.state.addmoviearray, { Id: e.target.value })
  this.setState({Id:e.target.value})


}
 addMovie=(el)=>{
  this.setState({movieSearched:this.state.moviesSearched.unshift({index:parseInt(this.state.Id),img: this.state.lien, nom: this.state.name,desc:this.state.desc,rate: this.state.rate})})
   
  
  console.log(this.state.moviesSearched.index)
  
   }
   /*
   handleEdit = e => {
    const m = this.state.movieSearched.find(el=>{
      if (el === e) {
        return emp;
      }
    }
    )
    this.setState({
      firstname: employee.firstname,
      lastname: employee.lastname,
      id: employee.id,
      create: false
    });
  };
  */
 
   updateMovie=(e)=>{
    
    listmovies.splice(e.index,1,{img: this.state.Lien, nom: this.state.Nom,desc:this.state.Desc, rate: this.state.Rate})
    this.setState({moviesSearched:listmovies})
   }

    /*
    const a=this.state.moviesSearched.splice(e,1,{img: this.state.Lien, nom: this.state.Nom,desc:this.state.Desc, rate: this.state.Rate})

    this.setState({moviesSearched:a})
     
      console.log(a)
   }
   */
  editMovie=(e)=>{
    const a=this.state.moviesSearched.splice(e,1,{img: this.state.Lien, nom: this.state.Nom,desc:this.state.Desc, rate: this.state.Rate})

    this.setState({moviesSearched:a})

  }

inputupdateNom=(e)=>{
this.setState({Nom:e.target.value})
//console.log(this.state.Nom)

}
inputupdateImg=(e)=>{
  this.setState({Lien:e.target.value})
  //console.log(this.state.Lien)
}
inputupdateDesc=(e)=>{

  this.setState({Desc:e.target.value})
  //console.log(this.state.Desc)
}
inputupdateRate=(e)=>{
  this.setState({Rate:e.target.value})
  
  }

   removeMovie=(id)=>{
    

    var array = [...this.state.moviesSearched]; // make a separate copy of the array
    var index = array.indexOf(id)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({moviesSearched: array});
     }

    // // const items = this.state.moviesSearched.filter(item => item.index !== id.index);
    // // this.setState({moviesSearched :items})
    // console.log(this.state.moviesSearched)

   }
 
   searchbyRate=(e)=>{
    this.setState({ moviesSearched:listmovies.filter(el=>el.rate.length>=e )})
   // console.log(e)

   }
  
  render(){
  return (
    <div>
      <SearchBar handleChange={this.handleChange} />
      <div className="stars">
{this.state.rateStars.map(el=><div> <i class="far fa-star" onClick={()=>this.searchbyRate(el)}></i></div>)}
</div>
      <div className="Listmovies">
        <h2>Most Watched:</h2>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          {

            this.state.moviesSearched.map(el => <div className="logo_movies"><h6>{el.nom.toUpperCase()}</h6><Link to="/desc"><img className="imgCar" src={el.img} onClick={()=>this.props.descMovies(el)}/></Link> <ul className="options"> <li> <i class="fas fa-heart"  onClick={()=>this.props.addMovieinfavoris(el)}></i></li> <li><i class="fas fa-times" onClick={()=>this.removeMovie(el)}></i></li><li className="update"><Update updateMovie={()=>this.updateMovie(el)}  el={el} inputupdateNom={this.inputupdateNom} inputupdateImg={this.inputupdateImg} inputupdateLien={this.inputupdateLien} inputupdateDesc={this.inputupdateDesc} inputupdateRate={this.inputupdateRate} /></li><li></li></ul></div>)}
            

        </Carousel>
      <Add  inputChangeId={this.inputChangeId} inputChangeName={this.inputChangeName} inputChangeDesc={this.inputChangeDesc} inputChangeImg={this.inputChangeImg} inputChangeRate={this.inputChangeRate} addMovie={this.addMovie} state={this.state}/>
      </div>
      
    </div>
  );
  }
};

export default Movies;