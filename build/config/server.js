"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './src/config/config.env' });
const exphbs = require("express-handlebars");
const authRoutes = require("../routes/auth");
class Server {
}
class ServerConnect extends Server {
    constructor(PORT) {
        super();
        this.app = (0, express_1.default)();
        this.process = process.env.NODE_ENV;
        this.secret = process.env.APP_SESSION_SECRET;
        this.PORT = PORT;
        this.app;
    }
    connectServer() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running in ${process.env.NODE_ENV} mode on port ${this.PORT}.`);
        });
        return;
        throw new Error('Method not implemented.');
    }
    middleWare(middleware) {
        this.app.use(middleware);
        return;
        throw new Error('Method not implemented.');
    }
    routes(routes) {
        this.app.use('/', routes);
        return;
        throw new Error('Method not implemented.');
    }
    hbsEngine() {
        this.app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }));
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
const serverConnect = new ServerConnect(process.env.PORT);
exports.default = serverConnect;
//# sourceMappingURL=server.js.map