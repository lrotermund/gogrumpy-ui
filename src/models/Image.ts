export default class Image {
  src: string;

  name: string;

  mime: string;

  constructor(src: string, name: string, mime: string) {
    this.src = src;
    this.name = name;
    this.mime = mime;
  }
}
