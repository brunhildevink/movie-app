import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FetchParams, MotionPicture, Season } from '../../lib/types'
import { Container, Wrapper } from './index.style'
import { ErrorScreen, MovieDetails, MovieSelect } from '../../screens'
import formatUrl from '../../utils/helpers/formatUrl'

const Overview: React.FC = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<string>('')
  const [fetchParams, setFetchParams] = useState<FetchParams>({
    t: 'mandalorian',
    plot: 'full',
    season: 1,
  })

  const showDescription = useFetch<MotionPicture>('', { t: 'mandalorian', plot: 'full' })

  const { data, error, refetch, updateUrl } = useFetch<Season>('/', fetchParams)

  const totalSeasons = data ? parseInt(data.totalSeasons, 10) : 0

  useEffect(() => {
    if (data && data.Episodes) setSelectedEpisode(data.Episodes[0].imdbID)
  }, [data])

  useEffect(() => {
    updateUrl(formatUrl('/', fetchParams))
    refetch()
  }, [fetchParams])

  const handleClick = (id: string) => {
    setSelectedEpisode(id)
  }

  const handleSelect = (currentSeason: number) => {
    const newParams: FetchParams = { ...fetchParams }
    newParams.season = currentSeason
    setFetchParams(newParams)
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
          />
          <MovieDetails key={selectedEpisode} id={selectedEpisode} />
        </Container>
      )}
    </Wrapper>
  )
}

export default Overview
