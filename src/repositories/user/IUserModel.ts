import IVersionableDocument from "../versionable/IVersionableDocument";

export default interface IUserModel extends IVersionableDocument {
  id: string;
  firstName: string;
  lastName: string;
  address: string;
  email: string;
  phoneNumber: string;
  password: string;
}
