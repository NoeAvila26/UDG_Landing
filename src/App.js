import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Card from './Components/Card'
import BodyProducts from './Components/BodyProducts'
import SubMicro from './Components/SubMicro'
import SubBatidoras from './Components/SubBatidoras'
import SubLicuadoras from './Components/SubLicuadoras'
import ProductMicro from './Components/ProductMicro'
import ProductBatidora from './Components/ProductBatidora'
import Activities from './Components/Activities'
import System from './Components/System'
import Download from './Components/Download'
import Report from './Components/Report'
import FooterExample from './Components/Footer';


function App() {
  return (

    <Router>
      <Routes>
        {/* Ruta del Login */}
        <Route path="/Login" element={<Login />} />

        {/* Ruta protegida (solo accesible si hay sesión) */}
        <Route path="/Home" element={<ProtectedRoute><Home /></ProtectedRoute>} />

        {/* Ruta protegida a SubMicro */}
        <Route path="/submicro" element={<ProtectedRoute><SubMicro /></ProtectedRoute>} />

        {/* Ruta protegida a SubBatidoras */}
        <Route path="/subBatidoras" element={<ProtectedRoute><SubBatidoras /></ProtectedRoute>} />

        {/* Ruta protegida a SubLicuadoras */}
        <Route path="/subLicuadoras" element={<ProtectedRoute><SubLicuadoras /></ProtectedRoute>} />

        {/* Ruta protegida a CardMicro */}
        <Route path="/ProductMicro" element={<ProtectedRoute><ProductMicro /></ProtectedRoute>} />

         {/* Ruta protegida a CardMicro */}
         <Route path="/ProductBatidora" element={<ProtectedRoute><ProductBatidora /></ProtectedRoute>} />

          {/* Ruta protegida a CardMicro */}
         <Route path="/Activities" element={<ProtectedRoute><Activities /></ProtectedRoute>} />

          {/* Ruta protegida a CardMicro */}
         <Route path="/System" element={<ProtectedRoute><System /></ProtectedRoute>} />

          {/* Ruta protegida a CardMicro */}
         <Route path="/Download" element={<ProtectedRoute><Download /></ProtectedRoute>} />

          {/* Ruta protegida a CardMicro */}
         <Route path="/Report" element={<ProtectedRoute><Report /></ProtectedRoute>} />

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
