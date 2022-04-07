import React from 'react'
import { Wrapper } from './index.style'
import { colors } from '../../styles'
import { Heading, Icon } from '../../components'

interface Props {
  message?: string
}

const Error: React.FC<Props> = ({ message }) => (
  <Wrapper>
    <Icon.Octagon display="block" fill={colors.lightGrey} height={40} title="error" width={40} />
    <Heading.HeadingFour>{message}</Heading.HeadingFour>
  </Wrapper>
)

Error.defaultProps = {
  message: 'Oh no! Something happened...',
}

export default Error
