import React from 'react'
import { EpisodeInformation, Image, NotFound, Rating, TitleInformation, Wrapper } from './index.styles'
import { Heading, Icon, Skeleton, Text } from '../../components'
import { colors } from '../../styles'
import { EpisodeDetailed } from '../../lib/types'
import useFetch from '../../hooks/useFetch'

interface Props {
  id: string
}

const MovieDetails: React.FC<Props> = ({ id }) => {
  const { data, error, loading } = useFetch<EpisodeDetailed>('', { i: id })

  if (loading) {
    return (
      <Wrapper>
        <Skeleton width="100%" height="100%" margin="" />
        <EpisodeInformation>
          <Skeleton width="100%" height="60px" margin="" />
          <Rating>
            <Skeleton width="100%" height="60px" margin="" />
          </Rating>
        </EpisodeInformation>
        <TitleInformation>
          <Skeleton width="100%" height="40px" margin="" />
          <Skeleton width="100%" height="60px" margin="20px 0" />
        </TitleInformation>
      </Wrapper>
    )
  }

  if (error) {
    return <Wrapper>Uh oh, something happened while trying to display the data. Please try again later.</Wrapper>
  }

  return (
    <div>
      {data && data.Response && (
        <Wrapper>
          {data.Poster !== 'N/A' ? (
            <Image img={data.Poster} />
          ) : (
            <NotFound>
              <Icon.Image fill={colors.lightGrey} display="inline" height={100} title="image not found" width={100} />
            </NotFound>
          )}
          <EpisodeInformation>
            <Heading.HeadingFour>
              Episode {data.Episode} — {data.Released}
            </Heading.HeadingFour>
            <Rating>
              <Icon.Star display="inline" fill={colors.yellow} height={24} title="rating" width={24} />
              <Heading.HeadingFour>
                <span>{data.imdbRating}</span>/10
              </Heading.HeadingFour>
            </Rating>
          </EpisodeInformation>
          <TitleInformation>
            <Heading.HeadingTwo>{data.Title}</Heading.HeadingTwo>
            <Text.Regular>{data.Plot}</Text.Regular>
          </TitleInformation>
        </Wrapper>
      )}
    </div>
  )
}

export default MovieDetails
