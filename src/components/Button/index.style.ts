import styled from 'styled-components'

const Button = styled.button`
  width: 32px;
  background: transparent;
  cursor: pointer;
  border: none;

  &:disabled {
    opacity: 0.5;
  }
`

export { Button }
