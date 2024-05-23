import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { fetchSaleById, updateSale } from '../../../api/salesApi';
import { fetchProducts } from '../../../api/productApi';
import { fetchUsers } from '../../../api/usersApi';
import { Product } from '../../../types/product';
import { User } from '../../../types/user';
import { Row, Col } from 'react-bootstrap';
function UpdateSale() {
  const params= useParams();
  const id = params.id as string;
  const navigate = useNavigate();

  const [sale, setSale] = useState({
    products_id: '',
    qty: '',
    sale_at: '',
    users_id: ''
  });
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [saleData, productsData, usersData] = await Promise.all([
          fetchSaleById(id),
          fetchProducts(),
          fetchUsers()
        ]);

        // Asegurarnos que la fecha esté en el formato correcto
        const saleDate = saleData.sale_at ? new Date(saleData.sale_at).toISOString().split('T')[0] : '';

        setSale({
          products_id: saleData.products_id,
          qty: saleData.qty,
          sale_at: saleDate,
          users_id: saleData.users_id
        });
        setProducts(productsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching sale, products, and users:', error);
      }
    }

    fetchData();
  }, [id]);

  const handleChange = (e : React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setSale(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement> ) =>{
      e.preventDefault();
      setIsSubmitting(true);
  
      try {
        await updateSale(id, sale);
        navigate('/sales');
      } catch (error) {
        console.error('Error updating sale:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

  const isFormValid = sale.products_id && sale.qty && sale.sale_at && sale.users_id && !isSubmitting;

  return (
    <div className="container">
      <Row className="justify-content-center">
       <Col lg={6} md={8}>
      <h1 className="my-4 text-center text-primary fw-bold">Editar Venta</h1>

      <Form onSubmit={handleSubmit} className="border border-primary p-4 rounded-3 shadow-lg bg-light">
        <Form.Group controlId="formProductsId">
          <Form.Label>Productos</Form.Label>
          <Form.Control
            as="select"
            name="products_id"
            value={sale.products_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formQty" className="mt-2">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            name="qty"
            value={sale.qty}
            onChange={handleChange}
            placeholder="Introduce la cantidad"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSaleAt" className="mt-2">
          <Form.Label>Fecha de Venta</Form.Label>
          <Form.Control
            type="date"
            name="sale_at"
            value={sale.sale_at}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUsersId" className="mt-2">
          <Form.Label>Usuarios</Form.Label>
          <Form.Control
            as="select"
            name="users_id"
            value={sale.users_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un usuario</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <div className="text-center mt-4">
          <Button variant="primary" type="submit" disabled={!isFormValid}>
            Actualizar Venta
          </Button>
        </div>
      </Form>
      </Col>
      </Row>
    </div>
  );
}

export default UpdateSale;

/*
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { fetchSaleById, updateSale } from '../../../api/salesApi';
import { fetchProducts } from '../../../api/productApi';
import { fetchUsers } from '../../../api/usersApi';

function UpdateSale() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [sale, setSale] = useState({
    products_id: '',
    qty: '',
    sale_at: '',
    users_id: ''
  });
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const [saleData, productsData, usersData] = await Promise.all([
          fetchSaleById(id),
          fetchProducts(),
          fetchUsers()
        ]);

        // Asegurarnos que la fecha esté en el formato correcto
        const saleDate = saleData.sale_at ? new Date(saleData.sale_at).toISOString().split('T')[0] : '';

        setSale({
          products_id: saleData.products_id,
          qty: saleData.qty,
          sale_at: saleDate,
          users_id: saleData.users_id
        });
        setProducts(productsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching sale, products, and users:', error);
      }
    }

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSale(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await updateSale(id, sale);
      navigate('/sales');
    } catch (error) {
      console.error('Error updating sale:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = sale.products_id && sale.qty && sale.sale_at && sale.users_id && !isSubmitting;

  return (
    <div className="container">
      <h1 className="my-4 text-center text-primary fw-bold">Editar Venta</h1>

      <Form onSubmit={handleSubmit} className="border border-primary p-4 rounded-3 shadow-lg bg-light">
        <Form.Group controlId="formProductsId">
          <Form.Label>Productos</Form.Label>
          <Form.Control
            as="select"
            name="products_id"
            value={sale.products_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un producto</option>
            {products.map(product => (
              <option key={product.id} value={product.id}>{product.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formQty" className="mt-2">
          <Form.Label>Cantidad</Form.Label>
          <Form.Control
            type="number"
            name="qty"
            value={sale.qty}
            onChange={handleChange}
            placeholder="Introduce la cantidad"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSaleAt" className="mt-2">
          <Form.Label>Fecha de Venta</Form.Label>
          <Form.Control
            type="date"
            name="sale_at"
            value={sale.sale_at}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUsersId" className="mt-2">
          <Form.Label>Usuarios</Form.Label>
          <Form.Control
            as="select"
            name="users_id"
            value={sale.users_id}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona un usuario</option>
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <div className="text-center mt-4">
          <Button variant="primary" type="submit" disabled={!isFormValid}>
            Actualizar Venta
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default UpdateSale;
*/