import { Request, Response } from 'express';
import Post from '../model/Post';

const createOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send({ status: 200, message: "Sucessfully created" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const getOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).send({ data: post, status: 200 });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const deleteOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.send({ status: 200, message: "Sucessfully deleted" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const updateOne = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id;
    const body = req.body;

    await Post.findByIdAndUpdate(id, body);
    res.send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

interface PostQuery {
  type?: string;
  limit?: string;
}

const getList = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type, limit } = req.query as PostQuery;
    const posts = await Post.find(type ? { type } : {})
      .sort({ created_at: -1 })
      .limit(limit ? parseInt(limit) : 0);
    res.status(200).json(posts);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

const getPostsAmount = async (req: Request, res: Response): Promise<void> => {
  try {
    const { type } = req.query as PostQuery;
    const postsAmount = await Post.countDocuments({ type });
    res.status(200).json(postsAmount);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

export const postController = {
  createOne,
  getOne,
  deleteOne,
  updateOne,
  getList,
  getPostsAmount,
};