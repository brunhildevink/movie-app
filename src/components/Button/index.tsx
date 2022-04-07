import React from 'react'
import { Button } from './index.style'
import { colors } from '../../styles'
import Icon from '../Icon'

interface Props {
  id?: string
}

const Prev: React.FC<Props> = ({ id }) => (
  <Button id={id}>
    <Icon.ArrowLeft fill={colors.white} display="inline" height={24} width={32} title="previous" />
  </Button>
)

Prev.defaultProps = {
  id: '',
}

const Next: React.FC<Props> = ({ id }) => (
  <Button id={id}>
    <Icon.ArrowRight fill={colors.white} display="inline" height={24} width={32} title="previous" />
  </Button>
)

Next.defaultProps = {
  id: '',
}

export default { Prev, Next }
