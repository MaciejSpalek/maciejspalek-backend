import {NextFunction, Request as ExpressRequest, Response} from 'express';
import jwt from 'jsonwebtoken';

interface DecodedToken {
    userId: string;
    iat: number;
    exp: number;
}

interface Request extends ExpressRequest {
    user?: DecodedToken;
}

const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
        res.status(401).json({ message: "No authorization token provided." });
        return;
    }

    try {
        req.user = jwt.verify(token, process.env.TOKEN_SECRET as string) as DecodedToken;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid or expired token." });
        return;
    }
};

export default verifyToken;
