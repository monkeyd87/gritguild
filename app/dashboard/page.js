// "use client"
import {Container,Row,Col} from 'react-bootstrap'

import {User} from "../components/User"

const user = {
    name:'kingjack',
    lv:1,
    hp:200,
    mp:200

}
const Dashboard = ()=>{
    return(
       <Container className='mt-3 '  fluid>
        <Row className='justify-content-between gap-3'>
            <Col className='user d-flex align-items-start col-3 bg-blue-800 border-5  border-gray-500'>
               <User {...user}/>
            </Col>
            <Col className='party    bg-blue-800 border-5 border-5  border-gray-500'>
                <Row className='border'>

                </Row>
            </Col>
        </Row>
        <Row>
            <Col>
            </Col>
            <Col>
            </Col>
        </Row>
       </Container>
    )
}


export default Dashboard