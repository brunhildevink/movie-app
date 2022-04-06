import React from 'react'
import { EpisodeInformation, Image, Rating, TitleInformation, Wrapper } from './MovieDetails.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Icon, Text } from '../../components'
import { colors } from '../../styles'

// interface Props {
//   date: string
//   description: string
//   imageIndex: number
//   rating: string
//   title: string
// }
const description =
  'Aute occaecat consequat labore occaecat do fugiat consectetur labore eu. Velit culpa amet labore voluptate ullamco proident sunt excepteur exercitation non incididunt eu esse labore. Culpa excepteur nulla irure ex minim cupidatat et voluptate esse Lorem ullamco laboris incididunt magna. Velit aute quis qui aliquip ullamco ad irure duis excepteur cillum excepteur officia nisi. Pariatur occaecat dolor anim enim. Sunt ex ullamco aute amet cupidatat ad proident cillum aliquip amet id velit.'
const title = 'The Mandalorian'
const episode = 1
const date = '20/20/2022'
const rating = 9

const MovieDetails: React.FC = () => (
  <Wrapper>
    <Image img={image} />
    <EpisodeInformation>
      <Heading.HeadingFour>
        Episode {episode} — {date}
      </Heading.HeadingFour>
      <Rating>
        <Icon.Star display="inline" fill={colors.yellow} height={24} title="rating" width={24} />
        <Heading.HeadingFour>
          <span>{rating}</span>/10
        </Heading.HeadingFour>
      </Rating>
    </EpisodeInformation>
    <TitleInformation>
      <Heading.HeadingThree>{title}</Heading.HeadingThree>
      <Text.Regular>{description}</Text.Regular>
    </TitleInformation>
  </Wrapper>
)

export default MovieDetails
