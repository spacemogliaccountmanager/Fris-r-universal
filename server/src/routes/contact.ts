import { Router } from "express";
import type { Request, Response } from "express";
import { contactSchema } from "@shared/schemas/contact.schema";

const router = Router();

router.post("/", (req: Request, res: Response) => {
  const result = contactSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      ok: false,
      errors: result.error.flatten().fieldErrors,
    });
    return;
  }

  console.log("[contact] New submission:", result.data);

  res.json({ ok: true, message: "Tack! Vi hör av oss snart." });
});

export default router;
