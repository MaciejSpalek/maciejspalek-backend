import Home from '../model/Home';
const create = async (req, res) => {
    try {
        const checkedHome = await Home.countDocuments();
        if (!checkedHome) {
            const home = new Home(req.body);
            await home.save();
            res.send({ status: 200, message: "Sucessfully added" });
        }
        else {
            await Home.updateOne({}, req.body);
            res.send({ status: 200, message: "Sucessfully added" });
        }
    }
    catch (error) {
        res.send(error);
    }
};
const get = async (_, res) => {
    try {
        const home = await Home.find({});
        res.json(home);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
export const homeController = {
    create,
    get,
};
