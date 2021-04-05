import VersionableSchema from "../versionable/VersionableSchema";
export default class ResourceSchema extends VersionableSchema {
  constructor(options: any) {
    const baseSchema = {
      firstName: {
        required: true,
        type: String,
      },
      lastName: {
        required: true,
        type: String,
      },
      email: {
        required: true,
        type: String,
      },
      address: {
        required: true,
        type: String,
      },
      phoneNumber: {
        required: true,
        type: String,
      },
      password: {
        required: true,
        type: String,
      },
    };
    super(baseSchema, options);
  }
}
