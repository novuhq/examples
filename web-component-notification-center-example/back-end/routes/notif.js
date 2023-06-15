import express from "express";
import { createNotif } from '../controller/notif.js'

const router = express.Router();

router.post('/', createNotif)

export default router;