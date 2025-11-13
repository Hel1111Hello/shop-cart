// src/Movie.ts
export class Movie {
  constructor(
    public id: number,
    public title: string,
    public originalTitle: string,
    public year: number,
    public country: string,
    public genre: string[],
    public duration: number,
    public format: string,
    public price: number
  ) {}

  getInfo(): string {
    const hours = Math.floor(this.duration / 60);
    const minutes = this.duration % 60;
    const time = hours > 0 ? `${hours} ч ${minutes} мин` : `${minutes} мин`;
    return `${this.title} (${this.originalTitle})\n${this.year}, ${this.country}\n${this.genre.join(', ')}\n${time} • ${this.format}`;
  }
}