import React from 'react'
import renderer from 'react-test-renderer'
import Overview from '.'

test('Header renders correctly', () => {
  const tree = renderer.create(<Overview />).toJSON()
  expect(tree).toMatchSnapshot()
})
