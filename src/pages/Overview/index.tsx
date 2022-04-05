import React, { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { FetchParams, MotionPicture } from '../../lib/types'
import logo from '../../assets/images/logo.svg'
import { App, Code, AppHeader, Logo } from './Overview.style'
import { Text } from '../../components'

const Header: React.FC = () => {
  const [seasonIndex, setSeasonIndex] = useState(1)
  const [fetchParams] = useState<FetchParams>({
    t: 'game of thrones',
    plot: 'full',
    season: seasonIndex,
  })

  const { data, error, loading } = useFetch<MotionPicture>('/', fetchParams)

  const totalSeasons = data && data.totalSeasons ? parseInt(data.totalSeasons, 10) : 0

  const onChange = (currentSeasonIndex: number) => {
    setSeasonIndex(currentSeasonIndex)
  }

  const renderSelectSeasons = Array.from(Array(totalSeasons).keys()).map((num) => (
    <option key={num} value={num + 1}>
      {num + 1}
    </option>
  ))

  return (
    <App>
      <AppHeader>
        {loading && <div>Loading...</div>}
        {error && <div>An error occurred...</div>}
        <select key={totalSeasons} onChange={(event) => onChange(parseInt(event.target.value, 10))}>
          {renderSelectSeasons}
        </select>
        <Logo src={logo} alt="logo" />
        <Text.Regular>
          Edit <Code>src/App.tsx</Code> and save to reload.
        </Text.Regular>
      </AppHeader>
    </App>
  )
}

export default Header
