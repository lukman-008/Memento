import express from "express";
import dotenv from "dotenv/config";
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.send("Hello World!");
});



import routes from "./routes/index.js";
app.use(routes);





app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
