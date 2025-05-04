import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Card from './Components/Card'
import BodyProducts from './Components/BodyProducts'
import FooterExample from './Components/Footer';


function App() {
  return (

    <Router>
      <Routes>
        {/* Ruta del Login */}
        <Route path="/Login" element={<Login />} />

        {/* Ruta protegida (solo accesible si hay sesión) */}
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Redirección por defecto */}
        <Route path="*" element={<Navigate to="/Login" />} />
      </Routes>
    </Router>

  );
}

function Home() {
  return (
    <div className="App">
      
      <NavBar />
      <Header /> <br />
      <h1 className='second-title'>Nuestros Productos</h1>
      <Card /><br /><br />
      <h1>Principales marcas</h1>
      <BodyProducts />
      <footer>
        <FooterExample />

      </footer>
    </div>
  )
}

// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token'); // Verifica si hay sesión iniciada
  return token ? children : <Navigate to="/Login" />;
};


export default App;
