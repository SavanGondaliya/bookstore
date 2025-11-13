import express from "express";
import dotenv from "dotenv";

dotenv.config();

const userToken = process.env.USER_TOKEN

export const authMiddleware = async(req,res,next) => {
  try { 

  const token = req.headers['authorization']?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: 'Access denied' });
  }

  if(token !== userToken){
    return res.status(403).json({ message: 'Invalid token' });
  }
  next();
  } catch (error) {
    return res.status(500)
  }
}