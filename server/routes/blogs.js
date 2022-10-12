import db from "../db/db-connection.js";
import Router from "express";

const router = Router();

router.get("/", async (req, res) => {
    try {
      const blogsPosts = await db.query("SELECT * FROM blogs ORDER BY date",[
        true,
      ]);
      res.send(blogsPosts);
    } catch (e) {
        console.log(e)
      return res.status(400).json({ e });
    }
  });




export default router;