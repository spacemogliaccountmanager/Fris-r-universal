import { Router } from "express";
import type { Request, Response } from "express";
import { services } from "@shared/data/services";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.json({ ok: true, data: services });
});

export default router;
