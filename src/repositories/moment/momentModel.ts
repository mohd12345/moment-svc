import * as mongoose from "mongoose";

import IMomentModel from "./IMomentModel";
import MomentSchema from "./MomentSchema";

export const momentSchema = new MomentSchema({
  collection: "Moment",
});

/**
 * Indicies
 */
momentSchema.index({ originalId: 1, deleteAt: 1 }, { unique: true });

/**
 * @typedef Resource
 */

export const momentModel: mongoose.Model<IMomentModel> = mongoose.model<IMomentModel>(
  "Moment",
  momentSchema,
  "Moments",
  true
);
