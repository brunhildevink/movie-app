import styled from 'styled-components'
import { colors } from '../../styles'

const EpisodeSelection = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  grid-gap: 0 32px;
  overflow-x: scroll;
  padding-left: 40px;
`

const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  padding: 40px;
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled.div<{ img: string }>`
  display: inline-grid;
  color: ${colors.white};
  height: 100%;
  background: linear-gradient(236deg, rgba(31, 0, 19, 0.444437149859944) 0%, rgba(215, 0, 133, 0.217546393557423) 100%),
    ${({ img }) => `url(${img})`} no-repeat center center;
  background-blend-mode: screen;
  background-size: cover;
  height: 100%;
  width: 100%;
  grid-template-rows: 60% 40%;
`

export { Container, EpisodeSelection, Wrapper }
