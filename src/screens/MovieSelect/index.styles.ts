import styled from 'styled-components'
import { colors, fonts, typography } from '../../styles'

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 20px 24px;
`

const EpisodeSelection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
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

const Select = styled.select`
  font-family: ${fonts};
  background-color: transparent;
  color: ${colors.white};
  border: none;
  font-size: ${typography.fontSizeHeadingThree}px;
  line-height: ${typography.lineHeightHeadingThree};
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

  .swiper-container {
    display: flex;
    width: 100%;
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide {
    display: block;
    width: 200px;
  }
`

export { ButtonContainer, Container, EpisodeSelection, Select, Wrapper }
