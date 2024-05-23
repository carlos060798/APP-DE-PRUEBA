import express, { Router } from 'express';
import cors from 'cors';
import { start as startSequelize } from '../extends/connectionBd'; 
import corsOptions from '../extends/corsOptions';
import { swaggerUi, swaggerSpec } from '../extends/swaggerConfig';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}

/**
 * Represents a server that listens for incoming requests and handles them accordingly.
 */
export class Server {
  /**
   * The Express application instance.
   */
  public readonly app = express();

  /**
   * The server listener instance.
   */
  private serverListener?: any;

  /**
   * The port number on which the server listens.
   */
  private readonly port: number;

  /**
   * The public folder path for serving static files.
   */
  private readonly publicPath: string;

  /**
   * The router instance containing the routes for the server.
   */
  private readonly routes: Router;

  /**
   * Creates a new instance of the Server class.
   * @param options - The options for configuring the server.
   */
  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  /**
   * Starts the server and listens for incoming requests.
   */
  async start() {
    //* Middlewares
    this.app.use(express.json()); // raw
    this.app.use(express.urlencoded({ extended: true })); // x-www-form-urlencoded
    this.app.use(cors(corsOptions));
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    //* Public Folder
    this.app.use(express.static(this.publicPath));

    //* Routes
    this.app.use(this.routes);

    //* Start Sequelize
    await startSequelize(); // Llama a la función start de Sequelize

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${this.port}`);
    });
  }

  /**
   * Closes the server and stops listening for incoming requests.
   */
  public close() {
    this.serverListener?.close();
  }
}



/*import express, { Router } from 'express';
import path from 'path';

interface Options {
  port: number;
  routes: Router;
  public_path?: string;
}


export class Server {

  public readonly app = express();
  private serverListener?: any;
  private readonly port: number;
  private readonly publicPath: string;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port, routes, public_path = 'public' } = options;
    this.port = port;
    this.publicPath = public_path;
    this.routes = routes;
  }

  
  
  async start() {
    

    //* Middlewares
    this.app.use( express.json() ); // raw
    this.app.use( express.urlencoded({ extended: true }) ); // x-www-form-urlencoded

    //* Public Folder
    this.app.use( express.static( this.publicPath ) );

    //* Routes
    this.app.use( this.routes );

    //
    this.app.get('*', (req, res) => {
      const indexPath = path.join( __dirname + `../../../${ this.publicPath }/index.html` );
      res.sendFile(indexPath);
    });
    

    this.serverListener = this.app.listen(this.port, () => {
      console.log(`Server running on port ${ this.port }`);
    });

  }

  public close() {
    this.serverListener?.close();
  }

}

*/