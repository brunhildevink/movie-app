import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FetchParams, MotionPicture } from '../../lib/types'
import { Container, Wrapper } from './Overview.style'
import { Heading } from '../../components'
import { MovieDetails, MovieSelect } from '../../screens'
import formatUrl from '../../utils/helpers/formatUrl'

const Overview: React.FC = () => {
  const [fetchParams, setFetchParams] = useState<FetchParams>({
    t: 'mandalorian',
    plot: 'full',
    season: 1,
  })

  const { data, error, loading, refetch, updateUrl } = useFetch<MotionPicture>('/', fetchParams)

  const totalSeasons = data ? parseInt(data.totalSeasons, 10) : 0

  useEffect(() => {
    updateUrl(formatUrl('/', fetchParams))
    refetch()
  }, [fetchParams])

  useEffect(() => {
    console.log(data)
  }, [data])

  const handleSelect = (currentSeason: number) => {
    const newParams: FetchParams = { ...fetchParams }
    newParams.season = currentSeason
    setFetchParams(newParams)
  }

  return (
    <Wrapper>
      {loading && <Heading.HeadingFour>Loading...</Heading.HeadingFour>}

      {error && <Heading.HeadingFour>Oh no, something happened...</Heading.HeadingFour>}

      {data && (
        <Container>
          <MovieSelect
            episodes={data.Episodes}
            title={data.Title}
            totalSeasons={totalSeasons}
            onSelect={handleSelect}
          />
          <MovieDetails />
        </Container>
      )}
    </Wrapper>
  )
}

export default Overview
