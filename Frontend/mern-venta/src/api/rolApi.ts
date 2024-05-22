import api from '../lib/axios';
import { RoleForm } from '../types/rol';
export async function createRole(roleData: RoleForm){
  try {
    const response = await api.post('/roles', roleData);
    return response.data;

  }
    catch (error) {
        throw new Error('Error al crear el rol');
    }
}