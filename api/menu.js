import connectDB from "../Backend/config/Db.js";
import Menu from "../Backend/models/MenuModel.js";

export default async function handler(req, res) {

  await connectDB();

  if (req.method === "GET") {

    try {

      const menuItems = await Menu.find();

      res.status(200).json(menuItems);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }

  }

}