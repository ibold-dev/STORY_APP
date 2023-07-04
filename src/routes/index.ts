import { Router } from "express";
import appMiddleWare from "../middleware/appmiddleware";

abstract class AllRoutes {
abstract loginRoute(): any;
abstract dashboard(): any;
}

class Routes extends AllRoutes{
    router = Router();
    constructor() {
        super();
        this.router;
}

    loginRoute() {
        this.router.get('/', appMiddleWare.ensureGuest ,(req, res) => {
            res.render('login', { layout: 'login' });
        });
        return;
        throw new Error("Method not implemented.");
    }
    dashboard() {
        this.router.get('/dashboard', appMiddleWare.ensureAuth, (req, res) => {
        console.log(req.user);
            res.render('dashboard', {
        // name : req.user?.firstName,
    });
        });
        return;
        throw new Error("Method not implemented.");
    }

    

}

const routes = new Routes();

routes.loginRoute();
routes.dashboard();


export default routes.router;