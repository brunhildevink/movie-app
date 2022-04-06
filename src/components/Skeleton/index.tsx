import React from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  height: string
  width: string
  margin: string
}

const skeletonKeyframes = keyframes`
  to {
    background-position-x: -200%;
  }
`

const Wrapper = styled.div<{ height: string; width: string; margin: string }>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
  background: #eee;
  background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
  border-radius: 5px;
  background-size: 200% 100%;
  animation: 1.5s ${skeletonKeyframes} linear infinite;
`

const Skeleton: React.FC<Props> = ({ height, width, margin }) => (
  <Wrapper height={height} width={width} margin={margin} />
)

export default Skeleton
