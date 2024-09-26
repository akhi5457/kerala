import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../App.css'
import Register from './register';
import { useContext } from 'react';
import CommentContext from './componentDrawer';

function Navbarheader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {comment,setComment}=useContext(CommentContext)
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand >Kerala Tourism</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link onClick={handleShow}>Register</Nav.Link>
            {/* <button  className='bg-secondary' onClick={()=>{setComment('haiiii')}}>click here</button> */}
            <input type="text" placeholder='enter the city to be searched' className='form-control' style={{width:'300px'}} onChange={(e)=>{setComment(e.target.value)}}/>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body><Register/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
}

export default Navbarheader;