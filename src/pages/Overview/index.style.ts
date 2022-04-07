import styled from 'styled-components'
import { breakpoints } from '../../styles'

const Container = styled.div`
  @media ${breakpoints.lg} {
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100%;
    overflow: hidden;
  }
`

const Wrapper = styled.div`
  @media ${breakpoints.lg} {
    height: 100vh;
  }
`
export { Container, Wrapper }
