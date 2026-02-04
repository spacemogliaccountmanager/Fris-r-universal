import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import cors from "cors";
import apiRouter from "./routes/index";
import { env } from "./lib/env";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function createApp() {
  const app = express();

  // ---------- Global middleware ----------
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // ---------- API routes ----------
  app.use("/api", apiRouter);

  // ---------- Static / SPA ----------
  if (env.isProduction) {
    const clientDist = path.resolve(__dirname, "../../dist/client");

    app.use(express.static(clientDist));

    app.get("*", (_req, res) => {
      res.sendFile(path.join(clientDist, "index.html"));
    });
  } else {
    const { attachViteDevMiddleware } = await import("./middleware/vite");
    await attachViteDevMiddleware(app);
  }

  return app;
}
