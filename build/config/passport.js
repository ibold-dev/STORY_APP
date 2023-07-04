"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User_1 = __importDefault(require("../models/User"));
class Passport {
}
class PassportConfig extends Passport {
    googleStrategy(passport) {
        passport.use(new GoogleStrategy({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        }, (accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
            const newUser = {
                googleID: profile.id,
                displayName: profile.displayName,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                image: profile.photos[0].value,
            };
            try {
                let user = yield User_1.default.findOne({
                    googleID: profile.id
                });
                if (user) {
                    done(null, user);
                }
                else {
                    user = yield User_1.default.create(newUser);
                    done(null, user);
                }
            }
            catch (error) {
                console.error(error);
            }
        })));
        passport.serializeUser(function (user, done) {
            process.nextTick(function () {
                done(null, user);
            });
        });
        passport.deserializeUser(function (user, done) {
            process.nextTick(function () {
                User_1.default.findById(user.id);
                return done(null, user);
            });
        });
    }
}
const passportConfig = new PassportConfig();
exports.default = passportConfig;
//# sourceMappingURL=passport.js.map