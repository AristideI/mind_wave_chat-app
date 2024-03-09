import User from "../models/user.model.js";

export async function getUsers(req, res) {
  try {
    const currentUser = req.user._id;

    const allUsers = await User.find({ _id: { $ne: currentUser } }).select(
      "-password"
    );

    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("Error: ", error.message);
    return res.status(500).json({ error: "Internal server error" });
  }
}
