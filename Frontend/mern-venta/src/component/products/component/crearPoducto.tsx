
import  { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createProduct } from '../../../api/productApi';

interface ProductCreateProps {
  updateProducts: () => void;
}

function ProductCreate({ updateProducts } : ProductCreateProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData = {
      name,
      description,
      price: parseFloat(price)
    };

    setIsSubmitting(true);

    try {
      await createProduct(productData);
      setName('');
      setDescription('');
      setPrice('');
      updateProducts(); // Actualizar la lista de productos
      navigate('/products'); // Redirigir a la lista de productos después de la creación
    } catch (error) {
      console.error('Error al crear el producto:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = name && description && price && !isSubmitting;

  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={12} md={12}>
        <h1 className="my-4 text-center text-primary  fw-bold">Crear Producto</h1>

          <Form onSubmit={handleSubmit} className="border border-primary p-4 rounded-3 shadow-lg bg-light">
            <Form.Group controlId="formName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Introduce el nombre del producto"
                required
              />
            </Form.Group>

            <Form.Group controlId="formDescription" className="mt-2">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Introduce la descripción del producto"
                required
              />
            </Form.Group>

            <Form.Group controlId="formPrice" className="mt-2">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Introduce el precio del producto"
                required
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="primary" type="submit" disabled={!isFormValid} className="mx-2">
                Crear Producto
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
export default ProductCreate;
