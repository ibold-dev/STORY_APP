"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appmiddleware_1 = __importDefault(require("../middleware/appmiddleware"));
class AllRoutes {
}
class Routes extends AllRoutes {
    constructor() {
        super();
        this.router = (0, express_1.Router)();
        this.router;
    }
    loginRoute() {
        this.router.get('/', appmiddleware_1.default.ensureGuest, (req, res) => {
            res.render('login', { layout: 'login' });
        });
        return;
        throw new Error("Method not implemented.");
    }
    dashboard() {
        this.router.get('/dashboard', appmiddleware_1.default.ensureAuth, (req, res) => {
            console.log(req.user);
            res.render('dashboard', {});
        });
        return;
        throw new Error("Method not implemented.");
    }
}
const routes = new Routes();
routes.loginRoute();
routes.dashboard();
exports.default = routes.router;
//# sourceMappingURL=index.js.map