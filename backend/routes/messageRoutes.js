const express = require("express");
const { saveMessage } = require("../controllers/messageController");

const router = express.Router();

router.post("/save", saveMessage);

module.exports = router;