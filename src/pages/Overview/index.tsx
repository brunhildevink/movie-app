import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FetchParams, MotionPicture, Season, EpisodeDetailed } from '../../lib/types'
import { Container, Wrapper } from './index.style'
import { ErrorScreen, MovieDetails, MovieSelect } from '../../screens'
import formatUrl from '../../utils/helpers/formatUrl'

const Overview: React.FC = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<EpisodeDetailed>()

  const [fetchParams, setFetchParams] = useState<FetchParams>({
    t: 'mandalorian',
    plot: 'full',
    season: 1,
  })

  const showDescription = useFetch<MotionPicture, FetchParams>('', { t: 'mandalorian', plot: 'full' })

  const { data, error, refetch, updateUrl } = useFetch<Season, FetchParams>('/', fetchParams)

  const totalSeasons = data ? parseInt(data.totalSeasons, 10) : 0

  useEffect(() => {
    updateUrl(formatUrl('/', fetchParams))
    refetch()
  }, [fetchParams])

  const handleClick = (episode: EpisodeDetailed) => {
    setSelectedEpisode(episode)
  }

  const handleSelect = (currentSeason: number) => {
    const newParams: FetchParams = { ...fetchParams }
    newParams.season = currentSeason
    setFetchParams(newParams)
  }

  const handleReturnEpisode = (episode: EpisodeDetailed) => {
    setSelectedEpisode(episode)
  }

  if (error || showDescription.error) {
    return (
      <Wrapper>
        <ErrorScreen message="Oh no! Something happened, please try again later." />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      {data && showDescription.data && (
        <Container>
          <MovieSelect
            episodes={data.Episodes}
            title={data.Title}
            description={showDescription.data.Plot}
            totalSeasons={totalSeasons}
            onSelect={handleSelect}
            onClick={handleClick}
            returnFirstEpisode={handleReturnEpisode}
          />
          {selectedEpisode && <MovieDetails data={selectedEpisode} />}
        </Container>
      )}
    </Wrapper>
  )
}

export default Overview
