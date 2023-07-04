import { Router } from "express";
import passport from "passport";

abstract class Authentication {
    abstract googleAuth(): any;
    abstract googleAuthCallback(): any;
    abstract logOutUser(): any;
}

class AuthRoutes extends Authentication {
    router = Router();
    constructor() {
        super();
        this.router;
}
    googleAuth() {
        this.router.get('/google', passport.authenticate('google', {scope: ['google']}));
        return;
        throw new Error("Method not implemented.");
    }

    googleAuthCallback() {
        this.router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req: any, res: any)=> {
            res.redirect('/dashboard');
        });
        return;
        throw new Error("Method not implemented.");
    }
    logOutUser() {
        this.router.get('/logout', (req:any, res:any) => {
            req.logOut();
            req.redirect('/')
        })
        throw new Error("Method not implemented.");
    }
}
const authRoutes = new AuthRoutes();

authRoutes.googleAuth();
authRoutes.googleAuthCallback();

export default authRoutes.router;