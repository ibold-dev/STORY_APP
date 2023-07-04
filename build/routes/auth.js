"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const passport_1 = __importDefault(require("passport"));
class Authentication {
}
class AuthRoutes extends Authentication {
    constructor() {
        super();
        this.router = (0, express_1.Router)();
        this.router;
    }
    googleAuth() {
        this.router.get('/google', passport_1.default.authenticate('google', { scope: ['google'] }));
        return;
        throw new Error("Method not implemented.");
    }
    googleAuthCallback() {
        this.router.get('/google/callback', passport_1.default.authenticate('google', { failureRedirect: '/' }), (req, res) => {
            res.redirect('/dashboard');
        });
        return;
        throw new Error("Method not implemented.");
    }
    logOutUser() {
        this.router.get('/logout', (req, res) => {
            req.logOut();
            req.redirect('/');
        });
        throw new Error("Method not implemented.");
    }
}
const authRoutes = new AuthRoutes();
authRoutes.googleAuth();
authRoutes.googleAuthCallback();
exports.default = authRoutes.router;
//# sourceMappingURL=auth.js.map