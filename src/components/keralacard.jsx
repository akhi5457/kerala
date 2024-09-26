
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kochi from './images/kochi.jfif';
import kozhikode from './images/kozhikode.jfif';
import palakad from './images/palakad.jfif';
import kuttanad from './images/kuttanad.jfif';
import {Container,Row,Col} from 'react-bootstrap';
import { useState } from 'react';
import { useContext } from 'react';
import CommentContext from './componentDrawer';


function KeralaCard(){
  const content=[{idno:'1',title:'kochi',description:'asdfghjklqwertyuio',imageUrl:kochi},
    {idno:'2',title:'kozhikode',description:'asdfghjklqwertyuio',imageUrl:kozhikode},
    {idno:'3',title:'palakad',description:'asdfghjklqwertyuio',imageUrl:palakad},
    {idno:'4',title:'kuttanad',description:'asdfghjklqwertyuio',imageUrl:kuttanad}]
const [title,setTitle]=useState("");
const{comment}=useContext(CommentContext)
    return (
        <>
        <Container>
          <Row className='mt-5'>
            <Col>
            <input type="text" name='search' placeholder='enter the name' onChange={(e)=>{setTitle(e.target.value)}} className='form-control'/>
      
            </Col>
          </Row>
            <Row className='mt-5 mb-5'>
              {
                (content.length>0)?  
                content.filter((item)=>{return(item.title.toLowerCase().match(title.toLocaleLowerCase()))})
                .map((items)=>{return(<Col lg-3 key={items.idno}>
                  <Card style={{ width: '15rem', height:'18rem'}}>
            <Card.Img variant="top" style={{width:'15rem',height:'13rem'}} src={items.imageUrl} />
            <Card.Body>
              <Card.Title>{items.title}</Card.Title>
              <Card.Text>
                {items.description}
              </Card.Text>
              <Button variant="primary" className='bg-success'>Go somewhere</Button>
            </Card.Body>
          </Card>
          </Col>)}):''
              }
                
    </Row>
    <Row>
      <Col>
      {comment}
      </Col>
    </Row>
    </Container>

        </>
    )
}
export default KeralaCard;