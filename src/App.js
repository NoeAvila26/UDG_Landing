import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Card from './Components/Card'
import FooterExample from './Components/Footer';
// import Img6 from './Images/PHOTO-2020-05-12-16-36-59.jpg'
// import Footer from './Components/Footer'
// import Header from './Components/Header';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Header /> <br/>
     <h1 className='second-title'>Nuestros Productos</h1>
     <Card />
      
     <footer>
    <FooterExample/>

     </footer>
    </div>
  );
}

export default App;
