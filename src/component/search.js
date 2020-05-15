import React, { Component } from 'react'
import Searched from './searched'
import { Switch, Route, Link } from 'react-router-dom'

export default class search extends Component {
    constructor(props) {
        super(props);

    }







    render() {

        return (
            <div class="search-container">
            <input type="text" placeholder="Search.." name="search"  onChange={this.props.handleChange}/>
            

           
      
        </div>
        )
    }
}
