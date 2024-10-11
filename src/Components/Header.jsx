import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Images/electrodomesticos.webp';
// import Img2 from '../Images/descarga (1).jpeg';
// import Img3 from '../Images/descarga (2).jpeg';



function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img style={{height:'60vh', objectFit: 'contain', margin: '0 auto'}} 
        src= {Img1} 
        className='d-block w-90' 
        alt=''/>

        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>

      <img style={{height:'60vh', objectFit: 'contain', margin: '0 auto'}} 
      src= {Img1} 
      className='d-block w-100' 
      alt=''/>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item >

      <img style={{height:'60vh', objectFit: 'contain', margin: '0 auto'}}  
      src= {Img1} 
      className='d-block w-100' 
      alt=''/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;