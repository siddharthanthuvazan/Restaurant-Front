import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import logo from '../css/picture/logo.png';

import "../css/sandstone.min.css";
import "../css/fontawesome.all.min.css";
import "../css/style.css";


import Home from './Home';
import SecurityController from './SecurityController';
import ReservationController from './ReservationController';
import CarteController from './CarteConroller';
import RegisterClientController from './RegistrationClientController';

import Cart from './Cart';
import ProductList from './ProductList';

export default function App() {
  const [client, setClient] = useState(null);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
  }

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
  };

  function handleLogout() {
    setIsLoggedIn(false);
    setClient(null);
    setCartItems([]);
  }

  function clientName() {
    return client != null ? client.nom + " " + client.prenom : "";
  }

 
  return (
    <div className="full-bg">
      <BrowserRouter>
        <header className="text-center">
          <h1><img src={logo} alt="Logo"/></h1>
        </header>

        <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
          <Navbar.Brand className="ms-2">{clientName()}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="me-2" />
          <Navbar.Collapse>
            <Nav className="ms-auto me-2 flex-wrap">
            <Nav.Link eventKey="5" as={Link} to="/product">product</Nav.Link>
              <Nav.Link eventKey="1" as={Link} to="/Home">Home</Nav.Link>
              {client != null && <Nav.Link eventKey="2" as={Link} to="/Carte">Carte</Nav.Link>}
              {client != null && <Nav.Link eventKey="3" as={Link} to="/Cart">Cart</Nav.Link>}
              {client ?
                <Nav.Link eventKey="4" onClick={handleLogout} as={Link} to="/Home">Déconnexion</Nav.Link> :
                <Nav.Link eventKey="4" as={Link} to="/Connection">Connexion</Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Navbar>
  
        <Container className="pt-3">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Connection" element={<SecurityController client={client} setClient={setClient} setIsLoggedIn={setIsLoggedIn} />} />
            <Route exact path="/Reservation" element={<ReservationController />} />
            {client != null && <Route exact path="/Carte" element={<CarteController addToCart={addToCart} />} />}
            <Route exact path="/RegisterClient" element={<RegisterClientController />} />
            {client != null && <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} />} /> }
            <Route path="/product" element={<ProductList /> } />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}
