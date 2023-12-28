"use client"
import {Navbar,Nav,Container,Form} from 'react-bootstrap'
const Header = ()=>{
    return(
        <Navbar className='bg-emerald-900 '>
            <Container className=' justify-content-start rounded p-1 border-b-orange-400' fluid>
                <Navbar.Brand className='text-white'>GritGild</Navbar.Brand>
                <div className=' w-fit'>
                    <Form.Control className='rounded-pill'/>
                </div>
                <Nav className=''>
                    <Nav.Link className='text-light hover:bg-emerald-950 rounded'>Dashboard</Nav.Link>
                    <Nav.Link className='text-light hover:bg-emerald-950 rounded'>Friends</Nav.Link>
                    <Nav.Link className='text-light hover:bg-emerald-950 rounded'>Party</Nav.Link>
                    <Nav.Link className='text-light hover:bg-emerald-950 rounded'>Explore</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header