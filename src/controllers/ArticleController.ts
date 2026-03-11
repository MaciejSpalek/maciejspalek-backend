import { Request, Response } from 'express';
import { articleValidation } from '../helpers';
import Article from '../model/Article';

const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const article = new Article(req.body);

    const validationErrors = articleValidation(req.body);
    if (validationErrors) {
      res.status(422).send({ status: 422, errors: validationErrors });
      return;
    }

    await article.save();
    res.send({ status: 200, message: "Successfully created" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    const article = await Article.findById(id);
    res.status(200).send({ data: article, status: 200 });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const body = req.body;

    await Article.findByIdAndUpdate(id, body);
    res.status(200).send({ status: 200, message: "Successfully updated" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;

    await Article.findByIdAndDelete(id);
    res.status(200).send({ status: 200, message: "Successfully deleted" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

const getAll = async (req: Request, res: Response): Promise<void> => {
  try {
    const articles = await Article.find()
      .sort({ created_at: -1 })
      .limit(req.query.limit ? parseInt(req.query.limit as string) : 10);
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

export const articleController = {
  createOne,
  getOne,
  updateOne,
  deleteOne,
  getAll,
};