import db from "../db/db-connection.js";
import Router from "express";


const router = Router();


router.get('/', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM blogs where favorite = true');
      res.send(result);
    } catch (e) {
      console.log(e)
      return res.status(400).json({ e });
    }
  });

  router.get('/:id', async (req, res) => {
    const favUserId = req.params.id
    console.log("Checking favUserId at backend" , favUserId);
  
    const result = await db.query(
      'SELECT * FROM blogs where blog_id = $1',[favUserId]
    );
    res.send(result);
  });

  router.post('/:id', async (req, res) => {

    const favBlogId = req.params.id
    console.log("Checking favBlogId at backend:" , favBlogId);
  try{
    const result = await db.query(
      `UPDATE blogs SET favorite = NOT favorite WHERE blog_id= $1`, [favBlogId]
    );
    res.status(200).json({status: "success"})
  }catch (e) {
    console.log(e)
    return res.status(400).json({ e });
  }
});

  export default router;