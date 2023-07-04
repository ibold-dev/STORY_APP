import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config({ path: './src/config/config.env' });

abstract class Database {
abstract  URI: string;
abstract connectDB(): Promise<void>;
}

class DatabaseConnect implements Database{
    URI: string;
    constructor(URI:string) {
    this.URI = URI;
}
    async connectDB(): Promise<void> {
        try {
        const conn = await mongoose.connect(this.URI);
        console.log(`MonogoDB Connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(error);
        process.exit(1);
        }
        return;
        throw new Error("Method not implemented.");
    }
}
const databaseConnect = new DatabaseConnect(process.env.MONGO_URI!);

export default databaseConnect;
