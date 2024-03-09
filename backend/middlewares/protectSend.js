import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export async function protectSendRoute(req, res, next) {
  try {
    const token = req.cookies.jwt;

    // check if there is token
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorised - No token provided" });
    }

    //check if token is valid
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorised - Invalid Token" });
    }

    // Check if there is that User
    const currentUser = await User.findById(decoded.userId);
    if (!currentUser) {
      return res.status(404).json({ error: "User not found" });
    }
    req.user = currentUser;

    next();
  } catch (error) {
    console.log("Error: ", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}
