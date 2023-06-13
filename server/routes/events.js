const express = require("express");
const {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getAllEvents,
} = require("../controllers/event");
const { verifyAdmin } = require("../middlewares/verifyToken");

const router = express.Router();

router.post("/", verifyAdmin, createEvent);
router.put("/:id", verifyAdmin, updateEvent);
router.delete("/:id", verifyAdmin, deleteEvent);

router.get("/find/:id", getEvent);
router.get("/", getAllEvents);

module.exports = router;