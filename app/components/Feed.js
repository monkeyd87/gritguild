"use client"
import { Nav } from "react-bootstrap"
import {Children, useState} from "react"
import Nutrition from './Nutrition'
export const Feed = ({children})=>{
    const [tab,setTab] = useState(1)
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
                   children
                </div>
            </div>
           
        </div>
    )
}