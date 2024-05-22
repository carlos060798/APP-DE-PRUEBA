import  { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import {  useNavigate } from 'react-router-dom';
import { fetchUsers } from '../../api/usersApi';
import { User } from '../../types/user';

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function getUsers() {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }

    getUsers();
  }, []);

  const handleRowClick = (id:string) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div>
      <h1 className="text-center my-4">Lista de Usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Documento</th>
            <th>Nombre</th>
            <th>Apellido</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} onClick={() => handleRowClick(user.id)} style={{ cursor: 'pointer' }}>
              <td>{user.document}</td>
              <td>{user.name}</td>
              <td>{user.last_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
























/*import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { fetchUsers } from '../../api/usersApi';
import { User } from '../../types/user';

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Lista de Usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Documento</th>
            <th>Apellido</th>
            <th>Nombre</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id}>
              <td>
                <Link to={`/edit/${user.id}`}>{user.document}</Link>
              </td>
              <td>{user.last_name}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;
*/





























/*
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { fetchUsers } from '../../api/usersApi';
import { User } from '../../types/user';
function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      try {
        const userList = await fetchUsers();
        setUsers(userList);
      } catch (error) {
        console.error('Error al obtener la lista de usuarios:', error);
      }
    }

    getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-center my-4">Lista de Usuarios</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
           
            <th>Documento</th>
            <th>Apellido</th>
            <th>Nombre</th>
           
            
          </tr>
        </thead>
        <tbody>
          {users.map((user:User) => (
            <tr key={user.id}>             
              <td>{user.document}</td>
              <td>{user.last_name}</td>
              <td>{user.name}</td>
             
             
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default UserList;

*/