import express from "express";

export const loginRoutes = express.Router();
import { login } from "../controllers/Login.controller.js";

loginRoutes.post('/login',login)