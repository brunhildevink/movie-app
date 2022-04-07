import React from 'react'
import renderer from 'react-test-renderer'
import { colors } from '../../styles'
import Icon from '.'

describe('Icon component test', () => {
  test('Star Icon renders correctly', () => {
    const tree = renderer
      .create(<Icon.Star display="inline" fill={colors.yellow} height={24} title="rating" width={24} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Image Icon renders correctly', () => {
    const tree = renderer
      .create(<Icon.Image display="inline" fill={colors.yellow} height={24} title="rating" width={24} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Arrow Left Icon renders correctly', () => {
    const tree = renderer
      .create(<Icon.ArrowLeft display="inline" fill={colors.yellow} height={24} title="rating" width={24} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Arrow Right Icon renders correctly', () => {
    const tree = renderer
      .create(<Icon.ArrowRight display="inline" fill={colors.yellow} height={24} title="rating" width={24} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Octagon Icon renders correctly', () => {
    const tree = renderer
      .create(<Icon.Octagon display="inline" fill={colors.yellow} height={24} title="rating" width={24} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
