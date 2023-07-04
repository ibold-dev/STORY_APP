"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MiddleWare {
}
class AppMiddleware extends MiddleWare {
    constructor() {
        super(...arguments);
        this.ensureAuth = function (req, res, next) {
            if (req.isAuthenticated()) {
                console.log(req.user);
                return next();
            }
            else {
                return res.redirect('/');
            }
            throw new Error("Method not implemented.");
        };
        this.ensureGuest = function (req, res, next) {
            if (req.isAuthenticated()) {
                return res.redirect('/dashboard');
            }
            else {
                return next();
            }
            throw new Error("Method not implemented.");
        };
    }
}
const appMiddleWare = new AppMiddleware();
exports.default = appMiddleWare;
//# sourceMappingURL=appmiddleware.js.map