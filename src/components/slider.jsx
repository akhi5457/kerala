import Carousel from 'react-bootstrap/Carousel';
import Pictureframe from './pictureframe';
import bg1 from './images/bg1.jpg'
import bg2 from './images/bg2.jpg'
import bg3 from './images/bg3.jpg'


function Slider() {
    const slidingElements=[{idno:'1',title:'Munnar',description:'"Kashmir of South India"',imageUrl:bg1},
        {idno:'2',title:'Alappuzha',description:'"Venice of the East"',imageUrl:bg2},
        {idno:'3',title:'Thrissur Pooram',description:"Kerala's festival of colour, culture, and elephants.",imageUrl:bg3}
    ]
  return (
    <Carousel>
        {(slidingElements.length>0)?  slidingElements.map((items)=>{return(
            <Carousel.Item interval={500} key={items.idno}>
        <Pictureframe imageUrl={items.imageUrl}/>
        <Carousel.Caption>
          <h3>{items.title}</h3>
          <p>{items.description}</p>
        </Carousel.Caption>
      </Carousel.Item>)}):''}
      
      {/* <Carousel.Item interval={500}>
      <Pictureframe imageUrl={bg2}/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <Pictureframe imageUrl={bg3}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Slider;