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
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './src/config/config.env' });
class Database {
}
class DatabaseConnect {
    constructor(URI) {
        this.URI = URI;
    }
    connectDB() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield mongoose_1.default.connect(this.URI);
                console.log(`MonogoDB Connected : ${conn.connection.host}`);
            }
            catch (error) {
                console.error(error);
                process.exit(1);
            }
            return;
            throw new Error("Method not implemented.");
        });
    }
}
const databaseConnect = new DatabaseConnect(process.env.MONGO_URI);
exports.default = databaseConnect;
//# sourceMappingURL=db.js.map