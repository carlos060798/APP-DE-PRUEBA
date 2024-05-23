import Product from '../models/product';

export const insertProducts = async () => {
  try {
    const productsData = [
      {
        name: "Arroz",
        description: "Libra",
        price: 3000
      },
      {
        name: "Papas",
        description: "Libra",
        price: 1000
      },
      {
        name: "Agua sin gas",
        description: "500 ml",
        price: 2000
      },
      {
        name: "Agua con gas",
        description: "500 ml",
        price: 2500
      },
      {
        name: "Docena de huevos",
        description: "ministro de haciendo aprueba",
        price: 1800
      }
    ];

    // Insertar los datos de productos en la base de datos
    await Product.bulkCreate(productsData);

    console.log('Datos de productos insertados con éxito.');
  } catch (error) {
    console.error('Error al insertar datos de productos:', error);
  }
};


