import express from "express";
const router = express.Router();

router.get("/", function (_: express.Request, res: express.Response) {
  res.json({ message: "Welcome to the API!!!" });
});

export default router;
