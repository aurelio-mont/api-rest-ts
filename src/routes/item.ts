import { Router } from "express";
import { deleteItem, getItem, getItems, postItem, updateItem } from "../controllers/item.controller";
import { logMiddelware } from "../middelware/log.middelware";

const router = Router();

router.get("/", logMiddelware, getItems)
router.get("/:id", getItem)
router.post("/", postItem)
router.put("/:id", updateItem)
router.delete("/:id", deleteItem)

export { router };
