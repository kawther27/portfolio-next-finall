// components/HeaderClient.js
"use client";

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Offcanvas, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../store/actions/authActions';
import '../../styles/Header.css';

const HeaderClient = () => {
  const [show, setShow] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const user = useSelector(state => state.auth.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <header>
      <Navbar className={`custom-header ${scrolled ? 'scrolled' : ''}`} expand="lg" fixed="top">
        <Container>
          <Link href="/" passHref>
            <Navbar.Brand className='mx-4'>
              Kawther khlif
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle className='navbar-toggler' aria-controls="offcanvasNavbar" onClick={handleShow} />
          <Navbar.Offcanvas
            className='bg-color-transparent'
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link href="/" passHref>
                  <Nav.Link as="a" className="nav-link-custom">Home</Nav.Link>
                </Link>
                {user ? (
                  <>
                    <Link href="/testimonials" passHref>
                      <Nav.Link as="a" className="nav-link-custom">Testimonials</Nav.Link>
                    </Link>
                    <Button variant="link" className="nav-link-custom" onClick={handleLogout}>Logout</Button>
                  </>
                ) : (
                  <Link href="/auth" passHref>
                    <Nav.Link as="a" className="nav-link-custom">Login</Nav.Link>
                  </Link>
                )}
                <Link href="/About" passHref>
                  <Nav.Link as="a" className="nav-link-custom">About</Nav.Link>
                </Link>
                <Link href="/Projects" passHref>
                  <Nav.Link as="a" className="nav-link-custom">Projects</Nav.Link>
                </Link>
                <Link href="/Contact" passHref>
                  <Nav.Link as="a" className="nav-link-custom">Contact</Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </header>
  );
};

export default HeaderClient;
