import * as mongoose from "mongoose";
import { Nullable } from "../../libs/Nullable";
import VersioningRepository from "../versionable/VersioningRepository";
import IMomentModel from "./IMomentModel";
import { momentModel } from "./momentModel";

export default class MomentRepository extends VersioningRepository<
  IMomentModel,
  mongoose.Model<IMomentModel>
> {
  constructor() {
    super(momentModel);
  }

  public async list(query = {}, options: any): Promise<IMomentModel[]> {
    return super.getAll(query, {}, options);
  }

  public async get(query: any): Promise<Nullable<IMomentModel>> {
    const projection = {
      _id: 0,
      createAt: 0,
      __v: 0,
    };
    return super.getByQuery(query, projection);
  }

  public async create(options: any): Promise<IMomentModel> {
    return super.create(options);
  }
}
