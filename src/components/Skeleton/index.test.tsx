import React from 'react'
import renderer from 'react-test-renderer'
import Skeleton from '.'

test('Skeleton renders correctly', () => {
  const tree = renderer.create(<Skeleton height="100px" width="100px" margin="10px" />).toJSON()
  expect(tree).toMatchSnapshot()
})
