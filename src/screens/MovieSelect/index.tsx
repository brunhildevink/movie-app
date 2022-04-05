import React from 'react'
import { Container, EpisodeSelection, Wrapper } from './MovieSelect.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Text } from '../../components'
import Card from '../../components/Card'

interface Props {
  totalSeasons: number
  onSelect: (season: number) => void
}

const MovieSelect: React.FC<Props> = ({ totalSeasons, onSelect }) => {
  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      Season {num + 1}
    </option>
  ))

  const mocks = [
    {
      description: 'In the wake of her 29th birthday, Issa eflects on her life and relationship choices.',
      episodeNumber: 1,
      image,
      title: 'Insecure as fuck',
    },
    {
      description: 'Issa struggles with her feelings about Lawrence, work, and her life.',
      episodeNumber: 2,
      image,
      title: 'Messy as Fuck',
    },
    {
      description: 'Issa and Lawrence try to move past their issues at home; Issa deals with doubts from he…',
      episodeNumber: 3,
      image,
      title: 'Racist as Fuck',
    },
    {
      description: 'Issa turns to Daniel for help during Career Day; Molly finds herself in a tough pos…',
      episodeNumber: 3,
      image,
      title: 'Thirsty as Fuck ',
    },
  ]

  const renderCards = mocks.map((card) => (
    <Card description={card.description} episodeNumber={card.episodeNumber} image={card.image} title={card.title} />
  ))

  return (
    <Wrapper img={image}>
      <Container>
        <div>
          <select
            key={totalSeasons}
            disabled={!(totalSeasons > 0)}
            onChange={(event) => onSelect(parseInt(event.target.value, 10))}
          >
            {renderSelectSeasons}
          </select>
          <Heading.HeadingOne>Mandalorian</Heading.HeadingOne>
          <Text.Regular>
            Follows the awkward experiences and racy tribulations of a modern-day mandalorian.
          </Text.Regular>
        </div>
      </Container>
      <EpisodeSelection>{renderCards}</EpisodeSelection>
    </Wrapper>
  )
}

export default MovieSelect
