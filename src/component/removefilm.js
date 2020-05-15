import React, { Component } from 'react'
export default class removefilm extends Component {
    render() {

        return (
            <div>
                         <i class="fas fa-times" onClick={() => 
            this.props.removeMovie(this.props.state.moviesSearched) }></i>
 
            </div>
        )
    }
}
