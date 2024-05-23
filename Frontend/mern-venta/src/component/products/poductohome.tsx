import  { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProductCreate from './component/crearPoducto';
import ProductList from './component/product-list';
import { fetchProducts } from '../../api/productApi';


function ProductHome() {
  const [products, setProducts] = useState([]);

  const updateProducts = async () => {
    try {
      const products = await fetchProducts();
      setProducts(products);
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
    }
  };

  useEffect(() => {
    updateProducts();
  }, []);

  return (
    <>
    
      <Container>
        <Row>
          <Col>
            <ProductCreate updateProducts={updateProducts} />
          </Col>
          <Col>
          <ProductList products={products} updateProducts={updateProducts} />

          </Col>
        </Row>
      </Container>
    </>
  );
}

export default ProductHome;













