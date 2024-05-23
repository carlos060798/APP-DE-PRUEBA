## Documentación de la API
### DEMO DE LA PRUBA EN VIDEO : https://youtu.be/3IkkfcpBm4I?si=UUP70R8DTt6pDx3U
Descripción

Esta API proporciona acceso a una colección de usuarios, productos, ventas y roles de usuario.
Base URL

http://localhost:3000/api
Módulo de Usuarios
## Crear Usuario
Método

POST
Ruta

/users/create
Descripción

Crea un nuevo usuario.
Body

json

{
    "document": "1004997117",
    "last_name": "test",
    "name": "prueba"
}

Respuesta Exitosa

json

{
    "id": "6018af9c-e7d6-4594-b7c5-a368e7856ed0",
    "document": "10049971785",
    "last_name": "test1",
    "name": "usuario 1",
    "updatedAt": "2024-05-23T11:43:52.177Z",
    "createdAt": "2024-05-23T11:43:52.177Z"
}

## Actualizar Usuario
Método

PUT
Ruta

/users/:userId
Descripción

Actualiza un usuario existente.
Body

json

{
    "last_name": "test2"
}

Respuesta Exitosa

json

{
    "id": "6018af9c-e7d6-4594-b7c5-a368e7856ed0",
    "document": "10049971785",
    "last_name": "test2",
    "name": "usuario 1",
    "updatedAt": "2024-05-23T11:43:52.177Z",
    "createdAt": "2024-05-23T11:43:52.177Z"
}

## Eliminar Usuario
Método

DELETE
Ruta

/users/:userId
Descripción

Elimina un usuario existente.
Respuesta Exitosa

No hay contenido en la respuesta en caso de éxito.
## Obtener Usuario
Método

GET
Ruta

/users/:userId
Descripción

Obtiene un usuario específico por su ID.
Respuesta Exitosa

json

{
    "id": "6018af9c-e7d6-4594-b7c5-a368e7856ed0",
    "document": "10049971785",
    "last_name": "test1",
    "name": "usuario 1",
    "roles_id": null,
    "createdAt": "2024-05-23T11:43:52.177Z",
    "updatedAt": "2024-05-23T11:43:52.177Z"
}

## Módulo de Productos
### Crear Producto
Método

POST
Ruta

/products/create
Descripción

Crea un nuevo producto.
Body

urlencoded

{
    "id": "1667e589-071b-424c-b7e4-018ffd41e395",
    "name": "Docena de huevos",
    "description": "ministro de haciendo aprueba"
}

Respuesta Exitosa

json

{
    "id": "1667e589-071b-424c-b7e4-018ffd41e395",
    "name": "Docena de huevos",
    "description": "ministro de haciendo aprueba",
    "price": 1800,
    "createdAt": "2024-05-23T12:05:42.288Z",
    "updatedAt": "2024-05-23T12:05:42.288Z"
}

## Módulo de Ventas
### Crear Venta
Método

POST
Ruta

/sales/:productId/:userId
Descripción

Crea una nueva venta para un producto y usuario específicos.
Body

urlencoded

{
    "qty": 18525,
    "sale_at": "2024-05-22T03:11:03.780Z"
}

Respuesta Exitosa

json

{
    "id": "9b349dec-d33f-4282-ba7b-ce749172f39c",
    "products_id": "1690bf19-913c-4643-a18b-56a41b8e46c2",
    "qty": 5,
    "sale_at": "2024-05-10T00:00:00.000Z",
    "users_id": "fc4828b4-2119-41cd-bf2b-09010bc5b6b8",
    "createdAt": "2024-05-23T12:24:55.010Z",
    "updatedAt": "2024-05-23T12:24:55.010Z"
}

### Obtener Ventas de un Producto para un Usuario
Método

GET
Ruta

/sales/:productId/:userId
Descripción

Obtiene las ventas de un producto específico para un usuario específico.
Respuesta Exitosa

json

[
    {
        "id": "9b349dec-d33f-4282-ba7b-ce749172f39c",
        "products_id": "1690bf19-913c-4643-a18b-56a41b8e46c2",
        "qty": 5,
        "sale_at": "2024-05-10T00:00:00.000Z",
        "users_id": "fc4828b4-2119-41cd-bf2b-09010bc5b6b8",
        "createdAt": "2024-05-23T12:24:55.010Z",
        "updatedAt": "2024-05-23T12:24:55.010Z"
    },
    ...
]
### Actualizar Venta
Método

PUT
Ruta

/sales/:saleId
Descripción

Actualiza una venta específica por su ID.
Body

urlencoded

{
    "qty": 25
}

Respuesta Exitosa

json

{
    "id": "9b349dec-d33f-4282-ba7b-ce749172f39c",
    "products_id": "1690bf19-913c-4643-a18b-56a41b8e46c2",
    "qty": 25,
    "sale_at": "2024-05-10T00:00:00.000Z",
    "users_id": "fc4828b4-2119-41cd-bf2b-09010bc5b6b8",
    "createdAt": "2024-05-23T12:24:55.010Z",
    "updatedAt": "2024-05-23T12:24:55.010Z"
}

### Eliminar Venta
Método

DELETE
Ruta

/sales/:saleId
Descripción

Elimina una venta específica por su ID.
Respuesta Exitosa

No hay contenido en la respuesta en caso de éxito.
Listar Ventas
Método

GET
Ruta

/sales
Descripción

### Obtiene todas las ventas.
Respuesta Exitosa

json

[
    {
        "id": "9b349dec-d33f-4282-ba7b-ce749172f39c",
        "products_id": "1690bf19-913c-4643-a18b-56a41b8e46c2",
        "qty": 5,
        "sale_at": "2024-05-10T00:00:00.000Z",
        "users_id": "fc4828b4-2119-41cd-bf2b-09010bc5b6b8",
        "createdAt": "2024-05-23T12:24:55.010Z",
        "updatedAt": "2024-05-23T12:24:55.010Z"
    },
    ...
]


## Módulo de Roles
### Crear Rol
Método

POST
Ruta

/roles
Descripción

Crea un nuevo rol.
Body

urlencoded

{
    "name": "employee"
}

Respuesta Exitosa

json

{
    "id": "63bde24f-c265-42a5-8ea0-63de585e4a99",
    "name": "employee"
}

### Cambiar Rol del Usuario
Método

PUT
Ruta

/users/change-role/:userId
Descripción

Cambia el rol de un usuario específico por su ID.
Body

urlencoded

{
    "roles_id": "63bde24f-c265-42a5-8ea0-63de585e4a99"
}

Respuesta Exitosa

json

{
    "id": "6018af9c-e7d6-4594-b7c5-a368e7856ed0",
    "document": "10049971785",
    "last_name": "test1",
    "name": "usuario 1",
    "roles_id": "63bde24f-c265-42a5-8ea0-63de585e4a99",
    "createdAt": "2024-05-23T11:43:52.177Z",
    "updatedAt": "2024-05-23T11:43:52.177Z"
}



