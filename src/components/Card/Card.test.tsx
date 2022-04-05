import React from 'react'
import renderer from 'react-test-renderer'
import Card from '.'

test('Card renders correctly', () => {
  const tree = renderer.create(<Card description="lorem ipsum" episodeNumber={1} image="" title="test" />).toJSON()
  expect(tree).toMatchSnapshot()
})
