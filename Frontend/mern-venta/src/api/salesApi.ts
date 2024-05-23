import api from '../lib/axios';
import { SaleForm } from '../types/sales';


export async function createSale(formData: SaleForm) {
  try {
    const { data } = await api.post("/sales", formData);
    console.log(data);
    return data;
  } catch (error) {
    throw new Error("Error al crear la venta");
  }
}

export async function fetchSales() {
  try {
    const response = await api.get("/sales");
    return response.data;
  } catch (error) {
    throw new Error("Error al obtener la lista de ventas");
  }
}

export async function fetchSaleById(id:string) {
  try {
    const response = await api.get(`/sales/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los datos de la venta:', error);
    throw new Error('Error al obtener los datos de la venta');
  }
}

export async function updateSale(id:string, saleData: SaleForm) {
  try {
    const {data} = await api.put(`/sales/${id}`, saleData);
    return data;
  } catch (error) {
    throw new Error('Error al actualizar los datos de la venta');
  }

}

export async function deleteSale(id:string) {
  try {
    const response = await api.delete(`/sales/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error al eliminar la venta');
  }

  }