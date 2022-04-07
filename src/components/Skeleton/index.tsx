import React from 'react'
import { Wrapper } from './index.style'

interface Props {
  height: string
  width: string
  margin: string
}

const Skeleton: React.FC<Props> = ({ height, width, margin }) => (
  <Wrapper height={height} width={width} margin={margin} />
)

export default Skeleton
