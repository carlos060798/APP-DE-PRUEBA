import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createRole } from '../../api/rolApi';

function RoleCreate() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e:
    React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const roleData = { name };

    try {
      await createRole(roleData); // Crear el rol en el servidor
      navigate('/'); // Redirigir a la lista de roles
    } catch (error) {
      console.error('Error al crear el rol:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center">Crear Rol</h1>
          <Form onSubmit={handleSubmit} className='border border-primary p-4 rounded-3 shadow-lg bg-light'>
            <Form.Group controlId="formName">
              <Form.Label>Nombre del Rol</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce el nombre del rol"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" className="mx-2">
                Crear Rol
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default RoleCreate;