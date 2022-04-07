import React from 'react'
import renderer from 'react-test-renderer'
import Error from '.'

test('Error screen renders correctly', () => {
  const tree = renderer.create(<Error />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Error screen renders correctly with prop message', () => {
  const tree = renderer.create(<Error message="Oh no!" />).toJSON()
  expect(tree).toMatchSnapshot()
})
