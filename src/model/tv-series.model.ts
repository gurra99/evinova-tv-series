export interface ITvSerieResult {
  score: number;
  show: ITvSerie;
}

export interface ITvSerie {
  id: number;
  name: string;
  rating: {
    average: number;
  };
  status: string;
  language: string;
  summary: string;
  type: string;
  image: IImage;
}

export interface IImage {
  medium: string;
  original: string;
}
