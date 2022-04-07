import styled from 'styled-components'
import { breakpoints, colors, typography } from '../../styles'

const EpisodeInformation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  border-bottom: 1px solid rgba(151, 151, 151, 0.2);
`

const Image = styled.div<{ img: string }>`
  background: ${({ img }) => `url(${img})`} center center no-repeat;
  background-size: cover;
  width: 100%;
  height: 200px;
  grid-area: image;

  @media ${breakpoints.lg} {
    grid-area: unset;
    height: 100%;
  }
`

const NotFound = styled.div`
  background: ${colors.white};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    opacity: 0.5;
  }
`

const Rating = styled.div`
  display: flex;
  align-items: center;
  grid-area: rating;

  svg {
    margin-right: 16px;
  }

  span {
    font-weight: ${typography.fontWeightBold};
  }
`

const TitleInformation = styled.div`
  padding: 40px;
  overflow-y: auto;
  grid-area: title;

  p {
    font-size: ${typography.fontSizeTextLarge}px;
    line-height: ${typography.lineHeightTextLarge};
  }
`

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'rating'
    'title'
    'image';

  @media ${breakpoints.lg} {
    grid-template-areas:
      'image'
      'rating'
      'title';

    grid-template-rows: 60% 15% 25%;
  }
`

export { EpisodeInformation, Image, NotFound, Rating, TitleInformation, Wrapper }
