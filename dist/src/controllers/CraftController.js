import Craft from '../model/Craft';
const createOrUpdate = async (req, res) => {
    try {
        const crafts = req.body.crafts;
        for (const craftBody of crafts) {
            const { _id: id } = craftBody || {};
            if (id) {
                await Craft.findByIdAndUpdate(id, craftBody);
            }
            else {
                const craft = new Craft(craftBody);
                await craft.save();
            }
        }
        res.send({ status: 200, message: "Sucessfully updated" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
const getAll = async (_, res) => {
    try {
        const craft = await Craft.find({});
        res.json(craft);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
const getOne = async (req, res) => {
    try {
        const type = req.params.type;
        const [craft] = await Craft.find({ type });
        res.send(craft);
    }
    catch (error) {
        res.json(error);
    }
};
export const craftController = {
    createOrUpdate,
    getAll,
    getOne,
};
