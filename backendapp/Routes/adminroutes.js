const admincontroller = require("../controllers/admincontroller");
const express = require("express");
const router = express.Router();
router.get("/viewjobseekers/", admincontroller.viewjobseekers);
router.post("/checkadminlogin", admincontroller.checkadminlogin);
router.delete("/deletejobseeker/:email", admincontroller.deletejobseeker);
module.exports = router;
