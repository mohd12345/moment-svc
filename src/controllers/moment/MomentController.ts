import MomentRepository from "../../repositories/moment/MomentRepository";
import { BadRequestError } from "../../entities/errors";
import { fileUpload } from "../../libs/utilities";

class MomentController {
  private momentRepository: MomentRepository;

  constructor() {
    this.momentRepository = new MomentRepository();
  }

  public async create({ body, locals }: any) {
    const { title, tags, image } = body;
    const user = locals.userId;
    const response: any = await fileUpload(image);
    return this.momentRepository.create({
      user,
      title,
      tags,
      image: response.url,
    });
  }

  public async delete({ params }: any) {
    const { id } = params;
    const foundData = await this.momentRepository.getById(id);
    if (foundData) {
      return this.momentRepository.invalidate(id);
    }
    throw new BadRequestError({
      location: "params",
      msg: "Moment is already deleted",
      param: "id",
      value: id,
    });
  }

  public async get({ locals, body }: any) {
    const { limit = 0, skip = 0 } = body;
    const user = locals.userId;
    const query = { user };
    const [moments, total]: any = await Promise.all([
      this.momentRepository.list(query, { limit, skip }),
      this.momentRepository.count(query),
    ]);
    return { moments, total };
  }

  public async update({ body, locals }: any) {
    const { id: originalId, title, tags, image } = body;
    const foundData = await this.momentRepository.getById(originalId);
    if (!foundData) {
      throw new BadRequestError({
        location: "params",
        msg: "Moment is not found",
        param: "id",
        value: originalId,
      });
    }
    const response: any = await fileUpload(image);

    return this.momentRepository.update({
      originalId,
      title,
      tags,
      image: response.url,
    });
  }
}

export default new MomentController();
