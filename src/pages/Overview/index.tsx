import React, { useEffect, useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FetchParams, MotionPicture } from '../../lib/types'
import { Container, Wrapper } from './Overview.style'
import { Heading } from '../../components'
import { MovieDetails } from '../../screens'
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

  const handleChange = (currentSeason: number) => {
    const newParams: FetchParams = { ...fetchParams }
    newParams.season = currentSeason
    setFetchParams(newParams)
  }

  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      Season {num + 1}
    </option>
  ))

  return (
    <Wrapper>
      {loading && <Heading.HeadingFour>Loading...</Heading.HeadingFour>}

      {error && <Heading.HeadingFour>Oh no, something happened...</Heading.HeadingFour>}

      {data && (
        <Container>
          <div>
            {/* dit wordt links */}
            <select
              disabled={!(totalSeasons > 0)}
              key={totalSeasons}
              onChange={(event) => handleChange(parseInt(event.target.value, 10))}
            >
              {renderSelectSeasons}
            </select>
          </div>
          <MovieDetails />
        </Container>
      )}
    </Wrapper>
  )
}

export default Overview
