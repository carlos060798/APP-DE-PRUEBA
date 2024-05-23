
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchSales, deleteSale } from '../../api/salesApi';
import { fetchProducts } from '../../api/productApi';
import { fetchUsers } from '../../api/usersApi';
import { Sale} from '../../types/sales';
import { Product } from '../../types/product';
import { User } from '../../types/user';

import { Button } from 'react-bootstrap';

function SalesList() {
    const [sales, setSales] = useState<Sale[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const [salesData, productsData, usersData] = await Promise.all([
                    fetchSales(),
                    fetchProducts(),
                    fetchUsers()
                ]);

                setSales(salesData);
                setProducts(productsData);
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching sales, products, and users:', error);
            }
        }

        fetchData();
    }, []);

    const handleDelete = async (id: string) => {
        try {
            await deleteSale(id);
            setSales(sales.filter(sale => sale.id !== id));
        } catch (error) {
            console.error('Error deleting sale:', error);
        }
    };

    const getProductNameById = (id: string): string => {
        const product = products.find(p => p.id === id);
        return product ? product.name : 'Producto no encontrado';
    };

    const getUserNameById = (id: string): string => {
        const user = users.find(u => u.id === id);
        return user ? user.name : 'Usuario no encontrado';
    };

 
    const formatDate = (dateString: string): string => {
      return new Date(dateString).toISOString().split('T')[0];
    };

  return (
    <>
      <h1 className="my-4 text-center text-primary fw-bold">Ventas</h1>
      <Link to="/sales/create" className="btn btn-primary">Crear venta</Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Productos</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale: Sale) => (
            <tr key={sale.id}>
              <td>{formatDate(sale.sale_at)}</td>
              <td>{getUserNameById(sale.users_id)}</td>
              <td>{getProductNameById(sale.products_id)}</td>
              <td>{sale.qty}</td>
              <td>
  <div className="d-flex ">
    <Link to={`/sales/update/${sale.id}`} className="btn btn-secondary me-2">
      Editar
    </Link>
    <Button onClick={() => handleDelete(sale.id)} className="btn btn-danger">
      Eliminar
    </Button>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default SalesList;


