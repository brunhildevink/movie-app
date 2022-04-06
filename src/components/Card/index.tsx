import React from 'react'
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch'
import { EpisodeDetailed } from '../../lib/types'
import Text from '../Text'

interface Props {
  id: string
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

const Image = styled.div<{ img: string }>`
  background: ${({ img }) => `url(${img})`} center center no-repeat;
  background-size: cover;
  height: 136px;
  width: 200px;
`

const Title = styled.div`
  p {
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Wrapper = styled.div`
  width: 200px;
  position: relative;
`

const Card: React.FC<Props> = ({ id }) => {
  const { data } = useFetch<EpisodeDetailed>('/', { i: id })

  return (
    <div>
      {data && (
        <Wrapper>
          <Image img={data.Poster} />
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
