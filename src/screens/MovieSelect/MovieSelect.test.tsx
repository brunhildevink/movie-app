import React from 'react'
import renderer from 'react-test-renderer'
import MovieSelect from '.'

const mocks = [
  {
    Title: 'Chapter 1: The Mandalorian',
    Released: '2019-11-12',
    Episode: '1',
    imdbRating: '8.6',
    imdbID: 'tt9095424',
  },
  {
    Title: 'Chapter 2: The Child',
    Released: '2019-11-15',
    Episode: '2',
    imdbRating: '8.6',
    imdbID: 'tt9121530',
  },
  {
    Title: 'Chapter 3: The Sin',
    Released: '2019-11-22',
    Episode: '3',
    imdbRating: '9.0',
    imdbID: 'tt9121534',
  },
  {
    Title: 'Chapter 4: Sanctuary',
    Released: '2019-11-29',
    Episode: '4',
    imdbRating: '7.8',
    imdbID: 'tt9121536',
  },
  {
    Title: 'Chapter 5: The Gunslinger',
    Released: '2019-12-06',
    Episode: '5',
    imdbRating: 'N/A',
    imdbID: 'tt9121538',
  },
  {
    Title: 'Chapter 6: The Prisoner',
    Released: '2019-12-13',
    Episode: '6',
    imdbRating: '8.3',
    imdbID: 'tt9121542',
  },
  {
    Title: 'Chapter 7: The Reckoning',
    Released: '2019-12-18',
    Episode: '7',
    imdbRating: '9.0',
    imdbID: 'tt9121544',
  },
]

test('MovieSelect renders correctly', () => {
  const tree = renderer
    .create(<MovieSelect description="hllo" episodes={mocks} title="Hello" totalSeasons={8} onSelect={() => null} />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
