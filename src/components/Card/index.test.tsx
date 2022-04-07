import React from 'react'
import renderer from 'react-test-renderer'
import Card from '.'

test('Card renders correctly', () => {
  const tree = renderer.create(<Card onClick={() => null} id="11234" />).toJSON()
  expect(tree).toMatchSnapshot()
})
