import type { Express } from "express";
import { createServer } from "vite";

export async function attachViteDevMiddleware(app: Express): Promise<void> {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);
}
