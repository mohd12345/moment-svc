import IVersionableDocument from "../versionable/IVersionableDocument";

export default interface IMomentModel extends IVersionableDocument {
  id: string;
  title: string;
  tags: [string];
  image: string;
  user: string;
}
