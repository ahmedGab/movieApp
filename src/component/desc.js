import React, { Component } from 'react'

export default class desc extends Component {
    render() {
        console.log(this.films)
        return (
            <div className="descT">
                <h2>Movie Description</h2>
                {
                    this.props.filmsDesc.map(el=> <div className="descF"><div className="logo_movies"><h6>{el.nom.toUpperCase()}</h6><img className="imgCar" src={el.img}/></div> 
                    <div><p>{el.desc}</p></div> </div>)
                }
            </div>
        )
    }
}
