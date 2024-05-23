import Product from '../../models/product';
import { Request, Response } from 'express';
import sequelize from '../../config/database';

/**
 * Controller class for handling product-related operations.
 */
export class ProductController {
   
   /**
    * Creates a new product.
    * 
    * @param req - The request object.
    * @param res - The response object.
    */
   static Productcreate = async (req: Request, res: Response) => {
     try {
        console.log("Conectando a la base de datos...");
        await sequelize.authenticate();
        console.log("Conexión establecida correctamente.");
        const { name, price, description } = req.body;
        const product = new Product({ name, price, description });
        console.log("Guardando usuario en la base de datos...");
        await product.save();
        console.log("Usuario guardado correctamente en la base de datos.");
        res.json({ message: 'Product created' ,product});
     } catch (err) {
        res.status(500).json({ err });
     }
    }

    /**
     * Retrieves a list of products.
     * 
     * @param req - The request object.
     * @param res - The response object.
     */
    static ProductList = async (req: Request, res: Response) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (err) {
            res.status(500).json({ err });
        }
    }
}