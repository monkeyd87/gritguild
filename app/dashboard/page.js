// "use client"
import {Container,Row,Col} from 'react-bootstrap'

import {User} from "../components/User"
import {Meal} from "../components/Meal"
import {Feed} from "../components/Feed"
import {Sleep} from "../components/Sleep"
import Nutrition from '../components/Nutrition'



const user = {
    name:'kingjack',
    lv:1,
    hp:200,
    mp:200

}
const Dashboard = ()=>{
    return(
       <Container className=' '  fluid>
        <Row className='justify-content-between flex-column flex-md-column flex-lg-row  '>
            <Col className='user d-flex align-items-center justify-content-center col-12  col-md-12 col-lg-3 pannel border-5  border-gray-500 rounded-md'>
               <User {...user}/>
            </Col>
            <Col className='party    pannel border-5 border-gray-500 rounded-md'>
                <Row className='   flex-column  flex-lg-row  align-items-center justify-center rounded  '>
                   
                    {Array.from({length:3}).map((_,index)=>(
                        <Col className='col-12 col-lg-3'>
                            <User key={index} {...user}/>
                        </Col>
                    ))}
                    
                    
                </Row>
            </Col>
        </Row>
        <Row className=' p-3 pannel border-5 border-gray-500 rounded-md'>
           <Col className='feed'>
           <Nutrition/>
           </Col>
           <Col className='meal'>
            <Meal/>
           </Col>
           <Col className='sleep'>
            <Sleep/>
           </Col>
        </Row>
        
       </Container>
    )
}


export default Dashboard