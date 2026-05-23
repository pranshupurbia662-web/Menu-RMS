import express from "express";
import Menu from "../models/MenuModel.js";

const router = express.Router();


// GET ALL MENU ITEMS

router.get("/", async (req, res) => {
  try {
    const menuItems = await Menu.find();

    res.json(menuItems);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;