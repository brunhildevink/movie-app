import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import { Overview } from './pages'
import reportWebVitals from './utils/reportWebVitals'
import './styles/base.css'

const root = ReactDOMClient.createRoot(document.getElementById('root') as HTMLDivElement)

root.render(<Overview />)

reportWebVitals()
