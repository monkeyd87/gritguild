// "use client"
import {Container,Row,Col} from 'react-bootstrap'

import {User} from "../components/User"
import {Meal} from "../components/Meal"
import {Feed} from "../components/Feed"
import {Sleep} from "../components/Sleep"
import InstagramEmbed from '../components/InstagramEmbed'


const user = {
    name:'kingjack',
    lv:1,
    hp:200,
    mp:200

}
const Dashboard = ()=>{
    return(
       <Container className='mt-3 '  fluid>
        <Row className='justify-content-between flex-column flex-md-column flex-lg-row gap-3 '>
            <Col className='user d-flex align-items-center justify-content-center col-12  col-md-12 col-lg-3 bg-blue-800 border-5  border-gray-500 rounded-md'>
               <User {...user}/>
            </Col>
            <Col className='party    bg-blue-800 border-5 border-gray-500 rounded-md'>
                <Row className='  m-3 border-5 flex-column  flex-lg-row p-3 align-items-center justify-center rounded border-gray-100  '>
                   
                    {Array.from({length:3}).map((_,index)=>(
                        <Col className='col-12 col-lg-3'>
                            <User key={index} {...user}/>
                        </Col>
                    ))}
                    
                    
                </Row>
            </Col>
        </Row>
        <Row className='mt-3 p-3 bg-blue-800 border-5 border-gray-500 rounded-md'>
           <Col className='feed'>
            <Feed/>
           </Col>
           <Col className='meal'>
            <Meal/>
           </Col>
           <Col className='sleep'>
            <Sleep/>
           </Col>
        </Row>
        <InstagramEmbed/>
       </Container>
    )
}


export default Dashboard