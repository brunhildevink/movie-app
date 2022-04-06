import React from 'react'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import { EpisodeDetailed } from '../../lib/types'
import { colors } from '../../styles'
import Skeleton from '../Skeleton'
import Text from '../Text'
import Icon from '../Icon'

interface Props {
  id: string
  onClick: (id: string) => void
}

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

const EpisodeNumber = styled.span`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.div<{ img?: string }>`
  background: ${({ img }) => (img ? `url(${img}) center center no-repeat` : `${colors.white}`)};
  background-size: cover;
  height: 136px;
  width: 200px;
`

const NotFound = styled.div`
  background: ${colors.white};
  height: 136px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  p {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Wrapper = styled.button`
  width: 200px;
  position: relative;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: start;
  color: ${colors.white};
  cursor: pointer;
`

const Card: React.FC<Props> = ({ id, onClick }) => {
  const { data, loading } = useFetch<EpisodeDetailed>('/', { i: id })

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
        <Wrapper onClick={() => onClick(id)}>
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

export default Card
