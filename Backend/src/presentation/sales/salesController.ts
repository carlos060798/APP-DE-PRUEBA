import Sale from '../../models/sale';

import { Request, Response } from 'express';
import sequelize from '../../config/database';
/**
 * Controller class for handling sales-related operations.
 */
export class SalesController {
    
    /**
     * Creates a new sale.
     * @param req - The request object.
     * @param res - The response object.
     */
    static Salescreate = async (req: Request, res: Response) => {
        try {
            console.log("Conectando a la base de datos...");
            await sequelize.authenticate();
            console.log("Conexión establecida correctamente.");
            const sale = new Sale(req.body);
            console.log("Guardando venta en la base de datos...", sale);
            await sale.save();
            console.log("Venta guardada correctamente en la base de datos.");
            res.json({ message: 'Sale created', sale });
        } catch (err) {
            res.status(500).json({ err });
        }
    }
    
    /**
     * Retrieves a list of all sales.
     * @param req - The request object.
     * @param res - The response object.
     */
    static SalesList = async (req: Request, res: Response) => {
        try {
            const sales = await Sale.findAll();
            res.json(sales);
        } catch (err) {
            res.status(500).json({ err });
        }
    }

    /**
     * Retrieves a sale by its ID.
     * @param req - The request object.
     * @param res - The response object.
     */
    static SalesListById = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const sales = await Sale.findByPk(id);
            res.json(sales);
        } catch (err) {
            res.status(500).json({ err });
        }   
    }

    /**
     * Updates a sale.
     * @param req - The request object.
     * @param res - The response object.
     */
    static SalesUpdate = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            
            const sale = await Sale.findByPk(id);
            
            if (!sale) {
                return res.status(404).json({ error: 'Sale not found' });
            }
            
            await sale.update(req.body);
            res.json({ message: 'Sale updated', sale });
        } catch (err) {
            res.status(500).json({ err });
        }
    }
    
    /**
     * Deletes a sale.
     * @param req - The request object.
     * @param res - The response object.
     */
    static SalesDelete = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;
            const sale = await Sale.findByPk(id);
            if (!sale) {
                return res.status(404).json({ error: 'Sale not found' });
            }
            await sale.destroy();
            res.json({ message: 'Sale deleted' });
        } catch (err) {
            res.status(500).json({ err });
        }
    }
}