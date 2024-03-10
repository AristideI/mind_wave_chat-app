import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export async function signup(req, res) {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    // Check if password are the same
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password Don't Match" });
    }

    // check if username already taken
    const alreadyUser = await User.findOne({ userName });
    if (alreadyUser) {
      return res.status(400).json({ error: "Username already in use" });
    }

    //  Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generating avatar image
    const boyImage = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlImage = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    //Create User

    const newUser = await User.create({
      fullName,
      userName,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyImage : girlImage,
    });

    await newUser.save();

    res.status(201).json({
      response: {
        _id: newUser._id,
        fullName: (await newUser).fullName,
        userName: (await newUser).userName,
        profilePic: (await newUser).profilePic,
      },
    });
  } catch (error) {
    console.log("We had an error, ", error.message);
    res.status(500).json({ error: "An Error Occured" });
  }
}

export async function login(req, res) {
  try {
    //Get Username and password
    const { userName, password } = req.body;

    //Check if there is a user with that username
    const currentUser = await User.findOne({ userName });

    //check if password matches the one of the user
    const isPasswordCorrect = bcrypt.compare(
      password,
      currentUser.password || ""
    );

    //If no user r password dont match
    if (!currentUser || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    //Generate token
    const token = generateToken(currentUser._id);

    //send responce
    res.status(200).json({
      response: {
        _id: currentUser._id,
        firstName: currentUser.userName,
        userName: currentUser.userName,
        profilePic: currentUser.profilePic,
        token,
      },
    });
  } catch (error) {
    console.log("We had an error, ", error.message);
    res.status(500).json({ error: "An Error Occured" });
  }
}

export function logout(req, res) {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("We had an error, ", error.message);
    res.status(500).json({ error: "An Error Occured" });
  }
}
