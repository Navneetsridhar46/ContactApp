import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';

function SingleView() {

    const { id } = useParams()
    console.log(id);

    const [AllData, setData] = useState([])

    const fetchAllDatas = async () => {
        const result = await axios.get('/contacts.json')
        setData(result.data.contacts);
    }

    useEffect(() => {
        fetchAllDatas()
    }, [])

    const singleData = AllData.find(i => i.id == id)
    console.log(singleData);

    return (
        <div>
            {singleData && (
            <Row>
                <Col>
                    <img style={{height:'500px',width:'75%'}} src={singleData.profile} alt='' />
                </Col>
                <Col>
                    <ListGroup style={{fontFamily:'Fjalla One',backgroundColor:'black'}} className='fs-2 mt-5 p-5'>
                        <ListGroup.Item className='mt-3 bg-dark text-light'>Name : {singleData.name}</ListGroup.Item>
                        <ListGroup.Item className='mt-3 bg-dark text-light'>Email : {singleData.email}</ListGroup.Item>
                        <ListGroup.Item className='mt-3 bg-dark text-light'>Mobile : {singleData.mobile}</ListGroup.Item>
                        <ListGroup.Item className='mt-3 bg-dark text-light'>Location : {singleData.location}</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
            )}
        </div>
    )
}

export default SingleView