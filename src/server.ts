// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import connect from "./database/connection";
import router from "./routes";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 3000;

// CONFIGURAÇÃO DO CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  app.use(cors());
  next();
});

app.use(express.json());
app.use(router);
app.listen(port, () => {
  try {
    connect();
    console.log(`Server rodando em -> http://localhost:${port}`);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`Erro ao inicializar servidor -> ${error.message}`);
    }
  }
});
