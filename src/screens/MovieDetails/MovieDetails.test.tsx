import React from 'react'
import renderer from 'react-test-renderer'
import MovieDetails from '.'

test('MovieDetails renders correctly', () => {
  const tree = renderer
    .create(
      <MovieDetails
        date="20/20/2022"
        description="Aute dolor deserunt aute fugiat aliquip fugiat et elit. Esse tempor minim laboris sint Lorem qui. Eu ea aliquip adipisicing officia duis quis minim. Elit dolore ipsum elit quis proident nisi adipisicing aliqua enim ad magna aliqua ex. Irure ullamco consectetur ex esse esse quis dolore aute laborum pariatur labore aute sint. Id consequat sint fugiat anim aute tempor."
        episode={1}
        rating="9"
        title="The Mandalorian"
      />,
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
