const express = require("express");

const router = express.Router();

const jobController = require("../controllers/job");
const Auth = require("../Authentication/is-auth");

<<<<<<< HEAD
// to get all jobs
router.get("/jobs/all", jobController.getAllJobs)

// to get jobs category wise
router.get("/jobs/:category", jobController.getJobsByCategory)

// to apply to a job
router.get("/jobs/apply/:jobid", Auth.authentication, jobController.applyToJob)

// to create a new job
router.post("jobs/create/:teacherid", Auth.authentication, jobController.createJob)

module.exports = router;
=======
router.get("/jobs/all", jobController.getAllJobs);
router.get("/jobs/:category", jobController.getJobsByCategory);
router.get("/jobs/apply/:jobid", Auth.authentication, jobController.applyToJob);
router.post("/jobs/create", jobController.createJob);

module.exports = router;
>>>>>>> 589dc6f7c6b32166fa7905fc9469f50aa3b60a5a
