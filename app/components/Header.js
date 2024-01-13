"use client"
import { useState } from 'react'
import {Navbar,Nav,Container,Form} from 'react-bootstrap'
const Header = ()=>{
    const [isLoggedin,setIsloggedin] = useState(false)
    return(
        <Navbar className=' pannel  border-b-8 shadow border-slate-400 '>
            <Container className='  rounded p-3' fluid>
                <Navbar.Brand className='text-white'>GritGild</Navbar.Brand>
               {isLoggedin && <Nav className='gap-11'>
                    <Nav.Link href='/dashboard' className='text-white hover:bg-blue-900 rounded hover:text-slate-50'>Dashboard</Nav.Link>
                    <Nav.Link href='/friends' className='text-white hover:bg-blue-900 rounded'>Friends</Nav.Link>
                    <Nav.Link href='/party' className='text-white hover:bg-blue-900 rounded'>Party</Nav.Link>
                    <Nav.Link href='/explore' className='text-white hover:bg-blue-900 rounded'>Explore</Nav.Link>

                </Nav>}
                <div className=' border-yellow-800 w-fit'>
                    <Form.Control className='rounded-pill'/>
                </div>
            </Container>
        </Navbar>
    )
}

export default Header