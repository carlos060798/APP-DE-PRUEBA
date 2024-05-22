import { CorsOptions } from 'cors';
const corsOptions: CorsOptions = {
    origin: 'http://localhost:5174',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}
export default corsOptions;