"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const morgan_1 = __importDefault(require("morgan"));
const passport = require("passport");
const express_session_1 = __importDefault(require("express-session"));
const server_1 = __importDefault(require("./config/server"));
const routes_1 = __importDefault(require("./routes"));
const passport_1 = __importDefault(require("./config/passport"));
const MongoStore = require("connect-mongo");
dotenv_1.default.config({ path: './src/config/config.env' });
passport_1.default.googleStrategy(passport);
server_1.default.connectServer();
db_1.default.connectDB();
if (server_1.default.process === 'development') {
    server_1.default.middleWare((0, morgan_1.default)('dev'));
}
server_1.default.hbsEngine();
server_1.default.hbsExt();
server_1.default.middleWare(express_1.default.static(path_1.default.join(__dirname, 'public')));
server_1.default.middleWare((0, express_session_1.default)({
    secret: server_1.default.secret,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI
    }),
}));
server_1.default.middleWare(passport.initialize());
server_1.default.middleWare(passport.session());
server_1.default.routes(routes_1.default);
server_1.default.authRoute();
//# sourceMappingURL=app.js.map