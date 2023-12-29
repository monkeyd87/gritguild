"use client"
import {Navbar,Nav,Container,Form} from 'react-bootstrap'
const Header = ()=>{
    return(
        <Navbar className='bg-blue-800  border-b-8 shadow border-slate-400 '>
            <Container className='  rounded p-3' fluid>
                <Navbar.Brand className='text-white'>GritGild</Navbar.Brand>
                <Nav className='gap-11'>
                    <Nav.Link className='text-white hover:bg-blue-900 rounded hover:text-slate-50'>Dashboard</Nav.Link>
                    <Nav.Link className='text-white hover:bg-blue-900 rounded'>Friends</Nav.Link>
                    <Nav.Link className='text-white hover:bg-blue-900 rounded'>Party</Nav.Link>
                    <Nav.Link className='text-white hover:bg-blue-900 rounded'>Explore</Nav.Link>

                </Nav>
                <div className=' border-yellow-800 w-fit'>
                    <Form.Control className='rounded-pill'/>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header