import React from 'react'
import renderer from 'react-test-renderer'
import MovieDetails from '.'

test('Header renders correctly', () => {
  const tree = renderer.create(<MovieDetails />).toJSON()
  expect(tree).toMatchSnapshot()
})
