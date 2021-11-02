import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dontenv from "dotenv";
import role from "./routes/role.js";
dontenv.config(); // para que cuando ejecute el servidor las variables esten listas para usar

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection();
