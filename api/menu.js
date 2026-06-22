import connectDB from "../Backend/config/Db.js";
import Menu from "../Backend/models/MenuModel.js";

export default async function handler(req, res) {
  try {
    await connectDB();

    const menuItems = await Menu.find();

    res.status(200).json(menuItems);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: error.message,
    });
  }
}