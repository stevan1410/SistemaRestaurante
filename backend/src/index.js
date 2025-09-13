import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Middlewares globales
app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(morgan("dev"));

// ✅ Ruta de prueba
app.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Backend corriendo en http://localhost:${PORT}`);
});
