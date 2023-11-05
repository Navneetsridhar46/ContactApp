import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ContactCard from '../components/ContactCard'
import { Row, Col } from 'react-bootstrap'


function Home() {

    const [contacts,setContacts]=useState([])

    const fetchData=async()=>{
        const result=await axios.get('/contacts.json')
        setContacts(result.data.contacts);
    }

    useEffect(()=>{
        fetchData()
    },[])

    console.log(contacts);

  return (
    <div className='text-center'>
    <Row className='mt-3 pt-3'>
            {
                contacts.map(i=>(
                    <Col className='ms-5 mt-3 p-5' lg={3} md={4} sm={6}>
                        <ContactCard item={i}></ContactCard>
                        </Col>
                ))
            }
    </Row>
    </div>
  )
}

export default Home