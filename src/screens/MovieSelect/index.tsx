import React from 'react'
import SwiperCore, { Navigation, EffectCoverflow, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { ButtonContainer, Container, EpisodeSelection, Select, Wrapper } from './index.styles'
import image from '../../assets/images/1.1.jpg'
import { Button, Heading } from '../../components'
import Card from '../../components/Card'
import { Episode, EpisodeDetailed } from '../../lib/types'
import 'swiper/swiper-bundle.css'

interface Props {
  episodes: Episode[]
  description: string
  title: string
  totalSeasons: number
  onSelect: (season: number) => void
  onClick: (episode: EpisodeDetailed) => void
  returnFirstEpisode: (episode: EpisodeDetailed) => void
}

const MovieSelect: React.FC<Props> = ({
  episodes,
  description,
  title,
  totalSeasons,
  onSelect,
  onClick,
  returnFirstEpisode,
}) => {
  SwiperCore.use([Navigation, EffectCoverflow, Keyboard])

  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      Season {num + 1}
    </option>
  ))

  const renderCards = episodes.map((episode, index) => (
    <SwiperSlide key={episode.imdbID}>
      <Card id={episode.imdbID} onClick={onClick} returnFirstEpisode={(e) => index === 0 && returnFirstEpisode(e)} />
    </SwiperSlide>
  ))

  return (
    <Wrapper img={image}>
      <Container>
        <div>
          <Select
            key={totalSeasons}
            disabled={!(totalSeasons > 0)}
            onChange={(event) => onSelect(parseInt(event.target.value, 10))}
          >
            {renderSelectSeasons}
          </Select>
          <Heading.HeadingOne>{title}</Heading.HeadingOne>
          <Heading.HeadingThree>{description}</Heading.HeadingThree>
        </div>
      </Container>
      <EpisodeSelection>
        <Swiper
          initialSlide={0}
          spaceBetween={28}
          navigation={{ nextEl: '#swiper-next', prevEl: '#swiper-prev' }}
          breakpoints={{
            480: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            640: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 'auto',
              spaceBetween: 28,
            },
          }}
        >
          {renderCards}
        </Swiper>
        <ButtonContainer>
          <Button.Prev id="swiper-prev" />
          <Button.Next id="swiper-next" />
        </ButtonContainer>
      </EpisodeSelection>
    </Wrapper>
  )
}

export default MovieSelect
