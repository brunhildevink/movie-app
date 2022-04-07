import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { Description, EpisodeNumber, Image, NotFound, Title, Wrapper } from './index.style'
import { EpisodeDetailed } from '../../lib/types'
import { colors } from '../../styles'
import Skeleton from '../Skeleton'
import Text from '../Text'
import Icon from '../Icon'

interface Props {
  id: string
  onClick: (episode: EpisodeDetailed) => void
  returnFirstEpisode?: (episode: EpisodeDetailed) => void
}

const Card: React.FC<Props> = ({ id, onClick, returnFirstEpisode }) => {
  const { data, loading } = useFetch<EpisodeDetailed>('/', { i: id })

  useEffect(() => {
    if (data && returnFirstEpisode) returnFirstEpisode(data)
  }, [data])

  if (loading) {
    return (
      <div>
        <Skeleton width="200px" height="136px" margin="" />
        <Skeleton width="200px" height="16px" margin="14px 0" />
        <Skeleton width="200px" height="16px" margin="14px 0" />
        <Skeleton width="200px" height="16px" margin="14px 0" />
      </div>
    )
  }

  return (
    <div>
      {data && (
        <Wrapper onClick={() => onClick(data)}>
          {data.Poster !== 'N/A' ? (
            <Image img={data.Poster} />
          ) : (
            <NotFound>
              <Icon.Image fill={colors.lightGrey} display="inline" height={40} title="image not found" width={40} />
            </NotFound>
          )}
          <EpisodeNumber>
            <Text.Regular>{data.Episode}</Text.Regular>
          </EpisodeNumber>
          <Title>
            <Text.Bold>{data.Title}</Text.Bold>
          </Title>
          <Description>
            <Text.Regular>{data.Plot}</Text.Regular>
          </Description>
        </Wrapper>
      )}
    </div>
  )
}

Card.defaultProps = {
  returnFirstEpisode: () => null,
}

export default Card
