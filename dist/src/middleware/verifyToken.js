import jwt from 'jsonwebtoken';
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        res.status(401).json({ message: "No authorization token provided." });
        return;
    }
    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET);
        next();
    }
    catch (err) {
        res.status(401).json({ message: "Invalid or expired token." });
        return;
    }
};
export default verifyToken;
