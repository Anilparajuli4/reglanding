const express = require("express");
const SubscribeController = require("../controllers/SubscribeController");
const router = express.Router();
router.post("/subscribe", SubscribeController);
module.exports = router;