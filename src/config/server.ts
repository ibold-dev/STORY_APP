import express from 'express';
import dotenv from 'dotenv';
dotenv.config({ path: './src/config/config.env' });
import exphbs = require('express-handlebars');
import authRoutes = require('../routes/auth')

abstract class Server {
protected abstract PORT: string;
    abstract connectServer(): void;
    abstract middleWare(middleware: any): any;
    abstract routes(routes: any): any;
    abstract hbsEngine(): any;
    abstract hbsExt(): any;
    abstract authRoute(): any;
}

class ServerConnect extends Server {
    protected app = express();
    protected PORT: string;
    process = process.env.NODE_ENV;
    secret = process.env.APP_SESSION_SECRET!
    constructor(PORT: string) {
        super();
        this.PORT = PORT; this.app;
    }
    connectServer(): void {
    this.app.listen(this.PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${this.PORT}.`)
        });
        return;
        throw new Error('Method not implemented.');
    }
    middleWare(middleware:any) {
        this.app.use(middleware);
        return;
        throw new Error('Method not implemented.');
    }
    routes(routes: any) {
        this.app.use('/', routes);
        return;
        throw new Error('Method not implemented.');
    }
    hbsEngine() {
        this.app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }),);
        return;
        throw new Error('Method not implemented.');
    }
    hbsExt() {
        this.app.set('view engine', '.hbs');
        return;
        throw new Error('Method not implemented.');
    }

    authRoute() {
        this.app.use('/auth', authRoutes.default);
        return;
        throw new Error('Method not implemented.');
    }
}

const serverConnect = new ServerConnect(process.env.PORT!)

export default serverConnect;