import React from 'react'
import { EpisodeInformation, Image, TitleInformation, Wrapper } from './MovieDetails.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Text } from '../../components'

// interface Props {
//   date: string
//   description: string
//   imageIndex: number
//   rating: string
//   title: string
// }

const MovieDetails: React.FC = () => (
  <Wrapper>
    <Image img={image} />
    <EpisodeInformation>
      <Heading.HeadingFour>Episode 1 — 2011-04-17</Heading.HeadingFour>
      <Heading.HeadingFour>9/10</Heading.HeadingFour>
    </EpisodeInformation>
    <TitleInformation>
      <Heading.HeadingThree>Insecure as fuck</Heading.HeadingThree>
      <Text.Regular>In the wake of her 29th birthday, Issa reflects on her life and relationship choices.</Text.Regular>
    </TitleInformation>
  </Wrapper>
)

export default MovieDetails
