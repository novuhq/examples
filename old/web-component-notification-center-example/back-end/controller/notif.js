import { inAppNotification } from "../Novu/novu.js";
import Notif from "../models/notif.js";

export const createNotif = async (req, res) => {
    const { description } = req.body
    const newNotif = new Notif({
        description
    });
    try {
        await newNotif.save();
        await inAppNotification(description, "Sumit");
        res.status(201).json(newNotif);
    } catch (error) {
        res.status(409).json({ message: error });
    }
}