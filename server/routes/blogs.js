import db from "../db/db-connection.js";
import Router from "express";


const router = Router();

//get all blogs posts to display sorted with recent blogs
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

  // get a single blog with blog_id
  router.get("/:blog_id", async (req, res) => {
    const blog_id = req.params.blog_id;
    try {
    const singleBlogPost = await db.one("SELECT * FROM blogs WHERE blog_id=$1", [
        blog_id,
    ]);
    res.send(singleBlogPost);
  } catch (e) {
    return res.status(400).json({ e });
  }
});

router.delete("/:deleteId", async (req, res) => {
    const deleteId= req.params.deleteId;

  console.log("Delete Contact Details" ,deleteId);
  try {
    await db.query('DELETE FROM blogs WHERE blog_id=$1', [deleteId]);
    res.send({ status: "success" });
    } catch (e) {
      console.log(e)
    return res.status(400).json({ e });
    }
    })


export default router;