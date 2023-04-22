import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4001;
const servidor = app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
