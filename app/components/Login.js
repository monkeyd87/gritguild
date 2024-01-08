"use client"

import {Form,Card,Button} from 'react-bootstrap'
import { useState } from 'react'

const Login = ()=>{
    const [formData,setFormData] = useState({
        username:"",
        password:""
    })

    const handleChange = (event)=>{
        const {value,name} = event.target
        setFormData({...formData,[name]:value})
    }
    const handelSubmit = (event)=>{
        event.preventDefault()
        console.log(formData)
    }
    return(
        <Card className='col-4'>
            <Card.Body>
                <Form onSubmit={handelSubmit} className='gap-3 d-flex flex-column'>
                    <Form.Control
                        className='m-1'
                        placeholder='Username'
                        name='username'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    <Form.Control

                        className='m-1'
                        placeholder='password'
                        name="password"
                        type='password'
                        onChange={handleChange}
                    />
                    
                <Button type='submit'  className='w-full'>Log In</Button>
                </Form>
            </Card.Body>
            <a className=" text-center text-red-600" href='/signup'>Create accout</a>
        </Card>
    )
}



export default Login