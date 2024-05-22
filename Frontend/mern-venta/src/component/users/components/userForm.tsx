
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUser } from '../../../api/usersApi';
function UserForm() {
  const [document, setDocument] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      document,
      last_name: lastName,
      name
    };

    try {
      await createUser(formData);
      navigate('/'); // Redirige después de crear el usuario exitosamente
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const isFormValid = document && lastName && name;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center">Crear Usuario</h1>
          <Form onSubmit={handleSubmit} className='border border-primary p-4 rounded-3 shadow-lg bg-light'>
            <Form.Group controlId="formDocument">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="text"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                placeholder="Introduce el documento"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Introduce el apellido"
                required
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label className='mt-2'>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce el nombre"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" disabled={!isFormValid} className="mx-2">
                Crear Usuario
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserForm;
/*function UserForm() {
  const [document, setDocument] = useState('');
  const [lastName, setLastName] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      document,
      last_name: lastName,
      name
    };

    // Aquí harías la solicitud a la API para enviar los datos del usuario.
    try {
      const response = await fetch('URL_DE_TU_API', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      if (response.ok) {
        // Redirigir a la lista de usuarios después de la creación exitosa.
        navigate('/');
      } else {
        console.error('Error al crear el usuario');
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const isFormValid = document && lastName && name;

  return (
    <Container>
      <Row className="justify-content-center 
       
      ">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center">Crear Usuario</h1>
          <Form onSubmit={handleSubmit} 
          className='border border-primary p-4 rounded-3 shadow-lg bg-light'
          >
            <Form.Group controlId="formDocument">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="text"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                placeholder="Introduce el documento"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Introduce el apellido"
                required
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label className='mt-2'>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce el nombre"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
            <Button variant="primary" type="submit" disabled={!isFormValid} className="mx-2">
              Crear Usuario
            </Button>
            </div>
            
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserForm;*/