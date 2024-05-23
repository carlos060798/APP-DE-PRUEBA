import { Table, Container,Button} from 'react-bootstrap';
import { Product } from '../../../types/product';
import { deleteProduct } from '../../../api/productApi';
import { useState } from 'react';

function ProductList({ products, updateProducts }: { products: Product[], updateProducts: () => void }) {
  const [productList, setProductList] = useState(products);
  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
      setProductList(productList.filter(product => product.id !== id));
      updateProducts();
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
    }
  };
  return (
    <Container>
      <h1 className="my-4 text-center text-primary  fw-bold">Lista de Productos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:Product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
               <td>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
           
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;























/*
import React, { useEffect, useState } from 'react';
import { Table, Container } from 'react-bootstrap';
import { fetchProducts } from '../../../api/productApi';
import { Product } from '../../../types/product';



function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getProducts() {
      try {
        const products = await fetchProducts();
        setProducts(products);
      } catch (error) {
        console.error('Error al obtener la lista de productos:', error);
      }
    }

    getProducts();
  }, []);

  return (
    <Container>
      <h1 className="text-center my-4">Lista de Productos</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product:Product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default ProductList;

*/