import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Images/KitchenFull.jpeg';
// import Img2 from '../Images/descarga (1).jpeg';
// import Img3 from '../Images/descarga (2).jpeg';



function IndividualIntervalsExample() {
  return (
    <Carousel >
      <Carousel.Item interval={4000}>
        <img style={{width:'100%', height:'70vh', objectFit: 'contain', margin: '0 auto'}} 
        src= {Img1} 
        className='d-block w-100' 
        alt=''/>

        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={4000}>
      <img style={{width:'100%', height:'70vh', objectFit: 'contain', margin: '0 auto'}} 
      src= {Img1} 
      className='d-block w-100' 
      alt=''/>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >

      <img style={{width:'100%', height:'70vh', objectFit: 'contain', margin: '0 auto'}}  
      src= {Img1} 
      className='d-block w-100' 
      alt=''/>

        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;