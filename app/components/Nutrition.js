"use client"

import {Form,Button,Nav} from 'react-bootstrap'
import { useState} from "react"
const Nutrition = () =>{
    const date = new Date()
    const [tab,setTab] = useState(1)
    const [dateTime,setDateTime]=useState({
        startTime:'',
        endTime:'',
        date: date.toLocaleDateString('en-ca')

    })

    

    const handelInput = (event)=>{
        const {value,name} = event.target
        setDateTime(()=>({...dateTime,[name]:value}))
    }
    const tabHandeler = (eventKey)=>{
        setTab(()=>eventKey)
        console.log(tab)
    }
    return(
        <div className="bg-black border-5 relative rounded-md border-gray-600" >
            <div className="overflow-auto">
                <Nav variant="tabs" defaultActiveKey="1" onSelect={tabHandeler}>
                    <Nav.Item  ><Nav.Link className="" eventKey='1'>food</Nav.Link></Nav.Item>
                    <Nav.Item ><Nav.Link  className="" eventKey='2'>sleep</Nav.Link></Nav.Item>
                </Nav>
                <div>
                   
                </div>
                    {tab==1 && <div className='p-3'>

                        <ul>
                            <li><div className="bg-slate-300 mb-3  w-25">Calories:</div></li>
                            <li><div className="bg-slate-300 mb-3  w-25">Carbs:</div></li>
                            <li><div className="bg-slate-300 mb-3  w-25">Fats:</div></li>
                            <li><div className="bg-slate-300 mb-3  w-25">Protien:</div></li>
                            <li><div className="bg-slate-300 mb-3  w-25">Fiber:</div></li>
                        </ul>
                        <div className='d-flex  gap-3'>
                            <textarea className='form-control w-50 ' maxLength={180}/>
                            <Button>Send</Button>
                        </div>
                    </div>}
                    {tab==2&&<div>
                        <Form>
                            <div className='d-flex  justify-content-between'>
                                <div className='date d-flex w-100 justify-content-between'>
                                    <Button>{"<"}</Button>
                                    <h3 className='text-light'>
                                        {dateTime.date}
                                    </h3>
                                    <Button>{">"}</Button>
                                </div>
                                <Form.Check name="date" className="" type='date' onChange={handelInput} value={dateTime.date} />

                            </div>
                            <Form.Check type='time' />
                            <Form.Check type='time' />

                        </Form>
                        </div>}
            </div>
           
        </div>

    )
}

export default Nutrition