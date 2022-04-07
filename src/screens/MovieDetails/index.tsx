import React from 'react'
import { EpisodeInformation, Image, NotFound, Rating, TitleInformation, Wrapper } from './index.styles'
import { Heading, Icon, Text } from '../../components'
import { colors } from '../../styles'
import { EpisodeDetailed } from '../../lib/types'

interface Props {
  data: EpisodeDetailed
}

const MovieDetails: React.FC<Props> = ({ data }) => (
  <div>
    <Wrapper>
      {data.Poster !== 'N/A' ? (
        <Image img={data.Poster} />
      ) : (
        <NotFound>
          <Icon.Image fill={colors.lightGrey} display="inline" height={100} title="image not found" width={100} />
        </NotFound>
      )}
      <EpisodeInformation>
        <Heading.HeadingFour>
          Episode {data.Episode} — {data.Released}
        </Heading.HeadingFour>
        <Rating>
          <Icon.Star display="inline" fill={colors.yellow} height={24} title="rating" width={24} />
          <Heading.HeadingFour>
            <span>{data.imdbRating}</span>/10
          </Heading.HeadingFour>
        </Rating>
      </EpisodeInformation>
      <TitleInformation>
        <Heading.HeadingTwo>{data.Title}</Heading.HeadingTwo>
        <Text.Regular>{data.Plot}</Text.Regular>
      </TitleInformation>
    </Wrapper>
  </div>
)

export default MovieDetails
