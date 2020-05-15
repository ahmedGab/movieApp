import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';
import logoFilm from './images/l1.png'
import  './navbar.css'
import Search from './search'
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
      <Navbar className="a"  expand="md">
        <NavbarBrand ><img src={logoFilm} alt="logoAppFilm" /></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="navlink" href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <Link to="/favoris" className="navlink" >Favorite Movies</Link>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;
