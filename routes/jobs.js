const express = require("express")

const router = express.Router();

const jobController = require('../controllers/job');
const Auth = require('../Authentication/is-auth');


router.get("/jobs/all", jobController.getAllJobs)
router.get("/jobs/:category", jobController.getJobsByCategory)
router.get("/jobs/apply/:jobid", Auth.authentication, jobController.applyToJob)
router.post("jobs/create/:teacherid", Auth.authentication, jobController.createJob)

module.exports = router;