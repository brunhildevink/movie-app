export interface FetchParams {
  i?: string
  t?: string
  episode?: string
  season?: number
  plot?: string
}

export interface Episode {
  Title: string
  Released: string
  Episode: string
  imdbRating: string
  imdbID: string
  Poster: string
}

export enum PictureType {
  Movie,
  Series,
  Episode,
}

export interface Rating {
  Source: string
  Value: string
}

export interface MotionPicture {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Episodes: Episode[]
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Ratings: Rating[]
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: PictureType
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
  totalSeasons: string
}
