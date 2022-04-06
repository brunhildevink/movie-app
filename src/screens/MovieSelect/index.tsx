import React from 'react'
import { Container, EpisodeSelection, Wrapper } from './MovieSelect.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Text } from '../../components'
import Card from '../../components/Card'
import { Episode } from '../../lib/types'

interface Props {
  episodes: Episode[]
  title: string
  totalSeasons: number
  onSelect: (season: number) => void
}

const MovieSelect: React.FC<Props> = ({ episodes, title, totalSeasons, onSelect }) => {
  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      Season {num + 1}
    </option>
  ))

  const renderCards = episodes.map((episode) => <Card key={episode.imdbID} id={episode.imdbID} />)

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
          <Heading.HeadingOne>{title}</Heading.HeadingOne>
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
