export interface FetchParams {
  i?: string
  t?: string
  episode?: string
  season?: number
  plot?: string
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
  Type: string
  totalSeasons: string
  Response: string
}

export interface Episode {
  Title: string
  Released: string
  Episode: string
  imdbRating: string
  imdbID: string
}

export interface Season {
  Title: string
  Season: string
  totalSeasons: string
  Episodes: Episode[]
  Response: string
}

export interface EpisodeDetailed {
  Title: string
  Year: string
  Rated: string
  Released: string
  Season: string
  Episode: string
  Runtime: string
  Genre: string
  Director: string
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
  seriesID: string
  Type: string
  Response: string
}
