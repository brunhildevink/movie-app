import React from 'react'
import { EpisodeInformation, Image, Rating, TitleInformation, Wrapper } from './MovieDetails.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Icon, Text } from '../../components'
import { colors } from '../../styles'

interface Props {
  date: string
  description: string
  episode: number
  rating: string
  title: string
}

const MovieDetails: React.FC<Props> = ({ date, description, episode, rating, title }) => (
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
