import { useState } from 'react'
import './App.css'
import VisualizationArea from './VisualizationArea'

function App() {
  const [] = useState(0)

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <div style={{ marginRight: '1em' }}>
          <label style={{ display: 'block', marginBottom: '0.5em' }}>API Request</label>
          <input type="text" style={{ display: 'block' }} />
        </div>
        <VisualizationArea />
      </div>
    </>
  )
}

export default App
