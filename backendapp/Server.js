const express = require("express"); //importing the express library
const mongoose = require("mongoose"); //
const cors = require("cors");
const router = require("./Routes/jobseekerroutes");
const adminrouter = require("./Routes/adminroutes");
const dburl = "mongodb://0.0.0.0:27017/demoproject14";
mongoose
  .connect(dburl)
  .then(() => {
    console.log("Connected to DB successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });
const app = express();
app.use(express.json());
app.use(cors());
app.use("", router);
app.use("/admin", adminrouter);
const PORT = 2014;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
