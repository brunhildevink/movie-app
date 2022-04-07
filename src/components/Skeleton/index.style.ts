import styled, { keyframes } from 'styled-components'

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

export { Wrapper }
