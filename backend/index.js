import express from "express";
import mongoose from "mongoose"
import { MongoUrl } from './config.js';
import { bookRouter } from './routes/Book.routes.js';
import { loginRoutes } from "./routes/Login.routes.js";
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization','Access-Control-Allow-Origin']
    
}));

app.use(express.json());
app.use("/api",[bookRouter,loginRoutes]);

mongoose
.connect(MongoUrl)
.then(() => {
    app.listen(5000,() => {
        console.log("Server running on port 5000...");
    })
}).catch((error) => {
    console.log(error);
});