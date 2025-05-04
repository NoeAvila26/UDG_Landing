import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../Images/collageLogo.jpg';
 import Img2 from '../Images/collageLogo.jpg';
//  import Img3 from '../Images/SanSon2.jpg';
//  import Img4 from '../Images/panasonic2.jpg';


const slides = [
  { src: Img1, label: "First slide label", caption: "Texto 1" },
  { src: Img2, label: "Second slide label", caption: "Texto 2" },
  // { src: Img3, label: "Third slide label", caption: "Texto 3" },
  // { src: Img4, label: "Fourth slide label", caption: "Texto 4" },
];

function IndividualIntervalsExample() {
  return (
    <Carousel>
    {slides.map((slide, index) => (
      <Carousel.Item key={index} interval={3000}>
        <img
          style={{ height: '30vh', objectFit: 'contain', margin: '0 auto' }}
          src={slide.src}
          className='d-block w-80'
          alt=''
        />
        <Carousel.Caption>
          <h3>{slide.label}</h3>
          <p>{slide.caption}</p>
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  </Carousel>
  );
}

export default IndividualIntervalsExample;