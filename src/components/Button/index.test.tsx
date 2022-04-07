import React from 'react'
import renderer from 'react-test-renderer'
import Button from '.'

test('Button Prev renders correctly', () => {
  const tree = renderer.create(<Button.Prev />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Button Next renders correctly', () => {
  const tree = renderer.create(<Button.Next />).toJSON()
  expect(tree).toMatchSnapshot()
})
