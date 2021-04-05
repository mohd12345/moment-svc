import * as mongoose from "mongoose";
import { Nullable } from "../../libs/Nullable";
import VersioningRepository from "../versionable/VersioningRepository";
import IUserModel from "./IUserModel";
import { userModel } from "./userModel";

export default class UserRepository extends VersioningRepository<
  IUserModel,
  mongoose.Model<IUserModel>
> {
  constructor() {
    super(userModel);
  }

  public async get(query: any): Promise<Nullable<IUserModel>> {
    const projection = {
      _id: 0,
      createAt: 0,
      __v: 0,
    };
    return super.getByQuery(query, projection);
  }

  public async create(options: any): Promise<IUserModel> {
    return super.create(options);
  }
}
