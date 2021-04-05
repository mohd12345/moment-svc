import { Document, Model, Query, DocumentQuery } from "mongoose";

export default abstract class BaseRepository<
  D extends Document,
  M extends Model<D>
> {
  protected modelType: M;
  constructor(modelType: M) {
    this.modelType = modelType;
  }

  /**
   * Create
   * @property {string} body.name - The name of record.
   * @returns {D}
   */
  public async create(options: any): Promise<D> {
    const model = new this.modelType({
      ...options,
    });

    return model.save();
  }

  public count(conditions: any = {}): Query<number> {
    return this.modelType.count(conditions);
  }

  protected async getAll(
    conditions: any,
    projection?: any | null,
    options?: any | null
  ): Promise<D[]> {
    return this.modelType
      .find(conditions, projection, options)
      .sort({ createdAt: -1 });
  }

  protected findOne(
    conditions: any,
    projection: any = {}
  ): DocumentQuery<D | null, D> {
    return this.modelType.findOne(conditions, projection);
  }

  protected invalidate(id: string): DocumentQuery<D, D> {
    const now = new Date();
    const condition: any = { originalId: id, deletedAt: null };
    const updateData: any = { deletedAt: now };
    return this.modelType.update(condition, updateData);
  }
}
