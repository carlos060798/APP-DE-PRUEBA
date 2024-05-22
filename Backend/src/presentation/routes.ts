import { Router } from 'express';
import  userRoutes  from './user/userRouter';
import  ProductRoutes from './products/productsRoutes';
import  SalesRoutes from './sales/salesRoutes';
import  RoleRoutes from './roles/rolesRoutes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    
    router.use('/api/users', userRoutes);
    router.use('/api/products', ProductRoutes);
    router.use('/api/sales', SalesRoutes);
    router.use('/api/roles', RoleRoutes);
    



    return router;
  }


}

