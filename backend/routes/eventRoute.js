import express from "express";
import {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvents,
    getEventById,
} from "../controllers/eventController.js";
import {protect, admin} from "../middleware/authMiddleware.js"
import checkObjectId from "../middleware/checkObjectId.js";

const router = express.Router();

router.route('/')
    .post(protect, createEvent)
    .get(protect, getEvents);
router.route('/edit-event/:id')
router.route('/:id')
    .put(protect, admin, checkObjectId, updateEvent)
    .delete(protect, admin, checkObjectId, deleteEvent)
    .get(protect, admin, checkObjectId, getEventById);

export default router;