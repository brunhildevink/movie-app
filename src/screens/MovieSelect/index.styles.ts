import styled from 'styled-components'
import { breakpoints, colors, fonts, typography } from '../../styles'

const ButtonContainer = styled.div`
  display: flex;
  align-self: flex-end;
  margin: 20px 0;

  @media ${breakpoints.lg} {
    margin: 20px 24px;
  }
`

const EpisodeSelection = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding: 40px;

  @media ${breakpoints.lg} {
    padding: 0 0 0 40px;
  }
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
  position: relative;
  display: inline-grid;
  color: ${colors.white};
  height: 100%;
  background: ${colors.white};
  background: linear-gradient(236deg, rgba(187, 0, 115, 0.5) 0%, rgba(0, 51, 134, 0.5)), ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;

  @media ${breakpoints.lg} {
    grid-template-rows: 60% 40%;
  }

  .swiper-container {
    display: flex;
    width: 100%;
  }

  .swiper-wrapper {
    width: 100%;
  }

  .swiper-slide {
    display: block;
    width: 100%;
  }

  @media ${breakpoints.md} {
    .swiper-slide {
      display: block;
      width: 200px !important;
    }
  }
`

export { ButtonContainer, Container, EpisodeSelection, Select, Wrapper }
