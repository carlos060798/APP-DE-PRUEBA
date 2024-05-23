import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Mi API Documentada con Swagger',
        version: '1.0.0',
        description: 'Documentación de mi API usando Swagger',
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Servidor de desarrollo de api de comercio',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'], // Archivos donde se encuentran los endpoints de tu API
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };