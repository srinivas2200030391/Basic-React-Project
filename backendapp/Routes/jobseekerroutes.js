const jobseekercontroller = require("../controllers/jobseekercontroller");
const express = require("express");
const router = express.Router();

//jobseeker routes

router.post("/insertjobseeker", jobseekercontroller.insertjobseeker); //add a new user to the database
router.post("/checkjobseekerlogin", jobseekercontroller.checkjobseekerlogin); //add a new user to the database

module.exports = router;
