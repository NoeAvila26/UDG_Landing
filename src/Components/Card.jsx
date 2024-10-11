import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Img4 from '../Images/1103483898.avif';
import Img5 from '../Images/MARCA-AMANA-LOGO-MICRO.jpg';

function GridExample() {
  return (
    

      <div className='Container'>
        <Card  className="mx-auto" style={{ maxWidth: '600px', margin: '0 auto'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Img5} className="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">HORNOS</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </Card>
        

        <Card  className="mx-auto" style={{ maxWidth: '600px', margin: '0 auto'}}>
          <div class="row g-0">
            <div class="col-md-4">
              <img src={Img4} className="img-fluid rounded-start" alt="..." />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">BATIDORAS</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </Card>

    
      </div>

      
      

   
    
  );
}

export default GridExample;