import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div className='mb-3'>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.postimg.cc/tCQBFDkg/685cceffa93afa89416c4345481bf834.png"
              width="50"
              height="50"
              className="d-inline-block align-center"
            />{' '}
            <b className='fs-2'><a style={{color:'white',textDecoration:'none'}} href='/'>Contacts</a></b>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header