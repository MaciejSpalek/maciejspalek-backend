import { Request, Response } from 'express';

declare const gfs: any;

export const upload = async (req: Request, res: Response): Promise<void> => {
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
  } catch (error) {
    res.status(400).json(error);
  }
};

// const deleteOne = async (req: Request, res: Response): Promise<void> => {
//   try {
//     await gfs.files.deleteOne({ filename: req.params.filename });
//     res.send("success");
//   } catch (error) {
//     res.send("An error occured.");
//   }
// };

