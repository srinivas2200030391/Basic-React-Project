const JobSeeker = require("../models/JobSeeker");

const insertjobseeker = async (request, response) => {
  try {
    const input = await request.body;
    const jobseeker = await new JobSeeker(input);
    await jobseeker.save();
    response.send("Registered Successfully");
  } catch (e) {
    response.status(500).send(e.message);
  }
};

const checkjobseekerlogin = async (request, response) => {
  try {
    const input = request.body;
    const jobseeker = await JobSeeker.findOne(input);
    response.json(jobseeker);
  } catch (error) {
    response.status(500).send(error.message);
  }
};
module.exports = { insertjobseeker,checkjobseekerlogin, };
