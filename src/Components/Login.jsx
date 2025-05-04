import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card, Alert } from 'react-bootstrap';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook para cambiar de página

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Simulación de usuario válido
    if (formData.email === 'admin@test.com' && formData.password === '123456') {
      localStorage.setItem('token', 'fakeToken123'); // Guardar sesión
      navigate('/Home'); // Redirigir al Home
    } else {
      setError('Credenciales incorrectas');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card style={{ width: '350px' }} className="p-4 shadow">
        <h3 className="text-center">Iniciar Sesión</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" name="email" placeholder="Ingresa tu email"
              value={formData.email} onChange={handleChange} required />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" name="password" placeholder="Ingresa tu contraseña"
              value={formData.password} onChange={handleChange} required />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Iniciar Sesión
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
