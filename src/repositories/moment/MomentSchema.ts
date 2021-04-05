import * as mongoose from "mongoose";
import VersionableSchema from "../versionable/VersionableSchema";
export default class MomentSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      title: {
        required: true,
        type: String,
      },
      tags: [
        {
          required: true,
          type: String,
        },
      ],
      user: {
        ref: "Users",
        type: mongoose.SchemaTypes.ObjectId,
      },
      image: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, options);
  }
}
