import Product from '../../models/product';
import { Request, Response } from 'express';

export class ProductController {
   
   static Productcreate = async (req: Request, res: Response) => {

     try {
        const { name, price,description } = req.body;
        const newProduct = new Product({ name, price, description });
        await newProduct.save();
        res.json({ message: 'Product created' });
     } catch (err) {
        res.status(500).json({ err });
     }
    }

    static ProductList = async (req: Request, res: Response) => {
        try {
            const products = await Product.findAll();
            res.json(products);
        } catch (err) {
            res.status(500).json({ err });
        }
    }
}