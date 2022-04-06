import React from 'react'
import renderer from 'react-test-renderer'
import MovieSelect from '.'
import { Episode } from '../../lib/types'

const mocks: Episode[] = [
  {
    Episode: '0',
    Title: 'Insecure as fuck',
    Released: '01/02/2022',
    imdbID: '1234',
    imdbRating: '10',
    Poster: '',
  },
  {
    Episode: '1',
    Title: 'Messy as Fuck',
    Released: '01/02/2022',
    imdbID: '1234',
    imdbRating: '10',
    Poster: '',
  },
  {
    Episode: '2',
    Title: 'Racist as Fuck',
    Released: '01/02/2022',
    imdbID: '1234',
    imdbRating: '10',
    Poster: '',
  },
  {
    Episode: '3',
    Title: 'Thirsty as Fuck ',
    Released: '01/02/2022',
    imdbID: '1234',
    imdbRating: '10',
    Poster: '',
  },
]

test('MovieSelect renders correctly', () => {
  const tree = renderer
    .create(<MovieSelect episodes={mocks} title="Hello" totalSeasons={8} onSelect={() => null} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
