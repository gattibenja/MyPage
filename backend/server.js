/* eslint-disable */
const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { connectDB } = require("./db/db.js");
const PORT = process.env.PORT || 4000;
const { notFoundHandler } = require("./middleWare/notFoundHandler.js");

app.use(
  cors({
    origin: process.env.CORS_ALLOWED_ORIGINS,
    credentials: true,
  })
);

//app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    message: "Mi portfolio.",
    endpoints: "",
  });
});

const messageRoutes = require("./routes/messageRoutes");
app.use("/api/messages", messageRoutes);

app.use(notFoundHandler);

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      status: err.status,
      message: err.message || "Ha ocurrido un error en el servidor.",
      stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
    },
  });
});

connectDB()
  .then(() => {
    console.log("✅ Base de Datos conectada");
    // Inicio del servidor
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("❌ Error al conectar a la base de datos:", error.message);
    process.exit(1);
  });
