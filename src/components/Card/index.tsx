import React from 'react'
import styled from 'styled-components'
import Text from '../Text'

interface Props {
  description: string
  episodeNumber: number
  image: string
  title: string
}

const Episode = styled.span`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
`

const Image = styled.div<{ img: string }>`
  background: ${({ img }) => `url(${img})`} center center no-repeat;
  background-size: cover;
  height: 136px;
  width: 200px;
`

const Wrapper = styled.div`
  width: 200px;
`

const Card: React.FC<Props> = ({ description, episodeNumber, image, title }) => (
  <Wrapper>
    <Image img={image} />
    <Episode>
      <Text.Regular>{episodeNumber}</Text.Regular>
    </Episode>
    <Text.Bold>{title}</Text.Bold>
    <Text.Regular>{description}</Text.Regular>
  </Wrapper>
)

export default Card
