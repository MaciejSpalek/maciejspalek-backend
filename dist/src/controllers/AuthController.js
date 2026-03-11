import User from '../model/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerValidation, loginValidation, } from '../helpers';
const register = async (req, res) => {
    const { error } = registerValidation(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const nameExist = await User.findOne({ name: req.body.name });
    if (nameExist) {
        res.status(400).send("Name already exists");
        return;
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const user = new User({
        name: req.body.name,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: Number(process.env.TOKEN_LIFE_TIME),
        });
        res.header("auth-token", token).status(200).send({
            name: savedUser.name,
            token,
            tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
};
const login = async (req, res) => {
    const validationErrors = loginValidation(req.body);
    if (validationErrors) {
        res.status(422).send(validationErrors);
        return;
    }
    const user = await User.findOne({ name: req.body.name });
    if (!user) {
        res.status(422).send({ name: "Name is not found" });
        return;
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
        res.status(422).send({ password: "Invalid password" });
        return;
    }
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: Number(process.env.TOKEN_LIFE_TIME),
    });
    res.header("auth-token", token).status(200).send({
        tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
        name: req.body.name,
        token,
    });
};
const verifyUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id);
        console.log(req);
        if (!user) {
            res.status(401).json({ isAuthenticated: false });
            return;
        }
        res.status(200).json({
            isAuthenticated: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({ isAuthenticated: false });
    }
};
export const authController = {
    register,
    login,
    verifyUser
};
