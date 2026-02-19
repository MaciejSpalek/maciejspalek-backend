import mongoose, { Document, Schema } from "mongoose";

interface IHomeHeader {
  description: string;
  first_photo: string;
  second_photo: string;
}

interface IHomeAbout {
  photo: string;
  description: string;
}

interface IHomeContent {
  header: IHomeHeader;
  about: IHomeAbout;
}

interface IHome extends Document {
  home: IHomeContent;
}

const homeSchema = new Schema({
  home: {
    header: {
      description: {
        type: String,
        required: true,
      },
      first_photo: {
        type: String,
        required: true,
      },
      second_photo: {
        type: String,
        required: true,
      },
    },
    about: {
      photo: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
    },
  },
});

export default mongoose.model<IHome>("Home", homeSchema);