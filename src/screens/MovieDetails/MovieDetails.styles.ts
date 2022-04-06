import styled from 'styled-components'
import { typography } from '../../styles'

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
  height: 100%;
  width: 100%;
`

const Rating = styled.div`
  display: flex;
  align-items: center;

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
`

const Wrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 60% 15% 25%;
  grid-template-columns: 1fr;
`

export { EpisodeInformation, Image, Rating, TitleInformation, Wrapper }
