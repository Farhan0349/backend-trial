import jwt from "jsonwebtoken";

const verifyToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const accessToken = authHeader && authHeader.split(" ")[1];

  if (!accessToken) {
    return res.status(401).send("Access Denied. No token provided.");
  }

  try {
    const decoded = jwt.verify(accessToken, process.env.JWT_SECRET);

    req.user = decoded;
    next();
  } catch (error) {
    return res
      .status(400)
      .json({ success: false, message: `${error.name}: ${error.message}` });
  }
};

export default verifyToken;
