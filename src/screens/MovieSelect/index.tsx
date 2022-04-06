import React from 'react'
import { Container, EpisodeSelection, Select, Wrapper } from './MovieSelect.styles'
import image from '../../assets/images/1.1.jpg'
import { Heading, Text } from '../../components'
import Card from '../../components/Card'
import { Episode } from '../../lib/types'

interface Props {
  episodes: Episode[]
  description: string
  title: string
  totalSeasons: number
  onSelect: (season: number) => void
  onClick: (id: string) => void
}

const MovieSelect: React.FC<Props> = ({ episodes, description, title, totalSeasons, onSelect, onClick }) => {
  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      Season {num + 1}
    </option>
  ))

  const renderCards = episodes.map((episode) => <Card key={episode.imdbID} id={episode.imdbID} onClick={onClick} />)

  return (
    <Wrapper img={image}>
      <Container>
        <div>
          <Select
            key={totalSeasons}
            disabled={!(totalSeasons > 0)}
            onChange={(event) => onSelect(parseInt(event.target.value, 10))}
          >
            {renderSelectSeasons}
          </Select>
          <Heading.HeadingOne>{title}</Heading.HeadingOne>
          <Text.Regular>{description}</Text.Regular>
        </div>
      </Container>
      <EpisodeSelection>{renderCards}</EpisodeSelection>
    </Wrapper>
  )
}

export default MovieSelect
