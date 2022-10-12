import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import blogs from "./routes/blogs.js";
import './db/db-connection.js';


// set port and listen for requests
const app = express();
const PORT = 5000;


app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// creates an endpoint for the route /api
// app.get('/', (req, res) => {
//   res.json({ message: 'Backend Running' });
// });

// app.use("/", allRouter);
app.use("/blogs", blogs);


// console.log that your server is up and running
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
