import React from 'react'
import renderer from 'react-test-renderer'
import MovieDetails from '.'

const mock = {
  Title: 'Chapter 1: The Mandalorian',
  Year: '2019',
  Rated: 'TV-PG',
  Released: '12 Nov 2019',
  Season: '1',
  Episode: '1',
  Runtime: '39 min',
  Genre: 'Action, Adventure, Fantasy',
  Director: 'Dave Filoni',
  Writer: 'Jon Favreau, George Lucas',
  Actors: 'Pedro Pascal, Carl Weathers, Werner Herzog',
  Plot: 'A Mandalorian bounty hunter tracks a target for a well-paying, mysterious client.',
  Language: 'English',
  Country: 'United States',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNTViYzhmZTAtY2MzYi00ZTk1LTg5OGItYzc4MjBlYzlkNzU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg',
  Ratings: [
    {
      Source: 'Internet Movie Database',
      Value: '8.6/10',
    },
  ],
  Metascore: 'N/A',
  imdbRating: '8.6',
  imdbVotes: '30126',
  imdbID: 'tt9095424',
  seriesID: 'tt8111088',
  Type: 'episode',
  Response: 'True',
}

test('MovieDetails renders correctly', () => {
  const tree = renderer.create(<MovieDetails data={mock} />).toJSON()
  expect(tree).toMatchSnapshot()
})
