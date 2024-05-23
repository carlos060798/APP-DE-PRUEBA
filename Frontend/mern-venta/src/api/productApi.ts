
import api from "../lib/axios";
import { ProductForm} from '../types/product';



export async function createProduct(productData:ProductForm) {
    try {
      const response = await api.post('/products/create', productData);
      return response.data;
    } catch (error) {
      console.error('Error al crear el producto:', error);
      throw error;
    }
  }
  
  export async function fetchProducts() {
    try {
      const response = await api.get('/products');
      return response.data;
    } catch (error) {
      console.error('Error al obtener la lista de productos:', error);
      throw error;
    }
  }