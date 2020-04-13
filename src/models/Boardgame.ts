import Image from './Image';

export default class Boardgame {
  id: string;

  previewImage: Image;

  name: string;

  description: string;

  constructor(id: string, previewImage: Image, name: string, description: string) {
    this.id = id;
    this.previewImage = previewImage;
    this.name = name;
    this.description = description;
  }
}
