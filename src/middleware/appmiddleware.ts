abstract class MiddleWare {
    abstract ensureAuth: any;
    abstract ensureGuest: any;
}

class AppMiddleware extends MiddleWare {
    ensureAuth = function (req: any, res: any, next: any) {
        if (req.isAuthenticated()) {
            console.log(req.user);
            return next();
        } else {
            return res.redirect('/');
        }
        throw new Error("Method not implemented.");
    }

    ensureGuest = function (req: any, res: any, next: any) {
            if (req.isAuthenticated()) {
                return res.redirect('/dashboard');
            } else {
                return next();
            }
            throw new Error("Method not implemented.");
        }
}

const appMiddleWare = new AppMiddleware();

export default appMiddleWare;
