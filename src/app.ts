import path from 'path';
import express from "express";
import { connection } from 'mongoose';
import databaseConnect from './config/db';
import dotenv from 'dotenv';
import morgan from "morgan";
import passport = require('passport');
import session from 'express-session'
import serverConnect from './config/server';
import routes from './routes';
import passportConfig from './config/passport';
import MongoStore = require('connect-mongo');

// load config
dotenv.config({ path: './src/config/config.env' });

// passport config

passportConfig.googleStrategy(passport);


serverConnect.connectServer();
databaseConnect.connectDB();

// MIDDLEWARE

if (serverConnect.process === 'development') {
    serverConnect.middleWare(morgan('dev'));
}

serverConnect.hbsEngine()
serverConnect.hbsExt()

serverConnect.middleWare(express.static(path.join(__dirname, 'public')));

serverConnect.middleWare(session({
    secret: serverConnect.secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
}));

serverConnect.middleWare(passport.initialize());
serverConnect.middleWare(passport.session());



// routes
serverConnect.routes(routes);
serverConnect.authRoute();
