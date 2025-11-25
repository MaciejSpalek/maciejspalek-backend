import {NextFunction, Response,  Request as ExpressRequest} from "express";

import jwt from 'jsonwebtoken'

interface DecodedToken {
    userId: string;
    iat: number;
    exp: number;
}

interface Request extends ExpressRequest {
    user?: DecodedToken;
}

module.exports = function auth(req:Request, res:Response, next: NextFunction) {
    const token = req.header('auth-token');
    
    if(!token) return res.status(401).send('Access denied!');

    try {
        req.user =  jwt.verify(token, process.env.TOKEN_SECRET as string) as DecodedToken;

        next();
    } catch(error) {
        res.status(400).send('Invalid Token')
    }
}