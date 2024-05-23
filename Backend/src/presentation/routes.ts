import { Router } from 'express';
import  userRoutes  from './user/userRouter';
import  ProductRoutes from './products/productsRoutes';
import  SalesRoutes from './sales/salesRoutes';
import  RoleRoutes from './roles/rolesRoutes';




/**
 * Represents the routes of the application.
 */
export class AppRoutes {

  /**
   * Gets the router with all the defined routes.
   * @returns The router with the defined routes.
   */
  static get routes(): Router {

    const router = Router();
    
    router.use('/api/users', userRoutes);
    router.use('/api/products', ProductRoutes);
    router.use('/api/sales', SalesRoutes);
    router.use('/api/roles', RoleRoutes);

    return router;
  }
}

