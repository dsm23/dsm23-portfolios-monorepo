import { Router } from "express";
import {
  getAllContacts,
  getContactsForList,
  searchContacts,
} from "~/controllers/contacts";
import { verifyToken } from "~/middlewares/auth";

const contactsRoutes = Router();

contactsRoutes.post("/search", verifyToken, searchContacts);
contactsRoutes.get("/all-contacts", verifyToken, getAllContacts);
contactsRoutes.get("/get-contacts-for-list", verifyToken, getContactsForList);

export default contactsRoutes;
