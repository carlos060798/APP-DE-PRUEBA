import api from '../lib/axios';
import { UserForm } from '../types/user';




  export async function createUser(formData: UserForm) {
    try {
      const { data } = await api.post("/users/create", formData);
      console.log(data);
      return data;
    } catch (error) {
      throw new Error("Error al crear el usuario");
    }
  }

  export async function fetchUsers() {
    try {
      const response = await api.get("/users");
      return response.data;
    } catch (error) {
      throw new Error("Error al obtener la lista de usuarios");
    }
  }

  export async function fetchUserById(id:string) {
    try {
      const response = await api.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
      throw new Error('Error al obtener los datos del usuario');
    }
  }

  export async function updateUser(id:string, userData: UserForm) {
    try {
      const {data} = await api.put(`/users/${id}`, userData);
      return data;
    } catch (error) {
      throw new Error('Error al actualizar los datos del usuario');
    }

  }

  export async function deleteUser(id:string) {
    try {
      const response = await api.delete(`/users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Error al eliminar el usuario');
    }
  
    }