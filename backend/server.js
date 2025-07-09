import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import cors from "cors";
import productRoutes from "./routes/product.route.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

// CORS configuration
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use("/api/products", productRoutes);
app.use("/api/auth", authRouter);



app.listen(5001, () => {
  connectDB();
  console.log("Server started at http://localhost:5001");
});
