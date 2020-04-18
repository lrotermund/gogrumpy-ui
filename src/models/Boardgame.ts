import Image from './Image';

export default class Boardgame {
  id: string;

  previewImage: Image;

  name: string;

  description: string;

  longDescription: string

  constructor(id: string,
    previewImage: Image,
    name: string,
    description: string,
    longDescription: string) {
    this.id = id;
    this.previewImage = previewImage;
    this.name = name;
    this.description = description;
    this.longDescription = longDescription;
  }

  toArray(): Array<string> {
    return [this.id, this.name, this.description];
  }
}
