"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const upload = async (req, res) => {
    try {
        const protocol = req.protocol;
        const host = req.get("host");
        const fullUrl = `${protocol}://${host}`;
        if (!req.file) {
            res.status(400).json({ error: "No file uploaded" });
            return;
        }
        const fileUrl = `${fullUrl}/images/${req.file.originalname}`;
        res.status(200).json(fileUrl);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.upload = upload;
// const deleteOne = async (req: Request, res: Response): Promise<void> => {
//   try {
//     await gfs.files.deleteOne({ filename: req.params.filename });
//     res.send("success");
//   } catch (error) {
//     res.send("An error occured.");
//   }
// };
