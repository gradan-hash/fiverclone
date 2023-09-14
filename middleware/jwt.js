import jwt from "jsonwebtoken";

export const VerifyToken = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).send("youre not aunthenticated");

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err) return res.status(403).send("Token not valid");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};
