

import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchUserById, updateUser, deleteUser } from '../../api/usersApi'; // Importa la función deleteUser

function UserEdit() {
  const params = useParams();
  const id = params.id || '';
  const navigate = useNavigate();
  const [user, setUser] = useState({
    document: '',
    last_name: '',
    name: ''
  });

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    }

    getUser();
  }, [id]);

  const handleChange = (e:
    React.FormEvent<HTMLFormElement>
  ) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    try {
      await updateUser(id, user); // Enviar los datos actualizados al servidor
      navigate('/'); // Redirigir a la página principal
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteUser(id); // Eliminar el usuario
      navigate('/'); // Redirigir a la página principal
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center  text-primary abstract-border
          ">Editar Usuario</h1>
          <Form onSubmit={handleSubmit} className='border border-primary p-4 rounded-3 shadow-lg bg-light'>
            <Form.Group controlId="formDocument">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="number"
                name="document"
                value={user.document}
                onChange={handleChange}
                placeholder="Introduce el documento"
                required
              />
            </Form.Group>
            <Form.Group controlId="formName">
              <Form.Label className='mt-2'>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Introduce el nombre"
                required
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
                placeholder="Introduce el apellido"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" className="mx-2">
                Guardar Cambios
              </Button>
              <Button variant="danger" onClick={handleDelete} className="mx-2">
                Eliminar Usuario
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserEdit;































/*function UserEdit() {
  const params = useParams();
  const id = params.id || '';
  const navigate = useNavigate();
  const [user, setUser] = useState({
    document: '',
    last_name: '',
    name: ''
  });

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    }

    getUser();
  }, [id]);

  const handleChange = (e:React.FormEvent<HTMLFormElement>) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUser(id, user); // Enviar los datos actualizados al servidor
      navigate('/'); // Redirigir a la página principal
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center">Editar Usuario</h1>
          <Form onSubmit={handleSubmit} className='border border-primary p-4 rounded-3 shadow-lg bg-light'>
            <Form.Group controlId="formDocument">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="text"
                name="document"
                value={user.document}
                onChange={handleChange}
                placeholder="Introduce el documento"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Apellido</Form.Label>
              <Form.Control
                type="text"
                name="last_name"
                value={user.last_name}
                onChange={handleChange}
                placeholder="Introduce el apellido"
                required
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label className='mt-2'>Nombre</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Introduce el nombre"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" className="mx-2">
                Guardar Cambios
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserEdit;

*/















/*function UserEdit() {
    return ( <>
        <h1>Editar Usuario</h1>
    </> );
}

export default UserEdit;

import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchUserById } from '../../api/usersApi';

function UserEdit() {
  const param= useParams();
    const id = param.id || '';
  const [user, setUser] = useState({
    document: '',
    last_name: '',
    name: ''
  });

  useEffect(() => {
    async function getUser() {
      try {
        const userData = await fetchUserById(id);
        setUser(userData);
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    }

    getUser();
  }, [id]);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implementa la lógica para actualizar los datos del usuario aquí
};

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={6} md={8}>
          <h1 className="my-4 text-center">Editar Usuario</h1>
          <Form onSubmit={handleSubmit} className='border border-primary p-4 rounded-3 shadow-lg bg-light'>
            <Form.Group controlId="formDocument">
              <Form.Label>Documento</Form.Label>
              <Form.Control
                type="text"
                value={user.document}
                // Implementa la lógica para actualizar los datos del usuario en el estado
                placeholder="Introduce el documento"
                required
              />
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label className='mt-2'>Apellido</Form.Label>
              <Form.Control
                type="text"
                value={user.last_name}
                // Implementa la lógica para actualizar los datos del usuario en el estado
                placeholder="Introduce el apellido"
                required
              />
            </Form.Group>

            <Form.Group controlId="formName">
              <Form.Label className='mt-2'>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={user.name}
                // Implementa la lógica para actualizar los datos del usuario en el estado
                placeholder="Introduce el nombre"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" className="mx-2">
                Guardar Cambios
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UserEdit;*/