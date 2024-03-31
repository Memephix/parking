import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom";
import Login from "./Login";
import Booking from "./Booking"
import Profile from "./Profile"
import ReservePage from "./ReservePage"
import History from "./History";
const MainPage =() =>{
    return(<>
    <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
          <Container>
        <Navbar.Brand as = {Link} to ="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as = {Link} to="/login">Login</Nav.Link>  
            <NavDropdown title="Reservation" id="basic-nav-dropdown">
              <NavDropdown.Item as ={Link} to = "/history">History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Booking">Booking</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/Reserve">Reservation</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div>
      <Routes>
          <Route path = "/history" element={<History/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/Booking" element={<Booking/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/Reserve" element={<ReservePage/>}/>
      </Routes>
      </div>
      </BrowserRouter>
    </>
    
    );
};
export default MainPage;