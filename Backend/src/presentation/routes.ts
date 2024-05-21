import { Router } from 'express';
import  userRoutes  from './user/userRouter';
import  ProductRoutes from './products/productsRoutes';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    
    router.use('/api/users', userRoutes);
    router.use('/api/products', ProductRoutes);
    



    return router;
  }


}

