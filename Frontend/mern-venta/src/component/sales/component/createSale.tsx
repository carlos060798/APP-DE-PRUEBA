import { useState, useEffect } from 'react';
import { Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { createSale } from '../../../api/salesApi';
import { fetchProducts } from '../../../api/productApi';
import { fetchUsers } from '../../../api/usersApi';
import { SaleForm } from '../../../types/sales';
import { Product } from '../../../types/product';
import { User } from '../../../types/user';
import { Row, Col } from 'react-bootstrap';



function SaleCreate() {
  const [products, setProducts] = useState<Product[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [productId, setProductId] = useState('');
  const [qty, setQty] = useState('');
  const [saleAt, setSaleAt] = useState('');
  const [userId, setUserId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      try {
        const productsData = await fetchProducts();
        const usersData = await fetchUsers();
        setProducts(productsData);
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching products and users:', error);
      }
    }

    fetchData();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData: SaleForm = {
      products_id: productId,
      qty: parseInt(qty),
      sale_at: saleAt,
      users_id: userId
    };

    setIsSubmitting(true);

    try {
      await createSale(formData);
      setProductId('');
      setQty('');
      setSaleAt('');
      setUserId('');
      navigate('/sales');
    } catch (error) {
      console.error('Error al crear la venta:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = productId && qty && saleAt && userId && !isSubmitting;

  return (
    <div className="container">
      <Row className="justify-content-center">
       <Col lg={6} md={8}>
      <h1 className="my-4 text-center text-primary fw-bold">Crear Venta</h1>
       
      <Form onSubmit={handleSubmit} className="border border-primary p-4 rounded-3 shadow-lg bg-light">
        <Form.Group controlId="formProductsId">
          <Form.Label>Productos</Form.Label>
          <Form.Control
            as="select"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
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
            value={qty}
            onChange={(e) => setQty(e.target.value)}
            placeholder="Introduce la cantidad"
            required
          />
        </Form.Group>

        <Form.Group controlId="formSaleAt" className="mt-2">
          <Form.Label>Fecha de Venta</Form.Label>
          <Form.Control
            type="date"
            value={saleAt}
            onChange={(e) => setSaleAt(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formUsersId" className="mt-2">
          <Form.Label>Usuarios</Form.Label>
          <Form.Control
            as="select"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
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
            Crear Venta
          </Button>
        </div>
      </Form>
      </Col>
      </Row>
    </div>
  );
}

export default SaleCreate;

