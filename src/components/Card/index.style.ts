import styled from 'styled-components'
import { colors, typography } from '../../styles'

const Description = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
`

const EpisodeNumber = styled.span`
  width: 32px;
  height: 32px;
  position: absolute;
  top: 0;
  left: 0;
  background: white;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${typography.fontSizeTextMedium}px;
    font-weight: ${typography.fontWeightBold};
  }
`

const Image = styled.div<{ img?: string }>`
  background: ${({ img }) => (img ? `url(${img}) center center no-repeat` : `${colors.white}`)};
  background-size: cover;
  height: 136px;
  width: 200px;
`

const NotFound = styled.div`
  background: ${colors.white};
  height: 136px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  margin: 20px 0 8px 0;

  p {
    font-size: ${typography.fontSizeTextMedium}px;
    line-height: ${typography.lineHeightTextMedium};
    width: 200px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

const Wrapper = styled.button`
  width: 200px;
  position: relative;
  border: 0;
  padding: 0;
  background: transparent;
  text-align: start;
  color: ${colors.white};
  cursor: pointer;
`

export { Description, EpisodeNumber, Image, NotFound, Title, Wrapper }
