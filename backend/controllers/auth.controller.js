import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export async function signup(req, res) {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    // Check if password are the same
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Don't Match" });
    }

    // check if username already taken
    const alreadyUser = User.findOne({ userName });
    if (alreadyUser) {
      return res.status(400).json({ error: "Username already in use" });
    }

    // Hash Password
    const passwordHash = bcrypt(password, 16);

    // Generating avatar image
    const boyImage = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlImage = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //Create User

    const newUser = User.create({
      fullName,
      userName,
      passwordHash,
      gender,
      profilePic: gender === "male" ? boyImage : girlImage,
    });

    await newUser.save();

    res.status(201).json({
      response: {
        _id: newUser._id,
        firstName: (await newUser).userName,
        userName: (await newUser).userName,
        profilePic: (await newUser).profilePic,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "An Error Occured" });
  }
}

export function login(req, res) {
  res.send("Login");
}

export function logout(req, res) {
  res.send("Logout");
}
