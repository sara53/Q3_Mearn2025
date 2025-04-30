import React, { useContext } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { ProductContext } from '../context/productContext'

import { ThemeContext } from '../context/themeContext'
export function Header() {
    let { numberOfProducts } = useContext( ProductContext )
    let { theme, toggleTheme } = useContext( ThemeContext )

    return (
        <Navbar bg={`${theme == 'light' ? 'light' : 'dark'}`} data-bs-theme={`${theme == 'light' ? 'light' : 'dark'}`}>
            <Container>
                <Navbar.Brand href="#home">Shop</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">count({numberOfProducts})</Nav.Link>
                    <Nav.Link href="#pricing">
                        {theme == 'light' ? <i onClick={toggleTheme} className="fs-5 mx-2 bi bi-moon-fill"></i> : <i onClick={toggleTheme} c className="fs-5 mx-2 bi bi-sun-fill"></i>}


                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
