import jwt from "jsonwebtoken";

function generateToken(userId) {
  const token = jwt.sign({ userId }, process.env.JWT_KEY, {
    expiresIn: "15d",
  });

  return token;
}

export default generateToken;
