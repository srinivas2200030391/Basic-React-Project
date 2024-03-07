const JobSeeker = require("../models/JobSeeker");
const Admin = require("../models/Admin");
const viewjobseekers = async (request, response) => {
  try {
    const jobseekers = await JobSeeker.find();
    if (jobseekers.length == 0) {
      response.send("DATA NOT FOUND");
    } else {
      response.json(jobseekers);
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};
const deletejobseeker = async (request, response) => {
  try {
    const email = request.params.email;
    const jobseeker = await JobSeeker.findOne({ email: email });
    if (jobseeker != null) {
      await JobSeeker.deleteOne({ email: email });
      response.send("Deleted Successfully");
    } else {
      response.send("Email ID Not Found");
    }
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const checkadminlogin = async (request, response) => {
  try {
    const input = request.body;
    console.log(input);
    const admin = await Admin.findOne(input);
    response.json(admin);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = {
  viewjobseekers,
  deletejobseeker,
  checkadminlogin,
};
